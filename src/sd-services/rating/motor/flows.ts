// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as crypto from 'crypto'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK from '../../addl_drivers/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6 from '../../addons/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC from '../../risk_item/flows'; //_splitter_
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

  async iFoundryGetRate(parentSpanInst, payload: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'iFoundryGetRate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_iFoundryGetRate
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
        'sd_aqrzHE9MndF5F6Ur',
        spanInst,
        'iFoundryGetRate'
      );
    }
  }

  async saveQuoteRates(
    parentSpanInst,
    quote_id = 0,
    premiumObj: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'saveQuoteRates',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
        premiumObj,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_saveQuoteRates
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
        'sd_n7YM7wzBfUCrxLJf',
        spanInst,
        'saveQuoteRates'
      );
    }
  }

  async calculatePremium(parentSpanInst, quote_id = 0, ...others) {
    const spanInst = this.tracerService.createSpan(
      'calculatePremium',
      parentSpanInst
    );
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
      bh = await this.sd_dYDTJ3HXIDyup3zL(bh, parentSpanInst);
      //appendnew_next_calculatePremium
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
        'sd_VCxW7AehaYmbiHad',
        spanInst,
        'calculatePremium'
      );
    }
  }

  async getSchemeCode(parentSpanInst, id_no: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getSchemeCode',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
      },
      local: {
        schemeCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xsqztoHr1b0r0e7a(bh, parentSpanInst);
      //appendnew_next_getSchemeCode
      return (
        // formatting output variables
        {
          input: {},
          local: {
            schemeCode: bh.local.schemeCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nKVPGnkaFNvgPmBA',
        spanInst,
        'getSchemeCode'
      );
    }
  }

  async computeHtpFactor(
    parentSpanInst,
    quote: any = undefined,
    drivers: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'computeHtpFactor',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote,
        drivers,
      },
      local: {
        htpFactor: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getNationalIds(bh, parentSpanInst);
      //appendnew_next_computeHtpFactor
      return (
        // formatting output variables
        {
          input: {},
          local: {
            htpFactor: bh.local.htpFactor,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V1U5O5wexWIOwDpM',
        spanInst,
        'computeHtpFactor'
      );
    }
  }

  async getMotorRate(parentSpanInst, ref_no = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMotorRate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        ref_no,
      },
      local: {
        rates: [],
        quote_id: 0,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getQuote0(bh, parentSpanInst);
      //appendnew_next_getMotorRate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            rates: bh.local.rates,
            quote_id: bh.local.quote_id,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xVwaYYrth6gys1NI',
        spanInst,
        'getMotorRate'
      );
    }
  }

  async iFoundryMotorMapping(
    parentSpanInst,
    quote: any = undefined,
    risk_items: any = undefined,
    products: any = undefined,
    drivers: any = undefined,
    htpFactor: any = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'iFoundryMotorMapping',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote,
        risk_items,
        products,
        drivers,
        htpFactor,
      },
      local: {
        requestObject: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.schemeCode(bh, parentSpanInst);
      //appendnew_next_iFoundryMotorMapping
      return (
        // formatting output variables
        {
          input: {},
          local: {
            requestObject: bh.local.requestObject,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uaBQhkoLs5PEP8en',
        spanInst,
        'iFoundryMotorMapping'
      );
    }
  }

  async htpFactor(
    parentSpanInst,
    quote: any = undefined,
    drivers: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('htpFactor', parentSpanInst);
    let bh: any = {
      input: {
        quote,
        drivers,
      },
      local: {
        htpFactor: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CYC29pA7XKsu4BKu(bh, parentSpanInst);
      //appendnew_next_htpFactor
      return (
        // formatting output variables
        {
          input: {},
          local: {
            htpFactor: bh.local.htpFactor,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0eeaKkpi3AgkyjzJ',
        spanInst,
        'htpFactor'
      );
    }
  }

  async canApplyDiscount(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'canApplyDiscount',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        status: true,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8px8vvamzURHUS2t(bh, parentSpanInst);
      //appendnew_next_canApplyDiscount
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
        'sd_Oes3TptlXyWKv0dt',
        spanInst,
        'canApplyDiscount'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'ifoundry/motor-rate';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_adfb6pv74I3G7i5U(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fQjb5tJqU3rAPsRF',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_adfb6pv74I3G7i5U(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.payload,
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
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_sd_adfb6pv74I3G7i5U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_adfb6pv74I3G7i5U');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YxcC5YRcf73qgmTk',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/quote/update-all';
      bh.body = {
        filter: {
          id: bh.input.quote_id,
        },
        quote: {
          premium_details: JSON.stringify(bh.input.premiumObj),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPatchQuote(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uHayaN8QqEz9S75r',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpPatchQuote(bh, parentSpanInst) {
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
      //appendnew_next_httpPatchQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iX60T9GK82LbDW89');
    }
  }

  async sd_dYDTJ3HXIDyup3zL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dYDTJ3HXIDyup3zL',
      parentSpanInst
    );
    try {
      bh.risk_body = {
        filter: { quote_id: bh.input.quote_id },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zssSH3lwWxWLDyAi(bh, parentSpanInst);
      //appendnew_next_sd_dYDTJ3HXIDyup3zL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dYDTJ3HXIDyup3zL',
        spanInst,
        'sd_dYDTJ3HXIDyup3zL'
      );
    }
  }

  async sd_zssSH3lwWxWLDyAi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zssSH3lwWxWLDyAi',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuote(
          spanInst,
          undefined,
          bh.input.quote_id
        )
      );
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.risk_body
        )
      );
      const SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance: SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows =
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance.getAddOns(
          spanInst,
          bh.input.quote_id
        )
      );

      bh.output = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_um5jXaxsTynW7phK(bh, parentSpanInst);
      //appendnew_next_sd_zssSH3lwWxWLDyAi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zssSH3lwWxWLDyAi',
        spanInst,
        'sd_zssSH3lwWxWLDyAi'
      );
    }
  }

  async sd_um5jXaxsTynW7phK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_um5jXaxsTynW7phK',
      parentSpanInst
    );
    try {
      bh.quote = bh.output[0].local.data;
      bh.risk_item =
        bh.output[1].local.result.filter(
          (x) =>
            x.product_code &&
            x.addl_details?.['eska_make'] &&
            x.addl_details?.['eska_model']
        ) || [];
      bh.add_ons = bh.output[2].local.result;

      bh.premium_details = bh.quote.premium_details || [];
      bh.risk_update_arr = [];
      bh.addon_update_arr = [];
      bh.tota_premium = 0;
      if (bh.premium_details.length) {
        bh.risk_item.forEach((x) => {
          let PREM_OBJ = bh.premium_details.find(
            (y) => y.vehicle_id_no == x.id_no
          );
          let premium_obj = PREM_OBJ?.plans?.[x.product_code];
          let ADD_ONS =
            bh.add_ons.filter((y) => y.risk_id.includes(x.id.toString())) || [];
          ADD_ONS.forEach((a) => {
            delete premium_obj?.add_ons?.[a.add_on_code]?.cover_id;
            let add_on_premium =
              premium_obj?.add_ons?.[a.add_on_code]?.Premium * 1.15 || 0;
            bh.addon_update_arr.push({
              risk_id: x.id,
              add_on_code: a.add_on_code,
              premium: add_on_premium,
              premium_details: premium_obj?.add_ons?.[a.add_on_code],
            });
            bh.tota_premium += add_on_premium;
          });
          delete premium_obj?.add_ons;
          if (premium_obj?.TotalPremium) {
            let vehicle_premium = 1.15 * premium_obj.PolicyPremium; // premium + 15% vat
            let base_premium =
              premium_obj.PolicyPremium +
              Math.abs(premium_obj.LoyaltyDiscountAmount) +
              Math.abs(premium_obj.MultiVehicleDiscountAmount) +
              Math.abs(premium_obj.NCDAmount) +
              Math.abs(premium_obj.SchemeDiscountAmount);
            premium_obj['base_premium'] = base_premium;
            bh.risk_update_arr.push({
              id: x.id,
              premium: vehicle_premium,
              premium_details: premium_obj,
            });
            bh.tota_premium += vehicle_premium;
          }
        });
      }
      //update payload
      bh.update_body = {
        quote_id: bh.input.quote_id,
        premium: bh.tota_premium,
        risk_items: bh.risk_update_arr,
        add_ons: bh.addon_update_arr,
      };
      bh.url = process.env.DB_API_URL + 'quote/update-premium';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpUpdatePremium(bh, parentSpanInst);
      //appendnew_next_sd_um5jXaxsTynW7phK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_um5jXaxsTynW7phK',
        spanInst,
        'sd_um5jXaxsTynW7phK'
      );
    }
  }

  async httpUpdatePremium(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.update_body,
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
      bh = await this.sd_M0WQybHiMqJ5ELCZ(bh, parentSpanInst);
      //appendnew_next_httpUpdatePremium
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VFGg0RtO9E6xXVgk');
    }
  }

  async sd_M0WQybHiMqJ5ELCZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M0WQybHiMqJ5ELCZ',
      parentSpanInst
    );
    try {
      bh.local.result = {
        premium: bh.tota_premium,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_M0WQybHiMqJ5ELCZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M0WQybHiMqJ5ELCZ',
        spanInst,
        'sd_M0WQybHiMqJ5ELCZ'
      );
    }
  }

  async sd_xsqztoHr1b0r0e7a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xsqztoHr1b0r0e7a',
      parentSpanInst
    );
    try {
      bh.nationalIds = [
        {
          search_type: 'petro_rabigh_discount',
          filter: {
            national_id: bh.input.id_no,
          },
        },
        {
          search_type: 'discount_national_id',
          filter: {
            national_id: bh.input.id_no,
          },
        },
        {
          search_type: 'motor_discount',
          filter: {
            national_id: bh.input.id_no,
          },
        },
        {
          search_type: 'drilling_discount',
          filter: {
            national_id: bh.input.id_no,
          },
        },
      ];

      bh.discounts = {
        petro_rabigh_discount: '9997',
        discount_national_id: '9998',
        motor_discount: '9996',
        drilling_discount: '9995',
      };
      bh.local.schemeCode = '';
      bh.index = 0;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6y6L9HuwQxgNa5dx(bh, parentSpanInst);
      //appendnew_next_sd_xsqztoHr1b0r0e7a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xsqztoHr1b0r0e7a',
        spanInst,
        'sd_xsqztoHr1b0r0e7a'
      );
    }
  }

  async sd_6y6L9HuwQxgNa5dx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6y6L9HuwQxgNa5dx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.nationalIds.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.masterData(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6y6L9HuwQxgNa5dx',
        spanInst,
        'sd_6y6L9HuwQxgNa5dx'
      );
    }
  }

  async masterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'masterData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.nationalIds[bh.index]
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.increment(bh, parentSpanInst);
      //appendnew_next_masterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P3o7ElkhlQ4zXw5y',
        spanInst,
        'masterData'
      );
    }
  }

  async increment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('increment', parentSpanInst);
    try {
      if (bh.result?.length) {
        if (bh.result[0].eligible_for_discount == 'Y') {
          bh.local.schemeCode =
            bh.discounts[bh.nationalIds[bh.index].search_type] || '';
          bh.index = bh.nationalIds.length + 1;
        }
      }

      bh.index++;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6y6L9HuwQxgNa5dx(bh, parentSpanInst);
      //appendnew_next_increment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cW7RSdHWZx7036Qa',
        spanInst,
        'increment'
      );
    }
  }

  async getNationalIds(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getNationalIds',
      parentSpanInst
    );
    try {
      bh.nationalIds = [
        bh.input.quote.id_no,
        ...bh.input.drivers?.map((driver) => driver?.id_no),
      ];
      bh.url = process.env.DB_API_URL + 'dm/digital/htp_factor/find-by-id';
      bh.index = 0;
      bh.htpFactors = [];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9xVEMR5k3eME918u(bh, parentSpanInst);
      //appendnew_next_getNationalIds
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NAwwmOtCQYoVuBNo',
        spanInst,
        'getNationalIds'
      );
    }
  }

  async sd_9xVEMR5k3eME918u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9xVEMR5k3eME918u',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.nationalIds.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.req(bh, parentSpanInst);
      } else {
        bh = await this.compute(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9xVEMR5k3eME918u',
        spanInst,
        'sd_9xVEMR5k3eME918u'
      );
    }
  }

  async req(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('req', parentSpanInst);
    try {
      bh.body = {
        search_type: 'htp_factor',
        filter: {
          national_id: bh.nationalIds[bh.index],
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callMasterData(bh, parentSpanInst);
      //appendnew_next_req
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5QV7uBrYG7p8Vdff',
        spanInst,
        'req'
      );
    }
  }

  async callMasterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callMasterData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.increment1(bh, parentSpanInst);
      //appendnew_next_callMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uRvUJNPnx1rm9c0q',
        spanInst,
        'callMasterData'
      );
    }
  }

  async increment1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'increment1',
      parentSpanInst
    );
    try {
      if (bh.result?.length) {
        bh.htpFactors.push(bh.result[0].htp || 0);
      } else {
        bh.htpFactors.push(0);
      }
      bh.index++;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9xVEMR5k3eME918u(bh, parentSpanInst);
      //appendnew_next_increment1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DESPthE79g9C3bO9',
        spanInst,
        'increment1'
      );
    }
  }

  async compute(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('compute', parentSpanInst);
    try {
      bh.findMin = (arr) => {
        if (arr.length === 0) {
          return undefined; // Return undefined if the array is empty
        }
        return Math.min(...arr);
      };

      const ownerHTP = bh.htpFactors[0];
      if (bh.htpFactors.length == 1) {
        bh.local.htpFactor = bh.htpFactors[0];
      } else {
        bh.htpFactors = bh.htpFactors.filter((e) => e >= 1);
        let htpFactor = bh.findMin(bh.htpFactors);
        htpFactor = htpFactor || 0;
        if (htpFactor > 5 && ownerHTP == 0) {
          htpFactor = 0;
        }
        bh.local.htpFactor = htpFactor;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_compute
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xH7am1U4ficUQPWd',
        spanInst,
        'compute'
      );
    }
  }

  async getQuote0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getQuote0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuote(
          spanInst,
          bh.input.ref_no,
          undefined
        );
      bh.quote = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setQuoteId(bh, parentSpanInst);
      //appendnew_next_getQuote0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_86wd0q4gryj5PnvU',
        spanInst,
        'getQuote0'
      );
    }
  }

  async setQuoteId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setQuoteId',
      parentSpanInst
    );
    try {
      bh.quote_id = bh.local.quote_id = bh.quote.id;
      bh.body_risk = {
        filter: {
          quote_id: bh.quote_id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRiskItems(bh, parentSpanInst);
      //appendnew_next_setQuoteId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M7OLMMn56bUbP5dm',
        spanInst,
        'setQuoteId'
      );
    }
  }

  async getRiskItems(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRiskItems',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.body_risk
        );
      bh.risk_items = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iK0ptNRXgYcsdBNz(bh, parentSpanInst);
      //appendnew_next_getRiskItems
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a4p7X08QpC63G7tY',
        spanInst,
        'getRiskItems'
      );
    }
  }

  async sd_iK0ptNRXgYcsdBNz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iK0ptNRXgYcsdBNz',
      parentSpanInst
    );
    try {
      bh.risk_items = bh.risk_items.filter(
        (X) => X.addl_details?.['eska_make'] && X.addl_details?.['eska_model']
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getDrivers(bh, parentSpanInst);
      //appendnew_next_sd_iK0ptNRXgYcsdBNz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iK0ptNRXgYcsdBNz',
        spanInst,
        'sd_iK0ptNRXgYcsdBNz'
      );
    }
  }

  async getDrivers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDrivers',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.getAddlDrivers(
          spanInst,
          bh.quote_id
        );
      bh.drivers = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.youngestDriver(bh, parentSpanInst);
      //appendnew_next_getDrivers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Afhi373LdmZNN3Rd',
        spanInst,
        'getDrivers'
      );
    }
  }

  async youngestDriver(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'youngestDriver',
      parentSpanInst
    );
    try {
      const moment = require('moment');
      // Input data
      const drivers = bh.drivers;

      // Group drivers by risk items
      const groupedByRiskItem = {};
      drivers.forEach((driver) => {
        driver.risk_items.forEach((riskItem) => {
          if (!groupedByRiskItem[riskItem]) {
            groupedByRiskItem[riskItem] = [];
          }
          groupedByRiskItem[riskItem].push(driver);
        });
      });

      // Find the youngest driver for each risk item
      const youngestDrivers = {};
      Object.keys(groupedByRiskItem).forEach((riskItem) => {
        const driversForRiskItem = groupedByRiskItem[riskItem];
        const youngestDriver = driversForRiskItem.reduce(
          (youngest, current) => {
            const dobYoungest = moment(
              youngest.addl_details?.dob,
              'DD-MM-YYYY'
            ).toDate();
            const dobCurrent = moment(
              current.addl_details?.dob,
              'DD-MM-YYYY'
            ).toDate();
            return dobYoungest > dobCurrent ? youngest : current;
          }
        );
        youngestDrivers[riskItem] = youngestDriver;
      });

      // Output the result
      bh.driver_details = youngestDrivers;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapping(bh, parentSpanInst);
      //appendnew_next_youngestDriver
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XdFaeSZ0ZJccOBQ9',
        spanInst,
        'youngestDriver'
      );
    }
  }

  async mapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mapping', parentSpanInst);
    try {
      bh.local.bodyRequest = bh.risk_items;
      bh.plans = [
        {
          product_id: 600460,
          applicable_add_ons: [2, 600465, 1296, 601060, 600100],
        },
        {
          product_id: 600461,
          applicable_add_ons: [
            1316, 600465, 1296, 600120, 601060, 600100, 601061, 601062,
          ],
        },
      ];

      if (bh.quote.customer_type_id == 1) {
        bh.plans = [
          {
            product_id: 600460,
            applicable_add_ons: [2, 600465, 1296, 601060, 600100],
          },
          {
            product_id: 600461,
            applicable_add_ons: [
              1316, 600465, 1296, 600120, 601060, 600100, 601061, 601062,
            ],
          },
          {
            product_id: 600462,
            applicable_add_ons: [1316, 1337, 1296, 600120, 601060, 600100],
          },
        ];
      }

      bh.products = bh.plans.map((plan) => {
        return {
          Id: '',
          ProductID: plan['product_id'],
          AdditionalElement4: '0',
          PriorPremium: '',
          PriorITDPremium: '',
          CoverageInfo: (plan.applicable_add_ons || []).map((coverage) => {
            return { Id: '', CoverID: coverage };
          }),
        };
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.htpDb(bh, parentSpanInst);
      //appendnew_next_mapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hBzqeVCc7ujW4GlL',
        spanInst,
        'mapping'
      );
    }
  }

  async htpDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('htpDb', parentSpanInst);
    try {
      let outputVariables = await this.htpFactor(
        spanInst,
        bh.quote,
        bh.drivers
      );
      bh.htpFactor = outputVariables.local.htpFactor;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.ifoundryMapping(bh, parentSpanInst);
      //appendnew_next_htpDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0pvk8VQ7a6zKL7MR',
        spanInst,
        'htpDb'
      );
    }
  }

  async ifoundryMapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'ifoundryMapping',
      parentSpanInst
    );
    try {
      let outputVariables = await this.iFoundryMotorMapping(
        spanInst,
        bh.quote,
        bh.risk_items,
        bh.products,
        bh.driver_details,
        bh.htpFactor
      );
      bh.payload = outputVariables.local.requestObject;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.ifoundryCall(bh, parentSpanInst);
      //appendnew_next_ifoundryMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YletGaCVSIHvugpJ',
        spanInst,
        'ifoundryMapping'
      );
    }
  }

  async ifoundryCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'ifoundryCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.iFoundryGetRate(spanInst, bh.payload);
      bh.local.rates = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_ifoundryCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Acq2yR0GteOCRNu',
        spanInst,
        'ifoundryCall'
      );
    }
  }

  async schemeCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'schemeCode',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getSchemeCode(
        spanInst,
        bh.input.quote.id_no
      );
      bh.schemeCode = outputVariables.local.schemeCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyObject(bh, parentSpanInst);
      //appendnew_next_schemeCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TFJmCekgQZGmD7pu',
        spanInst,
        'schemeCode'
      );
    }
  }

  async policyObject(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyObject',
      parentSpanInst
    );
    try {
      const moment = require('moment-timezone');
      bh.local.vehicleDetails = [];

      bh.convertDateFormat = (inputDate) => {
        // // Parse input date with the specified format
        // const parsedDate = moment(inputDate, 'DD-MM-YYYY');
        // // Convert parsed date to ISO string format
        // const isoDateString = parsedDate.toISOString();
        // return isoDateString;

        const parsedDate = moment(inputDate, 'DD-MM-YYYY')
          .utcOffset(0, true)
          .format();
        return parsedDate;
      };

      bh.calculateAge = (dob) => {
        if (dob) {
          // Parse the date of birth string into a Date object
          const birthDate = new Date(dob);
          // Get the current date
          const currentDate = new Date();
          // Calculate the difference in milliseconds between the current date and the birth date
          const timeDiff = currentDate.getTime() - birthDate.getTime();
          // Calculate the age based on the time difference
          const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25)); // 365.25 days per year to account for leap years
          return age || '';
        }
        return '';
      };

      bh.drivingExperience = (dob) => {
        if (dob) {
          // Parse the date of birth with 'DD-MM-YYYY' format and add 18 years
          const date = moment(dob, 'DD-MM-YYYY').add(18, 'years');
          // Calculate the difference in years between today and the date 18 years after the birth date
          const experienceYears = moment().diff(date, 'years');
          return experienceYears >= 0 ? experienceYears : ''; // Return the experience years if it's non-negative, otherwise return an empty string
        }
        return '';
      };

      //loop the vehicles/risk items
      bh.input.risk_items.forEach((vehicle) => {
        let repairType = '0';
        if (
          vehicle.addl_details.vehicleRepairType &&
          vehicle.addl_details.vehicleRepairType === 'Agency'
        ) {
          repairType = '1';
        }
        let age_of_vehicle = -1;
        if (vehicle?.addl_details?.manufacturing_year) {
          age_of_vehicle =
            new Date().getFullYear() -
            vehicle?.addl_details?.manufacturing_year;
        }
        // sumInsured is default 0 for TPL

        let sumInsured =
          vehicle?.product_id == 600460
            ? 0
            : vehicle.addl_details?.insuredValue ||
              vehicle.addl_details?.Rec_SI;
        sumInsured = sumInsured
          ? sumInsured != 'null'
            ? Math.floor(sumInsured)
            : 0
          : 0;
        const additional_youngest_driver = bh.input.drivers[vehicle?.id];
        const youngest_driver =
          moment(additional_youngest_driver?.addl_details?.dob, 'DD-MM-YYYY') >
          moment(bh.input.quote?.addl_details?.dob, 'DD-MM-YYYY')
            ? additional_youngest_driver
            : bh.input.quote;

        let seating_capacity =
          vehicle?.addl_details?.no_of_seats &&
          vehicle?.addl_details?.no_of_seats != 'null'
            ? vehicle?.addl_details?.no_of_seats
            : String(vehicle?.addl_details?.vehicle_seats);
        seating_capacity =
          seating_capacity == 'undefined' || seating_capacity == undefined
            ? '7'
            : seating_capacity;
        let veh_main_Obj = {
          Id: vehicle['id_no'],
          ProductionYear: vehicle?.addl_details?.manufacturing_year,
          AddittionalElement1: '',
          Deductible: vehicle.addl_details.deductible || '0',
          ARTNCD: '0',
          VehicleUsage: vehicle.addl_details.purposeOfUsingVehicle || '283', //default 283
          CityCode:
            vehicle.addl_details?.city_id ||
            bh.input.quote.addl_details?.city_id ||
            '1',
          AddittionalElement8: '',
          AddittionalElement7: '',
          AddittionalElement2: '', //Claim Factor value in case of renewal else empty. Claim Factor provided from the Eska Renewal Quotation
          Model: vehicle?.addl_details?.eska_model,
          Make: vehicle?.addl_details?.eska_make,
          AddittionalElement5: '',
          NCDLevel: vehicle?.addl_details?.ncd || 0,
          AddittionalElement3: '',
          RepairType: repairType,
          BodyType: vehicle?.addl_details?.eska_body,
          SeatingCapacity: seating_capacity,
          AddittionalElement4: vehicle?.addl_details?.color_id || '0',
          AddittionalElement6: '',
          VehicleAgeInput: age_of_vehicle, //Difference of years from current to vehicle production year
          SumInsured: String(sumInsured), // TPL default 0
          TrailerSumInsured: '0',
          AddittionalElement9: '',
          AddittionalElement10: '',
          DiscountonCommission: '',
          TrafficViolationsScore:
            vehicle?.addl_details?.traffic_violations_score || 0,
          AccidentsRecordScore:
            vehicle?.addl_details?.accidents_record_score || 0,
          DemographicInformationScore:
            vehicle?.addl_details?.demographic_information_score || 0,
          VehicleInformationScore:
            vehicle?.addl_details?.vehicle_information_score || 0,
          LeezamScore: vehicle?.addl_details?.lezam_score || 0,
          Driver: {
            id: '1',
            AddittionalElement1: '',
            AddittionalElement7: '',
            AddittionalElement4: '',
            AddittionalElement3: '',
            AdditionalDriverDOB: '',
            CountofVehicles: bh.input.risk_items.length,
            DriverNationalID: youngest_driver?.id_no,
            DriverAgeInput:
              bh.calculateAge(youngest_driver?.addl_details?.dob) || '',
            AddittionalElement10: '',
            DriverDOB:
              bh.input.quote.customer_type_id === 2
                ? '1989-01-01T00:00:00Z'
                : bh.convertDateFormat(
                    youngest_driver?.addl_details?.dob || ''
                  ),
            AddittionalElement9: '',
            AddittionalElement2: '',
            AddittionalElement6: '',
            AddittionalElement5: '',
            AddittionalElement8: '',
            DrivingExperience:
              bh.drivingExperience(youngest_driver?.addl_details?.dob) || '',
          },
        };
        bh.input.products.forEach((product) => {
          let vehicleObj = { ...veh_main_Obj };
          vehicleObj['ProductInfo'] = product;
          bh.local.vehicleDetails.push(vehicleObj);
        });
      });

      bh.local.motorDetails = {
        Id: '',
        BusinessChannel: bh.input.quote?.business_channel || '602402', //???? Based on source system, bussiness channel will differ.
        BuildingNumber: bh.input.quote.addl_details?.building_number,
        Neighborhood: '',
        AddittionalElement1: '',
        AddittionalElement8: '',
        AdditionalNumber: bh.input.quote.addl_details?.postal_code_addl_number, //???
        AddittionalElement10: bh.input.quote.reference_number || '', //passing quotation reference number from digital
        PostalCode: bh.input.quote.addl_details?.postal_code,
        AddittionalElement6: '',
        StreetName: bh.input.quote.addl_details?.street, //??? street_ar
        AddittionalElement9: '',
        SchemeCode: bh.input.quote.addl_details?.coupon_code || bh.schemeCode, //schemeCode
        UnitNumber: '0', //???
        Gender: bh.input.quote.addl_details?.gender == 1 ? 1 : 2, //1 for male and 2 other all
        POBox: '',
        AddittionalElement3: '',
        OwnerNationalId: bh.input.quote.id_no, //???mockDataNationality
        AddittionalElement5: String(bh.input?.htpFactor) || '0', //Http Factor - Based on national If from Bonus Malus Class table
        BranchCode: bh.input.quote?.branch_id || '121', //For DCP - 121
        CountofVehicles: bh.input.risk_items.length,
        AddittionalElement2: bh.input.quote.addl_details?.nationality || 'SA', //used for Nationality code
        InsuredType: '1', //Static Value
        SellerCode: '',
        AddittionalElement4: '',
        AddittionalElement7: bh.input.quote.customer_type_id == 2 ? 'SME' : '',
        NationalIdSeries: bh.input.quote.id_no.toString().substr(0, 1), //1st charcter of National Id/CR/IQuama number
        MaritalStatus: bh.input.quote.addl_details?.marital_status, //Expected: Married school. From quote api getting as married
        PostalRegion: bh.input.quote.addl_details?.postal_region || '',
        PostalCity: bh.input.quote.addl_details?.postal_city || '',
        SamePolicyConditionIndicator: '0',
        Vehicle: bh.local.vehicleDetails,
      };
      //"TransactionType": bh.input.quote.is_renewal ? "1" : "0",//'0' for general flow and '1' for renewal --> change this, temp fix is below.
      bh.local.policyDetails = {
        TransactionType: '0', //'0' for general flow and '1' for renewal
        ExpDate: moment().add(365, 'days').format('YYYY-MM-DDT00:00:00'),
        EffDate: moment().add(1, 'days').format('YYYY-MM-DDT00:00:00'),
        TransactionDate: moment().format('YYYY-MM-DDT00:00:00'),
        PolicyStartDate: moment().add(1, 'days').format('YYYY-MM-DDT00:00:00'),
        PolicyEnddate: moment().add(365, 'days').format('YYYY-MM-DDT00:00:00'),
        // "Id": "3bce0456-41f3-41b0-934d-13f0ac3544ae",
        Id: crypto.randomBytes(20).toString('hex'),
        Context: {
          Country: 'KSA',
          State: '',
          CARRIER: 'ALLALRajhiTakaful',
          TransactionDate: '2019-09-30T00:00:00',
          IsPremiumCalculation: 'yes',
          IsErrorMessage: 'no',
          IsStatAssaignment: 'no',
          IsFormLogic: 'no',
          _id: 'context01', //???
        },
        Motor: bh.local.motorDetails,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.ratingService(bh, parentSpanInst);
      //appendnew_next_policyObject
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1aHnpwzPVP039WsH',
        spanInst,
        'policyObject'
      );
    }
  }

  async ratingService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'ratingService',
      parentSpanInst
    );
    try {
      let testbed =
        bh.input.quote.customer_type_id == 2
          ? process.env.IFOUNDRY_TESTBED_SME
          : process.env.IFOUNDRY_TESTBED;

      bh.local.requestObject = {
        RatingService: {
          message: {
            service: {
              getRate: {
                request: {
                  context: {
                    product: process.env.IFOUNDRY_MOTOR_PRODUCT,
                    testbed: testbed,
                    enableTrace: 'False',
                    ratingWorkSheet: 'false',
                  },
                  Policy: bh.local.policyDetails,
                },
              },
            },
          },
          _xmlns: 'com.valuemomentum.ifoundry.rating',
        },
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_ratingService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AIaF3FLl6bkZcNGu',
        spanInst,
        'ratingService'
      );
    }
  }

  async sd_CYC29pA7XKsu4BKu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CYC29pA7XKsu4BKu',
      parentSpanInst
    );
    try {
      bh.nationalIds = [
        bh.input.quote.id_no,
        ...bh.input.drivers?.map((driver) => driver?.id_no),
      ];

      bh.payload = {
        national_id: bh.nationalIds,
      };
      bh.url = `${process.env.DB_API_URL}htp_factor`;

      bh.htpFactors = [];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5JoDkdP3h3EK9aYD(bh, parentSpanInst);
      //appendnew_next_sd_CYC29pA7XKsu4BKu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CYC29pA7XKsu4BKu',
        spanInst,
        'sd_CYC29pA7XKsu4BKu'
      );
    }
  }

  async sd_5JoDkdP3h3EK9aYD(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.sd_91w9IkT2dYiV3B0S(bh, parentSpanInst);
      //appendnew_next_sd_5JoDkdP3h3EK9aYD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5JoDkdP3h3EK9aYD');
    }
  }

  async sd_91w9IkT2dYiV3B0S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_91w9IkT2dYiV3B0S',
      parentSpanInst
    );
    try {
      let htpFactor = bh.result?.['payload'];
      bh.local.htpFactor = [];

      if (htpFactor.length > 0) {
        bh.local.htpFactor.push(bh.result?.['payload']?.[0]?.['HTP'] || 0);
      } else {
        bh.local.htpFactor.push(0);
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_91w9IkT2dYiV3B0S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_91w9IkT2dYiV3B0S',
        spanInst,
        'sd_91w9IkT2dYiV3B0S'
      );
    }
  }

  async sd_8px8vvamzURHUS2t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8px8vvamzURHUS2t',
      parentSpanInst
    );
    try {
      bh.url = `${process.env.DB_API_URL}coupen/can-apply`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.canApplyHttp(bh, parentSpanInst);
      //appendnew_next_sd_8px8vvamzURHUS2t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8px8vvamzURHUS2t',
        spanInst,
        'sd_8px8vvamzURHUS2t'
      );
    }
  }

  async canApplyHttp(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.sd_d0zsiuOEPq4h2P1R(bh, parentSpanInst);
      //appendnew_next_canApplyHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y1gvC4S2BtOG56cu');
    }
  }

  async sd_d0zsiuOEPq4h2P1R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d0zsiuOEPq4h2P1R',
      parentSpanInst
    );
    try {
      bh.local.status = bh.response?.payload?.status;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_d0zsiuOEPq4h2P1R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d0zsiuOEPq4h2P1R',
        spanInst,
        'sd_d0zsiuOEPq4h2P1R'
      );
    }
  }

  async sd_zOXgm7xe4ZVMm9xy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zOXgm7xe4ZVMm9xy',
      parentSpanInst
    );
    try {
      bh.local.status = true;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zOXgm7xe4ZVMm9xy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zOXgm7xe4ZVMm9xy',
        spanInst,
        'sd_zOXgm7xe4ZVMm9xy'
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
      (await this.sd_2XCD6vkxVct2X8vk(bh, parentSpanInst))
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
  async sd_2XCD6vkxVct2X8vk(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_zOXgm7xe4ZVMm9xy'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_zOXgm7xe4ZVMm9xy(bh, parentSpanInst);
    //appendnew_next_sd_2XCD6vkxVct2X8vk
    return true;
  }
  //appendnew_flow_flows_Catch
}
