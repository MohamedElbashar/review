// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class permision_cache {
  public permission_list: any;
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
    this.serviceName = 'permision_cache';
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
      instance = new permision_cache(
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
    //appendnew_flow_permision_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: permision_cache');
    //appendnew_flow_permision_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: permision_cache');
    //appendnew_flow_permision_cache_HttpIn
  }
  //   service flows_permision_cache

  async permissionList(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'permissionList',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        permissions: [],
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache(bh, parentSpanInst);
      //appendnew_next_permissionList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            permissions: bh.local.permissions,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CZfwRE3HOMhKb7jh',
        spanInst,
        'permissionList'
      );
    }
  }
  //appendnew_flow_permision_cache_start

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.permissions = this.permission_list;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_relSNfcWfxAgEqiQ(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fb8akWKhNiZHcdLR',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_relSNfcWfxAgEqiQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_relSNfcWfxAgEqiQ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.permissions,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.permissions,
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
        'sd_relSNfcWfxAgEqiQ',
        spanInst,
        'sd_relSNfcWfxAgEqiQ'
      );
    }
  }

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/permission/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPermissionList(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L8DsNKnTkCv4jJ2R',
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

      bh.local.permissions = responseMsg;
      bh = await this.sd_bOa890gj2ZVaxzPq(bh, parentSpanInst);
      //appendnew_next_httpPermissionList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KIesgShJsB0uZwIp');
    }
  }

  async sd_bOa890gj2ZVaxzPq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bOa890gj2ZVaxzPq',
      parentSpanInst
    );
    try {
      bh.local.permissions = bh.local.permissions['payload'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCache(bh, parentSpanInst);
      //appendnew_next_sd_bOa890gj2ZVaxzPq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bOa890gj2ZVaxzPq',
        spanInst,
        'sd_bOa890gj2ZVaxzPq'
      );
    }
  }

  async setMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMsgCache',
      parentSpanInst
    );
    try {
      this.permission_list = bh.local.permissions;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9fZNFBmk1EsZh0j4',
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
  //appendnew_flow_permision_cache_Catch
}
