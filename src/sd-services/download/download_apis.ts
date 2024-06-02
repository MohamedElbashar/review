// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class download_apis {
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
    this.serviceName = 'download_apis';
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
      instance = new download_apis(
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
    //appendnew_flow_download_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: download_apis');
    //appendnew_flow_download_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: download_apis');

    this.app['get'](
      `${this.serviceBasePath}/risk_item/sme/download`,
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
          bh = await this.sd_nDzHki5cXkPjpw19(bh, parentSpanInst);
          //appendnew_next_sd_rV4ZQqYX1RNFXloA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rV4ZQqYX1RNFXloA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_download_apis_HttpIn
  }
  //   service flows_download_apis

  //appendnew_flow_download_apis_start

  async sd_nDzHki5cXkPjpw19(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nDzHki5cXkPjpw19',
      parentSpanInst
    );
    try {
      bh.url = process.env.SME_UPLOAD_TEMPLATE_URL;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp(bh, parentSpanInst);
      //appendnew_next_sd_nDzHki5cXkPjpw19
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nDzHki5cXkPjpw19',
        spanInst,
        'sd_nDzHki5cXkPjpw19'
      );
    }
  }

  async strapiHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
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
      bh = await this.sd_t6NmcfdmLaJ6xgYn(bh, parentSpanInst);
      //appendnew_next_strapiHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_alyB6tmhh5nccRqr');
    }
  }

  async sd_t6NmcfdmLaJ6xgYn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t6NmcfdmLaJ6xgYn',
      parentSpanInst
    );
    try {
      const { Readable } = require('stream');
      bh.stream = Readable.from(bh.data?.payload);
      bh.headers = bh.data?.headers;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_E16QkoDsd06wPulf(bh, parentSpanInst);
      //appendnew_next_sd_t6NmcfdmLaJ6xgYn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t6NmcfdmLaJ6xgYn',
        spanInst,
        'sd_t6NmcfdmLaJ6xgYn'
      );
    }
  }

  async sd_E16QkoDsd06wPulf(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.stream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_E16QkoDsd06wPulf');
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
  //appendnew_flow_download_apis_Catch
}
