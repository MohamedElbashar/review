// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../quote/flows'; //_splitter_
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

  async updateStatus(
    parentSpanInst,
    status: any = undefined,
    reference_number: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        status,
        reference_number,
      },
      local: {
        result: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B0mFzo3XmcWcj6WJ(bh, parentSpanInst);
      //appendnew_next_updateStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LQngz6by76YtcyRG',
        spanInst,
        'updateStatus'
      );
    }
  }

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
      bh = await this.getQuoteData(bh, parentSpanInst);
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
        'sd_EvaInKqv3AMLmKRs',
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
    dataObj = '',
    device_type = '',
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
        dataObj,
        device_type,
      },
      local: {
        statusCode: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_adhAK6xZ6KngeQVS(bh, parentSpanInst);
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
        'sd_9UZp4iPW2CHqr2h4',
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
      bh = await this.sd_PyoU8oNk8tDz9DNK(bh, parentSpanInst);
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
        'sd_I1KRISv7rKFY1Hl8',
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
        'sd_zwVZpT7UFeRyfbUV',
        spanInst,
        'getLobType'
      );
    }
  }

  async issuePolicy(parentSpanInst, ref_no: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'issuePolicy',
      parentSpanInst
    );
    let bh: any = {
      input: {
        ref_no,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getQuote1(bh, parentSpanInst);
      //appendnew_next_issuePolicy
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
        'sd_ExyTqKkj5pL6N93m',
        spanInst,
        'issuePolicy'
      );
    }
  }

  async paymentBalance(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'paymentBalance',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_E09GosO138Pjv0nP(bh, parentSpanInst);
      //appendnew_next_paymentBalance
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
        'sd_HhquQOHm2tWuim1z',
        spanInst,
        'paymentBalance'
      );
    }
  }

  async tabbyRelQuote(
    parentSpanInst,
    quote_no: any = undefined,
    product_type: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'tabbyRelQuote',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_no,
        product_type,
      },
      local: {
        quote_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getQuoteNo(bh, parentSpanInst);
      //appendnew_next_tabbyRelQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {
            quote_details: bh.local.quote_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1UxyfKSxlaI9FRIv',
        spanInst,
        'tabbyRelQuote'
      );
    }
  }

  async pendingPaymentCheck(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'pendingPaymentCheck',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nR7Zb6tD50xsV2oh(bh, parentSpanInst);
      //appendnew_next_pendingPaymentCheck
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
        'sd_3FChgdw3j8rCyHh2',
        spanInst,
        'pendingPaymentCheck'
      );
    }
  }
  //appendnew_flow_flow_start

  async sd_B0mFzo3XmcWcj6WJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B0mFzo3XmcWcj6WJ',
      parentSpanInst
    );
    try {
      console.log('input ', bh.input);
      bh.body = {
        reference_number: bh.input.reference_number,
        status_code: bh.input.status,
      };

      bh.url = process.env.DB_API_URL + 'quote/customer/decision';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TIoyVO6zaqUtHJLu(bh, parentSpanInst);
      //appendnew_next_sd_B0mFzo3XmcWcj6WJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B0mFzo3XmcWcj6WJ',
        spanInst,
        'sd_B0mFzo3XmcWcj6WJ'
      );
    }
  }

  async sd_TIoyVO6zaqUtHJLu(bh, parentSpanInst) {
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
      bh = await this.sd_MG0T5uWSzhX2fJFr(bh, parentSpanInst);
      //appendnew_next_sd_TIoyVO6zaqUtHJLu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TIoyVO6zaqUtHJLu');
    }
  }

  async sd_MG0T5uWSzhX2fJFr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MG0T5uWSzhX2fJFr',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      bh.local.status_code = 200;

      console.log('bh result', bh.local.result);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_MG0T5uWSzhX2fJFr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MG0T5uWSzhX2fJFr',
        spanInst,
        'sd_MG0T5uWSzhX2fJFr'
      );
    }
  }

  async sd_rc4FX8S1PvSMhHtQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rc4FX8S1PvSMhHtQ',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: false,
        error: 'Invalid Request',
      };
      bh.local.status_code = 500;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_rc4FX8S1PvSMhHtQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rc4FX8S1PvSMhHtQ',
        spanInst,
        'sd_rc4FX8S1PvSMhHtQ'
      );
    }
  }

  async getQuoteData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteData',
      parentSpanInst
    );
    try {
      let outputVariables = await this.tabbyRelQuote(
        spanInst,
        bh.input.payload['quote_no'],
        bh.input.payload['product_type']
      );
      bh.quote_details = outputVariables.local.quote_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.reqObj(bh, parentSpanInst);
      //appendnew_next_getQuoteData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_46hALEpbbQBgIOBI',
        spanInst,
        'getQuoteData'
      );
    }
  }

  async reqObj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('reqObj', parentSpanInst);
    try {
      bh.reqObj = {
        product_type: bh.input.payload['product_type'] || 'MOTOR',
        channel_code: 'SP',
        device_type: bh.input.payload['device_type'] || '',
        source_id_no: bh.input.payload['quote_no'] || '',
        quote_details: bh.quote_details,
      };
      bh.headers = {
        Authorization: bh.input.token,
      };
      bh.url = `${process.env.PAYMENT_URL}v1/fetchPaymentOptions`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8g7Ocxh83i3HzqsX(bh, parentSpanInst);
      //appendnew_next_reqObj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qBNnrqJGew7VsFtj',
        spanInst,
        'reqObj'
      );
    }
  }

  async sd_8g7Ocxh83i3HzqsX(bh, parentSpanInst) {
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
      bh = await this.sd_vPPdqVyqpOec3Do8(bh, parentSpanInst);
      //appendnew_next_sd_8g7Ocxh83i3HzqsX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8g7Ocxh83i3HzqsX');
    }
  }

  async sd_vPPdqVyqpOec3Do8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vPPdqVyqpOec3Do8',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload || [];
      bh.local.statusCode = bh.response.statusCode;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vPPdqVyqpOec3Do8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vPPdqVyqpOec3Do8',
        spanInst,
        'sd_vPPdqVyqpOec3Do8'
      );
    }
  }

  async sd_KDhuvwnKOO0vNd07(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KDhuvwnKOO0vNd07',
      parentSpanInst
    );
    try {
      bh.local.result = [];
      bh.local.statusCode = bh.response.statusCode;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_KDhuvwnKOO0vNd07
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KDhuvwnKOO0vNd07',
        spanInst,
        'sd_KDhuvwnKOO0vNd07'
      );
    }
  }

  async sd_adhAK6xZ6KngeQVS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_adhAK6xZ6KngeQVS',
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
      bh = await this.sd_gXuKXa9InD89HGjs(bh, parentSpanInst);
      //appendnew_next_sd_adhAK6xZ6KngeQVS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_adhAK6xZ6KngeQVS',
        spanInst,
        'sd_adhAK6xZ6KngeQVS'
      );
    }
  }

  async sd_gXuKXa9InD89HGjs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gXuKXa9InD89HGjs',
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
        bh = await this.sd_Sm8ev3Vx4qPK7jPr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gXuKXa9InD89HGjs',
        spanInst,
        'sd_gXuKXa9InD89HGjs'
      );
    }
  }

  async prepReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq', parentSpanInst);
    try {
      let insurance_details = {
        insurance_details: {
          pnr: bh.result['quote_details']?.['id'] || '',
          policy_type: {
            type: bh.result['risk_item_details']?.[0]?.['product_code'] || '',
            car_manufacture_year:
              bh.result['risk_item_details']?.[0]?.['addl_details']?.[
                'manufacturing_year'
              ] || '',
            car_brand:
              bh.result['risk_item_details']?.[0]?.['addl_details']?.[
                'make_ar'
              ] || '',
            car_model:
              bh.result['risk_item_details']?.[0]?.['addl_details']?.[
                'model_ar'
              ] || '',
          },
          client: {
            full_name: bh.result['quote_details']?.['addl_details']?.[
              'company_name'
            ]
              ? bh.result['quote_details']?.['addl_details']?.['company_name']
              : `${bh.result['quote_details']?.['first_name']} ${bh.result['quote_details']?.['last_name']}`,
            first_name: bh.result['quote_details']?.['addl_details']?.[
              'company_name'
            ]
              ? bh.result['quote_details']?.['addl_details']?.['company_name']
              : bh.result['quote_details']?.['first_name'] || '',
            last_name: bh.result['quote_details']?.['addl_details']?.[
              'company_name'
            ]
              ? bh.result['quote_details']?.['addl_details']?.['company_name']
              : bh.result['quote_details']?.['last_name'] || '',
            dob: bh.result['quote_details']?.['addl_details']?.['dob']
              ? formatDate(
                  bh.result['quote_details']?.['addl_details']?.['dob']
                ) || ''
              : '',
          },
        },
      };

      let name = bh.result['quote_details']?.['addl_details']?.['company_name']
        ? bh.result['quote_details']?.['addl_details']?.['company_name']
        : `${bh.result['quote_details']?.['first_name']} ${bh.result['quote_details']?.['last_name']}`;

      if (bh.input['dataObj']?.['selected_language'] == 'ar') {
        if (bh.result['quote_details']?.['addl_details']?.['company_name']) {
          name = bh.result['quote_details']?.['addl_details']?.['company_name'];
        } else {
          if (bh.result['quote_details']?.['addl_details']?.['first_name_ar']) {
            name = `${bh.result['quote_details']?.['addl_details']?.['first_name_ar']} ${bh.result['quote_details']?.['addl_details']?.['last_name_ar']}`;
          } else {
            name = ` العميل`;
          }
        }
      }

      bh.reqObj = {
        customer_id_no:
          bh.result['quote_details'] && bh.result['quote_details']['id_no'],
        name: name,
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
        callback_url: `${process.env.INT_Payment_CB_URL}issue-policy`,
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
        frontend_cb_success_url:
          bh.input['dataObj']['frontend_cb_success_url'] || '',
        frontend_cb_partial_url:
          bh.input['dataObj']['frontend_cb_partial_url'] || '',
        parent_checkout_id: bh.input['dataObj']['parent_checkout_id'] || '',
        device_type: bh.input['device_type'] || '',
        national_id: bh.result['quote_details']?.['id_no'] || '',
        dob: bh.result['quote_details']?.['addl_details']?.['dob']
          ? formatDate(bh.result['quote_details']?.['addl_details']?.['dob']) ||
            ''
          : '',
        insurance_details: JSON.stringify(insurance_details) || '{}',
        locale: bh.input['dataObj']?.['selected_language'] || 'en',
      };
      bh.headers = {
        Authorization: bh.input.token,
      };

      bh.lob_id =
        bh.result['quote_details'] && bh.result['quote_details']['lob_id'];

      bh.url = `${process.env.PAYMENT_URL}v1/intiatePayment`;

      console.log('bh init payment', bh);

      function formatDate(inputDate) {
        const parts = inputDate.split('-');

        const originalDate = new Date(parts[2], parts[1] - 1, parts[0]);

        const year = originalDate.getFullYear();
        const month = String(originalDate.getMonth() + 1).padStart(2, '0');
        const day = String(originalDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bSs2zL4gQI2auAaX(bh, parentSpanInst);
      //appendnew_next_prepReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SpU7e3WBO0ZarraL',
        spanInst,
        'prepReq'
      );
    }
  }

  async sd_bSs2zL4gQI2auAaX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bSs2zL4gQI2auAaX',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getLobType(spanInst, bh.lob_id);
      bh.lob_type = outputVariables.local.lob_type;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setProduct(bh, parentSpanInst);
      //appendnew_next_sd_bSs2zL4gQI2auAaX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bSs2zL4gQI2auAaX',
        spanInst,
        'sd_bSs2zL4gQI2auAaX'
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
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentService(bh, parentSpanInst);
      //appendnew_next_setProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dyaV3ceB2m0DnPMS',
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
      bh = await this.sd_VVzIyMc7xpgDG5R4(bh, parentSpanInst);
      //appendnew_next_paymentService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z7BogH0HDEiB1jEQ');
    }
  }

  async sd_VVzIyMc7xpgDG5R4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VVzIyMc7xpgDG5R4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload || {};
      if (bh.response.payload['payment_redirect_url']) {
        let url = bh.response.payload['payment_redirect_url'].includes('http')
          ? bh.response.payload['payment_redirect_url']
          : `${process.env.PAYMENT_URL}${bh.response.payload[
              'payment_redirect_url'
            ].substring(1)}`;
        bh.local.result['payment_redirect_url'] = url;
      }
      bh.local.statusCode = bh.response?.['statusCode'] || 200;

      console.log('bh.local', bh.local);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_VVzIyMc7xpgDG5R4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VVzIyMc7xpgDG5R4',
        spanInst,
        'sd_VVzIyMc7xpgDG5R4'
      );
    }
  }

  async sd_Sm8ev3Vx4qPK7jPr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Sm8ev3Vx4qPK7jPr',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 500;
      bh.local.result = {
        error: 'API Failed',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Sm8ev3Vx4qPK7jPr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Sm8ev3Vx4qPK7jPr',
        spanInst,
        'sd_Sm8ev3Vx4qPK7jPr'
      );
    }
  }

  async sd_PyoU8oNk8tDz9DNK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PyoU8oNk8tDz9DNK',
      parentSpanInst
    );
    try {
      bh.query_mode = 'CA';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Un95fuMDqqXajNbV(bh, parentSpanInst);
      //appendnew_next_sd_PyoU8oNk8tDz9DNK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PyoU8oNk8tDz9DNK',
        spanInst,
        'sd_PyoU8oNk8tDz9DNK'
      );
    }
  }

  async sd_Un95fuMDqqXajNbV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Un95fuMDqqXajNbV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          undefined,
          bh.input.reference_number,
          bh.query_mode
        );
      bh.response = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_sd_Un95fuMDqqXajNbV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Un95fuMDqqXajNbV',
        spanInst,
        'sd_Un95fuMDqqXajNbV'
      );
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response;
      bh.local.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rqkl3yclusyfmPVc',
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
        'sd_FsRJCmFeD2MWYHJJ',
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
      return await this.errorHandler(bh, e, 'sd_wjZU5i2yzo5cRL9r');
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
        'sd_R54DAovSYqvgefPv',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_C3O7DcVRZehclK1R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C3O7DcVRZehclK1R',
      parentSpanInst
    );
    try {
      if (
        bh.error?.['response']?.['statusCode'].toString().includes('30') ||
        bh.error?.['response']?.['statusCode'].toString().includes('20')
      ) {
        bh.local.result = bh.error?.['response']?.['body'];
        if (bh.local.result['payment_redirect_url'])
          bh.local.result['payment_redirect_url'] = `${
            process.env.PAYMENT_URL
          }${bh.local.result['payment_redirect_url'].substring(1)}`;
        bh.local.statusCode = bh.error?.['response']?.['statusCode'];
      } else {
        bh.local.result = bh.error?.['response']?.['body'] || {
          error:
            'Payment failed with the selected payment mode. Please try again later or choose another payment method.',
        };
        bh.local.statusCode = bh.error?.['response']?.['statusCode'] || 500;
      }

      console.log('bh.local', bh.local);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_C3O7DcVRZehclK1R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C3O7DcVRZehclK1R',
        spanInst,
        'sd_C3O7DcVRZehclK1R'
      );
    }
  }

  async getQuote1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getQuote1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuote(
          spanInst,
          bh.input.ref_no,
          undefined
        );
      bh.quote_summary = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.bpmIssuePolicy(bh, parentSpanInst);
      //appendnew_next_getQuote1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hSnT5yU4IYD1C2nv',
        spanInst,
        'getQuote1'
      );
    }
  }

  async bpmIssuePolicy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'bpmIssuePolicy',
      parentSpanInst
    );
    try {
      bh.quote_id = bh.quote_summary.id;

      bh.url = process.env.INT_MS_URL + `case-service/case/instance/create`;
      bh.body = {
        caseType: 'CREATE_POLICY',
        caseData: {
          quote_id: bh.quote_id,
        },
        wfData: {
          quote_id: bh.quote_id,
        },
      };

      log.info(
        `[QUOTE_ID::${
          bh.quote_id
        }][CREATE_INSTANCE][START][BODY][${JSON.stringify(bh.body)}]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.issuePolicyCall(bh, parentSpanInst);
      //appendnew_next_bpmIssuePolicy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jy98XanW3UzhRey5',
        spanInst,
        'bpmIssuePolicy'
      );
    }
  }

  async issuePolicyCall(bh, parentSpanInst) {
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

      bh.instance_result = responseMsg;
      bh = await this.saveCid(bh, parentSpanInst);
      //appendnew_next_issuePolicyCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AwgY7pcD2aTxG71F');
    }
  }

  async saveCid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('saveCid', parentSpanInst);
    try {
      bh.local.result = bh.instance_result?.payload;
      log.info(
        `[QUOTE_ID::${
          bh.quote_id
        }][CREATE_INSTANCE][END][RESULT][${JSON.stringify(bh.local.result)}]`
      );

      bh.additional_details = {
        ...bh.quote_summary?.addl_details,
        ...{ cid: bh.local.result?.cid },
      };

      bh.body = {
        filter: {
          id: bh.quote_id,
        },
        quote: {
          updated_date: new Date().toISOString(),
          addl_details: JSON.stringify(bh.additional_details),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateQuote(bh, parentSpanInst);
      //appendnew_next_saveCid
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uOrL0ZRBEYI0C6Le',
        spanInst,
        'saveCid'
      );
    }
  }

  async updateQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateQuote',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.patchQuote(
          spanInst,
          bh.body
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updateQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_29gAkr1Y7PS850DW',
        spanInst,
        'updateQuote'
      );
    }
  }

  async sd_BLqpzXKEjUIo6mSX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BLqpzXKEjUIo6mSX',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: false,
        error: 'Error while issuing policy',
      };
      bh.local.status_code = 500;

      log.info(
        `[REF_NO::${bh.input.ref_no}][QUOTE_ID::${
          bh.quote_id
        }][ISSUE_POLICY][ERROR][${
          bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_BLqpzXKEjUIo6mSX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BLqpzXKEjUIo6mSX',
        spanInst,
        'sd_BLqpzXKEjUIo6mSX'
      );
    }
  }

  async sd_E09GosO138Pjv0nP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E09GosO138Pjv0nP',
      parentSpanInst
    );
    try {
      bh.payload = {
        source_id_no: bh.input?.body?.reference_number,
        parent_checkout_id: bh.input?.body?.parent_checkout_id,
      };

      bh.url = `${process.env.PAYMENT_URL}v1/balance_summary`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentSummary(bh, parentSpanInst);
      //appendnew_next_sd_E09GosO138Pjv0nP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E09GosO138Pjv0nP',
        spanInst,
        'sd_E09GosO138Pjv0nP'
      );
    }
  }

  async paymentSummary(bh, parentSpanInst) {
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

      bh.local.response = responseMsg;
      bh = await this.sd_1C2LIYhynzqnpILG(bh, parentSpanInst);
      //appendnew_next_paymentSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uAjoeHnq32dG62FP');
    }
  }

  async sd_1C2LIYhynzqnpILG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1C2LIYhynzqnpILG',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;
      bh.local.response = bh.local.response?.['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1C2LIYhynzqnpILG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1C2LIYhynzqnpILG',
        spanInst,
        'sd_1C2LIYhynzqnpILG'
      );
    }
  }

  async sd_KwFF27iLy9xbaEk6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KwFF27iLy9xbaEk6',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: false,
        error: 'Error while getting payment summary',
      };
      bh.local.statusCode = 500;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_KwFF27iLy9xbaEk6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KwFF27iLy9xbaEk6',
        spanInst,
        'sd_KwFF27iLy9xbaEk6'
      );
    }
  }

  async getQuoteNo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteNo',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getQuote(spanInst, bh.input.quote_no);
      bh.statusCode = outputVariables.local.status_code;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jb2nv8gXBk8K1c9r(bh, parentSpanInst);
      //appendnew_next_getQuoteNo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GxHJwsyhYrezvtsM',
        spanInst,
        'getQuoteNo'
      );
    }
  }

  async sd_Jb2nv8gXBk8K1c9r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jb2nv8gXBk8K1c9r',
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
        bh = await this.sd_uCqiUkKVqhrgA9Iq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jb2nv8gXBk8K1c9r',
        spanInst,
        'sd_Jb2nv8gXBk8K1c9r'
      );
    }
  }

  async sd_uCqiUkKVqhrgA9Iq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uCqiUkKVqhrgA9Iq',
      parentSpanInst
    );
    try {
      bh.local.quote_details = {
        id: bh.result['quote_details']?.['id'] || '',
        policy_type: {
          type: bh.result['risk_item_details']?.[0]?.['product_code'] || '',
          car_manufacture_year:
            bh.result['risk_item_details']?.[0]?.['addl_details']?.[
              'manufacturing_year'
            ] || '',
          car_brand:
            bh.result['risk_item_details']?.[0]?.['addl_details']?.[
              'make_ar'
            ] || '',
          car_model:
            bh.result['risk_item_details']?.[0]?.['addl_details']?.[
              'model_ar'
            ] || '',
        },
        amount:
          bh.result['quote_details'] && bh.result['quote_details']?.['premium'],
        currency: 'SAR',
        description: bh.input.product_type,
        name:
          bh.result['quote_details'] &&
          `${bh.result['quote_details']['first_name']} ${bh.result['quote_details']['last_name']}`,
        first_name: bh.result['quote_details']['first_name'] || '',
        last_name: bh.result['quote_details']['last_name'] || '',
        email:
          bh.result['quote_details'] && bh.result['quote_details']['email_id'],
        phone_no:
          bh.result['quote_details'] && bh.result['quote_details']['phone_no'],
        source_id_no: bh.input.reference_number,
        national_id: bh.result['quote_details']?.['id_no'] || '',
        dob: bh.result['quote_details']?.['addl_details']?.['dob'] || '',
        address:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['address_line_1'],
        city:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['city'],
        postcode:
          bh.result['quote_details'] &&
          bh.result['quote_details']['addl_details'] &&
          bh.result['quote_details']['addl_details']['postal_code'],
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_uCqiUkKVqhrgA9Iq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uCqiUkKVqhrgA9Iq',
        spanInst,
        'sd_uCqiUkKVqhrgA9Iq'
      );
    }
  }

  async sd_nR7Zb6tD50xsV2oh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nR7Zb6tD50xsV2oh',
      parentSpanInst
    );
    try {
      bh.payload = {
        quote_ref_no: bh.input?.body?.quote_ref_no,
      };

      bh.url = `${process.env.PAYMENT_URL}v1/pending_payment_details`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getBillDetails(bh, parentSpanInst);
      //appendnew_next_sd_nR7Zb6tD50xsV2oh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nR7Zb6tD50xsV2oh',
        spanInst,
        'sd_nR7Zb6tD50xsV2oh'
      );
    }
  }

  async getBillDetails(bh, parentSpanInst) {
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

      bh.local.response = responseMsg;
      bh = await this.sd_91bIcnOXrvtBbckL(bh, parentSpanInst);
      //appendnew_next_getBillDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Crwg9coDlVWTQkat');
    }
  }

  async sd_91bIcnOXrvtBbckL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_91bIcnOXrvtBbckL',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;
      bh.local.response = bh.local.response?.['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_91bIcnOXrvtBbckL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_91bIcnOXrvtBbckL',
        spanInst,
        'sd_91bIcnOXrvtBbckL'
      );
    }
  }

  async sd_Wl89JhXWpwmm6EMT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wl89JhXWpwmm6EMT',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: false,
        error: 'Error while getting payment summary',
      };
      bh.local.statusCode = 500;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Wl89JhXWpwmm6EMT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wl89JhXWpwmm6EMT',
        spanInst,
        'sd_Wl89JhXWpwmm6EMT'
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
      (await this.sd_YCHU5BzBhkXz1kCZ(bh, parentSpanInst)) ||
      (await this.sd_AthZy0ttEww5gFZS(bh, parentSpanInst)) ||
      (await this.errorCatch(bh, parentSpanInst)) ||
      (await this.sd_bgFBIa0Us488S1u2(bh, parentSpanInst)) ||
      (await this.sd_JGYtHdMBj2acYrUe(bh, parentSpanInst)) ||
      (await this.sd_rVSMQWKIYclH3yUz(bh, parentSpanInst))
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
  async sd_YCHU5BzBhkXz1kCZ(bh, parentSpanInst) {
    const nodes = ['sd_TIoyVO6zaqUtHJLu'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_rc4FX8S1PvSMhHtQ(bh, parentSpanInst);
      //appendnew_next_sd_YCHU5BzBhkXz1kCZ
      return true;
    }
    return false;
  }
  async sd_AthZy0ttEww5gFZS(bh, parentSpanInst) {
    const nodes = ['sd_TIoyVO6zaqUtHJLu'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_KDhuvwnKOO0vNd07(bh, parentSpanInst);
      //appendnew_next_sd_AthZy0ttEww5gFZS
      return true;
    }
    return false;
  }
  async errorCatch(bh, parentSpanInst) {
    const nodes = ['sd_z7BogH0HDEiB1jEQ'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_C3O7DcVRZehclK1R(bh, parentSpanInst);
      //appendnew_next_errorCatch
      return true;
    }
    return false;
  }
  async sd_bgFBIa0Us488S1u2(bh, parentSpanInst) {
    const nodes = ['sd_AwgY7pcD2aTxG71F'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_BLqpzXKEjUIo6mSX(bh, parentSpanInst);
      //appendnew_next_sd_bgFBIa0Us488S1u2
      return true;
    }
    return false;
  }
  async sd_JGYtHdMBj2acYrUe(bh, parentSpanInst) {
    const nodes = ['sd_uAjoeHnq32dG62FP'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_KwFF27iLy9xbaEk6(bh, parentSpanInst);
      //appendnew_next_sd_JGYtHdMBj2acYrUe
      return true;
    }
    return false;
  }
  async sd_rVSMQWKIYclH3yUz(bh, parentSpanInst) {
    const nodes = ['sd_Crwg9coDlVWTQkat'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Wl89JhXWpwmm6EMT(bh, parentSpanInst);
      //appendnew_next_sd_rVSMQWKIYclH3yUz
      return true;
    }
    return false;
  }
  //appendnew_flow_flow_Catch
}
