// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class ping {
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
    this.serviceName = 'ping';
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
      instance = new ping(
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
    //appendnew_flow_ping_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ping');
    //appendnew_flow_ping_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ping');

    this.app['get'](
      `${this.serviceBasePath}/ping`,
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
          bh = await this.sd_KjTLwJizoQmP5YaM(bh, parentSpanInst);
          //appendnew_next_sd_FpiDG9y22ljUwY9R
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FpiDG9y22ljUwY9R');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ping_HttpIn
  }
  //   service flows_ping

  //appendnew_flow_ping_start

  async sd_KjTLwJizoQmP5YaM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KjTLwJizoQmP5YaM',
      parentSpanInst
    );
    try {
      const { version: version } = require('../../../package.json');

      bh.payload = {
        STATUS: 'ART INTEGRATION API IS UP & RUNNING',
        ENV: bh.system.environment.ENV,
        VERSION: version,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_17Ky5X9c0Hl1okR5(bh, parentSpanInst);
      //appendnew_next_sd_KjTLwJizoQmP5YaM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KjTLwJizoQmP5YaM',
        spanInst,
        'sd_KjTLwJizoQmP5YaM'
      );
    }
  }

  async sd_17Ky5X9c0Hl1okR5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_17Ky5X9c0Hl1okR5');
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
  //appendnew_flow_ping_Catch
}
