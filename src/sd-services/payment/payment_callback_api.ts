// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB from './flow'; //_splitter_
//append_imports_end
export class payment_callback_api {
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
    this.serviceName = 'payment_callback_api';
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
      instance = new payment_callback_api(
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
    //appendnew_flow_payment_callback_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: payment_callback_api');
    //appendnew_flow_payment_callback_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: payment_callback_api');

    this.app['post'](
      `${this.serviceBasePath}/issue-policy`,
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
          bh = await this.updatePaymentStatus(bh, parentSpanInst);
          //appendnew_next_sd_fZPU4LoXTQ1ItHiM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fZPU4LoXTQ1ItHiM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_payment_callback_api_HttpIn
  }
  //   service flows_payment_callback_api

  //appendnew_flow_payment_callback_api_start

  async updatePaymentStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePaymentStatus',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.updateCustomerDecision(
          spanInst,
          bh.input.body['status'],
          bh.input.body['reference_number'],
          undefined
        );
      bh.result = outputVariables.local.result;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkStatus(bh, parentSpanInst);
      //appendnew_next_updatePaymentStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dV2j4ESwcvKDVWTy',
        spanInst,
        'updatePaymentStatus'
      );
    }
  }

  async checkStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkStatus',
      parentSpanInst
    );
    try {
      bh.issue_policy = false;
      if (bh.input.body['status'] == 'PS') {
        bh.issue_policy = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_79S0xV0P3meCxKQI(bh, parentSpanInst);
      //appendnew_next_checkStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zUol1DjBL2jruOuq',
        spanInst,
        'checkStatus'
      );
    }
  }

  async sd_79S0xV0P3meCxKQI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_79S0xV0P3meCxKQI',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.issue_policy,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.issuePolicy(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.issue_policy,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_bUwtWx2IIwpOOHUF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_79S0xV0P3meCxKQI',
        spanInst,
        'sd_79S0xV0P3meCxKQI'
      );
    }
  }

  async issuePolicy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'issuePolicy',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.issuePolicy(
          spanInst,
          bh.input.body['reference_number']
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_bUwtWx2IIwpOOHUF(bh, parentSpanInst);
      //appendnew_next_issuePolicy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_95ubw2oy8i3X2nPH',
        spanInst,
        'issuePolicy'
      );
    }
  }

  async sd_bUwtWx2IIwpOOHUF(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bUwtWx2IIwpOOHUF');
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
  //appendnew_flow_payment_callback_api_Catch
}
