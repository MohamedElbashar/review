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
        'sd_91pTeSuKJiS1LO7E',
        spanInst,
        'getOptions'
      );
    }
  }

  async initPayment(
    parentSpanInst,
    reference_number = '',
    token = '',
    payment_method = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'initPayment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reference_number,
        token,
        payment_method,
      },
      local: {
        statusCode: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_g0HdTKqoEZpQpfWO(bh, parentSpanInst);
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
        'sd_WEOCgKBVrZtOKkmZ',
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
        'sd_bFxzNSh6yZCt1LPZ',
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
        'sd_vL72SghtmyGTOqvR',
        spanInst,
        'getLobType'
      );
    }
  }

  async initPayment1(
    parentSpanInst,
    reference_number: any = undefined,
    device_type: any = undefined,
    locale: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'initPayment1',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reference_number,
        device_type,
        locale,
      },
      local: {
        statusCode: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_initPayment1
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
        'sd_E7dew8sCDeqRuurM',
        spanInst,
        'initPayment1'
      );
    }
  }

  async fetchPaymentDetails(
    parentSpanInst,
    quote_ref_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fetchPaymentDetails',
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
      //appendnew_next_fetchPaymentDetails
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
        'sd_3NegYoCg0bLwEw4H',
        spanInst,
        'fetchPaymentDetails'
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
      bh = await this.sd_js7Hi54BrAHO5I2i(bh, parentSpanInst);
      //appendnew_next_reqObj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7shq9r6N1SenDR0z',
        spanInst,
        'reqObj'
      );
    }
  }

  async sd_js7Hi54BrAHO5I2i(bh, parentSpanInst) {
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
      bh = await this.sd_QfNRvPbCpFqUemND(bh, parentSpanInst);
      //appendnew_next_sd_js7Hi54BrAHO5I2i
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_js7Hi54BrAHO5I2i');
    }
  }

  async sd_QfNRvPbCpFqUemND(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QfNRvPbCpFqUemND',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload || [];
      bh.local.statusCode = bh.response?.['statusCode'] || 500;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_QfNRvPbCpFqUemND
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QfNRvPbCpFqUemND',
        spanInst,
        'sd_QfNRvPbCpFqUemND'
      );
    }
  }

  async sd_m5Xnt7huwDUhYaBz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m5Xnt7huwDUhYaBz',
      parentSpanInst
    );
    try {
      bh.local.result = [];
      bh.local.statusCode = bh.response.statusCode;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_m5Xnt7huwDUhYaBz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m5Xnt7huwDUhYaBz',
        spanInst,
        'sd_m5Xnt7huwDUhYaBz'
      );
    }
  }

  async sd_g0HdTKqoEZpQpfWO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g0HdTKqoEZpQpfWO',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getQuote(
        spanInst,
        bh.input.reference_number
      );
      bh.statusCode = outputVariables.local.status_code;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Et739rg39mtBjGMS(bh, parentSpanInst);
      //appendnew_next_sd_g0HdTKqoEZpQpfWO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g0HdTKqoEZpQpfWO',
        spanInst,
        'sd_g0HdTKqoEZpQpfWO'
      );
    }
  }

  async sd_Et739rg39mtBjGMS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Et739rg39mtBjGMS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.prepReq(bh, parentSpanInst);
      } else {
        bh = await this.sd_cd2dUD7oPYaUKcYZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Et739rg39mtBjGMS',
        spanInst,
        'sd_Et739rg39mtBjGMS'
      );
    }
  }

  async prepReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq', parentSpanInst);
    try {
      bh.reqObj = {
        customer_id_no:
          bh.result['quote_details'] && bh.result['quote_details']['id_no'],
        name:
          bh.result['quote_details'] &&
          `${bh.result['quote_details']['first_name']} ${bh.result['quote_details']['last_name']}`,
        email:
          bh.result['quote_details'] && bh.result['quote_details']['email_id'],
        phone_no:
          bh.result['quote_details'] && bh.result['quote_details']['phone_no'],
        source_id_no: bh.input.reference_number,
        txn_ref_number: '',
        amount:
          bh.result['quote_details'] && bh.result['quote_details']['premium'],
        currency: 'SAR',
        address:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['address_line_1'],
        product_type: 'MOTOR',
        callback_url: `${process.env.INT_SP_BFF_CB_URL}issue-policy`,
        payment_method: bh.input.payment_method,
        country: 'SA',
        street:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['street'],
        city:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['city'],
        postcode:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['postal_code'],
        selected_language: bh.input['selected_language'],
      };
      bh.headers = {
        Authorization: bh.input.token,
      };

      bh.lob_id =
        bh.result['quote_details'] && bh.result['quote_details']['lob_id'];

      bh.url = `${process.env.PAYMENT_URL}v1/intiatePayment`;

      console.log('bh init payment', bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gHZUJeO6lfUd3a5A(bh, parentSpanInst);
      //appendnew_next_prepReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pJYnIbW8cawk4tLa',
        spanInst,
        'prepReq'
      );
    }
  }

  async sd_gHZUJeO6lfUd3a5A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gHZUJeO6lfUd3a5A',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getLobType(spanInst, bh.lob_id);
      bh.lob_type = outputVariables.local.lob_type;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setProduct(bh, parentSpanInst);
      //appendnew_next_sd_gHZUJeO6lfUd3a5A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gHZUJeO6lfUd3a5A',
        spanInst,
        'sd_gHZUJeO6lfUd3a5A'
      );
    }
  }

  async setProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setProduct',
      parentSpanInst
    );
    try {
      bh.reqObj['product_type'] = bh.lob_type;

      console.log('product_type', bh.lob_type);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentService(bh, parentSpanInst);
      //appendnew_next_setProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OWgu066jMXJAEEim',
        spanInst,
        'setProduct'
      );
    }
  }

  async paymentService(bh, parentSpanInst) {
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
      bh = await this.sd_DYy9mCteepe0mGB3(bh, parentSpanInst);
      //appendnew_next_paymentService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a19yant43s93Crc0');
    }
  }

  async sd_DYy9mCteepe0mGB3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DYy9mCteepe0mGB3',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload || {};
      if (bh.local.result['payment_redirect_url']) {
        bh.local.result['payment_redirect_url'] = `${process.env.PAYMENT_URL}${
          bh.local.result['payment_redirect_url']
            ? bh.local.result['payment_redirect_url'].slice(1)
            : ''
        }`;
      }
      bh.local.statusCode = bh.response?.['statusCode'] || 500;

      console.log('bh.local', bh.local);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DYy9mCteepe0mGB3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DYy9mCteepe0mGB3',
        spanInst,
        'sd_DYy9mCteepe0mGB3'
      );
    }
  }

  async sd_cd2dUD7oPYaUKcYZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cd2dUD7oPYaUKcYZ',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 500;
      bh.local.result = {
        error: 'API Failed',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cd2dUD7oPYaUKcYZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cd2dUD7oPYaUKcYZ',
        spanInst,
        'sd_cd2dUD7oPYaUKcYZ'
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
        'sd_BoOOOljvbtUsiKSc',
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
      return await this.errorHandler(bh, e, 'sd_zV4gwU2XumqVq3kn');
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
        'sd_gSdN3QQV2Y8HoTgv',
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
        'sd_75eIh0ub4x9bXCfq',
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
      return await this.errorHandler(bh, e, 'sd_r1z4wpSBgyqLI4ZC');
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
        'sd_AB2StQwIcLa4zYJ4',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_qs15iC2gx3peqrZX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qs15iC2gx3peqrZX',
      parentSpanInst
    );
    try {
      bh.local.result = { error: 'Payment Intiation Failed' };
      bh.local.statusCode = bh.response.statusCode || 500;

      console.log('bh.local', bh.local);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qs15iC2gx3peqrZX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qs15iC2gx3peqrZX',
        spanInst,
        'sd_qs15iC2gx3peqrZX'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'payment/initiate';
      bh.body = {
        reference_number: bh.input.reference_number || '',
        channel_code: 'SP',
        device_type: bh.input.device_type || '',
        payment_method: '',
        selected_language: bh.input.locale || 'en',
      };
      console.log('bh', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dic7WeW3OtraObR0(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r0hAV9at2pdZrLRc',
        spanInst,
        'setUrl3'
      );
    }
  }

  async sd_dic7WeW3OtraObR0(bh, parentSpanInst) {
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
      bh = await this.sd_Cjx6qdzZN9Qa98zQ(bh, parentSpanInst);
      //appendnew_next_sd_dic7WeW3OtraObR0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dic7WeW3OtraObR0');
    }
  }

  async sd_Cjx6qdzZN9Qa98zQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Cjx6qdzZN9Qa98zQ',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.response?.['statusCode'] || 500;
      bh.local.result = bh.response.payload || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Cjx6qdzZN9Qa98zQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Cjx6qdzZN9Qa98zQ',
        spanInst,
        'sd_Cjx6qdzZN9Qa98zQ'
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
      bh = await this.sd_2m7yJIZmwTm57CKp(bh, parentSpanInst);
      //appendnew_next_setUrl6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bDVFRWW09S3CRWfc',
        spanInst,
        'setUrl6'
      );
    }
  }

  async sd_2m7yJIZmwTm57CKp(bh, parentSpanInst) {
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
      bh = await this.sd_6EeNCc7mVRHIoewW(bh, parentSpanInst);
      //appendnew_next_sd_2m7yJIZmwTm57CKp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2m7yJIZmwTm57CKp');
    }
  }

  async sd_6EeNCc7mVRHIoewW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6EeNCc7mVRHIoewW',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.response?.['statusCode'] || 500;
      bh.local.result = bh.response.payload || {};
      if (bh.local.result?.['result_url']) {
        bh.local.result[
          'result_url'
        ] = `${process.env.PAYMENT_URL}${bh.local.result?.['result_url']}`;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6EeNCc7mVRHIoewW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6EeNCc7mVRHIoewW',
        spanInst,
        'sd_6EeNCc7mVRHIoewW'
      );
    }
  }

  async sd_G2F6F68dhoIITFZs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G2F6F68dhoIITFZs',
      parentSpanInst
    );
    try {
      bh.local.statusCode = bh.response?.['statusCode'] || 500;
      bh.local.result = 'Unable to fetch details';

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_G2F6F68dhoIITFZs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G2F6F68dhoIITFZs',
        spanInst,
        'sd_G2F6F68dhoIITFZs'
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
      (await this.sd_YjoaHFUQs1fjCkBL(bh, parentSpanInst)) ||
      (await this.errorCatch(bh, parentSpanInst)) ||
      (await this.sd_j8UjSIKWr804Yz7p(bh, parentSpanInst))
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
  async sd_YjoaHFUQs1fjCkBL(bh, parentSpanInst) {
    const nodes = ['sd_js7Hi54BrAHO5I2i'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_m5Xnt7huwDUhYaBz(bh, parentSpanInst);
      //appendnew_next_sd_YjoaHFUQs1fjCkBL
      return true;
    }
    return false;
  }
  async errorCatch(bh, parentSpanInst) {
    const nodes = [
      'sd_zV4gwU2XumqVq3kn',
      'sd_a19yant43s93Crc0',
      'sd_r1z4wpSBgyqLI4ZC',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_qs15iC2gx3peqrZX(bh, parentSpanInst);
      //appendnew_next_errorCatch
      return true;
    }
    return false;
  }
  async sd_j8UjSIKWr804Yz7p(bh, parentSpanInst) {
    const nodes = ['sd_2m7yJIZmwTm57CKp'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_G2F6F68dhoIITFZs(bh, parentSpanInst);
      //appendnew_next_sd_j8UjSIKWr804Yz7p
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
