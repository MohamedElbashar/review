// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class identity_type_cache {
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
    this.serviceName = 'identity_type_cache';
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
      instance = new identity_type_cache(
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
    //appendnew_flow_identity_type_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: identity_type_cache');
    //appendnew_flow_identity_type_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: identity_type_cache');
    //appendnew_flow_identity_type_cache_HttpIn
  }
  //   service flows_identity_type_cache

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
        'sd_dUWowspP7xYZoFev',
        spanInst,
        'idTypeList'
      );
    }
  }
  //appendnew_flow_identity_type_cache_start

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.id_type = this.id_type_list;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r9wzz6DSw3644Ru8(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ss5WVpVhN5xOJrv6',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_r9wzz6DSw3644Ru8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r9wzz6DSw3644Ru8',
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
        'sd_r9wzz6DSw3644Ru8',
        spanInst,
        'sd_r9wzz6DSw3644Ru8'
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
        'sd_j2oy6XGFkOaIqL8z',
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
        cookies: undefined,
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
      bh = await this.sd_B1zhDvbRGW07mASc(bh, parentSpanInst);
      //appendnew_next_httpPermissionList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aOrJboT9WfaPuxik');
    }
  }

  async sd_B1zhDvbRGW07mASc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B1zhDvbRGW07mASc',
      parentSpanInst
    );
    try {
      bh.local.id_type = bh.local.id_type['payload'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setCache(bh, parentSpanInst);
      //appendnew_next_sd_B1zhDvbRGW07mASc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B1zhDvbRGW07mASc',
        spanInst,
        'sd_B1zhDvbRGW07mASc'
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
        'sd_2pga8CcMhnauNna7',
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
  //appendnew_flow_identity_type_cache_Catch
}
