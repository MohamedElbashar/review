// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 from '../util/apigee_token_cache'; //_splitter_
//append_imports_end
export class flow {
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
    this.serviceName = 'flow';
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
      instance = new flow(
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
    //appendnew_flow_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flow');
    //appendnew_flow_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: flow');
    //appendnew_flow_flow_HttpIn
  }
  //   service flows_flow

  async hyperCheckout(
    parentSpanInst,
    payload: any = undefined,
    source_id_no = '',
    payment_method = '',
    locale: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'hyperCheckout',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
        source_id_no,
        payment_method,
        locale,
      },
      local: {
        statusCode: undefined,
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepCheckoutReq(bh, parentSpanInst);
      //appendnew_next_hyperCheckout
      return (
        // formatting output variables
        {
          input: {},
          local: {
            statusCode: bh.local.statusCode,
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_54Y4H2G4OSipEbFx',
        spanInst,
        'hyperCheckout'
      );
    }
  }

  async getHyperpayStatus(
    parentSpanInst,
    hyperpay_checkout_id = '',
    source_id_no = '',
    parent_checkout_id = '',
    payment_method: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getHyperpayStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        hyperpay_checkout_id,
        source_id_no,
        parent_checkout_id,
        payment_method,
      },
      local: {
        statusCode: 0,
        response: undefined,
        payment_status: '',
        payment_status_desc: '',
        fullResponse: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepPsReq(bh, parentSpanInst);
      //appendnew_next_getHyperpayStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            statusCode: bh.local.statusCode,
            response: bh.local.response,
            payment_status: bh.local.payment_status,
            payment_status_desc: bh.local.payment_status_desc,
            fullResponse: bh.local.fullResponse,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1bJiVTlbDpMgtT6T',
        spanInst,
        'getHyperpayStatus'
      );
    }
  }

  async getSourceIdNo(parentSpanInst, checkout_id = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getSourceIdNo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        checkout_id,
      },
      local: {
        source_ref_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSourceidSql(bh, parentSpanInst);
      //appendnew_next_getSourceIdNo
      return (
        // formatting output variables
        {
          input: {},
          local: {
            source_ref_data: bh.local.source_ref_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x0HeDEbUm3HmhEFs',
        spanInst,
        'getSourceIdNo'
      );
    }
  }

  async appPsUpdate(
    parentSpanInst,
    source_id_no = '',
    checkout_id = '',
    payment_status = '',
    payment_status_desc = '',
    callback_url = '',
    txn_ref_number = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'appPsUpdate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
        checkout_id,
        payment_status,
        payment_status_desc,
        callback_url,
        txn_ref_number,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepPayloadReq(bh, parentSpanInst);
      //appendnew_next_appPsUpdate
      return (
        // formatting output variables
        {
          input: {
            payment_status_desc: bh.input.payment_status_desc,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QI5Ya0zsQiRTUATr',
        spanInst,
        'appPsUpdate'
      );
    }
  }

  async getPaymentStatDb(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    txn_ref_number: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPaymentStatDb',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
        txn_ref_number,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPaymentstatusSql(bh, parentSpanInst);
      //appendnew_next_getPaymentStatDb
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
        'sd_LkGTNmQKsMyYNUWC',
        spanInst,
        'getPaymentStatDb'
      );
    }
  }
  //appendnew_flow_flow_start

  async prepCheckoutReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepCheckoutReq',
      parentSpanInst
    );
    try {
      const querystring = require('querystring');

      bh.target = process.env.TARGET_OCE;

      let entityId = process.env.ENTITY_ID;
      if (bh.input.payment_method == 'APPLEPAY') {
        entityId = process.env.APPLE_ENTITY_ID;
      }

      // bh.url = `${process.env.HYPER_PAY_BASE_URL}/v1/checkouts`;
      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/hyperpay/checkout`;
      bh.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-ART-HYPERPAY-TOKEN': process.env.HYPER_PAY_TOKEN,
        'X-ART-HYPERPAY-ENTITYID': entityId,
      };

      bh.input.payload['entityId'] = entityId;
      bh.input.payload['paymentType'] = 'DB';
      bh.formatPayload = {
        amount:
          parseFloat(bh.input.payload.amount.toString() || '0').toFixed(2) ||
          '0.00',
        currency: bh.input.payload.currency || 'SAR',
        paymentType: 'DB',
        'customer.email': bh.input.payload.email || '',
        'customer.givenName': bh.input.payload.name || '',
        'customer.surname': bh.input.payload.name || '',
        'customer.mobile':
          bh.input.payment_method == 'STC_PAY'
            ? ''
            : bh.input.payload.phone_no || '',
        'billing.street1': bh.input.payload.street || '',
        'billing.city': bh.input.payload.city || '',
        'billing.country': bh.input.payload.country || 'SA',
        'billing.postcode': bh.input.payload.postcode || '',
        merchantTransactionId: bh.input.payload.checkout_id || '',
      };

      bh.payload = querystring.stringify(bh.formatPayload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_prepCheckoutReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_biMC6PmLlH9ZA6Et',
        spanInst,
        'prepCheckoutReq'
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
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.hyperpayInitiate(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kobnBEPjyFzHYaXz',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async hyperpayInitiate(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
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

      bh.response = responseMsg;
      bh = await this.setOutputRes(bh, parentSpanInst);
      //appendnew_next_hyperpayInitiate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mmsssNwd7z63KrbB');
    }
  }

  async setOutputRes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setOutputRes',
      parentSpanInst
    );
    try {
      if (
        bh.response['payload']['result'] &&
        bh.response['payload']['result']['description'].includes('succ')
      ) {
        bh.local.statusCode = 303;
        bh.local.response = {
          hyperpay_checkout_id: bh.response['payload']['id'],
          source_id_no: bh.input.source_id_no,
          payment_method: bh.input.payment_method,
          checkout_id: bh.input.checkout_id,
          payment_redirect_url: `paymentRedirection?hyperpay_checkout_id=${bh.response['payload']['id']}&payment_method=${bh.input.payment_method}&locale=${bh.input['locale']}`,
        };
      } else {
        bh.local.statusCode = 500;
        bh.local.response = {
          error:
            bh.response['payload']['result']['description'] ||
            'Hyper Pay checkout api failure',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.hyperPayAudit1(bh, parentSpanInst);
      //appendnew_next_setOutputRes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D9uEy8ANJaAWsYlv',
        spanInst,
        'setOutputRes'
      );
    }
  }

  async hyperPayAudit1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'hyperPayAudit1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          bh.url,
          bh.payload,
          bh.response,
          bh.headers,
          undefined,
          new Date().toISOString(),
          bh.local.response['error'],
          undefined,
          bh.input.source_id_no,
          bh.local.statusCode
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_hyperPayAudit1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aRTKueoZQzK0VIxA',
        spanInst,
        'hyperPayAudit1'
      );
    }
  }

  async prepPsReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepPsReq', parentSpanInst);
    try {
      // below has been used to get source_code id from payment details
      bh.target = process.env.TARGET_OCE;

      bh.filter = {
        checkout_id: bh.input.parent_checkout_id,
        hyperpay_checkout_id: bh.input.hyperpay_checkout_id,
      };

      let entityId = process.env.ENTITY_ID;
      if (bh.input.payment_method == 'APPLEPAY') {
        entityId = process.env.APPLE_ENTITY_ID;
      }

      bh.url = `${process.env.APIGEE_OCE_URL}/v1/art/hyperpay/payment-status?checkoutId=${bh.input.hyperpay_checkout_id}`;
      bh.method = 'GET';
      bh.headers = {
        'X-ART-HYPERPAY-TOKEN': process.env.HYPER_PAY_TOKEN,
        'X-ART-HYPERPAY-ENTITYID': entityId,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_prepPsReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f7ZNApXYd0ssMBqe',
        spanInst,
        'prepPsReq'
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
      bh = await this.hyperPayPsGet(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q4O7aBkQzKuiNta5',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async hyperPayPsGet(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: undefined,
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

      bh.response = responseMsg;
      bh = await this.setOutputUpdateRes(bh, parentSpanInst);
      //appendnew_next_hyperPayPsGet
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z1Eu0EBthLrjzB2L');
    }
  }

  async setOutputUpdateRes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setOutputUpdateRes',
      parentSpanInst
    );
    try {
      bh.local.fullResponse = bh.response;

      let resultCode =
        bh.response['payload'] &&
        bh.response['payload']['result'] &&
        bh.response['payload']['result']['code'];
      const successPattern = /(000\.000\.|000\.100\.1|000\.[36])/;
      const manuallPattern = /(000\.400\.0[^3]|000\.400\.100)/;
      const match1 = successPattern.test(resultCode);
      const match2 = manuallPattern.test(resultCode);
      const txn_ref_number = uniqueId();
      bh.local.statusCode = 303;
      if (match1 || match2) {
        bh.local.response = {
          checkout_id: bh.input.parent_checkout_id,
          hyperpay_checkout_id: bh.input.hyperpay_checkout_id,
          source_id_no: bh.input.soursource_id_no,
        };
        bh.local.payment_status = 'success';
        bh.local.payment_status_desc =
          bh.response['payload']['result']['description'];
        bh.update_payer_data = {
          payment_completion_time: new Date().toISOString(),
          checkout_id: bh.input.parent_checkout_id,
          hyperpay_checkout_id: bh.input.hyperpay_checkout_id,
          transaction_receipt:
            bh.response['payload']?.['resultDetails']?.[
              'transaction.receipt'
            ] || null,
          payment_status: 'completed',
          updated_date: new Date(),
        };
      } else {
        bh.local.response = {
          error:
            bh.response['payload']['result']['description'] ||
            'Hyper Pay status check failure',
          txn_ref_number: txn_ref_number,
        };
        bh.update_payer_data = {
          payment_completion_time: new Date().toISOString(),
          checkout_id: bh.input.parent_checkout_id,
          hyperpay_checkout_id: bh.input.hyperpay_checkout_id,
          payment_status:
            bh.response['payload']?.['result']?.['description'] || 'Failed',
          updated_date: new Date(),
        };

        let desc =
          bh.response['payload']?.['result']?.['description'].toLowerCase();
        if (desc.includes('pending')) {
          bh.local.payment_status = 'pending';
        } else {
          bh.local.payment_status = 'failed';
        }
        bh.local.payment_status_desc =
          bh.response['payload']['result']['description'] || 'Payment Failed';
      }

      function uniqueId() {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        return dateString + randomness;
      }

      console.log('update prayer data ', bh.update_payer_data);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JwbP6c1WjIPKQfNi(bh, parentSpanInst);
      //appendnew_next_setOutputUpdateRes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aXP1P1IUB8WeioEp',
        spanInst,
        'setOutputUpdateRes'
      );
    }
  }

  async sd_JwbP6c1WjIPKQfNi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JwbP6c1WjIPKQfNi',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.local.payerResult = await dmUtilsInst.updateByFilter(
        '_EN_dtkig9esmm',
        bh.filter,
        bh.update_payer_data
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JwbP6c1WjIPKQfNi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JwbP6c1WjIPKQfNi',
        spanInst,
        'sd_JwbP6c1WjIPKQfNi'
      );
    }
  }

  async prepResStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepResStatus',
      parentSpanInst
    );
    try {
      console.log(bh);
      if (
        bh.response &&
        bh.response['payload'] &&
        bh.response['payload']['description']
      ) {
        bh.local.statusCode = 500;
        bh.local.response = {
          error:
            bh.response['payload']['result']['description'] ||
            'Payment API Failure',
        };
      } else {
        bh.local.statusCode = 400;
        bh.local.response = {
          error:
            'Invalid payment session found for the requested id - are you mixing test/live servers or have you paid more than 30min ago?',
        };
      }
      bh.local.payment_status = 'Payment pending';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.hyperPayAudit(bh, parentSpanInst);
      //appendnew_next_prepResStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gPmcK6PTKv0pGWWT',
        spanInst,
        'prepResStatus'
      );
    }
  }

  async hyperPayAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'hyperPayAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          bh.url,
          bh.input.body,
          bh.error?.['response']?.['body'],
          bh.headers,
          undefined,
          new Date().toISOString(),
          bh.local.response['error'],
          undefined,
          bh.input.source_id_no,
          bh.local.statusCode
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_hyperPayAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lx9Scy5ctGll9INk',
        spanInst,
        'hyperPayAudit'
      );
    }
  }

  async getSourceidSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSourceidSql',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd."payment_method",pd."checkout_id" AS "checkout_id", pd2."source_id_no", pd."callback_url", pd."txn_ref_number", pd2."phone_no", pd2."name", pd2."email", pd2."addl_details", pd."hyperpay_checkout_id", pd."amount",json_value(pd2."addl_details", '$.locale') "locale"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON pd2."id" = pd."payer_id" 
WHERE pd."hyperpay_checkout_id" = :1`;

      bh.params = [bh.input.checkout_id];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tQFVMcRA0B1e3OLV(bh, parentSpanInst);
      //appendnew_next_getSourceidSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wy5iHx4UVbOzD0Z6',
        spanInst,
        'getSourceidSql'
      );
    }
  }

  async sd_tQFVMcRA0B1e3OLV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tQFVMcRA0B1e3OLV',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setRes(bh, parentSpanInst);
      //appendnew_next_sd_tQFVMcRA0B1e3OLV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tQFVMcRA0B1e3OLV',
        spanInst,
        'sd_tQFVMcRA0B1e3OLV'
      );
    }
  }

  async setRes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setRes', parentSpanInst);
    try {
      if (bh.result.length > 0) {
        bh.local.source_ref_data = bh.result[0];
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setRes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dt2LGGqrgVc9rpRt',
        spanInst,
        'setRes'
      );
    }
  }

  async prepPayloadReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepPayloadReq',
      parentSpanInst
    );
    try {
      let payment_status = '';
      let payment_desc = bh.input.payment_status_desc.toLowerCase();
      if (
        payment_desc.includes('completed') ||
        payment_desc.includes('success') ||
        bh.input.payment_status == 'success'
      ) {
        payment_status = 'PS';
      } else if (
        payment_desc.includes('pending') ||
        payment_desc.includes('cancel')
      ) {
        payment_status = 'PPG';
      } else {
        payment_status = 'PF';
      }
      bh.payload = {
        checkout_id: bh.input.checkout_id,
        reference_number: bh.input.source_id_no,
        status: payment_status,
        payment_status_desc: payment_desc.replace(/'/g, ''),
        txn_ref_number: bh.input.txn_ref_number,
      };
      bh.url = bh.input.callback_url;
      bh.method = 'POST';

      bh.addl_details = JSON.stringify({ url: bh.url });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.appCallReq(bh, parentSpanInst);
      //appendnew_next_prepPayloadReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ONmyDHwmP4Am1RW',
        spanInst,
        'prepPayloadReq'
      );
    }
  }

  async appCallReq(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: bh.method,
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
      bh = await this.sd_DbBVV1fWLPmCrLyG(bh, parentSpanInst);
      //appendnew_next_appCallReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uptBboZ3Ov496gcM');
    }
  }

  async sd_DbBVV1fWLPmCrLyG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DbBVV1fWLPmCrLyG',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'callback',
          bh.payload,
          bh.result,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          bh.addl_details,
          bh.input.source_id_no,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DbBVV1fWLPmCrLyG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DbBVV1fWLPmCrLyG',
        spanInst,
        'sd_DbBVV1fWLPmCrLyG'
      );
    }
  }

  async sd_FnPOGtXhnH6VtyIr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FnPOGtXhnH6VtyIr',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'callback',
          bh.payload,
          bh.error?.['response']?.['body'],
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          bh.addl_details,
          bh.input.source_id_no,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_FnPOGtXhnH6VtyIr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FnPOGtXhnH6VtyIr',
        spanInst,
        'sd_FnPOGtXhnH6VtyIr'
      );
    }
  }

  async getPaymentstatusSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPaymentstatusSql',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd."payment_status", pd."checkout_id", pd2."source_id_no", pd."txn_ref_number", json_value(pd2."addl_details", '$.locale') "locale", pd."hyperpay_checkout_id",
json_value(pd2."addl_details", '$.frontend_cb_success_url') "frontend_cb_success_url",
json_value(pd2."addl_details", '$.frontend_cb_partial_url') "frontend_cb_partial_url",
pd."payment_method", pd."sadad_bill_no", pd."amount"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON pd2."id" = pd."payer_id"  
WHERE pd."checkout_id" = :1 AND pd2."source_id_no"  = :2 ${
        bh.input.txn_ref_number
          ? 'and (pd."hyperpay_checkout_id" = :3 or pd."transaction_receipt" = :4)'
          : ''
      }`;

      bh.params = [bh.input.parent_checkout_id, bh.input.source_id_no];

      if (bh.input.txn_ref_number) {
        bh.params.push(bh.input.txn_ref_number);
        bh.params.push(bh.input.txn_ref_number);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XBsUE7M0M70xjfMS(bh, parentSpanInst);
      //appendnew_next_getPaymentstatusSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6rzbh6pAC1uo3Ux7',
        spanInst,
        'getPaymentstatusSql'
      );
    }
  }

  async sd_XBsUE7M0M70xjfMS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XBsUE7M0M70xjfMS',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResPayment(bh, parentSpanInst);
      //appendnew_next_sd_XBsUE7M0M70xjfMS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XBsUE7M0M70xjfMS',
        spanInst,
        'sd_XBsUE7M0M70xjfMS'
      );
    }
  }

  async setResPayment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResPayment',
      parentSpanInst
    );
    try {
      console.log('payment response', bh.result);
      bh.hyperpay_ps_check = false;
      if (bh.result.length > 0) {
        bh.local.response = bh.result[0];
        bh.local.statusCode = 200;
      } else {
        bh.local.statusCode = 500;
        bh.local.response = {
          error: 'No status found',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResPayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K4u6CelwzZXpD4oy',
        spanInst,
        'setResPayment'
      );
    }
  }

  async prepRes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepRes', parentSpanInst);
    try {
      console.log(bh);
      if (
        bh.response &&
        bh.response['payload'] &&
        bh.response['payload']['description']
      ) {
        bh.local.statusCode = 500;
        bh.local.response = {
          error:
            bh.response['payload']['result']['description'] ||
            'Payment API Failure',
        };
      } else {
        bh.local.statusCode = 400;
        bh.local.response = {
          error:
            'Invalid payment session found for the requested id - are you mixing test/live servers or have you paid more than 30min ago?',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.hyperPayErrorAudit(bh, parentSpanInst);
      //appendnew_next_prepRes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G5AXhfwxNN0NzKw2',
        spanInst,
        'prepRes'
      );
    }
  }

  async hyperPayErrorAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'hyperPayErrorAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          bh.url,
          bh.payload,
          bh.error,
          bh.headers,
          undefined,
          new Date().toISOString(),
          bh.local.response['error'],
          undefined,
          bh.input.source_id_no,
          bh.local.statusCode
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_hyperPayErrorAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bI9CxS62ArBhOXRB',
        spanInst,
        'hyperPayErrorAudit'
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
      (await this.sd_IW6RI5DGOUJhqatD(bh, parentSpanInst)) ||
      (await this.sd_SIOuU4X4yQ0wu5aU(bh, parentSpanInst)) ||
      (await this.sd_lZ9ER5RToNEeKSfT(bh, parentSpanInst))
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
  async sd_IW6RI5DGOUJhqatD(bh, parentSpanInst) {
    const nodes = ['sd_z1Eu0EBthLrjzB2L', 'sd_q4O7aBkQzKuiNta5'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.prepResStatus(bh, parentSpanInst);
      //appendnew_next_sd_IW6RI5DGOUJhqatD
      return true;
    }
    return false;
  }
  async sd_SIOuU4X4yQ0wu5aU(bh, parentSpanInst) {
    const nodes = ['sd_uptBboZ3Ov496gcM'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_FnPOGtXhnH6VtyIr(bh, parentSpanInst);
      //appendnew_next_sd_SIOuU4X4yQ0wu5aU
      return true;
    }
    return false;
  }
  async sd_lZ9ER5RToNEeKSfT(bh, parentSpanInst) {
    const nodes = ['sd_mmsssNwd7z63KrbB', 'sd_kobnBEPjyFzHYaXz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.prepRes(bh, parentSpanInst);
      //appendnew_next_sd_lZ9ER5RToNEeKSfT
      return true;
    }
    return false;
  }
  //appendnew_flow_flow_Catch
}
