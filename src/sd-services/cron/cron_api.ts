// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e from '../mokafaa/apigee_flows'; //_splitter_
//append_imports_end
export class cron_api {
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
    this.serviceName = 'cron_api';
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
      instance = new cron_api(
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
    //appendnew_flow_cron_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: cron_api');
    //appendnew_flow_cron_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: cron_api');

    this.app['get'](
      `${this.serviceBasePath}/cron/rev_mp`,
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
          bh = await this.sd_bOineUxYrHGCOaCb(bh, parentSpanInst);
          //appendnew_next_sd_3V7VORm8T2QMHeJm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3V7VORm8T2QMHeJm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_cron_api_HttpIn
  }
  //   service flows_cron_api

  //appendnew_flow_cron_api_start

  async sd_bOineUxYrHGCOaCb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bOineUxYrHGCOaCb',
      parentSpanInst
    );
    try {
      bh.cron = true;
      bh.payload = {
        checkout_id: '',
        source_id_no: '',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.reverse(bh, parentSpanInst);
      //appendnew_next_sd_bOineUxYrHGCOaCb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bOineUxYrHGCOaCb',
        spanInst,
        'sd_bOineUxYrHGCOaCb'
      );
    }
  }

  async reverse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('reverse', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance: SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows =
        SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e.apigee_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4eInstance.reverseTransaction(
          spanInst,
          bh.payload,
          bh.cron
        );
      bh.response = outputVariables.local.response;
      bh.status_code = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KnbtRsf2UwHkBLk0(bh, parentSpanInst);
      //appendnew_next_reverse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3B6vH77tvTDr8hzn',
        spanInst,
        'reverse'
      );
    }
  }

  async sd_KnbtRsf2UwHkBLk0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KnbtRsf2UwHkBLk0',
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
        bh = await this.sd_WS6Iyk46KFJgVgAt(bh, parentSpanInst);
      } else {
        bh = await this.sd_dS34SxMZR0aBXg5P(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KnbtRsf2UwHkBLk0',
        spanInst,
        'sd_KnbtRsf2UwHkBLk0'
      );
    }
  }

  async sd_WS6Iyk46KFJgVgAt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WS6Iyk46KFJgVgAt',
      parentSpanInst
    );
    try {
      bh.status_code = 200;
      bh.response = {
        message: 'Mokafaa Points has been reversed successfully',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Bn5K2bUW5C3sLiG9(bh, parentSpanInst);
      //appendnew_next_sd_WS6Iyk46KFJgVgAt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WS6Iyk46KFJgVgAt',
        spanInst,
        'sd_WS6Iyk46KFJgVgAt'
      );
    }
  }

  async sd_Bn5K2bUW5C3sLiG9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bn5K2bUW5C3sLiG9');
    }
  }

  async sd_dS34SxMZR0aBXg5P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dS34SxMZR0aBXg5P',
      parentSpanInst
    );
    try {
      bh.status_code = 500;
      bh.response = {
        message: 'Mokafaa Points failed to reverse',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Bn5K2bUW5C3sLiG9(bh, parentSpanInst);
      //appendnew_next_sd_dS34SxMZR0aBXg5P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dS34SxMZR0aBXg5P',
        spanInst,
        'sd_dS34SxMZR0aBXg5P'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_cron_api_Catch
}
