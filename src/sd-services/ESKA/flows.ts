// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4 from '../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL from '../Data/quote'; //_splitter_
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

  async getProductCodes(parentSpanInst, quote_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getProductCodes',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
      },
      local: {
        product_codes: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getQuoteSummary(bh, parentSpanInst);
      //appendnew_next_getProductCodes
      return (
        // formatting output variables
        {
          input: {},
          local: {
            product_codes: bh.local.product_codes,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PrmgZR1TotNg63fw',
        spanInst,
        'getProductCodes'
      );
    }
  }

  async getBrokerAgentInfo(
    parentSpanInst,
    cr_number: any = undefined,
    agent_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getBrokerAgentInfo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        cr_number,
        agent_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TwoQYEXfwtEcdwa2(bh, parentSpanInst);
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
        'sd_QA1BqKYvKC2EilKV',
        spanInst,
        'getBrokerAgentInfo'
      );
    }
  }
  //appendnew_flow_flows_start

  async getQuoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance: SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote =
        SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance.getQuoteSummary(
          spanInst,
          bh.input.quote_id,
          undefined
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jUGvY5x6QCImDKcQ(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4eRSZSjNtx3tf8kg',
        spanInst,
        'getQuoteSummary'
      );
    }
  }

  async sd_jUGvY5x6QCImDKcQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jUGvY5x6QCImDKcQ',
      parentSpanInst
    );
    try {
      bh.get_risk_items_based_on_plans = (quote_summary) => {
        const risk_items_based_on_plans = {};
        quote_summary.risk_item_details.map((risk_item) => {
          if (
            !risk_items_based_on_plans[risk_item?.product_code] &&
            risk_item.product_code
          ) {
            risk_items_based_on_plans[risk_item.product_code] = [];
          }
        });
        return Object.keys(risk_items_based_on_plans);
      };

      bh.local.product_codes = bh.get_risk_items_based_on_plans(
        bh.quote_summary
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jUGvY5x6QCImDKcQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jUGvY5x6QCImDKcQ',
        spanInst,
        'sd_jUGvY5x6QCImDKcQ'
      );
    }
  }

  async sd_TwoQYEXfwtEcdwa2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TwoQYEXfwtEcdwa2',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_sd_TwoQYEXfwtEcdwa2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TwoQYEXfwtEcdwa2',
        spanInst,
        'sd_TwoQYEXfwtEcdwa2'
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
      bh = await this.sd_X3eO1iFxcM1tIJ4g(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wt0295snZjVQfZqf',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async sd_X3eO1iFxcM1tIJ4g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X3eO1iFxcM1tIJ4g',
      parentSpanInst
    );
    try {
      bh.url =
        process.env.APIGEE_OCI_URL +
        `/v1/neutrinos/eska/load-agent-broker-info?`;
      if (bh.input.cr_number) {
        bh.url += `CRNumber=${bh.input.cr_number}`;
      }

      if (bh.input.agent_id) {
        bh.url += `NationalId=${bh.input.agent_id}`;
      }

      console.log(bh.url);

      bh.api_key = 'eska-agent-broker-info';
      bh.identifier = bh.input.cr_number || bh.input.agent_id;
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fid5ilZTWXXYpyyD(bh, parentSpanInst);
      //appendnew_next_sd_X3eO1iFxcM1tIJ4g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X3eO1iFxcM1tIJ4g',
        spanInst,
        'sd_X3eO1iFxcM1tIJ4g'
      );
    }
  }

  async sd_Fid5ilZTWXXYpyyD(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
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
      bh = await this.sd_0OiNIdLUm4EkUIW4(bh, parentSpanInst);
      //appendnew_next_sd_Fid5ilZTWXXYpyyD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fid5ilZTWXXYpyyD');
    }
  }

  async sd_0OiNIdLUm4EkUIW4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0OiNIdLUm4EkUIW4',
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
        bh.local.result =
          bh.result.payload['LoadAgentBrokerInfoResult']['AgentBrokerInfo'];
      }

      bh.duration = Number(bh.result['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CE3tm8PlMybm2VkO(bh, parentSpanInst);
      //appendnew_next_sd_0OiNIdLUm4EkUIW4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0OiNIdLUm4EkUIW4',
        spanInst,
        'sd_0OiNIdLUm4EkUIW4'
      );
    }
  }

  async sd_CE3tm8PlMybm2VkO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CE3tm8PlMybm2VkO',
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
      //appendnew_next_sd_CE3tm8PlMybm2VkO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CE3tm8PlMybm2VkO',
        spanInst,
        'sd_CE3tm8PlMybm2VkO'
      );
    }
  }

  async sd_6GiEFPH9iVmIb5Nu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6GiEFPH9iVmIb5Nu',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: 'Failed',
        message:
          'Failed to get data for Broker/Agent. Please verify the data and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CE3tm8PlMybm2VkO(bh, parentSpanInst);
      //appendnew_next_sd_6GiEFPH9iVmIb5Nu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6GiEFPH9iVmIb5Nu',
        spanInst,
        'sd_6GiEFPH9iVmIb5Nu'
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
      (await this.sd_BenyNEM4fSrEVJz9(bh, parentSpanInst))
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
  async sd_BenyNEM4fSrEVJz9(bh, parentSpanInst) {
    const nodes = ['sd_Fid5ilZTWXXYpyyD'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6GiEFPH9iVmIb5Nu(bh, parentSpanInst);
      //appendnew_next_sd_BenyNEM4fSrEVJz9
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
