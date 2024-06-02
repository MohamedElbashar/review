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

  async createCaseDefinition(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createCaseDefinition',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq1(bh, parentSpanInst);
      //appendnew_next_createCaseDefinition
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
        'sd_BjxjX2wYg3mKAE0h',
        spanInst,
        'createCaseDefinition'
      );
    }
  }

  async caseDefinitionFetchByCaseType(
    parentSpanInst,
    body: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'caseDefinitionFetchByCaseType',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq3(bh, parentSpanInst);
      //appendnew_next_caseDefinitionFetchByCaseType
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
        'sd_m3tsUyn1ipwwSVH6',
        spanInst,
        'caseDefinitionFetchByCaseType'
      );
    }
  }

  async createCaseInstance(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createCaseInstance',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq2(bh, parentSpanInst);
      //appendnew_next_createCaseInstance
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
        'sd_gnyd4LCEo4Q1I4J4',
        spanInst,
        'createCaseInstance'
      );
    }
  }

  async sendSignal(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sendSignal',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq4(bh, parentSpanInst);
      //appendnew_next_sendSignal
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
        'sd_qCmBjio9zV8AsRSi',
        spanInst,
        'sendSignal'
      );
    }
  }

  async fetchSignal(parentSpanInst, cid: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'fetchSignal',
      parentSpanInst
    );
    let bh: any = {
      input: {
        cid,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq5(bh, parentSpanInst);
      //appendnew_next_fetchSignal
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
        'sd_B2ChGsNSg1y1T0sG',
        spanInst,
        'fetchSignal'
      );
    }
  }

  async triggerSignal(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'triggerSignal',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq6(bh, parentSpanInst);
      //appendnew_next_triggerSignal
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
        'sd_TtzJytWPo5Q6hlbo',
        spanInst,
        'triggerSignal'
      );
    }
  }

  async saveSignal(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'saveSignal',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq7(bh, parentSpanInst);
      //appendnew_next_saveSignal
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
        'sd_yJckgbqJmWEO8z9S',
        spanInst,
        'saveSignal'
      );
    }
  }

  async signalCheck(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'signalCheck',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        signal_exists: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSignals(bh, parentSpanInst);
      //appendnew_next_signalCheck
      return (
        // formatting output variables
        {
          input: {},
          local: {
            signal_exists: bh.local.signal_exists,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Chw6w3ZoOkrlsHUP',
        spanInst,
        'signalCheck'
      );
    }
  }
  //appendnew_flow_flows_start

  async prepReq1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq1', parentSpanInst);
    try {
      bh.url = process.env.ALPHA_URL + `/caseservice/case/definition/create`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseServiceCall1(bh, parentSpanInst);
      //appendnew_next_prepReq1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_25Nat4eX0ld368hl',
        spanInst,
        'prepReq1'
      );
    }
  }

  async caseServiceCall1(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_caseServiceCall1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OARL5XZ8uBzIj0ys');
    }
  }

  async prepReq3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq3', parentSpanInst);
    try {
      bh.url =
        process.env.ALPHA_URL +
        `/caseservice/case/definition/fetch-by-case-type`;

      log.info(bh.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseServiceCall3(bh, parentSpanInst);
      //appendnew_next_prepReq3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JPCdg1alrxq0DY6l',
        spanInst,
        'prepReq3'
      );
    }
  }

  async caseServiceCall3(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_caseServiceCall3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QX0ZMXV52BEHfNUe');
    }
  }

  async prepReq2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq2', parentSpanInst);
    try {
      bh.url = process.env.ALPHA_URL + `/caseservice/case/instance/create`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseServiceCall2(bh, parentSpanInst);
      //appendnew_next_prepReq2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EIpjgbiBA6ORdTEo',
        spanInst,
        'prepReq2'
      );
    }
  }

  async caseServiceCall2(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_caseServiceCall2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CZq9R8oI9KF7jzXr');
    }
  }

  async prepReq4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq4', parentSpanInst);
    try {
      bh.url = process.env.ALPHA_URL + `/caseservice/case/instance/signal/send`;
      bh.body = {
        cid: bh.input.body?.cid,
        signalName: bh.input.body?.signalName,
        piid: Number(bh.input.body.piid),
        variables: bh.input.body?.variables || {},
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseServiceCall4(bh, parentSpanInst);
      //appendnew_next_prepReq4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7prMQ3CPxjYe34v0',
        spanInst,
        'prepReq4'
      );
    }
  }

  async caseServiceCall4(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_caseServiceCall4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJ1Fvjs5CtsfbKxd');
    }
  }

  async prepReq5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq5', parentSpanInst);
    try {
      bh.url =
        process.env.ALPHA_URL + `/caseservice/case/instance/signal/fetch`;
      bh.body = {
        cid: Number(bh.input?.cid),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseServiceCall5(bh, parentSpanInst);
      //appendnew_next_prepReq5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KVmkmoNu5sa2Wo6i',
        spanInst,
        'prepReq5'
      );
    }
  }

  async caseServiceCall5(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_caseServiceCall5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XfG79omchkxLSCgv');
    }
  }

  async prepReq6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq6', parentSpanInst);
    try {
      bh.url =
        process.env.ALPHA_URL + `/bpmservice/process/instance/signal/send`;
      bh.body = {
        processInstanceId:
          bh.input.body.piid || bh.input.body.processInstanceId,
        metadata: {
          containerId: process.env.BPM_CONTAINER_ID,
        },
        signalName: bh.input.body?.signal_name || bh.input.body?.signalName,
        variables: bh.input.body?.variables || {},
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.bpmserviceCall1(bh, parentSpanInst);
      //appendnew_next_prepReq6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rvBL7h4TN5cP6nm7',
        spanInst,
        'prepReq6'
      );
    }
  }

  async bpmserviceCall1(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_bpmserviceCall1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GPr1UYa0LtuKfLFF');
    }
  }

  async prepReq7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq7', parentSpanInst);
    try {
      bh.url = process.env.ALPHA_URL + `/caseservice/case/instance/signal/save`;

      const body = bh.input.body;
      bh.body = {
        cid: Number(body.cid),
        piid: Number(body.piid),
        signalName: body?.signalName || body?.signal_name,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkSignals(bh, parentSpanInst);
      //appendnew_next_prepReq7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qC5JWg9huyfqZyhS',
        spanInst,
        'prepReq7'
      );
    }
  }

  async checkSignals(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkSignals',
      parentSpanInst
    );
    try {
      let outputVariables = await this.signalCheck(spanInst, bh.body);
      bh.signal_exists = outputVariables.local.signal_exists;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_upGBZ5k0xFxGfwfK(bh, parentSpanInst);
      //appendnew_next_checkSignals
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RXukVMzHHG9mGtct',
        spanInst,
        'checkSignals'
      );
    }
  }

  async sd_upGBZ5k0xFxGfwfK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_upGBZ5k0xFxGfwfK',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.signal_exists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9jdQWIym8q0jxEvB(bh, parentSpanInst);
      } else {
        bh = await this.caseServiceCall7(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_upGBZ5k0xFxGfwfK',
        spanInst,
        'sd_upGBZ5k0xFxGfwfK'
      );
    }
  }

  async sd_9jdQWIym8q0jxEvB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9jdQWIym8q0jxEvB',
      parentSpanInst
    );
    try {
      log.info(
        `[CID::${
          bh.input.body.cid
        }][SAVE_SIGNAL][SIGNAL_ALREADY_EXISTS][${JSON.stringify(
          bh.input?.body
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_9jdQWIym8q0jxEvB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9jdQWIym8q0jxEvB',
        spanInst,
        'sd_9jdQWIym8q0jxEvB'
      );
    }
  }

  async caseServiceCall7(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      //appendnew_next_caseServiceCall7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uKA0DPvu82LH0zOQ');
    }
  }

  async getSignals(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSignals',
      parentSpanInst
    );
    try {
      let outputVariables = await this.fetchSignal(spanInst, bh.input.body.cid);
      bh.signals = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.verifySignalExists(bh, parentSpanInst);
      //appendnew_next_getSignals
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BJodCNyhfRBhYc0A',
        spanInst,
        'getSignals'
      );
    }
  }

  async verifySignalExists(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'verifySignalExists',
      parentSpanInst
    );
    try {
      bh.signals = bh.signals?.payload;

      const isObjectExists = (arr, criteria) =>
        arr.some((obj) =>
          Object.entries(criteria).every(([key, value]) => obj[key] === value)
        );

      bh.local.signal_exists = isObjectExists(bh.signals, bh.input.body);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_verifySignalExists
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8xqCd3v3xYFbkDdJ',
        spanInst,
        'verifySignalExists'
      );
    }
  }

  async sd_hh1v1rYAapgBYAPy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hh1v1rYAapgBYAPy',
      parentSpanInst
    );
    try {
      //Remove this node once we get fix from Caseservice
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_hh1v1rYAapgBYAPy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hh1v1rYAapgBYAPy',
        spanInst,
        'sd_hh1v1rYAapgBYAPy'
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
    if (
      false ||
      (await this.sd_M9ke9dViGEjkSC0m(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_M9ke9dViGEjkSC0m(bh, parentSpanInst) {
    const nodes = ['sd_BJodCNyhfRBhYc0A', 'sd_8xqCd3v3xYFbkDdJ'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_hh1v1rYAapgBYAPy(bh, parentSpanInst);
      //appendnew_next_sd_M9ke9dViGEjkSC0m
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
