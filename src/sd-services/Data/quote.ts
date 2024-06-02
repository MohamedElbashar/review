// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class quote {
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
    this.serviceName = 'quote';
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
      instance = new quote(
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
    //appendnew_flow_quote_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: quote');
    //appendnew_flow_quote_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: quote');
    //appendnew_flow_quote_HttpIn
  }
  //   service flows_quote

  async getQuoteSummary(
    parentSpanInst,
    quote_id: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteSummary',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
        product_id,
      },
      local: {
        quote_summary: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareRequest0(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary
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
        'sd_CpZ21H0pzSGptpWJ',
        spanInst,
        'getQuoteSummary'
      );
    }
  }

  async getQuote(parentSpanInst, reference_number = '', id = 0, ...others) {
    const spanInst = this.tracerService.createSpan('getQuote', parentSpanInst);
    let bh: any = {
      input: {
        reference_number,
        id,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_getQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0Bwn3ArYVt03U4HE',
        spanInst,
        'getQuote'
      );
    }
  }

  async patchQuote(
    parentSpanInst,
    body: any = undefined,
    id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'patchQuote',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        id,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl5(bh, parentSpanInst);
      //appendnew_next_patchQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GTj5gHiHIuX7rfaW',
        spanInst,
        'patchQuote'
      );
    }
  }

  async getAndUpdateQuote(
    parentSpanInst,
    quote_id: any = undefined,
    update_object: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getAndUpdateQuote',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
        update_object,
        product_id,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quote(bh, parentSpanInst);
      //appendnew_next_getAndUpdateQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FXvkXQqpYfi7iP79',
        spanInst,
        'getAndUpdateQuote'
      );
    }
  }
  //appendnew_flow_quote_start

  async prepareRequest0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest0',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + '/quote/summary';
      bh.body = {
        id: bh.input.quote_id,
        query_mode: 'ESKA',
      };
      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][GET_QUOTE_SUMMARY][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_prepareRequest0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Usvq8QU99z1KeRkN',
        spanInst,
        'prepareRequest0'
      );
    }
  }

  async quoteSummary(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.mapResponse(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V76TWjgyTVv9OQEi');
    }
  }

  async mapResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mapResponse',
      parentSpanInst
    );
    try {
      bh.local.quote_summary = bh.result.payload;
      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][GET_QUOTE_SUMMARY][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_mapResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wdA2CgGBymlfywAf',
        spanInst,
        'mapResponse'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/quote/find-by-id';
      bh.body = {
        filter: {
          reference_number: bh.input.reference_number || undefined,
          id: bh.input.id || undefined,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetQuote(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ll9k4MAdIhgLGPvf',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpGetQuote(bh, parentSpanInst) {
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
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_httpGetQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e0nuNjJG0MHzc9zi');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.data = bh.response.payload;
      if (bh.local.data?.addl_details) {
        bh.local.data.addl_details = JSON.parse(bh.local.data.addl_details);
      }
      if (bh.local.data?.premium_details) {
        bh.local.data.premium_details = JSON.parse(
          bh.local.data.premium_details
        );
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ns0jQK1qUxh4zITS',
        spanInst,
        'setResponse4'
      );
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/quote/update-all';

      bh.body = {
        filter: {
          id: bh.input.id,
        },
        quote: {
          updated_date: new Date().toISOString(),
          addl_details: bh.input.body,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpPatchQuote(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UzxedX5i7U8A7uLq',
        spanInst,
        'setUrl5'
      );
    }
  }

  async httpPatchQuote(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_httpPatchQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2bVAKYcqtZ1789ha');
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
      parentSpanInst
    );
    try {
      bh.local.status = bh.result.payload?.affected > 0;
      if (!bh.local.status) {
        bh.local.error = bh.result.payload;
      }

      log.info(`[QUOTE_ID::${bh.input.id}][QUOTE_UPDATED]`);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8c1JJcory6hfwISp',
        spanInst,
        'setResponse5'
      );
    }
  }

  async quote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('quote', parentSpanInst);
    try {
      let outputVariables = await this.getQuote(
        spanInst,
        undefined,
        bh.input.quote_id
      );
      bh.quote_summary = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_umVIm4yUvGtFc2ia(bh, parentSpanInst);
      //appendnew_next_quote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1zuAfoa0ZiLIgugU',
        spanInst,
        'quote'
      );
    }
  }

  async sd_umVIm4yUvGtFc2ia(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_umVIm4yUvGtFc2ia',
      parentSpanInst
    );
    try {
      if (!bh.quote_summary?.addl_details?.eska_wrapper_service_result) {
        bh.quote_summary.addl_details.eska_wrapper_service_result = {};
      }
      bh.quote_summary.addl_details.eska_wrapper_service_result[
        bh.input.product_id
      ] = {
        ...bh.quote_summary?.addl_details?.eska_wrapper_service_result[
          bh.input.product_id
        ],
        ...bh.input.update_object?.ESKAWrapperServiceResult,
      };

      bh.body = {
        id: bh.input.quote_id,
        data: JSON.stringify(bh.quote_summary?.addl_details),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateQuote1(bh, parentSpanInst);
      //appendnew_next_sd_umVIm4yUvGtFc2ia
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_umVIm4yUvGtFc2ia',
        spanInst,
        'sd_umVIm4yUvGtFc2ia'
      );
    }
  }

  async updateQuote1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateQuote1',
      parentSpanInst
    );
    try {
      let outputVariables = await this.patchQuote(
        spanInst,
        bh.body.data,
        bh.body.id
      );
      bh.result = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updateQuote1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5JA7CdEoGiY0U76Y',
        spanInst,
        'updateQuote1'
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
  //appendnew_flow_quote_Catch
}
