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

  async logApiAudit(
    parentSpanInst,
    key = '',
    identifier = '',
    request: any = undefined,
    response: any = undefined,
    apiStartTime = 0,
    apiEndTime = 0,
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
        apiStartTime,
        apiEndTime,
        duration,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nfc5f1K9if5S9H45(bh, parentSpanInst);
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
        'sd_adP7c8WAjVuwMbke',
        spanInst,
        'logApiAudit'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_nfc5f1K9if5S9H45(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nfc5f1K9if5S9H45',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/api_audit/create';

      if (bh.input.request) {
        try {
          bh.REQ = JSON.stringify(bh.input.request);
        } catch (err) {
          bh.REQ = bh.input.request;
        }
      }
      if (bh.input.response) {
        try {
          bh.RES = JSON.stringify(bh.input.response);
        } catch (err) {
          bh.RES = bh.input.response;
        }
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
          duration: bh.apiDuration || bh.input.duration || null,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I4czAUKuRT3gnTcd(bh, parentSpanInst);
      //appendnew_next_sd_nfc5f1K9if5S9H45
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nfc5f1K9if5S9H45',
        spanInst,
        'sd_nfc5f1K9if5S9H45'
      );
    }
  }

  async sd_I4czAUKuRT3gnTcd(bh, parentSpanInst) {
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
      //appendnew_next_sd_I4czAUKuRT3gnTcd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I4czAUKuRT3gnTcd');
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
      (await this.sd_KxbLHn2iQe2yL0s8(bh, parentSpanInst))
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
  async sd_KxbLHn2iQe2yL0s8(bh, parentSpanInst) {
    const nodes = ['sd_Xd2dy2M81qGYzmhv'];
    if (nodes.includes(bh.errorSource)) {
      //appendnew_next_sd_KxbLHn2iQe2yL0s8
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
