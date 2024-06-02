// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 from '../util/apigee_token_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1 from '../util/message_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si from './db_flows'; //_splitter_
//append_imports_end
export class apigee_flows {
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
    this.serviceName = 'apigee_flows';
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
      instance = new apigee_flows(
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
    //appendnew_flow_apigee_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apigee_flows');
    //appendnew_flow_apigee_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apigee_flows');
    //appendnew_flow_apigee_flows_HttpIn
  }
  //   service flows_apigee_flows

  async authorizeCustomer(
    parentSpanInst,
    mobile_no = '',
    locale: any = undefined,
    payload: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'authorizeCustomer',
      parentSpanInst
    );
    let bh: any = {
      input: {
        mobile_no,
        locale,
        payload,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MPchZems8Q8hUz7s(bh, parentSpanInst);
      //appendnew_next_authorizeCustomer
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x4AWOL6XE5WQx2jl',
        spanInst,
        'authorizeCustomer'
      );
    }
  }

  async otpValidation(parentSpanInst, reqObj: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'otpValidation',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reqObj,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dNxlkPIXPjaqFeu9(bh, parentSpanInst);
      //appendnew_next_otpValidation
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_40QIuosbYoACINJa',
        spanInst,
        'otpValidation'
      );
    }
  }

  async reverseTransaction(
    parentSpanInst,
    payload: any = undefined,
    cron = false,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'reverseTransaction',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
        cron,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTransaction(bh, parentSpanInst);
      //appendnew_next_reverseTransaction
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JBm9nzA6CMPCdTMi',
        spanInst,
        'reverseTransaction'
      );
    }
  }
  //appendnew_flow_apigee_flows_start

  async sd_MPchZems8Q8hUz7s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MPchZems8Q8hUz7s',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.payload = {
        mobile: validate_cc(bh.input.mobile_no),
        currency: bh.input.payload['currency'] || 'SAR',
      };

      bh.url = `${process.env.APIGEE_OCE_URL}/arb-mokafaa/authorize-blu-customer`;
      // bh.url = `${process.env.INT_URL}arb-mokafaa/authorize-blu-customer`;

      function validate_cc(mobile_no) {
        let str = mobile_no.substring(0, 3);
        if (str == '966') {
          return mobile_no;
        } else {
          return `966${mobile_no}`;
        }
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken(bh, parentSpanInst);
      //appendnew_next_sd_MPchZems8Q8hUz7s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MPchZems8Q8hUz7s',
        spanInst,
        'sd_MPchZems8Q8hUz7s'
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
      bh = await this.authMobileNo(bh, parentSpanInst);
      //appendnew_next_apigeeToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e5NF3b26PmNA2pke',
        spanInst,
        'apigeeToken'
      );
    }
  }

  async authMobileNo(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.payload,
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

      bh.local.response = responseMsg;
      bh = await this.updateDbPp(bh, parentSpanInst);
      //appendnew_next_authMobileNo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zXt4DHEU2l4Xb6cB');
    }
  }

  async updateDbPp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateDbPp',
      parentSpanInst
    );
    try {
      bh.filter = {
        payer_id: bh.input.payload['payer_id'],
        checkout_id: bh.input.payload['parent_checkout_id'],
        redemption_phone_no: bh.input.payload['mobile_no'],
      };

      bh.payload = {
        otp_token: bh.local.response?.['payload']?.['otp']?.['otp_token'] || '',
        status_code: bh.local.response?.['payload']?.['status'],
        error_message: bh.local.response?.['payload']?.['message'],
        request_id: bh.local.response?.['payload']?.['requestID'],
        updated_date: new Date(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDb(bh, parentSpanInst);
      //appendnew_next_updateDbPp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MV9Tt13lxnOkUC9u',
        spanInst,
        'updateDbPp'
      );
    }
  }

  async updateDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updateDb', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updateMokafaaTxn(
          spanInst,
          bh.payload,
          bh.filter
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditAuthorize(bh, parentSpanInst);
      //appendnew_next_updateDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zG7miZTmLlPGiECR',
        spanInst,
        'updateDb'
      );
    }
  }

  async auditAuthorize(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditAuthorize',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'MOKAFAA_AUTHORIZE',
          bh.payload,
          bh.local.response,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.payload['source_id_no'],
          '200'
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DtgXW78Gv3BkQZ6Y(bh, parentSpanInst);
      //appendnew_next_auditAuthorize
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gta5bvvwN58BmfPg',
        spanInst,
        'auditAuthorize'
      );
    }
  }

  async sd_DtgXW78Gv3BkQZ6Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DtgXW78Gv3BkQZ6Y',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DtgXW78Gv3BkQZ6Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DtgXW78Gv3BkQZ6Y',
        spanInst,
        'sd_DtgXW78Gv3BkQZ6Y'
      );
    }
  }

  async sd_6PWhL2hEGDNnFdHU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6PWhL2hEGDNnFdHU',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.statusCode = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }

        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.response = data;
        } else {
          if (data['errorCode']) {
            switch (data['errorCode']) {
              case '101':
                bh.message_code = 'ERR_MCMBV_001';
                break;
              case '205':
                bh.message_code = 'ERR_MCMBV_006';
                break;
              case '206':
                bh.message_code = 'ERR_MCMBV_004';
                break;
              case '207':
                bh.message_code = 'ERR_MCMBV_005';
                break;
              case '209':
                bh.message_code = 'ERR_MCMBV_002';
                break;
              case '210':
                bh.message_code = 'ERR_MCMBV_007';
                break;
              default:
                bh.message_code = 'ERR_MCMBV_003';
            }
          } else {
            bh.message_code = 'ERR_MCMBV_003';
          }
        }
      } else {
        bh.response = {
          message: 'Failure occured at mokafaa authorize',
        };
        bh.message_code = 'ERR_MCMBV_003';
        bh.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KReA046E879YnpSc(bh, parentSpanInst);
      //appendnew_next_sd_6PWhL2hEGDNnFdHU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6PWhL2hEGDNnFdHU',
        spanInst,
        'sd_6PWhL2hEGDNnFdHU'
      );
    }
  }

  async sd_KReA046E879YnpSc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KReA046E879YnpSc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.statusCode, 200, undefined, undefined)
      ) {
        bh = await this.sd_DGkTE2aWRQcG0Vj9(bh, parentSpanInst);
      } else {
        bh = await this.sd_2BF6LH8zcyc4NnxC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KReA046E879YnpSc',
        spanInst,
        'sd_KReA046E879YnpSc'
      );
    }
  }

  async sd_DGkTE2aWRQcG0Vj9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DGkTE2aWRQcG0Vj9',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.statusCode || 500;
      bh.local.response = {
        payload: bh.response,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDbPp(bh, parentSpanInst);
      //appendnew_next_sd_DGkTE2aWRQcG0Vj9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DGkTE2aWRQcG0Vj9',
        spanInst,
        'sd_DGkTE2aWRQcG0Vj9'
      );
    }
  }

  async sd_2BF6LH8zcyc4NnxC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2BF6LH8zcyc4NnxC',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.error['response']['body'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_CEbndYjVjCd8W6pG(bh, parentSpanInst);
      } else {
        bh = await this.auditAuthorizeFail(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2BF6LH8zcyc4NnxC',
        spanInst,
        'sd_2BF6LH8zcyc4NnxC'
      );
    }
  }

  async auditAuthorizeFail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditAuthorizeFail',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'MOKAFAA_AUTHORIZE',
          bh.payload,
          bh.error?.['response']?.['body'],
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          bh.message_code,
          undefined,
          bh.input.payload['source_id_no'],
          '200'
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage0(bh, parentSpanInst);
      //appendnew_next_auditAuthorizeFail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AKyw3e43tabK5BwA',
        spanInst,
        'auditAuthorizeFail'
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
      bh = await this.sd_wwxIkrkofnLCGyKW(bh, parentSpanInst);
      //appendnew_next_getMessage0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MeMWa846wi4hwqal',
        spanInst,
        'getMessage0'
      );
    }
  }

  async sd_wwxIkrkofnLCGyKW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wwxIkrkofnLCGyKW',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.statusCode || 500;
      bh.local.response = {
        error: bh.error_msg || 'Authorize otp failure',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wwxIkrkofnLCGyKW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wwxIkrkofnLCGyKW',
        spanInst,
        'sd_wwxIkrkofnLCGyKW'
      );
    }
  }

  async sd_CEbndYjVjCd8W6pG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CEbndYjVjCd8W6pG',
      parentSpanInst
    );
    try {
      bh.filter = {
        payer_id: bh.input.payload['payer_id'],
        checkout_id: bh.input.payload['parent_checkout_id'],
        redemption_phone_no: bh.input.payload['mobile_no'],
      };

      bh.payload = {
        status_code: bh.statusCode,
        error_message:
          bh.error?.['response']?.['body']?.['message'] ||
          bh.error?.['response']?.['body']?.['Response']?.['ErrorMessage'] ||
          'Authorize error failure',
        request_id: bh.error?.['response']?.['body']?.['requestID'] || '',
        updated_date: new Date(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDb0(bh, parentSpanInst);
      //appendnew_next_sd_CEbndYjVjCd8W6pG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CEbndYjVjCd8W6pG',
        spanInst,
        'sd_CEbndYjVjCd8W6pG'
      );
    }
  }

  async updateDb0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updateDb0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updateMokafaaTxn(
          spanInst,
          bh.payload,
          bh.filter
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditAuthorizeFail(bh, parentSpanInst);
      //appendnew_next_updateDb0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LjSD8e8ZZkkkqg9n',
        spanInst,
        'updateDb0'
      );
    }
  }

  async sd_dNxlkPIXPjaqFeu9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dNxlkPIXPjaqFeu9',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.payload = {
        OTPValue: bh.input?.['reqObj']?.['otp_value'],
        OTPToken: bh.input?.['reqObj']?.['otp_token'],
        amount: bh.input?.['reqObj']?.['mokafaa_amount_req'],
        language: 'ar',
      };

      bh.url = `${process.env.APIGEE_OCE_URL}/arb-mokafaa/otp-validation`;
      // bh.url = `${process.env.INT_URL}arb-mokafaa/otp-validation`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_sd_dNxlkPIXPjaqFeu9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dNxlkPIXPjaqFeu9',
        spanInst,
        'sd_dNxlkPIXPjaqFeu9'
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
      bh = await this.otpValRedeem(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sBmTkUNWKZS6RYQf',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async otpValRedeem(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.payload,
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

      bh.local.response = responseMsg;
      bh = await this.updateDbOp(bh, parentSpanInst);
      //appendnew_next_otpValRedeem
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pvgKmSBIAjdcJKHm');
    }
  }

  async updateDbOp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateDbOp',
      parentSpanInst
    );
    try {
      bh.filter = {
        payer_id: bh.input.reqObj?.['payer_id'],
        checkout_id: bh.input.reqObj?.['parent_checkout_id'],
        redemption_phone_no:
          bh.input.reqObj?.['redemption_phone_no'] ||
          bh.input.reqObj?.['mobile_no'],
      };

      bh.payload = {
        request_id:
          bh.local.response && bh.local.response?.['payload']?.['requestID'],
        transaction_id: (
          bh.local.response && bh.local.response?.['payload']?.['transactionID']
        ).toString(),
        mokafaa_points:
          bh.local.response && bh.local.response?.['payload']?.['pointsAmount'],
        outstanding_amount: calc(
          bh.local.response && bh.local.response?.['payload']?.['pointsAmount'],
          bh.input.reqObj?.['payload']?.['outstanding_amount'] ||
            bh.input.reqObj?.['amount']
        )
          .toString()
          .replace(/-/g, ''),
        status_code:
          bh.local.response && bh.local.response?.['payload']?.['status'],
        error_message:
          bh.local.response && bh.local.response?.['payload']?.['message'],
        updated_date: new Date(),
      };

      bh.local.response['outstanding_amount'] = Math.round(
        bh.payload['outstanding_amount']
      );
      function calc(points, amount) {
        points = -points;
        let totalPointsReq = Number((amount * 250).toFixed(2));
        return ((points - totalPointsReq) / 250).toFixed(2);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDb2(bh, parentSpanInst);
      //appendnew_next_updateDbOp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PsAmBcYwGP7as6Ak',
        spanInst,
        'updateDbOp'
      );
    }
  }

  async updateDb2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updateDb2', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updateMokafaaTxn(
          spanInst,
          bh.payload,
          bh.filter
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditOtp(bh, parentSpanInst);
      //appendnew_next_updateDb2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HNwl2HabCORmE0HM',
        spanInst,
        'updateDb2'
      );
    }
  }

  async auditOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditOtp', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'MOKAFAA_OTP_SUCCESS',
          bh.payload,
          bh.local.response,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.reqObj['source_id_no'],
          '200'
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a3n7joBscx8gZJl7(bh, parentSpanInst);
      //appendnew_next_auditOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u8o9pBeEPbalmKq5',
        spanInst,
        'auditOtp'
      );
    }
  }

  async sd_a3n7joBscx8gZJl7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3n7joBscx8gZJl7',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_a3n7joBscx8gZJl7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3n7joBscx8gZJl7',
        spanInst,
        'sd_a3n7joBscx8gZJl7'
      );
    }
  }

  async getTransaction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTransaction',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.getTransaction(
          spanInst,
          bh.input.payload['checkout_id'],
          bh.input.payload['source_id_no'],
          bh.input.cron
        );
      bh.transaction_list = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FamSWhg9UzgRj3G1(bh, parentSpanInst);
      //appendnew_next_getTransaction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_poZP5HfTo6gSMKeG',
        spanInst,
        'getTransaction'
      );
    }
  }

  async sd_FamSWhg9UzgRj3G1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FamSWhg9UzgRj3G1',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gt'](
          bh.transaction_list.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.setCount(bh, parentSpanInst);
      } else {
        bh = await this.sd_J4hhC7ji5EmO21ir(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FamSWhg9UzgRj3G1',
        spanInst,
        'sd_FamSWhg9UzgRj3G1'
      );
    }
  }

  async sd_J4hhC7ji5EmO21ir(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J4hhC7ji5EmO21ir',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J4hhC7ji5EmO21ir
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J4hhC7ji5EmO21ir',
        spanInst,
        'sd_J4hhC7ji5EmO21ir'
      );
    }
  }

  async setCount(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCount', parentSpanInst);
    try {
      bh.transaction_count = bh.transaction_list.length;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LKETfpVz9ltJznDX(bh, parentSpanInst);
      //appendnew_next_setCount
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1tGDgVkkRdhLBjwz',
        spanInst,
        'setCount'
      );
    }
  }

  async sd_LKETfpVz9ltJznDX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LKETfpVz9ltJznDX',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.payload = {
        transactionID:
          bh.transaction_list?.[bh.transaction_count - 1]?.['transaction_id'],
      };

      bh.url = `${process.env.APIGEE_OCE_URL}/arb-mokafaa/reverse-transaction`;
      // bh.url = `${process.env.INT_URL}/arb-mokafaa/authorize-blu-customer`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken2(bh, parentSpanInst);
      //appendnew_next_sd_LKETfpVz9ltJznDX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LKETfpVz9ltJznDX',
        spanInst,
        'sd_LKETfpVz9ltJznDX'
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
      bh = await this.reverseRedem(bh, parentSpanInst);
      //appendnew_next_apigeeToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_excrdFRVGSIPWcdj',
        spanInst,
        'apigeeToken2'
      );
    }
  }

  async reverseRedem(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.payload,
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

      bh.local.response = responseMsg;
      bh = await this.updateDbOp1(bh, parentSpanInst);
      //appendnew_next_reverseRedem
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SdmN8TkQBLRy9WB0');
    }
  }

  async updateDbOp1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateDbOp1',
      parentSpanInst
    );
    try {
      bh.filter = {
        transaction_id:
          bh.transaction_list?.[bh.transaction_count - 1]?.['transaction_id'],
      };

      if (bh.input.payload?.['payer_id']) {
        bh.filter['payer_id'] = bh.input.payload?.['payer_id'];
      }

      if (
        bh.input.payload?.['checkout_id'] ||
        bh.input.payload?.['parent_checkout_id']
      ) {
        bh.filter['checkout_id'] =
          bh.input.payload?.['checkout_id'] ||
          bh.input.payload?.['parent_checkout_id'];
      }

      bh.payload = {
        request_id: bh.local.response?.['payload']?.['requestID'] || '',
        outstanding_amount: null,
        reverse_points: 1,
        status_code: bh.local.response?.['payload']?.['status'] || '',
        error_message: bh.local.response?.['payload']?.['message'] || '',
        updated_date: new Date(),
      };

      bh.payment_update = {
        payment_status: 'failure',
        payment_desc: 'Payment has been reversed',
        checkout_id:
          bh.input.payload?.['checkout_id'] ||
          bh.input.payload?.['parent_checkout_id'],
        payer_id: bh.input.payload?.['payer_id'],
        updated_date: new Date(),
      };

      bh.transaction_count--;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDb3(bh, parentSpanInst);
      //appendnew_next_updateDbOp1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Enwp75WNKrWpZk0f',
        spanInst,
        'updateDbOp1'
      );
    }
  }

  async updateDb3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updateDb3', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updateMokafaaTxn(
          spanInst,
          bh.payload,
          bh.filter
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4KH1yXiXWOJgEp1G(bh, parentSpanInst);
      //appendnew_next_updateDb3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2mkKC3So9zu8EKu7',
        spanInst,
        'updateDb3'
      );
    }
  }

  async sd_4KH1yXiXWOJgEp1G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4KH1yXiXWOJgEp1G',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.transaction_count,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.updatePaymentStatus(bh, parentSpanInst);
      } else if (
        this.sdService.operators['gt'](
          bh.transaction_count,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_LKETfpVz9ltJznDX(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4KH1yXiXWOJgEp1G',
        spanInst,
        'sd_4KH1yXiXWOJgEp1G'
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
      bh = await this.sd_4Qpvw88pZlebT1uk(bh, parentSpanInst);
      //appendnew_next_updatePaymentStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hy36gItwcMyzUBWf',
        spanInst,
        'updatePaymentStatus'
      );
    }
  }

  async sd_4Qpvw88pZlebT1uk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4Qpvw88pZlebT1uk',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_4Qpvw88pZlebT1uk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4Qpvw88pZlebT1uk',
        spanInst,
        'sd_4Qpvw88pZlebT1uk'
      );
    }
  }

  async sd_M5tLYyQLdv6ldc9O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M5tLYyQLdv6ldc9O',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.statusCode = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }

        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.response = data;
        } else {
          if (data['errorCode']) {
            switch (data['errorCode']) {
              case '101':
                bh.message_code = 'ERR_MCMBV_001';
                break;
              case '204':
                bh.message_code = 'ERR_MOTPV_004';
                break;
              case '205':
                bh.message_code = 'ERR_MCMBV_006';
                break;
              case '210':
                bh.message_code = 'ERR_MOTPV_001';
                break;
              case '301':
                bh.message_code = 'ERR_MOTPV_002';
                break;
              case '303':
                bh.message_code = 'ERR_MOTPV_005';
                break;
              case '304':
                bh.message_code = 'ERR_MOTPV_006';
                break;
              default:
                bh.message_code = 'ERR_MOTPV_003';
            }
          } else {
            bh.message_code = 'ERR_MOTPV_003';
          }
        }
      } else {
        bh.response = {
          message: 'Failure occured at mokafaa authorize',
        };
        bh.message_code = 'ERR_MOTPV_003';
        bh.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a0QXVs1KBSWm2QaZ(bh, parentSpanInst);
      //appendnew_next_sd_M5tLYyQLdv6ldc9O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M5tLYyQLdv6ldc9O',
        spanInst,
        'sd_M5tLYyQLdv6ldc9O'
      );
    }
  }

  async sd_a0QXVs1KBSWm2QaZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a0QXVs1KBSWm2QaZ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.statusCode, 200, undefined, undefined)
      ) {
        bh = await this.sd_MKQpANqHocEn3Wt0(bh, parentSpanInst);
      } else {
        bh = await this.sd_O1NfiDttIaRdy2Ns(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a0QXVs1KBSWm2QaZ',
        spanInst,
        'sd_a0QXVs1KBSWm2QaZ'
      );
    }
  }

  async sd_MKQpANqHocEn3Wt0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MKQpANqHocEn3Wt0',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.statusCode || 500;
      bh.local.response = { payload: bh.response };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDbOp(bh, parentSpanInst);
      //appendnew_next_sd_MKQpANqHocEn3Wt0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MKQpANqHocEn3Wt0',
        spanInst,
        'sd_MKQpANqHocEn3Wt0'
      );
    }
  }

  async sd_O1NfiDttIaRdy2Ns(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O1NfiDttIaRdy2Ns',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.error['response']['body'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0VT2Za4ToOWbIo6V(bh, parentSpanInst);
      } else {
        bh = await this.auditOtpValFail(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O1NfiDttIaRdy2Ns',
        spanInst,
        'sd_O1NfiDttIaRdy2Ns'
      );
    }
  }

  async auditOtpValFail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditOtpValFail',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'MOKAFAA_OTP',
          bh.payload,
          bh.error?.['response']?.['body'],
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          bh.messageCode,
          undefined,
          bh.input.reqObj['source_id_no'],
          '200'
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage1(bh, parentSpanInst);
      //appendnew_next_auditOtpValFail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zQINaPgIenUq2SdB',
        spanInst,
        'auditOtpValFail'
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
      bh = await this.sd_YJn5m0WV4c8OGHir(bh, parentSpanInst);
      //appendnew_next_getMessage1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8OU87jGwKbPvhS0y',
        spanInst,
        'getMessage1'
      );
    }
  }

  async sd_YJn5m0WV4c8OGHir(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YJn5m0WV4c8OGHir',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.statusCode || 500;
      bh.local.response = {
        error: bh.error_msg || 'Otp validation api failure',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_YJn5m0WV4c8OGHir
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YJn5m0WV4c8OGHir',
        spanInst,
        'sd_YJn5m0WV4c8OGHir'
      );
    }
  }

  async sd_0VT2Za4ToOWbIo6V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0VT2Za4ToOWbIo6V',
      parentSpanInst
    );
    try {
      bh.filter = {
        payer_id: bh.input.reqObj['payer_id'],
        checkout_id: bh.input.reqObj['parent_checkout_id'],
        redemption_phone_no: bh.input.reqObj['mobile_no'],
      };

      bh.payload = {
        status_code: bh.statusCode,
        error_message:
          bh.error?.['response']?.['body']?.['message'] ||
          bh.error?.['response']?.['body']?.['Response']?.['ErrorMessage'] ||
          'OTP error failure',
        request_id: bh.error?.['response']?.['body']?.['requestID'] || '',
        updated_date: new Date(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDb1(bh, parentSpanInst);
      //appendnew_next_sd_0VT2Za4ToOWbIo6V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0VT2Za4ToOWbIo6V',
        spanInst,
        'sd_0VT2Za4ToOWbIo6V'
      );
    }
  }

  async updateDb1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updateDb1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updateMokafaaTxn(
          spanInst,
          bh.payload,
          bh.filter
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditOtpValFail(bh, parentSpanInst);
      //appendnew_next_updateDb1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5lBLFKLAOJ0ZkoAF',
        spanInst,
        'updateDb1'
      );
    }
  }

  async sd_KU6v63XOtXLXrs1I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KU6v63XOtXLXrs1I',
      parentSpanInst
    );
    try {
      if (
        bh.error &&
        bh.error?.['response'] &&
        bh.error?.['response']?.['body']
      ) {
        let data = bh.error?.['response']?.['body'];
        bh.statusCode = bh.error?.['response']?.['statusCode'] || 400;

        if (typeof bh.error?.['response']?.['body'] == 'string') {
          data = JSON.parse(bh.error?.['response']?.['body']);
        } else {
          data = bh.error?.['response']?.['body'];
        }
        bh.continue = false;
        if (bh.error?.['response']?.['statusCode'] == 200) {
          bh.response = data;
        } else {
          if (data['errorCode']) {
            switch (data['errorCode']) {
              case '210':
                bh.message_code = 'ERR_MOTPV_001';
                break;
              case '301':
                bh.message_code = 'ERR_MOTPV_002';
                break;
              default:
                bh.message_code = 'ERR_MOTPV_003';
            }
          } else {
            bh.message_code = 'ERR_MOTPV_003';

            if (data['status'] == 400 && data['requestID'] && bh.input.cron) {
              bh.continue = true;
            }
          }
        }
      } else {
        bh.response = {
          message: 'Failure occured at mokafaa authorize',
        };
        bh.message_code = 'ERR_MOTPV_003';
        bh.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r00OckhRfOmV2vNk(bh, parentSpanInst);
      //appendnew_next_sd_KU6v63XOtXLXrs1I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KU6v63XOtXLXrs1I',
        spanInst,
        'sd_KU6v63XOtXLXrs1I'
      );
    }
  }

  async sd_r00OckhRfOmV2vNk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r00OckhRfOmV2vNk',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.statusCode, 200, undefined, undefined)
      ) {
        bh = await this.sd_R2YTKqHowXR1BlWn(bh, parentSpanInst);
      } else {
        bh = await this.sd_TYglHipfEVewR8Ph(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r00OckhRfOmV2vNk',
        spanInst,
        'sd_r00OckhRfOmV2vNk'
      );
    }
  }

  async sd_R2YTKqHowXR1BlWn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R2YTKqHowXR1BlWn',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.statusCode || 500;
      bh.local.response = { payload: bh.response };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDbOp1(bh, parentSpanInst);
      //appendnew_next_sd_R2YTKqHowXR1BlWn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R2YTKqHowXR1BlWn',
        spanInst,
        'sd_R2YTKqHowXR1BlWn'
      );
    }
  }

  async sd_TYglHipfEVewR8Ph(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TYglHipfEVewR8Ph',
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
        bh = await this.sd_R2YTKqHowXR1BlWn(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.continue,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7W7oxQIAxvOXkjtN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TYglHipfEVewR8Ph',
        spanInst,
        'sd_TYglHipfEVewR8Ph'
      );
    }
  }

  async sd_7W7oxQIAxvOXkjtN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7W7oxQIAxvOXkjtN',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.error['response']['body'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_SQhleQO9OElXaNvG(bh, parentSpanInst);
      } else {
        bh = await this.auditReverseValF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7W7oxQIAxvOXkjtN',
        spanInst,
        'sd_7W7oxQIAxvOXkjtN'
      );
    }
  }

  async auditReverseValF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditReverseValF',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'MOKAFAA_AUTHORIZE',
          undefined,
          bh.error?.['response']?.['body'],
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          bh.messageCode,
          undefined,
          bh.input.payload['source_id_no'],
          '200'
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage2(bh, parentSpanInst);
      //appendnew_next_auditReverseValF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_okdKkRVLcPufpoyj',
        spanInst,
        'auditReverseValF'
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
      bh = await this.sd_xUwm6lcUiXbwDein(bh, parentSpanInst);
      //appendnew_next_getMessage2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8blm01kHItIAaLyn',
        spanInst,
        'getMessage2'
      );
    }
  }

  async sd_xUwm6lcUiXbwDein(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xUwm6lcUiXbwDein',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.statusCode || 500;
      bh.local.response = {
        error: bh.error_msg,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_xUwm6lcUiXbwDein
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xUwm6lcUiXbwDein',
        spanInst,
        'sd_xUwm6lcUiXbwDein'
      );
    }
  }

  async sd_SQhleQO9OElXaNvG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SQhleQO9OElXaNvG',
      parentSpanInst
    );
    try {
      bh.filter = {
        payer_id: bh.input.payload['payer_id'],
        checkout_id: bh.input.payload['parent_checkout_id'],
        redemption_phone_no: bh.input.payload['mobile_no'],
      };

      bh.payload = {
        status_code: bh.statusCode,
        error_message:
          bh.error?.['response']?.['body']?.['message'] ||
          bh.error?.['response']?.['body']?.['Response']?.['ErrorMessage'] ||
          'Reverse Mokafaa error failure',
        request_id: bh.error?.['response']?.['body']?.['requestID'] || '',
        updated_date: new Date(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateDb4(bh, parentSpanInst);
      //appendnew_next_sd_SQhleQO9OElXaNvG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SQhleQO9OElXaNvG',
        spanInst,
        'sd_SQhleQO9OElXaNvG'
      );
    }
  }

  async updateDb4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updateDb4', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance: SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows =
        SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p81LZq3e2ikhB8siInstance.updateMokafaaTxn(
          spanInst,
          bh.payload,
          bh.filter
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditReverseValF(bh, parentSpanInst);
      //appendnew_next_updateDb4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KXIiRrKsPeWTvQvF',
        spanInst,
        'updateDb4'
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
      (await this.sd_0VwGBmLOTmStLanb(bh, parentSpanInst)) ||
      (await this.sd_DJ48pi9Oo3dzvMwf(bh, parentSpanInst)) ||
      (await this.sd_Dxbs5ID49mixjh0z(bh, parentSpanInst))
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
  async sd_0VwGBmLOTmStLanb(bh, parentSpanInst) {
    const nodes = ['sd_zXt4DHEU2l4Xb6cB'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6PWhL2hEGDNnFdHU(bh, parentSpanInst);
      //appendnew_next_sd_0VwGBmLOTmStLanb
      return true;
    }
    return false;
  }
  async sd_DJ48pi9Oo3dzvMwf(bh, parentSpanInst) {
    const nodes = ['sd_pvgKmSBIAjdcJKHm'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_M5tLYyQLdv6ldc9O(bh, parentSpanInst);
      //appendnew_next_sd_DJ48pi9Oo3dzvMwf
      return true;
    }
    return false;
  }
  async sd_Dxbs5ID49mixjh0z(bh, parentSpanInst) {
    const nodes = ['sd_SdmN8TkQBLRy9WB0'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_KU6v63XOtXLXrs1I(bh, parentSpanInst);
      //appendnew_next_sd_Dxbs5ID49mixjh0z
      return true;
    }
    return false;
  }
  //appendnew_flow_apigee_flows_Catch
}
