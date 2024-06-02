// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_ZhB3cKrhSZiAo7PU from '../../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L from './flows'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/motor/get-rate`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.motorRate(bh, parentSpanInst);
          //appendnew_next_sd_3UWBqEHdxh54GcAX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3UWBqEHdxh54GcAX');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/calculate-premium`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.calcPremium(bh, parentSpanInst);
          //appendnew_next_sd_uWEbWID3XJ4oi5rm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uWEbWID3XJ4oi5rm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/validate/coupon`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Lx5WsIwJxDGiRw1o(bh, parentSpanInst);
          //appendnew_next_sd_jArC6XzE2JS40Yp7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jArC6XzE2JS40Yp7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async motorRate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('motorRate', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.getMotorRate(
          spanInst,
          bh.input.body.reference_number
        );
      bh.rates = outputVariables.local.rates;
      bh.quote_id = outputVariables.local.quote_id;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qA8GbSLKsSBpzCY2(bh, parentSpanInst);
      bh = await this.savePremiumObj(bh, parentSpanInst);
      //appendnew_next_motorRate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M9tjo3n8kdMcyJao',
        spanInst,
        'motorRate'
      );
    }
  }

  async sd_qA8GbSLKsSBpzCY2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qA8GbSLKsSBpzCY2',
      parentSpanInst
    );
    try {
      if (bh.rates && bh.rates.length) {
        let plans = bh.rates[0]?.plans;
        let plan_arr = Object.values(plans);
        // let validation_list = plan_arr.filter(X => X['validation_code'] != 0 && X['validation_message'] != "")
        // if (validation_list && validation_list.length > 0) {
        //     bh.rates = [{
        //         err_code: validation_list[0]?.['validation_code'],
        //         err_msg: validation_list[0]?.['validation_message']
        //     }]
        // }
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_gZb6gUiZrNgAbVuk(bh, parentSpanInst);
      //appendnew_next_sd_qA8GbSLKsSBpzCY2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qA8GbSLKsSBpzCY2',
        spanInst,
        'sd_qA8GbSLKsSBpzCY2'
      );
    }
  }

  async sd_gZb6gUiZrNgAbVuk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.rates);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gZb6gUiZrNgAbVuk');
    }
  }

  async savePremiumObj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'savePremiumObj',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.saveQuoteRates(
          spanInst,
          bh.quote_id,
          bh.rates
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_savePremiumObj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kELOvykHSmIXy3Fv',
        spanInst,
        'savePremiumObj'
      );
    }
  }

  async calcPremium(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calcPremium',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.calculatePremium(
          spanInst,
          bh.input.body.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1NlYUfLVREJuNNH5(bh, parentSpanInst);
      //appendnew_next_calcPremium
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bzfi8rV55slnNN4C',
        spanInst,
        'calcPremium'
      );
    }
  }

  async sd_1NlYUfLVREJuNNH5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1NlYUfLVREJuNNH5',
      parentSpanInst
    );
    try {
      bh.response = Object.assign({ status: true }, bh.result);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_loeDkz7wArPVRkgo(bh, parentSpanInst);
      //appendnew_next_sd_1NlYUfLVREJuNNH5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1NlYUfLVREJuNNH5',
        spanInst,
        'sd_1NlYUfLVREJuNNH5'
      );
    }
  }

  async sd_loeDkz7wArPVRkgo(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_loeDkz7wArPVRkgo');
    }
  }

  async sd_Lx5WsIwJxDGiRw1o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lx5WsIwJxDGiRw1o',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.system.environment.DISCOUNT_ENABLED,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uwT4Lm37vEbrEGve(bh, parentSpanInst);
      } else {
        bh = await this.disableResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lx5WsIwJxDGiRw1o',
        spanInst,
        'sd_Lx5WsIwJxDGiRw1o'
      );
    }
  }

  async sd_uwT4Lm37vEbrEGve(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uwT4Lm37vEbrEGve',
      parentSpanInst
    );
    try {
      bh.searchType = 'discount_coupon';
      if (bh.input.body?.source && bh.input.body?.source == 'b2c') {
        bh.searchType = 'discount_coupon_b2c';
      }
      // payload for fetch coupon code details
      bh.body = {
        search_type: bh.searchType,
        filter: {
          discount_coupon_code: bh.input.body.code,
        },
      };
      //api audit for coupen code master
      bh.api_key = 'ifoundry-coupen-discount';
      bh.identifier = bh.input.body.id_no;
      bh.request = bh.input.body.code;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.canApply(bh, parentSpanInst);
      //appendnew_next_sd_uwT4Lm37vEbrEGve
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uwT4Lm37vEbrEGve',
        spanInst,
        'sd_uwT4Lm37vEbrEGve'
      );
    }
  }

  async canApply(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('canApply', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.canApplyDiscount(
          spanInst,
          bh.input.body
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xr1icpPf2Q0ISWxb(bh, parentSpanInst);
      //appendnew_next_canApply
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BEwaNxu79zH4PcvQ',
        spanInst,
        'canApply'
      );
    }
  }

  async sd_xr1icpPf2Q0ISWxb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xr1icpPf2Q0ISWxb',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.couponDtlsSchemecode(bh, parentSpanInst);
      } else {
        bh = await this.disableResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xr1icpPf2Q0ISWxb',
        spanInst,
        'sd_xr1icpPf2Q0ISWxb'
      );
    }
  }

  async couponDtlsSchemecode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'couponDtlsSchemecode',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.body
        )
      );
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.getSchemeCode(
          spanInst,
          bh.input.body.id_no
        )
      );

      bh.resArray = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.couponExpireValidity(bh, parentSpanInst);
      //appendnew_next_couponDtlsSchemecode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bDoEYuZOP0UGBNHA',
        spanInst,
        'couponDtlsSchemecode'
      );
    }
  }

  async couponExpireValidity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'couponExpireValidity',
      parentSpanInst
    );
    try {
      // fetching coupon code master data array (bh.result)
      bh.result = bh.resArray[0].local.result;
      bh.api_response = Object.assign({}, bh.result);
      bh.duration = bh.resArray[0].local.search_time || null;
      // fetching if any discount already applied over id_no (bh.schemeCode)
      bh.schemeCode = bh.resArray[1].local.schemeCode;
      bh.validCoupon = false; //initialising coupon validity
      const currentDate = new Date();

      if (bh.result && bh.result.length) {
        let data = bh.result[0];
        const startDate = new Date(data.start_date); //coupon valid start date
        const endDate = new Date(data.end_date); //coupon expire date

        if (
          startDate <= currentDate &&
          currentDate <= endDate &&
          data.ifoundry_discount_code
        ) {
          bh.validCoupon = true;
          bh.couponCode = data.ifoundry_discount_code;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VfIRYGiEl4lDdNJ9(bh, parentSpanInst);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_couponExpireValidity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fq8MQSpWUMY3MzwZ',
        spanInst,
        'couponExpireValidity'
      );
    }
  }

  async sd_VfIRYGiEl4lDdNJ9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VfIRYGiEl4lDdNJ9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.validCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.invalidResponse(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.validCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.isDiscountExist(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VfIRYGiEl4lDdNJ9',
        spanInst,
        'sd_VfIRYGiEl4lDdNJ9'
      );
    }
  }

  async invalidResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ err_code: 'INVALID_COUPON' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d0ecgLYfSHKBkL5c');
    }
  }

  async isDiscountExist(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'isDiscountExist',
      parentSpanInst
    );
    try {
      // validating is any discount scheme code already applied over id_no
      bh.hasSchemeCode = false;
      if (bh.schemeCode && bh.schemeCode != '') {
        bh.hasSchemeCode = true;
      }
      bh.payload = {
        search_type: 'scheme_discount_table',
        filter: {
          schemeCode: bh.couponCode,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSchemecodeDtls(bh, parentSpanInst);
      //appendnew_next_isDiscountExist
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QCtGbBTt3IbJ2I4P',
        spanInst,
        'isDiscountExist'
      );
    }
  }

  async quoteSchemecodeDtls(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSchemecodeDtls',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuote(
          spanInst,
          bh.input.body.reference_number,
          undefined
        )
      );
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.payload
        )
      );

      bh.resArray2 = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DMemRCCoNsuCRbfu(bh, parentSpanInst);
      //appendnew_next_quoteSchemecodeDtls
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RAmXr9HRlqaztb8M',
        spanInst,
        'quoteSchemecodeDtls'
      );
    }
  }

  async sd_DMemRCCoNsuCRbfu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DMemRCCoNsuCRbfu',
      parentSpanInst
    );
    try {
      bh.quote = bh.resArray2[0].local.data;
      bh.schemeCodeDetails = bh.resArray2[1].local.result;

      const branchCode = bh.quote.branch_id || '121';
      const businessChannel = bh.quote.business_channel || '602402';
      bh.branch_channel_match = false;

      let isValidBranchCode = bh.schemeCodeDetails.find(
        (X) => X['branchCode'] == '*' || X['branchCode'] == branchCode
      );
      let isValidChannel = bh.schemeCodeDetails.find(
        (X) =>
          X['businessChannelCode'] == '*' ||
          X['businessChannelCode'] == businessChannel
      );

      if (isValidBranchCode && isValidChannel) {
        bh.branch_channel_match = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gswaMKMmhq7AKP1z(bh, parentSpanInst);
      //appendnew_next_sd_DMemRCCoNsuCRbfu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DMemRCCoNsuCRbfu',
        spanInst,
        'sd_DMemRCCoNsuCRbfu'
      );
    }
  }

  async sd_gswaMKMmhq7AKP1z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gswaMKMmhq7AKP1z',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.branch_channel_match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.isSchemeCodePresent(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.branch_channel_match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.invalidResponse1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gswaMKMmhq7AKP1z',
        spanInst,
        'sd_gswaMKMmhq7AKP1z'
      );
    }
  }

  async isSchemeCodePresent(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'isSchemeCodePresent',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.hasSchemeCode,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BkSduB60oHbDkQRX(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.hasSchemeCode,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Wo2E1OGUgYS2slna(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ITrp4dEBh83EGBmn',
        spanInst,
        'isSchemeCodePresent'
      );
    }
  }

  async sd_BkSduB60oHbDkQRX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BkSduB60oHbDkQRX',
      parentSpanInst
    );
    try {
      bh.result = {
        code: bh.couponCode,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DzNxbnqOKwul4Eqz(bh, parentSpanInst);
      //appendnew_next_sd_BkSduB60oHbDkQRX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BkSduB60oHbDkQRX',
        spanInst,
        'sd_BkSduB60oHbDkQRX'
      );
    }
  }

  async sd_DzNxbnqOKwul4Eqz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DzNxbnqOKwul4Eqz');
    }
  }

  async sd_Wo2E1OGUgYS2slna(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wo2E1OGUgYS2slna',
      parentSpanInst
    );
    try {
      //scheme discount for existing scheme code
      bh.payload2 = {
        search_type: 'scheme_discount_table',
        filter: {
          schemeCode: bh.schemeCode,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xnkPIuAmMMJWGToN(bh, parentSpanInst);
      //appendnew_next_sd_Wo2E1OGUgYS2slna
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wo2E1OGUgYS2slna',
        spanInst,
        'sd_Wo2E1OGUgYS2slna'
      );
    }
  }

  async sd_xnkPIuAmMMJWGToN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xnkPIuAmMMJWGToN',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.payload2
        );
      bh.schemeCodeDetails2 = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lXCzHbvywGq0untM(bh, parentSpanInst);
      //appendnew_next_sd_xnkPIuAmMMJWGToN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xnkPIuAmMMJWGToN',
        spanInst,
        'sd_xnkPIuAmMMJWGToN'
      );
    }
  }

  async sd_lXCzHbvywGq0untM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lXCzHbvywGq0untM',
      parentSpanInst
    );
    try {
      bh.schemes = [];
      bh.schemes.push(bh.schemeCodeDetails);
      bh.schemes.push(bh.schemeCodeDetails2);

      let products = [600460, 600461, 600462];

      if (
        Number(
          bh.schemes[0].filter((x) => x.productCode == products[0])?.[0]
            ?.discount
        ) >
          Number(
            bh.schemes[1].filter((x) => x.productCode == products[0])?.[0]
              ?.discount
          ) ||
        Number(
          bh.schemes[0].filter((x) => x.productCode == products[1])?.[0]
            ?.discount
        ) >
          Number(
            bh.schemes[1].filter((x) => x.productCode == products[1])?.[0]
              ?.discount
          ) ||
        Number(
          bh.schemes[0].filter((x) => x.productCode == products[2])?.[0]
            ?.discount
        ) >
          Number(
            bh.schemes[1].filter((x) => x.productCode == products[2])?.[0]
              ?.discount
          )
      )
        bh.result = {
          code: bh.couponCode,
        };
      else {
        bh.result = {
          err_code: 'MAX_DISCOUNT_ALREADY_APPLIED',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_DzNxbnqOKwul4Eqz(bh, parentSpanInst);
      //appendnew_next_sd_lXCzHbvywGq0untM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lXCzHbvywGq0untM',
        spanInst,
        'sd_lXCzHbvywGq0untM'
      );
    }
  }

  async invalidResponse1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ err_code: 'INVALID_COUPON' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_E9kpanWTxhTZ7D7v');
    }
  }

  async apiAudit0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('apiAudit0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_ZhB3cKrhSZiAo7PUInstance: SSD_SERVICE_ID_sd_ZhB3cKrhSZiAo7PU.flows =
        SSD_SERVICE_ID_sd_ZhB3cKrhSZiAo7PU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_ZhB3cKrhSZiAo7PUInstance.logApiAudit(
          spanInst,
          bh.api_key,
          bh.identifier,
          bh.request,
          bh.api_response,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_apiAudit0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SxqIn5JPKbzs4CQd',
        spanInst,
        'apiAudit0'
      );
    }
  }

  async disableResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ err_code: 'DISCOUNT_DISABLED' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z8LkfxfNU3BvZQW6');
    }
  }

  async sd_jQdwJOyewVoyLkAo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jQdwJOyewVoyLkAo',
      parentSpanInst
    );
    try {
      bh.rates = [
        {
          err_code: 500,
          err_msg: 'Something Went Wrong, please Try Again!',
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gZb6gUiZrNgAbVuk(bh, parentSpanInst);
      //appendnew_next_sd_jQdwJOyewVoyLkAo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jQdwJOyewVoyLkAo',
        spanInst,
        'sd_jQdwJOyewVoyLkAo'
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
      (await this.sd_EdsD5lyIw51wIVv7(bh, parentSpanInst))
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
  async sd_EdsD5lyIw51wIVv7(bh, parentSpanInst) {
    const nodes = ['sd_M9tjo3n8kdMcyJao'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_jQdwJOyewVoyLkAo(bh, parentSpanInst);
      //appendnew_next_sd_EdsD5lyIw51wIVv7
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
