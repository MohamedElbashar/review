// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class audit_log {
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
    this.serviceName = 'audit_log';
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
      instance = new audit_log(
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
    //appendnew_flow_audit_log_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: audit_log');
    //appendnew_flow_audit_log_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: audit_log');
    //appendnew_flow_audit_log_HttpIn
  }
  //   service flows_audit_log

  async sd_xNRtDSHUGSEXPyTh(
    parentSpanInst,
    api_name = '',
    req: any = undefined,
    response: any = undefined,
    headers: any = undefined,
    request_time: any = undefined,
    response_time: any = undefined,
    error_message = '',
    addl_details: any = undefined,
    source_id_no = '',
    response_code = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sd_xNRtDSHUGSEXPyTh',
      parentSpanInst
    );
    let bh: any = {
      input: {
        api_name,
        req,
        response,
        headers,
        request_time,
        response_time,
        error_message,
        addl_details,
        source_id_no,
        response_code,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepPayload(bh, parentSpanInst);
      //appendnew_next_sd_xNRtDSHUGSEXPyTh
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xNRtDSHUGSEXPyTh',
        spanInst,
        'sd_xNRtDSHUGSEXPyTh'
      );
    }
  }
  //appendnew_flow_audit_log_start

  async prepPayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepPayload',
      parentSpanInst
    );
    try {
      bh.payload = {
        api_name: bh.input.api_name,
        source_id_no:
          bh.input['source_id_no'] || bh.input['req']?.['source_id_no'],
        request: JSON.stringify(bh.input.req || ''),
        response: JSON.stringify(bh.input.response || ''),
        request_time: bh.input.request_time,
        response_time: bh.input.response_time,
        error_message: bh.input.error_message,
        addl_details: bh.input.addl_details,
        ip_address: '',
        device_type: '',
        response_code: bh.input.response_code || null,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_j8JYcSmG4AsdqdOx(bh, parentSpanInst);
      //appendnew_next_prepPayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZYCK4wvFeNfvpeVV',
        spanInst,
        'prepPayload'
      );
    }
  }

  async sd_j8JYcSmG4AsdqdOx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j8JYcSmG4AsdqdOx',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      await dmUtilsInst.insert('_EN_z81tf2fzmv', bh.payload);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_j8JYcSmG4AsdqdOx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j8JYcSmG4AsdqdOx',
        spanInst,
        'sd_j8JYcSmG4AsdqdOx'
      );
    }
  }

  async sd_ovxWDKI9x9HjjTgB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ovxWDKI9x9HjjTgB',
      parentSpanInst
    );
    try {
      console.log('bh.error', bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ovxWDKI9x9HjjTgB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ovxWDKI9x9HjjTgB',
        spanInst,
        'sd_ovxWDKI9x9HjjTgB'
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
    if (
      false ||
      (await this.sd_Cvnsu2ouokbiK4Ex(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_Cvnsu2ouokbiK4Ex(bh, parentSpanInst) {
    const nodes = ['sd_j8JYcSmG4AsdqdOx'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ovxWDKI9x9HjjTgB(bh, parentSpanInst);
      //appendnew_next_sd_Cvnsu2ouokbiK4Ex
      return true;
    }
    return false;
  }
  //appendnew_flow_audit_log_Catch
}
