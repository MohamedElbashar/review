// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class utils_api {
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
    this.serviceName = 'utils_api';
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
      instance = new utils_api(
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
    //appendnew_flow_utils_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: utils_api');
    //appendnew_flow_utils_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: utils_api');

    this.app['post'](
      `${this.serviceBasePath}/util/cache/data`,
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
          bh = await this.setUrl0(bh, parentSpanInst);
          //appendnew_next_sd_CMznMHvvlIe6agTM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CMznMHvvlIe6agTM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/system-settings/update`,
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
          bh = await this.setUrl1(bh, parentSpanInst);
          //appendnew_next_sd_GScqqIEncKJF5Lj1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GScqqIEncKJF5Lj1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_utils_api_HttpIn
  }
  //   service flows_utils_api

  //appendnew_flow_utils_api_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'util/cache/data';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KYjkft9Fn68sFgLj(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lWPhl1QaNZlIBHen',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_KYjkft9Fn68sFgLj(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      bh = await this.sd_5I5MxX6riGSTCMab(bh, parentSpanInst);
      //appendnew_next_sd_KYjkft9Fn68sFgLj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KYjkft9Fn68sFgLj');
    }
  }

  async sd_5I5MxX6riGSTCMab(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5I5MxX6riGSTCMab',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_r9xcJBJ1r6d6wDlF(bh, parentSpanInst);
      //appendnew_next_sd_5I5MxX6riGSTCMab
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5I5MxX6riGSTCMab',
        spanInst,
        'sd_5I5MxX6riGSTCMab'
      );
    }
  }

  async sd_r9xcJBJ1r6d6wDlF(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r9xcJBJ1r6d6wDlF');
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'system-settings/update';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UewcviNvU4gIa7rB(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LGle4a6HgCEIPOuc',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_UewcviNvU4gIa7rB(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      bh = await this.sd_yTZLzbS7oxiOnv2o(bh, parentSpanInst);
      //appendnew_next_sd_UewcviNvU4gIa7rB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UewcviNvU4gIa7rB');
    }
  }

  async sd_yTZLzbS7oxiOnv2o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yTZLzbS7oxiOnv2o',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9ZYpVvHYcnPFj8pl(bh, parentSpanInst);
      //appendnew_next_sd_yTZLzbS7oxiOnv2o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yTZLzbS7oxiOnv2o',
        spanInst,
        'sd_yTZLzbS7oxiOnv2o'
      );
    }
  }

  async sd_9ZYpVvHYcnPFj8pl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9ZYpVvHYcnPFj8pl');
    }
  }

  async sd_h5uDPtW6zkoBG2Tu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h5uDPtW6zkoBG2Tu',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_d8mKN72Ltpr4fMpQ(bh, parentSpanInst);
      //appendnew_next_sd_h5uDPtW6zkoBG2Tu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h5uDPtW6zkoBG2Tu',
        spanInst,
        'sd_h5uDPtW6zkoBG2Tu'
      );
    }
  }

  async sd_d8mKN72Ltpr4fMpQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d8mKN72Ltpr4fMpQ');
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
      (await this.sd_WVvqVodTNCF69jMO(bh, parentSpanInst))
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
  async sd_WVvqVodTNCF69jMO(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_h5uDPtW6zkoBG2Tu', 'sd_d8mKN72Ltpr4fMpQ'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_h5uDPtW6zkoBG2Tu(bh, parentSpanInst);
    //appendnew_next_sd_WVvqVodTNCF69jMO
    return true;
  }
  //appendnew_flow_utils_api_Catch
}
