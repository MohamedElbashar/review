// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DBSTqqlAitvTXspg from '../communication/email_flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_m4BQHXoEAOdJhYaw from '../communication/sms_flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN from '../utils/lob_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from './flows'; //_splitter_
//append_imports_end
export class quote_apis {
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
    this.serviceName = 'quote_apis';
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
      instance = new quote_apis(
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
    //appendnew_flow_quote_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: quote_apis');
    //appendnew_flow_quote_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: quote_apis');

    this.app['post'](
      `${this.serviceBasePath}/quote/create`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.setBody1(bh, parentSpanInst);
          //appendnew_next_sd_GbczNDysmvXPOusE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GbczNDysmvXPOusE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/update`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.setBody3(bh, parentSpanInst);
          //appendnew_next_sd_yzN2L5uqfhs46oW4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yzN2L5uqfhs46oW4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/summary`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.setBody6(bh, parentSpanInst);
          //appendnew_next_sd_pfJnjhQQlowsIKxF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pfJnjhQQlowsIKxF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/summary-pdf`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.setBody7(bh, parentSpanInst);
          //appendnew_next_sd_JUz1CaZHjQyPxwPp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JUz1CaZHjQyPxwPp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/share`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.setBody15(bh, parentSpanInst);
          //appendnew_next_sd_SMFV6REdQay4Hmdt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SMFV6REdQay4Hmdt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/send-upload-sms`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_DDrUVQpf0WRMmFmk(bh, parentSpanInst);
          //appendnew_next_sd_ntBOfSnlOHsNsnfM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ntBOfSnlOHsNsnfM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/customer/decision`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.updateCusomerDecision(bh, parentSpanInst);
          //appendnew_next_sd_W1gCGLU5j0Ivn14m
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_W1gCGLU5j0Ivn14m');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_quote_apis_HttpIn
  }
  //   service flows_quote_apis

  //appendnew_flow_quote_apis_start

  async setBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody1', parentSpanInst);
    try {
      bh.user_id = bh.input.body?.user_id;
      bh.tenant_id = bh.input.body?.tenant_id;
      bh.lang = bh.web.req.lng || 'en';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.lobList(bh, parentSpanInst);
      //appendnew_next_setBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4oAHdbqQpofzQWEW',
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
        'sd_GmJKrKAGemmx3OrV',
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
      bh = await this.existingUserCheck(bh, parentSpanInst);
      //appendnew_next_getRef
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D5HEn2RHCCpZIPfP',
        spanInst,
        'getRef'
      );
    }
  }

  async existingUserCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'existingUserCheck',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.existingUserCheck(
          spanInst,
          bh.input.body.id_no
        );
      bh.is_existing_user = outputVariables.local.is_existing_user;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody2(bh, parentSpanInst);
      //appendnew_next_existingUserCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d6DtnSl3cPB9vpZw',
        spanInst,
        'existingUserCheck'
      );
    }
  }

  async setBody2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody2', parentSpanInst);
    try {
      let lob = bh.lob.find((item) => item.id === bh.input.body.lob_id);
      bh.reference_number =
        'ART-' + lob.code.substring(1, 0) + '-' + bh.reference_number;

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
          is_ifoundry_renewal: bh.is_existing_user,
          is_eska_renewal: false,
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
        'sd_PRmtrIJoLwGBM260',
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
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_upsertQuote0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ush1sUyGGELXiJlx',
        spanInst,
        'upsertQuote0'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      if (bh.result.id) {
        bh.response = {
          id: bh.result.id,
          reference_number: bh.result.reference_number,
        };
        bh.statusCode = 200;
      } else {
        bh.response = {
          error: 'Something went wrong',
        };
        bh.statusCode = 500;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_npxYencQc6gKOAVm(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CDXQtmcXj10hK3mn',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_npxYencQc6gKOAVm(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_npxYencQc6gKOAVm');
    }
  }

  async setBody3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody3', parentSpanInst);
    try {
      bh.user_id = bh.input.body?.user_id;
      bh.tenant_id = bh.input.body?.tenant_id;
      bh.lang = bh.web.req.lng || 'en';

      bh.quote = {
        quote: {
          id: bh.input.body.id,
          reference_number: bh.input.body.reference_number,
          id_type: bh.input.body.id_type,
          id_no: bh.input.body.id_no,
          lob_id: bh.input.body.lob_id,
          customer_type_id: bh.input.body.customer_type_id,
          status_id: bh.input.body.status_id,
          tenant_id: bh.tenant_id,
          first_name: bh.input.body.first_name,
          last_name: bh.input.body.last_name,
          company_name: bh.input.body.company_name || '',
          phone_country_code: bh.input.body.phone_country_code,
          phone_no: bh.input.body.phone_no,
          email_id: bh.input.body.email_id,
          updated_by: bh.user_id,
          owned_by: bh.user_id,
          addl_details: JSON.stringify(bh.input.body.addl_details),
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.upsertQuote1(bh, parentSpanInst);
      //appendnew_next_setBody3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cqgfgdgxs1gehS2S',
        spanInst,
        'setBody3'
      );
    }
  }

  async upsertQuote1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'upsertQuote1',
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
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_upsertQuote1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1w6UnIn9NjLs0mav',
        spanInst,
        'upsertQuote1'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      if (bh.result.id) {
        bh.response = {
          id: bh.result.id,
          reference_number: bh.result.reference_number,
        };
        bh.statusCode = 200;
      } else {
        bh.response = {
          error: 'Something went wrong',
        };
        bh.statusCode = 500;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_fw3rFA1BS3Fp09cg(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6ZTM1Nz8lyhvOFWe',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_fw3rFA1BS3Fp09cg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fw3rFA1BS3Fp09cg');
    }
  }

  async setBody6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody6', parentSpanInst);
    try {
      bh.user_id = bh.input.body?.user_id;
      bh.tenant_id = bh.input.body?.tenant_id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary0(bh, parentSpanInst);
      //appendnew_next_setBody6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_efPVq0Prm9hn6WqR',
        spanInst,
        'setBody6'
      );
    }
  }

  async quoteSummary0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          bh.user_id,
          bh.tenant_id,
          bh.input.body.id,
          bh.input.body.reference_number,
          bh.input.body.query_mode
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_29hzQcOnzmvhJvIF(bh, parentSpanInst);
      //appendnew_next_quoteSummary0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GTi1EeI3FQB1t48d',
        spanInst,
        'quoteSummary0'
      );
    }
  }

  async sd_29hzQcOnzmvhJvIF(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.quote_summary);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_29hzQcOnzmvhJvIF');
    }
  }

  async setBody7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody7', parentSpanInst);
    try {
      bh.user_id = bh.input.body?.user_id;
      bh.tenant_id = bh.input.body?.tenant_id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_setBody7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TR8ybCde7de97JGy',
        spanInst,
        'setBody7'
      );
    }
  }

  async quoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          bh.user_id,
          bh.tenant_id,
          undefined,
          bh.input.body.reference_number,
          bh.input.body.query_mode
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Qe6irzudjuPiut7b(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2vGSN5yWODOC9Ogi',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async sd_Qe6irzudjuPiut7b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qe6irzudjuPiut7b',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs'); // If writing to a file is necessary

      bh.url = process.env.DOC_MS_URL + 'document/quote/summary/';

      bh.body = {
        quote_summary: bh.quote_summary,
      };

      bh.headers = {
        'Content-Type': 'application/json',
      };

      axios
        .post(bh.url, bh.body, {
          headers: {
            ...bh.headers,
          },
          responseType: 'stream', // Ensure response data is treated as a stream
        })
        .then((resp) => {
          const contentDisposition = resp.headers['content-disposition'];
          const contentType = resp.headers['content-type'];

          // Set response headers
          bh.web.res.setHeader('content-disposition', contentDisposition);
          bh.web.res.setHeader('Content-type', contentType);
          resp.data.pipe(bh.web.res);
        })
        .catch((error) => {
          console.error('Error:', error);
          bh.web.res.status(500).send('Internal Server Error');
        });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Qe6irzudjuPiut7b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qe6irzudjuPiut7b',
        spanInst,
        'sd_Qe6irzudjuPiut7b'
      );
    }
  }

  async setBody15(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody15', parentSpanInst);
    try {
      bh.user_id = bh.input.body?.user_id;
      bh.tenant_id = bh.input.body?.tenant_id;
      bh.to_status = 'PA';
      // bh.user_id = 45
      // bh.tenant_id = 22
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary3(bh, parentSpanInst);
      //appendnew_next_setBody15
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7DZii4H6brVOCHIX',
        spanInst,
        'setBody15'
      );
    }
  }

  async quoteSummary3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          bh.user_id,
          bh.tenant_id,
          bh.input.body.id,
          bh.input.body.reference_number,
          bh.input.body.query_mode
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lnyHM4VSMYrBGV7R(bh, parentSpanInst);
      //appendnew_next_quoteSummary3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BcrNwVOkLo4GBuag',
        spanInst,
        'quoteSummary3'
      );
    }
  }

  async sd_lnyHM4VSMYrBGV7R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lnyHM4VSMYrBGV7R',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.share_type,
          'List',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gRyJYy5LWqUA3SqT(bh, parentSpanInst);
      } else {
        bh = await this.sd_6g7xLfPV8Z3XvUKk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lnyHM4VSMYrBGV7R',
        spanInst,
        'sd_lnyHM4VSMYrBGV7R'
      );
    }
  }

  async sd_6g7xLfPV8Z3XvUKk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6g7xLfPV8Z3XvUKk',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_DBSTqqlAitvTXspgInstance: SSD_SERVICE_ID_sd_DBSTqqlAitvTXspg.email_flows =
        SSD_SERVICE_ID_sd_DBSTqqlAitvTXspg.email_flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DBSTqqlAitvTXspgInstance.quoteshareviaemail(
          spanInst,
          bh.quote_summary
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_DBSTqqlAitvTXspgInstance.sendSms(
          spanInst,
          bh.quote_summary
        )
      );

      bh.email_sms_response = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S4C7IIPyRE1Dpl1a(bh, parentSpanInst);
      //appendnew_next_sd_6g7xLfPV8Z3XvUKk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6g7xLfPV8Z3XvUKk',
        spanInst,
        'sd_6g7xLfPV8Z3XvUKk'
      );
    }
  }

  async sd_S4C7IIPyRE1Dpl1a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S4C7IIPyRE1Dpl1a',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.quote_summary.quote_details.status_id,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.updateCustomerDecision(bh, parentSpanInst);
      } else {
        bh = await this.setResponse16(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S4C7IIPyRE1Dpl1a',
        spanInst,
        'sd_S4C7IIPyRE1Dpl1a'
      );
    }
  }

  async updateCustomerDecision(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateCustomerDecision',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.updateCustomerDecision(
          spanInst,
          bh.to_status,
          bh.quote_summary?.quote_details?.reference_number,
          undefined
        );
      bh.result = outputVariables.local.result;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse17(bh, parentSpanInst);
      //appendnew_next_updateCustomerDecision
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E9eJ1sX7Rtc63BFx',
        spanInst,
        'updateCustomerDecision'
      );
    }
  }

  async setResponse17(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse17',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Email & SMS sent Successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_S6d4wGeR8AcXaEOC(bh, parentSpanInst);
      //appendnew_next_setResponse17
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p3NwaSFPT8bPUILO',
        spanInst,
        'setResponse17'
      );
    }
  }

  async sd_S6d4wGeR8AcXaEOC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S6d4wGeR8AcXaEOC');
    }
  }

  async setResponse16(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse16',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Email & SMS sent Successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_S6d4wGeR8AcXaEOC(bh, parentSpanInst);
      //appendnew_next_setResponse16
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ws0mqS95ZHYrpqgs',
        spanInst,
        'setResponse16'
      );
    }
  }

  async sd_gRyJYy5LWqUA3SqT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gRyJYy5LWqUA3SqT',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DBSTqqlAitvTXspgInstance: SSD_SERVICE_ID_sd_DBSTqqlAitvTXspg.email_flows =
        SSD_SERVICE_ID_sd_DBSTqqlAitvTXspg.email_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DBSTqqlAitvTXspgInstance.sendSms(
          spanInst,
          bh.quote_summary
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_S6d4wGeR8AcXaEOC(bh, parentSpanInst);
      //appendnew_next_sd_gRyJYy5LWqUA3SqT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gRyJYy5LWqUA3SqT',
        spanInst,
        'sd_gRyJYy5LWqUA3SqT'
      );
    }
  }

  async sd_DDrUVQpf0WRMmFmk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DDrUVQpf0WRMmFmk',
      parentSpanInst
    );
    try {
      bh.isValidPayload = !!bh.input.body['reference_number'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lHijWEkfXfGkdHyh(bh, parentSpanInst);
      //appendnew_next_sd_DDrUVQpf0WRMmFmk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DDrUVQpf0WRMmFmk',
        spanInst,
        'sd_DDrUVQpf0WRMmFmk'
      );
    }
  }

  async sd_lHijWEkfXfGkdHyh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lHijWEkfXfGkdHyh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.isValidPayload,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.quoteSummary4(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.isValidPayload,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QZIgAHc4NI9FzIws(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lHijWEkfXfGkdHyh',
        spanInst,
        'sd_lHijWEkfXfGkdHyh'
      );
    }
  }

  async quoteSummary4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary4',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          undefined,
          bh.input.body.reference_number,
          bh.input.body.query_mode
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cn7dpClNTgLwDecq(bh, parentSpanInst);
      //appendnew_next_quoteSummary4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XdjR5mTYKmHEOXFr',
        spanInst,
        'quoteSummary4'
      );
    }
  }

  async sd_cn7dpClNTgLwDecq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cn7dpClNTgLwDecq',
      parentSpanInst
    );
    try {
      bh.isQuoteSummaryInvalid =
        bh.quote_summary?.status == 'failed' || !!bh.quote_summary?.error;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bXJoWcMSUxHy7kuM(bh, parentSpanInst);
      //appendnew_next_sd_cn7dpClNTgLwDecq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cn7dpClNTgLwDecq',
        spanInst,
        'sd_cn7dpClNTgLwDecq'
      );
    }
  }

  async sd_bXJoWcMSUxHy7kuM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bXJoWcMSUxHy7kuM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.isQuoteSummaryInvalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.createBody(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.isQuoteSummaryInvalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QZIgAHc4NI9FzIws(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bXJoWcMSUxHy7kuM',
        spanInst,
        'sd_bXJoWcMSUxHy7kuM'
      );
    }
  }

  async createBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createBody',
      parentSpanInst
    );
    try {
      bh.body = {
        to:
          bh.quote_summary?.quote_details?.phone_country_code +
          bh.quote_summary?.quote_details?.phone_no,
        template_code: 'upload-vehicle-image',
        params: [
          {
            code: 'LINK',
            value:
              bh.input.body.link +
              bh.quote_summary?.quote_details?.reference_number,
          },
        ],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gzjKFAQGyvrMYDpg(bh, parentSpanInst);
      //appendnew_next_createBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GcdRxNPBgAfvvmqK',
        spanInst,
        'createBody'
      );
    }
  }

  async sd_gzjKFAQGyvrMYDpg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gzjKFAQGyvrMYDpg',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_m4BQHXoEAOdJhYawInstance: SSD_SERVICE_ID_sd_m4BQHXoEAOdJhYaw.sms_flow =
        SSD_SERVICE_ID_sd_m4BQHXoEAOdJhYaw.sms_flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_m4BQHXoEAOdJhYawInstance.sendSms(
          spanInst,
          bh.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_kMPxCDfnQIsoMRK5(bh, parentSpanInst);
      //appendnew_next_sd_gzjKFAQGyvrMYDpg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gzjKFAQGyvrMYDpg',
        spanInst,
        'sd_gzjKFAQGyvrMYDpg'
      );
    }
  }

  async sd_kMPxCDfnQIsoMRK5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kMPxCDfnQIsoMRK5');
    }
  }

  async sd_QZIgAHc4NI9FzIws(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QZIgAHc4NI9FzIws',
      parentSpanInst
    );
    try {
      bh.response = {
        status: false,
        error: 'Invalid Request',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kMPxCDfnQIsoMRK5(bh, parentSpanInst);
      //appendnew_next_sd_QZIgAHc4NI9FzIws
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QZIgAHc4NI9FzIws',
        spanInst,
        'sd_QZIgAHc4NI9FzIws'
      );
    }
  }

  async updateCusomerDecision(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateCusomerDecision',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.updateCustomerDecision(
          spanInst,
          bh.input.body['status'],
          bh.input.body['reference_number'],
          bh.input.body['source']
        );
      bh.result = outputVariables.local.result;
      bh.statusCode = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RWfsSEUOgiPxGexa(bh, parentSpanInst);
      //appendnew_next_updateCusomerDecision
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jAWhrBOyDMLDbRLE',
        spanInst,
        'updateCusomerDecision'
      );
    }
  }

  async sd_RWfsSEUOgiPxGexa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RWfsSEUOgiPxGexa',
      parentSpanInst
    );
    try {
      bh.status_code = 200;
      if (bh.result.status === true) {
        bh.result = { status: true };
        bh.status_code = 200;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PIuL0rKdHwqByMFE(bh, parentSpanInst);
      //appendnew_next_sd_RWfsSEUOgiPxGexa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RWfsSEUOgiPxGexa',
        spanInst,
        'sd_RWfsSEUOgiPxGexa'
      );
    }
  }

  async sd_PIuL0rKdHwqByMFE(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PIuL0rKdHwqByMFE');
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
  //appendnew_flow_quote_apis_Catch
}
