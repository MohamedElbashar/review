// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw from './flows'; //_splitter_
//append_imports_end
export class policy_apis {
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
    this.serviceName = 'policy_apis';
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
      instance = new policy_apis(
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
    //appendnew_flow_policy_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: policy_apis');
    //appendnew_flow_policy_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: policy_apis');

    this.app['post'](
      `${this.serviceBasePath}/policy/list2`,
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
          bh = await this.sd_V0dNoxuuJHSWuVqy(bh, parentSpanInst);
          //appendnew_next_sd_AB3q8RyxOCXINHNa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AB3q8RyxOCXINHNa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/team-policy`,
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
          bh = await this.sd_qauviNdASNDFPoDZ(bh, parentSpanInst);
          //appendnew_next_sd_oFgCSJYeUQqYRhBw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oFgCSJYeUQqYRhBw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/list`,
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
          bh = await this.sd_HxMKMKeZHpeGQLkz(bh, parentSpanInst);
          //appendnew_next_sd_QUzOMxclH3i7I48B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QUzOMxclH3i7I48B');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/filter_options`,
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
          bh = await this.sd_egazTOsLjqoLYqNx(bh, parentSpanInst);
          //appendnew_next_sd_875vBJHVuFdKKjO1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_875vBJHVuFdKKjO1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_policy_apis_HttpIn
  }
  //   service flows_policy_apis

  //appendnew_flow_policy_apis_start

  async sd_V0dNoxuuJHSWuVqy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V0dNoxuuJHSWuVqy',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance: SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows =
        SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance.getAgentsData(
          spanInst,
          bh.input.body.agent_id
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rlkHD2H6p8N731Pt(bh, parentSpanInst);
      //appendnew_next_sd_V0dNoxuuJHSWuVqy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V0dNoxuuJHSWuVqy',
        spanInst,
        'sd_V0dNoxuuJHSWuVqy'
      );
    }
  }

  async sd_rlkHD2H6p8N731Pt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rlkHD2H6p8N731Pt',
      parentSpanInst
    );
    try {
      bh.policy_numbers = [];
      if (bh.response && bh.response.length) {
        bh.response.forEach((X) => {
          bh.policy_numbers.push(X.POLICY_NO);
        });
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tfsylpki3NVpRSha(bh, parentSpanInst);
      //appendnew_next_sd_rlkHD2H6p8N731Pt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rlkHD2H6p8N731Pt',
        spanInst,
        'sd_rlkHD2H6p8N731Pt'
      );
    }
  }

  async sd_tfsylpki3NVpRSha(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tfsylpki3NVpRSha',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gte'](
          bh.policy_numbers.length,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.getPolicyList(bh, parentSpanInst);
      } else {
        bh = await this.sd_LKL6EEPtsRrMJQhO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tfsylpki3NVpRSha',
        spanInst,
        'sd_tfsylpki3NVpRSha'
      );
    }
  }

  async getPolicyList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance: SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows =
        SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance.getPolicies2(
          spanInst,
          bh.input.body,
          bh.policy_numbers
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_5a9pAC1IEBfl5JX0(bh, parentSpanInst);
      //appendnew_next_getPolicyList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J3LWsZ4mxVKdIrnN',
        spanInst,
        'getPolicyList'
      );
    }
  }

  async sd_5a9pAC1IEBfl5JX0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5a9pAC1IEBfl5JX0');
    }
  }

  async sd_LKL6EEPtsRrMJQhO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send([]);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LKL6EEPtsRrMJQhO');
    }
  }

  async sd_qauviNdASNDFPoDZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qauviNdASNDFPoDZ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance: SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows =
        SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance.getGroupAgentsData(
          spanInst,
          bh.input.body.user_id
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f9BMLX9hzepzi41K(bh, parentSpanInst);
      //appendnew_next_sd_qauviNdASNDFPoDZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qauviNdASNDFPoDZ',
        spanInst,
        'sd_qauviNdASNDFPoDZ'
      );
    }
  }

  async sd_f9BMLX9hzepzi41K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f9BMLX9hzepzi41K',
      parentSpanInst
    );
    try {
      bh.policy_numbers = [];
      if (bh.response && bh.response.length) {
        bh.response.forEach((X) => {
          bh.policy_numbers.push(X.POLICY_NO);
        });
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_atqjh9WRzQjSlzVW(bh, parentSpanInst);
      //appendnew_next_sd_f9BMLX9hzepzi41K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f9BMLX9hzepzi41K',
        spanInst,
        'sd_f9BMLX9hzepzi41K'
      );
    }
  }

  async sd_atqjh9WRzQjSlzVW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_atqjh9WRzQjSlzVW',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gte'](
          bh.policy_numbers.length,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.getTeamPolicyList(bh, parentSpanInst);
      } else {
        bh = await this.sd_CsCNPzjMiA0ofTJ8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_atqjh9WRzQjSlzVW',
        spanInst,
        'sd_atqjh9WRzQjSlzVW'
      );
    }
  }

  async getTeamPolicyList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTeamPolicyList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance: SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows =
        SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance.getPolicies2(
          spanInst,
          bh.input.body,
          bh.policy_numbers
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_XZEz1tLaRHst8SEx(bh, parentSpanInst);
      //appendnew_next_getTeamPolicyList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PQXrzYjyREYCnsCT',
        spanInst,
        'getTeamPolicyList'
      );
    }
  }

  async sd_XZEz1tLaRHst8SEx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XZEz1tLaRHst8SEx');
    }
  }

  async sd_CsCNPzjMiA0ofTJ8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send([]);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CsCNPzjMiA0ofTJ8');
    }
  }

  async sd_HxMKMKeZHpeGQLkz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HxMKMKeZHpeGQLkz',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance: SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows =
        SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance.getPolicies(
          spanInst,
          bh.input.body.filter,
          bh.input.body.orderBy,
          bh.input.body.pageSize,
          bh.input.body.offSet,
          bh.input.body.viewType,
          bh.input.body.teamPolicy,
          bh.input.body.agent_id,
          bh.input.body.user_id,
          bh.input.body.login_type
        );
      bh.result = outputVariables.local.result;
      bh.statusCode = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_D8STEqv7aUAwxQM2(bh, parentSpanInst);
      //appendnew_next_sd_HxMKMKeZHpeGQLkz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HxMKMKeZHpeGQLkz',
        spanInst,
        'sd_HxMKMKeZHpeGQLkz'
      );
    }
  }

  async sd_D8STEqv7aUAwxQM2(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D8STEqv7aUAwxQM2');
    }
  }

  async sd_egazTOsLjqoLYqNx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_egazTOsLjqoLYqNx',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance: SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows =
        SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJwInstance.filterOptions(
          spanInst,
          bh.input.body.login_type,
          bh.input.body.agent_id,
          bh.input.body.viewType,
          bh.input.body.user_id,
          bh.input.body.teamPolicy
        );
      bh.statusCode = outputVariables.local.status;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_txJj4wA5gsFApsuw(bh, parentSpanInst);
      //appendnew_next_sd_egazTOsLjqoLYqNx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_egazTOsLjqoLYqNx',
        spanInst,
        'sd_egazTOsLjqoLYqNx'
      );
    }
  }

  async sd_txJj4wA5gsFApsuw(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_txJj4wA5gsFApsuw');
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
  //appendnew_flow_policy_apis_Catch
}
