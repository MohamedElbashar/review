// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH from '../communication/email_sms_api'; //_splitter_
import * as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj from '../hyper_pay/flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e from './apigee_flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si from './db_flows'; //_splitter_
//append_imports_end
export class mokafaa_apis {
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
    this.serviceName = 'mokafaa_apis';
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
      instance = new mokafaa_apis(
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
    //appendnew_flow_mokafaa_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: mokafaa_apis');
    //appendnew_flow_mokafaa_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: mokafaa_apis');

    this.app['get'](
      `${this.serviceBasePath}/v1/mokafaa`,
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
          bh = await this.getPayerData(bh, parentSpanInst);
          //appendnew_next_sd_Nt7pvcBRWVKCE9yh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Nt7pvcBRWVKCE9yh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/authorizeCustomer`,
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
          bh = await this.insertDataprep(bh, parentSpanInst);
          //appendnew_next_sd_JwgNbNaJYKs925Bu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JwgNbNaJYKs925Bu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/redirect`,
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
          bh = await this.getData(bh, parentSpanInst);
          //appendnew_next_sd_VHuVXoDUhrl6umDP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VHuVXoDUhrl6umDP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/otp_validation`,
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
          bh = await this.otpPayerData(bh, parentSpanInst);
          //appendnew_next_sd_EDB9XPJx5VGykIgu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EDB9XPJx5VGykIgu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/reverse_points`,
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
          bh = await this.reverse(bh, parentSpanInst);
          //appendnew_next_sd_WmXCyqe9jtgYmctk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WmXCyqe9jtgYmctk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/quote_policy_manager`,
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
          bh = await this.getPayer(bh, parentSpanInst);
          //appendnew_next_sd_KWYLL7d14yOFjIai
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KWYLL7d14yOFjIai');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_mokafaa_apis_HttpIn
  }
  //   service flows_mokafaa_apis

  //appendnew_flow_mokafaa_apis_start

  async getPayerData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getPayerData(
          spanInst,
          bh.input.query['parent_checkout_id'],
          bh.input.query['source_id_no']
        );
      bh.payer_data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.mobileNoUi(bh, parentSpanInst);
      //appendnew_next_getPayerData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RWl7PdCgVG1GZTNF',
        spanInst,
        'getPayerData'
      );
    }
  }

  async mobileNoUi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mobileNoUi',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/mokafaa.ejs');

      let cancel_url = `${process.env.SSD_BASE_PATH}/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${bh.payer_data['checkout_id']}`;
      if (bh.payer_data?.['frontend_cb_partial_url']) {
        cancel_url = `${
          bh.payer_data['frontend_cb_partial_url']
        }?reference_number=${
          bh.payer_data?.['source_id_no'] || bh.payer_data['source_id_no']
        }&parent_checkout_id=${bh.payer_data['checkout_id']}`;
      }

      let data = {
        activity_type: 'auth_mobile',
        mobile_no: bh.payer_data['phone_no'],
        mobile_no_cc: '966',
        base_path: process.env.SSD_BASE_PATH,
        errorMessage: '',
        locale: bh.payer_data['locale'] || 'en',
        dataObj: {
          activity_type: 'auth_mobile',
          source_id_no: bh.payer_data['source_id_no'],
          locale: bh.payer_data['locale'] || 'en',
          currency: bh.payer_data['currency'] || 'SAR',
          payer_id: bh.payer_data['payer_id'],
          parent_checkout_id: bh.payer_data['checkout_id'],
          amount: bh.payer_data['amount'],
          mobile_no: `${bh.payer_data['phone_no']}`,
          callback_url: `${process.env.SSD_BASE_PATH}/v1/authorizeCustomer`,
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'Error rendering mokafaa authorize',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9ty3ftnzVtKnErEz(bh, parentSpanInst);
      //appendnew_next_mobileNoUi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2MrQps7UJdwPyZOw',
        spanInst,
        'mobileNoUi'
      );
    }
  }

  async sd_9ty3ftnzVtKnErEz(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9ty3ftnzVtKnErEz');
    }
  }

  async insertDataprep(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertDataprep',
      parentSpanInst
    );
    try {
      bh.dbPayload = {
        payer_id: bh.input.body['payer_id'],
        checkout_id: bh.input.body['parent_checkout_id'],
        redemption_phone_no: `${bh.input.body['mobile_no']}`,
        creation_date: new Date(),
        updated_date: new Date(),
      };

      function validate_cc(mobile_no) {
        let str = mobile_no.substring(0, 3);
        if (str == '966') {
          return mobile_no;
        } else {
          return `966${mobile_no}`;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertDb(bh, parentSpanInst);
      //appendnew_next_insertDataprep
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xMrVdpnAJdUIYWNk',
        spanInst,
        'insertDataprep'
      );
    }
  }

  async insertDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('insertDb', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.addMokafaaTxn(
          spanInst,
          bh.dbPayload
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeAuthMob(bh, parentSpanInst);
      //appendnew_next_insertDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YILy8VNbMJb7x83K',
        spanInst,
        'insertDb'
      );
    }
  }

  async apigeeAuthMob(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeAuthMob',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance: SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows =
        SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance.authorizeCustomer(
          spanInst,
          bh.input.body['mobile_no'],
          bh.input.body['locale'],
          bh.input.body
        );
      bh.response = outputVariables.local.response;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a2RqC0xPfDaNsWKn(bh, parentSpanInst);
      //appendnew_next_apigeeAuthMob
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DjYdZqANhtyxiBLt',
        spanInst,
        'apigeeAuthMob'
      );
    }
  }

  async sd_a2RqC0xPfDaNsWKn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a2RqC0xPfDaNsWKn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.statusCode, 200, undefined, undefined)
      ) {
        bh = await this.sd_oo2ed7jx6eLtv8Xs(bh, parentSpanInst);
      } else {
        bh = await this.sd_lbbJTP9zVdUoRCw1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a2RqC0xPfDaNsWKn',
        spanInst,
        'sd_a2RqC0xPfDaNsWKn'
      );
    }
  }

  async sd_oo2ed7jx6eLtv8Xs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oo2ed7jx6eLtv8Xs',
      parentSpanInst
    );
    try {
      bh.response = {
        redirectUrl: `${process.env.SSD_BASE_PATH}/redirect?parent_checkout_id=${bh.input.body['parent_checkout_id']}&source_id_no=${bh.input.body['source_id_no']}&type=enter_otp`,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_dDkNro05FBBAazWC(bh, parentSpanInst);
      //appendnew_next_sd_oo2ed7jx6eLtv8Xs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oo2ed7jx6eLtv8Xs',
        spanInst,
        'sd_oo2ed7jx6eLtv8Xs'
      );
    }
  }

  async sd_dDkNro05FBBAazWC(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dDkNro05FBBAazWC');
    }
  }

  async sd_lbbJTP9zVdUoRCw1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lbbJTP9zVdUoRCw1',
      parentSpanInst
    );
    try {
      bh.response = {
        redirectUrl: `${process.env.SSD_BASE_PATH}/redirect?parent_checkout_id=${bh.input.body['parent_checkout_id']}&source_id_no=${bh.input.body['source_id_no']}&type=auth_mobile`,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_dDkNro05FBBAazWC(bh, parentSpanInst);
      //appendnew_next_sd_lbbJTP9zVdUoRCw1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lbbJTP9zVdUoRCw1',
        spanInst,
        'sd_lbbJTP9zVdUoRCw1'
      );
    }
  }

  async getData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getData', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getMokafaaTxn(
          spanInst,
          bh.input.query['parent_checkout_id'],
          bh.input.query['source_id_no']
        );
      bh.payer_data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t4Gv2O2pcBnnFJWq(bh, parentSpanInst);
      //appendnew_next_getData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xWr2PszExA5vzuHR',
        spanInst,
        'getData'
      );
    }
  }

  async sd_t4Gv2O2pcBnnFJWq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t4Gv2O2pcBnnFJWq',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.query['type'],
          'enter_otp',
          undefined,
          undefined
        )
      ) {
        bh = await this.enterOtpUi(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.query['type'],
          'auth_mobile',
          undefined,
          undefined
        )
      ) {
        bh = await this.errMobileNoUi(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.query['type'],
          'success',
          undefined,
          undefined
        )
      ) {
        bh = await this.success(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.query['type'],
          'reverse',
          undefined,
          undefined
        )
      ) {
        bh = await this.reverseTxn(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.query['type'],
          'failure',
          undefined,
          undefined
        )
      ) {
        bh = await this.failure(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t4Gv2O2pcBnnFJWq',
        spanInst,
        'sd_t4Gv2O2pcBnnFJWq'
      );
    }
  }

  async enterOtpUi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'enterOtpUi',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/mokafaa.ejs');

      let cancel_url = `${
        process.env.SSD_BASE_PATH
      }/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${
        bh.input.body?.['checkout_id'] || bh.payer_data?.['checkout_id']
      }`;
      if (bh.payer_data?.['frontend_cb_partial_url']) {
        cancel_url = `${
          bh.payer_data['frontend_cb_partial_url']
        }?reference_number=${
          bh.input.body['source_id_no'] || bh.payer_data['source_id_no']
        }&parent_checkout_id=${
          bh.input.body['checkout_id'] || bh.payer_data['checkout_id']
        }`;
      }
      let data = {
        activity_type: 'enter_otp',
        mobile_no: bh.input.body['phone_no'] || bh.payer_data['phone_no'],
        mobile_no_cc: '966',
        redemption_phone_no: bh.payer_data['redemption_phone_no'] || '',
        base_path: process.env.SSD_BASE_PATH,
        errorMessage:
          bh.payer_data['error_message'] != 'OK'
            ? bh.payer_data['error_message']
            : '',
        locale: bh.input.body['locale'] || 'en',
        amount: bh.input.body['amount'] || bh.payer_data['amount'],
        outstanding_amount:
          (bh.payer_data['outstanding_amount'] &&
            bh.payer_data['outstanding_amount'].replace(/-/g, '')) ||
          null,
        dataObj: {
          activity_type: 'enter_otp',
          source_id_no:
            bh.input.body['source_id_no'] || bh.payer_data['source_id_no'],
          locale: bh.input.body['locale'] || 'en',
          currency: bh.input.body['currency'] || 'SAR',
          payer_id: bh.input.body['payer_id'] || bh.payer_data['payer_id'],
          parent_checkout_id:
            bh.input.body['checkout_id'] || bh.payer_data['checkout_id'],
          amount: bh.input.body['amount'] || bh.payer_data['amount'],
          outstanding_amount: bh.payer_data['outstanding_amount'] || null,
          otp_token: bh.payer_data['otp_token'] || '',
          mobile_no: bh.payer_data['phone_no'] || '',
          redemption_phone_no: bh.payer_data['redemption_phone_no'] || '',
          resend_otp_url: `${process.env.SSD_BASE_PATH}/v1/authorizeCustomer`,
          callback_url: `${process.env.SSD_BASE_PATH}/v1/otp_validation`,
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'checkout id has been expired please request again',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HUA71ipWLwgx5Xca(bh, parentSpanInst);
      //appendnew_next_enterOtpUi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W27jDIzHjr6EZvGQ',
        spanInst,
        'enterOtpUi'
      );
    }
  }

  async sd_HUA71ipWLwgx5Xca(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HUA71ipWLwgx5Xca');
    }
  }

  async errMobileNoUi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'errMobileNoUi',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/mokafaa.ejs');

      let cancel_url = `${process.env.SSD_BASE_PATH}/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${bh.payer_data?.['checkout_id']}`;
      if (bh.payer_data?.['frontend_cb_partial_url']) {
        cancel_url = `${bh.payer_data['frontend_cb_partial_url']}?reference_number=${bh.payer_data['source_id_no']}&parent_checkout_id=${bh.payer_data['checkout_id']}`;
      }

      let data = {
        activity_type: 'auth_mobile',
        mobile_no: bh.payer_data['phone_no'],
        mobile_no_cc: '966',
        base_path: process.env.SSD_BASE_PATH,
        errorMessage:
          bh.payer_data['error_message'] || 'Request failed at authorize',
        locale: bh.payer_data['locale'] || 'en',
        dataObj: {
          activity_type: 'auth_mobile',
          source_id_no: bh.payer_data['source_id_no'],
          locale: bh.payer_data['locale'] || 'en',
          currency: bh.payer_data['currency'] || 'SAR',
          payer_id: bh.payer_data['payer_id'],
          parent_checkout_id: bh.payer_data['checkout_id'],
          amount: bh.payer_data['amount'],
          mobile_no: `${bh.payer_data['phone_no']}`,
          callback_url: `${process.env.SSD_BASE_PATH}/v1/authorizeCustomer`,
          resend_otp: `${process.env.SSD_BASE_PATH}/v1/authorizeCustomer`,
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'checkout id has been expired please request again',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HUA71ipWLwgx5Xca(bh, parentSpanInst);
      //appendnew_next_errMobileNoUi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dryN5eA9j6ff2SHv',
        spanInst,
        'errMobileNoUi'
      );
    }
  }

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/mokafaa.ejs');

      let data = {
        activity_type: 'success',
        mobile_no: bh.input.body?.['phone_no'] || bh.payer_data?.['phone_no'],
        mobile_no_cc: '966',
        base_path: process.env.SSD_BASE_PATH,
        errorMessage: '',
        locale: bh.input.body?.['locale'] || 'en',
        amount: bh.input.body?.['amount'] || bh.payer_data?.['amount'],
        image_path: process.env.SUCCESS_OUTLINE_URL,
        dataObj: {
          activity_type: 'success',
          source_id_no:
            bh.input.body?.['source_id_no'] || bh.payer_data?.['source_id_no'],
          locale: bh.input.body?.['locale'] || 'en',
          transactionId: bh.input.body?.['transaction_id'],
          checkout_id:
            bh.input.body?.['checkout_id'] || bh.payer_data?.['checkout_id'],
          amount: bh.input.body?.['amount'],
          reverse_url: `${
            process.env.SSD_BASE_PATH
          }/redirect?parent_checkout_id=${
            bh.input.body?.['checkout_id'] || bh.payer_data?.['checkout_id']
          }&source_id_no=${bh.payer_data['source_id_no']}&type=reverse`,
          payer_id: bh.input.body?.['payer_id'],
          confirm_url: `${process.env.SSD_BASE_PATH}/v1/quote_policy_manager`,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
          'Content-Security-Policy': `img-src 'self' ${process.env.STRAPI_BASE_URL}`,
          'Cross-Origin-Embedder-Policy': 'credentialless',
          'Cross-Origin-Opener-Policy': 'unsafe-none',
          'Cross-Origin-Resource-Policy': 'cross-origin',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'checkout id has been expired please request again',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HUA71ipWLwgx5Xca(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hGrujGREwqmsgn9d',
        spanInst,
        'success'
      );
    }
  }

  async reverseTxn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'reverseTxn',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/mokafaa.ejs');

      let cancel_url = `${
        process.env.SSD_BASE_PATH
      }/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${
        bh.input.body['checkout_id'] || bh.payer_data?.['checkout_id']
      }`;
      if (bh.payer_data?.['frontend_cb_partial_url']) {
        cancel_url = `${
          bh.payer_data['frontend_cb_partial_url']
        }?reference_number=${
          bh.input.body['source_id_no'] || bh.payer_data['source_id_no']
        }&parent_checkout_id=${
          bh.input.body?.['checkout_id'] || bh.payer_data?.['checkout_id']
        }`;
      }

      let data = {
        activity_type: 'reverse',
        mobile_no: bh.input.body?.['phone_no'] || bh.payer_data?.['phone_no'],
        mobile_no_cc: '966',
        base_path: process.env.SSD_BASE_PATH,
        errorMessage: '',
        locale: bh.input.body?.['locale'] || 'en',
        amount: bh.input.body?.['amount'],
        dataObj: {
          activity_type: 'reverse',
          source_id_no:
            bh.input.body?.['source_id_no'] || bh.payer_data?.['source_id_no'],
          locale: bh.input.body?.['locale'] || 'en',
          transactionId:
            bh.input.body?.['transactionId'] ||
            bh.payer_data?.['transaction_id'],
          checkout_id:
            bh.input.body?.['checkout_id'] || bh.payer_data?.['checkout_id'],
          amount: bh.input.body?.['amount'] || bh.payer_data?.['amount'],
          reverse_url: `${process.env.SSD_BASE_PATH}/v1/reverse_points`,
          payer_id: bh.input.body?.['payer_id'] || bh.payer_data?.['payer_id'],
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'checkout id has been expired please request again',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HUA71ipWLwgx5Xca(bh, parentSpanInst);
      //appendnew_next_reverseTxn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RYGO8sNuAkGncwGl',
        spanInst,
        'reverseTxn'
      );
    }
  }

  async failure(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('failure', parentSpanInst);
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/mokafaa.ejs');

      let cancel_url = `${process.env.SSD_BASE_PATH}/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${bh.payer_data?.['checkout_id']}`;
      if (bh.payer_data?.['frontend_cb_partial_url']) {
        cancel_url = `${bh.payer_data['frontend_cb_partial_url']}?reference_number=${bh.payer_data['source_id_no']}&parent_checkout_id=${bh.payer_data?.['checkout_id']}`;
      }

      let data = {
        activity_type: 'failure',
        mobile_no: bh.payer_data['phone_no'],
        mobile_no_cc: '966',
        base_path: process.env.SSD_BASE_PATH,
        errorMessage:
          bh.payer_data['error_message'] || 'Request failed at authorize',
        locale: bh.payer_data['locale'] || 'en',
        dataObj: {
          activity_type: 'enter_otp',
          source_id_no: bh.payer_data['source_id_no'],
          locale: bh.payer_data['locale'] || 'en',
          currency: bh.payer_data['currency'] || 'SAR',
          payer_id: bh.payer_data['payer_id'],
          parent_checkout_id: bh.payer_data['checkout_id'],
          amount: bh.payer_data['amount'],
          mobile_no: `${bh.payer_data['phone_no']}`,
          callback_url: cancel_url,
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'checkout id has been expired please request again',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HUA71ipWLwgx5Xca(bh, parentSpanInst);
      //appendnew_next_failure
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pYq0UbiTetL5rvSx',
        spanInst,
        'failure'
      );
    }
  }

  async otpPayerData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'otpPayerData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance: SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows =
        SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance.otpValidation(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.response;
      bh.status_code = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PfBfQfIDslYW2lD5(bh, parentSpanInst);
      //appendnew_next_otpPayerData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_my6JGnGdDLfZXAn3',
        spanInst,
        'otpPayerData'
      );
    }
  }

  async sd_PfBfQfIDslYW2lD5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PfBfQfIDslYW2lD5',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.status_code,
          200,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Y0tdtghWvJlYTgmX(bh, parentSpanInst);
      } else {
        bh = await this.sd_ugxW4AdPxG1eYv4R(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PfBfQfIDslYW2lD5',
        spanInst,
        'sd_PfBfQfIDslYW2lD5'
      );
    }
  }

  async sd_Y0tdtghWvJlYTgmX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y0tdtghWvJlYTgmX',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.response['outstanding_amount'],
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.getPayerDetails0(bh, parentSpanInst);
      } else {
        bh = await this.getPayerDetails(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y0tdtghWvJlYTgmX',
        spanInst,
        'sd_Y0tdtghWvJlYTgmX'
      );
    }
  }

  async getPayerDetails0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getPayerData(
          spanInst,
          bh.input.body['parent_checkout_id'],
          bh.input.body['source_id_no']
        );
      bh.data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Cb182TJU4EA22NQt(bh, parentSpanInst);
      //appendnew_next_getPayerDetails0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2ilMZ7e3IB613m1Z',
        spanInst,
        'getPayerDetails0'
      );
    }
  }

  async sd_Cb182TJU4EA22NQt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Cb182TJU4EA22NQt',
      parentSpanInst
    );
    try {
      bh.response = {
        redirectUrl: `${process.env.SSD_BASE_PATH}/redirect?parent_checkout_id=${bh.input.body['parent_checkout_id']}&source_id_no=${bh.input.body['source_id_no']}&type=success`,
      };

      bh.statusCode = 200;

      bh.payment_update = {
        payment_status: 'completed',
        payment_desc: 'Payment has been completed',
        checkout_id: bh.input.body['parent_checkout_id'],
        payer_id: bh.data?.['payer_id'],
        transaction_receipt: bh.response?.['transactionID'] || '',
        updated_date: new Date(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePaymentStatus(bh, parentSpanInst);
      //appendnew_next_sd_Cb182TJU4EA22NQt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Cb182TJU4EA22NQt',
        spanInst,
        'sd_Cb182TJU4EA22NQt'
      );
    }
  }

  async updatePaymentStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePaymentStatus',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updatePaymentStatus(
          spanInst,
          bh.payment_update
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_6juFwb8IDCUEzYGV(bh, parentSpanInst);
      //appendnew_next_updatePaymentStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vM7jKl7DoNDglne3',
        spanInst,
        'updatePaymentStatus'
      );
    }
  }

  async sd_6juFwb8IDCUEzYGV(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6juFwb8IDCUEzYGV');
    }
  }

  async getPayerDetails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getOptionsDetails(
          spanInst,
          bh.input.body['payer_id'],
          'MOKAFAA'
        );
      bh.data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YQJCQ4ri7Jm2QDjX(bh, parentSpanInst);
      //appendnew_next_getPayerDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wFeG7C8BT83FlFx',
        spanInst,
        'getPayerDetails'
      );
    }
  }

  async sd_YQJCQ4ri7Jm2QDjX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YQJCQ4ri7Jm2QDjX',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.data['frontend_cb_partial_url'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.frontEndPartialRedirect(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nempty'](
          bh.data['frontend_cb_partial_url'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.frontEndPartialRedirect(bh, parentSpanInst);
      } else {
        bh = await this.paymentOptionsPage(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YQJCQ4ri7Jm2QDjX',
        spanInst,
        'sd_YQJCQ4ri7Jm2QDjX'
      );
    }
  }

  async frontEndPartialRedirect(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'frontEndPartialRedirect',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      bh.response = {
        source_id_no: bh.input.body?.source_id_no,
        redirectUrl: `${bh.data['frontend_cb_partial_url']}?reference_number=${bh.input.body?.source_id_no}&parent_checkout_id=${bh.input?.body?.['parent_checkout_id']}`,
      };

      // bh.statusCode  = 301;
      // bh.redirectUrl = `${bh.data['frontend_cb_partial_url']}?reference_number=${bh.input.body?.source_id_no}&parent_checkout_id=${bh.input?.body?.['parent_checkout_id']}`

      this.tracerService.sendData(spanInst, bh);
      await this.sd_6juFwb8IDCUEzYGV(bh, parentSpanInst);
      //appendnew_next_frontEndPartialRedirect
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HlwYarIr48ILC3gJ',
        spanInst,
        'frontEndPartialRedirect'
      );
    }
  }

  async paymentOptionsPage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentOptionsPage',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      bh.response = {
        source_id_no: bh.input.body?.source_id_no,
        redirectUrl: `${
          process.env.SSD_BASE_PATH
        }/v1/fetchPaymentOptions?product_type=${
          bh.data['product_type'] || 'MOTOR'
        }&channel_code=${bh.data['channel_code'] || 'SP'}&device_type=${
          bh.data['device_type']
        }&checkout_id=${bh.input?.body?.['parent_checkout_id']}`,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_6juFwb8IDCUEzYGV(bh, parentSpanInst);
      //appendnew_next_paymentOptionsPage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j3N2Qw5LiAqRZRMZ',
        spanInst,
        'paymentOptionsPage'
      );
    }
  }

  async sd_ugxW4AdPxG1eYv4R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ugxW4AdPxG1eYv4R',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.status_code;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_6juFwb8IDCUEzYGV(bh, parentSpanInst);
      //appendnew_next_sd_ugxW4AdPxG1eYv4R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ugxW4AdPxG1eYv4R',
        spanInst,
        'sd_ugxW4AdPxG1eYv4R'
      );
    }
  }

  async reverse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('reverse', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance: SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows =
        SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance.reverseTransaction(
          spanInst,
          bh.input.body,
          undefined
        );
      bh.response = outputVariables.local.response;
      bh.status_code = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JQg9KJ3tE4I7JZ2T(bh, parentSpanInst);
      //appendnew_next_reverse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_akWu3t9syHsWoTUO',
        spanInst,
        'reverse'
      );
    }
  }

  async sd_JQg9KJ3tE4I7JZ2T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JQg9KJ3tE4I7JZ2T',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.status_code,
          200,
          undefined,
          undefined
        )
      ) {
        bh = await this.getPayerDetails1(bh, parentSpanInst);
      } else {
        bh = await this.getPayerDetails1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JQg9KJ3tE4I7JZ2T',
        spanInst,
        'sd_JQg9KJ3tE4I7JZ2T'
      );
    }
  }

  async getPayerDetails1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getOptionsDetails(
          spanInst,
          bh.input.body['payer_id'],
          'MOKAFAA'
        );
      bh.data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HTzu5W1UusELG8L3(bh, parentSpanInst);
      //appendnew_next_getPayerDetails1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1Z4wumIUmDAZCnbc',
        spanInst,
        'getPayerDetails1'
      );
    }
  }

  async sd_HTzu5W1UusELG8L3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HTzu5W1UusELG8L3',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      bh.response = {
        source_id_no: bh.input.body?.source_id_no,
        redirectUrl: `${process.env.SSD_BASE_PATH}/v1/payment_status?parent_checkout_id=${bh.input?.body?.['checkout_id']}&txn_ref_number=&source_id_no=${bh.input?.body?.['source_id_no']}`,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zZef29ghOuujRkbC(bh, parentSpanInst);
      //appendnew_next_sd_HTzu5W1UusELG8L3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HTzu5W1UusELG8L3',
        spanInst,
        'sd_HTzu5W1UusELG8L3'
      );
    }
  }

  async sd_zZef29ghOuujRkbC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zZef29ghOuujRkbC',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.input.body['source_id_no'],
          bh.input.body['checkout_id'],
          'PF',
          'Mokafaa Payment has been reversed',
          bh.data['callback_url'],
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_7wLftRtfzusxy7FM(bh, parentSpanInst);
      //appendnew_next_sd_zZef29ghOuujRkbC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zZef29ghOuujRkbC',
        spanInst,
        'sd_zZef29ghOuujRkbC'
      );
    }
  }

  async sd_7wLftRtfzusxy7FM(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7wLftRtfzusxy7FM');
    }
  }

  async getPayer(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getPayer', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getPayerData(
          spanInst,
          bh.input.body['checkout_id'],
          bh.input.body['source_id_no']
        );
      bh.data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateCallbackUrl(bh, parentSpanInst);
      //appendnew_next_getPayer
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XpZu4tMLgqx4C75Y',
        spanInst,
        'getPayer'
      );
    }
  }

  async updateCallbackUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateCallbackUrl',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.input.body['source_id_no'],
          bh.input.body['parent_checkout_id'],
          'PS',
          'Payment has been completed successfully',
          bh.data['callback_url'],
          undefined
        )
      );
      const SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance: SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api =
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendEmailQuoteshare(
          spanInst,
          bh.data,
          undefined
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendSms(
          spanInst,
          bh.data,
          undefined
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YMfJaBHwCFc6K2iU(bh, parentSpanInst);
      //appendnew_next_updateCallbackUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_acJmklUuX5toPF1O',
        spanInst,
        'updateCallbackUrl'
      );
    }
  }

  async sd_YMfJaBHwCFc6K2iU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YMfJaBHwCFc6K2iU',
      parentSpanInst
    );
    try {
      bh.response = {
        redirectUrl: `${process.env.SSD_BASE_PATH}/v1/payment_status?parent_checkout_id=${bh.input.body['checkout_id']}&txn_ref_number=&source_id_no=${bh.input.body['source_id_no']}`,
      };
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sj6vEoqXgwC9vPg4(bh, parentSpanInst);
      //appendnew_next_sd_YMfJaBHwCFc6K2iU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YMfJaBHwCFc6K2iU',
        spanInst,
        'sd_YMfJaBHwCFc6K2iU'
      );
    }
  }

  async sd_sj6vEoqXgwC9vPg4(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sj6vEoqXgwC9vPg4');
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
  //appendnew_flow_mokafaa_apis_Catch
}
