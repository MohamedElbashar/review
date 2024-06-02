// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class system_message_cache {
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
    this.serviceName = 'system_message_cache';
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
      instance = new system_message_cache(
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
    //appendnew_flow_system_message_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: system_message_cache');
    //appendnew_flow_system_message_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: system_message_cache');
    //appendnew_flow_system_message_cache_HttpIn
  }
  //   service flows_system_message_cache

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
        'sd_GDspqoTpHlLULTdU',
        spanInst,
        'getMessage'
      );
    }
  }
  //appendnew_flow_system_message_cache_start

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
        'sd_aPGyI8wZ2CwZoFwk',
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
        bh = await this.sd_uwiCxt5GaWONQXUa(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.allMessages,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uwiCxt5GaWONQXUa(bh, parentSpanInst);
      } else {
        bh = await this.sd_vav4MwGkf04v7BT4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OKtZCc8rUZosdLTV',
        spanInst,
        'checkCache'
      );
    }
  }

  async sd_uwiCxt5GaWONQXUa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uwiCxt5GaWONQXUa',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + 'utils/system-messages';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M1TdMqWtzuVJlUEU(bh, parentSpanInst);
      //appendnew_next_sd_uwiCxt5GaWONQXUa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uwiCxt5GaWONQXUa',
        spanInst,
        'sd_uwiCxt5GaWONQXUa'
      );
    }
  }

  async sd_M1TdMqWtzuVJlUEU(bh, parentSpanInst) {
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
      bh = await this.sd_zCIUMFSZ9fUNtgC8(bh, parentSpanInst);
      //appendnew_next_sd_M1TdMqWtzuVJlUEU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M1TdMqWtzuVJlUEU');
    }
  }

  async sd_zCIUMFSZ9fUNtgC8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zCIUMFSZ9fUNtgC8',
      parentSpanInst
    );
    try {
      bh.local.allMessages = bh.local.allMessages['payload'];
      console.log('ASD', bh.local.allMessages);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCache(bh, parentSpanInst);
      //appendnew_next_sd_zCIUMFSZ9fUNtgC8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zCIUMFSZ9fUNtgC8',
        spanInst,
        'sd_zCIUMFSZ9fUNtgC8'
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
      bh = await this.sd_vav4MwGkf04v7BT4(bh, parentSpanInst);
      //appendnew_next_setMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P7TZu1cgz6LOCTqH',
        spanInst,
        'setMsgCache'
      );
    }
  }

  async sd_vav4MwGkf04v7BT4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vav4MwGkf04v7BT4',
      parentSpanInst
    );
    try {
      let msg = bh.local.allMessages.find(
        (x) => x.message_code == bh.input.messageCode
      );
      bh.local.message = msg[bh.input.localeCode] || msg['en'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vav4MwGkf04v7BT4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vav4MwGkf04v7BT4',
        spanInst,
        'sd_vav4MwGkf04v7BT4'
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
  //appendnew_flow_system_message_cache_Catch
}
