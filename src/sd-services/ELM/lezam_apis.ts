// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8 from './lezam_flows'; //_splitter_
//append_imports_end
export class lezam_apis {
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
    this.serviceName = 'lezam_apis';
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
      instance = new lezam_apis(
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
    //appendnew_flow_lezam_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: lezam_apis');
    //appendnew_flow_lezam_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: lezam_apis');

    this.app['post'](
      `${this.serviceBasePath}/lezam/risk-score`,
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
          bh = await this.getRiskScoreInfo(bh, parentSpanInst);
          //appendnew_next_sd_rlK8tgNjm4G2whlR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rlK8tgNjm4G2whlR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_lezam_apis_HttpIn
  }
  //   service flows_lezam_apis

  //appendnew_flow_lezam_apis_start

  async getRiskScoreInfo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRiskScoreInfo',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8Instance: SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8.lezam_flows =
        SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8.lezam_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8Instance.getRiskScore(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_UejVz0zIXVrFECcw(bh, parentSpanInst);
      //appendnew_next_getRiskScoreInfo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gpKTfXru6XbeKv8B',
        spanInst,
        'getRiskScoreInfo'
      );
    }
  }

  async sd_UejVz0zIXVrFECcw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UejVz0zIXVrFECcw');
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
  //appendnew_flow_lezam_apis_Catch
}
