// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7 from './flows'; //_splitter_
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
      `${this.serviceBasePath}/verify-user`,
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
          bh = await this.sd_JgvqbF92Xs42bQAz(bh, parentSpanInst);
          //appendnew_next_sd_dvAakO8Ht0k28Jn0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dvAakO8Ht0k28Jn0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/view-quote/:reference_number`,
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
          bh = await this.sd_syv4ieeUu4kwiDIM(bh, parentSpanInst);
          //appendnew_next_sd_knIKqGLy4odJsyjP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_knIKqGLy4odJsyjP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/user/redis`,
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
          bh = await this.sd_S3UvE5lYCS7C6in1(bh, parentSpanInst);
          //appendnew_next_sd_hrLOCPUJDJlHDqY5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hrLOCPUJDJlHDqY5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/test-redis`,
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
          bh = await this.sd_AnhSRqpSv3yaujuN(bh, parentSpanInst);
          //appendnew_next_sd_wsdPoLiU9VMxMx1e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wsdPoLiU9VMxMx1e');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/userInfo`,
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
          bh = await this.sd_oTbLnvlWeTm1SVnM(bh, parentSpanInst);
          //appendnew_next_sd_GlJ7PjjGo52OxV4M
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GlJ7PjjGo52OxV4M');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/renewal-verify-otp/:id_no`,
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
          bh = await this.sd_UX8pvcnSvQHiQv2Y(bh, parentSpanInst);
          //appendnew_next_sd_SEQNhtJNOEoD5eit
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SEQNhtJNOEoD5eit');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/userInfo`,
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
          bh = await this.sd_qetkVUB6am2N45Tk(bh, parentSpanInst);
          //appendnew_next_sd_tNhVpP7TnlWeJhDe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tNhVpP7TnlWeJhDe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/qr_data`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'validate_otp',
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
          bh = await this.validateBody(bh, parentSpanInst);
          //appendnew_next_sd_Z9dGuf8IsiKJqTdO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Z9dGuf8IsiKJqTdO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'validate_otp',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async sd_JgvqbF92Xs42bQAz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JgvqbF92Xs42bQAz',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessionParams = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_sd_JgvqbF92Xs42bQAz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JgvqbF92Xs42bQAz',
        spanInst,
        'sd_JgvqbF92Xs42bQAz'
      );
    }
  }

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'verify-user';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZML8mLs5vW8rY9Eb(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R0dtVRvCxlc6ybls',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_ZML8mLs5vW8rY9Eb(bh, parentSpanInst) {
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
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_sd_ZML8mLs5vW8rY9Eb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZML8mLs5vW8rY9Eb');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || {};

      bh.sessionData = bh.sessionParams['data'] || {};
      if (bh.response.status) {
        bh.sessionData['otp-verified'] = true;
        if (!bh.sessionData['session_created_at']) {
          bh.sessionData['session_created_at'] = new Date();
          bh.sessionData['session_expiry'] = new Date(
            new Date().getTime() +
              Number(process.env.SEESSION_MAX_AGE || 60 * 60 * 1000)
          ).getTime();
        }
      } else {
        bh.sessionData['otp-verified'] = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YMASOdWOlvy9wEQo(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZzXNvWbH8IchL6Ds',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_YMASOdWOlvy9wEQo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YMASOdWOlvy9wEQo',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.sessionData;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UQSajEdA3Tc63xnw(bh, parentSpanInst);
      //appendnew_next_sd_YMASOdWOlvy9wEQo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YMASOdWOlvy9wEQo',
        spanInst,
        'sd_YMASOdWOlvy9wEQo'
      );
    }
  }

  async sd_UQSajEdA3Tc63xnw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UQSajEdA3Tc63xnw');
    }
  }

  async sd_VT6Yz0hPjLIpHXSa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VT6Yz0hPjLIpHXSa',
      parentSpanInst
    );
    try {
      if (bh.error && bh.error['response'] && bh.error['response']['body']) {
        bh.response = bh.error['response']['body'];
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UQSajEdA3Tc63xnw(bh, parentSpanInst);
      //appendnew_next_sd_VT6Yz0hPjLIpHXSa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VT6Yz0hPjLIpHXSa',
        spanInst,
        'sd_VT6Yz0hPjLIpHXSa'
      );
    }
  }

  async sd_syv4ieeUu4kwiDIM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_syv4ieeUu4kwiDIM',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessionParams = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_sd_syv4ieeUu4kwiDIM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_syv4ieeUu4kwiDIM',
        spanInst,
        'sd_syv4ieeUu4kwiDIM'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url =
        process.env.MS_API_URL +
        `view-quote/${bh.input?.params?.reference_number}`;
      console.log('bh.url', bh.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EWjj44pO6Isn7Mrd(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yT5fgDh6nw7hizip',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_EWjj44pO6Isn7Mrd(bh, parentSpanInst) {
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
      //appendnew_next_sd_EWjj44pO6Isn7Mrd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EWjj44pO6Isn7Mrd');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || {};

      bh.sessionData = bh.sessionParams['data'] || {};
      bh.sessionData['otp-verified'] = false;

      if (!bh.sessionData['userInfo']) {
        bh.sessionData['userInfo'] = {};
      }
      bh.sessionData['userInfo']['phone_no'] = bh.response.phone_no;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MQ5hE2XemagP8zLp(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HSKukLgbgwwM4X6G',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_MQ5hE2XemagP8zLp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MQ5hE2XemagP8zLp',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.sessionData;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FmGKYL0FhLrDp1XP(bh, parentSpanInst);
      //appendnew_next_sd_MQ5hE2XemagP8zLp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MQ5hE2XemagP8zLp',
        spanInst,
        'sd_MQ5hE2XemagP8zLp'
      );
    }
  }

  async sd_FmGKYL0FhLrDp1XP(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FmGKYL0FhLrDp1XP');
    }
  }

  async sd_qS44Sh2KageMdOwN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qS44Sh2KageMdOwN',
      parentSpanInst
    );
    try {
      if (bh.error && bh.error['response'] && bh.error['response']['body']) {
        bh.response = bh.error['response']['body'];
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FmGKYL0FhLrDp1XP(bh, parentSpanInst);
      //appendnew_next_sd_qS44Sh2KageMdOwN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qS44Sh2KageMdOwN',
        spanInst,
        'sd_qS44Sh2KageMdOwN'
      );
    }
  }

  async sd_S3UvE5lYCS7C6in1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S3UvE5lYCS7C6in1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7Instance: SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7.flows =
        SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7Instance.redisCheck(spanInst);
      bh.local.data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_3VHYGLXhrm6ASHEy(bh, parentSpanInst);
      //appendnew_next_sd_S3UvE5lYCS7C6in1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S3UvE5lYCS7C6in1',
        spanInst,
        'sd_S3UvE5lYCS7C6in1'
      );
    }
  }

  async sd_3VHYGLXhrm6ASHEy(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ status: true, data: bh.local.data });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3VHYGLXhrm6ASHEy');
    }
  }

  async sd_AnhSRqpSv3yaujuN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AnhSRqpSv3yaujuN',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7Instance: SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7.flows =
        SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7Instance.redisTest(
          spanInst,
          bh.input.body.nid
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_LoJLIXTxVHwUvRhg(bh, parentSpanInst);
      //appendnew_next_sd_AnhSRqpSv3yaujuN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AnhSRqpSv3yaujuN',
        spanInst,
        'sd_AnhSRqpSv3yaujuN'
      );
    }
  }

  async sd_LoJLIXTxVHwUvRhg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LoJLIXTxVHwUvRhg');
    }
  }

  async sd_oTbLnvlWeTm1SVnM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oTbLnvlWeTm1SVnM',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessionData = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_OEUNAkJb9fqXqipR(bh, parentSpanInst);
      //appendnew_next_sd_oTbLnvlWeTm1SVnM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oTbLnvlWeTm1SVnM',
        spanInst,
        'sd_oTbLnvlWeTm1SVnM'
      );
    }
  }

  async sd_OEUNAkJb9fqXqipR(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.sessionData);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OEUNAkJb9fqXqipR');
    }
  }

  async sd_UX8pvcnSvQHiQv2Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UX8pvcnSvQHiQv2Y',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessionParams = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_sd_UX8pvcnSvQHiQv2Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UX8pvcnSvQHiQv2Y',
        spanInst,
        'sd_UX8pvcnSvQHiQv2Y'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + `renewal-verify-otp`;
      if (!bh.input?.params?.id_no) {
        throw new Error('invalid id_no');
      }
      bh.local.body = {
        id_no: bh.input?.params?.id_no,
      };
      console.log('bh.url', bh.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.verifyRenewalsOtp(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZNP4a7eFVVSopFil',
        spanInst,
        'setUrl2'
      );
    }
  }

  async verifyRenewalsOtp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.body,
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
      //appendnew_next_verifyRenewalsOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lNwQfE660zgrIlGe');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || {};
      bh.sessionData = bh.sessionParams['data'] || {};
      bh.sessionData['otp-verified'] = false;

      if (!bh.sessionData['userInfo']) {
        bh.sessionData['userInfo'] = {};
      }
      bh.sessionData['userInfo']['phone_no'] = bh.response.phone_no;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_17ylznw80yG8J3zj(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_49FpRCqjjkSR5d4k',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_17ylznw80yG8J3zj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_17ylznw80yG8J3zj',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.sessionData;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_h4dG2r4oRN7OshFf(bh, parentSpanInst);
      //appendnew_next_sd_17ylznw80yG8J3zj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_17ylznw80yG8J3zj',
        spanInst,
        'sd_17ylznw80yG8J3zj'
      );
    }
  }

  async sd_h4dG2r4oRN7OshFf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h4dG2r4oRN7OshFf');
    }
  }

  async sd_qHDxlf6riiG6ttB4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qHDxlf6riiG6ttB4',
      parentSpanInst
    );
    try {
      if (bh.error && bh.error['response'] && bh.error['response']['body']) {
        bh.response = bh.error['response']['body'];
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_h4dG2r4oRN7OshFf(bh, parentSpanInst);
      //appendnew_next_sd_qHDxlf6riiG6ttB4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qHDxlf6riiG6ttB4',
        spanInst,
        'sd_qHDxlf6riiG6ttB4'
      );
    }
  }

  async sd_qetkVUB6am2N45Tk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qetkVUB6am2N45Tk',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zg8cluVDjuTzPiEf(bh, parentSpanInst);
      //appendnew_next_sd_qetkVUB6am2N45Tk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qetkVUB6am2N45Tk',
        spanInst,
        'sd_qetkVUB6am2N45Tk'
      );
    }
  }

  async sd_zg8cluVDjuTzPiEf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({});

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zg8cluVDjuTzPiEf');
    }
  }

  async validateBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateBody',
      parentSpanInst
    );
    try {
      if (!bh.input.body?.reference_number) {
        throw new Error('Invalid reference_number');
      }
      bh.response = {
        status: 200,
        data: `${process.env.VEHICLE_UPLOAD_URL}${bh.input.body?.reference_number}?source=b2c`,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tPDGnS1UhD2Dvvtp(bh, parentSpanInst);
      //appendnew_next_validateBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_47QR2AOOncCgHltL',
        spanInst,
        'validateBody'
      );
    }
  }

  async sd_tPDGnS1UhD2Dvvtp(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.response.status).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tPDGnS1UhD2Dvvtp');
    }
  }

  async sd_cILoNNNsmbUwc12v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cILoNNNsmbUwc12v',
      parentSpanInst
    );
    try {
      bh.response = {
        status: 500,
        data: bh.error?.message || bh.error,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_tPDGnS1UhD2Dvvtp(bh, parentSpanInst);
      //appendnew_next_sd_cILoNNNsmbUwc12v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cILoNNNsmbUwc12v',
        spanInst,
        'sd_cILoNNNsmbUwc12v'
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
      (await this.sd_tsRhawxJ8tyjpeo6(bh, parentSpanInst)) ||
      (await this.sd_Yxq1CmZOPmhjks5H(bh, parentSpanInst)) ||
      (await this.sd_TUAtKT9PgVJ9QCJZ(bh, parentSpanInst)) ||
      (await this.sd_LM1QuGKpd5WGHUdU(bh, parentSpanInst))
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
  async sd_tsRhawxJ8tyjpeo6(bh, parentSpanInst) {
    const nodes = ['sd_ZML8mLs5vW8rY9Eb'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_VT6Yz0hPjLIpHXSa(bh, parentSpanInst);
      //appendnew_next_sd_tsRhawxJ8tyjpeo6
      return true;
    }
    return false;
  }
  async sd_Yxq1CmZOPmhjks5H(bh, parentSpanInst) {
    const nodes = ['sd_EWjj44pO6Isn7Mrd'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_qS44Sh2KageMdOwN(bh, parentSpanInst);
      //appendnew_next_sd_Yxq1CmZOPmhjks5H
      return true;
    }
    return false;
  }
  async sd_TUAtKT9PgVJ9QCJZ(bh, parentSpanInst) {
    const nodes = ['sd_EWjj44pO6Isn7Mrd'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_qHDxlf6riiG6ttB4(bh, parentSpanInst);
      //appendnew_next_sd_TUAtKT9PgVJ9QCJZ
      return true;
    }
    return false;
  }
  async sd_LM1QuGKpd5WGHUdU(bh, parentSpanInst) {
    const nodes = ['sd_EWjj44pO6Isn7Mrd', 'sd_47QR2AOOncCgHltL'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_cILoNNNsmbUwc12v(bh, parentSpanInst);
      //appendnew_next_sd_LM1QuGKpd5WGHUdU
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
