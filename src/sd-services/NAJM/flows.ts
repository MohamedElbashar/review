// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4 from '../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH from '../utils/apigee_token_cache'; //_splitter_
//append_imports_end
export class flows {
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
    this.serviceName = 'flows';
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
      instance = new flows(
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
    //appendnew_flow_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flows');
    //appendnew_flow_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: flows');
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async ncd(
    parentSpanInst,
    vehicleIdentifier = '1',
    vehicleId = '',
    policyHolderId = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('ncd', parentSpanInst);
    let bh: any = {
      input: {
        vehicleIdentifier,
        vehicleId,
        policyHolderId,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_ncd
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
        'sd_cURLhwkS71d8RqLB',
        spanInst,
        'ncd'
      );
    }
  }

  async najmSubmitPolicy(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'najmSubmitPolicy',
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
      bh = await this.mapper1(bh, parentSpanInst);
      //appendnew_next_najmSubmitPolicy
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
        'sd_p17F8jmp3Fdmly4M',
        spanInst,
        'najmSubmitPolicy'
      );
    }
  }

  async najmSubmitVehicle(
    parentSpanInst,
    body: any = undefined,
    quote: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'najmSubmitVehicle',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        quote,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapper2(bh, parentSpanInst);
      //appendnew_next_najmSubmitVehicle
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
        'sd_XjJL0eIBTDvO0kBJ',
        spanInst,
        'najmSubmitVehicle'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.input.vehicleIdentifier = bh.input.vehicleIdentifier || '1';
      if (bh.input.vehicleIdentifier != '1') {
        bh.input.vehicleIdentifier = '2';
      }
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/ncd-eligibility/op-ncdeligiblity?vehicleIdentifier=${bh.input.vehicleIdentifier}&vehicleId=${bh.input.vehicleId}&policyHolderId=${bh.input.policyHolderId}`;

      bh.api_key = 'najm-ncd';
      bh.identifier = `${bh.input.policyHolderId}`;
      bh.request = {
        url: bh.url,
      };

      bh.target = process.env.TARGET_OCE;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S1irJnn198LEQens',
        spanInst,
        'setUrl2'
      );
    }
  }

  async apigeeToken0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.njamNcd(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xJdvlXG7kLh5RoQz',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async njamNcd(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: 'bearer',
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_njamNcd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ghIdq5PqyBdaqqEi');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.payload = bh.response['payload'];
      bh.duration = Number(bh.response['requestDuration']);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a01VqfZBZiConVnr(bh, parentSpanInst);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4x5ncAIyIZNyeW54',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_a01VqfZBZiConVnr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a01VqfZBZiConVnr',
      parentSpanInst
    );
    try {
      bh.local.result = {
        ncd: '0',
      };
      let res_string =
        bh.payload?.Envelope?.Body?.Op_NCDEligiblityResponse?.ARTNCIS?.IDOCDATA
          ?.PAYLOAD?.DATA?.NCDEligibilityResponse?.responseData;
      if (res_string) {
        if (res_string.indexOf('<NCDFreeYears>') > 0)
          bh.local.result = {
            ncd:
              res_string.substring(
                res_string.indexOf('<NCDFreeYears>') + 14,
                res_string.indexOf('</NCDFreeYears>')
              ) || '0',
          };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_a01VqfZBZiConVnr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a01VqfZBZiConVnr',
        spanInst,
        'sd_a01VqfZBZiConVnr'
      );
    }
  }

  async apiAudit0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('apiAudit0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance: SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows =
        SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance.logApiAudit(
          spanInst,
          bh.api_key,
          bh.identifier,
          bh.request,
          bh.payload,
          bh.apiStartTime,
          bh.apiEndTime,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_apiAudit0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CVTJ8QxHWtIsPZP9',
        spanInst,
        'apiAudit0'
      );
    }
  }

  async mapper1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mapper1', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL + `/v1/neutrinos/njam-upload/submit-policy`;

      bh.target = process.env.TARGET_OCE;

      bh.api_key = 'njam-upload-submit-policy';
      bh.identifier = `${bh.input.body.insertNewPolicy.insuredID}`;
      bh.request = bh.input.body;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_mapper1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EA9Z7fc02xb8K4fj',
        spanInst,
        'mapper1'
      );
    }
  }

  async apigeeToken1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m75m559qyJPcex9y(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0ni29TnMAvuS9tTG',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async sd_m75m559qyJPcex9y(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.input.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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
      bh = await this.sd_TIQl88Gq79yXZm0h(bh, parentSpanInst);
      //appendnew_next_sd_m75m559qyJPcex9y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m75m559qyJPcex9y');
    }
  }

  async sd_TIQl88Gq79yXZm0h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TIQl88Gq79yXZm0h',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      bh.duration = Number(bh.result['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SzPx0e9TFxwSFnIS(bh, parentSpanInst);
      //appendnew_next_sd_TIQl88Gq79yXZm0h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TIQl88Gq79yXZm0h',
        spanInst,
        'sd_TIQl88Gq79yXZm0h'
      );
    }
  }

  async sd_SzPx0e9TFxwSFnIS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SzPx0e9TFxwSFnIS',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance: SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows =
        SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance.logApiAudit(
          spanInst,
          bh.api_key,
          bh.identifier,
          bh.request,
          bh.local.result,
          undefined,
          undefined,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_SzPx0e9TFxwSFnIS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SzPx0e9TFxwSFnIS',
        spanInst,
        'sd_SzPx0e9TFxwSFnIS'
      );
    }
  }

  async mapper2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mapper2', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL + '/v1/neutrinos/njam-upload/submit-vehicle';

      bh.target = process.env.TARGET_OCE;

      bh.api_key = 'njam-upload-submit-vehicle';
      bh.identifier = `${bh.input.quote.quote_details.id}`;
      bh.request = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken2(bh, parentSpanInst);
      //appendnew_next_mapper2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jl4f4eH6LsorYUah',
        spanInst,
        'mapper2'
      );
    }
  }

  async apigeeToken2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mn901Z1aFBKl1hJl(bh, parentSpanInst);
      //appendnew_next_apigeeToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1eZaZrWNrjl3Iht6',
        spanInst,
        'apigeeToken2'
      );
    }
  }

  async sd_mn901Z1aFBKl1hJl(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.input.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
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
      bh = await this.sd_fl2xiy4fPBwP6W8v(bh, parentSpanInst);
      //appendnew_next_sd_mn901Z1aFBKl1hJl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mn901Z1aFBKl1hJl');
    }
  }

  async sd_fl2xiy4fPBwP6W8v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fl2xiy4fPBwP6W8v',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result?.payload;
      bh.duration = Number(bh.result['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SzPx0e9TFxwSFnIS(bh, parentSpanInst);
      //appendnew_next_sd_fl2xiy4fPBwP6W8v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fl2xiy4fPBwP6W8v',
        spanInst,
        'sd_fl2xiy4fPBwP6W8v'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = {
        ncd: '0',
      };
      bh.payload = bh.error?.response?.body;
      bh.duration = Number(bh.error['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K6iZFIIDZiWyVBzY',
        spanInst,
        'setResponse1'
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
      (await this.sd_hudgUXI6DMMfNfp2(bh, parentSpanInst))
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
  async sd_hudgUXI6DMMfNfp2(bh, parentSpanInst) {
    const nodes = ['sd_ghIdq5PqyBdaqqEi'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_sd_hudgUXI6DMMfNfp2
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
