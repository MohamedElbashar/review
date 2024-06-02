// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_y00uR766CtzyXVq9 from '../addons/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo from '../driver/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU from './flows'; //_splitter_
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
      `${this.serviceBasePath}/quote/team_quotes`,
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
          bh = await this.getTeamQuote(bh, parentSpanInst);
          //appendnew_next_sd_bJWRzA5eAtTod9yM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bJWRzA5eAtTod9yM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/list`,
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
          bh = await this.getQuoteList(bh, parentSpanInst);
          //appendnew_next_sd_GcHJAkNywHfh3q3u
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GcHJAkNywHfh3q3u');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/filter_options`,
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
          bh = await this.getFilterOptions(bh, parentSpanInst);
          //appendnew_next_sd_xjBThNEp0e8LhIfv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xjBThNEp0e8LhIfv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/update-premium`,
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
          bh = await this.updatePremium(bh, parentSpanInst);
          //appendnew_next_sd_b7DZBzIeIFvG9J4E
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_b7DZBzIeIFvG9J4E');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_e5uXkmk0Ef8IamgS(bh, parentSpanInst);
          //appendnew_next_sd_Rd9MXZi35SZ1nPj6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Rd9MXZi35SZ1nPj6');
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
          bh = await this.updateQuoteStatus(bh, parentSpanInst);
          //appendnew_next_sd_D5KOpBsfCXBqyWsA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_D5KOpBsfCXBqyWsA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/customer/comment`,
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
          bh = await this.updateQuoteComment(bh, parentSpanInst);
          //appendnew_next_sd_hW3DkQaSJgfUG6Sl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hW3DkQaSJgfUG6Sl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/batch-update`,
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
          bh = await this.sd_DtUwYv6XaZFickVk(bh, parentSpanInst);
          //appendnew_next_sd_rt1I64XnA6dq1kP2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rt1I64XnA6dq1kP2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/create-ref-no`,
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
          bh = await this.getRefNo(bh, parentSpanInst);
          //appendnew_next_sd_E1eRsKPUCNDOkFP6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_E1eRsKPUCNDOkFP6');
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

  async getTeamQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTeamQuote',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.getTeamQuotes(
          spanInst,
          bh.input.body.user_id
        );
      bh.result = outputVariables.local.result;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SFWs7IuTvMKQxEBS(bh, parentSpanInst);
      //appendnew_next_getTeamQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9ZM1GytduMGvMTn6',
        spanInst,
        'getTeamQuote'
      );
    }
  }

  async sd_SFWs7IuTvMKQxEBS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SFWs7IuTvMKQxEBS',
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
        bh = await this.setStatusCode0(bh, parentSpanInst);
      } else {
        bh = await this.setStatusCode1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SFWs7IuTvMKQxEBS',
        spanInst,
        'sd_SFWs7IuTvMKQxEBS'
      );
    }
  }

  async setStatusCode0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setStatusCode0',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N7ttP5WeGvEfaivt(bh, parentSpanInst);
      //appendnew_next_setStatusCode0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zw69SyyWODWTXd3m',
        spanInst,
        'setStatusCode0'
      );
    }
  }

  async sd_N7ttP5WeGvEfaivt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N7ttP5WeGvEfaivt');
    }
  }

  async setStatusCode1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setStatusCode1',
      parentSpanInst
    );
    try {
      bh.statusCode = 404;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N7ttP5WeGvEfaivt(bh, parentSpanInst);
      //appendnew_next_setStatusCode1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D0BKUTGKabGelgcp',
        spanInst,
        'setStatusCode1'
      );
    }
  }

  async getQuoteList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.getUserQuotes(
          spanInst,
          bh.input.body
        );
      bh.result = outputVariables.local.result;
      bh.statusCode = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_HHNKAOqXITCxf2jQ(bh, parentSpanInst);
      //appendnew_next_getQuoteList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aQJlLnRB4aDVKt0C',
        spanInst,
        'getQuoteList'
      );
    }
  }

  async sd_HHNKAOqXITCxf2jQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HHNKAOqXITCxf2jQ');
    }
  }

  async getFilterOptions(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getFilterOptions',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.getFilterOptions(
          spanInst,
          bh.input.body
        );
      bh.result = outputVariables.local.result;
      bh.statusCode = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ClDraqQvb6v1myPd(bh, parentSpanInst);
      //appendnew_next_getFilterOptions
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v2eddRy4oL92Z65j',
        spanInst,
        'getFilterOptions'
      );
    }
  }

  async sd_ClDraqQvb6v1myPd(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ClDraqQvb6v1myPd');
    }
  }

  async updatePremium(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePremium',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.updatePremium(
          spanInst,
          bh.input.body.quote_id,
          bh.input.body.premium,
          bh.input.body.risk_items,
          bh.input.body.add_ons
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_dZSTm82dJgOAbTwo(bh, parentSpanInst);
      //appendnew_next_updatePremium
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YbEN4qj0y5Z8NMV3',
        spanInst,
        'updatePremium'
      );
    }
  }

  async sd_dZSTm82dJgOAbTwo(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ status: true });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dZSTm82dJgOAbTwo');
    }
  }

  async sd_e5uXkmk0Ef8IamgS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e5uXkmk0Ef8IamgS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.query_mode,
          'ESKA',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PMI0QjaF8MTFI1pf(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.query_mode,
          'CA',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_D6vU4HLB7RwQFeB3(bh, parentSpanInst);
      } else {
        bh = await this.sd_upOgBglvhB6LoIhm(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e5uXkmk0Ef8IamgS',
        spanInst,
        'sd_e5uXkmk0Ef8IamgS'
      );
    }
  }

  async sd_PMI0QjaF8MTFI1pf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PMI0QjaF8MTFI1pf',
      parentSpanInst
    );
    try {
      if (bh.input.body.id) {
        bh.filter = {
          id: bh.input.body.id,
        };
      }

      if (bh.input.body.reference_number) {
        bh.filter = {
          reference_number: bh.input.body.reference_number,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.findQuote0(bh, parentSpanInst);
      //appendnew_next_sd_PMI0QjaF8MTFI1pf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PMI0QjaF8MTFI1pf',
        spanInst,
        'sd_PMI0QjaF8MTFI1pf'
      );
    }
  }

  async findQuote0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findQuote0',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.quote = await dmUtilsInst.find(
        '_EN_2988ntmb36',
        bh.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oB6LoxFalNQ4TPa4(bh, parentSpanInst);
      //appendnew_next_findQuote0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jV0I74grCZeHusK4',
        spanInst,
        'findQuote0'
      );
    }
  }

  async sd_oB6LoxFalNQ4TPa4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oB6LoxFalNQ4TPa4',
      parentSpanInst
    );
    try {
      bh.sendError = false;
      if (bh.quote.length === 0) {
        bh.sendError = true;
      } else {
        bh.quote = bh.quote[0];
      }
      bh.quote['addl_details'] = bh.quote['addl_details']
        ? JSON.parse(bh.quote['addl_details'])
        : {};
      bh.quote['premium_details'] = bh.quote['premium_details']
        ? JSON.parse(bh.quote['premium_details'])
        : {};
      bh.quote['eska_details'] = bh.quote['eska_details']
        ? JSON.parse(bh.quote['eska_details'])
        : {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6xCU3cZLgNPNEcK5(bh, parentSpanInst);
      //appendnew_next_sd_oB6LoxFalNQ4TPa4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oB6LoxFalNQ4TPa4',
        spanInst,
        'sd_oB6LoxFalNQ4TPa4'
      );
    }
  }

  async sd_6xCU3cZLgNPNEcK5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6xCU3cZLgNPNEcK5',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.sendError,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1fwZePKtXaF9skR0(bh, parentSpanInst);
      } else {
        bh = await this.sd_JAfvT4LXpYZ9sd2Q(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6xCU3cZLgNPNEcK5',
        spanInst,
        'sd_6xCU3cZLgNPNEcK5'
      );
    }
  }

  async sd_1fwZePKtXaF9skR0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1fwZePKtXaF9skR0',
      parentSpanInst
    );
    try {
      bh.filter = {
        quote_id: bh.quote.id,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRiskItem(bh, parentSpanInst);
      //appendnew_next_sd_1fwZePKtXaF9skR0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1fwZePKtXaF9skR0',
        spanInst,
        'sd_1fwZePKtXaF9skR0'
      );
    }
  }

  async getRiskItem(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRiskItem',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.risk_item = await dmUtilsInst.find(
        '_EN_5veonbjnp6',
        bh.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ieuOhmFkUYo388RR(bh, parentSpanInst);
      //appendnew_next_getRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zifw9ezEYbLn9ysm',
        spanInst,
        'getRiskItem'
      );
    }
  }

  async sd_ieuOhmFkUYo388RR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ieuOhmFkUYo388RR',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjoInstance: SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo.flows =
        SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjoInstance.getDriverList(
          spanInst,
          bh.quote.id
        )
      );
      const SSD_SERVICE_ID_sd_y00uR766CtzyXVq9Instance: SSD_SERVICE_ID_sd_y00uR766CtzyXVq9.flows =
        SSD_SERVICE_ID_sd_y00uR766CtzyXVq9.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_y00uR766CtzyXVq9Instance.getAddonsList(
          spanInst,
          bh.quote.id
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jYscZD60a0lbCGhE(bh, parentSpanInst);
      //appendnew_next_sd_ieuOhmFkUYo388RR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ieuOhmFkUYo388RR',
        spanInst,
        'sd_ieuOhmFkUYo388RR'
      );
    }
  }

  async sd_jYscZD60a0lbCGhE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jYscZD60a0lbCGhE',
      parentSpanInst
    );
    try {
      const currentDate = new Date();
      const old_policy_expiry_date = new Date(
        bh.quote?.addl_details?.old_policy_expiry_date
      );
      bh.risk_item.forEach((risk) => {
        let upload_documents_check =
          bh.quote?.customer_type_id == 1 &&
          risk.product_code == 600461 &&
          [10].includes(risk.id_type)
            ? true
            : false;
        if (bh.quote.is_renewal) {
          if (old_policy_expiry_date < currentDate) {
            risk['is_upload_documents'] = upload_documents_check;
          } else {
            risk['is_upload_documents'] =
              upload_documents_check &&
              risk.product_code != risk.addl_details?.old_policy_product_code
                ? true
                : false;
          }
        } else {
          risk['is_upload_documents'] = upload_documents_check;
        }
      });
      bh.risk_item.forEach((x) => {
        x.addl_details = x.addl_details ? JSON.parse(x.addl_details) : {};
        x.premium_details = x.premium_details
          ? JSON.parse(x.premium_details)
          : {};
      });
      // bh.result[0].local.result.forEach(x => {
      //     x.addl_details = JSON.parse(x.addl_details)
      // })
      // let addons = []
      // bh.result[1].local.result.forEach(el => {
      //     let tempObj = {};
      //     tempObj = {
      //         "add_on_code" : el.SELECTED_ADD_ONS,
      //         "risk_id" : el.RISK_ID.split(','),
      //         "premium" : el.premium,
      //         "addl_details" : JSON.parse(el.ADDL_DETAILS_SUBSTR)
      //     }
      //     addons.push(tempObj)
      // })

      bh.response = {
        quote_details: bh.quote,
        risk_item_details: bh.risk_item,
        driver_details: bh.result[0].local.result,
        addons_details: bh.result[1].local.result,
      };
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N6g4FxzMYlG5H0bC(bh, parentSpanInst);
      //appendnew_next_sd_jYscZD60a0lbCGhE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jYscZD60a0lbCGhE',
        spanInst,
        'sd_jYscZD60a0lbCGhE'
      );
    }
  }

  async sd_N6g4FxzMYlG5H0bC(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N6g4FxzMYlG5H0bC');
    }
  }

  async sd_JAfvT4LXpYZ9sd2Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JAfvT4LXpYZ9sd2Q',
      parentSpanInst
    );
    try {
      bh.response = {
        status: 'failed',
        error: 'Unauthorized to view the quote',
      };
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N6g4FxzMYlG5H0bC(bh, parentSpanInst);
      //appendnew_next_sd_JAfvT4LXpYZ9sd2Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JAfvT4LXpYZ9sd2Q',
        spanInst,
        'sd_JAfvT4LXpYZ9sd2Q'
      );
    }
  }

  async sd_D6vU4HLB7RwQFeB3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_D6vU4HLB7RwQFeB3',
      parentSpanInst
    );
    try {
      if (bh.input.body.id) {
        bh.filter = {
          id: bh.input.body.id,
          // "phone_no" : bh.input.body.phone_no
        };
      }

      if (bh.input.body.reference_number) {
        bh.filter = {
          reference_number: bh.input.body.reference_number,
          // "phone_no" : bh.input.body.phone_no
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.findQuote1(bh, parentSpanInst);
      //appendnew_next_sd_D6vU4HLB7RwQFeB3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D6vU4HLB7RwQFeB3',
        spanInst,
        'sd_D6vU4HLB7RwQFeB3'
      );
    }
  }

  async findQuote1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findQuote1',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.quote = await dmUtilsInst.find(
        '_EN_2988ntmb36',
        bh.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mk6EcKi7CYNMdkdi(bh, parentSpanInst);
      //appendnew_next_findQuote1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jp21YBRvETvFKUJo',
        spanInst,
        'findQuote1'
      );
    }
  }

  async sd_mk6EcKi7CYNMdkdi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mk6EcKi7CYNMdkdi',
      parentSpanInst
    );
    try {
      bh.sendError = false;
      if (bh.quote.length === 0) {
        bh.sendError = true;
      } else {
        bh.quote = bh.quote[0];
      }

      bh.quote['addl_details'] = bh.quote['addl_details']
        ? JSON.parse(bh.quote['addl_details'])
        : {};
      bh.quote['premium_details'] = bh.quote['premium_details']
        ? JSON.parse(bh.quote['premium_details'])
        : {};
      bh.quote['eska_details'] = bh.quote['eska_details']
        ? JSON.parse(bh.quote['eska_details'])
        : {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6xCU3cZLgNPNEcK5(bh, parentSpanInst);
      //appendnew_next_sd_mk6EcKi7CYNMdkdi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mk6EcKi7CYNMdkdi',
        spanInst,
        'sd_mk6EcKi7CYNMdkdi'
      );
    }
  }

  async sd_upOgBglvhB6LoIhm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_upOgBglvhB6LoIhm',
      parentSpanInst
    );
    try {
      bh.sendError = false;
      if (!bh.input.body.user_id || !bh.input.body.tenant_id) {
        bh.sendError = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JkEIMVe20nwXtBju(bh, parentSpanInst);
      //appendnew_next_sd_upOgBglvhB6LoIhm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_upOgBglvhB6LoIhm',
        spanInst,
        'sd_upOgBglvhB6LoIhm'
      );
    }
  }

  async sd_JkEIMVe20nwXtBju(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JkEIMVe20nwXtBju',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.sendError,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getQuote(bh, parentSpanInst);
      } else {
        bh = await this.sd_JAfvT4LXpYZ9sd2Q(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JkEIMVe20nwXtBju',
        spanInst,
        'sd_JkEIMVe20nwXtBju'
      );
    }
  }

  async getQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getQuote', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.getQuote(
          spanInst,
          bh.input.body.user_id,
          bh.input.body.reference_number,
          bh.input.body.id,
          bh.input.body.tenant_id
        );
      bh.quote = outputVariables.local.quote;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zcqDfhzv7LhLUc7U(bh, parentSpanInst);
      //appendnew_next_getQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2C716KvKmkgnqrBd',
        spanInst,
        'getQuote'
      );
    }
  }

  async sd_zcqDfhzv7LhLUc7U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zcqDfhzv7LhLUc7U',
      parentSpanInst
    );
    try {
      bh.sendError = false;
      if (!bh.quote.id) {
        bh.sendError = true;
      }
      bh.quote['addl_details'] = bh.quote['addl_details']
        ? JSON.parse(bh.quote['addl_details'])
        : {};
      bh.quote['premium_details'] = bh.quote['premium_details']
        ? JSON.parse(bh.quote['premium_details'])
        : {};
      bh.quote['eska_details'] = bh.quote['eska_details']
        ? JSON.parse(bh.quote['eska_details'])
        : {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6xCU3cZLgNPNEcK5(bh, parentSpanInst);
      //appendnew_next_sd_zcqDfhzv7LhLUc7U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zcqDfhzv7LhLUc7U',
        spanInst,
        'sd_zcqDfhzv7LhLUc7U'
      );
    }
  }

  async updateQuoteStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateQuoteStatus',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.updateQuoteStatus(
          spanInst,
          bh.input.body.reference_number,
          bh.input.body.status_code,
          bh.input.body['source']
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_updateQuoteStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EIps1U7mtJsRZh32',
        spanInst,
        'updateQuoteStatus'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = {
        status: bh.status,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_QMAfZKqRfM6sYF8n(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_813Yio6qRCsUodQn',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_QMAfZKqRfM6sYF8n(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QMAfZKqRfM6sYF8n');
    }
  }

  async updateQuoteComment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateQuoteComment',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.updateQuoteComment(
          spanInst,
          bh.input.body.reference_number,
          bh.input.body.comment
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_updateQuoteComment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BQ3q2JrBKl2NBx7z',
        spanInst,
        'updateQuoteComment'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.response = {
        status: bh.status,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_37kgMWnmBjN3nVsQ(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lXdt2GbFJMt2BFMT',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_37kgMWnmBjN3nVsQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_37kgMWnmBjN3nVsQ');
    }
  }

  async sd_DtUwYv6XaZFickVk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DtUwYv6XaZFickVk',
      parentSpanInst
    );
    try {
      // let currentDate = new Date();

      // // currentDate.setDate(currentDate.getDate() - 12);
      // currentDate.setHours(currentDate.getHours() - 6);
      // let formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
      // let formattedCurrentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

      // bh.query = `UPDATE "quote"
      //             SET "status_id" = 8 , "updated_date" = TO_TIMESTAMP('${formattedCurrentDate}', 'YYYY-MM-DD HH24:MI:SS')
      //             WHERE "updated_date" < TO_TIMESTAMP('${formattedDate}', 'YYYY-MM-DD HH24:MI:SS') AND "status_id" = 1`;

      // // add this to update query after testing --> , "updated_date" = TO_TIMESTAMP('${formattedCurrentDate}', 'YYYY-MM-DD HH24:MI:SS')

      // //QUOTE_EXPIRY_DAYS_DEFAULT_DROP
      // bh.query = `UPDATE "quote"
      // SET "status_id" = 10 , "updated_date" = CURRENT_TIMESTAMP
      // WHERE "updated_date" < CURRENT_TIMESTAMP - INTERVAL '3' DAY AND "status_id" = 8`

      // //QUOTE_EXPIRY_DAYS_DEFAULT_REJECT
      // bh.query = `UPDATE "quote"
      // SET "status_id" = 10 , "updated_date" = CURRENT_TIMESTAMP
      // WHERE "updated_date" < CURRENT_TIMESTAMP - INTERVAL '3' DAY AND "status_id" = 9`

      //Combined query
      bh.query = `UPDATE "quote" 
SET 
    "status_id" = 
        CASE 
            WHEN "status_id" = 1 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" * (1/24) FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_HR_DEFAULT_DRAFT') THEN 8 
            WHEN "status_id" != 10 AND "customer_type_id" = 1 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_IND') THEN 10 
            WHEN "status_id" != 10 AND "customer_type_id" = 2 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_SME') THEN 10 
            WHEN "status_id" = 8 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_DROP') THEN 10 
            WHEN "status_id" = 9 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_REJECT') THEN 10 
            ELSE "status_id" 
        END
--    "updated_date" = CURRENT_TIMESTAMP
WHERE 
    ("status_id" = 1 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" * (1/24) FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_HR_DEFAULT_DRAFT'))
    OR ("status_id" != 10 AND "customer_type_id" = 1 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_IND'))
    OR ("status_id" != 10 AND "customer_type_id" = 2 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_SME'))
    OR ("status_id" = 8 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_DROP'))
    OR ("status_id" = 9 AND "updated_date" < CURRENT_TIMESTAMP - (SELECT "value" FROM "system_setting" WHERE "code" = 'QUOTE_EXPIRY_DAYS_DEFAULT_REJECT'))`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2NHINaIy2P7sm0cU(bh, parentSpanInst);
      //appendnew_next_sd_DtUwYv6XaZFickVk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DtUwYv6XaZFickVk',
        spanInst,
        'sd_DtUwYv6XaZFickVk'
      );
    }
  }

  async sd_2NHINaIy2P7sm0cU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2NHINaIy2P7sm0cU',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7x57vczK8BKALy2d'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aTiN2GjU6vKtFCwC(bh, parentSpanInst);
      //appendnew_next_sd_2NHINaIy2P7sm0cU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2NHINaIy2P7sm0cU',
        spanInst,
        'sd_2NHINaIy2P7sm0cU'
      );
    }
  }

  async sd_aTiN2GjU6vKtFCwC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aTiN2GjU6vKtFCwC',
      parentSpanInst
    );
    try {
      if (bh.local.result > 0) {
        bh.response = {
          message: 'Updated ' + bh.local.result + ' Records',
        };
      } else {
        bh.response = {
          message: 'No records updated',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gBjFqOjXNjlUvXT8(bh, parentSpanInst);
      //appendnew_next_sd_aTiN2GjU6vKtFCwC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aTiN2GjU6vKtFCwC',
        spanInst,
        'sd_aTiN2GjU6vKtFCwC'
      );
    }
  }

  async sd_gBjFqOjXNjlUvXT8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gBjFqOjXNjlUvXT8');
    }
  }

  async getRefNo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getRefNo', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance: SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows =
        SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGUInstance.createQuoteReference(
          spanInst
        );
      bh.reference_number = outputVariables.local.reference_number;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ti0ND34t2tHmUBXR(bh, parentSpanInst);
      //appendnew_next_getRefNo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VkulmAIKXB4xQbjZ',
        spanInst,
        'getRefNo'
      );
    }
  }

  async sd_Ti0ND34t2tHmUBXR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ti0ND34t2tHmUBXR',
      parentSpanInst
    );
    try {
      bh.response = {
        reference_number: bh.reference_number,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CTUAZ1rsF8hAjFM5(bh, parentSpanInst);
      //appendnew_next_sd_Ti0ND34t2tHmUBXR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ti0ND34t2tHmUBXR',
        spanInst,
        'sd_Ti0ND34t2tHmUBXR'
      );
    }
  }

  async sd_CTUAZ1rsF8hAjFM5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CTUAZ1rsF8hAjFM5');
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
