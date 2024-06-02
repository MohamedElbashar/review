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

  async getRenewalList(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getRenewalList',
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
      bh = await this.setUrl(bh, parentSpanInst);
      //appendnew_next_getRenewalList
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
        'sd_84cYpUCTZtlyJRot',
        spanInst,
        'getRenewalList'
      );
    }
  }

  async renewPolicy(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'renewPolicy',
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
      bh = await this.sd_5FGfJZlxrm2CErqp(bh, parentSpanInst);
      //appendnew_next_renewPolicy
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
        'sd_m6uNqhdBharUZ8DI',
        spanInst,
        'renewPolicy'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'customer/renewals';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vgix40VcXVyZ8ygI(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EUOayYzNUWgS6uEj',
        spanInst,
        'setUrl'
      );
    }
  }

  async sd_vgix40VcXVyZ8ygI(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.sd_OYZ3F10VsuoQPco6(bh, parentSpanInst);
      //appendnew_next_sd_vgix40VcXVyZ8ygI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vgix40VcXVyZ8ygI');
    }
  }

  async sd_OYZ3F10VsuoQPco6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OYZ3F10VsuoQPco6',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OYZ3F10VsuoQPco6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OYZ3F10VsuoQPco6',
        spanInst,
        'sd_OYZ3F10VsuoQPco6'
      );
    }
  }

  async sd_5FGfJZlxrm2CErqp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5FGfJZlxrm2CErqp',
      parentSpanInst
    );
    try {
      bh.url = bh.url = process.env.MS_API_URL + 'policy-renewal';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.triggerRenewal(bh, parentSpanInst);
      //appendnew_next_sd_5FGfJZlxrm2CErqp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5FGfJZlxrm2CErqp',
        spanInst,
        'sd_5FGfJZlxrm2CErqp'
      );
    }
  }

  async triggerRenewal(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 180000,
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

      bh.response = responseMsg;
      bh = await this.sd_CdtzewRzOSp1U7In(bh, parentSpanInst);
      //appendnew_next_triggerRenewal
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PlStGyGpPrrTf3Yn');
    }
  }

  async sd_CdtzewRzOSp1U7In(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CdtzewRzOSp1U7In',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_CdtzewRzOSp1U7In
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CdtzewRzOSp1U7In',
        spanInst,
        'sd_CdtzewRzOSp1U7In'
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
