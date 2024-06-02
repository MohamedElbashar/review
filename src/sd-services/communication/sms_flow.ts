// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class sms_flow {
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
    this.serviceName = 'sms_flow';
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
      instance = new sms_flow(
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
    //appendnew_flow_sms_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: sms_flow');
    //appendnew_flow_sms_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: sms_flow');
    //appendnew_flow_sms_flow_HttpIn
  }
  //   service flows_sms_flow

  async sendSms(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('sendSms', parentSpanInst);
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
      bh = await this.setSmsUrl(bh, parentSpanInst);
      //appendnew_next_sendSms
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
        'sd_gCI4myj3anuq0k9N',
        spanInst,
        'sendSms'
      );
    }
  }
  //appendnew_flow_sms_flow_start

  async setSmsUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setSmsUrl', parentSpanInst);
    try {
      bh.url = process.env.COMM_MS_URL + 'send-sms';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cr8p5wQztijzH9N5(bh, parentSpanInst);
      //appendnew_next_setSmsUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zfTOL3MzQeT1hK7j',
        spanInst,
        'setSmsUrl'
      );
    }
  }

  async sd_cr8p5wQztijzH9N5(bh, parentSpanInst) {
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
      bh = await this.setResponse(bh, parentSpanInst);
      //appendnew_next_sd_cr8p5wQztijzH9N5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cr8p5wQztijzH9N5');
    }
  }

  async setResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: bh.response['statusCode'] == 200,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rlVg2QoZnZ7VxMP5',
        spanInst,
        'setResponse'
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
  //appendnew_flow_sms_flow_Catch
}
