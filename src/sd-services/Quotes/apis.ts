// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y from './flow'; //_splitter_
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
      `${this.serviceBasePath}/quote/create`,
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
          bh = await this.setBody1(bh, parentSpanInst);
          //appendnew_next_sd_Yu8vMebmsGF2i7bu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Yu8vMebmsGF2i7bu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/summary`,
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
          bh = await this.setBody2(bh, parentSpanInst);
          //appendnew_next_sd_qZOWaroGeQOBYUU4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qZOWaroGeQOBYUU4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/update`,
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
          bh = await this.setBody3(bh, parentSpanInst);
          //appendnew_next_sd_r8Iu2lcb28eypZey
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_r8Iu2lcb28eypZey');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/share`,
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
          bh = await this.setBody4(bh, parentSpanInst);
          //appendnew_next_sd_5gnCaFHfWMRnQNFj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5gnCaFHfWMRnQNFj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/summary-pdf`,
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
          bh = await this.setBody5(bh, parentSpanInst);
          //appendnew_next_sd_2Zbet1PAYGVslPwo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2Zbet1PAYGVslPwo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/renewal/compare/quote`,
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
          bh = await this.sd_wYdflNoCUvW1QlZV(bh, parentSpanInst);
          //appendnew_next_sd_JSO3Ct6rNFi8EMYM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JSO3Ct6rNFi8EMYM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/summary/v1`,
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
          bh = await this.setBody2(bh, parentSpanInst);
          //appendnew_next_sd_k9jeIlQHOy5hQA4k
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_k9jeIlQHOy5hQA4k');
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

  async setBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody1', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'quote/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BPOygorsH4EvrFsl(bh, parentSpanInst);
      //appendnew_next_setBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QkSPHJdTEMUI2zWL',
        spanInst,
        'setBody1'
      );
    }
  }

  async sd_BPOygorsH4EvrFsl(bh, parentSpanInst) {
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
      //appendnew_next_sd_BPOygorsH4EvrFsl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BPOygorsH4EvrFsl');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      if (bh.result.payload.id) {
        bh.response = {
          id: bh.result.payload.id,
          reference_number: bh.result.payload.reference_number,
        };
        bh.statusCode = 200;
      } else {
        bh.response = {
          error: 'Something went wrong',
        };
        bh.statusCode = 500;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_UEVLzXJE2YlXlT5z(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LqyNyIlHOgReF6wU',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_UEVLzXJE2YlXlT5z(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UEVLzXJE2YlXlT5z');
    }
  }

  async setBody2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody2', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'quote/summary';

      bh.input.body['query_mode'] = 'ESKA';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EVA5Iex0wOhpvDQX(bh, parentSpanInst);
      //appendnew_next_setBody2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bYnf2KA7v1F4RKDY',
        spanInst,
        'setBody2'
      );
    }
  }

  async sd_EVA5Iex0wOhpvDQX(bh, parentSpanInst) {
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

      bh.local.response = responseMsg;
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_sd_EVA5Iex0wOhpvDQX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EVA5Iex0wOhpvDQX');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.response = bh.local.response.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_k0hNBKby3cfMYDbK(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1qm3H9dKIrq3a5sS',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_k0hNBKby3cfMYDbK(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k0hNBKby3cfMYDbK');
    }
  }

  async setBody3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody3', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'quote/update';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HA0l851LM9hewtZP(bh, parentSpanInst);
      //appendnew_next_setBody3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tqJ3JWHht8JIFJ1f',
        spanInst,
        'setBody3'
      );
    }
  }

  async sd_HA0l851LM9hewtZP(bh, parentSpanInst) {
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

      bh.local.response = responseMsg;
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_sd_HA0l851LM9hewtZP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HA0l851LM9hewtZP');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.response = bh.local.response.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HFxDb67zkSUjYE7F(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VtflZOJFOmohoJ6g',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_HFxDb67zkSUjYE7F(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HFxDb67zkSUjYE7F');
    }
  }

  async setBody4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody4', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'quote/share';
      bh.input.body['query_mode'] = 'ESKA';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8zOleHft3Zrv9F6j(bh, parentSpanInst);
      //appendnew_next_setBody4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PRSFueeoajFwcNW9',
        spanInst,
        'setBody4'
      );
    }
  }

  async sd_8zOleHft3Zrv9F6j(bh, parentSpanInst) {
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

      bh.local.response = responseMsg;
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_sd_8zOleHft3Zrv9F6j
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8zOleHft3Zrv9F6j');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.response = bh.local.response.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_eEOHLjtryINP38VI(bh, parentSpanInst);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fM2Oxe0zvjvZVeN1',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_eEOHLjtryINP38VI(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eEOHLjtryINP38VI');
    }
  }

  async setBody5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody5', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'quote/summary-pdf';
      bh.query_mode = 'CA';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_setBody5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ChAUmKaGeNuxNtht',
        spanInst,
        'setBody5'
      );
    }
  }

  async quoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance: SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow =
        SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          undefined,
          bh.input.body.reference_number,
          bh.query_mode
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pR8Dam7MyWrwp9KO(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fhvwsfln3WrubXqP',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async sd_pR8Dam7MyWrwp9KO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pR8Dam7MyWrwp9KO',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs'); // If writing to a file is necessary

      bh.url = process.env.DOC_MS_URL + 'document/quote/summary/';

      bh.body = {
        quote_summary: bh.quote_summary,
      };

      bh.headers = {
        'Content-Type': 'application/json',
      };

      axios
        .post(bh.url, bh.body, {
          headers: {
            ...bh.headers,
          },
          responseType: 'stream', // Ensure response data is treated as a stream
        })
        .then((resp) => {
          const contentDisposition = resp.headers['content-disposition'];
          const contentType = resp.headers['content-type'];

          // Set response headers
          bh.web.res.setHeader('content-disposition', contentDisposition);
          bh.web.res.setHeader('Content-type', contentType);
          resp.data.pipe(bh.web.res);
        })
        .catch((error) => {
          console.error('Error:', error);
          bh.web.res.status(500).send('Internal Server Error');
        });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_pR8Dam7MyWrwp9KO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pR8Dam7MyWrwp9KO',
        spanInst,
        'sd_pR8Dam7MyWrwp9KO'
      );
    }
  }

  async sd_ecYRjsMc5SzXgQFE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ecYRjsMc5SzXgQFE',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CwgnrXXlfYqNvrEh(bh, parentSpanInst);
      //appendnew_next_sd_ecYRjsMc5SzXgQFE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ecYRjsMc5SzXgQFE',
        spanInst,
        'sd_ecYRjsMc5SzXgQFE'
      );
    }
  }

  async sd_CwgnrXXlfYqNvrEh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CwgnrXXlfYqNvrEh');
    }
  }

  async sd_wYdflNoCUvW1QlZV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wYdflNoCUvW1QlZV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance: SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow =
        SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance.compareQuote(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_KtpTNZWN7kTkXDe2(bh, parentSpanInst);
      //appendnew_next_sd_wYdflNoCUvW1QlZV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wYdflNoCUvW1QlZV',
        spanInst,
        'sd_wYdflNoCUvW1QlZV'
      );
    }
  }

  async sd_KtpTNZWN7kTkXDe2(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KtpTNZWN7kTkXDe2');
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
      (await this.sd_78EdnjFIQg436JM3(bh, parentSpanInst))
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
  async sd_78EdnjFIQg436JM3(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_ecYRjsMc5SzXgQFE', 'sd_CwgnrXXlfYqNvrEh'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_ecYRjsMc5SzXgQFE(bh, parentSpanInst);
    //appendnew_next_sd_78EdnjFIQg436JM3
    return true;
  }
  //appendnew_flow_apis_Catch
}
