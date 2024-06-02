// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

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
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async ddmmyyy(
    parentSpanInst,
    inputDate: any = undefined,
    separator = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('ddmmyyy', parentSpanInst);
    let bh: any = {
      input: {
        inputDate,
        separator,
      },
      local: {
        outputDate: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2B6HEW4eH6dCmodb(bh, parentSpanInst);
      //appendnew_next_ddmmyyy
      return (
        // formatting output variables
        {
          input: {},
          local: {
            outputDate: bh.local.outputDate,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e2qwaO9IKLFthDQ5',
        spanInst,
        'ddmmyyy'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_2B6HEW4eH6dCmodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2B6HEW4eH6dCmodb',
      parentSpanInst
    );
    try {
      const seperator = bh.input.separator || '';
      const date = new Date(bh.input.inputDate);
      const yyyy = date.getFullYear();
      const mm =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      bh.local.outputDate = [dd, mm, yyyy].join(seperator);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_2B6HEW4eH6dCmodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2B6HEW4eH6dCmodb',
        spanInst,
        'sd_2B6HEW4eH6dCmodb'
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
  //appendnew_flow_flows_Catch
}
