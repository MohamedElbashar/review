// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs from './flows'; //_splitter_
//append_imports_end
export class ifoundry_apis {
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
    this.serviceName = 'ifoundry_apis';
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
      instance = new ifoundry_apis(
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
    //appendnew_flow_ifoundry_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ifoundry_apis');
    //appendnew_flow_ifoundry_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ifoundry_apis');

    this.app['post'](
      `${this.serviceBasePath}/ifoundry/motor-rate`,
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
          bh = await this.getInfoId(bh, parentSpanInst);
          //appendnew_next_sd_NA4NDDUlxfbwnHgt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NA4NDDUlxfbwnHgt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ifoundry_apis_HttpIn
  }
  //   service flows_ifoundry_apis

  //appendnew_flow_ifoundry_apis_start

  async getInfoId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getInfoId', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWsInstance: SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs.flows =
        SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWsInstance.getMotorRate(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_zkuCthPWl7ASWKkO(bh, parentSpanInst);
      //appendnew_next_getInfoId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wCkKGzX1HpbUBHTv',
        spanInst,
        'getInfoId'
      );
    }
  }

  async sd_zkuCthPWl7ASWKkO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zkuCthPWl7ASWKkO');
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
  //appendnew_flow_ifoundry_apis_Catch
}
