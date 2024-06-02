// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH from '../communication/email_sms_api'; //_splitter_
import * as SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1 from '../util/message_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj from './flow'; //_splitter_
//append_imports_end
export class hyper_pay_apis {
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
    this.serviceName = 'hyper_pay_apis';
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
      instance = new hyper_pay_apis(
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
    //appendnew_flow_hyper_pay_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: hyper_pay_apis');
    //appendnew_flow_hyper_pay_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: hyper_pay_apis');

    this.app['get'](
      `${this.serviceBasePath}/v1/paymentRedirection`,
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
          bh = await this.renderPageCheck(bh, parentSpanInst);
          //appendnew_next_sd_htGOTRPzHLvTX2dG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_htGOTRPzHLvTX2dG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/v1/hyperpayCallback`,
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
          bh = await this.setCheckoutId(bh, parentSpanInst);
          //appendnew_next_sd_1ms9KShNjEsA1rWO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1ms9KShNjEsA1rWO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/v1/checkStatus/:id/:source_id`,
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
          bh = await this.checkoutId(bh, parentSpanInst);
          //appendnew_next_sd_ynTMJ6A3a5tYXDee
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ynTMJ6A3a5tYXDee');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/v1/payment_status`,
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
          bh = await this.getStatus(bh, parentSpanInst);
          //appendnew_next_sd_ewCnf95tSKMXhSUI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ewCnf95tSKMXhSUI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_hyper_pay_apis_HttpIn
  }
  //   service flows_hyper_pay_apis

  //appendnew_flow_hyper_pay_apis_start

  async renderPageCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'renderPageCheck',
      parentSpanInst
    );
    try {
      if (
        bh.input['query']['hyperpay_checkout_id'] &&
        bh.input['query']['payment_method']
      ) {
        bh.render_page = true;
      } else {
        bh.render_page = false;
        bh.statusCode = 500;
        bh.response = {
          error: 'Payment Method or Checkout ID Missing',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateRender(bh, parentSpanInst);
      //appendnew_next_renderPageCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jj7OJX90SGwKGRSV',
        spanInst,
        'renderPageCheck'
      );
    }
  }

  async validateRender(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateRender',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.render_page,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lMgKCvvMUcuobAbY(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.render_page,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_TcQ8aeDJvuiCMVUs(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lmld57HjaVuUTYHH',
        spanInst,
        'validateRender'
      );
    }
  }

  async sd_lMgKCvvMUcuobAbY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lMgKCvvMUcuobAbY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.query['payment_method'],
          'APPLEPAY',
          undefined,
          undefined
        )
      ) {
        bh = await this.getAmount(bh, parentSpanInst);
      } else {
        bh = await this.htmlMappingRender(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lMgKCvvMUcuobAbY',
        spanInst,
        'sd_lMgKCvvMUcuobAbY'
      );
    }
  }

  async getAmount(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAmount', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.getSourceIdNo(
          spanInst,
          bh.input.query['hyperpay_checkout_id']
        );
      bh.source_data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X6NfcFCsD1FYag6D(bh, parentSpanInst);
      //appendnew_next_getAmount
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CZ24KV0i3FBdcBnM',
        spanInst,
        'getAmount'
      );
    }
  }

  async sd_X6NfcFCsD1FYag6D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X6NfcFCsD1FYag6D',
      parentSpanInst
    );
    try {
      bh.message_code = ['INFO_APPLE_001', 'INFO_APPLE_002'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage(bh, parentSpanInst);
      //appendnew_next_sd_X6NfcFCsD1FYag6D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X6NfcFCsD1FYag6D',
        spanInst,
        'sd_X6NfcFCsD1FYag6D'
      );
    }
  }

  async getMessage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance: SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache =
        SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance.getAllMessages(
          spanInst,
          bh.message_code,
          bh.source_data['locale']
        );
      bh.allmessages = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.htmlMappingRender(bh, parentSpanInst);
      //appendnew_next_getMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KibsYziQW0dxbPB6',
        spanInst,
        'getMessage'
      );
    }
  }

  async htmlMappingRender(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'htmlMappingRender',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/payment.ejs');

      let data = {
        checkout_id: bh.input['query']['hyperpay_checkout_id'],
        callback_url: `${process.env.INT_URL}v1/hyperpayCallback`,
        gateway_baseURL: process.env.HYPER_PAY_BASE_URL,
        payment_method: bh.input['query']['payment_method'],
        base_path: process.env.SSD_BASE_PATH,
        locale:
          bh.input.query?.['locale'] || bh.source_data?.['locale'] || 'en',
      };

      if (bh.input['query']?.['payment_method'] == 'APPLEPAY') {
        let desc1 = bh.allmessages.find(
          (x) => x['message_code'] == 'INFO_APPLE_001'
        )[bh.source_data?.['locale'] || 'en'];
        let desc2 = bh.allmessages.find(
          (x) => x['message_code'] == 'INFO_APPLE_002'
        )[bh.source_data?.['locale'] || 'en'];

        if (bh.source_data?.['amount'])
          data['apple_pay_title_1'] = desc1.replace(
            '***',
            bh.source_data?.['amount']
          );

        data['apple_pay_title_2'] = desc2;
      }

      let options = {};

      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
          'Cross-Origin-Embedder-Policy': 'Unsafe-None',
          'Content-Security-Policy': `script-src 'self' ${process.env.HYPER_PAY_BASE_URL} https://mpsnare.iesnare.com https://applepay.cdn-apple.com 'unsafe-inline'`,
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
      await this.sd_TcQ8aeDJvuiCMVUs(bh, parentSpanInst);
      //appendnew_next_htmlMappingRender
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YnWO2IezqGjLlliK',
        spanInst,
        'htmlMappingRender'
      );
    }
  }

  async sd_TcQ8aeDJvuiCMVUs(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TcQ8aeDJvuiCMVUs');
    }
  }

  async setCheckoutId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCheckoutId',
      parentSpanInst
    );
    try {
      bh.resourcePath = bh.input.query && bh.input.query['resourcePath'];
      bh.hyperpay_checkout_id = bh.input.query && bh.input.query['id'];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkoutIdCheck(bh, parentSpanInst);
      //appendnew_next_setCheckoutId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LBDyAbiqmM05sygw',
        spanInst,
        'setCheckoutId'
      );
    }
  }

  async checkoutIdCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkoutIdCheck',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.hyperpay_checkout_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getSourceId(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.hyperpay_checkout_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.errorSet(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hbT6oQ5lb3lU8RXX',
        spanInst,
        'checkoutIdCheck'
      );
    }
  }

  async getSourceId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSourceId',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.getSourceIdNo(
          spanInst,
          bh.hyperpay_checkout_id
        );
      bh.source_data = outputVariables.local.source_ref_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateSourceid(bh, parentSpanInst);
      //appendnew_next_getSourceId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dFUmh7zTG9REa3Tp',
        spanInst,
        'getSourceId'
      );
    }
  }

  async validateSourceid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateSourceid',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.source_data,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.reqAuditLog(bh, parentSpanInst);
      } else {
        bh = await this.errorSet(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sZxVTlb1o64GTPdN',
        spanInst,
        'validateSourceid'
      );
    }
  }

  async reqAuditLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'reqAuditLog',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'v1/hyperpayCallback',
          bh.input.query,
          undefined,
          bh.input.headers,
          new Date().toISOString(),
          undefined,
          undefined,
          undefined,
          bh.source_data['source_id_no'],
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPsStatus(bh, parentSpanInst);
      //appendnew_next_reqAuditLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GQIpqHdPrWeU8GZW',
        spanInst,
        'reqAuditLog'
      );
    }
  }

  async getPsStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPsStatus',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.getHyperpayStatus(
          spanInst,
          bh.hyperpay_checkout_id,
          bh.source_data['source_id_no'],
          bh.source_data['checkout_id'],
          bh.source_data['payment_method']
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.response = outputVariables.local.response;
      bh.payment_status = outputVariables.local.payment_status;
      bh.payment_status_desc = outputVariables.local.payment_status_desc;
      bh.fullResponse = outputVariables.local.fullResponse;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateCallbackUrl(bh, parentSpanInst);
      //appendnew_next_getPsStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cvilpqAjheliaLaI',
        spanInst,
        'getPsStatus'
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
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'v1/hyperPayCallback',
          undefined,
          bh.fullResponse,
          bh.input.headers,
          undefined,
          new Date().toISOString(),
          undefined,
          undefined,
          bh.source_data['source_id_no'],
          bh.statusCode
        )
      );
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.source_data['source_id_no'],
          bh.source_data['checkout_id'],
          bh.payment_status,
          bh.payment_status_desc,
          bh.source_data['callback_url'],
          bh.hyperpay_checkout_id
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zblrigJBcF3xIk10(bh, parentSpanInst);
      //appendnew_next_updateCallbackUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xh9OQUEtrmJBMU9M',
        spanInst,
        'updateCallbackUrl'
      );
    }
  }

  async sd_zblrigJBcF3xIk10(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zblrigJBcF3xIk10',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.payment_status,
          'success',
          undefined,
          undefined
        )
      ) {
        bh = await this.emailSms(bh, parentSpanInst);
      } else {
        bh = await this.sd_EAz52CdZ0Lkglity(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zblrigJBcF3xIk10',
        spanInst,
        'sd_zblrigJBcF3xIk10'
      );
    }
  }

  async emailSms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('emailSms', parentSpanInst);
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance: SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api =
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendEmailQuoteshare(
          spanInst,
          bh.source_data,
          undefined
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendSms(
          spanInst,
          bh.source_data,
          undefined
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EAz52CdZ0Lkglity(bh, parentSpanInst);
      //appendnew_next_emailSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CfFMLlNR8rMvIeZx',
        spanInst,
        'emailSms'
      );
    }
  }

  async sd_EAz52CdZ0Lkglity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EAz52CdZ0Lkglity',
      parentSpanInst
    );
    try {
      let locale =
        JSON.parse(bh.source_data['addl_details'] || '{}')?.[
          'selected_language'
        ] || 'en';

      bh.statusCode = 301;
      bh.redirectUrl = `${process.env.INT_URL}v1/payment_status?parent_checkout_id=${bh.source_data['checkout_id']}&txn_ref_number=${bh.hyperpay_checkout_id}&source_id_no=${bh.source_data['source_id_no']}`;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_HJgenZ4VhAwd5cO7(bh, parentSpanInst);
      //appendnew_next_sd_EAz52CdZ0Lkglity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EAz52CdZ0Lkglity',
        spanInst,
        'sd_EAz52CdZ0Lkglity'
      );
    }
  }

  async sd_HJgenZ4VhAwd5cO7(bh, parentSpanInst) {
    try {
      bh.web.res.redirect(bh.statusCode, bh.redirectUrl);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HJgenZ4VhAwd5cO7');
    }
  }

  async errorSet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errorSet', parentSpanInst);
    try {
      bh.statusCode = 500;
      let error;
      if (!bh.resourcePath) {
        error = 'payment checkout_id is missing';
      } else {
        error = 'source id is missing for the given checkout id';
      }
      bh.response = {
        error: error,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HJgenZ4VhAwd5cO7(bh, parentSpanInst);
      //appendnew_next_errorSet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3yQYZb2nzSrG4Htk',
        spanInst,
        'errorSet'
      );
    }
  }

  async checkoutId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkoutId',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.params['id'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getPs(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.input.params['id'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setErr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cyuf7Qox07AyytJO',
        spanInst,
        'checkoutId'
      );
    }
  }

  async getPs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getPs', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.getHyperpayStatus(
          spanInst,
          bh.input.params['id'],
          bh.input.params['source_id'],
          undefined,
          undefined
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_X3selLOR4L8N6bgl(bh, parentSpanInst);
      //appendnew_next_getPs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S2A2lzagixnrfREK',
        spanInst,
        'getPs'
      );
    }
  }

  async sd_X3selLOR4L8N6bgl(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X3selLOR4L8N6bgl');
    }
  }

  async setErr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setErr', parentSpanInst);
    try {
      bh.statusCode = 500;
      bh.response = {
        error: 'payment checkout_id is missing',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_X3selLOR4L8N6bgl(bh, parentSpanInst);
      //appendnew_next_setErr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cUPFzenfXN2zGb9M',
        spanInst,
        'setErr'
      );
    }
  }

  async getStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getStatus', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.getPaymentStatDb(
          spanInst,
          bh.input.query['parent_checkout_id'],
          bh.input.query['source_id_no'],
          bh.input.query['txn_ref_number']
        );
      bh.response = outputVariables.local.response;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KfcbJAijjWf3dpBi(bh, parentSpanInst);
      //appendnew_next_getStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gL1xeUcZBYa8sHg9',
        spanInst,
        'getStatus'
      );
    }
  }

  async sd_KfcbJAijjWf3dpBi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KfcbJAijjWf3dpBi',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UymgX3ez4vIkWkiq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KfcbJAijjWf3dpBi',
        spanInst,
        'sd_KfcbJAijjWf3dpBi'
      );
    }
  }

  async sd_UymgX3ez4vIkWkiq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UymgX3ez4vIkWkiq',
      parentSpanInst
    );
    try {
      if (bh.response['payment_status'] == 'completed') {
        bh.message_code = ['INFO_PS_001', 'INFO_PS_002', 'INFO_AUTH_CODE'];
      } else if (
        bh.response['payment_status'].includes('pending') &&
        bh.response['payment_method'] != 'SADAD_VS'
      ) {
        bh.message_code = ['INFO_PP_001', 'INFO_PP_002', 'INFO_AUTH_CODE'];
      } else if (
        bh.response['payment_status'].toLowerCase().includes('pending') &&
        bh.response['payment_method'] == 'SADAD_VS'
      ) {
        bh.message_code = [
          'INFO_PP_001',
          'INFO_PP_SADAD_001',
          'INFO_PP_SADAD_002',
          'INFO_PP_SADAD_003',
        ];
      } else {
        bh.message_code = ['INFO_PF_001', 'INFO_PF_002', 'INFO_AUTH_CODE'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3rIz4QJ50qYDlwF3(bh, parentSpanInst);
      //appendnew_next_sd_UymgX3ez4vIkWkiq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UymgX3ez4vIkWkiq',
        spanInst,
        'sd_UymgX3ez4vIkWkiq'
      );
    }
  }

  async sd_3rIz4QJ50qYDlwF3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3rIz4QJ50qYDlwF3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance: SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache =
        SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1Instance.getAllMessages(
          spanInst,
          bh.message_code,
          bh.response['locale']
        );
      bh.allmessages = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.renderStatusHtml(bh, parentSpanInst);
      //appendnew_next_sd_3rIz4QJ50qYDlwF3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3rIz4QJ50qYDlwF3',
        spanInst,
        'sd_3rIz4QJ50qYDlwF3'
      );
    }
  }

  async renderStatusHtml(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'renderStatusHtml',
      parentSpanInst
    );
    try {
      bh.allmessages = JSON.parse(JSON.stringify(bh.allmessages));
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      const { numberToArabic } = require('number-to-arabic');

      const imagePaths = [
        '/images/success.png',
        '/images/failed.png',
        '/images/logo.svg',
      ];

      let filename = path.join(
        __dirname,
        '../../public/views/payment_status.ejs'
      );

      let desc1 = bh.allmessages.find((x) => x['message_code'].includes('001'));
      let desc2 = bh.allmessages.find((x) => x['message_code'].includes('002'));
      let desc3 = bh.allmessages.find((x) =>
        x['message_code'].includes('AUTH')
      );
      let desc4;
      if (
        bh.response?.payment_method == 'SADAD_VS' &&
        bh.response?.payment_status.toLowerCase().includes('pending')
      ) {
        desc1 = bh.allmessages.find((x) =>
          x['message_code'].includes('INFO_PP_001')
        );
        desc2 = bh.allmessages.find((x) =>
          x['message_code'].includes('INFO_PP_SADAD_001')
        );
        desc3 = bh.allmessages.find((x) =>
          x['message_code'].includes('INFO_PP_SADAD_002')
        );
        desc4 = bh.allmessages.find((x) =>
          x['message_code'].includes('INFO_PP_SADAD_003')
        );

        desc2['en'] = desc2['en'].replace('***', '');
        desc2['ar'] = desc2['ar'].replace('***', '');

        desc2['en'] =
          desc2['en'] +
          (parseFloat(bh.response['amount'] || 0).toFixed(2) || '0');
        desc2['ar'] =
          desc2['ar'] +
          (parseFloat(bh.response['amount'] || 0).toFixed(2) || '0');
      }

      let data = {
        payment_status: bh.response?.payment_status,
        txn_ref_number:
          (bh.input.query?.['locale'] || bh.response?.locale) == 'ar'
            ? numberToArabic(bh.input.query?.['parent_checkout_id'])
            : bh.input.query?.['parent_checkout_id'],
        locale: bh.input.query?.['locale'] || bh.response?.locale || 'en',
        locale_arr: [
          { key: 'en', value: 'English' },
          { key: 'ar', value: 'اللغة العربية' },
        ],
        desc_1:
          desc1?.[bh.input.query?.['locale'] || bh.response?.locale || 'en'] ||
          '',
        desc_2:
          desc2?.[bh.input.query?.['locale'] || bh.response?.locale || 'en'] ||
          '',
        desc_3:
          desc3?.[bh.input.query?.['locale'] || bh.response?.locale || 'en'],
        logo: process.env.LOGO_STRAPI_URL,
        success: process.env.SUCCESS_STRAPI_URL,
        failed: process.env.FAILED_STRAPI_URL,
        pending: process.env.PENDING_STRAPI_URL,
        base_path: process.env.SSD_BASE_PATH,
        sadad_bill_no: bh.response?.sadad_bill_no || '',
        frontend_cb_success_url: bh.response?.['frontend_cb_success_url']
          ? `${bh.response?.['frontend_cb_success_url']}?quote_no=${bh.response?.source_id_no}&txn_no=${bh.input.query?.['parent_checkout_id']}`
          : '',
        dataObj: {
          txn_ref_number: bh.input.query?.['txn_ref_number'],
          source_id_no: bh.input.query?.['source_id_no'],
          parent_checkout_id: bh.input.query?.['parent_checkout_id'],
          internal_url: process.env.INT_URL || '',
          sadad_bill_no: bh.response?.sadad_bill_no || '',
        },
      };

      if (desc4) {
        data['desc_4'] =
          desc4?.[bh.input.query?.['locale'] || bh.response?.locale || 'en'] ||
          '';
      }

      try {
        const str = await ejs.renderFile(filename, data);
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
          'Content-Security-Policy': `img-src 'self' ${process.env.STRAPI_BASE_URL}`,
          'Cross-Origin-Embedder-Policy': 'credentialless',
          'Cross-Origin-Opener-Policy': 'unsafe-none',
          'Cross-Origin-Resource-Policy': 'cross-origin',
        };
        bh.statusCode = 200;
      } catch (err) {
        console.error('ejs error', err);
        bh.response = {
          error: 'checkout id has been expired please request again',
        };
        bh.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_E52CKZM2isSW2AA0(bh, parentSpanInst);
      //appendnew_next_renderStatusHtml
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vZtCET6I7nB3PMVQ',
        spanInst,
        'renderStatusHtml'
      );
    }
  }

  async sd_E52CKZM2isSW2AA0(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_E52CKZM2isSW2AA0');
    }
  }

  async setErr2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setErr2', parentSpanInst);
    try {
      console.log('bh payment db', bh);

      if (bh.local.statusCode == 200 || bh.local.statusCode == '200') {
        bh.payment_status = bh.local.response?.['payment_status'];
        bh.response = bh.local.response;
        bh.statusCode = bh.local.statusCode;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setErr2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ue5ksdRyzuYtXkXO',
        spanInst,
        'setErr2'
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
      (await this.sd_DjGCr21p6MOuPv5H(bh, parentSpanInst)) ||
      (await this.sd_jcyq8DKV5dmycTOM(bh, parentSpanInst))
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
  async sd_DjGCr21p6MOuPv5H(bh, parentSpanInst) {
    const nodes = ['sd_S2A2lzagixnrfREK'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_X3selLOR4L8N6bgl(bh, parentSpanInst);
      //appendnew_next_sd_DjGCr21p6MOuPv5H
      return true;
    }
    return false;
  }
  async sd_jcyq8DKV5dmycTOM(bh, parentSpanInst) {
    const nodes = ['sd_cvilpqAjheliaLaI'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setErr2(bh, parentSpanInst);
      //appendnew_next_sd_jcyq8DKV5dmycTOM
      return true;
    }
    return false;
  }
  //appendnew_flow_hyper_pay_apis_Catch
}
