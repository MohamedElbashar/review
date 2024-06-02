// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_oosteofbzjBUi1hB from '../customer/customer_apis'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN from '../utils/lob_cache'; //_splitter_
//append_imports_end
export class data_flows {
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
    this.serviceName = 'data_flows';
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
      instance = new data_flows(
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
    //appendnew_flow_data_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: data_flows');
    //appendnew_flow_data_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: data_flows');
    //appendnew_flow_data_flows_HttpIn
  }
  //   service flows_data_flows

  async getQuote(parentSpanInst, old_policy_id = '', ...others) {
    const spanInst = this.tracerService.createSpan('getQuote', parentSpanInst);
    let bh: any = {
      input: {
        old_policy_id,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
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
        'sd_EGtJtbKDh36TqJxm',
        spanInst,
        'getQuote'
      );
    }
  }

  async getPolicyData(
    parentSpanInst,
    policy_id = '',
    id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
        id_no,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_getPolicyData
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
        'sd_y5VqPt3o43zJ0A5Z',
        spanInst,
        'getPolicyData'
      );
    }
  }

  async getSubjects(parentSpanInst, policy_id = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getSubjects',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_getSubjects
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
        'sd_JbhLSYFwYLmTLCvp',
        spanInst,
        'getSubjects'
      );
    }
  }

  async getAddOns(parentSpanInst, policy_id = '', ...others) {
    const spanInst = this.tracerService.createSpan('getAddOns', parentSpanInst);
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_getAddOns
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
        'sd_vqh33zuWAPji7lgT',
        spanInst,
        'getAddOns'
      );
    }
  }

  async getDrivers(parentSpanInst, policy_id = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getDrivers',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl5(bh, parentSpanInst);
      //appendnew_next_getDrivers
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
        'sd_wUKcysVrz5kToIGX',
        spanInst,
        'getDrivers'
      );
    }
  }

  async createQuote(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createQuote',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody1(bh, parentSpanInst);
      //appendnew_next_createQuote
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
        'sd_Nec9zguBYdjjYMXg',
        spanInst,
        'createQuote'
      );
    }
  }

  async getCustomer(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getCustomer',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        customer_info: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.customerInfoCall(bh, parentSpanInst);
      //appendnew_next_getCustomer
      return (
        // formatting output variables
        {
          input: {},
          local: {
            customer_info: bh.local.customer_info,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XCbX9evqhpEPgWQj',
        spanInst,
        'getCustomer'
      );
    }
  }
  //appendnew_flow_data_flows_start

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/quote/find-all';
      bh.body = {
        filter: {
          old_policy_id: String(bh.input.old_policy_id),
        },
      };

      log.info(
        `[POLICY_ID::${
          bh.input.old_policy_id
        }][GET_QUOTES_FOR_RENEWAL_DUPLICATE_CHECK][REQUEST_BODY}[${JSON.stringify(
          bh.body
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetQuote(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dmBnLTTmnw9TgtOc',
        spanInst,
        'setUrl1'
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
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_httpGetQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CplqJtzV8Nw846VX');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.data = bh.response.payload;

      log.info(
        `[POLICY_ID::${bh.input.old_policy_id}][GET_QUOTES_FOR_RENEWAL_DUPLICATE_CHECK][SUCCESS]`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p2AmRO1KswYhvWox',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'policy/data';
      bh.body = {
        policy_id: bh.input.policy_id || undefined,
        id_no: bh.input.id_no || undefined,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetPolicyData(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a2cdftOjOgBLPHPe',
        spanInst,
        'setUrl2'
      );
    }
  }

  async httpGetPolicyData(bh, parentSpanInst) {
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
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_httpGetPolicyData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KiSwF53tt70tGPQs');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.data = bh.response.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gYLydPp9VuFqg7am',
        spanInst,
        'setResponse2'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'policy/subjects';
      bh.body = {
        policy_id: bh.input.policy_id || undefined,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetSubjects(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qa8EekLwIb9D21AE',
        spanInst,
        'setUrl3'
      );
    }
  }

  async httpGetSubjects(bh, parentSpanInst) {
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
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_httpGetSubjects
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NxUoo5HRHrrYg2A6');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.local.data = bh.response.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_As0w7GBosxjmpbkA',
        spanInst,
        'setResponse3'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'policy/covers';
      bh.body = {
        policy_id: bh.input.policy_id || undefined,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetOns(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gMLNkcguAU5DrG6p',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpGetOns(bh, parentSpanInst) {
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
      //appendnew_next_httpGetOns
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kTPdQps191wsGJ1T');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.data = bh.response.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_twWyotmD2XhXwxA7',
        spanInst,
        'setResponse4'
      );
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'policy/driver';
      bh.body = {
        policy_id: bh.input.policy_id || undefined,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetDrivers(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PtXrHO7gZjDmR6T8',
        spanInst,
        'setUrl5'
      );
    }
  }

  async httpGetDrivers(bh, parentSpanInst) {
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
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_httpGetDrivers
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WYkm6qc9iUDSpdNv');
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
      parentSpanInst
    );
    try {
      bh.local.data = bh.response.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PXeSpB18SMM5ZXJP',
        spanInst,
        'setResponse5'
      );
    }
  }

  async setBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody1', parentSpanInst);
    try {
      bh.user_id = bh.input.body?.user_id;
      bh.tenant_id = bh.input.body?.tenant_id;
      bh.lang = bh?.web?.req?.lng || 'en';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.lobList(bh, parentSpanInst);
      //appendnew_next_setBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xzuquurUvN8wHy4x',
        spanInst,
        'setBody1'
      );
    }
  }

  async lobList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('lobList', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQNInstance: SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN.lob_cache =
        SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN.lob_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQNInstance.lobList(spanInst);
      bh.lob = outputVariables.local.lob;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRef(bh, parentSpanInst);
      //appendnew_next_lobList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T1HJp4CGCWK4M4vn',
        spanInst,
        'lobList'
      );
    }
  }

  async getRef(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getRef', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getRefNo(spanInst);
      bh.reference_number = outputVariables.local.reference_number;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody2(bh, parentSpanInst);
      //appendnew_next_getRef
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HLJfo1s6Qqkz8bcx',
        spanInst,
        'getRef'
      );
    }
  }

  async setBody2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody2', parentSpanInst);
    try {
      let lob = bh.lob.find((item) => item.id === bh.input.body.lob_id);
      bh.reference_number =
        'ART-' + lob.code.substring(1, 0) + 'R-' + bh.reference_number;
      let eska_details = bh.input.body.eska_details || {};
      let business_channel = bh.input.body.business_channel || '602402';
      let agent_type = bh.input.body.agent_type || '1';
      let branch_id = bh.input.body.branch_id || '121';
      let region_id = bh.input.body.region_id || '';

      bh.quote = {
        quote: {
          reference_number: bh.reference_number,
          id_type: bh.input.body.id_type,
          id_no: bh.input.body.id_no,
          lob_id: bh.input.body.lob_id,
          customer_type_id: bh.input.body.customer_type_id,
          status_id: 1,
          tenant_id: bh.tenant_id,
          first_name: bh.input.body.first_name,
          last_name: bh.input.body.last_name,
          company_name: bh.input.body.company_name || '',
          phone_country_code: bh.input.body.phone_country_code,
          phone_no: bh.input.body.phone_no,
          email_id: bh.input.body.email_id,
          created_by: bh.user_id,
          updated_by: bh.user_id,
          owned_by: bh.user_id,
          addl_details: JSON.stringify(bh.input.body.addl_details),
          eska_details: JSON.stringify(eska_details),
          branch_id: Number(branch_id),
          region_id: Number(region_id),
          agent_type: agent_type,
          business_channel: business_channel,
          is_renewal: bh.input.body?.is_renewal,
          old_policy_id: String(bh.input.body?.old_policy_id),
          old_policy_number: String(bh.input.body?.old_policy_number),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.upsertQuote0(bh, parentSpanInst);
      //appendnew_next_setBody2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R1UhL6ddPPj9OW4O',
        spanInst,
        'setBody2'
      );
    }
  }

  async upsertQuote0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'upsertQuote0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.upsert(
          spanInst,
          bh.quote
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse6(bh, parentSpanInst);
      //appendnew_next_upsertQuote0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LrddBMd0AhzfOUjO',
        spanInst,
        'upsertQuote0'
      );
    }
  }

  async setResponse6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse6',
      parentSpanInst
    );
    try {
      if (bh.result.id) {
        bh.response = {
          id: bh.result.id,
          reference_number: bh.result.reference_number,
        };
      } else {
        bh.response = {
          error: 'Something went wrong',
        };
      }

      bh.local.response = bh.response;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1I1vgjtz3QmixlgE',
        spanInst,
        'setResponse6'
      );
    }
  }

  async customerInfoCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'customerInfoCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_oosteofbzjBUi1hBInstance: SSD_SERVICE_ID_sd_oosteofbzjBUi1hB.customer_apis =
        SSD_SERVICE_ID_sd_oosteofbzjBUi1hB.customer_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_oosteofbzjBUi1hBInstance.customerDetails(
          spanInst,
          bh.input.body
        );
      bh.local.customer_info = outputVariables.local.customer_info;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_customerInfoCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZqJSkHcaohmJc6La',
        spanInst,
        'customerInfoCall'
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
  //appendnew_flow_data_flows_Catch
}
