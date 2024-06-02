// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH from '../communication/email_sms_api'; //_splitter_
import * as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj from '../hyper_pay/flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q from './flows'; //_splitter_
//append_imports_end
export class tabby_apis {
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
    this.serviceName = 'tabby_apis';
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
      instance = new tabby_apis(
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
    //appendnew_flow_tabby_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: tabby_apis');
    //appendnew_flow_tabby_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: tabby_apis');

    this.app['get'](
      `${this.serviceBasePath}/v1/tabby/payment-status`,
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
          bh = await this.sd_Y9KkT4oOyklVhYvH(bh, parentSpanInst);
          //appendnew_next_sd_aJAa8t4XSRhm682a
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aJAa8t4XSRhm682a');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_tabby_apis_HttpIn
  }
  //   service flows_tabby_apis

  //appendnew_flow_tabby_apis_start

  async sd_Y9KkT4oOyklVhYvH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y9KkT4oOyklVhYvH',
      parentSpanInst
    );
    try {
      if (
        bh.input.query['status'] == '1' &&
        bh.input.query?.['code'] == '200'
      ) {
        bh.payment_status = 'completed';
      } else if (
        bh.input.query['status'] == '-1' &&
        bh.input.query?.['code'] == '500'
      ) {
        bh.payment_status = 'cancel';
      } else if (
        bh.input.query['status'] == '0' &&
        bh.input.query?.['code'] == '404'
      ) {
        bh.payment_status = 'failed';
      }

      bh.checkout_id = bh.input.query['refId'];
      bh.filter = {
        checkout_id: bh.input.query['refId'],
      };

      bh.update_status = {
        payment_status: bh.payment_status,
        transaction_receipt: bh.input.query?.['payment_id'] || '',
        updated_date: new Date(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AdjM4SNYr7gY0A5o(bh, parentSpanInst);
      //appendnew_next_sd_Y9KkT4oOyklVhYvH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y9KkT4oOyklVhYvH',
        spanInst,
        'sd_Y9KkT4oOyklVhYvH'
      );
    }
  }

  async sd_AdjM4SNYr7gY0A5o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AdjM4SNYr7gY0A5o',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.query['refId'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.audit(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nempty'](
          bh.input.query['refId'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.audit(bh, parentSpanInst);
      } else {
        bh = await this.sd_ioQoppwaoGomHd7K(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AdjM4SNYr7gY0A5o',
        spanInst,
        'sd_AdjM4SNYr7gY0A5o'
      );
    }
  }

  async audit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('audit', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'TABBY_PAYMENT_STATUS',
          bh.input.query,
          undefined,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.query['refId'],
          bh.input.query['code']
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2tnpyEY35OLWo2gk(bh, parentSpanInst);
      //appendnew_next_audit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lb4dMLROQdyropuv',
        spanInst,
        'audit'
      );
    }
  }

  async sd_2tnpyEY35OLWo2gk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2tnpyEY35OLWo2gk',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_dtkig9esmm',
        bh.filter,
        bh.update_status
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPaymentData(bh, parentSpanInst);
      //appendnew_next_sd_2tnpyEY35OLWo2gk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2tnpyEY35OLWo2gk',
        spanInst,
        'sd_2tnpyEY35OLWo2gk'
      );
    }
  }

  async getPaymentData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPaymentData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2qInstance: SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q.flows =
        SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2qInstance.getPaymentData(
          spanInst,
          bh.checkout_id
        );
      bh.payment_details = outputVariables.local.payment_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateCallbackUrl(bh, parentSpanInst);
      //appendnew_next_getPaymentData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rbke559iurdxVD7j',
        spanInst,
        'getPaymentData'
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
          'TABBY_PAYMENT_CALLBACK',
          bh.input.query,
          bh.input.query,
          bh.input.headers,
          undefined,
          new Date().toISOString(),
          undefined,
          undefined,
          bh.payment_details['source_id_no'],
          bh.statusCode
        )
      );
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.payment_details['source_id_no'],
          bh.payment_details['checkout_id'],
          bh.payment_status,
          bh.payment_status,
          bh.payment_details['callback_url'],
          undefined
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e7s316A1p9m4bHyA(bh, parentSpanInst);
      //appendnew_next_updateCallbackUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lyP8hvmJ0cLZ8Eg6',
        spanInst,
        'updateCallbackUrl'
      );
    }
  }

  async sd_e7s316A1p9m4bHyA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e7s316A1p9m4bHyA',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.payment_status,
          'completed',
          undefined,
          undefined
        )
      ) {
        bh = await this.emailSms(bh, parentSpanInst);
      } else {
        bh = await this.sd_lIzznbPMK56x8Hha(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e7s316A1p9m4bHyA',
        spanInst,
        'sd_e7s316A1p9m4bHyA'
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
          bh.payment_details,
          undefined
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendSms(
          spanInst,
          bh.payment_details,
          undefined
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lIzznbPMK56x8Hha(bh, parentSpanInst);
      //appendnew_next_emailSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zun9Y8fIfNbLKEo6',
        spanInst,
        'emailSms'
      );
    }
  }

  async sd_lIzznbPMK56x8Hha(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lIzznbPMK56x8Hha',
      parentSpanInst
    );
    try {
      let locale =
        JSON.parse(bh.payment_details['addl_details'] || '{}')?.['locale'] ||
        'en';

      bh.status_code = 301;
      bh.redirectUrl = `${process.env.INT_URL}v1/payment_status?parent_checkout_id=${bh.payment_details['checkout_id']}&txn_ref_number=&source_id_no=${bh.payment_details['source_id_no']}`;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ateZlWg5dHsOIXXn(bh, parentSpanInst);
      //appendnew_next_sd_lIzznbPMK56x8Hha
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lIzznbPMK56x8Hha',
        spanInst,
        'sd_lIzznbPMK56x8Hha'
      );
    }
  }

  async sd_ateZlWg5dHsOIXXn(bh, parentSpanInst) {
    try {
      bh.web.res.redirect(bh.status_code, bh.redirectUrl);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ateZlWg5dHsOIXXn');
    }
  }

  async sd_ioQoppwaoGomHd7K(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ioQoppwaoGomHd7K');
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
  //appendnew_flow_tabby_apis_Catch
}
