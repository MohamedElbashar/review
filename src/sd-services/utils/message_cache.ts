// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class message_cache {
  public systemMessages: any;
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
    this.serviceName = 'message_cache';
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
      instance = new message_cache(
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
    //appendnew_flow_message_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: message_cache');
    //appendnew_flow_message_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: message_cache');
    //appendnew_flow_message_cache_HttpIn
  }
  //   service flows_message_cache

  async getMessage(
    parentSpanInst,
    messageCode = '',
    localeCode = 'en',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getMessage',
      parentSpanInst
    );
    let bh: any = {
      input: {
        messageCode,
        localeCode,
      },
      local: {
        message: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMsgCache(bh, parentSpanInst);
      //appendnew_next_getMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {
            message: bh.local.message,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GGyHN87swpC76C8b',
        spanInst,
        'getMessage'
      );
    }
  }
  //appendnew_flow_message_cache_start

  async getMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMsgCache',
      parentSpanInst
    );
    try {
      bh.local.allMessages = this.systemMessages;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkCache(bh, parentSpanInst);
      //appendnew_next_getMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wAeFSPmlJwA5QvsV',
        spanInst,
        'getMsgCache'
      );
    }
  }

  async checkCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkCache',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.allMessages,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_557lxqDkj10vp8sb(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.allMessages,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_557lxqDkj10vp8sb(bh, parentSpanInst);
      } else {
        bh = await this.sd_2CGeD9ExbRhtj3l8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gGhHpUmUhOzMNF1e',
        spanInst,
        'checkCache'
      );
    }
  }

  async sd_557lxqDkj10vp8sb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_557lxqDkj10vp8sb',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + 'utils/system-messages';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vAwb3RGDohxE0rr3(bh, parentSpanInst);
      //appendnew_next_sd_557lxqDkj10vp8sb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_557lxqDkj10vp8sb',
        spanInst,
        'sd_557lxqDkj10vp8sb'
      );
    }
  }

  async sd_vAwb3RGDohxE0rr3(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
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

      bh.local.allMessages = responseMsg;
      bh = await this.sd_UP61i6p1Om7Rkaei(bh, parentSpanInst);
      //appendnew_next_sd_vAwb3RGDohxE0rr3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vAwb3RGDohxE0rr3');
    }
  }

  async sd_UP61i6p1Om7Rkaei(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UP61i6p1Om7Rkaei',
      parentSpanInst
    );
    try {
      bh.local.allMessages = bh.local.allMessages['payload'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCache(bh, parentSpanInst);
      //appendnew_next_sd_UP61i6p1Om7Rkaei
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UP61i6p1Om7Rkaei',
        spanInst,
        'sd_UP61i6p1Om7Rkaei'
      );
    }
  }

  async setMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMsgCache',
      parentSpanInst
    );
    try {
      this.systemMessages = bh.local.allMessages;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2CGeD9ExbRhtj3l8(bh, parentSpanInst);
      //appendnew_next_setMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HOY9Iu1wghRBfJrh',
        spanInst,
        'setMsgCache'
      );
    }
  }

  async sd_2CGeD9ExbRhtj3l8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2CGeD9ExbRhtj3l8',
      parentSpanInst
    );
    try {
      let msg = bh.local.allMessages.find(
        (x) => x.message_code == bh.input.messageCode
      );
      bh.local.message = msg[bh.input.localeCode] || msg['en'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_2CGeD9ExbRhtj3l8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2CGeD9ExbRhtj3l8',
        spanInst,
        'sd_2CGeD9ExbRhtj3l8'
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
  //appendnew_flow_message_cache_Catch
}
