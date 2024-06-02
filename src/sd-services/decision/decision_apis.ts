// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo from './flows'; //_splitter_
//append_imports_end
export class decision_apis {
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
    this.serviceName = 'decision_apis';
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
      instance = new decision_apis(
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
    //appendnew_flow_decision_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: decision_apis');
    //appendnew_flow_decision_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: decision_apis');

    this.app['post'](
      `${this.serviceBasePath}/quote/customer/decision`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
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
          bh = await this.sd_L9V8Ubpf69qJt4Mu(bh, parentSpanInst);
          //appendnew_next_sd_PtEmhkE6snirBPCh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PtEmhkE6snirBPCh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_decision_apis_HttpIn
  }
  //   service flows_decision_apis

  //appendnew_flow_decision_apis_start

  async sd_L9V8Ubpf69qJt4Mu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L9V8Ubpf69qJt4Mu',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCoInstance: SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo.flows =
        SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCoInstance.updateCustomerDecision(
          spanInst,
          bh.input.body.status,
          bh.input.body.reference_number
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCoInstance.updateCustomerComment(
          spanInst,
          bh.input.body.comment,
          bh.input.body.reference_number
        )
      );

      bh.update_result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8r50iicbTL3lJGVG(bh, parentSpanInst);
      //appendnew_next_sd_L9V8Ubpf69qJt4Mu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L9V8Ubpf69qJt4Mu',
        spanInst,
        'sd_L9V8Ubpf69qJt4Mu'
      );
    }
  }

  async sd_8r50iicbTL3lJGVG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8r50iicbTL3lJGVG',
      parentSpanInst
    );
    try {
      bh.result = { status: false };
      bh.status_code = 200;
      console.log(bh.update_result);
      if (bh.update_result[0]?.local.result.status === true) {
        bh.result = { status: true };
        bh.status_code = 200;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oOLtVKqRgKttoV8M(bh, parentSpanInst);
      //appendnew_next_sd_8r50iicbTL3lJGVG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8r50iicbTL3lJGVG',
        spanInst,
        'sd_8r50iicbTL3lJGVG'
      );
    }
  }

  async sd_oOLtVKqRgKttoV8M(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oOLtVKqRgKttoV8M');
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
  //appendnew_flow_decision_apis_Catch
}
