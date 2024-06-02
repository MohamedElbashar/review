// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class system_settings {
  public system_settings: any;
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
    this.serviceName = 'system_settings';
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
      instance = new system_settings(
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
    //appendnew_flow_system_settings_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: system_settings');
    //appendnew_flow_system_settings_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: system_settings');
    //appendnew_flow_system_settings_HttpIn
  }
  //   service flows_system_settings

  async getSystemSettings(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getSystemSettings',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        system_settings: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache(bh, parentSpanInst);
      //appendnew_next_getSystemSettings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            system_settings: bh.local.system_settings,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hhdMcJbrOquPXVZL',
        spanInst,
        'getSystemSettings'
      );
    }
  }

  async updateSystemSettings(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'updateSystemSettings',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_updateSystemSettings
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
        'sd_87KII6apGYjXq9iD',
        spanInst,
        'updateSystemSettings'
      );
    }
  }

  async clearCache(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'clearCache',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.resetCache(bh, parentSpanInst);
      //appendnew_next_clearCache
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
        'sd_tm8NEsJEZWWwZJze',
        spanInst,
        'clearCache'
      );
    }
  }

  async updateAllSystemSettings(
    parentSpanInst,
    config_list: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateAllSystemSettings',
      parentSpanInst
    );
    let bh: any = {
      input: {
        config_list,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SdFnbqdGPT3YZJQT(bh, parentSpanInst);
      //appendnew_next_updateAllSystemSettings
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
        'sd_FSriTqg1Ynmj6GiY',
        spanInst,
        'updateAllSystemSettings'
      );
    }
  }
  //appendnew_flow_system_settings_start

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.system_settings = this.system_settings;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TNbAgQScjTEih4dI(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uQnUv6ERgpL3qsPG',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_TNbAgQScjTEih4dI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TNbAgQScjTEih4dI',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.system_settings,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.system_settings,
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
        'sd_TNbAgQScjTEih4dI',
        spanInst,
        'sd_TNbAgQScjTEih4dI'
      );
    }
  }

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/system_setting/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpSystemSettingList(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lsQRtV7uGmrcO4wv',
        spanInst,
        'setUrl'
      );
    }
  }

  async httpSystemSettingList(bh, parentSpanInst) {
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

      bh.local.system_settings = responseMsg;
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_httpSystemSettingList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o5TPoTQxIhRVOcyl');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.system_settings = bh.local.system_settings['payload'];
      bh.local.system_settings = bh.local.system_settings.map((ele) => ({
        id: ele.id,
        code: ele.code,
        value: ele.value,
      }));

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setSysSettingCache(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PxaZhAh8qpkmueJQ',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setSysSettingCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setSysSettingCache',
      parentSpanInst
    );
    try {
      this.system_settings = bh.local.system_settings;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setSysSettingCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mF4xmmZPkhta0xPp',
        spanInst,
        'setSysSettingCache'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/system_setting/update-all';
      bh.payload = {
        filter: {
          code: bh.input.data?.code,
        },
        system_setting: {
          code: bh.input.data?.code,
          value: bh.input.data?.value,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_giZYGkrpFIq1x95t(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0uEOv7EzWxMMNk7q',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_giZYGkrpFIq1x95t(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
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

      bh.local.result = responseMsg;
      //appendnew_next_sd_giZYGkrpFIq1x95t
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_giZYGkrpFIq1x95t');
    }
  }

  async resetCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resetCache',
      parentSpanInst
    );
    try {
      this.system_settings = null;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_resetCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zK60Mh3d7IDMLMfm',
        spanInst,
        'resetCache'
      );
    }
  }

  async sd_SdFnbqdGPT3YZJQT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SdFnbqdGPT3YZJQT',
      parentSpanInst
    );
    try {
      let primise_arr = [];
      bh.input.config_list = bh.input.config_list || [];
      bh.input.config_list.forEach((CONFIG) => {
        primise_arr.push(this.updateSystemSettings(spanInst, CONFIG));
      });
      let result_arr = await Promise.allSettled(primise_arr);

      bh.local.status =
        result_arr.filter(
          (res) => res['value']?.local?.result?.payload?.affected == 0
        ).length == 0
          ? true
          : false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_SdFnbqdGPT3YZJQT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SdFnbqdGPT3YZJQT',
        spanInst,
        'sd_SdFnbqdGPT3YZJQT'
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
  //appendnew_flow_system_settings_Catch
}
