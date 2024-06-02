// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class flows {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'flows';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new flows(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flows');
    //appendnew_flow_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: flows');
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async verifyDcpToken(parentSpanInst, token: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'verifyDcpToken',
      parentSpanInst
    );
    let bh: any = {
      input: {
        token,
      },
      local: {
        userInfo: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1CCt5KShiw1ghLD2(bh, parentSpanInst);
      //appendnew_next_verifyDcpToken
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userInfo: bh.local.userInfo,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fxJSHM509XASL81X',
        spanInst,
        'verifyDcpToken'
      );
    }
  }

  async redisCheck(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'redisCheck',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a7kYbEXPGpiAyFn1(bh, parentSpanInst);
      //appendnew_next_redisCheck
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5RHhNDCximV7cF4U',
        spanInst,
        'redisCheck'
      );
    }
  }

  async redisTest(parentSpanInst, token: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('redisTest', parentSpanInst);
    let bh: any = {
      input: {
        token,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.test2(bh, parentSpanInst);
      //appendnew_next_redisTest
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CFX1cBhHYm5bJecZ',
        spanInst,
        'redisTest'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_1CCt5KShiw1ghLD2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1CCt5KShiw1ghLD2',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');
      const CryptoJS = require('crypto-js');
      // crypto
      const decrypt = (ciphertext, decryptkey = null) => {
        const secertKey = process.env.DCP_CRYPTO_SECRET;
        const secretKeyHash = CryptoJS.SHA256(secertKey).toString();
        if (decryptkey != null) {
          const bytes = CryptoJS.AES.decrypt(ciphertext, decryptkey);
          const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
          return decryptedData;
        } else {
          const bytes = CryptoJS.AES.decrypt(ciphertext, secretKeyHash);
          const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
          return decryptedData;
        }
      };
      // JWT
      const verifyToken = (token, jwtSecret) => {
        if (token && token !== 'null') {
          try {
            const decoded = jwt.verify(token, jwtSecret);
            let payload = decoded.data;
            payload = JSON.parse(decrypt(payload));
            return payload;
          } catch (error) {
            return false;
          }
        } else {
          return false;
        }
      };

      bh.local.userInfo = verifyToken(
        bh.input.token,
        process.env.DCP_JWT_SECRET
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1CCt5KShiw1ghLD2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1CCt5KShiw1ghLD2',
        spanInst,
        'sd_1CCt5KShiw1ghLD2'
      );
    }
  }

  async sd_a7kYbEXPGpiAyFn1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a7kYbEXPGpiAyFn1',
      parentSpanInst
    );
    try {
      const redis = require('redis');
      const redisURL = `redis://${process.env.DCP_REDIS_HOST}:${process.env.DCP_REDIS_PORT}`;
      console.log(redisURL);
      const redis_client = await redis.createClient({
        // url: redisURL
        host: process.env.DCP_REDIS_HOST,
        port: process.env.DCP_REDIS_PORT,
      });

      await redis_client.connect();
      console.log(redis_client, 'redis_client');
      try {
        const data = await redis_client.get('USR_TOKEN_1090697168');
        if (data) {
          bh.local.data = JSON.parse(data);
          console.log(JSON.parse(data), 'JSON.parse(data)');
        } else {
          bh.local.data = { msg: 'notfound', status: false };
          console.log('no data');
        }
      } catch (error) {
        console.log('error connecting redis');
        bh.local.data = { msg: 'error', err: error, status: false };
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_a7kYbEXPGpiAyFn1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a7kYbEXPGpiAyFn1',
        spanInst,
        'sd_a7kYbEXPGpiAyFn1'
      );
    }
  }

  async test2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('test2', parentSpanInst);
    try {
      const Redis = require('ioredis');

      let sentinels = [
        { host: '10.0.9.172', port: 26379 },
        { host: '10.0.9.185', port: 26379 },
        { host: '10.0.9.203', port: 26379 },
      ];

      async function connectToRedis() {
        return new Promise((resolve, reject) => {
          const client = new Redis({
            sentinels: sentinels,
            name: 'mymaster',
            maxRetriesPerRequest: null,
          });

          client.on('connect', () => {
            console.log('Redis Connection Successful');
            resolve(client);
          });

          client.on('error', (err) => {
            console.log('REDIS Client ERROR', JSON.stringify(err));
            reject(err);
          });
        });
      }

      async function getDataFromRedis() {
        try {
          const client: any = await connectToRedis();
          console.log(`USR_TOKEN_${bh.input.token}`);
          console.log(
            client.get(`USR_TOKEN_${bh.input.token}`),
            'client get function'
          );

          return await client.get(`USR_TOKEN_${bh.input.token}`);
        } catch (error) {
          console.error('Error occurred while getting data from Redis:', error);
          throw error;
        }
      }

      async function main() {
        try {
          const result = await getDataFromRedis();
          bh.local.result = { status: true, result };
          console.log('redis get data result', result);
          // Continue with your code after receiving the response
        } catch (error) {
          bh.local.result = { status: false, result: error };
          // Handle error
          console.error('redis get data error occurred:', error);
        }
      }

      main(); // Call main function to start execution

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_test2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rKLtnjeXFrqA74TE',
        spanInst,
        'test2'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_flows_Catch
}
