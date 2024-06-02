// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class local_cache {
  public locales_list: any;
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
    this.serviceName = 'local_cache';
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
      instance = new local_cache(
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
    //appendnew_flow_local_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: local_cache');
    //appendnew_flow_local_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: local_cache');
    //appendnew_flow_local_cache_HttpIn
  }
  //   service flows_local_cache

  async localeList(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'localeList',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        locales: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache(bh, parentSpanInst);
      //appendnew_next_localeList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            locales: bh.local.locales,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jrpOot7hFjejqpeG',
        spanInst,
        'localeList'
      );
    }
  }
  //appendnew_flow_local_cache_start

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.locales = this.locales_list;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nDN0j36m8rKUGeI0(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xJCecl4jGV3dUDiA',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_nDN0j36m8rKUGeI0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nDN0j36m8rKUGeI0',
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
        'sd_nDN0j36m8rKUGeI0',
        spanInst,
        'sd_nDN0j36m8rKUGeI0'
      );
    }
  }

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/locale/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPermissionList(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_40EIYAJ7j8QzPhet',
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

      bh.local.locales = responseMsg;
      bh = await this.sd_cm5Ce905THYtbXEt(bh, parentSpanInst);
      //appendnew_next_httpPermissionList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dd0Ff1eCLl77QYbf');
    }
  }

  async sd_cm5Ce905THYtbXEt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cm5Ce905THYtbXEt',
      parentSpanInst
    );
    try {
      bh.local.locales = bh.local.locales['payload'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setCache(bh, parentSpanInst);
      //appendnew_next_sd_cm5Ce905THYtbXEt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cm5Ce905THYtbXEt',
        spanInst,
        'sd_cm5Ce905THYtbXEt'
      );
    }
  }

  async setCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache', parentSpanInst);
    try {
      this.locales_list = bh.local.locales;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zclfs8r6TydyBn7c',
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
  //appendnew_flow_local_cache_Catch
}
