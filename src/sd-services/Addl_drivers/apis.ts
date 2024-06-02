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
      `${this.serviceBasePath}/driver/list`,
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
          //appendnew_next_sd_c0WIsyrLc083ufB1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_c0WIsyrLc083ufB1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/update`,
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
          //appendnew_next_sd_AzzDynObGj8nQAQa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AzzDynObGj8nQAQa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/delete`,
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
          //appendnew_next_sd_elAaCxWQxj6MIJSM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_elAaCxWQxj6MIJSM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/link`,
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
          bh = await this.setUrl3(bh, parentSpanInst);
          //appendnew_next_sd_s64RmpElCiEDBhAH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_s64RmpElCiEDBhAH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/unlink`,
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
          bh = await this.setUrl4(bh, parentSpanInst);
          //appendnew_next_sd_D0AiGf7kCsvVn3VM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_D0AiGf7kCsvVn3VM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/create`,
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
          bh = await this.setUrl5(bh, parentSpanInst);
          //appendnew_next_sd_sPjyDMC3H7sHDBNl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sPjyDMC3H7sHDBNl');
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
      bh.url = process.env.MS_API_URL + 'driver/list';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRequest(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WZQiuPOP6VpeTWxX',
        spanInst,
        'setUrl0'
      );
    }
  }

  async getRequest(bh, parentSpanInst) {
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
      bh = await this.sd_lak7EVcsCHovbfFZ(bh, parentSpanInst);
      //appendnew_next_getRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FjgloaxxagbQ2w9C');
    }
  }

  async sd_lak7EVcsCHovbfFZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lak7EVcsCHovbfFZ',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KWr8hjue5FtsxrYy(bh, parentSpanInst);
      //appendnew_next_sd_lak7EVcsCHovbfFZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lak7EVcsCHovbfFZ',
        spanInst,
        'sd_lak7EVcsCHovbfFZ'
      );
    }
  }

  async sd_KWr8hjue5FtsxrYy(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KWr8hjue5FtsxrYy');
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'driver/update';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9Vuiehnz2VXv2wzt(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sSC4a7fHJF5XCh8b',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_9Vuiehnz2VXv2wzt(bh, parentSpanInst) {
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
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_sd_9Vuiehnz2VXv2wzt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Vuiehnz2VXv2wzt');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.response = { id: bh.result.payload.id };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ahA5GLLjWLU3PZhG(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_91I3eBnaGOIvT9BN',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_ahA5GLLjWLU3PZhG(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ahA5GLLjWLU3PZhG');
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'driver/delete';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteReq(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7fwaRslHLa6wtk6Y',
        spanInst,
        'setUrl2'
      );
    }
  }

  async deleteReq(bh, parentSpanInst) {
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
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_deleteReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8NKn0k9oAY5QxAaQ');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.response = { id: bh.result.payload.id };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HjUm0vblOYF7vvo6(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fYDiDvoAnoUUjR6R',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_HjUm0vblOYF7vvo6(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HjUm0vblOYF7vvo6');
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'driver/link';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.linkReq(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CK0ZsA7NGcInhrlB',
        spanInst,
        'setUrl3'
      );
    }
  }

  async linkReq(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      await this.sd_B0BSxA5uVsMsXwqi(bh, parentSpanInst);
      //appendnew_next_linkReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4BU8aLfuoovqwM5z');
    }
  }

  async sd_B0BSxA5uVsMsXwqi(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B0BSxA5uVsMsXwqi');
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'driver/unlink';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.unlinkReq(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C5KOIpNtZR9gsGXx',
        spanInst,
        'setUrl4'
      );
    }
  }

  async unlinkReq(bh, parentSpanInst) {
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
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_unlinkReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zSIWHdzw8ZY7Jdw5');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.response = bh.result.payload;
        bh.statusCode = 200;
      } else {
        bh.response = { error: 'No item found to delete' };
        bh.statusCode = 404;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_STbLGyEneoorOsls(bh, parentSpanInst);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nckwhd7kmd62mrMG',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_STbLGyEneoorOsls(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_STbLGyEneoorOsls');
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'driver/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SSm4rQNllKXdALgb(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wW017fuLSxvMLk8n',
        spanInst,
        'setUrl5'
      );
    }
  }

  async sd_SSm4rQNllKXdALgb(bh, parentSpanInst) {
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
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_sd_SSm4rQNllKXdALgb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SSm4rQNllKXdALgb');
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.response = bh.result.payload;
        bh.statusCode = 200;
      } else {
        bh.response = { error: 'No item found to delete' };
        bh.statusCode = 404;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yZsZ0O61jrBlBzfh(bh, parentSpanInst);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k19WfcUddU8i0tAX',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_yZsZ0O61jrBlBzfh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yZsZ0O61jrBlBzfh');
    }
  }

  async sd_KiS5yJmMrtoGdHk6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KiS5yJmMrtoGdHk6',
      parentSpanInst
    );
    try {
      if (bh.error?.response?.statusCode == 500) {
        bh.response = 'Invalid Id';
      } else {
        bh.response = bh.error?.response?.body;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_evhB5fV4CRHDl8sS(bh, parentSpanInst);
      //appendnew_next_sd_KiS5yJmMrtoGdHk6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KiS5yJmMrtoGdHk6',
        spanInst,
        'sd_KiS5yJmMrtoGdHk6'
      );
    }
  }

  async sd_evhB5fV4CRHDl8sS(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_evhB5fV4CRHDl8sS');
    }
  }

  async sd_6K6g54d2VlrsWvh3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6K6g54d2VlrsWvh3',
      parentSpanInst
    );
    try {
      bh.response = [];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2FqsnPBoEC0radW2(bh, parentSpanInst);
      //appendnew_next_sd_6K6g54d2VlrsWvh3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6K6g54d2VlrsWvh3',
        spanInst,
        'sd_6K6g54d2VlrsWvh3'
      );
    }
  }

  async sd_2FqsnPBoEC0radW2(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2FqsnPBoEC0radW2');
    }
  }

  async sd_Vgxk7bMrGi9O9Qkv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vgxk7bMrGi9O9Qkv',
      parentSpanInst
    );
    try {
      if (bh.error?.response?.statusCode == 500) {
        bh.response = 'Unable to link driver';
      } else {
        bh.response = bh.error?.response?.body;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mFz49Ur1QmeIlQ1W(bh, parentSpanInst);
      //appendnew_next_sd_Vgxk7bMrGi9O9Qkv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vgxk7bMrGi9O9Qkv',
        spanInst,
        'sd_Vgxk7bMrGi9O9Qkv'
      );
    }
  }

  async sd_mFz49Ur1QmeIlQ1W(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mFz49Ur1QmeIlQ1W');
    }
  }

  async sd_a5XgLtEfpwCSrDQy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a5XgLtEfpwCSrDQy',
      parentSpanInst
    );
    try {
      if (bh.error?.response?.statusCode == 500) {
        bh.response = 'Unable to unlink driver';
      } else {
        bh.response = bh.error?.response?.body;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9Dyi5Ee8A2WtzgdX(bh, parentSpanInst);
      //appendnew_next_sd_a5XgLtEfpwCSrDQy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a5XgLtEfpwCSrDQy',
        spanInst,
        'sd_a5XgLtEfpwCSrDQy'
      );
    }
  }

  async sd_9Dyi5Ee8A2WtzgdX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Dyi5Ee8A2WtzgdX');
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
      (await this.sd_50CTvIfbRLdeyWLP(bh, parentSpanInst)) ||
      (await this.sd_Uny8gjHscdUN6sOe(bh, parentSpanInst)) ||
      (await this.sd_F6AdX1XC1V6QXjnq(bh, parentSpanInst)) ||
      (await this.sd_uVEUYvdbkOmt7sEJ(bh, parentSpanInst))
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
  async sd_50CTvIfbRLdeyWLP(bh, parentSpanInst) {
    const nodes = ['sd_8NKn0k9oAY5QxAaQ'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_KiS5yJmMrtoGdHk6(bh, parentSpanInst);
      //appendnew_next_sd_50CTvIfbRLdeyWLP
      return true;
    }
    return false;
  }
  async sd_Uny8gjHscdUN6sOe(bh, parentSpanInst) {
    const nodes = ['sd_FjgloaxxagbQ2w9C'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6K6g54d2VlrsWvh3(bh, parentSpanInst);
      //appendnew_next_sd_Uny8gjHscdUN6sOe
      return true;
    }
    return false;
  }
  async sd_F6AdX1XC1V6QXjnq(bh, parentSpanInst) {
    const nodes = ['sd_8NKn0k9oAY5QxAaQ', 'sd_4BU8aLfuoovqwM5z'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Vgxk7bMrGi9O9Qkv(bh, parentSpanInst);
      //appendnew_next_sd_F6AdX1XC1V6QXjnq
      return true;
    }
    return false;
  }
  async sd_uVEUYvdbkOmt7sEJ(bh, parentSpanInst) {
    const nodes = [
      'sd_8NKn0k9oAY5QxAaQ',
      'sd_4BU8aLfuoovqwM5z',
      'sd_zSIWHdzw8ZY7Jdw5',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_a5XgLtEfpwCSrDQy(bh, parentSpanInst);
      //appendnew_next_sd_uVEUYvdbkOmt7sEJ
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
