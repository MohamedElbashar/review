// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e from '../common/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf from '../renewal/data_flows'; //_splitter_
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

  async upsert(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('upsert', parentSpanInst);
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
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_upsert
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
        'sd_d9Z8fXjAIL5CYDPB',
        spanInst,
        'upsert'
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
        'sd_VVQNx5fOuobnMoe0',
        spanInst,
        'getQuote'
      );
    }
  }

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
        'sd_KH0DySNqPm1JhTC4',
        spanInst,
        'getQuotesSummary'
      );
    }
  }

  async downloadQuotePdf(
    parentSpanInst,
    quote_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'downloadQuotePdf',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_data,
      },
      local: {
        PdfFileBuffer: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getDateFields0(bh, parentSpanInst);
      //appendnew_next_downloadQuotePdf
      return (
        // formatting output variables
        {
          input: {},
          local: {
            PdfFileBuffer: bh.local.PdfFileBuffer,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i0xvEL4e5Uz0L5h9',
        spanInst,
        'downloadQuotePdf'
      );
    }
  }

  async getMasterdata(parentSpanInst, event: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMasterdata',
      parentSpanInst
    );
    let bh: any = {
      input: {
        event,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.masterDataCall(bh, parentSpanInst);
      //appendnew_next_getMasterdata
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
        'sd_kmYyymBMifs2723R',
        spanInst,
        'getMasterdata'
      );
    }
  }

  async updateCustomerDecision(
    parentSpanInst,
    status: any = undefined,
    reference_number: any = undefined,
    source: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateCustomerDecision',
      parentSpanInst
    );
    let bh: any = {
      input: {
        status,
        reference_number,
        source,
      },
      local: {
        result: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xyrSria5yn8BIExZ(bh, parentSpanInst);
      //appendnew_next_updateCustomerDecision
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N9qOgu5XJpxYJNpc',
        spanInst,
        'updateCustomerDecision'
      );
    }
  }

  async patchQuote(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'patchQuote',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        status: false,
        error: undefined,
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
            error: bh.local.error,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gQ6UrXO95olqL81u',
        spanInst,
        'patchQuote'
      );
    }
  }

  async getRefNo(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan('getRefNo', parentSpanInst);
    let bh: any = {
      input: {},
      local: {
        reference_number: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_getRefNo
      return (
        // formatting output variables
        {
          input: {},
          local: {
            reference_number: bh.local.reference_number,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XcY41kVjsUHxqKTu',
        spanInst,
        'getRefNo'
      );
    }
  }

  async existingUserCheck(parentSpanInst, id_no: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'existingUserCheck',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
      },
      local: {
        is_existing_user: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyData(bh, parentSpanInst);
      //appendnew_next_existingUserCheck
      return (
        // formatting output variables
        {
          input: {},
          local: {
            is_existing_user: bh.local.is_existing_user,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o9X0QV2dC1NzYFXo',
        spanInst,
        'existingUserCheck'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/quote/create';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpUpsertQuote(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FgSn7Plk00HUGAjd',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpUpsertQuote(bh, parentSpanInst) {
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
      //appendnew_next_httpUpsertQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b46MsYOZLjnvemtu');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RZt1Mi6t9Kdo6uTo',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/quote/find-by-id';
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
        'sd_5bOuv3XEgibogV7D',
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
      return await this.errorHandler(bh, e, 'sd_Toj5lXMBwVTDysCM');
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
        'sd_bUe8PYZZfnzj9pBe',
        spanInst,
        'setResponse4'
      );
    }
  }

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

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetQuoteSummary(bh, parentSpanInst);
      //appendnew_next_setUrl6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nvYooN5RxDXsqRTk',
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
      return await this.errorHandler(bh, e, 'sd_CSjozD2zjP63sJIh');
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
        'sd_la6h6kogbCRrQOQU',
        spanInst,
        'setResponse7'
      );
    }
  }

  async getDateFields0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDateFields0',
      parentSpanInst
    );
    try {
      bh.effective_date =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.quote_date = bh.input.quote_data?.quote_details?.created_date;
      bh.separator = '-';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.convertDate0(bh, parentSpanInst);
      //appendnew_next_getDateFields0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ryqlZHZPjwNDMiwH',
        spanInst,
        'getDateFields0'
      );
    }
  }

  async convertDate0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'convertDate0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance: SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows =
        SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance.ddmmyyy(
          spanInst,
          bh.effective_date,
          bh.separator
        );
      bh.effective_date = outputVariables.local.outputDate;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.convertDate1(bh, parentSpanInst);
      //appendnew_next_convertDate0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TSku9y1HGOfvtmgm',
        spanInst,
        'convertDate0'
      );
    }
  }

  async convertDate1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'convertDate1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance: SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows =
        SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance.ddmmyyy(
          spanInst,
          bh.quote_date,
          bh.separator
        );
      bh.quote_date = outputVariables.local.outputDate;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x2vi5TzLey8aB0TE(bh, parentSpanInst);
      //appendnew_next_convertDate1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GbA3ZYZOSC9K3i4a',
        spanInst,
        'convertDate1'
      );
    }
  }

  async sd_x2vi5TzLey8aB0TE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x2vi5TzLey8aB0TE',
      parentSpanInst
    );
    try {
      bh.url = process.env.QUOATAION_TEMPLATE_URL;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp(bh, parentSpanInst);
      //appendnew_next_sd_x2vi5TzLey8aB0TE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x2vi5TzLey8aB0TE',
        spanInst,
        'sd_x2vi5TzLey8aB0TE'
      );
    }
  }

  async strapiHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'arraybuffer',
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

      bh.data = responseMsg;
      bh = await this.strapiTemplate(bh, parentSpanInst);
      //appendnew_next_strapiHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U8wFtoMvlUCAbdkU');
    }
  }

  async strapiTemplate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'strapiTemplate',
      parentSpanInst
    );
    try {
      const buffer = Buffer.from(bh.data?.payload);
      bh.templateSource = buffer.toString('utf8');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resultMapping(bh, parentSpanInst);
      //appendnew_next_strapiTemplate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NqL8FDp5ubjoFXct',
        spanInst,
        'strapiTemplate'
      );
    }
  }

  async resultMapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resultMapping',
      parentSpanInst
    );
    try {
      const converter = require('number-to-words');
      //quote summary data
      let quote_summary = bh.input.quote_data;
      quote_summary.quote_details.effective_date = bh.effective_date;
      quote_summary.quote_details.quote_date = bh.quote_date;
      //get vehicle names from yakeen codes
      let vehicleDetails = [];
      const asyncOperation = (data) => {
        return new Promise((resolve, reject) => {
          try {
            if (data) {
              let body = {
                search_type: 'vehicle',
                filter: {
                  yakeen_make: data?.addl_details?.make.toString(),
                  yakeen_model: data?.addl_details?.model.toString(),
                },
              };
              let obj = this.getMasterdata(parentSpanInst, body);

              resolve(obj);
            }
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(quote_summary?.risk_item_details.map(asyncOperation))
        .then((results) => {
          vehicleDetails = results;
        })
        .catch((error) => {
          console.error(error);
        });

      if (vehicleDetails.length) {
        vehicleDetails.forEach((ele) => {
          ele.local.result.forEach((x) => {
            quote_summary?.risk_item_details.map((y) => {
              if (y.addl_details.make == x.yakeen_make) {
                y['make_name'] = x.yakeen_make_en;
                y['model_name'] = x.yakeen_model_en;
              }
              quote_summary?.driver_details.map((z) => {
                z.risk_items.forEach((i) => {
                  if (i == y.id) {
                    z['vehicle_name'] = x.yakeen_make_en;
                  }
                });
              });
              quote_summary.addons_details.map((j) => {
                j.risk_id.forEach((k) => {
                  if (k == y.id) {
                    j['vehicle_name'] = x.yakeen_make_en;
                  }
                });
              });
            });
          });
        });
      }

      let addonDetails = [];
      const getAddonsDesc = (data) => {
        return new Promise((resolve, reject) => {
          try {
            if (data) {
              let body = {
                search_type: 'add-ons',
                filter: {
                  add_on_id: data.add_on_code,
                },
              };
              let obj = this.getMasterdata(parentSpanInst, body);
              resolve(obj);
            }
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(quote_summary?.addons_details.map(getAddonsDesc))
        .then((results) => {
          addonDetails = results;
        })
        .catch((error) => {
          console.error(error);
        });

      if (addonDetails.length) {
        addonDetails.forEach((ele) => {
          ele.local.result.forEach((el) => {
            quote_summary?.addons_details.map((x) => {
              if (el.add_on_id == x.add_on_code) {
                x['add_on_desc'] = el.add_on_desc;
              }
            });
          });
        });
      }

      let newArr = [];
      quote_summary?.risk_item_details.forEach((ele) => {
        //convert to JSON - start
        if (typeof ele.premium_details == 'string')
          ele = JSON.parse(ele.premium_details);
        else ele = ele.premium_details;
        //convert to JSON - end
        newArr.push({
          ncdAmount: ele.NCDAmount,
          loyalty: ele.LoyaltyDiscountAmount,
          multiVehicleDiscount: ele.MultiVehicleDiscountAmount,
          totalPremium: ele.TotalPremium,
          tplBase: ele.TPLBase,
          vatAmount: ele.VATAmount,
          itdPremium: ele.ITDPremium,
          policyPremium: ele.PolicyPremium,
          totalIncVat: ele.VATAmount + ele.TotalPremium,
        });
      });

      let total = newArr.reduce((acc, obj) => {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            acc[key] = (acc[key] || 0) + obj[key];
          }
        }
        return acc;
      }, {});

      if (!isNaN(total.totalIncVat)) {
        quote_summary.quote_details.total_amount_words_en = converter.toWords(
          total.totalIncVat
        );
      }

      function formatNumber(num) {
        return num.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      }

      let formattedValue = {};
      for (let key in total) {
        if (total.hasOwnProperty(key)) {
          formattedValue[key] = formatNumber(total[key]);
        }
      }

      quote_summary.premium_summary = formattedValue;

      bh.local.quote_summary = quote_summary;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.generatePdf(bh, parentSpanInst);
      //appendnew_next_resultMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y6SQT9peVk0eHVfr',
        spanInst,
        'resultMapping'
      );
    }
  }

  async generatePdf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generatePdf',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const handlebars = require('handlebars');
      const html_to_pdf = require('html-pdf-node');
      const data = { ...bh.local.quote_summary };
      const template = handlebars.compile(bh.templateSource);
      const renderedHtml = template(data);

      bh.html_template = renderedHtml;
      bh.file_options = {
        format: 'A4',
        landscape: false,
        printBackground: true,
        margin: {
          top: '15px',
          right: '15px',
          left: '15px',
        },
      };
      bh.local.PdfFileBuffer = await html_to_pdf.generatePdf(
        { content: bh.html_template },
        bh.file_options
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_generatePdf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jZY01YF4rxd6LoyZ',
        spanInst,
        'generatePdf'
      );
    }
  }

  async masterDataCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'masterDataCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.input.event
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_masterDataCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t5p5Xy5Ucakk2RRS',
        spanInst,
        'masterDataCall'
      );
    }
  }

  async sd_xyrSria5yn8BIExZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xyrSria5yn8BIExZ',
      parentSpanInst
    );
    try {
      bh.body = {
        reference_number: bh.input.reference_number,
        status_code: bh.input.status,
        source: bh.input['source'] || '',
      };

      bh.url = process.env.DB_API_URL + 'quote/customer/decision';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4ROUKtFW7jSK56Q3(bh, parentSpanInst);
      //appendnew_next_sd_xyrSria5yn8BIExZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xyrSria5yn8BIExZ',
        spanInst,
        'sd_xyrSria5yn8BIExZ'
      );
    }
  }

  async sd_4ROUKtFW7jSK56Q3(bh, parentSpanInst) {
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
      bh = await this.sd_oSfeM9cUzaQCh3MM(bh, parentSpanInst);
      //appendnew_next_sd_4ROUKtFW7jSK56Q3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4ROUKtFW7jSK56Q3');
    }
  }

  async sd_oSfeM9cUzaQCh3MM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oSfeM9cUzaQCh3MM',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      bh.local.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_oSfeM9cUzaQCh3MM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oSfeM9cUzaQCh3MM',
        spanInst,
        'sd_oSfeM9cUzaQCh3MM'
      );
    }
  }

  async sd_IDVMM5U6OZyAXqxf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IDVMM5U6OZyAXqxf',
      parentSpanInst
    );
    try {
      bh.local.result = {
        status: false,
        error: 'Invalid Request',
      };
      bh.local.status_code = 500;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_IDVMM5U6OZyAXqxf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IDVMM5U6OZyAXqxf',
        spanInst,
        'sd_IDVMM5U6OZyAXqxf'
      );
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'quote/update-all';

      bh.doUpdate = false;

      let values = Object.values(bh.input.body?.filter);
      if (values?.length) {
        bh.doUpdate = values.every(
          (x) => x != null && x != '' && x != undefined
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r4V4k1rs0DCBfSbx(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GBpR1YTwOC1YV1QF',
        spanInst,
        'setUrl5'
      );
    }
  }

  async sd_r4V4k1rs0DCBfSbx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r4V4k1rs0DCBfSbx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.doUpdate,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.httpPatchQuote(bh, parentSpanInst);
      } else {
        bh = await this.sd_HTMjG7Tmv01w4kQu(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r4V4k1rs0DCBfSbx',
        spanInst,
        'sd_r4V4k1rs0DCBfSbx'
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
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_httpPatchQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LPOj4qRpnXq95IPV');
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
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ODxrzyDosOHqTW8s',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_HTMjG7Tmv01w4kQu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HTMjG7Tmv01w4kQu',
      parentSpanInst
    );
    try {
      bh.local.error = { error: 'Invalid Request' };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HTMjG7Tmv01w4kQu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HTMjG7Tmv01w4kQu',
        spanInst,
        'sd_HTMjG7Tmv01w4kQu'
      );
    }
  }

  async setResponse6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse6',
      parentSpanInst
    );
    try {
      bh.local.error = bh.error?.message || JSON.stringify(bh.error);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9ttGARntBPwko12D',
        spanInst,
        'setResponse6'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'quote/create-ref-no';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetRefno(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XOXWn0bm4ydupaQQ',
        spanInst,
        'setUrl2'
      );
    }
  }

  async httpGetRefno(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_httpGetRefno
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_grrpzcG9CETYHOIt');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.reference_number = bh.result?.payload?.reference_number;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FXPI0AsMibuWPLlQ',
        spanInst,
        'setResponse2'
      );
    }
  }

  async policyData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getPolicyData(
          spanInst,
          undefined,
          bh.input.id_no
        );
      bh.policy_data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resp(bh, parentSpanInst);
      //appendnew_next_policyData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4eNKUZ7lP4n0yQ4t',
        spanInst,
        'policyData'
      );
    }
  }

  async resp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('resp', parentSpanInst);
    try {
      bh.local.is_existing_user = false;
      if (bh.policy_data?.length) {
        //Checking the user based on the Policy Expiry date
        bh.local.is_existing_user =
          new Date(bh.policy_data[0]?.POLICY_EXPIRY_DATE) > new Date();
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_resp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WF36ORodLYOq5zBQ',
        spanInst,
        'resp'
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
      (await this.sd_6iA5tjJaTm0MWA2Z(bh, parentSpanInst)) ||
      (await this.sd_05vVfImoeaepqaPr(bh, parentSpanInst))
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
  async sd_6iA5tjJaTm0MWA2Z(bh, parentSpanInst) {
    const nodes = ['sd_Fa3iH4aiDiPFVxbJ'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_IDVMM5U6OZyAXqxf(bh, parentSpanInst);
      //appendnew_next_sd_6iA5tjJaTm0MWA2Z
      return true;
    }
    return false;
  }
  async sd_05vVfImoeaepqaPr(bh, parentSpanInst) {
    const nodes = ['sd_LPOj4qRpnXq95IPV'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setResponse6(bh, parentSpanInst);
      //appendnew_next_sd_05vVfImoeaepqaPr
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
