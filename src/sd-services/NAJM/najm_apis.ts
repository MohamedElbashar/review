// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_J6X86g975hUioNVw from './flows'; //_splitter_
//append_imports_end
export class najm_apis {
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
    this.serviceName = 'najm_apis';
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
      instance = new najm_apis(
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
    //appendnew_flow_najm_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: najm_apis');
    //appendnew_flow_najm_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: najm_apis');

    this.app['post'](
      `${this.serviceBasePath}/najm/ncd`,
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
          bh = await this.getInfoSeq(bh, parentSpanInst);
          //appendnew_next_sd_8RCIA2xltNwldqZT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8RCIA2xltNwldqZT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_najm_apis_HttpIn
  }
  //   service flows_najm_apis

  //appendnew_flow_najm_apis_start

  async getInfoSeq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInfoSeq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_J6X86g975hUioNVwInstance: SSD_SERVICE_ID_sd_J6X86g975hUioNVw.flows =
        SSD_SERVICE_ID_sd_J6X86g975hUioNVw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_J6X86g975hUioNVwInstance.ncd(
          spanInst,
          bh.input.body.vehicleIdentifier,
          bh.input.body.vehicleId,
          bh.input.body.policyHolderId
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZbtzFakokxbjb6a8(bh, parentSpanInst);
      //appendnew_next_getInfoSeq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oVhVJJr0PbQMeCb8',
        spanInst,
        'getInfoSeq'
      );
    }
  }

  async sd_ZbtzFakokxbjb6a8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZbtzFakokxbjb6a8');
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
  //appendnew_flow_najm_apis_Catch
}
