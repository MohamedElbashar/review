// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class Identity_type_cache {
  public id_type_list: any;
  public id_type: any;
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
    this.serviceName = 'Identity_type_cache';
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
      instance = new Identity_type_cache(
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
    //appendnew_flow_Identity_type_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Identity_type_cache');
    //appendnew_flow_Identity_type_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: Identity_type_cache');
    //appendnew_flow_Identity_type_cache_HttpIn
  }
  //   service flows_Identity_type_cache

  async idTypeList(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'idTypeList',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        id_type: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache(bh, parentSpanInst);
      //appendnew_next_idTypeList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            id_type: bh.local.id_type,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mxQu9Zdukj4GOd5r',
        spanInst,
        'idTypeList'
      );
    }
  }
  //appendnew_flow_Identity_type_cache_start

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.id_type = this.id_type_list;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IMfnfo1JWZCP8ewp(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aBc4QcbHUyNnOxys',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_IMfnfo1JWZCP8ewp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IMfnfo1JWZCP8ewp',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.locales,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.locales,
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
        'sd_IMfnfo1JWZCP8ewp',
        spanInst,
        'sd_IMfnfo1JWZCP8ewp'
      );
    }
  }

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/identity_type/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPermissionList(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pzourgg0RqT1X2LP',
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

      bh.local.id_type = responseMsg;
      bh = await this.sd_Uuss4oNUXQnCksUb(bh, parentSpanInst);
      //appendnew_next_httpPermissionList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DqB1RgSPRTArEdVj');
    }
  }

  async sd_Uuss4oNUXQnCksUb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uuss4oNUXQnCksUb',
      parentSpanInst
    );
    try {
      bh.local.id_type = bh.local.id_type['payload'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setCache(bh, parentSpanInst);
      //appendnew_next_sd_Uuss4oNUXQnCksUb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uuss4oNUXQnCksUb',
        spanInst,
        'sd_Uuss4oNUXQnCksUb'
      );
    }
  }

  async setCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache', parentSpanInst);
    try {
      this.id_type = bh.local.id_type;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hWRnvGVewedgh84m',
        spanInst,
        'setCache'
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
  //appendnew_flow_Identity_type_cache_Catch
}
