// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu from './urpay_flows'; //_splitter_
//append_imports_end
export class urpay_apis {
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
    this.serviceName = 'urpay_apis';
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
      instance = new urpay_apis(
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
    //appendnew_flow_urpay_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: urpay_apis');
    //appendnew_flow_urpay_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: urpay_apis');

    this.app['get'](
      `${this.serviceBasePath}/v1/urpay`,
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
          //appendnew_next_sd_MpiJr90KhNxhgFAM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MpiJr90KhNxhgFAM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/urpay/exec`,
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
          bh = await this.paymentProcess(bh, parentSpanInst);
          //appendnew_next_sd_vsBhRHXt4JlV3t4X
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vsBhRHXt4JlV3t4X');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/urpay/resend_otp`,
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
          bh = await this.otp(bh, parentSpanInst);
          //appendnew_next_sd_18tqDJ23OAXIkgNU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_18tqDJ23OAXIkgNU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_urpay_apis_HttpIn
  }
  //   service flows_urpay_apis

  //appendnew_flow_urpay_apis_start

  async renderPageCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'renderPageCheck',
      parentSpanInst
    );
    try {
      if (
        bh.input['query']['parent_checkout_id'] &&
        bh.input['query']['source_id_no']
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
        'sd_My5jW44d8UO5SNCg',
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
        bh = await this.htmlMappingRender(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.render_page,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_tCNrG3vKhMJ6yxr2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UMLOjmegIbpHxcMV',
        spanInst,
        'validateRender'
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
      let filename = path.join(__dirname, '../../public/views/urpay.ejs');

      let data = {
        checkout_id: bh.input['query']['parent_checkout_id'],
        callback_url: `${process.env.INT_URL}v1/urpay_exec`,
        source_id_no: bh.input['query']['source_id_no'],
        base_path: process.env.SSD_BASE_PATH,
        errorMessage: bh.input['errorMessage'] || '',
        dataObj: {
          parent_checkout_id: bh.input['query']['parent_checkout_id'],
          source_id_no: bh.input['query']['source_id_no'],
          callback_url: `${process.env.INT_URL}v1/urpay/exec`,
          resend_otp: `${process.env.INT_URL}v1/urpay/resend_otp`,
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
            error: 'checkout id has been expired please request again',
          };
          bh.statusCode = 500;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tCNrG3vKhMJ6yxr2(bh, parentSpanInst);
      //appendnew_next_htmlMappingRender
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_icvgK56fPphU2DWA',
        spanInst,
        'htmlMappingRender'
      );
    }
  }

  async sd_tCNrG3vKhMJ6yxr2(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tCNrG3vKhMJ6yxr2');
    }
  }

  async paymentProcess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentProcess',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance: SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows =
        SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance.execUrpay(
          spanInst,
          bh.input.body['parent_checkout_id'],
          bh.input.body['source_id_no'],
          bh.input.body['otp_value']
        );
      bh.urpay_resp = outputVariables.local.urpay_resp;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_HhYgU8KvzcA2B7mq(bh, parentSpanInst);
      //appendnew_next_paymentProcess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NIVztIucL9mbc0CF',
        spanInst,
        'paymentProcess'
      );
    }
  }

  async sd_HhYgU8KvzcA2B7mq(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.urpay_resp);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HhYgU8KvzcA2B7mq');
    }
  }

  async otp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('otp', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance: SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows =
        SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance.resendOtp(
          spanInst,
          bh.input.body['parent_checkout_id'],
          bh.input.body['source_id_no']
        );
      bh.otp_resp = outputVariables.local.otp_resp;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_fPDXk1fJ6Sh6m2Di(bh, parentSpanInst);
      //appendnew_next_otp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kkdk6BSKY0EvGt4N',
        spanInst,
        'otp'
      );
    }
  }

  async sd_fPDXk1fJ6Sh6m2Di(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.otp_resp);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fPDXk1fJ6Sh6m2Di');
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
  //appendnew_flow_urpay_apis_Catch
}
