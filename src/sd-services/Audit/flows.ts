// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { PubsubUtil } from '../../utils/ndefault-pub-sub/listen/listen'; //_splitter_
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
    PubsubUtil.getInstance().on('audit_event', async (data, spanInst) =>
      this.sd_iDRd7yR9W5Nwh3Ty(spanInst, data)
    );
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

  async logApiAudit(
    parentSpanInst,
    key = '',
    identifier = '',
    request: any = undefined,
    response: any = undefined,
    duration = 0,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'logApiAudit',
      parentSpanInst
    );
    let bh: any = {
      input: {
        key,
        identifier,
        request,
        response,
        duration,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hWlJJUcNvGakHAyc(bh, parentSpanInst);
      //appendnew_next_logApiAudit
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
        'sd_BMrEuRwReT4VFZjF',
        spanInst,
        'logApiAudit'
      );
    }
  }
  async sd_iDRd7yR9W5Nwh3Ty(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_iDRd7yR9W5Nwh3Ty',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditApi(bh, parentSpanInst);
      //appendnew_next_sd_iDRd7yR9W5Nwh3Ty
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iDRd7yR9W5Nwh3Ty',
        spanInst,
        'sd_iDRd7yR9W5Nwh3Ty'
      );
    }
  }

  //appendnew_flow_flows_start

  async sd_hWlJJUcNvGakHAyc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hWlJJUcNvGakHAyc',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/api_audit/create';

      if (bh.input.request) {
        try {
          bh.REQ = bh.input.request;
          if (typeof bh.REQ != 'string') bh.REQ = JSON.stringify(bh.REQ);
        } catch (err) {}
      }
      if (bh.input.response) {
        try {
          bh.RES = bh.input.response;
          if (typeof bh.RES != 'string') bh.RES = JSON.stringify(bh.RES);
        } catch (err) {}
      }
      if (bh.input.duration) {
        bh.input.duration = bh.input.duration / 1000;
      }
      bh.payload = {
        api_audit: {
          key: bh.input.key.toString() || 'unknown-api',
          identifier: bh.input.identifier.toString() || 'unknown-api',
          request: bh.REQ || null,
          response: bh.RES || null,
          duration: bh.input.duration || null,
        },
      };
      bh.audit_event = 'audit_event';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JNGoy4UiTqJusKwz(bh, parentSpanInst);
      //appendnew_next_sd_hWlJJUcNvGakHAyc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hWlJJUcNvGakHAyc',
        spanInst,
        'sd_hWlJJUcNvGakHAyc'
      );
    }
  }

  async sd_JNGoy4UiTqJusKwz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JNGoy4UiTqJusKwz',
      parentSpanInst
    );
    try {
      PubsubUtil.getInstance().emit(bh.audit_event, bh, spanInst);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JNGoy4UiTqJusKwz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JNGoy4UiTqJusKwz',
        spanInst,
        'sd_JNGoy4UiTqJusKwz'
      );
    }
  }

  async auditApi(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.payload,
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
      //appendnew_next_auditApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MvgNfYTQKgelNqtM');
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
      (await this.sd_B2TjPJQkcDYM0tXr(bh, parentSpanInst))
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
  async sd_B2TjPJQkcDYM0tXr(bh, parentSpanInst) {
    const nodes = ['sd_MvgNfYTQKgelNqtM'];
    if (nodes.includes(bh.errorSource)) {
      //appendnew_next_sd_B2TjPJQkcDYM0tXr
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
