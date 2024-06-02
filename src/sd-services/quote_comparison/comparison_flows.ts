// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class comparison_flows {
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
    this.serviceName = 'comparison_flows';
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
      instance = new comparison_flows(
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
    //appendnew_flow_comparison_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: comparison_flows');
    //appendnew_flow_comparison_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: comparison_flows');
    //appendnew_flow_comparison_flows_HttpIn
  }
  //   service flows_comparison_flows

  async validatePayload(
    parentSpanInst,
    reqPayloadKeys: any = [],
    payload: any = {},
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validatePayload',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reqPayloadKeys,
        payload,
      },
      local: {
        isValidPayload: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkPayload(bh, parentSpanInst);
      //appendnew_next_validatePayload
      return (
        // formatting output variables
        {
          input: {},
          local: {
            isValidPayload: bh.local.isValidPayload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6k8Xb62BQPaETZ1s',
        spanInst,
        'validatePayload'
      );
    }
  }
  //appendnew_flow_comparison_flows_start

  async checkPayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkPayload',
      parentSpanInst
    );
    try {
      const { reqPayloadKeys, payload } = bh.input;

      bh.local.isValidPayload = !reqPayloadKeys.some(
        (key) => !payload.hasOwnProperty(key) || !payload[key]
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_checkPayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uMBMA4d6oGKG7WCd',
        spanInst,
        'checkPayload'
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
  //appendnew_flow_comparison_flows_Catch
}
