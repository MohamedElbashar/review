// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['get'](
      `${this.serviceBasePath}/risk_item/sme/download`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.sd_jk15UxbrdpCKQEOo(bh, parentSpanInst);
          //appendnew_next_sd_jZ1cnW7LS8CRmFNh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jZ1cnW7LS8CRmFNh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async sd_jk15UxbrdpCKQEOo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jk15UxbrdpCKQEOo',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'risk_item/sme/download';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pHl2LKlAZ8cyH1d6(bh, parentSpanInst);
      //appendnew_next_sd_jk15UxbrdpCKQEOo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jk15UxbrdpCKQEOo',
        spanInst,
        'sd_jk15UxbrdpCKQEOo'
      );
    }
  }

  async sd_pHl2LKlAZ8cyH1d6(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
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
      bh = await this.sd_3CnrCapIrbomW7tZ(bh, parentSpanInst);
      //appendnew_next_sd_pHl2LKlAZ8cyH1d6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pHl2LKlAZ8cyH1d6');
    }
  }

  async sd_3CnrCapIrbomW7tZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3CnrCapIrbomW7tZ',
      parentSpanInst
    );
    try {
      const { Readable } = require('stream');
      bh.stream = Readable.from(bh.data?.payload);
      bh.headers = bh.data?.headers;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uprM60mitLL20yCx(bh, parentSpanInst);
      //appendnew_next_sd_3CnrCapIrbomW7tZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3CnrCapIrbomW7tZ',
        spanInst,
        'sd_3CnrCapIrbomW7tZ'
      );
    }
  }

  async sd_uprM60mitLL20yCx(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.stream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uprM60mitLL20yCx');
    }
  }

  async sd_yJWoPZP0vKMPUqV0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yJWoPZP0vKMPUqV0',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7Gn73d2u2BvzKO2S(bh, parentSpanInst);
      //appendnew_next_sd_yJWoPZP0vKMPUqV0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yJWoPZP0vKMPUqV0',
        spanInst,
        'sd_yJWoPZP0vKMPUqV0'
      );
    }
  }

  async sd_7Gn73d2u2BvzKO2S(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7Gn73d2u2BvzKO2S');
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
      (await this.sd_uR4bK6w8KEECFik5(bh, parentSpanInst))
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
  async sd_uR4bK6w8KEECFik5(bh, parentSpanInst) {
    const nodes = ['sd_pHl2LKlAZ8cyH1d6'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_yJWoPZP0vKMPUqV0(bh, parentSpanInst);
      //appendnew_next_sd_uR4bK6w8KEECFik5
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
