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
export class eska_apis {
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
    this.serviceName = 'eska_apis';
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
      instance = new eska_apis(
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
    //appendnew_flow_eska_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: eska_apis');
    //appendnew_flow_eska_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: eska_apis');
    //appendnew_flow_eska_apis_HttpIn
  }
  //   service flows_eska_apis

  async createPolicy(
    parentSpanInst,
    body: any = undefined,
    quote_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createPolicy',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        quote_id,
      },
      local: {
        payload: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lZHJOQ5xVizFPvWU(bh, parentSpanInst);
      //appendnew_next_createPolicy
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UcZgHRZjSHZFEkki',
        spanInst,
        'createPolicy'
      );
    }
  }

  async updateNajmOriginStatus(
    parentSpanInst,
    body: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmOriginStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dix9uXjeN9jLIUPq(bh, parentSpanInst);
      //appendnew_next_updateNajmOriginStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MvaeTInk4oOZMC22',
        spanInst,
        'updateNajmOriginStatus'
      );
    }
  }

  async updateNajmStatus(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BdElidDEnu487R3H(bh, parentSpanInst);
      //appendnew_next_updateNajmStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ObHTQevM7DsRj3wb',
        spanInst,
        'updateNajmStatus'
      );
    }
  }

  async updateNajmSequenceNo(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmSequenceNo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BkxWRRjfl2v6yapA(bh, parentSpanInst);
      //appendnew_next_updateNajmSequenceNo
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UdSKDKQyIw3eRC6S',
        spanInst,
        'updateNajmSequenceNo'
      );
    }
  }

  async insertNajmGovMotor(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'insertNajmGovMotor',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ajUya8tWpffPtnfi(bh, parentSpanInst);
      //appendnew_next_insertNajmGovMotor
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U5bQUkl6zRdcQSzj',
        spanInst,
        'insertNajmGovMotor'
      );
    }
  }

  async generateReport(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generateReport',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5rVB1416vPgWNkm5(bh, parentSpanInst);
      //appendnew_next_generateReport
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D7vXqcs9Q3w6KJgK',
        spanInst,
        'generateReport'
      );
    }
  }

  async policySearch(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'policySearch',
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
      bh = await this.sd_r8F66JWTVr5lakh0(bh, parentSpanInst);
      //appendnew_next_policySearch
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
        'sd_pe2cR8Kb0vCCvvBv',
        spanInst,
        'policySearch'
      );
    }
  }

  async getBrokerAgentInfo(
    parentSpanInst,
    id: any = undefined,
    segment_code: any = undefined,
    policy: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getBrokerAgentInfo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
        segment_code,
        policy,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mf8n8G7CCTYaSEAR(bh, parentSpanInst);
      //appendnew_next_getBrokerAgentInfo
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
        'sd_kHGOwvgpCmI466wG',
        spanInst,
        'getBrokerAgentInfo'
      );
    }
  }

  async findUserById(parentSpanInst, user_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'findUserById',
      parentSpanInst
    );
    let bh: any = {
      input: {
        user_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PkznCS5g0HIr8XVR(bh, parentSpanInst);
      //appendnew_next_findUserById
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
        'sd_JiHwj0Mxn8LvIdGN',
        spanInst,
        'findUserById'
      );
    }
  }

  async loadPolicy(parentSpanInst, policy_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'loadPolicy',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KcAWX3kWibZRwUii(bh, parentSpanInst);
      //appendnew_next_loadPolicy
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WE0Pb5AnLJn2z62G',
        spanInst,
        'loadPolicy'
      );
    }
  }

  async sendTransactionDetails(
    parentSpanInst,
    body: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sendTransactionDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_okPJYou72L8T4Xbr(bh, parentSpanInst);
      //appendnew_next_sendTransactionDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C2nsBzI3RMHcgyAS',
        spanInst,
        'sendTransactionDetails'
      );
    }
  }
  //appendnew_flow_eska_apis_start

  async sd_lZHJOQ5xVizFPvWU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lZHJOQ5xVizFPvWU',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_sd_lZHJOQ5xVizFPvWU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lZHJOQ5xVizFPvWU',
        spanInst,
        'sd_lZHJOQ5xVizFPvWU'
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
      bh = await this.prepareRequest1(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JbBgHzB8t2DlrspV',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async prepareRequest1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest1',
      parentSpanInst
    );
    try {
      bh.url = process.env.APIGEE_OCI_URL + `/v1/neutrinos/eska/eska-wrapper`;
      bh.api_key = 'eska-wrapper';
      bh.identifier = `${bh.input.quote_id}`;
      bh.request = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpCreatePolicy(bh, parentSpanInst);
      //appendnew_next_prepareRequest1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v0wTw0wKkKEo4HMP',
        spanInst,
        'prepareRequest1'
      );
    }
  }

  async httpCreatePolicy(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
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

      bh.payload = responseMsg;
      bh = await this.responseBody1(bh, parentSpanInst);
      //appendnew_next_httpCreatePolicy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gE3oq9DfQIOa1aBj');
    }
  }

  async responseBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody1',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload;
      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst);
      //appendnew_next_responseBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ta6oMAASQrDg2cm1',
        spanInst,
        'responseBody1'
      );
    }
  }

  async sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VZ03pJgqIAoIbGYo',
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
          bh.local.payload,
          undefined,
          undefined,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_VZ03pJgqIAoIbGYo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VZ03pJgqIAoIbGYo',
        spanInst,
        'sd_VZ03pJgqIAoIbGYo'
      );
    }
  }

  async sd_dix9uXjeN9jLIUPq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dix9uXjeN9jLIUPq',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken2(bh, parentSpanInst);
      //appendnew_next_sd_dix9uXjeN9jLIUPq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dix9uXjeN9jLIUPq',
        spanInst,
        'sd_dix9uXjeN9jLIUPq'
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
      bh = await this.prepareRequest2(bh, parentSpanInst);
      //appendnew_next_apigeeToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MdIkUH8qrcNDugnZ',
        spanInst,
        'apigeeToken2'
      );
    }
  }

  async prepareRequest2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest2',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/ap-najm-status-neutrinos/update-najm-origin-status?DocumantId=105335&PolicyGovId=927045&VehicleGovId=123456&PolicyStatus=14&PolicyStatusDiscreption=TEST1&VehicleStatus=14&VehicleStatusDiscreption=TEST2`;
      bh.api_key = 'update-najm-origin-status';
      bh.identifier = `${bh.input.body.quote_details.id}`;
      bh.request = {
        url: bh.url,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CtGtto0Mmqxk9EFl(bh, parentSpanInst);
      //appendnew_next_prepareRequest2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9NWeo1v80XzIXdH0',
        spanInst,
        'prepareRequest2'
      );
    }
  }

  async sd_CtGtto0Mmqxk9EFl(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.payload = responseMsg;
      bh = await this.responseBody2(bh, parentSpanInst);
      //appendnew_next_sd_CtGtto0Mmqxk9EFl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CtGtto0Mmqxk9EFl');
    }
  }

  async responseBody2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody2',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload;
      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst);
      //appendnew_next_responseBody2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gDbVA68aKMdFkMzG',
        spanInst,
        'responseBody2'
      );
    }
  }

  async sd_BdElidDEnu487R3H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BdElidDEnu487R3H',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken3(bh, parentSpanInst);
      //appendnew_next_sd_BdElidDEnu487R3H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BdElidDEnu487R3H',
        spanInst,
        'sd_BdElidDEnu487R3H'
      );
    }
  }

  async apigeeToken3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken3',
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
      bh = await this.prepareRequest3(bh, parentSpanInst);
      //appendnew_next_apigeeToken3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nsOdwl9CiauofJ46',
        spanInst,
        'apigeeToken3'
      );
    }
  }

  async prepareRequest3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest3',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/ap-najm-status-neutrinos/update-najm-status?DocumantId=105335&SubjectSerial=205&GovId=927045&Status=6&StatusDiscreption=TEST&RecordType=2&NAJMRequest=TEST&NAJMResponse=TEST`;
      bh.api_key = 'update-najm-status';
      bh.identifier = `${bh.input.body.quote_details.id}`;
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4Stl9tqGOqlHXVzL(bh, parentSpanInst);
      //appendnew_next_prepareRequest3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wOJ2hoT04HVod2RL',
        spanInst,
        'prepareRequest3'
      );
    }
  }

  async sd_4Stl9tqGOqlHXVzL(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.payload = responseMsg;
      bh = await this.responseBody3(bh, parentSpanInst);
      //appendnew_next_sd_4Stl9tqGOqlHXVzL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4Stl9tqGOqlHXVzL');
    }
  }

  async responseBody3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody3',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload;
      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst);
      //appendnew_next_responseBody3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fzu8f0hVxDKsbFyE',
        spanInst,
        'responseBody3'
      );
    }
  }

  async sd_BkxWRRjfl2v6yapA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BkxWRRjfl2v6yapA',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken4(bh, parentSpanInst);
      //appendnew_next_sd_BkxWRRjfl2v6yapA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BkxWRRjfl2v6yapA',
        spanInst,
        'sd_BkxWRRjfl2v6yapA'
      );
    }
  }

  async apigeeToken4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken4',
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
      bh = await this.prepareRequest4(bh, parentSpanInst);
      //appendnew_next_apigeeToken4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OtHIXYDC0TYojqJf',
        spanInst,
        'apigeeToken4'
      );
    }
  }

  async prepareRequest4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest4',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/ap-najm-status-neutrinos/update-najm-sequence-no?DocumantId=105335&SubjectSerial=205&SequenceNumber=123456&PlateLetter1=ا&PlateLetter2=ح&PlateLetter3=س&PlateNumber=1285`;

      bh.api_key = 'update-najm-seq';
      bh.identifier = `${bh.input.body.quote_details.id}`;
      bh.request = {
        url: bh.url,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5E5ujyNP1jaUaPEH(bh, parentSpanInst);
      //appendnew_next_prepareRequest4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P5cm86CwHD0sfGV4',
        spanInst,
        'prepareRequest4'
      );
    }
  }

  async sd_5E5ujyNP1jaUaPEH(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.payload = responseMsg;
      bh = await this.responseBody4(bh, parentSpanInst);
      //appendnew_next_sd_5E5ujyNP1jaUaPEH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5E5ujyNP1jaUaPEH');
    }
  }

  async responseBody4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody4',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload;

      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst);
      //appendnew_next_responseBody4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A9WZDuYSrJY4Al0c',
        spanInst,
        'responseBody4'
      );
    }
  }

  async sd_ajUya8tWpffPtnfi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ajUya8tWpffPtnfi',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken5(bh, parentSpanInst);
      //appendnew_next_sd_ajUya8tWpffPtnfi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ajUya8tWpffPtnfi',
        spanInst,
        'sd_ajUya8tWpffPtnfi'
      );
    }
  }

  async apigeeToken5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken5',
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
      bh = await this.prepareRequest5(bh, parentSpanInst);
      //appendnew_next_apigeeToken5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_36K3rNVbRa73nIxS',
        spanInst,
        'apigeeToken5'
      );
    }
  }

  async prepareRequest5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest5',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/ap-najm-status-neutrinos/insert-najm-gov-motor?DocumantId=105335&SubjectSerial=205&Status=14&StatusDiscreption=TEST INSERT&NAJMRequest=TEST&NAJMResponse=TEST`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G9v1szWQh8EvBH2J(bh, parentSpanInst);
      //appendnew_next_prepareRequest5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8kU7YdAu1ZHgeNHa',
        spanInst,
        'prepareRequest5'
      );
    }
  }

  async sd_G9v1szWQh8EvBH2J(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.payload = responseMsg;
      bh = await this.responseBody5(bh, parentSpanInst);
      //appendnew_next_sd_G9v1szWQh8EvBH2J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G9v1szWQh8EvBH2J');
    }
  }

  async responseBody5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody5',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_responseBody5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cL86FMBF13aiRQ5F',
        spanInst,
        'responseBody5'
      );
    }
  }

  async sd_5rVB1416vPgWNkm5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5rVB1416vPgWNkm5',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken6(bh, parentSpanInst);
      //appendnew_next_sd_5rVB1416vPgWNkm5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5rVB1416vPgWNkm5',
        spanInst,
        'sd_5rVB1416vPgWNkm5'
      );
    }
  }

  async apigeeToken6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken6',
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
      bh = await this.prepareRequest6(bh, parentSpanInst);
      //appendnew_next_apigeeToken6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZMfgX19lfMOT189S',
        spanInst,
        'apigeeToken6'
      );
    }
  }

  async prepareRequest6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest6',
      parentSpanInst
    );
    try {
      bh.url = process.env.APIGEE_OCI_URL + `/v1/neutrinos/generate-report`;

      bh.api_key = 'eska-generate-report';
      bh.identifier = `${bh.input.body.GenerateReport.oGenerateReportInput.oReportParameters.ReportParameter.FromValue}`; // Policy ID
      bh.request = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qvdBhYUlvwiV4Zag(bh, parentSpanInst);
      //appendnew_next_prepareRequest6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XA7HGVOC2b6Keidp',
        spanInst,
        'prepareRequest6'
      );
    }
  }

  async sd_qvdBhYUlvwiV4Zag(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
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

      bh.payload = responseMsg;
      bh = await this.responseBody6(bh, parentSpanInst);
      //appendnew_next_sd_qvdBhYUlvwiV4Zag
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qvdBhYUlvwiV4Zag');
    }
  }

  async responseBody6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody6',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload;
      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst);
      //appendnew_next_responseBody6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n4mAY3iBH4qS0nC6',
        spanInst,
        'responseBody6'
      );
    }
  }

  async sd_r8F66JWTVr5lakh0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r8F66JWTVr5lakh0',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken7(bh, parentSpanInst);
      //appendnew_next_sd_r8F66JWTVr5lakh0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r8F66JWTVr5lakh0',
        spanInst,
        'sd_r8F66JWTVr5lakh0'
      );
    }
  }

  async apigeeToken7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken7',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeToken(spanInst);
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareRequest7(bh, parentSpanInst);
      //appendnew_next_apigeeToken7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0N8KehJOQnB29DmT',
        spanInst,
        'apigeeToken7'
      );
    }
  }

  async prepareRequest7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest7',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/v1/neutrinos/eska/search-customer-policy`;
      bh.params = bh.input.body;
      // bh.token = bh.res_arr[0].local.apigee_token
      // bh.userInfo = bh.res_arr[1].local.result

      bh.api_key = 'eska-search-customer-policy';
      bh.identifier = `${bh.input.body.policyNo}`;
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yZnJ56qPyJsBwepT(bh, parentSpanInst);
      //appendnew_next_prepareRequest7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YZnffS4NyAXWv68Z',
        spanInst,
        'prepareRequest7'
      );
    }
  }

  async sd_yZnJ56qPyJsBwepT(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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
        params: bh.params,
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

      bh.res = responseMsg;
      bh = await this.responseBody7(bh, parentSpanInst);
      //appendnew_next_sd_yZnJ56qPyJsBwepT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yZnJ56qPyJsBwepT');
    }
  }

  async responseBody7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody7',
      parentSpanInst
    );
    try {
      bh.policyRes = bh.res.payload.SearchCustomerPoliciesResult;

      bh.local.result = bh.policyRes.length
        ? bh.policyRes[0].GeneralPolicy
        : bh.policyRes;
      bh.local.result['StatusCode'] = bh.policyRes.Status.StatusCode;

      if (bh.local.result.StatusCode == 0) {
        bh.local.result['err_msg'] = bh.local.result.Status.Reason;
      } else {
        if (!bh.local.result.PolicyList.GeneralPolicy) {
          bh.local.result.PolicyList = [];
        } else if (bh.local.result.PolicyList?.GeneralPolicy?.length) {
          bh.local.result.PolicyList =
            bh.local.result.PolicyList?.GeneralPolicy;
        } else {
          bh.local.result.PolicyList = [
            bh.local.result.PolicyList?.GeneralPolicy,
          ];
        }
      }
      delete bh.local.result.Status;
      bh.duration = Number(bh.res['requestDuration']);
      bh.local.payload = bh.local.result;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VZ03pJgqIAoIbGYo(bh, parentSpanInst);
      //appendnew_next_responseBody7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v99Ruk8ypLFLPfWT',
        spanInst,
        'responseBody7'
      );
    }
  }

  async sd_vL6aMwiEaQcv51BO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vL6aMwiEaQcv51BO',
      parentSpanInst
    );
    try {
      bh.local.result = {
        PolicyList: {},
        TotalRows: 0,
        StatusCode: 0,
        err_msg: 'Something went wrong, please contact IT',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vL6aMwiEaQcv51BO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vL6aMwiEaQcv51BO',
        spanInst,
        'sd_vL6aMwiEaQcv51BO'
      );
    }
  }

  async sd_mf8n8G7CCTYaSEAR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mf8n8G7CCTYaSEAR',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken8(bh, parentSpanInst);
      //appendnew_next_sd_mf8n8G7CCTYaSEAR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mf8n8G7CCTYaSEAR',
        spanInst,
        'sd_mf8n8G7CCTYaSEAR'
      );
    }
  }

  async apigeeToken8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken8',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeToken(spanInst);
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IHMVSHUCdfX7IXnS(bh, parentSpanInst);
      //appendnew_next_apigeeToken8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8P8tgawfv5YJNB9m',
        spanInst,
        'apigeeToken8'
      );
    }
  }

  async sd_IHMVSHUCdfX7IXnS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IHMVSHUCdfX7IXnS',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/v1/neutrinos/eska/load-agent-broker-info?`;
      if (bh.input.segment_code) {
        bh.url += `SegmentCode=${bh.input.segment_code}`;
      }

      if (bh.input.id) {
        bh.url += `ID=${bh.input.id}`;
      }

      console.log(bh.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h8j1ZZrD1PJgdbqt(bh, parentSpanInst);
      //appendnew_next_sd_IHMVSHUCdfX7IXnS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IHMVSHUCdfX7IXnS',
        spanInst,
        'sd_IHMVSHUCdfX7IXnS'
      );
    }
  }

  async sd_h8j1ZZrD1PJgdbqt(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.result = responseMsg;
      bh = await this.sd_1pAfWZuQq7QijvEg(bh, parentSpanInst);
      //appendnew_next_sd_h8j1ZZrD1PJgdbqt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h8j1ZZrD1PJgdbqt');
    }
  }

  async sd_1pAfWZuQq7QijvEg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1pAfWZuQq7QijvEg',
      parentSpanInst
    );
    try {
      if (
        bh.result.payload &&
        bh.result.payload['LoadAgentBrokerInfoResult']['AgentBrokerInfo'][
          'SegmentCode'
        ]['nil']
      ) {
        bh.local.result = {
          status: 'Failed',
          message: 'Incorrect data format OR Data not available in ESKA',
        };
      } else {
        bh.result =
          bh.result.payload['LoadAgentBrokerInfoResult']['AgentBrokerInfo'];
        if (bh.input.id) bh.input.policy['agent_id'] = bh.result['ID'];
        if (bh.input.segment_code)
          bh.input.policy['cr_number'] = bh.result['CRNumber'];
        bh.local.result = bh.input.policy;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1pAfWZuQq7QijvEg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1pAfWZuQq7QijvEg',
        spanInst,
        'sd_1pAfWZuQq7QijvEg'
      );
    }
  }

  async sd_PkznCS5g0HIr8XVR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PkznCS5g0HIr8XVR',
      parentSpanInst
    );
    try {
      bh.url = process.env.DB_API_URL + `/dm/digital/user/find-by-id`;
      bh.body = {
        filter: {
          id: bh.input.user_id,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ggUuSzQy1xX4vxHU(bh, parentSpanInst);
      //appendnew_next_sd_PkznCS5g0HIr8XVR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PkznCS5g0HIr8XVR',
        spanInst,
        'sd_PkznCS5g0HIr8XVR'
      );
    }
  }

  async sd_ggUuSzQy1xX4vxHU(bh, parentSpanInst) {
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
      bh = await this.sd_y9nkjtGsJENDYMyS(bh, parentSpanInst);
      //appendnew_next_sd_ggUuSzQy1xX4vxHU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ggUuSzQy1xX4vxHU');
    }
  }

  async sd_y9nkjtGsJENDYMyS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y9nkjtGsJENDYMyS',
      parentSpanInst
    );
    try {
      if (bh.result && bh.result.payload) {
        bh.local.result = bh.result.payload;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_y9nkjtGsJENDYMyS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y9nkjtGsJENDYMyS',
        spanInst,
        'sd_y9nkjtGsJENDYMyS'
      );
    }
  }

  async sd_KcAWX3kWibZRwUii(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KcAWX3kWibZRwUii',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken9(bh, parentSpanInst);
      //appendnew_next_sd_KcAWX3kWibZRwUii
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KcAWX3kWibZRwUii',
        spanInst,
        'sd_KcAWX3kWibZRwUii'
      );
    }
  }

  async apigeeToken9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken9',
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
      bh = await this.prepareRequest8(bh, parentSpanInst);
      //appendnew_next_apigeeToken9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NkS7S7nI5PSGOi05',
        spanInst,
        'apigeeToken9'
      );
    }
  }

  async prepareRequest8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest8',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/v1/neutrinos/eska/load-policy?policyId=${bh.input.policy_id}`;

      bh.api_key = 'eska-load-policy';
      bh.identifier = `${bh.input.policy_id}`;
      bh.request = {
        url: bh.url,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jdX1GnDVnmLd0jmK(bh, parentSpanInst);
      //appendnew_next_prepareRequest8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gTBU38mBSSdL6yPy',
        spanInst,
        'prepareRequest8'
      );
    }
  }

  async sd_jdX1GnDVnmLd0jmK(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.payload = responseMsg;
      bh = await this.responseBody9(bh, parentSpanInst);
      //appendnew_next_sd_jdX1GnDVnmLd0jmK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jdX1GnDVnmLd0jmK');
    }
  }

  async responseBody9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody9',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload?.payload?.LoadPolicyResult;
      bh.duration = Number(bh.payload['requestDuration']);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zI5q4WSzlrXTEBzZ(bh, parentSpanInst);
      //appendnew_next_responseBody9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MW2gjs6hycXdvZcq',
        spanInst,
        'responseBody9'
      );
    }
  }

  async sd_zI5q4WSzlrXTEBzZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zI5q4WSzlrXTEBzZ',
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
          bh.local.payload,
          undefined,
          undefined,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zI5q4WSzlrXTEBzZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zI5q4WSzlrXTEBzZ',
        spanInst,
        'sd_zI5q4WSzlrXTEBzZ'
      );
    }
  }

  async sd_okPJYou72L8T4Xbr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_okPJYou72L8T4Xbr',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken10(bh, parentSpanInst);
      //appendnew_next_sd_okPJYou72L8T4Xbr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_okPJYou72L8T4Xbr',
        spanInst,
        'sd_okPJYou72L8T4Xbr'
      );
    }
  }

  async apigeeToken10(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken10',
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
      bh = await this.prepareRequest9(bh, parentSpanInst);
      //appendnew_next_apigeeToken10
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pChNKezNsT7w58zO',
        spanInst,
        'apigeeToken10'
      );
    }
  }

  async prepareRequest9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRequest9',
      parentSpanInst
    );
    try {
      const body = bh.input.body;
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/artsendpaymentdetails/sendpayment?MsgId=${body.MsgId}&TransId=${body.TransId}&SourceAppId=${body.SourceAppId}&DestAppId=${body.DestAppId}&TransDesc=${body.TransDesc}&DocCreated=${body.DocCreated}&AuthKey=${body.AuthKey}&DocNum=${body.DocNum}&OperatingUnit=${body.OperatingUnit}&TransactionNumber=${body.TransactionNumber}&ReceiptCurrency=${body.ReceiptCurrency}&Amount=${body.Amount}&ReceiptMethod=${body.ReceiptMethod}&ReceiptNumber=${body?.receiptNumber}&Date=${body.Date}&ProcessFlag=${body.ProcessFlag}&ErrorMessage=${body.ErrorMessage}&CreatedByName=${body.CreatedByName}&Created=${body.Created}&CustomerNumber=${body.CustomerNumber}&CustomerName=${body.CustomerName}&BalanceAmount=${body.BalanceAmount}&CheckNumber=${body.CheckNumber}&CheckDate=${body.CheckDate}&PolicyNumber=${body.PolicyNumber}&DataSource=${body.DataSource}&UnderWritingYear=${body.UnderWritingYear}&Remarks=${body.Remarks}&Comments=${body.Comments}&ProcessedDate=${body.ProcessedDate}`;
      //logging
      bh.api_key = 'send-erp-receipt';
      bh.identifier = `${body.PolicyNumber}`;
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendPayment(bh, parentSpanInst);
      //appendnew_next_prepareRequest9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xCYvcRvJuPnQXtLX',
        spanInst,
        'prepareRequest9'
      );
    }
  }

  async sendPayment(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 120000,
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

      bh.payload = responseMsg;
      bh = await this.responseBody10(bh, parentSpanInst);
      //appendnew_next_sendPayment
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_00AstsVGz8UVUkIn');
    }
  }

  async responseBody10(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'responseBody10',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload = bh.payload?.payload;
      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_responseBody10
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B8TG7BDqWB1CeDBX',
        spanInst,
        'responseBody10'
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
        'sd_2EqoJxJ84TaAZDK9',
        spanInst,
        'apiAudit0'
      );
    }
  }

  async sd_A6R3T3vH6hqttNxT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A6R3T3vH6hqttNxT',
      parentSpanInst
    );
    try {
      bh.local.payload = bh.payload = bh.error?.response?.body;
      bh.apiEndTime = Date.now();

      bh.duration = Number(bh.error['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_sd_A6R3T3vH6hqttNxT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A6R3T3vH6hqttNxT',
        spanInst,
        'sd_A6R3T3vH6hqttNxT'
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
      (await this.sd_5t4TSD6rcVD5rWJp(bh, parentSpanInst)) ||
      (await this.sd_dWvFO0KkgOywIt2N(bh, parentSpanInst))
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
  async sd_5t4TSD6rcVD5rWJp(bh, parentSpanInst) {
    const nodes = ['sd_yZnJ56qPyJsBwepT'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_vL6aMwiEaQcv51BO(bh, parentSpanInst);
      //appendnew_next_sd_5t4TSD6rcVD5rWJp
      return true;
    }
    return false;
  }
  async sd_dWvFO0KkgOywIt2N(bh, parentSpanInst) {
    const nodes = ['sd_00AstsVGz8UVUkIn'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_A6R3T3vH6hqttNxT(bh, parentSpanInst);
      //appendnew_next_sd_dWvFO0KkgOywIt2N
      return true;
    }
    return false;
  }
  //appendnew_flow_eska_apis_Catch
}
