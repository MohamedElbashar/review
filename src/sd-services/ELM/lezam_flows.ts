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
export class lezam_flows {
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
    this.serviceName = 'lezam_flows';
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
      instance = new lezam_flows(
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
    //appendnew_flow_lezam_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: lezam_flows');
    //appendnew_flow_lezam_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: lezam_flows');
    //appendnew_flow_lezam_flows_HttpIn
  }
  //   service flows_lezam_flows

  async getRiskScore(parentSpanInst, body = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getRiskScore',
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
      bh = await this.sd_DDYA65Q0ZAExJCfI(bh, parentSpanInst);
      //appendnew_next_getRiskScore
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
        'sd_5d2FzSCzi5vUAM6I',
        spanInst,
        'getRiskScore'
      );
    }
  }
  //appendnew_flow_lezam_flows_start

  async sd_DDYA65Q0ZAExJCfI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DDYA65Q0ZAExJCfI',
      parentSpanInst
    );
    try {
      bh.target = process.env.TARGET_OCE;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_sd_DDYA65Q0ZAExJCfI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DDYA65Q0ZAExJCfI',
        spanInst,
        'sd_DDYA65Q0ZAExJCfI'
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
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZoozQS56SOTl5eRi',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v1/lezam/neutrinos?personId=${bh.input.body.personId}&vehicleSequenceNumber=${bh.input.body.vehicleSequenceNumber}`;

      bh.headers = {
        Authorization: 'Bearer ' + bh.token,
        settingIdentifier: process.env.LEZAM_SETTING_IDENTIFIER,
        operatorId: bh.input.body.personId,
        AcceptLanguage: 'en',
        'X-ART-API-KEY': process.env.LEZAM_API_KEY,
      };

      bh.api_key = 'lezam-vehicle-info';
      bh.identifier = `${bh.input.body.vehicleSequenceNumber}`;
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.lezamGetriskscore(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_okBX8J3Unxh8F5uB',
        spanInst,
        'setUrl0'
      );
    }
  }

  async lezamGetriskscore(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: bh.headers,
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

      bh.data = responseMsg;
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_lezamGetriskscore
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TR0ZW8YNw7aIfUT0');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.payload = bh.data['payload'];
      if (bh.payload.riskScore) {
        let traffic_violations = bh.payload.riskScore.scoringDetails.find(
          (x) => x.scoringDimension == 'Traffic Violations'
        );
        let accidents_record = bh.payload.riskScore.scoringDetails.find(
          (x) => x.scoringDimension == 'Accidents Record'
        );
        let demographic_information = bh.payload.riskScore.scoringDetails.find(
          (x) => x.scoringDimension == 'Demographic Information'
        );
        let vehicle_information = bh.payload.riskScore.scoringDetails.find(
          (x) => x.scoringDimension == 'Vehicle Information'
        );
        bh.local.result = {
          traffic_violations_score: traffic_violations?.dimensionScore || '0',
          accidents_record_score: accidents_record?.dimensionScore || '0',
          demographic_information_score:
            demographic_information?.dimensionScore || '0',
          vehicle_information_score: vehicle_information?.dimensionScore || '0',
          lezam_score: bh.payload.riskScore.scoreValue || '0',
        };
      } else {
        bh.local.result = {
          traffic_violations_score: '0',
          accidents_record_score: '0',
          demographic_information_score: '0',
          vehicle_information_score: '0',
          lezam_score: '0',
        };
      }

      bh.duration = Number(bh.data['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JuPjqGsqhJiiwF53(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wN8wd36cMoqLQSXg',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_JuPjqGsqhJiiwF53(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JuPjqGsqhJiiwF53',
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
      //appendnew_next_sd_JuPjqGsqhJiiwF53
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JuPjqGsqhJiiwF53',
        spanInst,
        'sd_JuPjqGsqhJiiwF53'
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
        traffic_violations_score: '0',
        accidents_record_score: '0',
        demographic_information_score: '0',
        vehicle_information_score: '0',
        lezam_score: '0',
      };

      bh.data = bh.local.result;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JuPjqGsqhJiiwF53(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ShW2iJ4xKiiPyVPo',
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
      (await this.sd_LBnppAtNxZQOCLxj(bh, parentSpanInst))
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
  async sd_LBnppAtNxZQOCLxj(bh, parentSpanInst) {
    const nodes = ['sd_TR0ZW8YNw7aIfUT0'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_sd_LBnppAtNxZQOCLxj
      return true;
    }
    return false;
  }
  //appendnew_flow_lezam_flows_Catch
}
