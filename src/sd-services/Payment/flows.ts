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

  async getOptions(
    parentSpanInst,
    payload: any = undefined,
    token = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getOptions',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
        token,
      },
      local: {
        result: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.reqObj(bh, parentSpanInst);
      //appendnew_next_getOptions
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9aDr4deCH10bsbVU',
        spanInst,
        'getOptions'
      );
    }
  }

  async initPayment(
    parentSpanInst,
    reference_number = '',
    payment_method = '',
    selected_language: any = undefined,
    frontend_cb_success_url: any = undefined,
    device_type: any = undefined,
    frontend_cb_partial_url: any = undefined,
    parent_checkout_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'initPayment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reference_number,
        payment_method,
        selected_language,
        frontend_cb_success_url,
        device_type,
        frontend_cb_partial_url,
        parent_checkout_id,
      },
      local: {
        statusCode: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq2(bh, parentSpanInst);
      //appendnew_next_initPayment
      return (
        // formatting output variables
        {
          input: {},
          local: {
            statusCode: bh.local.statusCode,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bD29NAmXYps5Jc7S',
        spanInst,
        'initPayment'
      );
    }
  }

  async getQuote(parentSpanInst, reference_number: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('getQuote', parentSpanInst);
    let bh: any = {
      input: {
        reference_number,
      },
      local: {
        status_code: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_getQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status_code: bh.local.status_code,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qZ6RblNycIdAVQcj',
        spanInst,
        'getQuote'
      );
    }
  }

  async getLobType(parentSpanInst, lob_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getLobType',
      parentSpanInst
    );
    let bh: any = {
      input: {
        lob_id,
      },
      local: {
        lob_type: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl5(bh, parentSpanInst);
      //appendnew_next_getLobType
      return (
        // formatting output variables
        {
          input: {},
          local: {
            lob_type: bh.local.lob_type,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J7f9LUbjzD3F5O5v',
        spanInst,
        'getLobType'
      );
    }
  }

  async customerPaymentDecision(
    parentSpanInst,
    status: any = undefined,
    reference_number: any = undefined,
    comment: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'customerPaymentDecision',
      parentSpanInst
    );
    let bh: any = {
      input: {
        status,
        reference_number,
        comment,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepReq1(bh, parentSpanInst);
      //appendnew_next_customerPaymentDecision
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZQoZdRdMtFzLMMJf',
        spanInst,
        'customerPaymentDecision'
      );
    }
  }

  async fetchPpDetails(
    parentSpanInst,
    quote_ref_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fetchPpDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_ref_no,
      },
      local: {
        statusCode: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl6(bh, parentSpanInst);
      //appendnew_next_fetchPpDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            statusCode: bh.local.statusCode,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DxzJSKllhasT6d0A',
        spanInst,
        'fetchPpDetails'
      );
    }
  }
  //appendnew_flow_flows_start

  async reqObj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('reqObj', parentSpanInst);
    try {
      bh.reqObj = {
        product_type: bh.input.payload['product_type'] || 'MOTOR',
        channel_code: 'SP',
        device_type: bh.input.payload['device_type'] || '',
      };
      bh.headers = {
        Authorization: bh.input.token,
      };
      bh.url = `${process.env.PAYMENT_URL}v1/fetchPaymentOptions`;

      console.log('bh', bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9ld2nEckuNqp29T4(bh, parentSpanInst);
      //appendnew_next_reqObj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A8uyvKao9Y4abk7N',
        spanInst,
        'reqObj'
      );
    }
  }

  async sd_9ld2nEckuNqp29T4(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.reqObj,
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
      bh = await this.sd_cO49gNVYaDkRqhBr(bh, parentSpanInst);
      //appendnew_next_sd_9ld2nEckuNqp29T4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9ld2nEckuNqp29T4');
    }
  }

  async sd_cO49gNVYaDkRqhBr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cO49gNVYaDkRqhBr',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload || [];
      bh.local.statusCode = bh.response?.['statusCode'] || 500;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cO49gNVYaDkRqhBr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cO49gNVYaDkRqhBr',
        spanInst,
        'sd_cO49gNVYaDkRqhBr'
      );
    }
  }

  async sd_6O9Ry971MocNb4At(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6O9Ry971MocNb4At',
      parentSpanInst
    );
    try {
      bh.local.result = [];
      bh.local.statusCode = bh.response.statusCode;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6O9Ry971MocNb4At
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6O9Ry971MocNb4At',
        spanInst,
        'sd_6O9Ry971MocNb4At'
      );
    }
  }

  async prepReq2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq2', parentSpanInst);
    try {
      bh.reqObj = {
        reference_number: bh.input.reference_number,
        payment_method: bh.input.payment_method ?? '',
        device_type: bh.input.device_type ?? '',
        frontend_cb_success_url: bh.input.frontend_cb_success_url, // replace to your respective frontend_cb_success_url url
        frontend_cb_partial_url: bh.input.frontend_cb_partial_url, // replace to your respective frontend_cb_partial_url url,
        parent_checkout_id: bh.input.parent_checkout_id || '',
        selected_language: bh.input['selected_language'] || 'en',
      };
      bh.headers = {};

      bh.url = `${process.env.MS_API_URL}payment/initiate`;

      console.log(
        `[PAYMENT][REFERENCE_NUMBER:${bh.input.reference_number}][REQUEST_URT:${bh.url}][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentService1(bh, parentSpanInst);
      //appendnew_next_prepReq2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tvHuELl8puK6DCwn',
        spanInst,
        'prepReq2'
      );
    }
  }

  async paymentService1(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.reqObj,
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
      bh = await this.sd_G2Pt6PO79DObkDne(bh, parentSpanInst);
      //appendnew_next_paymentService1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pK5Hv6Ds23LUpV0H');
    }
  }

  async sd_G2Pt6PO79DObkDne(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G2Pt6PO79DObkDne',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.response?.['statusCode'] || 500;
      bh.local.result = bh.response.payload || {};
      console.log(
        `[PAYMENT][REFERENCE_NUMBER:${bh.input.reference_number}][REQUEST_URT:${bh.url}][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_G2Pt6PO79DObkDne
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G2Pt6PO79DObkDne',
        spanInst,
        'sd_G2Pt6PO79DObkDne'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'quote/summary';
      bh.body = {
        reference_number: bh.input.reference_number || undefined,
        query_mode: 'CA',
      };
      console.log('bh', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetQuote(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oo2WGWyxRP2dyaFz',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpGetQuote(bh, parentSpanInst) {
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
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_httpGetQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P8ZdbsRmBEJ8O3RB');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_umVMDYnDHkepxK4A',
        spanInst,
        'setResponse4'
      );
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/lob_type/find-by-id';
      bh.body = {
        filter: {
          id: bh.input.lob_id || undefined,
        },
      };
      console.log('bh', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetLobType(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MgoAooNCwCBZ5qBx',
        spanInst,
        'setUrl5'
      );
    }
  }

  async httpGetLobType(bh, parentSpanInst) {
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
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_httpGetLobType
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DL1f2SfspKu8nUel');
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
      parentSpanInst
    );
    try {
      bh.local.lob_type = bh.response.payload?.['code'] || 'MOTOR';

      console.log('result', bh.local.lob_type);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P2dpczzWrMyiTkoC',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_gJKrEHwKQItWoIw0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gJKrEHwKQItWoIw0',
      parentSpanInst
    );
    try {
      bh.local.result = { error: 'Payment Intiation Failed' };
      bh.local.statusCode = bh.response.statusCode || 500;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gJKrEHwKQItWoIw0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gJKrEHwKQItWoIw0',
        spanInst,
        'sd_gJKrEHwKQItWoIw0'
      );
    }
  }

  async prepReq1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq1', parentSpanInst);
    try {
      bh.reqObj = {
        reference_number: bh.input.reference_number,
        status: bh.input.status,
        comment: bh.input.comment,
        source: 'b2c',
      };
      bh.headers = {};

      bh.url = `${process.env.MS_API_URL}quote/customer/decision`;

      console.log(
        `[PAYMENT][CUSTOMER_DECISION][REFERENCE_NUMBER:${bh.input.reference_number}][REQUEST_URT:${bh.url}][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.customerDecisionCustomerCall(bh, parentSpanInst);
      //appendnew_next_prepReq1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JTCcjN9Xsb1Uzvu9',
        spanInst,
        'prepReq1'
      );
    }
  }

  async customerDecisionCustomerCall(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.reqObj,
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

      bh.local.response = responseMsg;
      bh = await this.sd_AgnpA5nNUxeFfRSa(bh, parentSpanInst);
      //appendnew_next_customerDecisionCustomerCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cj7BTqXwWoGQUQkv');
    }
  }

  async sd_AgnpA5nNUxeFfRSa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AgnpA5nNUxeFfRSa',
      parentSpanInst
    );
    try {
      console.log(
        `[PAYMENT][CUSTOMER_DECISION][REFERENCE_NUMBER:${bh.input.reference_number}][REQUEST_URT:${bh.url}][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AgnpA5nNUxeFfRSa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AgnpA5nNUxeFfRSa',
        spanInst,
        'sd_AgnpA5nNUxeFfRSa'
      );
    }
  }

  async sd_y3kbQuMGO84UIFku(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y3kbQuMGO84UIFku',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.error?.response?.['statusCode'] || 500;
      bh.local.result = bh.error?.response.body || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_y3kbQuMGO84UIFku
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y3kbQuMGO84UIFku',
        spanInst,
        'sd_y3kbQuMGO84UIFku'
      );
    }
  }

  async setUrl6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl6', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'pending_payment_details';
      bh.body = {
        quote_ref_no: bh.input.quote_ref_no || '',
      };
      console.log('bh', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x5pAhKt21BRcbLQR(bh, parentSpanInst);
      //appendnew_next_setUrl6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4d1hMWqyo7dGzWlb',
        spanInst,
        'setUrl6'
      );
    }
  }

  async sd_x5pAhKt21BRcbLQR(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.sd_uvuGYliZMhqgnkW2(bh, parentSpanInst);
      //appendnew_next_sd_x5pAhKt21BRcbLQR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x5pAhKt21BRcbLQR');
    }
  }

  async sd_uvuGYliZMhqgnkW2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uvuGYliZMhqgnkW2',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.response?.['statusCode'] || 500;
      bh.local.result = bh.response.payload || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_uvuGYliZMhqgnkW2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uvuGYliZMhqgnkW2',
        spanInst,
        'sd_uvuGYliZMhqgnkW2'
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
      (await this.sd_B6Rt0i3qW3iI8Nrq(bh, parentSpanInst)) ||
      (await this.errorCatch(bh, parentSpanInst)) ||
      (await this.sd_sYkj3v2WF2cnaaIK(bh, parentSpanInst))
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
  async sd_B6Rt0i3qW3iI8Nrq(bh, parentSpanInst) {
    const nodes = ['sd_9ld2nEckuNqp29T4'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6O9Ry971MocNb4At(bh, parentSpanInst);
      //appendnew_next_sd_B6Rt0i3qW3iI8Nrq
      return true;
    }
    return false;
  }
  async errorCatch(bh, parentSpanInst) {
    const nodes = [
      'sd_P8ZdbsRmBEJ8O3RB',
      'sd_4GpmINmKqqQpMTdo',
      'sd_DL1f2SfspKu8nUel',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_gJKrEHwKQItWoIw0(bh, parentSpanInst);
      //appendnew_next_errorCatch
      return true;
    }
    return false;
  }
  async sd_sYkj3v2WF2cnaaIK(bh, parentSpanInst) {
    const nodes = [
      'sd_bD29NAmXYps5Jc7S',
      'sd_tvHuELl8puK6DCwn',
      'sd_pK5Hv6Ds23LUpV0H',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_y3kbQuMGO84UIFku(bh, parentSpanInst);
      //appendnew_next_sd_sYkj3v2WF2cnaaIK
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
