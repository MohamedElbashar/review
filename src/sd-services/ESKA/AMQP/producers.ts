// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { Producer } from '../../../utils/ndefault-amqp-producer/AMQPProducer/Producer'; //_splitter_
//append_imports_end
export class producers {
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
    this.serviceName = 'producers';
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
      instance = new producers(
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
    //appendnew_flow_producers_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: producers');
    //appendnew_flow_producers_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: producers');
    //appendnew_flow_producers_HttpIn
  }
  //   service flows_producers

  async njamUpload(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'njamUpload',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata1(bh, parentSpanInst);
      //appendnew_next_njamUpload
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jJMX1xYVCdb156CK',
        spanInst,
        'njamUpload'
      );
    }
  }

  async createPolicy(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createPolicy',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata2(bh, parentSpanInst);
      //appendnew_next_createPolicy
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rmozS24qxRhc3Mec',
        spanInst,
        'createPolicy'
      );
    }
  }

  async notifyEska(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'notifyEska',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata3(bh, parentSpanInst);
      //appendnew_next_notifyEska
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4cFBJvQIt1Y9PXSv',
        spanInst,
        'notifyEska'
      );
    }
  }

  async generateReports(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generateReports',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata4(bh, parentSpanInst);
      //appendnew_next_generateReports
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_caNcJG1O4hwk9AD9',
        spanInst,
        'generateReports'
      );
    }
  }

  async getPolicyFile(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyFile',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata5(bh, parentSpanInst);
      //appendnew_next_getPolicyFile
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C67Do9n4rtd5mL1y',
        spanInst,
        'getPolicyFile'
      );
    }
  }

  async sendEmail(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata6(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KZGp52aLLy5QKQbM',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sendPaymentDetails(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sendPaymentDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.amqpMetadata7(bh, parentSpanInst);
      //appendnew_next_sendPaymentDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RNxddIAsI6S2o07q',
        spanInst,
        'sendPaymentDetails'
      );
    }
  }
  //appendnew_flow_producers_start

  async amqpMetadata1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata1',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][NJAM_UPLOAD_QUEUE][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jYsK5DgeAqnEOEfY(bh, parentSpanInst);
      //appendnew_next_amqpMetadata1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ulQuyVNqYUNGaZEN',
        spanInst,
        'amqpMetadata1'
      );
    }
  }

  async sd_jYsK5DgeAqnEOEfY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jYsK5DgeAqnEOEfY',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'NJAM_UPLOAD',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log1(bh, parentSpanInst);
      //appendnew_next_sd_jYsK5DgeAqnEOEfY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jYsK5DgeAqnEOEfY',
        spanInst,
        'sd_jYsK5DgeAqnEOEfY'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][NJAM_UPLOAD_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3NaLB8lZ5D123m3h',
        spanInst,
        'log1'
      );
    }
  }

  async amqpMetadata2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata2',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][CREATE_POLICY_QUEUE][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3JKHxIlXYtm19w8e(bh, parentSpanInst);
      //appendnew_next_amqpMetadata2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HYr2QVsKojTlJMkS',
        spanInst,
        'amqpMetadata2'
      );
    }
  }

  async sd_3JKHxIlXYtm19w8e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3JKHxIlXYtm19w8e',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'CREATE_POLICY',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log2(bh, parentSpanInst);
      //appendnew_next_sd_3JKHxIlXYtm19w8e
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3JKHxIlXYtm19w8e',
        spanInst,
        'sd_3JKHxIlXYtm19w8e'
      );
    }
  }

  async log2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log2', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][CREATE_POLICY_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_30j0yur08mR3CT5v',
        spanInst,
        'log2'
      );
    }
  }

  async amqpMetadata3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata3',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][NOTIFY_ESKA_QUEUE][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rVAcfAKIjSxWq3fv(bh, parentSpanInst);
      //appendnew_next_amqpMetadata3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2y8Ollj1GZeowUmi',
        spanInst,
        'amqpMetadata3'
      );
    }
  }

  async sd_rVAcfAKIjSxWq3fv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rVAcfAKIjSxWq3fv',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'NOTIFY_ESKA',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log3(bh, parentSpanInst);
      //appendnew_next_sd_rVAcfAKIjSxWq3fv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rVAcfAKIjSxWq3fv',
        spanInst,
        'sd_rVAcfAKIjSxWq3fv'
      );
    }
  }

  async log3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log3', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][NOTIFY_ESKA_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jfvkRzyaEn4PKDFb',
        spanInst,
        'log3'
      );
    }
  }

  async amqpMetadata4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata4',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][GENERATE_REPORT_QUEUE][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T1fJSuA0KJQG1MgI(bh, parentSpanInst);
      //appendnew_next_amqpMetadata4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TmSEkljcxiXpZhtk',
        spanInst,
        'amqpMetadata4'
      );
    }
  }

  async sd_T1fJSuA0KJQG1MgI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T1fJSuA0KJQG1MgI',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'GENERATE_REPORT',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log4(bh, parentSpanInst);
      //appendnew_next_sd_T1fJSuA0KJQG1MgI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T1fJSuA0KJQG1MgI',
        spanInst,
        'sd_T1fJSuA0KJQG1MgI'
      );
    }
  }

  async log4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log4', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][GENERATE_REPORT_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NJQ09xxJ6R3Ju6DJ',
        spanInst,
        'log4'
      );
    }
  }

  async amqpMetadata5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata5',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][GET_POLICY_FILE_QUEUE][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XJogAdBfjTHMyVX8(bh, parentSpanInst);
      //appendnew_next_amqpMetadata5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c7zwTVGIBPudKyRS',
        spanInst,
        'amqpMetadata5'
      );
    }
  }

  async sd_XJogAdBfjTHMyVX8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XJogAdBfjTHMyVX8',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'GET_POLICY_FILE',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log5(bh, parentSpanInst);
      //appendnew_next_sd_XJogAdBfjTHMyVX8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XJogAdBfjTHMyVX8',
        spanInst,
        'sd_XJogAdBfjTHMyVX8'
      );
    }
  }

  async log5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log5', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][GET_POLICY_FILE_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_05QMgQXUuUSHEKcW',
        spanInst,
        'log5'
      );
    }
  }

  async amqpMetadata6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata6',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][SEND_EMAIL_QUEUE][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GDgaxBW2B9Ftrrcl(bh, parentSpanInst);
      //appendnew_next_amqpMetadata6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R78JRAM1GC3bfjiO',
        spanInst,
        'amqpMetadata6'
      );
    }
  }

  async sd_GDgaxBW2B9Ftrrcl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GDgaxBW2B9Ftrrcl',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'SEND_EMAIL',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log6(bh, parentSpanInst);
      //appendnew_next_sd_GDgaxBW2B9Ftrrcl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GDgaxBW2B9Ftrrcl',
        spanInst,
        'sd_GDgaxBW2B9Ftrrcl'
      );
    }
  }

  async log6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log6', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][SEND_EMAIL_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YwqMicMqRo9rdWO8',
        spanInst,
        'log6'
      );
    }
  }

  async amqpMetadata7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'amqpMetadata7',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.message = {
        quote_id: body.quote_id,
        metadata: body.metadata,
        piid: body.piid,
        signal_name: body.signal_name,
        product_id: body.product_id,
        cid: body.cid,
      };

      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][SEND_PAYMENT_DETAILS][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EJPEsmY0aIgdKBaG(bh, parentSpanInst);
      //appendnew_next_amqpMetadata7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6LpQMux9dJaiiHp0',
        spanInst,
        'amqpMetadata7'
      );
    }
  }

  async sd_EJPEsmY0aIgdKBaG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EJPEsmY0aIgdKBaG',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'amqp-config',
        'sd_izLS69KhunqTRXVD'
      );
      const amqpProducerInstance = Producer.getInstance(configObj);

      let bufferMsg = null;
      bufferMsg = Buffer.from(JSON.stringify(bh.message));

      await amqpProducerInstance.send({
        producerQ: 'SEND_PAYMENT_DETAILS',
        message: bufferMsg,
        sendTOQOptions: { persistent: true },
        assertQueueOptions: { durable: true },
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log7(bh, parentSpanInst);
      //appendnew_next_sd_EJPEsmY0aIgdKBaG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EJPEsmY0aIgdKBaG',
        spanInst,
        'sd_EJPEsmY0aIgdKBaG'
      );
    }
  }

  async log7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log7', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.message.quote_id}][PRODUCT_ID::${bh.message?.product_id}][AMQP_PRODUCER][SEND_PAYMENT_DETAILS_QUEUE][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a9NagDRLDb9odCr9',
        spanInst,
        'log7'
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
  //appendnew_flow_producers_Catch
}
