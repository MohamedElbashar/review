// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH from '../communication/email_sms_api'; //_splitter_
import * as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj from '../hyper_pay/flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 from '../util/apigee_token_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1 from '../util/message_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG from './db_flows'; //_splitter_
//append_imports_end
export class urpay_flows {
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
    this.serviceName = 'urpay_flows';
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
      instance = new urpay_flows(
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
    //appendnew_flow_urpay_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: urpay_flows');
    //appendnew_flow_urpay_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: urpay_flows');
    //appendnew_flow_urpay_flows_HttpIn
  }
  //   service flows_urpay_flows

  async urpayToken(
    parentSpanInst,
    source_id_no: any = undefined,
    parent_checkout_id: any = undefined,
    payment_method: any = undefined,
    locale: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'urpayToken',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
        parent_checkout_id,
        payment_method,
        locale,
      },
      local: {
        urpay_token_resp: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepRequest(bh, parentSpanInst);
      //appendnew_next_urpayToken
      return (
        // formatting output variables
        {
          input: {},
          local: {
            urpay_token_resp: bh.local.urpay_token_resp,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_60WjIijk4pDVtSJY',
        spanInst,
        'urpayToken'
      );
    }
  }

  async initiateUrpay(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    payment_method: any = undefined,
    locale: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'initiateUrpay',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
        payment_method,
        locale,
      },
      local: {
        verify_token_obj: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPayerDetails(bh, parentSpanInst);
      //appendnew_next_initiateUrpay
      return (
        // formatting output variables
        {
          input: {},
          local: {
            verify_token_obj: bh.local.verify_token_obj,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HZ2UtSixPp5sk7t9',
        spanInst,
        'initiateUrpay'
      );
    }
  }

  async execUrpay(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    otp_value: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('execUrpay', parentSpanInst);
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
        otp_value,
      },
      local: {
        urpay_resp: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPayerDetails1(bh, parentSpanInst);
      //appendnew_next_execUrpay
      return (
        // formatting output variables
        {
          input: {},
          local: {
            urpay_resp: bh.local.urpay_resp,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FlhMas9rhgpk04E1',
        spanInst,
        'execUrpay'
      );
    }
  }

  async resendOtp(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('resendOtp', parentSpanInst);
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
      },
      local: {
        otp_resp: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPayerDetails2(bh, parentSpanInst);
      //appendnew_next_resendOtp
      return (
        // formatting output variables
        {
          input: {},
          local: {
            otp_resp: bh.local.otp_resp,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z2wlPQbNuHgg15Pf',
        spanInst,
        'resendOtp'
      );
    }
  }
  //appendnew_flow_urpay_flows_start

  async prepRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepRequest',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.generate_token_obj = {
        userName: process.env.URPAY_USERNAME,
        password: process.env.URPAY_KEY,
      };

      bh.headers = {
        'X-Client-Id': process.env.URPAY_CLIENT_ID,
        'X-Session-Language': 'EN',
      };

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/urpay/generatetoken`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken(bh, parentSpanInst);
      //appendnew_next_prepRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ae8CBejVr6SOzg3r',
        spanInst,
        'prepRequest'
      );
    }
  }

  async apigeeToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateToken(bh, parentSpanInst);
      //appendnew_next_apigeeToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uUeugA4oZeMkCtJV',
        spanInst,
        'apigeeToken'
      );
    }
  }

  async generateToken(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.generate_token_obj,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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

      bh.local.urpay_token_resp = responseMsg;
      bh = await this.sd_NOBav3T0vOw8WJvl(bh, parentSpanInst);
      //appendnew_next_generateToken
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nIX5bHbRxRz1v0Ex');
    }
  }

  async sd_NOBav3T0vOw8WJvl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NOBav3T0vOw8WJvl',
      parentSpanInst
    );
    try {
      bh.local.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken(bh, parentSpanInst);
      //appendnew_next_sd_NOBav3T0vOw8WJvl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NOBav3T0vOw8WJvl',
        spanInst,
        'sd_NOBav3T0vOw8WJvl'
      );
    }
  }

  async auditToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditToken',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_GENERATE_TOKEN',
          bh.generate_token_obj,
          bh.local.urpay_token_resp,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mLJtwkHdwS2Ba9PL(bh, parentSpanInst);
      //appendnew_next_auditToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZYpaOPGYPlXILTqL',
        spanInst,
        'auditToken'
      );
    }
  }

  async sd_mLJtwkHdwS2Ba9PL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mLJtwkHdwS2Ba9PL',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        payment_method: bh.input.payment_method,
      };

      bh.update_obj = {
        urpay_security_token: bh.token_payload?.['body']?.['Security_token'],
        urpay_session_id: bh.token_payload?.['body']?.['Session_id'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment(bh, parentSpanInst);
      //appendnew_next_sd_mLJtwkHdwS2Ba9PL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mLJtwkHdwS2Ba9PL',
        spanInst,
        'sd_mLJtwkHdwS2Ba9PL'
      );
    }
  }

  async updatePayment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePayment',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.updateDb(
          spanInst,
          bh.filter,
          bh.update_obj
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updatePayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dNRSdYzkftmQaixu',
        spanInst,
        'updatePayment'
      );
    }
  }

  async sd_FpwfvHaaiZWpIG9N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FpwfvHaaiZWpIG9N',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.status_code = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }

        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.token_payload = data;
        } else {
          bh.message_code = 'ERR_UGT_001';
          bh.errorMessage = data['header']?.['status']?.['description'];
        }
      } else {
        bh.response = {
          message: 'Failure occured at urpay generate token',
        };
        bh.errorMessage = 'Generate token for urpay failed';
        bh.message_code = 'ERR_UGT_001';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JvMS12hYWWqB9ris(bh, parentSpanInst);
      //appendnew_next_sd_FpwfvHaaiZWpIG9N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FpwfvHaaiZWpIG9N',
        spanInst,
        'sd_FpwfvHaaiZWpIG9N'
      );
    }
  }

  async sd_JvMS12hYWWqB9ris(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JvMS12hYWWqB9ris',
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
        bh = await this.sd_EaS5s7iNESJrVBhW(bh, parentSpanInst);
      } else {
        bh = await this.auditFail(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JvMS12hYWWqB9ris',
        spanInst,
        'sd_JvMS12hYWWqB9ris'
      );
    }
  }

  async sd_EaS5s7iNESJrVBhW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EaS5s7iNESJrVBhW',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.urpay_token_resp = bh.token_payload;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken(bh, parentSpanInst);
      //appendnew_next_sd_EaS5s7iNESJrVBhW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EaS5s7iNESJrVBhW',
        spanInst,
        'sd_EaS5s7iNESJrVBhW'
      );
    }
  }

  async auditFail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditFail', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_GENERATE_TOKEN',
          bh.generate_token_obj,
          bh.error,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          bh.errorMessage,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage0(bh, parentSpanInst);
      //appendnew_next_auditFail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dQTTYIEv5cVFucir',
        spanInst,
        'auditFail'
      );
    }
  }

  async getMessage0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance: SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache =
        SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance.getAllMessages(
          spanInst,
          bh.message_code,
          bh.input.locale
        );
      bh.error_msg = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vWdaqMecLiSFulgT(bh, parentSpanInst);
      //appendnew_next_getMessage0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gPoUZu1mCFADW65a',
        spanInst,
        'getMessage0'
      );
    }
  }

  async sd_vWdaqMecLiSFulgT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vWdaqMecLiSFulgT',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.status_code || 500;
      bh.local.urpay_token_resp = {
        error:
          bh.errorMessage ||
          'Urpay payment failed. Please try again later or choose another payment method.',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vWdaqMecLiSFulgT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vWdaqMecLiSFulgT',
        spanInst,
        'sd_vWdaqMecLiSFulgT'
      );
    }
  }

  async getPayerDetails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.getPayerDetails(
          spanInst,
          bh.input.parent_checkout_id,
          bh.input.source_id_no
        );
      bh.payer_details = outputVariables.local.payer_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qu0HUb4QSLkakg0M(bh, parentSpanInst);
      //appendnew_next_getPayerDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mjyJLj58ihVJhHpw',
        spanInst,
        'getPayerDetails'
      );
    }
  }

  async sd_qu0HUb4QSLkakg0M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qu0HUb4QSLkakg0M',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      const now = new Date();
      const timestampWithoutMillis = now.toISOString().slice(0, -5);

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/urpay/ecomm-initiate`;
      bh.initiateObj = {
        transactionInfo: {
          amount: {
            currency: 'SAR',
            value: bh.payer_details['amount'] || '',
          },
          externalTransactionId: timestampWithoutMillis,
          sourceConsumerMobileNumber: `+${bh.payer_details['mobile_no']}`,
          targetMerchantId: process.env.URPAY_TARGET_MERCHANT_ID,
          targetMerchantWalletNumber:
            process.env.URPAY_TARGET_MERCHANT_WALLET_NUMBER,
          targetTerminalId: process.env.URPAY_TARGET_TERMINAL_ID,
        },
      };

      bh.headers = {
        'X-Client-Id': process.env.URPAY_CLIENT_ID,
        'X-Session-Language': 'EN',
        'X-Security-Token': bh.payer_details.urpay_security_token,
        'X-Session-Id': bh.payer_details.urpay_session_id,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken3(bh, parentSpanInst);
      //appendnew_next_sd_qu0HUb4QSLkakg0M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qu0HUb4QSLkakg0M',
        spanInst,
        'sd_qu0HUb4QSLkakg0M'
      );
    }
  }

  async apigeeToken3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.initiatePayment(bh, parentSpanInst);
      //appendnew_next_apigeeToken3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iALzWNVKiZxHOvSq',
        spanInst,
        'apigeeToken3'
      );
    }
  }

  async initiatePayment(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.initiateObj,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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

      bh.local.verify_token_obj = responseMsg;
      bh = await this.auditToken1(bh, parentSpanInst);
      //appendnew_next_initiatePayment
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vrs1wdHN5Pu8cPGx');
    }
  }

  async auditToken1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditToken1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_INITIATE_URPAY',
          bh.initiateObj,
          bh.local.verify_token_obj,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lcf8MjucQCFxVZx4(bh, parentSpanInst);
      //appendnew_next_auditToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UEAxpBPe94djKibx',
        spanInst,
        'auditToken1'
      );
    }
  }

  async sd_lcf8MjucQCFxVZx4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lcf8MjucQCFxVZx4',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        payment_method: bh.input.payment_method,
      };

      bh.update_obj = {
        urpay_verification_token:
          bh.token_payload?.['body']?.['Verification_token'],
        urpay_otp_reference: bh.token_payload?.['body']?.['otpReference'],
      };

      bh.local.verify_token_obj = {
        redirectUrl: `urpay?parent_checkout_id=${bh.input['parent_checkout_id']}&source_id_no=${bh.input.source_id_no}`,
      };

      bh.local.status_code = 301;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment1(bh, parentSpanInst);
      //appendnew_next_sd_lcf8MjucQCFxVZx4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lcf8MjucQCFxVZx4',
        spanInst,
        'sd_lcf8MjucQCFxVZx4'
      );
    }
  }

  async updatePayment1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePayment1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.updateDb(
          spanInst,
          bh.filter,
          bh.update_obj
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updatePayment1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yzXmQbkWcPkBNW3z',
        spanInst,
        'updatePayment1'
      );
    }
  }

  async sd_Tba23GnaXMlmFTyv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tba23GnaXMlmFTyv',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.status_code = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }

        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.token_payload = data;
        } else {
          bh.message_code = 'ERR_UGT_001';
          bh.errorMessage = data['header']?.['status']?.['description'];
        }
      } else {
        bh.response = {
          message: 'Failure occured at urpay generate token',
        };
        bh.errorMessage = 'Urpay payment failed to process';
        bh.message_code = 'ERR_UGT_001';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vt05IPfkA3BPTOxR(bh, parentSpanInst);
      //appendnew_next_sd_Tba23GnaXMlmFTyv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tba23GnaXMlmFTyv',
        spanInst,
        'sd_Tba23GnaXMlmFTyv'
      );
    }
  }

  async sd_vt05IPfkA3BPTOxR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vt05IPfkA3BPTOxR',
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
        bh = await this.sd_n49WXU3gOjJJk9bS(bh, parentSpanInst);
      } else {
        bh = await this.auditFail1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vt05IPfkA3BPTOxR',
        spanInst,
        'sd_vt05IPfkA3BPTOxR'
      );
    }
  }

  async sd_n49WXU3gOjJJk9bS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n49WXU3gOjJJk9bS',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.verify_token_obj = bh.token_payload;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken1(bh, parentSpanInst);
      //appendnew_next_sd_n49WXU3gOjJJk9bS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n49WXU3gOjJJk9bS',
        spanInst,
        'sd_n49WXU3gOjJJk9bS'
      );
    }
  }

  async auditFail1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditFail1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_INITIATE_URPAY',
          bh.initiateObj,
          bh.error,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          bh.errorMessage,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage1(bh, parentSpanInst);
      //appendnew_next_auditFail1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3P5Xwq1LJvLHCkN3',
        spanInst,
        'auditFail1'
      );
    }
  }

  async getMessage1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance: SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache =
        SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance.getAllMessages(
          spanInst,
          bh.message_code,
          bh.input.locale
        );
      bh.error_msg = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qbZby5tCAVwJr4FJ(bh, parentSpanInst);
      //appendnew_next_getMessage1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JuQy9oWyQGi6OkuU',
        spanInst,
        'getMessage1'
      );
    }
  }

  async sd_qbZby5tCAVwJr4FJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qbZby5tCAVwJr4FJ',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.verify_token_obj = {
        error:
          bh.errorMessage ||
          'Urpay payment failed.  Please try again later or choose another payment method.',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qbZby5tCAVwJr4FJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qbZby5tCAVwJr4FJ',
        spanInst,
        'sd_qbZby5tCAVwJr4FJ'
      );
    }
  }

  async getPayerDetails1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.getPayerDetails(
          spanInst,
          bh.input.parent_checkout_id,
          bh.input.source_id_no
        );
      bh.payer_details = outputVariables.local.payer_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WFrTdHghWWYE76tq(bh, parentSpanInst);
      //appendnew_next_getPayerDetails1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bNGAtmanl0L3pcRQ',
        spanInst,
        'getPayerDetails1'
      );
    }
  }

  async sd_WFrTdHghWWYE76tq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WFrTdHghWWYE76tq',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      const now = new Date();
      const timestampWithoutMillis = now.toISOString().slice(0, -5);

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/urpay/ecomm-execute`;
      bh.initiateObj = {
        transactionInfo: {
          amount: {
            currency: 'SAR',
            value: bh.payer_details['amount'] || '',
          },
          externalTransactionId: timestampWithoutMillis,
          sourceConsumerMobileNumber: `+${bh.payer_details['mobile_no']}`,
          targetMerchantId: process.env.URPAY_TARGET_MERCHANT_ID,
          targetMerchantWalletNumber:
            process.env.URPAY_TARGET_MERCHANT_WALLET_NUMBER,
          targetTerminalId: process.env.URPAY_TARGET_TERMINAL_ID,
        },
        OTPInfo: {
          otp: bh.input.otp_value,
          otpReference: bh.payer_details['urpay_otp_reference'],
        },
      };

      bh.headers = {
        'X-Client-Id': process.env.URPAY_CLIENT_ID,
        'X-Session-Language': 'EN',
        'X-Security-Token': bh.payer_details.urpay_security_token,
        'X-Session-Id': bh.payer_details.urpay_session_id,
        'X-Verification-Token': bh.payer_details.urpay_verification_token,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_sd_WFrTdHghWWYE76tq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WFrTdHghWWYE76tq',
        spanInst,
        'sd_WFrTdHghWWYE76tq'
      );
    }
  }

  async apigeeToken1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.initiatePayment1(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0WFNGZqzS0VEAeBU',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async initiatePayment1(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.initiateObj,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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

      bh.local.urpay_resp = responseMsg;
      bh = await this.auditToken2(bh, parentSpanInst);
      //appendnew_next_initiatePayment1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t7ZAyZUD3qAsXfuo');
    }
  }

  async auditToken2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditToken2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_PAYMENT_EXEC',
          bh.initiateObj,
          bh.local.urpay_resp,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_p0X8GgVunAYJb8PP(bh, parentSpanInst);
      //appendnew_next_auditToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z3Nh90T9sBGYLA3A',
        spanInst,
        'auditToken2'
      );
    }
  }

  async sd_p0X8GgVunAYJb8PP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p0X8GgVunAYJb8PP',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        payer_id: bh.payer_details['payer_id'],
      };

      bh.payment_desc =
        bh.local.urpay_resp?.['header']?.['status']?.['description'] ||
        'success';
      bh.update_obj = {
        transaction_receipt:
          bh.local.urpay_resp?.['body']?.['transactionReferenceId'],
        payment_status: 'completed',
        updated_date: new Date(),
      };

      bh.local.urpay_resp = {
        redirectUrl: `payment_status?parent_checkout_id=${bh.input['parent_checkout_id']}&txn_ref_number=${bh.local.urpay_resp?.['body']?.['transactionReferenceId']}&source_id_no=${bh.input['source_id_no']}`,
      };

      bh.local.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment2(bh, parentSpanInst);
      //appendnew_next_sd_p0X8GgVunAYJb8PP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p0X8GgVunAYJb8PP',
        spanInst,
        'sd_p0X8GgVunAYJb8PP'
      );
    }
  }

  async updatePayment2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePayment2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.updateDb(
          spanInst,
          bh.filter,
          bh.update_obj
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.emailSmsCallback(bh, parentSpanInst);
      //appendnew_next_updatePayment2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xu96uhdomqN038fM',
        spanInst,
        'updatePayment2'
      );
    }
  }

  async emailSmsCallback(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'emailSmsCallback',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance: SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api =
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendEmailQuoteshare(
          spanInst,
          bh.payer_details,
          undefined
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendSms(
          spanInst,
          bh.payer_details,
          undefined
        )
      );
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.input.source_id_no,
          bh.input.parent_checkout_id,
          bh.update_obj['payment_status'],
          bh.payment_desc,
          bh.payer_details['callback_url'],
          bh.update_obj['transaction_receipt']
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_emailSmsCallback
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GUNpdseiVShUV6Ln',
        spanInst,
        'emailSmsCallback'
      );
    }
  }

  async sd_rQuMESPsLy2fqMUY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rQuMESPsLy2fqMUY',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.status_code = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }

        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.urpay_resp_payload = data;
        } else {
          bh.message_code = 'ERR_UGT_001';
          bh.errorMessage = data?.['header']?.['status']?.['description'];
        }
      } else {
        bh.response = {
          message: 'Failure occured at urpay generate token',
        };
        bh.message_code = 'ERR_UGT_001';
        bh.errorMessage = 'Failed at URPAY OTP verification';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CPDWvav7FSIRSGiC(bh, parentSpanInst);
      //appendnew_next_sd_rQuMESPsLy2fqMUY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rQuMESPsLy2fqMUY',
        spanInst,
        'sd_rQuMESPsLy2fqMUY'
      );
    }
  }

  async sd_CPDWvav7FSIRSGiC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CPDWvav7FSIRSGiC',
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
        bh = await this.sd_Wvx6WuNM3nSU3TgQ(bh, parentSpanInst);
      } else {
        bh = await this.auditFail2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CPDWvav7FSIRSGiC',
        spanInst,
        'sd_CPDWvav7FSIRSGiC'
      );
    }
  }

  async sd_Wvx6WuNM3nSU3TgQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wvx6WuNM3nSU3TgQ',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.urpay_resp = bh.urpay_resp_payload;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken2(bh, parentSpanInst);
      //appendnew_next_sd_Wvx6WuNM3nSU3TgQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wvx6WuNM3nSU3TgQ',
        spanInst,
        'sd_Wvx6WuNM3nSU3TgQ'
      );
    }
  }

  async auditFail2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditFail2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_PAYMENT_EXEC',
          bh.initiateObj,
          bh.error,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage2(bh, parentSpanInst);
      //appendnew_next_auditFail2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_errwxMxQGTRcM1oq',
        spanInst,
        'auditFail2'
      );
    }
  }

  async getMessage2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance: SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache =
        SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance.getAllMessages(
          spanInst,
          bh.message_code,
          bh.input.locale
        );
      bh.error_msg = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S6RmWr9ARQouwITv(bh, parentSpanInst);
      //appendnew_next_getMessage2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qvfNEG3U3mFniky2',
        spanInst,
        'getMessage2'
      );
    }
  }

  async sd_S6RmWr9ARQouwITv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S6RmWr9ARQouwITv',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.statusCode || 500;
      bh.local.response = {
        error:
          bh.error_msg ||
          'Urpay payment failed.  Please try again later or choose another payment method.',
      };

      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        payer_id: bh.payer_details['payer_id'],
      };

      bh.update_obj = {
        payment_status: 'failed',
        updated_date: new Date(),
      };

      bh.local.urpay_resp = {
        redirectUrl: `payment_status?parent_checkout_id=${bh.input['parent_checkout_id']}&txn_ref_number=&source_id_no=${bh.input['source_id_no']}`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment3(bh, parentSpanInst);
      //appendnew_next_sd_S6RmWr9ARQouwITv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S6RmWr9ARQouwITv',
        spanInst,
        'sd_S6RmWr9ARQouwITv'
      );
    }
  }

  async updatePayment3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePayment3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.updateDb(
          spanInst,
          bh.filter,
          bh.update_obj
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updatePayment3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lPbcuxIREd32YTWX',
        spanInst,
        'updatePayment3'
      );
    }
  }

  async getPayerDetails2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.getPayerDetails(
          spanInst,
          bh.input.parent_checkout_id,
          bh.input.source_id_no
        );
      bh.payer_details = outputVariables.local.payer_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yom7ewO5Jlw94Awb(bh, parentSpanInst);
      //appendnew_next_getPayerDetails2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wyXtwO3H3TVcyssM',
        spanInst,
        'getPayerDetails2'
      );
    }
  }

  async sd_yom7ewO5Jlw94Awb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yom7ewO5Jlw94Awb',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      const now = new Date();
      const timestampWithoutMillis = now.toISOString().slice(0, -5);

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/urpay/resendotp`;
      bh.initiateObj = {
        mobileNumber: `+${bh.payer_details['mobile_no']}`,
        otpReference: bh.payer_details['urpay_otp_reference'],
        purpose: '004',
      };

      bh.headers = {
        'X-Client-Id': process.env.URPAY_CLIENT_ID,
        'X-Session-Language': 'EN',
        'X-Security-Token': bh.payer_details.urpay_security_token,
        'X-Session-Id': bh.payer_details.urpay_session_id,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken2(bh, parentSpanInst);
      //appendnew_next_sd_yom7ewO5Jlw94Awb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yom7ewO5Jlw94Awb',
        spanInst,
        'sd_yom7ewO5Jlw94Awb'
      );
    }
  }

  async apigeeToken2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resendOtpReq(bh, parentSpanInst);
      //appendnew_next_apigeeToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XgELw13Kibzl9JPa',
        spanInst,
        'apigeeToken2'
      );
    }
  }

  async resendOtpReq(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.initiateObj,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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

      bh.local.otp_resp = responseMsg;
      bh = await this.auditToken3(bh, parentSpanInst);
      //appendnew_next_resendOtpReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hwkV4O0IPhOiBrJ4');
    }
  }

  async auditToken3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditToken3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_RESEND_OTP',
          bh.initiateObj,
          bh.local.otp_resp,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L3Fq8iKTnsauorkG(bh, parentSpanInst);
      //appendnew_next_auditToken3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qzpVdoqhL5MFEZgv',
        spanInst,
        'auditToken3'
      );
    }
  }

  async sd_L3Fq8iKTnsauorkG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L3Fq8iKTnsauorkG',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        payer_id: bh.payer_details?.['payer_id'],
      };

      bh.update_obj = {
        urpay_verification_token: bh.otp_resp?.['body']?.['Verification_token'],
        urpay_otp_reference: bh.otp_resp?.['body']?.['otpReference'],
      };

      bh.local.verify_token_obj = {
        redirectUrl: `urpay?parent_checkout_id=${bh.input['parent_checkout_id']}&source_id_no=${bh.input.source_id_no}`,
      };

      bh.local.status_code = 301;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment5(bh, parentSpanInst);
      //appendnew_next_sd_L3Fq8iKTnsauorkG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L3Fq8iKTnsauorkG',
        spanInst,
        'sd_L3Fq8iKTnsauorkG'
      );
    }
  }

  async updatePayment5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePayment5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.updateDb(
          spanInst,
          bh.filter,
          bh.update_obj
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updatePayment5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W9wUoyyopGO7npdw',
        spanInst,
        'updatePayment5'
      );
    }
  }

  async sd_9tSNrJ4Jh0B42AqU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9tSNrJ4Jh0B42AqU',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.status_code = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }

        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.otp_resp = data;
        } else {
          bh.message_code = 'ERR_UGT_001';
          bh.errorMessage = data?.['header']?.['status']?.['description'];
        }
      } else {
        bh.response = {
          message: 'Failure occured at urpay generate token',
        };
        bh.message_code = 'ERR_UGT_001';
        bh.errorMessage = 'Failed at URPAY OTP verification';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fn8uZanNbN1ZNB5C(bh, parentSpanInst);
      //appendnew_next_sd_9tSNrJ4Jh0B42AqU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9tSNrJ4Jh0B42AqU',
        spanInst,
        'sd_9tSNrJ4Jh0B42AqU'
      );
    }
  }

  async sd_fn8uZanNbN1ZNB5C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fn8uZanNbN1ZNB5C',
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
        bh = await this.sd_udZzTZRTlZKXKqNo(bh, parentSpanInst);
      } else {
        bh = await this.auditFail3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fn8uZanNbN1ZNB5C',
        spanInst,
        'sd_fn8uZanNbN1ZNB5C'
      );
    }
  }

  async sd_udZzTZRTlZKXKqNo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_udZzTZRTlZKXKqNo',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.otp_resp = bh.otp_resp;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken3(bh, parentSpanInst);
      //appendnew_next_sd_udZzTZRTlZKXKqNo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_udZzTZRTlZKXKqNo',
        spanInst,
        'sd_udZzTZRTlZKXKqNo'
      );
    }
  }

  async auditFail3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditFail3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'URPAY_RESEND_OTP',
          bh.initiateObj,
          bh.error,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage3(bh, parentSpanInst);
      //appendnew_next_auditFail3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NTBkWI44CRMq35m0',
        spanInst,
        'auditFail3'
      );
    }
  }

  async getMessage3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance: SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache =
        SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance.getAllMessages(
          spanInst,
          bh.message_code,
          bh.input.locale
        );
      bh.error_msg = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dh466ILQ4FIxDMHB(bh, parentSpanInst);
      //appendnew_next_getMessage3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4S1PITnwIHXDm3dX',
        spanInst,
        'getMessage3'
      );
    }
  }

  async sd_dh466ILQ4FIxDMHB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dh466ILQ4FIxDMHB',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.statusCode || 500;
      bh.local.response = {
        error:
          bh.error_msg ||
          'Urpay payment failed.  Please try again later or choose another payment method.',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_dh466ILQ4FIxDMHB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dh466ILQ4FIxDMHB',
        spanInst,
        'sd_dh466ILQ4FIxDMHB'
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
      (await this.sd_yV7vTDonScGKN6CF(bh, parentSpanInst)) ||
      (await this.sd_WCGuaNCu69G3eMbg(bh, parentSpanInst)) ||
      (await this.sd_YhHjrLVsogLLve3C(bh, parentSpanInst)) ||
      (await this.sd_1QrluiUYHU99koCW(bh, parentSpanInst)) ||
      (await this.sd_fdaAWclO0E9a9yOU(bh, parentSpanInst))
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
  async sd_yV7vTDonScGKN6CF(bh, parentSpanInst) {
    const nodes = ['sd_nIX5bHbRxRz1v0Ex'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_FpwfvHaaiZWpIG9N(bh, parentSpanInst);
      //appendnew_next_sd_yV7vTDonScGKN6CF
      return true;
    }
    return false;
  }
  async sd_WCGuaNCu69G3eMbg(bh, parentSpanInst) {
    const nodes = ['sd_Vrs1wdHN5Pu8cPGx'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Tba23GnaXMlmFTyv(bh, parentSpanInst);
      //appendnew_next_sd_WCGuaNCu69G3eMbg
      return true;
    }
    return false;
  }
  async sd_YhHjrLVsogLLve3C(bh, parentSpanInst) {
    const nodes = ['sd_t7ZAyZUD3qAsXfuo'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_rQuMESPsLy2fqMUY(bh, parentSpanInst);
      //appendnew_next_sd_YhHjrLVsogLLve3C
      return true;
    }
    return false;
  }
  async sd_1QrluiUYHU99koCW(bh, parentSpanInst) {
    const nodes = ['sd_hwkV4O0IPhOiBrJ4'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_9tSNrJ4Jh0B42AqU(bh, parentSpanInst);
      //appendnew_next_sd_1QrluiUYHU99koCW
      return true;
    }
    return false;
  }
  async sd_fdaAWclO0E9a9yOU(bh, parentSpanInst) {
    const nodes = ['sd_GUNpdseiVShUV6Ln'];
    if (nodes.includes(bh.errorSource)) {
      //appendnew_next_sd_fdaAWclO0E9a9yOU
      return true;
    }
    return false;
  }
  //appendnew_flow_urpay_flows_Catch
}
