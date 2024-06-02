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

  async updateCustomerDecision(
    parentSpanInst,
    status: any = undefined,
    reference_number: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateCustomerDecision',
      parentSpanInst
    );
    let bh: any = {
      input: {
        status,
        reference_number,
      },
      local: {
        result: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X6FMCc6KoG7g6JYJ(bh, parentSpanInst);
      //appendnew_next_updateCustomerDecision
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HkMltg5CJgqGNkdw',
        spanInst,
        'updateCustomerDecision'
      );
    }
  }

  async updateCustomerComment(
    parentSpanInst,
    comment: any = undefined,
    reference_number: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateCustomerComment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        comment,
        reference_number,
      },
      local: {
        result: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_96rZ9lXM8ILpMPB0(bh, parentSpanInst);
      //appendnew_next_updateCustomerComment
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eCKY02B14uakm07t',
        spanInst,
        'updateCustomerComment'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_X6FMCc6KoG7g6JYJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X6FMCc6KoG7g6JYJ',
      parentSpanInst
    );
    try {
      bh.body = {
        reference_number: bh.input.reference_number,
        status_code: bh.input.status,
        comment: bh.input.comment,
      };

      bh.url = process.env.DB_API_URL + 'quote/customer/decision';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fa3iH4aiDiPFVxbJ(bh, parentSpanInst);
      //appendnew_next_sd_X6FMCc6KoG7g6JYJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X6FMCc6KoG7g6JYJ',
        spanInst,
        'sd_X6FMCc6KoG7g6JYJ'
      );
    }
  }

  async sd_Fa3iH4aiDiPFVxbJ(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.sd_2TKo2vgSRvLN2Kz6(bh, parentSpanInst);
      //appendnew_next_sd_Fa3iH4aiDiPFVxbJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fa3iH4aiDiPFVxbJ');
    }
  }

  async sd_2TKo2vgSRvLN2Kz6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2TKo2vgSRvLN2Kz6',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      bh.local.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_2TKo2vgSRvLN2Kz6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2TKo2vgSRvLN2Kz6',
        spanInst,
        'sd_2TKo2vgSRvLN2Kz6'
      );
    }
  }

  async sd_xMGr4ChFKp1s72Yc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xMGr4ChFKp1s72Yc',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: false,
        error: 'Invalid Request',
      };
      bh.local.status_code = 500;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_xMGr4ChFKp1s72Yc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xMGr4ChFKp1s72Yc',
        spanInst,
        'sd_xMGr4ChFKp1s72Yc'
      );
    }
  }

  async sd_96rZ9lXM8ILpMPB0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_96rZ9lXM8ILpMPB0',
      parentSpanInst
    );
    try {
      bh.body = {
        reference_number: bh.input.reference_number,
        comment: bh.input.comment,
      };

      bh.url = process.env.DB_API_URL + 'quote/customer/comment';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_95bbH19F7Rs1MnL5(bh, parentSpanInst);
      //appendnew_next_sd_96rZ9lXM8ILpMPB0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_96rZ9lXM8ILpMPB0',
        spanInst,
        'sd_96rZ9lXM8ILpMPB0'
      );
    }
  }

  async sd_95bbH19F7Rs1MnL5(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.sd_79VXMTjke37tB2hw(bh, parentSpanInst);
      //appendnew_next_sd_95bbH19F7Rs1MnL5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_95bbH19F7Rs1MnL5');
    }
  }

  async sd_79VXMTjke37tB2hw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_79VXMTjke37tB2hw',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      bh.local.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_79VXMTjke37tB2hw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_79VXMTjke37tB2hw',
        spanInst,
        'sd_79VXMTjke37tB2hw'
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
      (await this.sd_kjLQWc47rqip9yxw(bh, parentSpanInst))
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
  async sd_kjLQWc47rqip9yxw(bh, parentSpanInst) {
    const nodes = ['sd_Fa3iH4aiDiPFVxbJ'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_xMGr4ChFKp1s72Yc(bh, parentSpanInst);
      //appendnew_next_sd_kjLQWc47rqip9yxw
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
