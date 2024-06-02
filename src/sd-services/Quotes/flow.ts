// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class flow {
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
    this.serviceName = 'flow';
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
      instance = new flow(
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
    //appendnew_flow_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flow');
    //appendnew_flow_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: flow');
    //appendnew_flow_flow_HttpIn
  }
  //   service flows_flow

  async getQuotesSummary(
    parentSpanInst,
    user_id = '',
    tenant_id = 0,
    id: any = undefined,
    reference_number: any = undefined,
    query_mode: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getQuotesSummary',
      parentSpanInst
    );
    let bh: any = {
      input: {
        user_id,
        tenant_id,
        id,
        reference_number,
        query_mode,
      },
      local: {
        quote_summary: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl6(bh, parentSpanInst);
      //appendnew_next_getQuotesSummary
      return (
        // formatting output variables
        {
          input: {},
          local: {
            quote_summary: bh.local.quote_summary,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uSS4AAXTFTCt3zKQ',
        spanInst,
        'getQuotesSummary'
      );
    }
  }

  async getMakeImage(parentSpanInst, eska_make = 0, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMakeImage',
      parentSpanInst
    );
    let bh: any = {
      input: {
        eska_make,
      },
      local: {
        image_url: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_getMakeImage
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
        'sd_V0NyA6pRwG6oflQE',
        spanInst,
        'getMakeImage'
      );
    }
  }

  async compareQuote(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'compareQuote',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_compareQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pCf5se9X9hyVhjl9',
        spanInst,
        'compareQuote'
      );
    }
  }
  //appendnew_flow_flow_start

  async setUrl6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl6', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'quote/summary';
      bh.body = {
        reference_number: bh.input.reference_number || undefined,
        id: bh.input.id || undefined,
        user_id: bh.input.user_id || undefined,
        tenant_id: bh.input.tenant_id || undefined,
        query_mode: bh.input.query_mode || undefined,
      };

      console.log(bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetQuoteSummary(bh, parentSpanInst);
      //appendnew_next_setUrl6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D7Vjy6HfmMS0QT5D',
        spanInst,
        'setUrl6'
      );
    }
  }

  async httpGetQuoteSummary(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
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
      bh = await this.setResponse7(bh, parentSpanInst);
      //appendnew_next_httpGetQuoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ZlZ1pAjr6mb6kwD');
    }
  }

  async setResponse7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse7',
      parentSpanInst
    );
    try {
      bh.local.quote_summary = bh.response.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n5qCyDQpL6S7YDFh',
        spanInst,
        'setResponse7'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url =
        process.env.INT_MS_URL + 'strapi/vehicle-image/' + bh.input.eska_make;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xVQXbq82R6skD5XH(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0K90M3GBvBzU30X6',
        spanInst,
        'setUrl3'
      );
    }
  }

  async sd_xVQXbq82R6skD5XH(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
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

      bh.response = responseMsg;
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_sd_xVQXbq82R6skD5XH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xVQXbq82R6skD5XH');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.payload = bh.response['payload'];
      bh.local.image_url = bh.payload?.image_url;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TQLFdEP5NB0K756T',
        spanInst,
        'setResponse3'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'renewal/compare/quote';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpCompareQuote(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1akeBofrlIqm8Wr1',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpCompareQuote(bh, parentSpanInst) {
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
      //appendnew_next_httpCompareQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_clfVEfYMXl4Rfdq8');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uLvfVJmYHb2dzteA',
        spanInst,
        'setResponse4'
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
  //appendnew_flow_flow_Catch
}
