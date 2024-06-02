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
import * as SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG from '../urpay/db_flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 from '../util/apigee_token_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1 from '../util/message_cache'; //_splitter_
//append_imports_end
export class emkan_apigee_flows {
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
    this.serviceName = 'emkan_apigee_flows';
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
      instance = new emkan_apigee_flows(
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
    //appendnew_flow_emkan_apigee_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: emkan_apigee_flows');
    //appendnew_flow_emkan_apigee_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: emkan_apigee_flows');
    //appendnew_flow_emkan_apigee_flows_HttpIn
  }
  //   service flows_emkan_apigee_flows

  async voucherDetails(
    parentSpanInst,
    voucher_code: any = undefined,
    customer_id: any = undefined,
    application_id: any = undefined,
    locale: any = undefined,
    source_id_no: any = undefined,
    parent_checkout_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'voucherDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        voucher_code,
        customer_id,
        application_id,
        locale,
        source_id_no,
        parent_checkout_id,
      },
      local: {
        voucher_details: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GnqxhYWFIjoPZkBH(bh, parentSpanInst);
      //appendnew_next_voucherDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            voucher_details: bh.local.voucher_details,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F7ZlVhWmJsZV3Rwk',
        spanInst,
        'voucherDetails'
      );
    }
  }

  async emkanSendOtp(
    parentSpanInst,
    source_id_no: any = undefined,
    national_id: any = undefined,
    locale: any = undefined,
    voucher_code: any = undefined,
    parent_checkout_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'emkanSendOtp',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
        national_id,
        locale,
        voucher_code,
        parent_checkout_id,
      },
      local: {
        otp_obj: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RphyCKjsgRQoYJyu(bh, parentSpanInst);
      //appendnew_next_emkanSendOtp
      return (
        // formatting output variables
        {
          input: {},
          local: {
            otp_obj: bh.local.otp_obj,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DC4khXn23fI9ehDI',
        spanInst,
        'emkanSendOtp'
      );
    }
  }

  async emkanVerifyOtp(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    voucher_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'emkanVerifyOtp',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
        voucher_data,
      },
      local: {
        verify_otp_resp: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NnMIF9VYhnfnfhER(bh, parentSpanInst);
      //appendnew_next_emkanVerifyOtp
      return (
        // formatting output variables
        {
          input: {},
          local: {
            verify_otp_resp: bh.local.verify_otp_resp,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VANtHKi0jVvepWwZ',
        spanInst,
        'emkanVerifyOtp'
      );
    }
  }
  //appendnew_flow_emkan_apigee_flows_start

  async sd_GnqxhYWFIjoPZkBH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GnqxhYWFIjoPZkBH',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        national_id: bh.input.customer_id,
      };

      bh.update_obj = {
        voucher_code: bh.input.voucher_code,
        application_id: bh.input.application_id,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment(bh, parentSpanInst);
      //appendnew_next_sd_GnqxhYWFIjoPZkBH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GnqxhYWFIjoPZkBH',
        spanInst,
        'sd_GnqxhYWFIjoPZkBH'
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
      bh = await this.prepRequest(bh, parentSpanInst);
      //appendnew_next_updatePayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Poj05t5kDYJQrhjR',
        spanInst,
        'updatePayment'
      );
    }
  }

  async prepRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepRequest',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.vocher_details = {
        voucherCode: bh.input.voucher_code,
        customerId: bh.input.customer_id,
        applicationId: bh.input.application_id,
      };

      bh.headers = {
        LNG: 'EN',
        CHN: process.env.EMKAN_CHN,
        MERCHANT_CODE: process.env.EMKAN_MERCHANT_CODE,
        'X-Emkan-Token': process.env.EMKAN_TOKEN,
      };

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/emkan/voucher-details`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken(bh, parentSpanInst);
      //appendnew_next_prepRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6yKHCd2eRYFCHVxt',
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
      bh = await this.emkanVoucherDetails(bh, parentSpanInst);
      //appendnew_next_apigeeToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d5aovHDcqrriN2wO',
        spanInst,
        'apigeeToken'
      );
    }
  }

  async emkanVoucherDetails(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.vocher_details,
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

      bh.local.voucher_details = responseMsg;
      bh = await this.sd_N62ecHQV5ma9sekT(bh, parentSpanInst);
      //appendnew_next_emkanVoucherDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MmnSGH2WFVGmBFWd');
    }
  }

  async sd_N62ecHQV5ma9sekT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N62ecHQV5ma9sekT',
      parentSpanInst
    );
    try {
      bh.local.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken(bh, parentSpanInst);
      //appendnew_next_sd_N62ecHQV5ma9sekT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N62ecHQV5ma9sekT',
        spanInst,
        'sd_N62ecHQV5ma9sekT'
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
          'EMKAN_VOUCHER_DETAILS',
          bh.vocher_details,
          bh.local.voucher_details,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_auditToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PsGhIimLLjjo1WCW',
        spanInst,
        'auditToken'
      );
    }
  }

  async voucherCatch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'voucherCatch',
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
          bh.voucher_details = data;
        } else {
          if (data['code']) {
            bh.message_code = data['code'];
          } else {
            bh.message_code = 'ERR_EPG_003';
            bh.errorMessage = data['header']?.['status']?.['description'];
          }
        }
      } else {
        bh.message_code = 'ERR_EPG_003';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0oJttYzJNLnMOJj7(bh, parentSpanInst);
      //appendnew_next_voucherCatch
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lb9WRaRTGrb9GeF2',
        spanInst,
        'voucherCatch'
      );
    }
  }

  async sd_0oJttYzJNLnMOJj7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0oJttYzJNLnMOJj7',
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
        bh = await this.sd_3UUNz5qNnYEzj8YI(bh, parentSpanInst);
      } else {
        bh = await this.auditFail(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0oJttYzJNLnMOJj7',
        spanInst,
        'sd_0oJttYzJNLnMOJj7'
      );
    }
  }

  async sd_3UUNz5qNnYEzj8YI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3UUNz5qNnYEzj8YI',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.voucher_details = bh.voucher_details;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken(bh, parentSpanInst);
      //appendnew_next_sd_3UUNz5qNnYEzj8YI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3UUNz5qNnYEzj8YI',
        spanInst,
        'sd_3UUNz5qNnYEzj8YI'
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
          'EMKAN_VOUCHER_DETAILS_FAIL',
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
        'sd_qteHcPXplNLpiIIF',
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
      bh = await this.sd_bCp4BrhBP8Ptx8UH(bh, parentSpanInst);
      //appendnew_next_getMessage0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7kJE6ADO9W33iqyg',
        spanInst,
        'getMessage0'
      );
    }
  }

  async sd_bCp4BrhBP8Ptx8UH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bCp4BrhBP8Ptx8UH',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.voucher_details = {
        error:
          bh.error_msg ||
          'Emkan payment failed. Please try again later or choose another payment method.',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_bCp4BrhBP8Ptx8UH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bCp4BrhBP8Ptx8UH',
        spanInst,
        'sd_bCp4BrhBP8Ptx8UH'
      );
    }
  }

  async sd_RphyCKjsgRQoYJyu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RphyCKjsgRQoYJyu',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/emkan/send-otp`;
      bh.send_otp_req = {
        customerId: bh.input.national_id,
      };

      bh.headers = {
        LNG: 'EN',
        CHN: process.env.EMKAN_CHN,
        MERCHANT_CODE: process.env.EMKAN_MERCHANT_CODE,
        'X-Emkan-Token': process.env.EMKAN_TOKEN,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_sd_RphyCKjsgRQoYJyu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RphyCKjsgRQoYJyu',
        spanInst,
        'sd_RphyCKjsgRQoYJyu'
      );
    }
  }

  async apigeeToken0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeToken(spanInst);
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.reqOtp(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hpso5fgY4y4eqkyy',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async reqOtp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.send_otp_req,
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

      bh.otp_resp = responseMsg;
      bh = await this.auditToken1(bh, parentSpanInst);
      //appendnew_next_reqOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KjTCwLeJ8T5HUrJv');
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
          'EMKAN_SEND_OTP',
          bh.send_otp_req,
          bh.otp_resp,
          bh.headers,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.otpIdUpdate(bh, parentSpanInst);
      //appendnew_next_auditToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_18j7TK6fmdG9PTfW',
        spanInst,
        'auditToken1'
      );
    }
  }

  async otpIdUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'otpIdUpdate',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        voucher_code: bh.input.voucher_code,
        national_id: bh.input.national_id,
      };

      bh.update_obj = {
        urpay_otp_reference: bh.otp_resp?.['payload']?.['otpID'],
      };

      // bh.local.verify_token_obj = {
      //     redirectUrl: `emkan?parent_checkout_id=${bh.input['parent_checkout_id']}&source_id_no=${bh.input.source_id_no}`

      // }

      // bh.local.status_code = 301
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment1(bh, parentSpanInst);
      //appendnew_next_otpIdUpdate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F3QCpGwDBeGH5oXs',
        spanInst,
        'otpIdUpdate'
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
        'sd_RDZXZ0VKXFRFDGKd',
        spanInst,
        'updatePayment1'
      );
    }
  }

  async sendOtpCatch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendOtpCatch',
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
          if (data['code']) {
            bh.message_code = data['code'];
          } else {
            bh.message_code = 'ERR_EPG_003';
            bh.errorMessage = data['header']?.['status']?.['description'];
          }
        }
      } else {
        bh.message_code = 'ERR_EPG_003';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_flIj1JhOKj1weiN2(bh, parentSpanInst);
      //appendnew_next_sendOtpCatch
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rHag6xSww6JHLCEM',
        spanInst,
        'sendOtpCatch'
      );
    }
  }

  async sd_flIj1JhOKj1weiN2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_flIj1JhOKj1weiN2',
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
        bh = await this.sd_Lo3vz3cbSpEMtmvM(bh, parentSpanInst);
      } else {
        bh = await this.auditFail1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_flIj1JhOKj1weiN2',
        spanInst,
        'sd_flIj1JhOKj1weiN2'
      );
    }
  }

  async sd_Lo3vz3cbSpEMtmvM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lo3vz3cbSpEMtmvM',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken1(bh, parentSpanInst);
      //appendnew_next_sd_Lo3vz3cbSpEMtmvM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lo3vz3cbSpEMtmvM',
        spanInst,
        'sd_Lo3vz3cbSpEMtmvM'
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
          'EMKAN_SEND_OTP_FAIL',
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
        'sd_YUJy66GSFSfyg1p7',
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
      bh = await this.sd_vBW0y5MFHcSE69tP(bh, parentSpanInst);
      //appendnew_next_getMessage1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6BSak0VY9rvGN5BQ',
        spanInst,
        'getMessage1'
      );
    }
  }

  async sd_vBW0y5MFHcSE69tP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vBW0y5MFHcSE69tP',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.otp_obj = {
        error:
          bh.error_msg ||
          'Emkan payment failed.  Please try again later or choose another payment method.',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vBW0y5MFHcSE69tP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vBW0y5MFHcSE69tP',
        spanInst,
        'sd_vBW0y5MFHcSE69tP'
      );
    }
  }

  async sd_NnMIF9VYhnfnfhER(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NnMIF9VYhnfnfhER',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/emkan/verify-otp`;
      bh.verify_obj = {
        customerId: bh.input.voucher_data?.['national_id'],
        voucherCode: bh.input.voucher_data?.['voucher_code'],
        transactionId: `${process.env.EMKAN_MERCHANT_CODE}-${bh.input.parent_checkout_id}`,
        otp: bh.input.voucher_data?.['otp_value'],
        otpID: bh.input.voucher_data?.['otp_reference'],
      };

      bh.headers = {
        LNG: 'EN',
        CHN: process.env.EMKAN_CHN,
        MERCHANT_CODE: process.env.EMKAN_MERCHANT_CODE,
        'X-Emkan-Token': process.env.EMKAN_TOKEN,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_sd_NnMIF9VYhnfnfhER
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NnMIF9VYhnfnfhER',
        spanInst,
        'sd_NnMIF9VYhnfnfhER'
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
      bh = await this.verifyOtp(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kNBcgBWEOs1ekBpM',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async verifyOtp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.verify_obj,
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

      bh.local.verify_otp_resp = responseMsg;
      bh = await this.auditToken2(bh, parentSpanInst);
      //appendnew_next_verifyOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xmnveXyshO2gXTPN');
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
          'EMKAN_VERIFY_OTP',
          bh.verify_obj,
          bh.local.verify_otp_resp,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.source_id_no,
          bh.local.status_code
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YyWoDABTuqIgKxyt(bh, parentSpanInst);
      //appendnew_next_auditToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BZhgu5lQspm4qG2j',
        spanInst,
        'auditToken2'
      );
    }
  }

  async sd_YyWoDABTuqIgKxyt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YyWoDABTuqIgKxyt',
      parentSpanInst
    );
    try {
      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        national_id: bh.input.voucher_data?.['national_id'],
        voucher_code: bh.input.voucher_data?.['voucher_code'],
      };

      bh.payment_desc = 'success';
      bh.update_obj = {
        transaction_receipt:
          bh.local.verify_otp_resp?.['payload']?.['transactionId'],
        payment_status: 'completed',
        updated_date: new Date(),
      };

      bh.local.verify_otp_resp = {
        redirectUrl: `payment_status?parent_checkout_id=${bh.input['parent_checkout_id']}&txn_ref_number=${bh.local.verify_otp_resp?.['payload']?.['transactionId']}&source_id_no=${bh.input['source_id_no']}`,
      };

      bh.local.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment2(bh, parentSpanInst);
      //appendnew_next_sd_YyWoDABTuqIgKxyt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YyWoDABTuqIgKxyt',
        spanInst,
        'sd_YyWoDABTuqIgKxyt'
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
      bh = await this.getPayerDetails(bh, parentSpanInst);
      //appendnew_next_updatePayment2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E6PBt8Ydng74W7WG',
        spanInst,
        'updatePayment2'
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
      bh = await this.emailSmsCallback(bh, parentSpanInst);
      //appendnew_next_getPayerDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NlToEx4985BGdjHu',
        spanInst,
        'getPayerDetails'
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
        'sd_I6WAKQRJW4YsXvce',
        spanInst,
        'emailSmsCallback'
      );
    }
  }

  async verifyOtpCatch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'verifyOtpCatch',
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
          if (data['code']) {
            bh.message_code = data['code'];
          } else {
            bh.message_code = 'ERR_EPG_003';
            bh.errorMessage = data['header']?.['status']?.['description'];
          }
        }
      } else {
        bh.message_code = 'ERR_EPG_003';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5bakty6BHpaN4ZCt(bh, parentSpanInst);
      //appendnew_next_verifyOtpCatch
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1iCmPXQHC9amXESy',
        spanInst,
        'verifyOtpCatch'
      );
    }
  }

  async sd_5bakty6BHpaN4ZCt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5bakty6BHpaN4ZCt',
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
        bh = await this.sd_UVs8pgu50JLr2c4i(bh, parentSpanInst);
      } else {
        bh = await this.auditFail2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5bakty6BHpaN4ZCt',
        spanInst,
        'sd_5bakty6BHpaN4ZCt'
      );
    }
  }

  async sd_UVs8pgu50JLr2c4i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UVs8pgu50JLr2c4i',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.verify_otp_resp = bh.otp_resp;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditToken2(bh, parentSpanInst);
      //appendnew_next_sd_UVs8pgu50JLr2c4i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UVs8pgu50JLr2c4i',
        spanInst,
        'sd_UVs8pgu50JLr2c4i'
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
          'EMKAN_VERIFY_OTP_FAIL',
          bh.verify_obj,
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
        'sd_2rJdIIl8yYDvKvDe',
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
      bh = await this.sd_tpK611R9GkqBHFkX(bh, parentSpanInst);
      //appendnew_next_getMessage2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h8JqzCn3QYtpB6bB',
        spanInst,
        'getMessage2'
      );
    }
  }

  async sd_tpK611R9GkqBHFkX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tpK611R9GkqBHFkX',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.statusCode || 500;

      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        national_id: bh.input.voucher_data?.['national_id'],
        voucher_code: bh.input.voucher_data?.['voucher_code'],
      };

      bh.update_obj = {
        payment_status: 'failed',
        updated_date: new Date(),
      };

      bh.local.verify_otp_resp = {
        redirectUrl: `payment_status?parent_checkout_id=${bh.input['parent_checkout_id']}&txn_ref_number=&source_id_no=${bh.input['source_id_no']}`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePayment3(bh, parentSpanInst);
      //appendnew_next_sd_tpK611R9GkqBHFkX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tpK611R9GkqBHFkX',
        spanInst,
        'sd_tpK611R9GkqBHFkX'
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
        'sd_0OoVAnng3JaEI48f',
        spanInst,
        'updatePayment3'
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
      (await this.sd_e7YCoqtSpKipzjlp(bh, parentSpanInst)) ||
      (await this.sd_LvPCrftW9TUmiM6l(bh, parentSpanInst)) ||
      (await this.sd_ICfQmbVQPPYoEskc(bh, parentSpanInst)) ||
      (await this.sd_cpXqDIfaSH1sZakm(bh, parentSpanInst))
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
  async sd_e7YCoqtSpKipzjlp(bh, parentSpanInst) {
    const nodes = ['sd_MmnSGH2WFVGmBFWd'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.voucherCatch(bh, parentSpanInst);
      //appendnew_next_sd_e7YCoqtSpKipzjlp
      return true;
    }
    return false;
  }
  async sd_LvPCrftW9TUmiM6l(bh, parentSpanInst) {
    const nodes = ['sd_KjTCwLeJ8T5HUrJv'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sendOtpCatch(bh, parentSpanInst);
      //appendnew_next_sd_LvPCrftW9TUmiM6l
      return true;
    }
    return false;
  }
  async sd_ICfQmbVQPPYoEskc(bh, parentSpanInst) {
    const nodes = ['sd_xmnveXyshO2gXTPN'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.verifyOtpCatch(bh, parentSpanInst);
      //appendnew_next_sd_ICfQmbVQPPYoEskc
      return true;
    }
    return false;
  }
  async sd_cpXqDIfaSH1sZakm(bh, parentSpanInst) {
    const nodes = ['sd_I6WAKQRJW4YsXvce'];
    if (nodes.includes(bh.errorSource)) {
      //appendnew_next_sd_cpXqDIfaSH1sZakm
      return true;
    }
    return false;
  }
  //appendnew_flow_emkan_apigee_flows_Catch
}
