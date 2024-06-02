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

  async getVehicleMake(parentSpanInst, eska_make = 0, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getVehicleMake',
      parentSpanInst
    );
    let bh: any = {
      input: {
        eska_make,
      },
      local: {
        image_url: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setRequest0(bh, parentSpanInst);
      //appendnew_next_getVehicleMake
      return (
        // formatting output variables
        {
          input: {},
          local: {
            image_url: bh.local.image_url,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4oTFGXzNaYIoPTDI',
        spanInst,
        'getVehicleMake'
      );
    }
  }
  //appendnew_flow_flows_start

  async setRequest0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setRequest0',
      parentSpanInst
    );
    try {
      bh.url =
        bh.system.environment.STRAPI_URL +
        `/api/vehicle-makes?populate=Image&filters[Code][$eq]=${bh.input.eska_make}`;
      bh.headers = {
        Authorization: 'Bearer ' + bh.system.environment.STRAPI_KEY,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiMake(bh, parentSpanInst);
      //appendnew_next_setRequest0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_13Q7JPYYBSYPC0cr',
        spanInst,
        'setRequest0'
      );
    }
  }

  async strapiMake(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: bh.headers,
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.result = responseMsg;
      bh = await this.setResult0(bh, parentSpanInst);
      //appendnew_next_strapiMake
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_93Bmdgo2gGEZIkZG');
    }
  }

  async setResult0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResult0',
      parentSpanInst
    );
    try {
      bh.data = bh.result?.payload?.data || [];
      bh.makeData = bh.data[0];
      let image_url = '';
      if (bh.makeData) {
        image_url = bh.makeData?.attributes?.Image?.data?.attributes?.url;
        if (image_url) {
          image_url = bh.system.environment.STRAPI_URL + image_url;
        }
      }
      bh.local.image_url = image_url;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResult0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_thxXSOc410ZfSxU7',
        spanInst,
        'setResult0'
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
