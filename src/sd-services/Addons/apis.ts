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

    this.app['post'](
      `${this.serviceBasePath}/addons/list`,
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
          //appendnew_next_sd_sDdNnv8sgbMf5OTM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sDdNnv8sgbMf5OTM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addons/create`,
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
          //appendnew_next_sd_bGjRMrvAXWC93PJn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bGjRMrvAXWC93PJn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addons/delete`,
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
          bh = await this.setUrl2(bh, parentSpanInst);
          //appendnew_next_sd_FBKlCgQ1tXOcLSFt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FBKlCgQ1tXOcLSFt');
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

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'addons/list';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_y9YjWjmcImzNnWAB(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PJ8sQ2w65cyZ0ktP',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_y9YjWjmcImzNnWAB(bh, parentSpanInst) {
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
      bh = await this.sd_1qHiSJ5l0Lms9E9G(bh, parentSpanInst);
      //appendnew_next_sd_y9YjWjmcImzNnWAB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y9YjWjmcImzNnWAB');
    }
  }

  async sd_1qHiSJ5l0Lms9E9G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1qHiSJ5l0Lms9E9G',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DVTqRlPxfMDKVdUW(bh, parentSpanInst);
      //appendnew_next_sd_1qHiSJ5l0Lms9E9G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1qHiSJ5l0Lms9E9G',
        spanInst,
        'sd_1qHiSJ5l0Lms9E9G'
      );
    }
  }

  async sd_DVTqRlPxfMDKVdUW(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DVTqRlPxfMDKVdUW');
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'addons/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_92DDk6pBR3rAbF9k(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gzMbdmdJO5ZTQ850',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_92DDk6pBR3rAbF9k(bh, parentSpanInst) {
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
      bh = await this.sd_P2pV80DeTpYZl6uN(bh, parentSpanInst);
      //appendnew_next_sd_92DDk6pBR3rAbF9k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_92DDk6pBR3rAbF9k');
    }
  }

  async sd_P2pV80DeTpYZl6uN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P2pV80DeTpYZl6uN',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CnNwCglGLLK91V4q(bh, parentSpanInst);
      //appendnew_next_sd_P2pV80DeTpYZl6uN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P2pV80DeTpYZl6uN',
        spanInst,
        'sd_P2pV80DeTpYZl6uN'
      );
    }
  }

  async sd_CnNwCglGLLK91V4q(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CnNwCglGLLK91V4q');
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      console.log('console.log(bh)', bh);
      bh.url = process.env.MS_API_URL + 'addons/delete';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H7p8Hs1Vocnb0Apf(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b9yFF0WYkKSSAiuy',
        spanInst,
        'setUrl2'
      );
    }
  }

  async sd_H7p8Hs1Vocnb0Apf(bh, parentSpanInst) {
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
      bh = await this.sd_eog4yXAGTuL6UNPA(bh, parentSpanInst);
      //appendnew_next_sd_H7p8Hs1Vocnb0Apf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H7p8Hs1Vocnb0Apf');
    }
  }

  async sd_eog4yXAGTuL6UNPA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eog4yXAGTuL6UNPA',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AygXbNRkM0ROPYgh(bh, parentSpanInst);
      //appendnew_next_sd_eog4yXAGTuL6UNPA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eog4yXAGTuL6UNPA',
        spanInst,
        'sd_eog4yXAGTuL6UNPA'
      );
    }
  }

  async sd_AygXbNRkM0ROPYgh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AygXbNRkM0ROPYgh');
    }
  }

  async sd_g69swrHx5aNDWiEb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g69swrHx5aNDWiEb',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Fe4S3sHLtblfsA9r(bh, parentSpanInst);
      //appendnew_next_sd_g69swrHx5aNDWiEb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g69swrHx5aNDWiEb',
        spanInst,
        'sd_g69swrHx5aNDWiEb'
      );
    }
  }

  async sd_Fe4S3sHLtblfsA9r(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fe4S3sHLtblfsA9r');
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
      (await this.sd_FDysFw2KLcwYtLEz(bh, parentSpanInst))
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
  async sd_FDysFw2KLcwYtLEz(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_g69swrHx5aNDWiEb', 'sd_Fe4S3sHLtblfsA9r'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_g69swrHx5aNDWiEb(bh, parentSpanInst);
    //appendnew_next_sd_FDysFw2KLcwYtLEz
    return true;
  }
  //appendnew_flow_apis_Catch
}
