// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1 from './flows'; //_splitter_
//append_imports_end
export class case_service_apis {
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
    this.serviceName = 'case_service_apis';
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
      instance = new case_service_apis(
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
    //appendnew_flow_case_service_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: case_service_apis');
    //appendnew_flow_case_service_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: case_service_apis');

    this.app['post'](
      `${this.serviceBasePath}/case-service/case/definition/create`,
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
          bh = await this.prepReq1(bh, parentSpanInst);
          //appendnew_next_sd_GivslpU3Q1A1AQjw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GivslpU3Q1A1AQjw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/case-service/case/definition/fetch-by-case-type`,
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
          bh = await this.prepReq2(bh, parentSpanInst);
          //appendnew_next_sd_ayuhSHcJnwQI3X7D
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ayuhSHcJnwQI3X7D');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/case-service/case/instance/create`,
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
          bh = await this.prepReq3(bh, parentSpanInst);
          //appendnew_next_sd_Gsaj6Jde3pZjc9ec
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Gsaj6Jde3pZjc9ec');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/case-service/case/instance/signal/send`,
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
          bh = await this.prepReq4(bh, parentSpanInst);
          //appendnew_next_sd_UTz8HZlpMKxIQ4UF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UTz8HZlpMKxIQ4UF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/case-service/case/instance/signal/fetch`,
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
          bh = await this.prepReq5(bh, parentSpanInst);
          //appendnew_next_sd_cQdGUnUSkZxBMY5z
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cQdGUnUSkZxBMY5z');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/case-service/case/instance/signal/save`,
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
          bh = await this.prepReq6(bh, parentSpanInst);
          //appendnew_next_sd_Qqx4UGZd5l9pF2eb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Qqx4UGZd5l9pF2eb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_case_service_apis_HttpIn
  }
  //   service flows_case_service_apis

  //appendnew_flow_case_service_apis_start

  async prepReq1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq1', parentSpanInst);
    try {
      bh.body = {
        caseDefinitionSchema: {
          caseSchema: bh.input.body.caseDefinitionSchema.caseSchema,
          pdid: bh.input.body.caseDefinitionSchema.pdid,
          active: bh.input.body.caseDefinitionSchema.active || true,
        },
        caseType: bh.input.body.caseType,
        version: bh.input.body?.version || '',
      };
      log.info(
        `[CREATE_CASE_DEFINITION][BODY][${JSON.stringify(bh.body)}][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.callservice1(bh, parentSpanInst);
      //appendnew_next_prepReq1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H44JzuSVL8dYh8MK',
        spanInst,
        'prepReq1'
      );
    }
  }

  async callservice1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callservice1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance: SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows =
        SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance.createCaseDefinition(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log1(bh, parentSpanInst);
      //appendnew_next_callservice1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YKxBNyqY6aIHJAng',
        spanInst,
        'callservice1'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[CREATE_CASE_DEFINITION][BODY][${JSON.stringify(
          bh.body
        )}][RESPONSE::${JSON.stringify(bh.local.result.payload)}][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1dd526CDojWRkPSJ(bh, parentSpanInst);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CUH2CFcLWHbNdijN',
        spanInst,
        'log1'
      );
    }
  }

  async sd_1dd526CDojWRkPSJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1dd526CDojWRkPSJ');
    }
  }

  async prepReq2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq2', parentSpanInst);
    try {
      bh.body = {
        caseType: bh.input.body.caseType,
      };

      log.info(
        `[CASE_DEFINITION_FETCH_BY_CASE_TYPE][BODY][${JSON.stringify(
          bh.body
        )}][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callservice2(bh, parentSpanInst);
      //appendnew_next_prepReq2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JdfPqdcQlRrPaCqa',
        spanInst,
        'prepReq2'
      );
    }
  }

  async callservice2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callservice2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance: SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows =
        SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance.caseDefinitionFetchByCaseType(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log2(bh, parentSpanInst);
      //appendnew_next_callservice2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_06O5HOmHx9bnRuN2',
        spanInst,
        'callservice2'
      );
    }
  }

  async log2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log2', parentSpanInst);
    try {
      log.info(
        `[CASE_DEFINITION_FETCH_BY_CASE_TYPE][BODY][${JSON.stringify(
          bh.body
        )}][RESPONSE::${JSON.stringify(bh.local.result.payload)}][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ynXl5J33NOMt2SbN(bh, parentSpanInst);
      //appendnew_next_log2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EDGtKSTtmTTwl1FJ',
        spanInst,
        'log2'
      );
    }
  }

  async sd_ynXl5J33NOMt2SbN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ynXl5J33NOMt2SbN');
    }
  }

  async prepReq3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq3', parentSpanInst);
    try {
      bh.body = {
        caseType: bh.input.body.caseType,
        caseData: bh.input.body?.caseData || {},
        wfData: bh.input.body?.wfData || {},
      };

      log.info(`[CREATE_INSTANCE][BODY][${JSON.stringify(bh.body)}][START]`);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callservice3(bh, parentSpanInst);
      //appendnew_next_prepReq3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IOPNMZZMZ3cncVnl',
        spanInst,
        'prepReq3'
      );
    }
  }

  async callservice3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callservice3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance: SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows =
        SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance.createCaseInstance(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log3(bh, parentSpanInst);
      //appendnew_next_callservice3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TqwLqEFICTsG0czK',
        spanInst,
        'callservice3'
      );
    }
  }

  async log3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log3', parentSpanInst);
    try {
      log.info(
        `[CREATE_INSTANCE][BODY][${JSON.stringify(
          bh.body
        )}][RESPONSE::${JSON.stringify(bh.local.result.payload)}][END]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kimwqzWmJ5poixdw(bh, parentSpanInst);
      //appendnew_next_log3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sG9V429B4zovKW4p',
        spanInst,
        'log3'
      );
    }
  }

  async sd_kimwqzWmJ5poixdw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kimwqzWmJ5poixdw');
    }
  }

  async sd_pNa85LvFL4rzVhYG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pNa85LvFL4rzVhYG',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Error while creating case definition!',
        error: bh.error?.stack || bh.error?.message || bh.error,
      };

      log.info(
        `[CREATE_CASE_DEFINITION][PAYLOAD:${JSON.stringify(
          bh.input.body
        )}][ERROR][${
          bh.error?.stack || bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2hAnWi1vzIUkk22A(bh, parentSpanInst);
      //appendnew_next_sd_pNa85LvFL4rzVhYG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pNa85LvFL4rzVhYG',
        spanInst,
        'sd_pNa85LvFL4rzVhYG'
      );
    }
  }

  async sd_2hAnWi1vzIUkk22A(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2hAnWi1vzIUkk22A');
    }
  }

  async sd_8qaqZodRLzi0lWIb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8qaqZodRLzi0lWIb',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Error while fetching CaseDefinition by CaseType',
        error: bh.error?.stack || bh.error?.message || bh.error,
      };

      log.info(
        `[CASE_DEFINITION_FETCH_BY_CASE_TYPE][PAYLOAD:${JSON.stringify(
          bh.input.body
        )}][ERROR][${
          bh.error?.stack || bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NOpj7NDuke3JvZ8c(bh, parentSpanInst);
      //appendnew_next_sd_8qaqZodRLzi0lWIb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8qaqZodRLzi0lWIb',
        spanInst,
        'sd_8qaqZodRLzi0lWIb'
      );
    }
  }

  async sd_NOpj7NDuke3JvZ8c(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NOpj7NDuke3JvZ8c');
    }
  }

  async sd_W2e033QbUe1Ip9eI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W2e033QbUe1Ip9eI',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Error while creating case Instance!',
        error: bh.error?.stack || bh.error?.message || bh.error,
      };

      log.info(
        `[CREATE_INSTANCE][PAYLOAD:${JSON.stringify(bh.input.body)}][ERROR][${
          bh.error?.stack || bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_056GSyJXJb2WWSfc(bh, parentSpanInst);
      //appendnew_next_sd_W2e033QbUe1Ip9eI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W2e033QbUe1Ip9eI',
        spanInst,
        'sd_W2e033QbUe1Ip9eI'
      );
    }
  }

  async sd_056GSyJXJb2WWSfc(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_056GSyJXJb2WWSfc');
    }
  }

  async prepReq4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq4', parentSpanInst);
    try {
      log.info(
        `[CID::${bh.input.body.cid}][SEND_SIGNAL][START][${JSON.stringify(
          bh.body
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callservice4(bh, parentSpanInst);
      //appendnew_next_prepReq4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_StFsLCsgiakjWVrk',
        spanInst,
        'prepReq4'
      );
    }
  }

  async callservice4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callservice4',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance: SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows =
        SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance.sendSignal(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log4(bh, parentSpanInst);
      //appendnew_next_callservice4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uK58WK51QLljuqCF',
        spanInst,
        'callservice4'
      );
    }
  }

  async log4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log4', parentSpanInst);
    try {
      log.info(
        `[CID::${bh.input.body.cid}][SEND_SIGNAL][END][RESULT][${JSON.stringify(
          bh.local.result.payload
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rt57NmIIfxclmszg(bh, parentSpanInst);
      //appendnew_next_log4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D0eXVDQ9F9ks3xUR',
        spanInst,
        'log4'
      );
    }
  }

  async sd_rt57NmIIfxclmszg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rt57NmIIfxclmszg');
    }
  }

  async sd_rBE2FnOEHG5oCdL8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rBE2FnOEHG5oCdL8',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Error while sending signal!',
        error: bh.error?.stack || bh.error?.message || bh.error,
      };

      log.info(
        `[SEND_SIGNAL][PAYLOAD:${JSON.stringify(bh.input.body)}][ERROR][${
          bh.error?.stack || bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VLrQUYKSvo2K1V8y(bh, parentSpanInst);
      //appendnew_next_sd_rBE2FnOEHG5oCdL8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rBE2FnOEHG5oCdL8',
        spanInst,
        'sd_rBE2FnOEHG5oCdL8'
      );
    }
  }

  async sd_VLrQUYKSvo2K1V8y(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VLrQUYKSvo2K1V8y');
    }
  }

  async prepReq5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq5', parentSpanInst);
    try {
      log.info(
        `[CID::${bh.input.body.cid}][FETCH_SIGNAL][START][${JSON.stringify(
          bh.body
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callservice5(bh, parentSpanInst);
      //appendnew_next_prepReq5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GlfsXTu5BbUfmvOV',
        spanInst,
        'prepReq5'
      );
    }
  }

  async callservice5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callservice5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance: SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows =
        SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance.fetchSignal(
          spanInst,
          bh.input.body.cid
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log5(bh, parentSpanInst);
      //appendnew_next_callservice5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QNXqn9qhzjVolTLB',
        spanInst,
        'callservice5'
      );
    }
  }

  async log5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log5', parentSpanInst);
    try {
      log.info(
        `[CID::${
          bh.input.body.cid
        }][FECTH_SIGNAL][END][RESULT][${JSON.stringify(
          bh.local.result.payload
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_l10v4dQeEYkvekLN(bh, parentSpanInst);
      //appendnew_next_log5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Es4V9Fn6ib7ZaqBS',
        spanInst,
        'log5'
      );
    }
  }

  async sd_l10v4dQeEYkvekLN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l10v4dQeEYkvekLN');
    }
  }

  async sd_3YRKmPmYMX2r6ovG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3YRKmPmYMX2r6ovG',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Error while fetching signal!',
        error: bh.error?.stack || bh.error?.message || bh.error,
      };

      log.info(
        `[SIGNAL_FETCH][PAYLOAD:${JSON.stringify(bh.input.body)}][ERROR][${
          bh.error?.stack || bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AL6ojpFX0sHj0Dye(bh, parentSpanInst);
      //appendnew_next_sd_3YRKmPmYMX2r6ovG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3YRKmPmYMX2r6ovG',
        spanInst,
        'sd_3YRKmPmYMX2r6ovG'
      );
    }
  }

  async sd_AL6ojpFX0sHj0Dye(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AL6ojpFX0sHj0Dye');
    }
  }

  async prepReq6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('prepReq6', parentSpanInst);
    try {
      log.info(
        `[CID::${bh.input.body.cid}][SAVE_SIGNAL][START][${JSON.stringify(
          bh.input.body
        )}]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callservice6(bh, parentSpanInst);
      //appendnew_next_prepReq6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3VDUneNdC7lvSej5',
        spanInst,
        'prepReq6'
      );
    }
  }

  async callservice6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callservice6',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance: SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows =
        SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1Instance.saveSignal(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log6(bh, parentSpanInst);
      //appendnew_next_callservice6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CjBvOaupGkuLsGER',
        spanInst,
        'callservice6'
      );
    }
  }

  async log6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log6', parentSpanInst);
    try {
      bh.result = bh.local?.result?.payload || {};
      log.info(
        `[CID::${bh.input.body.cid}][SAVE_SIGNAL][END][RESULT][${JSON.stringify(
          bh.local?.result?.payload
        )}]`
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Qh6vkl9REdiHCtql(bh, parentSpanInst);
      //appendnew_next_log6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MJ5VDkHQuoEidgwV',
        spanInst,
        'log6'
      );
    }
  }

  async sd_Qh6vkl9REdiHCtql(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qh6vkl9REdiHCtql');
    }
  }

  async sd_ihcVagNUQrggbGea(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ihcVagNUQrggbGea',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Error while saving signal!',
        error: bh.error?.stack || bh.error?.message || bh.error,
      };

      log.info(
        `[SAVE_SIGNAL][PAYLOAD:${JSON.stringify(bh.input.body)}][ERROR][${
          bh.error?.stack || bh.error?.message || JSON.stringify(bh.error)
        }]`
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kTkMWL3IXQ9sStfE(bh, parentSpanInst);
      //appendnew_next_sd_ihcVagNUQrggbGea
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ihcVagNUQrggbGea',
        spanInst,
        'sd_ihcVagNUQrggbGea'
      );
    }
  }

  async sd_kTkMWL3IXQ9sStfE(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kTkMWL3IXQ9sStfE');
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
      (await this.catchCreateCaseDefinition(bh, parentSpanInst)) ||
      (await this.catchCaseDefinitionFetchByCaseType(bh, parentSpanInst)) ||
      (await this.catchCreateCaseInstance(bh, parentSpanInst)) ||
      (await this.catchSendSignal(bh, parentSpanInst)) ||
      (await this.catchFetchSignal(bh, parentSpanInst)) ||
      (await this.catchASaveSignal(bh, parentSpanInst))
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
  async catchCreateCaseDefinition(bh, parentSpanInst) {
    const nodes = [
      'sd_H44JzuSVL8dYh8MK',
      'sd_YKxBNyqY6aIHJAng',
      'sd_CUH2CFcLWHbNdijN',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_pNa85LvFL4rzVhYG(bh, parentSpanInst);
      //appendnew_next_catchCreateCaseDefinition
      return true;
    }
    return false;
  }
  async catchCaseDefinitionFetchByCaseType(bh, parentSpanInst) {
    const nodes = [
      'sd_JdfPqdcQlRrPaCqa',
      'sd_06O5HOmHx9bnRuN2',
      'sd_EDGtKSTtmTTwl1FJ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8qaqZodRLzi0lWIb(bh, parentSpanInst);
      //appendnew_next_catchCaseDefinitionFetchByCaseType
      return true;
    }
    return false;
  }
  async catchCreateCaseInstance(bh, parentSpanInst) {
    const nodes = [
      'sd_IOPNMZZMZ3cncVnl',
      'sd_TqwLqEFICTsG0czK',
      'sd_sG9V429B4zovKW4p',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_W2e033QbUe1Ip9eI(bh, parentSpanInst);
      //appendnew_next_catchCreateCaseInstance
      return true;
    }
    return false;
  }
  async catchSendSignal(bh, parentSpanInst) {
    const nodes = [
      'sd_Es4V9Fn6ib7ZaqBS',
      'sd_QNXqn9qhzjVolTLB',
      'sd_GlfsXTu5BbUfmvOV',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_rBE2FnOEHG5oCdL8(bh, parentSpanInst);
      //appendnew_next_catchSendSignal
      return true;
    }
    return false;
  }
  async catchFetchSignal(bh, parentSpanInst) {
    const nodes = [
      'sd_Es4V9Fn6ib7ZaqBS',
      'sd_QNXqn9qhzjVolTLB',
      'sd_GlfsXTu5BbUfmvOV',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_3YRKmPmYMX2r6ovG(bh, parentSpanInst);
      //appendnew_next_catchFetchSignal
      return true;
    }
    return false;
  }
  async catchASaveSignal(bh, parentSpanInst) {
    const nodes = [
      'sd_MJ5VDkHQuoEidgwV',
      'sd_CjBvOaupGkuLsGER',
      'sd_3VDUneNdC7lvSej5',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ihcVagNUQrggbGea(bh, parentSpanInst);
      //appendnew_next_catchASaveSignal
      return true;
    }
    return false;
  }
  //appendnew_flow_case_service_apis_Catch
}
