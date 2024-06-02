// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo from './flows'; //_splitter_
//append_imports_end
export class driver_apis {
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
    this.serviceName = 'driver_apis';
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
      instance = new driver_apis(
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
    //appendnew_flow_driver_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: driver_apis');
    //appendnew_flow_driver_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: driver_apis');

    this.app['post'](
      `${this.serviceBasePath}/driver/list-by-quote`,
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
          bh = await this.sd_t9ubC7aB76QCDUtC(bh, parentSpanInst);
          //appendnew_next_sd_MH5UgrO2cx9XwEOt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MH5UgrO2cx9XwEOt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_driver_apis_HttpIn
  }
  //   service flows_driver_apis

  //appendnew_flow_driver_apis_start

  async sd_t9ubC7aB76QCDUtC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t9ubC7aB76QCDUtC',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjoInstance: SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo.flows =
        SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjoInstance.getDriverList(
          spanInst,
          bh.input.body.quote_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_LCkdkleCL0SMIqQ9(bh, parentSpanInst);
      //appendnew_next_sd_t9ubC7aB76QCDUtC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t9ubC7aB76QCDUtC',
        spanInst,
        'sd_t9ubC7aB76QCDUtC'
      );
    }
  }

  async sd_LCkdkleCL0SMIqQ9(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LCkdkleCL0SMIqQ9');
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
  //appendnew_flow_driver_apis_Catch
}
