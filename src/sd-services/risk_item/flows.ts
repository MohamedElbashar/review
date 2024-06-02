// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhS from '../utils/message_cache'; //_splitter_
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

  async getRiskItem(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getRiskItem',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getRiskItem
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
        'sd_AFEQQZKwoPcgka6H',
        spanInst,
        'getRiskItem'
      );
    }
  }

  async createRiskItem(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createRiskItem',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_createRiskItem
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
        'sd_CtkPzdPl0LldANId',
        spanInst,
        'createRiskItem'
      );
    }
  }

  async deleteRiskItem(
    parentSpanInst,
    id: any = undefined,
    lng: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'deleteRiskItem',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
        lng,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SEhU1oY5D0HoM2Oh(bh, parentSpanInst);
      //appendnew_next_deleteRiskItem
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
        'sd_jNmdddTcVnsI3oHJ',
        spanInst,
        'deleteRiskItem'
      );
    }
  }

  async addMultipleRiskItem(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'addMultipleRiskItem',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_addMultipleRiskItem
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
        'sd_UV6PicxhJrlXIvJT',
        spanInst,
        'addMultipleRiskItem'
      );
    }
  }

  async linkRiskAndProduct(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'linkRiskAndProduct',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_linkRiskAndProduct
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
        'sd_1zOOAJp4Mu8FmhxG',
        spanInst,
        'linkRiskAndProduct'
      );
    }
  }

  async yakeensApi(
    parentSpanInst,
    extractedData: any = undefined,
    ownerId: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'yakeensApi',
      parentSpanInst
    );
    let bh: any = {
      input: {
        extractedData,
        ownerId,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AIlla3YTkjcpmkMy(bh, parentSpanInst);
      //appendnew_next_yakeensApi
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
        'sd_ZOEhAEuTrUEhyZ52',
        spanInst,
        'yakeensApi'
      );
    }
  }

  async getcarinfobysequence(
    parentSpanInst,
    sequenceNumber = '',
    ownerId = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getcarinfobysequence',
      parentSpanInst
    );
    let bh: any = {
      input: {
        sequenceNumber,
        ownerId,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl01(bh, parentSpanInst);
      //appendnew_next_getcarinfobysequence
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
        'sd_kJD7TaFcPxEDiSJm',
        spanInst,
        'getcarinfobysequence'
      );
    }
  }

  async getcarinfobycustom(
    parentSpanInst,
    customNumber = '',
    modelYear = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getcarinfobycustom',
      parentSpanInst
    );
    let bh: any = {
      input: {
        customNumber,
        modelYear,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl11(bh, parentSpanInst);
      //appendnew_next_getcarinfobycustom
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
        'sd_cb8g8VAbahsgWqvL',
        spanInst,
        'getcarinfobycustom'
      );
    }
  }

  async duplicateRiskItems(
    parentSpanInst,
    risk_item: any = undefined,
    duplicate_quote: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'duplicateRiskItems',
      parentSpanInst
    );
    let bh: any = {
      input: {
        risk_item,
        duplicate_quote,
      },
      local: {
        duplicate_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody5(bh, parentSpanInst);
      //appendnew_next_duplicateRiskItems
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
        'sd_DtdI3oRSR0CHXR2p',
        spanInst,
        'duplicateRiskItems'
      );
    }
  }

  async bulkLinkRiskAndProduct(
    parentSpanInst,
    risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'bulkLinkRiskAndProduct',
      parentSpanInst
    );
    let bh: any = {
      input: {
        risk_items,
      },
      local: {
        duplicate_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hINk84F9VctoTngQ(bh, parentSpanInst);
      //appendnew_next_bulkLinkRiskAndProduct
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
        'sd_Fy6gveAmIubOdJeI',
        spanInst,
        'bulkLinkRiskAndProduct'
      );
    }
  }

  async deleteLinkedAddons(
    parentSpanInst,
    risk_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'deleteLinkedAddons',
      parentSpanInst
    );
    let bh: any = {
      input: {
        risk_id,
      },
      local: {
        status: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dZbf1UkmxKlcWCQw(bh, parentSpanInst);
      //appendnew_next_deleteLinkedAddons
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
        'sd_84Vo7e5b3rQSj4Kn',
        spanInst,
        'deleteLinkedAddons'
      );
    }
  }

  async fetchRiskItemById(parentSpanInst, id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'fetchRiskItemById',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jDYNo9ZGeSLlFul9(bh, parentSpanInst);
      //appendnew_next_fetchRiskItemById
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
        'sd_wK7QD7b2H41pm5Ps',
        spanInst,
        'fetchRiskItemById'
      );
    }
  }

  async checkRiskItemExists(
    parentSpanInst,
    body: any = undefined,
    riskItemIdNumber: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'checkRiskItemExists',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        riskItemIdNumber,
      },
      local: {
        exists: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x8XsnM7ySiJ3He0c(bh, parentSpanInst);
      //appendnew_next_checkRiskItemExists
      return (
        // formatting output variables
        {
          input: {},
          local: {
            exists: bh.local.exists,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DYy5OBc8dPeT4z5b',
        spanInst,
        'checkRiskItemExists'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpRiskItemList(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KDJ8x13te9Ov5TEP',
        spanInst,
        'setUrl0'
      );
    }
  }

  async httpRiskItemList(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      //appendnew_next_httpRiskItemList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YKPGrX3NAoBPSm6X');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];
      bh.local.result.forEach((x) => {
        x.addl_details = JSON.parse(x.addl_details);
        // x.add_ons = JSON.parse(x.add_ons);
        x.premium_details = JSON.parse(x.premium_details);
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I61TeBTSkkKnfIqv',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpRiskItemUpsert(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UeyM3WGBNQsDB5TG',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpRiskItemUpsert(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      //appendnew_next_httpRiskItemUpsert
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HqK5lDIzL1XxsBJ0');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || {};
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gGgVkToUtzewsI6z',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_SEhU1oY5D0HoM2Oh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SEhU1oY5D0HoM2Oh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl2(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nempty'](
          bh.input.id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl2(bh, parentSpanInst);
      } else {
        bh = await this.getErrorMessage(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SEhU1oY5D0HoM2Oh',
        spanInst,
        'sd_SEhU1oY5D0HoM2Oh'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item/delete-by-id';
      bh.body = {
        filter: {
          id: bh.input.id,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpDeleteRiskItem(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Iw9ElanLT6wjGZ3',
        spanInst,
        'setUrl2'
      );
    }
  }

  async httpDeleteRiskItem(bh, parentSpanInst) {
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
      //appendnew_next_httpDeleteRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nUnCjfhi88OTkfZH');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DgVUAPpGGNk52iQu',
        spanInst,
        'setResponse2'
      );
    }
  }

  async getErrorMessage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getErrorMessage',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhSInstance: SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhS.message_cache =
        SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhS.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhSInstance.getMessage(
          spanInst,
          'HTTP_400',
          bh.input.lng
        );
      bh.message = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_getErrorMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YIYikUsncMfa430E',
        spanInst,
        'getErrorMessage'
      );
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
      parentSpanInst
    );
    try {
      bh.local.result = {
        error: bh.message,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LBL7D7xlckmrokWo',
        spanInst,
        'setResponse5'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item/create-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpRiskItemCreateAll(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vhrs19BwPI5FXvZH',
        spanInst,
        'setUrl3'
      );
    }
  }

  async httpRiskItemCreateAll(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_httpRiskItemCreateAll
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_STHgEL3cECsPnKSb');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || {};

      if (bh.local.result?.addl_details) {
        bh.local.result.addl_details = JSON.parse(bh.local.result.addl_details);
      }
      if (bh.local.result?.premium_details) {
        bh.local.result.premium_details = JSON.parse(
          bh.local.result.premium_details
        );
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_exuRXAKVHJY7fIPC',
        spanInst,
        'setResponse3'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item/update-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpRiskItemUpdate(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ArskZOEKxfeqsxV4',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpRiskItemUpdate(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_httpRiskItemUpdate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1aNahbVx2oiNUF3X');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ia67N8PDeL7bsdoK',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_AIlla3YTkjcpmkMy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AIlla3YTkjcpmkMy',
      parentSpanInst
    );
    try {
      let yakeenArray = [];
      const flow_instance: flows = flows.getInstance();

      bh.input.extractedData.forEach((Q) => {
        if (Q.Sequence_Number) {
          yakeenArray.push(
            flow_instance.getcarinfobysequence(
              spanInst,
              Q.Sequence_Number,
              bh.input.ownerId
            )
          );
        } else {
          yakeenArray.push(
            flow_instance.getcarinfobycustom(
              spanInst,
              Q.Custom_Number,
              Q.Year_Made
            )
          );
        }
      });

      bh.local.result = await Promise.allSettled(yakeenArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AIlla3YTkjcpmkMy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AIlla3YTkjcpmkMy',
        spanInst,
        'sd_AIlla3YTkjcpmkMy'
      );
    }
  }

  async setUrl01(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl01', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'yakeen/vehicleinfo/sequence';
      bh.body = {
        sequenceNumber: bh.input.sequenceNumber,
        ownerId: bh.input.ownerId,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jn8fpWXmruvBPl3E(bh, parentSpanInst);
      //appendnew_next_setUrl01
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8uZrhM5pvXgLaZLs',
        spanInst,
        'setUrl01'
      );
    }
  }

  async sd_Jn8fpWXmruvBPl3E(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.setResponse01(bh, parentSpanInst);
      //appendnew_next_sd_Jn8fpWXmruvBPl3E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Jn8fpWXmruvBPl3E');
    }
  }

  async setResponse01(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse01',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse01
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PrOP5TxjtGv1hEzT',
        spanInst,
        'setResponse01'
      );
    }
  }

  async setUrl11(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl11', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'yakeen/vehicleinfo/custom';
      bh.body = {
        customNumber: bh.input.customNumber,
        modelYear: bh.input.modelYear,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oShCEw2GZQSYyK9r(bh, parentSpanInst);
      //appendnew_next_setUrl11
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y8ptxor3zLV47W8X',
        spanInst,
        'setUrl11'
      );
    }
  }

  async sd_oShCEw2GZQSYyK9r(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.setResponse11(bh, parentSpanInst);
      //appendnew_next_sd_oShCEw2GZQSYyK9r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oShCEw2GZQSYyK9r');
    }
  }

  async setResponse11(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse11',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse11
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_toGMjelc172ZMeqD',
        spanInst,
        'setResponse11'
      );
    }
  }

  async setBody5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody5', parentSpanInst);
    try {
      let body_multiRiskUpload = bh.input.risk_item.map((el) => ({
        id_type: el.id_type,
        id_no: el.id_no,
        quote_id: bh.input.duplicate_quote.id,
        product_code: el.product_code,
        addl_details: JSON.stringify(el.addl_details),
      }));

      bh.body_multiRiskUpload = {
        risk_item: body_multiRiskUpload,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kx0Pa3uXIUB9XUq5(bh, parentSpanInst);
      //appendnew_next_setBody5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FnOIyqu5WDctnCdm',
        spanInst,
        'setBody5'
      );
    }
  }

  async sd_kx0Pa3uXIUB9XUq5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kx0Pa3uXIUB9XUq5',
      parentSpanInst
    );
    try {
      let outputVariables = await this.addMultipleRiskItem(
        spanInst,
        bh.body_multiRiskUpload
      );
      bh.local.bulk_result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L4MgflJOatsPl0I4(bh, parentSpanInst);
      //appendnew_next_sd_kx0Pa3uXIUB9XUq5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kx0Pa3uXIUB9XUq5',
        spanInst,
        'sd_kx0Pa3uXIUB9XUq5'
      );
    }
  }

  async sd_L4MgflJOatsPl0I4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L4MgflJOatsPl0I4',
      parentSpanInst
    );
    try {
      bh.payload = {
        filter: {
          quote_id: Number(bh.input.duplicate_quote.id),
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Gd5WzY0qkQnSamuM(bh, parentSpanInst);
      //appendnew_next_sd_L4MgflJOatsPl0I4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L4MgflJOatsPl0I4',
        spanInst,
        'sd_L4MgflJOatsPl0I4'
      );
    }
  }

  async sd_Gd5WzY0qkQnSamuM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gd5WzY0qkQnSamuM',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getRiskItem(spanInst, bh.payload);
      bh.local.duplicate_data = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Gd5WzY0qkQnSamuM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gd5WzY0qkQnSamuM',
        spanInst,
        'sd_Gd5WzY0qkQnSamuM'
      );
    }
  }

  async sd_hINk84F9VctoTngQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hINk84F9VctoTngQ',
      parentSpanInst
    );
    try {
      bh.payload = bh.input.risk_items;

      const asyncOperation = async (data) => {
        return await new Promise(async (resolve, reject) => {
          try {
            bh.data = {
              filter: {
                id: data.id,
              },
              risk_item: {
                product_code: data.product_code,
              },
            };
            let obj = await this.linkRiskAndProduct(parentSpanInst, bh.data);
            resolve(obj);
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(bh.payload.map(asyncOperation))
        .then((results) => {
          bh.local.duplicate_data = results;
        })
        .catch((error) => {
          console.error('Error', error);
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_hINk84F9VctoTngQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hINk84F9VctoTngQ',
        spanInst,
        'sd_hINk84F9VctoTngQ'
      );
    }
  }

  async sd_dZbf1UkmxKlcWCQw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dZbf1UkmxKlcWCQw',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.DB_API_URL + 'dm/digital/risk_item_add_ons/delete-all';
      bh.body = {
        filter: {
          risk_id: bh.input.risk_id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpDeleteLinkedAddons(bh, parentSpanInst);
      //appendnew_next_sd_dZbf1UkmxKlcWCQw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dZbf1UkmxKlcWCQw',
        spanInst,
        'sd_dZbf1UkmxKlcWCQw'
      );
    }
  }

  async httpDeleteLinkedAddons(bh, parentSpanInst) {
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
      bh = await this.setResponseLinkedAddons(bh, parentSpanInst);
      //appendnew_next_httpDeleteLinkedAddons
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J1Q3NMc0xhTJxnaE');
    }
  }

  async setResponseLinkedAddons(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponseLinkedAddons',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponseLinkedAddons
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xl1TLRjMUMIHH2IT',
        spanInst,
        'setResponseLinkedAddons'
      );
    }
  }

  async sd_jDYNo9ZGeSLlFul9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jDYNo9ZGeSLlFul9',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/risk_item/find-by-id';
      bh.body = {
        filter: {
          id: bh.input.id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetRiskById(bh, parentSpanInst);
      //appendnew_next_sd_jDYNo9ZGeSLlFul9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jDYNo9ZGeSLlFul9',
        spanInst,
        'sd_jDYNo9ZGeSLlFul9'
      );
    }
  }

  async httpGetRiskById(bh, parentSpanInst) {
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
      bh = await this.sd_DDIOSrDVVv83al2n(bh, parentSpanInst);
      //appendnew_next_httpGetRiskById
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dXf27oJnfLaSj1sX');
    }
  }

  async sd_DDIOSrDVVv83al2n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DDIOSrDVVv83al2n',
      parentSpanInst
    );
    try {
      if (bh.result.statusCode == 200) {
        bh.local.result = {
          data: bh.result.payload,
          status: true,
        };
      } else {
        bh.local.result = {
          status: false,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DDIOSrDVVv83al2n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DDIOSrDVVv83al2n',
        spanInst,
        'sd_DDIOSrDVVv83al2n'
      );
    }
  }

  async sd_sb2jCuUHNtEmw9ow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sb2jCuUHNtEmw9ow',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: false,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_sb2jCuUHNtEmw9ow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sb2jCuUHNtEmw9ow',
        spanInst,
        'sd_sb2jCuUHNtEmw9ow'
      );
    }
  }

  async sd_x8XsnM7ySiJ3He0c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x8XsnM7ySiJ3He0c',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getRiskItem(spanInst, bh.input.body);
      bh.local.riskItemList = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OPJn7lZKGdZDoyxh(bh, parentSpanInst);
      //appendnew_next_sd_x8XsnM7ySiJ3He0c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x8XsnM7ySiJ3He0c',
        spanInst,
        'sd_x8XsnM7ySiJ3He0c'
      );
    }
  }

  async sd_OPJn7lZKGdZDoyxh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OPJn7lZKGdZDoyxh',
      parentSpanInst
    );
    try {
      const riskItemList = bh.local.riskItemList || [];
      bh.local.exists = riskItemList.some(
        (r) => String(r.id_no) == String(bh.input.riskItemIdNumber)
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OPJn7lZKGdZDoyxh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OPJn7lZKGdZDoyxh',
        spanInst,
        'sd_OPJn7lZKGdZDoyxh'
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
    if (
      false ||
      (await this.sd_8UZ5z7Spjn8cU8e4(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_8UZ5z7Spjn8cU8e4(bh, parentSpanInst) {
    const nodes = ['sd_Sh5eAWC8RsiRpkUU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_sb2jCuUHNtEmw9ow(bh, parentSpanInst);
      //appendnew_next_sd_8UZ5z7Spjn8cU8e4
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
