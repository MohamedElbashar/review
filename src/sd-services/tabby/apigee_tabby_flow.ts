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
//append_imports_end
export class apigee_tabby_flow {
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
    this.serviceName = 'apigee_tabby_flow';
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
      instance = new apigee_tabby_flow(
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
    //appendnew_flow_apigee_tabby_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apigee_tabby_flow');
    //appendnew_flow_apigee_tabby_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apigee_tabby_flow');
    //appendnew_flow_apigee_tabby_flow_HttpIn
  }
  //   service flows_apigee_tabby_flow

  async getCustomerHistory(
    parentSpanInst,
    national_id: any = undefined,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getCustomerHistory',
      parentSpanInst
    );
    let bh: any = {
      input: {
        national_id,
        source_id_no,
      },
      local: {
        customer_details: undefined,
        status_code: undefined,
        national_id_eligiblity: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JMARCc38QbFZDKKy(bh, parentSpanInst);
      //appendnew_next_getCustomerHistory
      return (
        // formatting output variables
        {
          input: {},
          local: {
            customer_details: bh.local.customer_details,
            status_code: bh.local.status_code,
            national_id_eligiblity: bh.local.national_id_eligiblity,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DHxCdAhSYuAPpONs',
        spanInst,
        'getCustomerHistory'
      );
    }
  }

  async tabbyCheckout(
    parentSpanInst,
    quote_details: any = undefined,
    source_id_no: any = undefined,
    customer_history: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'tabbyCheckout',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_details,
        source_id_no,
        customer_history,
      },
      local: {
        tabby_redirect: undefined,
        status_code: undefined,
        tabby_avail: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_di1UboH38Tf107my(bh, parentSpanInst);
      //appendnew_next_tabbyCheckout
      return (
        // formatting output variables
        {
          input: {},
          local: {
            tabby_redirect: bh.local.tabby_redirect,
            status_code: bh.local.status_code,
            tabby_avail: bh.local.tabby_avail,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GMloPWvxPcW7Co4P',
        spanInst,
        'tabbyCheckout'
      );
    }
  }
  //appendnew_flow_apigee_tabby_flow_start

  async sd_JMARCc38QbFZDKKy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JMARCc38QbFZDKKy',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.input.national_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_it5vMklnSSzre16P(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nnull'](
          bh.input.national_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_it5vMklnSSzre16P(bh, parentSpanInst);
      } else {
        bh = await this.sd_NOghksG8bTdw7jaI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JMARCc38QbFZDKKy',
        spanInst,
        'sd_JMARCc38QbFZDKKy'
      );
    }
  }

  async sd_it5vMklnSSzre16P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_it5vMklnSSzre16P',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.url = `${process.env.APIGEE_OCE_URL}/art/get-customer-purchase-history?national-id=${bh.input.national_id}`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken(bh, parentSpanInst);
      //appendnew_next_sd_it5vMklnSSzre16P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_it5vMklnSSzre16P',
        spanInst,
        'sd_it5vMklnSSzre16P'
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
      bh = await this.getCustomer(bh, parentSpanInst);
      //appendnew_next_apigeeToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tSBUoeduT8e7bxJF',
        spanInst,
        'apigeeToken'
      );
    }
  }

  async getCustomer(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
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

      bh.customer_purchase_history = responseMsg;
      bh = await this.sd_FrLjjBpmsFxUfzcR(bh, parentSpanInst);
      //appendnew_next_getCustomer
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t99S05cL2J5iShZp');
    }
  }

  async sd_FrLjjBpmsFxUfzcR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FrLjjBpmsFxUfzcR',
      parentSpanInst
    );
    try {
      let customer_data =
        bh.customer_purchase_history?.['payload']?.[
          'GetCustomerPurchaseHistoryResponse'
        ]?.['GetCustomerPurchaseHistoryResult']?.['diffgram']?.['NewDataSet']?.[
          'Table1'
        ];

      if (
        customer_data?.['REGISTERED_SINCE'] &&
        customer_data?.['LOYALTY_LEVEL'] &&
        customer_data?.['UNIQUE_ACCOUNT_IDENTIFIER']
      ) {
        bh.local.customer_details =
          bh.customer_purchase_history?.['payload']?.[
            'GetCustomerPurchaseHistoryResponse'
          ]?.['GetCustomerPurchaseHistoryResult']?.['diffgram']?.[
            'NewDataSet'
          ]?.['Table1'];
        bh.local.national_id_eligiblity = true;
      }

      bh.local.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_FrLjjBpmsFxUfzcR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FrLjjBpmsFxUfzcR',
        spanInst,
        'sd_FrLjjBpmsFxUfzcR'
      );
    }
  }

  async sd_NOghksG8bTdw7jaI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NOghksG8bTdw7jaI',
      parentSpanInst
    );
    try {
      bh.local.status_code = 500;
      bh.local.customer_details = {
        error: 'national id is missing',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NOghksG8bTdw7jaI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NOghksG8bTdw7jaI',
        spanInst,
        'sd_NOghksG8bTdw7jaI'
      );
    }
  }

  async sd_t1shDUJb8hSi3clC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t1shDUJb8hSi3clC',
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
          bh.customer_data = data;
        } else {
          bh.message_code = 'ERR_TPE_001';
          bh.errorMessage = data['header']?.['status']?.['description'];
        }
      } else {
        bh.response = {
          message: 'Failure occured at urpay generate token',
        };
        bh.errorMessage =
          'CustomerPurchaseHistory for Tabby check has been failed';
        bh.message_code = 'ERR_TPE_001';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8xaxkiHg25uU2doI(bh, parentSpanInst);
      //appendnew_next_sd_t1shDUJb8hSi3clC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t1shDUJb8hSi3clC',
        spanInst,
        'sd_t1shDUJb8hSi3clC'
      );
    }
  }

  async sd_8xaxkiHg25uU2doI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8xaxkiHg25uU2doI',
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
        bh = await this.sd_8dEn0yQEnUTtzHb5(bh, parentSpanInst);
      } else {
        bh = await this.auditFail(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8xaxkiHg25uU2doI',
        spanInst,
        'sd_8xaxkiHg25uU2doI'
      );
    }
  }

  async sd_8dEn0yQEnUTtzHb5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8dEn0yQEnUTtzHb5',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.customer_purchase_history = bh.customer_data;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FrLjjBpmsFxUfzcR(bh, parentSpanInst);
      //appendnew_next_sd_8dEn0yQEnUTtzHb5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8dEn0yQEnUTtzHb5',
        spanInst,
        'sd_8dEn0yQEnUTtzHb5'
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
          'GET_CUSTOMER_TABBY',
          bh.url,
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
        'sd_dmKOVQDpvXlVKYxF',
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
      bh = await this.sd_NDS2xq0ZxUnmfscr(bh, parentSpanInst);
      //appendnew_next_getMessage0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r8CZB01k7LY2wm0L',
        spanInst,
        'getMessage0'
      );
    }
  }

  async sd_NDS2xq0ZxUnmfscr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NDS2xq0ZxUnmfscr',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.urpay_token_resp = {
        error:
          bh.errorMessage ||
          'The Tabby service is unavailable for the provided national ID.',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NDS2xq0ZxUnmfscr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NDS2xq0ZxUnmfscr',
        spanInst,
        'sd_NDS2xq0ZxUnmfscr'
      );
    }
  }

  async sd_di1UboH38Tf107my(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_di1UboH38Tf107my',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.input.quote_details,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7xWkkE5LCQNaPPj1(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nnull'](
          bh.input.quote_details,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7xWkkE5LCQNaPPj1(bh, parentSpanInst);
      } else {
        bh = await this.sd_LCjub8DslSNWfKRj(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_di1UboH38Tf107my',
        spanInst,
        'sd_di1UboH38Tf107my'
      );
    }
  }

  async sd_7xWkkE5LCQNaPPj1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7xWkkE5LCQNaPPj1',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;

      bh.url = `${process.env.APIGEE_OCE_URL}/ap-tabby-neutrinos/checkout`;
      const now = new Date();
      const timestampWithoutMillis = now.toISOString().slice(0, -5) + 'Z';

      bh.headers = {
        publicApiKey: process.env.TABBY_PUBLIC_API_KEY,
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
      };

      let insured_data = bh.input.quote_details?.['insurance_details'];
      insured_data['insurance_details']['policy_type']['duration'] = 365;
      insured_data['insurance_details']['policy_type']['refundable'] = true;
      insured_data['insurance_details']['client']['document_type'] = '';
      insured_data['insurance_details']['client']['document_id'] = '';
      insured_data['insurance_details']['client']['expiration_id_dt'] = '';
      insured_data['insurance_details']['client']['nationality'] = '';
      insured_data['insurance_details']['client']['gender'] = '';

      bh.initiate_payment_obj = {
        payment: {
          amount: bh.input.quote_details?.['amount'].toString() || '',
          currency: bh.input.quote_details?.['currency'] || 'SAR',
          description: getProductDesc(bh.input.quote_details?.['product_type']),
          buyer: {
            phone: bh.input.quote_details?.['phone_no'] || '',
            email: bh.input.quote_details?.['email'] || '',
            name: bh.input.quote_details?.['name'] || '',
            dob:
              bh.input.quote_details?.['addl_details']?.['dob'] || '1989-01-01',
          },
          buyer_history: {
            registered_since:
              bh.input.customer_history['REGISTERED_SINCE'] || '',
            loyalty_level:
              parseInt(bh.input.customer_history['LOYALITY_LEVEL'], 10) || '',
          },
          order: {
            reference_id: bh.input.quote_details?.['checkout_id'],
            items: [
              {
                title: getProductDesc(bh.input.quote_details?.['product_type']),
                quantity: 1,
                unit_price: bh.input.quote_details?.['amount'].toString() || '',
                discount_amount: '0.00',
                reference_id: bh.input.quote_details?.['checkout_id'],
                category: getProductDesc(
                  bh.input.quote_details?.['product_type']
                ),
              },
            ],
          },
          order_history: [
            {
              purchased_at: timestampWithoutMillis,
              amount: '0.00',
              payment_method: 'card',
              status: 'new',
              buyer: {
                phone: bh.input.quote_details?.['phone_no'] || '',
                email: bh.input.quote_details?.['email'] || '',
                name: bh.input.quote_details?.['name'] || '',
                dob:
                  bh.input.quote_details?.['addl_details']?.['dob'] ||
                  '1989-01-01',
              },
              shipping_address: {
                city: bh.input.quote_details?.['addl_details']?.['city'] || '',
                address:
                  bh.input.quote_details?.['addl_details']?.['address'] || '',
                zip:
                  bh.input.quote_details?.['addl_details']?.['postcode'] || '',
              },
              items: [
                {
                  title: getProductDesc(
                    bh.input.quote_details?.['product_type']
                  ),
                  quantity: 1,
                  unit_price: bh.input.quote_details?.['amount'] || '',
                  discount_amount: '0.00',
                  reference_id: bh.input.source_id_no || '',
                  ordered: 0,
                  captured: 0,
                  shipped: 0,
                  refunded: 0,
                },
              ],
            },
          ],
          shipping_address: {
            city: bh.input.quote_details?.['addl_details']?.['city'] || '',
            address:
              bh.input.quote_details?.['addl_details']?.['address'] || '',
            zip: bh.input.quote_details?.['addl_details']?.['postcode'] || '',
          },
          attachment: {
            body: JSON.stringify(insured_data) || '{}',
            content_type: 'application/vnd.tabby.v1+json',
          },
        },
        lang: 'en',
        merchant_code: 'artonline',
        merchant_urls: {
          success: `${process.env.INT_URL}v1/tabby/payment-status?status=1&code=200&pType=tabby&refId=${bh.input.quote_details?.['checkout_id']}`,
          cancel: `${process.env.INT_URL}v1/tabby/payment-status?status=-1&code=500&pType=tabby&refId=${bh.input.quote_details?.['checkout_id']}`,
          failure: `${process.env.INT_URL}v1/tabby/payment-status?status=0&code=404&pType=tabby&refId=${bh.input.quote_details?.['checkout_id']}`,
        },
      };

      function getProductDesc(product_type) {
        switch (product_type) {
          case 'MOTOR':
            return 'Motor Policy';
            break;
          default:
            return 'Motor Policy';
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_sd_7xWkkE5LCQNaPPj1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7xWkkE5LCQNaPPj1',
        spanInst,
        'sd_7xWkkE5LCQNaPPj1'
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
      bh = await this.checkoutTabby(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_62vqRAby43Lwkts4',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async checkoutTabby(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.initiate_payment_obj,
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

      bh.checkout_data = responseMsg;
      bh = await this.setTabbyRedirectUrl(bh, parentSpanInst);
      //appendnew_next_checkoutTabby
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mZNuixfiWHr6zr2y');
    }
  }

  async setTabbyRedirectUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setTabbyRedirectUrl',
      parentSpanInst
    );
    try {
      if (
        bh.checkout_data?.['configuration']?.['products']?.['installments']?.[
          'is_available'
        ]
      ) {
        bh.local.tabby_avail = true;
        bh.local.tabby_redirect = {
          redirectUrl:
            bh.checkout_data?.['configuration']?.['available_products']?.[
              'installments'
            ]?.[0]?.['web_url'],
        };
        bh.local.status_code = 303;
      } else {
        bh.local.tabby_redirect = {
          error: 'Tabby is not available for the given national id',
        };
        bh.local.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setTabbyRedirectUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ICNBa19oEbTNw7nQ',
        spanInst,
        'setTabbyRedirectUrl'
      );
    }
  }

  async sd_LCjub8DslSNWfKRj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LCjub8DslSNWfKRj',
      parentSpanInst
    );
    try {
      bh.local.status_code = 500;
      bh.local.customer_details = {
        error: 'national id is missing',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LCjub8DslSNWfKRj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LCjub8DslSNWfKRj',
        spanInst,
        'sd_LCjub8DslSNWfKRj'
      );
    }
  }

  async sd_3ngWK5dvydW3MDQe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3ngWK5dvydW3MDQe',
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
          bh.customer_data = data;
        } else {
          bh.message_code = 'ERR_TPE_001';
          bh.errorMessage = data['header']?.['status']?.['description'];
        }
      } else {
        bh.response = {
          message: 'Failure occured at tabby initiate payment (checkout)',
        };
        bh.errorMessage =
          'CustomerPurchaseHistory for Tabby check has been failed';
        bh.message_code = 'ERR_TPE_001';
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_c5a52DpPycl1WtV5(bh, parentSpanInst);
      //appendnew_next_sd_3ngWK5dvydW3MDQe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3ngWK5dvydW3MDQe',
        spanInst,
        'sd_3ngWK5dvydW3MDQe'
      );
    }
  }

  async sd_c5a52DpPycl1WtV5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c5a52DpPycl1WtV5',
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
        bh = await this.sd_rp2BuT4Gnyv6bxpA(bh, parentSpanInst);
      } else {
        bh = await this.auditFail0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c5a52DpPycl1WtV5',
        spanInst,
        'sd_c5a52DpPycl1WtV5'
      );
    }
  }

  async sd_rp2BuT4Gnyv6bxpA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rp2BuT4Gnyv6bxpA',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.checkout_data = bh.customer_data;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setTabbyRedirectUrl(bh, parentSpanInst);
      //appendnew_next_sd_rp2BuT4Gnyv6bxpA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rp2BuT4Gnyv6bxpA',
        spanInst,
        'sd_rp2BuT4Gnyv6bxpA'
      );
    }
  }

  async auditFail0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditFail0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'TABBY_CHECKOUT_API',
          bh.initiate_payment_obj,
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
      //appendnew_next_auditFail0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zZ7dOHH614UU77Js',
        spanInst,
        'auditFail0'
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
      bh = await this.sd_HNcN4aUToflm3xia(bh, parentSpanInst);
      //appendnew_next_getMessage1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9rFdzz4W4VQ2HpjN',
        spanInst,
        'getMessage1'
      );
    }
  }

  async sd_HNcN4aUToflm3xia(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HNcN4aUToflm3xia',
      parentSpanInst
    );
    try {
      bh.local.status_code = bh.status_code || 500;
      bh.local.tabby_redirect = {
        error:
          bh.errorMessage ||
          'The Tabby service is unavailable for the provided national ID.',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HNcN4aUToflm3xia
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HNcN4aUToflm3xia',
        spanInst,
        'sd_HNcN4aUToflm3xia'
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
      (await this.sd_sMXOO1gn15QL0uBv(bh, parentSpanInst)) ||
      (await this.sd_lABYpW5tdXJ5kYAw(bh, parentSpanInst))
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
  async sd_sMXOO1gn15QL0uBv(bh, parentSpanInst) {
    const nodes = ['sd_t99S05cL2J5iShZp'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_t1shDUJb8hSi3clC(bh, parentSpanInst);
      //appendnew_next_sd_sMXOO1gn15QL0uBv
      return true;
    }
    return false;
  }
  async sd_lABYpW5tdXJ5kYAw(bh, parentSpanInst) {
    const nodes = ['sd_mZNuixfiWHr6zr2y'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_3ngWK5dvydW3MDQe(bh, parentSpanInst);
      //appendnew_next_sd_lABYpW5tdXJ5kYAw
      return true;
    }
    return false;
  }
  //appendnew_flow_apigee_tabby_flow_Catch
}
