// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
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

    this.app['post'](
      `${this.serviceBasePath}/arb-mokafaa/authorize-blu-customer`,
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
          bh = await this.success(bh, parentSpanInst);
          //appendnew_next_sd_kpK7WP4DFMILdrGO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kpK7WP4DFMILdrGO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/arb-mokafaa/otp-validation`,
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
          bh = await this.successOtp(bh, parentSpanInst);
          //appendnew_next_sd_xV9kM6TkEWncGZDO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xV9kM6TkEWncGZDO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/arb-mokafaa/reverse-transaction`,
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
          bh = await this.failureReverse(bh, parentSpanInst);
          //appendnew_next_sd_OgZEfkmhb5XI6RDa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OgZEfkmhb5XI6RDa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  //appendnew_flow_flows_start

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      bh.result = {
        requestID: '25d8acf9-7991-4aeb-abac-04b2573cd400',
        otp: {
          currency: 'SAR',
          otp_token_expired_in_min: 3,
          otp_token: 'd50c6cd1-0fa3-4ee2-994b-af63ba557225',
        },
        message: 'OK',
        status: 200,
      };
      bh.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_cJmt4Spe5YjLeifw(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cFnR6Ye0LNwSepjU',
        spanInst,
        'success'
      );
    }
  }

  async sd_cJmt4Spe5YjLeifw(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cJmt4Spe5YjLeifw');
    }
  }

  async successOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'successOtp',
      parentSpanInst
    );
    try {
      bh.result = {
        requestID: 'a26ed5e3-165c-4d4a-85d6-ea8969f383b4',
        merchant: 'PT_TAK_01',
        transactionDate: '2024-02-11 10:13:23',
        transactionID: 1560891,
        transactionType: 'Redemption',
        pointsAmount: -25000,
        message: 'Success',
        status: 200,
      };
      bh.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_q3Xyjinytm9qzfhS(bh, parentSpanInst);
      //appendnew_next_successOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ustflA7l2JXIayHu',
        spanInst,
        'successOtp'
      );
    }
  }

  async sd_q3Xyjinytm9qzfhS(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q3Xyjinytm9qzfhS');
    }
  }

  async failureReverse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'failureReverse',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Validation Failed',
        status: 400,
        requestID: '3d742a04-4b63-4829-837f-ea5e22c027e3',
      };
      bh.status_code = 400;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9RV0qbUqIVI797cK(bh, parentSpanInst);
      //appendnew_next_failureReverse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RCyap5LQTYBlNuyB',
        spanInst,
        'failureReverse'
      );
    }
  }

  async sd_9RV0qbUqIVI797cK(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9RV0qbUqIVI797cK');
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
  //appendnew_flow_flows_Catch
}
