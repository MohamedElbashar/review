// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG from '../urpay/db_flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w from './emkan_apigee_flows'; //_splitter_
//append_imports_end
export class emkan_apis {
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
    this.serviceName = 'emkan_apis';
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
      instance = new emkan_apis(
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
    //appendnew_flow_emkan_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: emkan_apis');
    //appendnew_flow_emkan_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: emkan_apis');

    this.app['post'](
      `${this.serviceBasePath}/v1/voucher_details`,
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
          bh = await this.getPayerDetail(bh, parentSpanInst);
          //appendnew_next_sd_pPLwLorafZZyFjuJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pPLwLorafZZyFjuJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/v1/emkan_redirect`,
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
          bh = await this.getPayerDetail1(bh, parentSpanInst);
          //appendnew_next_sd_e231YTfGUpk9vrT7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_e231YTfGUpk9vrT7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/emkan/verify_otp`,
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
          bh = await this.apigeeVerifyOtp(bh, parentSpanInst);
          //appendnew_next_sd_e3i1rVe8KRSM6Amc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_e3i1rVe8KRSM6Amc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_emkan_apis_HttpIn
  }
  //   service flows_emkan_apis

  //appendnew_flow_emkan_apis_start

  async getPayerDetail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetail',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.getPayerDetails(
          spanInst,
          bh.input.body['parent_checkout_id'],
          bh.input.body['source_id_no']
        );
      bh.payer_details = outputVariables.local.payer_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeGetVoucher(bh, parentSpanInst);
      //appendnew_next_getPayerDetail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d5nJtG9m0JJGjsME',
        spanInst,
        'getPayerDetail'
      );
    }
  }

  async apigeeGetVoucher(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeGetVoucher',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OzREStK1k5ahJ41wInstance: SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w.emkan_apigee_flows =
        SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w.emkan_apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_OzREStK1k5ahJ41wInstance.voucherDetails(
          spanInst,
          bh.input.body['voucher_code'],
          bh.input.body['national_id'],
          bh.input.body['application_id'],
          bh.input.body['locale'],
          bh.input.body['source_id_no'],
          bh.input.body['parent_checkout_id']
        );
      bh.redirect_data = outputVariables.local.voucher_details;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LPEuEjACyfJxXrxS(bh, parentSpanInst);
      //appendnew_next_apigeeGetVoucher
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zvzHyWeVi9jzreU0',
        spanInst,
        'apigeeGetVoucher'
      );
    }
  }

  async sd_LPEuEjACyfJxXrxS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LPEuEjACyfJxXrxS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.redirect_data['error'],
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sendOtp(bh, parentSpanInst);
      } else {
        bh = await this.sd_Aw9jrq5FTHZMnisZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LPEuEjACyfJxXrxS',
        spanInst,
        'sd_LPEuEjACyfJxXrxS'
      );
    }
  }

  async sendOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendOtp', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_OzREStK1k5ahJ41wInstance: SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w.emkan_apigee_flows =
        SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w.emkan_apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_OzREStK1k5ahJ41wInstance.emkanSendOtp(
          spanInst,
          bh.input.body['source_id_no'],
          bh.input.body['national_id'],
          bh.input.body['locale'],
          bh.input.body['voucher_code'],
          bh.input.body['parent_checkout_id']
        );
      bh.otp_obj = outputVariables.local.otp_obj;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_i7zIBfQtrH1bpzmR(bh, parentSpanInst);
      //appendnew_next_sendOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eba3P9aNYaeUcXCJ',
        spanInst,
        'sendOtp'
      );
    }
  }

  async sd_i7zIBfQtrH1bpzmR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i7zIBfQtrH1bpzmR',
      parentSpanInst
    );
    try {
      bh.redirect_data = {
        source_id_no: bh.input.body?.['source_id_no'],
        redirectUrl: `emkan_redirect?parent_checkout_id=${bh.input.body?.['parent_checkout_id']}&source_id_no=${bh.input.body?.['source_id_no']}&national_id=${bh.input.body?.['national_id']}&activity_type=enter_otp`,
      };

      bh.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Aw9jrq5FTHZMnisZ(bh, parentSpanInst);
      //appendnew_next_sd_i7zIBfQtrH1bpzmR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i7zIBfQtrH1bpzmR',
        spanInst,
        'sd_i7zIBfQtrH1bpzmR'
      );
    }
  }

  async sd_Aw9jrq5FTHZMnisZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.redirect_data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Aw9jrq5FTHZMnisZ');
    }
  }

  async getPayerDetail1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetail1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance: SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows =
        SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG.db_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CxLUqvboVchOR5CGInstance.getPayerDetails(
          spanInst,
          bh.input.query['parent_checkout_id'],
          bh.input.query['source_id_no']
        );
      bh.payer_details = outputVariables.local.payer_details;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.renderPageCheck(bh, parentSpanInst);
      //appendnew_next_getPayerDetail1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TpXUVHhWof3Iv7CV',
        spanInst,
        'getPayerDetail1'
      );
    }
  }

  async renderPageCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'renderPageCheck',
      parentSpanInst
    );
    try {
      if (
        bh.input['query']['parent_checkout_id'] &&
        bh.input['query']['national_id'] &&
        bh.input['query']['source_id_no']
      ) {
        bh.render_page = true;
      } else {
        bh.render_page = false;
        bh.statusCode = 500;
        bh.response = {
          error: 'Checkout ID or national id is Missing',
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
        'sd_hfRKQcb717qXhLmy',
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
        bh = await this.activityCheck(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.render_page,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_3e0MCrS1JQho2abg(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1kTMg4oN5xo43XvK',
        spanInst,
        'validateRender'
      );
    }
  }

  async activityCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'activityCheck',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.query['activity_type'],
          'enter_otp',
          undefined,
          undefined
        )
      ) {
        bh = await this.enterOtp(bh, parentSpanInst);
      } else {
        bh = await this.htmlMappingRender(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1YsEdCJqGg8wmqkX',
        spanInst,
        'activityCheck'
      );
    }
  }

  async enterOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('enterOtp', parentSpanInst);
    try {
      const fs = require('fs');
      const ejs = require('ejs');
      const path = require('path');
      let filename = path.join(__dirname, '../../public/views/emkan.ejs');

      let cancel_url = `${
        process.env.SSD_BASE_PATH
      }/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${
        bh.input.query?.['parent_checkout_id'] ||
        bh.payer_details?.['checkout_id']
      }`;
      if (bh.payer_details?.['frontend_cb_partial_url']) {
        cancel_url = `${
          bh.payer_details['frontend_cb_partial_url']
        }?reference_number=${
          bh.input.query?.['source_id_no'] || bh.payer_details['source_id_no']
        }&parent_checkout_id=${
          bh.input.query?.['parent_checkout_id'] ||
          bh.payer_details['checkout_id']
        }`;
      }

      let data = {
        activity_type: 'enter_otp',
        parent_checkout_id: bh.input['query']['parent_checkout_id'],
        source_id_no: bh.input?.['query']?.['source_id_no'],
        national_id: bh.input?.['query']?.['national_id'],
        base_path: process.env.SSD_BASE_PATH,
        errorMessage: '',
        dataObj: {
          parent_checkout_id: bh.input['query']['parent_checkout_id'],
          source_id_no: bh.input?.['query']?.['source_id_no'],
          national_id: bh.input?.['query']?.['national_id'],
          otp_reference: bh.payer_details['urpay_otp_reference'],
          voucher_code: bh.payer_details['voucher_code'],
          activity_type: 'enter_otp',
          callback_url: `emkan/verify_otp`,
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'Failure occured during emkan process',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3e0MCrS1JQho2abg(bh, parentSpanInst);
      //appendnew_next_enterOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pQ6MlNop9fh2K2Wk',
        spanInst,
        'enterOtp'
      );
    }
  }

  async sd_3e0MCrS1JQho2abg(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3e0MCrS1JQho2abg');
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
      let filename = path.join(__dirname, '../../public/views/emkan.ejs');

      let cancel_url = `${
        process.env.SSD_BASE_PATH
      }/v1/fetchPaymentOptions?product_type=MOTOR&channel_code=SP&device_type=&checkout_id=${
        bh.input.query?.['parent_checkout_id'] || bh.payer_data?.['checkout_id']
      }`;
      if (bh.payer_details?.['frontend_cb_partial_url']) {
        cancel_url = `${
          bh.payer_details['frontend_cb_partial_url']
        }?reference_number=${
          bh.input?.['query']?.['source_id_no'] ||
          bh.payer_details['source_id_no']
        }&parent_checkout_id=${
          bh.input.query?.['parent_checkout_id'] ||
          bh.payer_details['checkout_id']
        }`;
      }

      let data = {
        activity_type: 'get_voucher',
        parent_checkout_id: bh.input['query']['parent_checkout_id'],
        source_id_no: bh.input?.['query']?.['source_id_no'],
        national_id: bh.input?.['query']?.['national_id'],
        base_path: process.env.SSD_BASE_PATH,
        errorMessage: '',
        dataObj: {
          parent_checkout_id: bh.input['query']['parent_checkout_id'],
          source_id_no: bh.input?.['query']?.['source_id_no'],
          national_id: bh.input?.['query']?.['national_id'],
          activity_type: 'get_voucher',
          callback_url: `voucher_details`,
          cancel_url: cancel_url,
        },
      };

      let options = {};
      ejs.renderFile(filename, data, options, function (err, str) {
        // str => Rendered HTML string
        bh.response = str;
        bh.headers = {
          'Content-Type': 'text/html',
        };
        bh.statusCode = 200;

        if (err) {
          console.log('ejs error', err);
          bh.response = {
            error: 'Failure occured during emkan process',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3e0MCrS1JQho2abg(bh, parentSpanInst);
      //appendnew_next_htmlMappingRender
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_80B9MwvD90oG1qJE',
        spanInst,
        'htmlMappingRender'
      );
    }
  }

  async apigeeVerifyOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeVerifyOtp',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OzREStK1k5ahJ41wInstance: SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w.emkan_apigee_flows =
        SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w.emkan_apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_OzREStK1k5ahJ41wInstance.emkanVerifyOtp(
          spanInst,
          bh.input.body['parent_checkout_id'],
          bh.input.body['source_id_no'],
          bh.input.body['voucher_data']
        );
      bh.otp_resp = outputVariables.local.verify_otp_resp;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_qrYHn9PBRAlz0DoV(bh, parentSpanInst);
      //appendnew_next_apigeeVerifyOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ScOevniiNzhFBbtF',
        spanInst,
        'apigeeVerifyOtp'
      );
    }
  }

  async sd_qrYHn9PBRAlz0DoV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.otp_resp);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qrYHn9PBRAlz0DoV');
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
  //appendnew_flow_emkan_apis_Catch
}
