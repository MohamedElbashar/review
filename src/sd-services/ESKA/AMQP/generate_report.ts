// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq from '../../Data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL from '../../Data/quote'; //_splitter_
import * as SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m from '../eska_apis'; //_splitter_
import * as SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq from './flows'; //_splitter_
//append_imports_end
export class generate_report {
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
    this.serviceName = 'generate_report';
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
      instance = new generate_report(
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
    //appendnew_flow_generate_report_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: generate_report');
    //appendnew_flow_generate_report_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: generate_report');
    //appendnew_flow_generate_report_HttpIn
  }
  //   service flows_generate_report

  async generateReport(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generateReport',
      parentSpanInst
    );
    let bh: any = {
      input: {
        result,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.messageParsing(bh, parentSpanInst);
      //appendnew_next_generateReport
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
        'sd_h7ESwrrORLycOfuK',
        spanInst,
        'generateReport'
      );
    }
  }
  //appendnew_flow_generate_report_start

  async messageParsing(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'messageParsing',
      parentSpanInst
    );
    try {
      bh.result = bh.input.result;

      bh.product_id = bh.result.product_id;
      bh.quote_id = bh.result.quote_id;
      bh.piid = bh.result.piid;
      bh.signal_name = bh.result.signal_name;
      bh.cid = bh.result.cid;

      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][GENERATE_REPORT][START]`
      );

      bh.get_policy_audit_filter = {
        quote_id: bh.quote_id,
        product_id: bh.product_id,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPolicyAudit(bh, parentSpanInst);
      //appendnew_next_messageParsing
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a0VRRWsUeEkaF90P',
        spanInst,
        'messageParsing'
      );
    }
  }

  async getPolicyAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance: SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows =
        SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance.getPolicyAudit(
          spanInst,
          bh.get_policy_audit_filter,
          bh.quote_id
        );
      bh.policy_audit_record = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.request(bh, parentSpanInst);
      //appendnew_next_getPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z7mneG3lCgm39zpC',
        spanInst,
        'getPolicyAudit'
      );
    }
  }

  async request(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('request', parentSpanInst);
    try {
      const eska_response = JSON.parse(
        bh.policy_audit_record?.eska_response || ''
      );
      const language = process.env.POLICY_FILE_GENERATION_LANG?.toLowerCase();
      bh.policy_id = eska_response?.PolicyID;
      bh.body = {
        GenerateReport: {
          oGenerateReportInput: {
            ApplicationID: 'GeneralInsurance',
            FileName: eska_response?.PolicySegmantCode?.replace('/', '_'),
            Langauage: language == 'english' ? 'English' : 'Arabic',
            OutputType: 'PDF',
            Path: process.env.SFTP_WRITE_PATH,
            ReportCode: language == 'english' ? 'ARTGPD899' : 'ARTGPD899_AR',
            UserName: 'ADMIN',
            oReportParameters: {
              ReportParameter: {
                ColumnType: 'LOV',
                FromValue: eska_response?.PolicyID, //Policy Id
                ParamFrom: 'P_GPD_PLC_ID', // Dynamically changes based on arabic / english
                ParamFromDescription: eska_response?.PolicySegmantCode, //Policy Segment Code
                ParamFromRequired: 'true',
                ParamID: language == 'english' ? '10010759' : '10010760', // Dynamically changes based on arabic / english
                ParamOrder: '1',
              },
            },
          },
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_request
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wJiOoZB2B4IhA1m',
        spanInst,
        'request'
      );
    }
  }

  async quoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance: SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote =
        SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance.getQuoteSummary(
          spanInst,
          bh.quote_id,
          bh.product_id
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateReportCall(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5cKWMgL3wCeogvJW',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async generateReportCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateReportCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.generateReport(
          spanInst,
          bh.body
        );
      bh.generate_report_response = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyAuditMap(bh, parentSpanInst);
      //appendnew_next_generateReportCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tHvTQlIlGkp3I6ij',
        spanInst,
        'generateReportCall'
      );
    }
  }

  async policyAuditMap(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyAuditMap',
      parentSpanInst
    );
    try {
      bh.update_policy_audit = {
        filter: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
        },
        policy_audit: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
          generate_report_response: JSON.stringify(
            bh.generate_report_response?.GenerateReportResult
          ),
        },
      };

      if (
        bh.generate_report_response?.GenerateReportResult?.oStatus
          ?.StatusCode == 0
      ) {
        bh.signal_options = {
          Error: 'Generate Policy PDF Error',
          ErrorMessage: JSON.stringify(
            bh.generate_report_response?.GenerateReportResult?.oStatus
          ),
          isError: true,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePolicyAudit(bh, parentSpanInst);
      //appendnew_next_policyAuditMap
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GXVPdrSwahww3pTr',
        spanInst,
        'policyAuditMap'
      );
    }
  }

  async updatePolicyAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePolicyAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance: SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows =
        SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance.updatePolicyAudit(
          spanInst,
          bh.update_policy_audit,
          bh.quote_id
        );
      bh.db_update = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendSignal(bh, parentSpanInst);
      //appendnew_next_updatePolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hlKahppn0ykK2kSX',
        spanInst,
        'updatePolicyAudit'
      );
    }
  }

  async sendSignal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendSignal',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance: SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows =
        SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance.signal(
          spanInst,
          bh.signal_options,
          bh.quote_id,
          bh.cid,
          bh.piid,
          bh.signal_name,
          bh.product_id
        );
      bh.bpm_result = outputVariables.local.bpm_result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log1(bh, parentSpanInst);
      //appendnew_next_sendSignal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U0GUUxd7uijwyGdR',
        spanInst,
        'sendSignal'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][GENERATE_REPORT][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5bsBCmi4T605bO99',
        spanInst,
        'log1'
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
  //appendnew_flow_generate_report_Catch
}
