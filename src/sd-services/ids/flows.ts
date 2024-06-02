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

  async generateToken(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generateToken',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        token: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hEBzWFMloffDCqxp(bh, parentSpanInst);
      //appendnew_next_generateToken
      return (
        // formatting output variables
        {
          input: {},
          local: {
            token: bh.local.token,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kCoc3COsmecq9Uey',
        spanInst,
        'generateToken'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_hEBzWFMloffDCqxp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hEBzWFMloffDCqxp',
      parentSpanInst
    );
    try {
      const querystring = require('querystring');

      bh.url = `${process.env.IDS_PAYMENT_URL}/token`;
      bh.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      let body = {
        client_id: process.env.IDS_PAYMENT_CLIENT,
        client_secret: process.env.IDS_PAYMENT_SECRET,
        grant_type: 'client_credentials',
        rejectUnauthorized: true,
      };

      bh.payload = querystring.stringify(body);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9tP4u3WsE6m8D5Xa(bh, parentSpanInst);
      //appendnew_next_sd_hEBzWFMloffDCqxp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hEBzWFMloffDCqxp',
        spanInst,
        'sd_hEBzWFMloffDCqxp'
      );
    }
  }

  async sd_9tP4u3WsE6m8D5Xa(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
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
      bh = await this.sd_wyMQlI0VIMSO6CZY(bh, parentSpanInst);
      //appendnew_next_sd_9tP4u3WsE6m8D5Xa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9tP4u3WsE6m8D5Xa');
    }
  }

  async sd_wyMQlI0VIMSO6CZY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wyMQlI0VIMSO6CZY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.result['payload'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_p4Nhu5KuDhCQ4RW8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wyMQlI0VIMSO6CZY',
        spanInst,
        'sd_wyMQlI0VIMSO6CZY'
      );
    }
  }

  async sd_p4Nhu5KuDhCQ4RW8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p4Nhu5KuDhCQ4RW8',
      parentSpanInst
    );
    try {
      bh.local.token = `${bh.result['payload']['token_type']} ${bh.result['payload']['access_token']}`;
      bh.expiry = bh.result['payload']['expires_in'];

      console.log(bh.local.token);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_p4Nhu5KuDhCQ4RW8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p4Nhu5KuDhCQ4RW8',
        spanInst,
        'sd_p4Nhu5KuDhCQ4RW8'
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
