import { Options, Connection, Channel, connect } from 'amqplib';

let ConsumerInstance = null;

interface SendOptions {
    producerQ: string,
    message: any,
    assertQueueOptions?: Options.AssertQueue,
    sendTOQOptions?: Options.Publish,
    messageFromQOptions?: any
}
export class amqpConsumerUtil {
    mqOptions: Options.Connect;
    connection: Connection = null;
    consumerQ: string;
    queueChannelMap: { [key: string]: Channel } = {};
    queueConsumerMap: { [key: string]: any } = {};
    message: any;

    constructor() {

    }

    static getInstance(mqOptions: Options.Connect) {
        if (!ConsumerInstance) {
            if (!mqOptions.hostname || !mqOptions.port) {
                throw new Error("Invalid MQ config");
            }
            ConsumerInstance = new amqpConsumerUtil();
            ConsumerInstance.mqOptions = mqOptions;
        }
        return ConsumerInstance;
    }

    async connect() {
        if (!this.connection) {
            this.connection = await connect(this.mqOptions);
            this.__attachCloseAndErrorListeners(this.connection, 'connection');
        }
    }


    async consume(sendOptions, callback) {
        await this.initiate(sendOptions, callback)
    }

    async initiate(sendOptions, callback) {
        const {
            consumerQ,
            assertQueueOptions,
            messageFromQOptions
        } = sendOptions;
        try {
            await this.connect();
            await this.__createChannel(consumerQ);
            await this.__assertQueue({ q: consumerQ, assertQueueOptions });
            await this.__consumeMessageFromQ({ q: consumerQ, messageFromQOptions }, callback);
        } catch (e) {
            this.destroy();
            throw new Error(e);
        }
    }

    private async __consumeMessageFromQ({ q, messageFromQOptions }, callback) {
        let __this = this;
        this.queueChannelMap[q].consume(q, function (msg) {
            if (msg !== null) {
                callback(msg)
            }
        }, messageFromQOptions);
    }


    protected __attachCloseAndErrorListeners(entity: Connection | Channel, type: 'connection' | 'channel') {
        entity.on('close', () => {
            console.error('debug', `${type} closed :: `, entity);
        });
        entity.on('error', (e) => {
            console.error('debug', `Error occured in ${type}:: `, e);
        });
    }

    protected async __createChannel(q) {
        if (this.queueChannelMap[q]) {
            return this.queueChannelMap[q];
        }
        const channel = await this.connection.createChannel();
        this.__attachCloseAndErrorListeners(channel, 'channel');
        this.queueChannelMap[q] = channel;
        return channel;
    }

    protected __assertQueue({ q, assertQueueOptions }) {
        return this.queueChannelMap[q].assertQueue(q, assertQueueOptions);
    }

    destroy() {
        try {
            this.closeChannels();
            this.connection.close();
        } catch (e) {
            console.error(e);
        }
    }

    async closeChannels() {
        const channelClosePromiseArr: Array<Promise<any>> = [];
        const qArr = [];
        Object.entries(this.queueChannelMap).forEach(([q, channel]) => {
            channelClosePromiseArr.push(channel.close());
            qArr.push(q);
        });
        await Promise.all(channelClosePromiseArr.map((p, index) => ({ index, error: p.catch(err => err) }))).then(res => {
            res.forEach(o => {
                if (!o.error) {
                    delete this.queueChannelMap[qArr[o.index]];
                }
            })
            return this.queueChannelMap;
        });
    }
    private async __consumeMessageFromQ_RPC({ q, messageFromQOptions }, queueID, correlationId, callback) {
        let __this = this;
        if (!('consumerTag' in messageFromQOptions)) {
            messageFromQOptions["consumerTag"] = queueID
        }
        this.queueChannelMap[q].consume(queueID, (msg) => {
            if (msg.properties.correlationId === correlationId) {
                console.log(' [.] Got %s', msg.content.toString());

                if (msg !== null) {
                    callback(msg);
                }
                if (this.queueConsumerMap[queueID]) {
                    this.queueChannelMap[q].ack(msg);
                    this.queueChannelMap[q].cancel(queueID);
                    this.queueChannelMap[q].deleteQueue(queueID);
                    clearTimeout(this.queueConsumerMap[queueID]['timeout']);
                    delete this.queueConsumerMap[queueID][queueID];
                }
            }
        }, messageFromQOptions);
    }
    protected __assertQueue_RPC({ q, assertQueueOptions }, queueId) {
        return this.queueChannelMap[q].assertQueue(queueId, assertQueueOptions);
    }
    sendRPC(sendOptions) {
        const correlationId = this.__generateUuid();
        const {
            producerQ,
            message,
            assertQueueOptions = { durable: true },
            sendTOQOptions = {
                persistent: true
            },
            messageFromQOptions,
            defaultTimeout,
            queueId
        } = sendOptions;
        return new Promise(async (resolve, reject) => {
            try {
                await this.connect();
                await this.__createChannel(producerQ);
                let rpcQueue = await this.__assertQueue_RPC({ q: producerQ, assertQueueOptions }, queueId);
                this.__consumeMessageFromQ_RPC({ q: producerQ, messageFromQOptions }, rpcQueue.queue, correlationId, (data) => {
                    resolve(data);
                });
                let st = {
                    sendTOQOptions, ...{
                        correlationId: correlationId,
                        replyTo: rpcQueue.queue
                    }
                };
                this.queueConsumerMap[rpcQueue.queue] = {
                    'timeout': setTimeout(() => {
                        if (this.queueConsumerMap[rpcQueue.queue]) {
                            this.queueChannelMap[producerQ].cancel(rpcQueue.queue);
                            clearTimeout(this.queueConsumerMap[rpcQueue.queue]['timeout']);
                            delete this.queueConsumerMap[rpcQueue.queue][rpcQueue.queue];
                            reject('No response from RPC callback.');
                        }
                    }, defaultTimeout)
                };
                this.__sendMessageToQ({ q: producerQ, message, sendTOQOptions: st });
            } catch (e) {
                reject(e);
            }
        });
    }
    private __sendMessageToQ({ q, message, sendTOQOptions }) {
        console.log('debug', 'Sending message to the queue...');
        if (!(message instanceof Buffer)) {
            console.log('error', '{message} should be instance of "Buffer"');
        }
        this.queueChannelMap[q].sendToQueue(q, message, sendTOQOptions);

        console.log('debug', 'Message sent...');
    }
    private __generateUuid() {
        return Math.random().toString() + Math.random().toString() + Math.random().toString();
    }
}