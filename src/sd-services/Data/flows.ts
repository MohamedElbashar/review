// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
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

  async createPolicyAudit(
    parentSpanInst,
    body: any = undefined,
    id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createPolicyAudit',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        id,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_createPolicyAudit
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ONXmFtKxQFUbVB9C',
        spanInst,
        'createPolicyAudit'
      );
    }
  }

  async updatePolicyAudit(
    parentSpanInst,
    body: any = undefined,
    id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updatePolicyAudit',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        id,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_updatePolicyAudit
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ADGl2OGDQDF9Pcvj',
        spanInst,
        'updatePolicyAudit'
      );
    }
  }

  async getPolicyAudit(
    parentSpanInst,
    body: any = undefined,
    id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyAudit',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        id,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_getPolicyAudit
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LIxMEhSP5mzSVXhp',
        spanInst,
        'getPolicyAudit'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/policy_audit/create';
      log.info(
        `[QUOTE_ID::${bh.input.id}][PRODUCT_ID::${bh.input.body?.policy_audit?.product_id}][POLICY_AUDIT_CREATE][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpCreatePolicyAudit(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hiqLWdOw4yDSyUuK',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpCreatePolicyAudit(bh, parentSpanInst) {
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
      //appendnew_next_httpCreatePolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NG9z448B1mSOsEfn');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.response = bh.result.payload;

      log.info(
        `[QUOTE_ID::${bh.input.id}][PRODUCT_ID::${bh.input.body?.policy_audit?.product_id}][POLICY_AUDIT_CREATE][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G4mH5MAT4SrLNOpA',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/policy_audit/update-all';
      log.info(
        `[QUOTE_ID::${bh.input.id}][PRODUCT_ID::${bh.input.body?.filter?.product_id}][POLICY_AUDIT_UPDATE][START]`
      );
      bh.status = false;
      if (
        bh.input.body?.filter?.quote_id &&
        bh.input.body?.filter?.product_id
      ) {
        bh.status = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FhnuHd4am5llyvEz(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ULrs6x4xQDTN66f',
        spanInst,
        'setUrl2'
      );
    }
  }

  async sd_FhnuHd4am5llyvEz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FhnuHd4am5llyvEz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.httpUpdatePolicyAudit(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FhnuHd4am5llyvEz',
        spanInst,
        'sd_FhnuHd4am5llyvEz'
      );
    }
  }

  async httpUpdatePolicyAudit(bh, parentSpanInst) {
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
      //appendnew_next_httpUpdatePolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JI14VIEoDyFaFbAv');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.response = bh.result.payload;
      log.info(
        `[QUOTE_ID::${bh.input.id}][PRODUCT_ID::${bh.input.body?.filter?.product_id}][POLICY_AUDIT_UPDATE][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IQz8gk2lK7sEeZXo',
        spanInst,
        'setResponse2'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/policy_audit/find-by-id';

      bh.body = {
        filter: bh.input.body,
      };

      log.info(
        `[QUOTE_ID::${bh.input.id}][PRODUCT_ID::${
          bh.input.body?.product_id
        }][POLICY_AUDIT_FETCH_BY_ID][BODY::${JSON.stringify(bh.body)}][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetPolicyAudit(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VB49ZM2tzXYR2hfo',
        spanInst,
        'setUrl3'
      );
    }
  }

  async httpGetPolicyAudit(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
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
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_httpGetPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yAotZRt17Z6txnIv');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.local.response = bh.result?.payload;

      log.info(
        `[QUOTE_ID::${bh.input.id}][PRODUCT_ID::${bh.input.body?.product_id}][POLICY_AUDIT_FETCH_BY_ID][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5zh1rDs7wYvYrBUp',
        spanInst,
        'setResponse3'
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
  //appendnew_flow_flows_Catch
}
