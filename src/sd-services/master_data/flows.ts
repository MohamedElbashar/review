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

  async searchMasterData(
    parentSpanInst,
    search_type: any = '',
    filter: any = {},
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'searchMasterData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        search_type,
        filter,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XizghoT6lzVDzv4v(bh, parentSpanInst);
      //appendnew_next_searchMasterData
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
        'sd_VNBJTloawHwRNwU3',
        spanInst,
        'searchMasterData'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_XizghoT6lzVDzv4v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XizghoT6lzVDzv4v',
      parentSpanInst
    );
    try {
      switch (bh.input.search_type) {
        case 'nationality':
        case 'country':
          bh.input.entityID = process.env.NATIONALITY_ENTITY;
          break;
        case 'vehicle':
          bh.input.entityID = process.env.VEHICLE_ENTITY;
          break;
        case 'postal':
          bh.input.entityID = process.env.POSTAL_ENTITY;
          break;
        case 'cities':
          bh.input.entityID = process.env.CITIES_ENTITY;
          break;
        case 'usage_type':
          bh.input.entityID = process.env.USAGE_TYPE_ENTITY;
          break;
        case 'usage_type_sme':
          bh.input.entityID = process.env.USAGE_TYPE_SME_ENTITY;
          break;
        case 'marital_status':
          bh.input.entityID = process.env.MARITALSTATUS_ENTITY;
          break;
        case 'color':
          bh.input.entityID = process.env.COLOR_ENTITY;
          break;
        case 'plans_ind':
          bh.input.entityID = process.env.PRODUCT_IND_ENTITY;
          break;
        case 'plans_sme':
          bh.input.entityID = process.env.PRODUCT_SME_ENTITY;
          break;
        case 'files':
          bh.input.entityID = process.env.FILES_ENTITY;
          break;
        case 'discount_national_id':
          bh.input.entityID = process.env.DISCOUNT_NATIONAL_ID_ENTITY;
          break;
        case 'motor_discount':
          bh.input.entityID = process.env.MOTOR_DISCOUNT_CPPA_ENTITY;
          break;
        case 'drilling_discount':
          bh.input.entityID = process.env.DISCOUNT_ARABIAN_DRILLING_ENTITY;
          break;
        case 'htp_factor':
          bh.input.entityID = process.env.HTP_FACTOR_ENTITY;
          break;
        case 'petro_rabigh_discount':
          bh.input.entityID =
            process.env.PETRORABIGH_DISCOUNT_NATIONAL_ID_ENTITY;
          break;
        case 'vehicle_make':
          bh.input.entityID = process.env.VEHICLE_MAKE_ENTITY;
          break;
        case 'branch':
          bh.input.entityID = process.env.BRANCHES_ENTITY;
          break;
        case 'region':
          bh.input.entityID = process.env.REGIONS_ENTITY;
          break;
        case 'business_channel_branch':
          bh.input.entityID = process.env.BRANCHES_BC_ENTITY;
          break;
        case 'discount_coupon':
          bh.input.entityID = process.env.COUPON_CODES_ENTITY;
          break;
        case 'scheme_discount_table':
          bh.input.entityID = process.env.SCHEME_DISCOUNT_TABLE_ENTITY;
          break;

        case 'najm_city':
          bh.input.entityID = process.env.NAJM_CITIES_ENTITY_ID;
          break;
        case 'najm_color':
          bh.input.entityID = process.env.NAJM_COLOR_ENTITY_ID;
          break;
        case 'najm_country':
          bh.input.entityID = process.env.NAJM_COUNTRY_CODES_ENTITY_ID;
          break;
        case 'najm_make':
          bh.input.entityID = process.env.NAJM_MAKE_ENTITY_ID;
          break;
        case 'najm_model':
          bh.input.entityID = process.env.NAJM_MODEL_ENTITY_ID;
          break;
        case 'najm_plate_nos':
          bh.input.entityID = process.env.NAJM_PLATE_NOS_ENTITY_ID;
          break;
        case 'najm_usage_type':
          bh.input.entityID = process.env.NAJM_USAGE_TYPES_ENTITY_ID;
          break;
        case 'najm_body':
          bh.input.entityID = process.env.NAJM_BODY_CODES_ENTITY_ID;
          break;
        case 'discount_coupon_b2c':
          bh.input.entityID = process.env.COUPON_CODE_B2C_ENTITY;
          break;
        default:
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.request(bh, parentSpanInst);
      //appendnew_next_sd_XizghoT6lzVDzv4v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XizghoT6lzVDzv4v',
        spanInst,
        'sd_XizghoT6lzVDzv4v'
      );
    }
  }

  async request(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('request', parentSpanInst);
    try {
      bh.url = `${process.env.REELS_URL}/records/filter/${process.env.DATASET_ID}/${bh.input.entityID}`;
      bh.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        organisation: process.env.REELS_ORG,
      };

      bh.body = {
        multiplicity: 'multiple',
        filter: bh.input.filter || {},
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9wWDGbrkNDIeRE5A(bh, parentSpanInst);
      //appendnew_next_request
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iKRUgbGgWxizxZj5',
        spanInst,
        'request'
      );
    }
  }

  async sd_9wWDGbrkNDIeRE5A(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
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
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_sd_9wWDGbrkNDIeRE5A
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9wWDGbrkNDIeRE5A');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = bh.local.result?.['payload']?.['records'] || [];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S7AApdoQPKHKFsVk',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = [];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aAZ0JPSQaLgGrrBb',
        spanInst,
        'setResponse1'
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
      (await this.sd_tpVSMjTo2mtPoFI9(bh, parentSpanInst))
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
  async sd_tpVSMjTo2mtPoFI9(bh, parentSpanInst) {
    const nodes = ['sd_9wWDGbrkNDIeRE5A'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_sd_tpVSMjTo2mtPoFI9
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
