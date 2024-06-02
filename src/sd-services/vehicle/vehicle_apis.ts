// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv from './flows'; //_splitter_
//append_imports_end
export class vehicle_apis {
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
    this.serviceName = 'vehicle_apis';
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
      instance = new vehicle_apis(
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
    //appendnew_flow_vehicle_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: vehicle_apis');
    //appendnew_flow_vehicle_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: vehicle_apis');

    this.app['get'](
      `${this.serviceBasePath}/vehicle/image/:eska_make`,
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
          bh = await this.imageUrl(bh, parentSpanInst);
          //appendnew_next_sd_bFHCgNma9JojfVVJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bFHCgNma9JojfVVJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_vehicle_apis_HttpIn
  }
  //   service flows_vehicle_apis

  //appendnew_flow_vehicle_apis_start

  async imageUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('imageUrl', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmvInstance: SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv.flows =
        SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmvInstance.getMakeImage(
          spanInst,
          bh.input.params.eska_make
        );
      bh.image_url = outputVariables.local.image_url;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp(bh, parentSpanInst);
      //appendnew_next_imageUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fqce9lAqAlgl02vV',
        spanInst,
        'imageUrl'
      );
    }
  }

  async strapiHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.image_url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'arraybuffer',
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

      bh.data = responseMsg;
      bh = await this.sd_6WPGYNUrEYY94QmP(bh, parentSpanInst);
      //appendnew_next_strapiHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bNZksmXZobp8OqJP');
    }
  }

  async sd_6WPGYNUrEYY94QmP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6WPGYNUrEYY94QmP',
      parentSpanInst
    );
    try {
      const { Readable } = require('stream');
      bh.stream = Readable.from(bh.data?.payload);
      bh.headers = {
        'content-type': bh.data?.headers?.['content-type'],
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5GfWb11o8n5mWc9t(bh, parentSpanInst);
      //appendnew_next_sd_6WPGYNUrEYY94QmP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6WPGYNUrEYY94QmP',
        spanInst,
        'sd_6WPGYNUrEYY94QmP'
      );
    }
  }

  async sd_5GfWb11o8n5mWc9t(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.stream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5GfWb11o8n5mWc9t');
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
  //appendnew_flow_vehicle_apis_Catch
}
