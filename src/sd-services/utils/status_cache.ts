// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class status_cache {
  public status_list: any;
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
    this.serviceName = 'status_cache';
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
      instance = new status_cache(
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
    //appendnew_flow_status_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: status_cache');
    //appendnew_flow_status_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: status_cache');
    //appendnew_flow_status_cache_HttpIn
  }
  //   service flows_status_cache

  async statusList(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'statusList',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        status: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache(bh, parentSpanInst);
      //appendnew_next_statusList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V0rcwjEs6XGcyYWz',
        spanInst,
        'statusList'
      );
    }
  }
  //appendnew_flow_status_cache_start

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.status = this.status_list;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TwlDbZHS6TOHpPYv(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kRsvpH8RcKCH4LOg',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_TwlDbZHS6TOHpPYv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TwlDbZHS6TOHpPYv',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TwlDbZHS6TOHpPYv',
        spanInst,
        'sd_TwlDbZHS6TOHpPYv'
      );
    }
  }

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/quote_status_type/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPermissionList(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CtIzUYCjtth1GF9k',
        spanInst,
        'setUrl'
      );
    }
  }

  async httpPermissionList(bh, parentSpanInst) {
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

      bh.local.status = responseMsg;
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_httpPermissionList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5bB6LOURu2hMzulZ');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.status = bh.local.status['payload'];
      let activeArray = [1, 2, 3, 4, 5, 6, 7];
      let draftArray = [1];
      let inactiveArray = [8, 9, 10];

      bh.local.status.forEach((el) => {
        el.isActive = activeArray.includes(el.id);
        el.isDraft = draftArray.includes(el.id);
        el.isInactive = inactiveArray.includes(el.id);
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCache(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JFiuVaKlSomU4kSH',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMsgCache',
      parentSpanInst
    );
    try {
      this.status_list = bh.local.status;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dhJhbUvEpiLJ0Ike',
        spanInst,
        'setMsgCache'
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
  //appendnew_flow_status_cache_Catch
}
