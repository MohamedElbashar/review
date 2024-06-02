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

  async getAddOns(parentSpanInst, quote_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('getAddOns', parentSpanInst);
    let bh: any = {
      input: {
        quote_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getAddOns
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
        'sd_1u72HYXPMglZAW60',
        spanInst,
        'getAddOns'
      );
    }
  }

  async createAddons(
    parentSpanInst,
    add_on_code: any = undefined,
    premium: any = undefined,
    addl_details: any = undefined,
    risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createAddons',
      parentSpanInst
    );
    let bh: any = {
      input: {
        add_on_code,
        premium,
        addl_details,
        risk_items,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5Qh0Dj5MN9hP7T2u(bh, parentSpanInst);
      //appendnew_next_createAddons
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
        'sd_wbTuZz8VgJhh2E8t',
        spanInst,
        'createAddons'
      );
    }
  }

  async deleteAddons(
    parentSpanInst,
    add_on_code: any = undefined,
    risk_id: any = undefined,
    id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'deleteAddons',
      parentSpanInst
    );
    let bh: any = {
      input: {
        add_on_code,
        risk_id,
        id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_deleteAddons
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
        'sd_pUVM98kPNi79BYwO',
        spanInst,
        'deleteAddons'
      );
    }
  }

  async createBulkAddonItem(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createBulkAddonItem',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        bulk_result_addon: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bLu56Mgufk1PJ9VE(bh, parentSpanInst);
      //appendnew_next_createBulkAddonItem
      return (
        // formatting output variables
        {
          input: {},
          local: {
            bulk_result_addon: bh.local.bulk_result_addon,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uCUetMK69mJQ4LO6',
        spanInst,
        'createBulkAddonItem'
      );
    }
  }

  async duplicateAddons(
    parentSpanInst,
    addons: any = undefined,
    duplicate_quote: any = undefined,
    duplicate_risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'duplicateAddons',
      parentSpanInst
    );
    let bh: any = {
      input: {
        addons,
        duplicate_quote,
        duplicate_risk_items,
      },
      local: {
        duplicate_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MeF1t78xq3RsccaY(bh, parentSpanInst);
      //appendnew_next_duplicateAddons
      return (
        // formatting output variables
        {
          input: {},
          local: {
            duplicate_data: bh.local.duplicate_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1FnXq9vO9JzDQeLD',
        spanInst,
        'duplicateAddons'
      );
    }
  }

  async addonBulkUploadStart(
    parentSpanInst,
    addonData: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'addonBulkUploadStart',
      parentSpanInst
    );
    let bh: any = {
      input: {
        addonData,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h89mY45j5j87egT0(bh, parentSpanInst);
      //appendnew_next_addonBulkUploadStart
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
        'sd_aP4Lp1BObIDnK3LD',
        spanInst,
        'addonBulkUploadStart'
      );
    }
  }

  async checkRiskAddonExists(
    parentSpanInst,
    addon_code: any = undefined,
    risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'checkRiskAddonExists',
      parentSpanInst
    );
    let bh: any = {
      input: {
        addon_code,
        risk_items,
      },
      local: {
        riskAddonRes: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Mc7ZJMRDUZPx3seF(bh, parentSpanInst);
      //appendnew_next_checkRiskAddonExists
      return (
        // formatting output variables
        {
          input: {},
          local: {
            riskAddonRes: bh.local.riskAddonRes,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_etRvVAKnP1BYbFFk',
        spanInst,
        'checkRiskAddonExists'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'addons/list-by-quote';
      bh.body = { quote_id: bh.input.quote_id };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpAddonsList(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mxDmyigUrsE8hUyt',
        spanInst,
        'setUrl0'
      );
    }
  }

  async httpAddonsList(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
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
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_httpAddonsList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A6IXdjLUllsyt8Et');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NuWTw4fPw8qBUxG9',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_5Qh0Dj5MN9hP7T2u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5Qh0Dj5MN9hP7T2u',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkRiskAddonExists(
        spanInst,
        bh.input.add_on_code,
        bh.input.risk_items
      );
      bh.local.riskAddonRes = outputVariables.local.riskAddonRes;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AD5r2zfGx4L18owU(bh, parentSpanInst);
      //appendnew_next_sd_5Qh0Dj5MN9hP7T2u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5Qh0Dj5MN9hP7T2u',
        spanInst,
        'sd_5Qh0Dj5MN9hP7T2u'
      );
    }
  }

  async sd_AD5r2zfGx4L18owU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AD5r2zfGx4L18owU',
      parentSpanInst
    );
    try {
      const riskAddonRes = bh.local.riskAddonRes || [];

      if (riskAddonRes && riskAddonRes.length > 0) {
        const filtered_risk_items = bh.input.risk_items.filter(
          (r) => !riskAddonRes.includes(r)
        );
        bh.input.risk_items = filtered_risk_items;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkRiskArray(bh, parentSpanInst);
      //appendnew_next_sd_AD5r2zfGx4L18owU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AD5r2zfGx4L18owU',
        spanInst,
        'sd_AD5r2zfGx4L18owU'
      );
    }
  }

  async checkRiskArray(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkRiskArray',
      parentSpanInst
    );
    try {
      bh.local.delete_add_on = false;

      if (bh.input.risk_items && Array.isArray(bh.input.risk_items)) {
        bh.local.delete_add_on = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteExistingAddons(bh, parentSpanInst);
      //appendnew_next_checkRiskArray
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0xU4yi0mj5sBBCeI',
        spanInst,
        'checkRiskArray'
      );
    }
  }

  async deleteExistingAddons(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteExistingAddons',
      parentSpanInst
    );
    try {
      let outputVariables = await this.deleteAddons(
        spanInst,
        bh.input.add_on_code,
        bh.input.risk_items,
        undefined
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_74BtJ2xEwbNDdt20(bh, parentSpanInst);
      //appendnew_next_deleteExistingAddons
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VJQZOwq0V87EqpC8',
        spanInst,
        'deleteExistingAddons'
      );
    }
  }

  async sd_74BtJ2xEwbNDdt20(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_74BtJ2xEwbNDdt20',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.delete_add_on,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl3(bh, parentSpanInst);
      } else {
        bh = await this.setUrl1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_74BtJ2xEwbNDdt20',
        spanInst,
        'sd_74BtJ2xEwbNDdt20'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url =
        process.env.DB_API_URL + 'dm/digital/risk_item_add_ons/create-all';
      bh.body = {
        risk_item_add_ons: [],
      };

      bh.input.risk_items.forEach((el) => {
        let tempObj = {
          risk_id: el,
          add_on_code: bh.input.add_on_code,
          premium: bh.input.premium,
          addl_details: bh.input.addl_details
            ? JSON.stringify(bh.input.addl_details)
            : '{}',
        };
        bh.body.risk_item_add_ons.push(tempObj);
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpAddonsUpsert(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gjbctWEB9mgy7f6Q',
        spanInst,
        'setUrl3'
      );
    }
  }

  async httpAddonsUpsert(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
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
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_httpAddonsUpsert
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kqjD3YujLRR4WC3V');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || {};

      if (bh.local.result.length) {
        bh.local.result = bh.local.result || [];
        bh.local.result.forEach((x) => {
          delete x.addl_details;
          delete x.premium_details;
        });
      } else {
        delete bh.local.result.addl_details;
        delete bh.local.result.premium_details;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8u5WXNX2Y8d2DgXi',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item_add_ons/create';
      bh.body = {
        risk_item_add_ons: {
          risk_id: bh.input.risk_items,
          add_on_code: bh.input.add_on_code,
          addl_details: bh.input.addl_details
            ? JSON.stringify(bh.input.addl_details)
            : '{}',
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpAddonsUpsert(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_re11szHN5grxEPD4',
        spanInst,
        'setUrl1'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url =
        process.env.DB_API_URL + 'dm/digital/risk_item_add_ons/delete-all';
      bh.continue = false;
      if (bh.input.risk_id && typeof bh.input.risk_id === 'number') {
        bh.continue = true;
        bh.body = {
          filter: {
            risk_id: bh.input.risk_id,
            add_on_code: bh.input.add_on_code,
          },
        };
      }

      if (bh.input.id && Array.isArray(bh.input.id)) {
        bh.continue = true;
        bh.body = {
          filter: bh.input.id,
        };
      }

      console.log(bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bf34OVLLD6XQtHmI(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E7BhD7WqrAr9om1J',
        spanInst,
        'setUrl2'
      );
    }
  }

  async sd_bf34OVLLD6XQtHmI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bf34OVLLD6XQtHmI',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.continue,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.httpDeleteAddons(bh, parentSpanInst);
      } else {
        bh = await this.setResponse3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bf34OVLLD6XQtHmI',
        spanInst,
        'sd_bf34OVLLD6XQtHmI'
      );
    }
  }

  async httpDeleteAddons(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
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
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_httpDeleteAddons
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b7eSH1vYmACozcvw');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      console.log(bh.local.result);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6BUtM8z5ALSI8wkA',
        spanInst,
        'setResponse2'
      );
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.local.result = {};
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gzFtj8DrNDRQi9hR',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_bLu56Mgufk1PJ9VE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bLu56Mgufk1PJ9VE',
      parentSpanInst
    );
    try {
      bh.payload = bh.input.data;

      const asyncOperation = async (data) => {
        return await new Promise(async (resolve, reject) => {
          try {
            // let obj = await this.create_addons(parentSpanInst, data?.add_on_code, data?.premium, data?.addl_details, data.risk_items);
            let obj = await this.addonBulkUploadStart(parentSpanInst, data);
            resolve(obj);
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(bh.payload.map(asyncOperation))
        .then((results) => {
          bh.local.bulk_result_addon = results;
        })
        .catch((error) => {
          console.error('Error', error);
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_bLu56Mgufk1PJ9VE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bLu56Mgufk1PJ9VE',
        spanInst,
        'sd_bLu56Mgufk1PJ9VE'
      );
    }
  }

  async sd_MeF1t78xq3RsccaY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MeF1t78xq3RsccaY',
      parentSpanInst
    );
    try {
      bh.body = bh.input.addons.map((item) => {
        return {
          ...item,
          risk_items: (item.risk_id || []).map((x) => {
            return bh.input.duplicate_risk_items.find((z) => z.old_risk_id == x)
              .id;
          }),
        };
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createBulkAddonsFunction(bh, parentSpanInst);
      //appendnew_next_sd_MeF1t78xq3RsccaY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MeF1t78xq3RsccaY',
        spanInst,
        'sd_MeF1t78xq3RsccaY'
      );
    }
  }

  async createBulkAddonsFunction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createBulkAddonsFunction',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance: flows =
        flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance.createBulkAddonItem(
          spanInst,
          bh.body
        )
      );

      bh.local.duplicate_data = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_createBulkAddonsFunction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NuuaqsQg3blhrErW',
        spanInst,
        'createBulkAddonsFunction'
      );
    }
  }

  async sd_h89mY45j5j87egT0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h89mY45j5j87egT0',
      parentSpanInst
    );
    try {
      let outputVariables = await this.createAddons(
        spanInst,
        bh.input.addonData?.add_on_code,
        bh.input.addonData?.premium,
        bh.input.addonData?.addl_details,
        bh.input.addonData?.risk_items
      );
      bh.addon_response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_h89mY45j5j87egT0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h89mY45j5j87egT0',
        spanInst,
        'sd_h89mY45j5j87egT0'
      );
    }
  }

  async sd_Mc7ZJMRDUZPx3seF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mc7ZJMRDUZPx3seF',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + 'addon-risk';
      bh.body = {
        risk_items: bh.input.risk_items,
        addon_code: bh.input.addon_code,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAddonRisk(bh, parentSpanInst);
      //appendnew_next_sd_Mc7ZJMRDUZPx3seF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mc7ZJMRDUZPx3seF',
        spanInst,
        'sd_Mc7ZJMRDUZPx3seF'
      );
    }
  }

  async getAddonRisk(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
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
      bh = await this.sd_t7NjKunXZ3iRKBjB(bh, parentSpanInst);
      //appendnew_next_getAddonRisk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1FHaDbSZ4hHQCa5X');
    }
  }

  async sd_t7NjKunXZ3iRKBjB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t7NjKunXZ3iRKBjB',
      parentSpanInst
    );
    try {
      bh.local.riskAddonRes = bh.local.result.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_t7NjKunXZ3iRKBjB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t7NjKunXZ3iRKBjB',
        spanInst,
        'sd_t7NjKunXZ3iRKBjB'
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
