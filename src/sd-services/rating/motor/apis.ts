// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y from '../../Quotes/flow'; //_splitter_
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
        'user_auth',
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
          bh = await this.setUrl0(bh, parentSpanInst);
          //appendnew_next_sd_xvNhnIzNEVDg3Yyw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xvNhnIzNEVDg3Yyw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/calculate-premium`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.setUrl1(bh, parentSpanInst);
          //appendnew_next_sd_mn3uvT5dmS9oK6LH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mn3uvT5dmS9oK6LH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/apply/coupon`,
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
          bh = await this.sd_xB3TnVYQacXAvgnT(bh, parentSpanInst);
          //appendnew_next_sd_YjKx5ndT38EE0fBX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YjKx5ndT38EE0fBX');
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

  async quoteSummmary(
    parentSpanInst,
    payload: any = undefined,
    url: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummmary',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
        url,
      },
      local: {
        quoteSummary: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_29YyHsfg2XSvCR1N(bh, parentSpanInst);
      //appendnew_next_quoteSummmary
      return (
        // formatting output variables
        {
          input: {},
          local: {
            quoteSummary: bh.local.quoteSummary,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dR3X6ZdcUlxAJTkU',
        spanInst,
        'quoteSummmary'
      );
    }
  }

  async validateCoupon(
    parentSpanInst,
    id_no: any = undefined,
    code: any = undefined,
    reference_number: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validateCoupon',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
        code,
        reference_number,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Xj6w2cwR1nD2POU8(bh, parentSpanInst);
      //appendnew_next_validateCoupon
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
        'sd_cVCuUNxRsein25J3',
        spanInst,
        'validateCoupon'
      );
    }
  }

  async upsert(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('upsert', parentSpanInst);
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
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_upsert
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
        'sd_fCAIetYtTlXywC66',
        spanInst,
        'upsert'
      );
    }
  }
  //appendnew_flow_apis_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'motor/get-rate';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8gl8mTrmVWbmZzIJ(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mNzi1afzME6ByLMY',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_8gl8mTrmVWbmZzIJ(bh, parentSpanInst) {
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
      bh = await this.sd_o7xTaaycSlxx50oR(bh, parentSpanInst);
      //appendnew_next_sd_8gl8mTrmVWbmZzIJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8gl8mTrmVWbmZzIJ');
    }
  }

  async sd_o7xTaaycSlxx50oR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o7xTaaycSlxx50oR',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xj4ewksxDtDO3qa7(bh, parentSpanInst);
      //appendnew_next_sd_o7xTaaycSlxx50oR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o7xTaaycSlxx50oR',
        spanInst,
        'sd_o7xTaaycSlxx50oR'
      );
    }
  }

  async sd_xj4ewksxDtDO3qa7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xj4ewksxDtDO3qa7');
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'quote/calculate-premium';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I608pmIQ0YCvVSYs(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mc0NESy3Jw9QmCuC',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_I608pmIQ0YCvVSYs(bh, parentSpanInst) {
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
      bh = await this.sd_XQHY7KZvcNde7qsd(bh, parentSpanInst);
      //appendnew_next_sd_I608pmIQ0YCvVSYs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I608pmIQ0YCvVSYs');
    }
  }

  async sd_XQHY7KZvcNde7qsd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XQHY7KZvcNde7qsd',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wlM8zDFuryvRgiFm(bh, parentSpanInst);
      //appendnew_next_sd_XQHY7KZvcNde7qsd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XQHY7KZvcNde7qsd',
        spanInst,
        'sd_XQHY7KZvcNde7qsd'
      );
    }
  }

  async sd_wlM8zDFuryvRgiFm(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wlM8zDFuryvRgiFm');
    }
  }

  async sd_nhVFhHvz5gprzEVY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nhVFhHvz5gprzEVY',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KNBZtv5WcMLC3gFe(bh, parentSpanInst);
      //appendnew_next_sd_nhVFhHvz5gprzEVY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nhVFhHvz5gprzEVY',
        spanInst,
        'sd_nhVFhHvz5gprzEVY'
      );
    }
  }

  async sd_KNBZtv5WcMLC3gFe(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KNBZtv5WcMLC3gFe');
    }
  }

  async sd_xB3TnVYQacXAvgnT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xB3TnVYQacXAvgnT',
      parentSpanInst
    );
    try {
      bh.body = {
        reference_number: bh.input.body.reference_number,
        query_mode: 'ESKA',
      };
      bh.url = process.env.MS_API_URL + 'quote/summary';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T2WtuwTgcvlCRJX3(bh, parentSpanInst);
      //appendnew_next_sd_xB3TnVYQacXAvgnT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xB3TnVYQacXAvgnT',
        spanInst,
        'sd_xB3TnVYQacXAvgnT'
      );
    }
  }

  async sd_T2WtuwTgcvlCRJX3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T2WtuwTgcvlCRJX3',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KNInstance: apis =
        apis.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KNInstance.quoteSummmary(
          spanInst,
          bh.body,
          bh.url
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KNInstance.validateCoupon(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.code,
          bh.input.body.reference_number
        )
      );

      bh.resArray = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jldcUBJIeXiNFhwM(bh, parentSpanInst);
      //appendnew_next_sd_T2WtuwTgcvlCRJX3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T2WtuwTgcvlCRJX3',
        spanInst,
        'sd_T2WtuwTgcvlCRJX3'
      );
    }
  }

  async sd_jldcUBJIeXiNFhwM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jldcUBJIeXiNFhwM',
      parentSpanInst
    );
    try {
      bh.quote_summary = bh.resArray[0].local.quoteSummary;
      bh.validateRes = bh.resArray[1].local.result;
      if (bh.validateRes?.payload && bh.validateRes.payload.code) {
        bh.coupon_code = bh.validateRes?.payload.code;
        bh.isValid = true;
      } else {
        bh.isValid = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_C3VN5VjY2UKaI9KF(bh, parentSpanInst);
      //appendnew_next_sd_jldcUBJIeXiNFhwM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jldcUBJIeXiNFhwM',
        spanInst,
        'sd_jldcUBJIeXiNFhwM'
      );
    }
  }

  async sd_C3VN5VjY2UKaI9KF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C3VN5VjY2UKaI9KF',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_n6amVGuY09vMoTWJ(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_3qgxwFrCFASK0uTP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C3VN5VjY2UKaI9KF',
        spanInst,
        'sd_C3VN5VjY2UKaI9KF'
      );
    }
  }

  async sd_n6amVGuY09vMoTWJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n6amVGuY09vMoTWJ',
      parentSpanInst
    );
    try {
      bh.quote = bh.quote_summary.quote_details;
      delete bh.quote.premium;
      delete bh.quote.created_by;

      bh.sameCoupon = false;
      if (bh.quote.addl_details['coupon_code'] == bh.coupon_code) {
        bh.sameCoupon = true;
      } else {
        bh.quote.addl_details['coupon_code'] = bh.coupon_code;
        let addl_details = JSON.stringify(bh.quote.addl_details);
        let premium_details = JSON.stringify(bh.quote.premium_details);
        let eska_details = JSON.stringify(bh.quote.eska_details);
        bh.quote.addl_details = addl_details;
        bh.quote.premium_details = premium_details;
        bh.quote.eska_details = eska_details;
        bh.body['quote'] = bh.quote;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3ChfiSgWrf6DUlrH(bh, parentSpanInst);
      //appendnew_next_sd_n6amVGuY09vMoTWJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n6amVGuY09vMoTWJ',
        spanInst,
        'sd_n6amVGuY09vMoTWJ'
      );
    }
  }

  async sd_3ChfiSgWrf6DUlrH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3ChfiSgWrf6DUlrH',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.sameCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Y4UPmcA2ffPWf8h3(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.sameCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.upsertQuote1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3ChfiSgWrf6DUlrH',
        spanInst,
        'sd_3ChfiSgWrf6DUlrH'
      );
    }
  }

  async sd_Y4UPmcA2ffPWf8h3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ err_code: 'SAME_COUPONCODE_APPLYED' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y4UPmcA2ffPWf8h3');
    }
  }

  async upsertQuote1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'upsertQuote1',
      parentSpanInst
    );
    try {
      let outputVariables = await this.upsert(spanInst, bh.body);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_upsertQuote1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KfMCoot3cvUljidj',
        spanInst,
        'upsertQuote1'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      if (bh.result.id) {
        bh.body = {
          reference_number: bh.result.reference_number,
        };
        bh.url = process.env.MS_API_URL + 'motor/get-rate';
        bh.isQuoteUpdate = true;
      } else {
        bh.isQuoteUpdate = false;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FylANIkl4GekSwov(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_odlZszIzypSyMOQk',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_FylANIkl4GekSwov(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FylANIkl4GekSwov',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.isQuoteUpdate,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.httpGaterate(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.isQuoteUpdate,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_S0vdUwBcpUuj56Ar(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FylANIkl4GekSwov',
        spanInst,
        'sd_FylANIkl4GekSwov'
      );
    }
  }

  async httpGaterate(bh, parentSpanInst) {
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

      bh.rateRes = responseMsg;
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_httpGaterate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YnjhL6Hahzsx0USr');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'quote/calculate-premium';
      bh.body = {
        id: bh.result.id,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPremium(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N6cm5udwcxqxytRY',
        spanInst,
        'setResponse3'
      );
    }
  }

  async httpPremium(bh, parentSpanInst) {
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
      bh = await this.sd_8WWpYKUwS4uKGQTM(bh, parentSpanInst);
      //appendnew_next_httpPremium
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KM6azuoFPUw2ATPK');
    }
  }

  async sd_8WWpYKUwS4uKGQTM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8WWpYKUwS4uKGQTM',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cHqvgXPSeLEaJYuu(bh, parentSpanInst);
      //appendnew_next_sd_8WWpYKUwS4uKGQTM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8WWpYKUwS4uKGQTM',
        spanInst,
        'sd_8WWpYKUwS4uKGQTM'
      );
    }
  }

  async sd_cHqvgXPSeLEaJYuu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cHqvgXPSeLEaJYuu');
    }
  }

  async sd_S0vdUwBcpUuj56Ar(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ err_code: 'UPDATE_QUOTE_ERROR' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S0vdUwBcpUuj56Ar');
    }
  }

  async sd_3qgxwFrCFASK0uTP(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.validateRes.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3qgxwFrCFASK0uTP');
    }
  }

  async sd_29YyHsfg2XSvCR1N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_29YyHsfg2XSvCR1N',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance: SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow =
        SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          undefined,
          bh.input.payload.reference_number,
          bh.input.payload.query_mode
        );
      bh.local.quoteSummary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_29YyHsfg2XSvCR1N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_29YyHsfg2XSvCR1N',
        spanInst,
        'sd_29YyHsfg2XSvCR1N'
      );
    }
  }

  async sd_Xj6w2cwR1nD2POU8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xj6w2cwR1nD2POU8',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'validate/coupon';
      bh.payload = {
        id_no: bh.input.id_no,
        code: bh.input.code,
        source: 'b2c',
        reference_number: bh.input.reference_number,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Lw8Jvg904xtEgU7z(bh, parentSpanInst);
      //appendnew_next_sd_Xj6w2cwR1nD2POU8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xj6w2cwR1nD2POU8',
        spanInst,
        'sd_Xj6w2cwR1nD2POU8'
      );
    }
  }

  async sd_Lw8Jvg904xtEgU7z(bh, parentSpanInst) {
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
      //appendnew_next_sd_Lw8Jvg904xtEgU7z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lw8Jvg904xtEgU7z');
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/quote/create';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpUpsertQuote(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rE6avI43Rb8H0c2k',
        spanInst,
        'setUrl2'
      );
    }
  }

  async httpUpsertQuote(bh, parentSpanInst) {
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
      //appendnew_next_httpUpsertQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xb7S4t4P2bXAHHWV');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fJpSnLVtS236a97H',
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
      (await this.sd_CLF3cqGwuuZyF1x4(bh, parentSpanInst))
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
  async sd_CLF3cqGwuuZyF1x4(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_nhVFhHvz5gprzEVY', 'sd_KNBZtv5WcMLC3gFe'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_nhVFhHvz5gprzEVY(bh, parentSpanInst);
    //appendnew_next_sd_CLF3cqGwuuZyF1x4
    return true;
  }
  //appendnew_flow_apis_Catch
}
