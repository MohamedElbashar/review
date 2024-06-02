// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Middleware } from '../../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 from '../util/apigee_token_cache'; //_splitter_
//append_imports_end
export class middleware_flow {
  public clientInstance: any;
  public sadadClientInstance: any;
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
    this.serviceName = 'middleware_flow';
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
      instance = new middleware_flow(
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
    //appendnew_flow_middleware_flow_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: middleware_flow');
    let mw_authorize: Middleware = new Middleware(
      this.serviceName,
      'authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.getClientInstance(bh, parentSpanInst);
          //appendnew_next_sd_6DlGKqD0rsrwlPxU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6DlGKqD0rsrwlPxU');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['authorize'] = mw_authorize;
    let mw_sadad_authorize: Middleware = new Middleware(
      this.serviceName,
      'sadad_authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.getClientInstance1(bh, parentSpanInst);
          //appendnew_next_sd_onAHrA3SBR2PnIjN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_onAHrA3SBR2PnIjN');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['sadad_authorize'] =
      mw_sadad_authorize;
    //appendnew_flow_middleware_flow_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: middleware_flow');
    //appendnew_flow_middleware_flow_HttpIn
  }
  //   service flows_middleware_flow

  //appendnew_flow_middleware_flow_start

  async getClientInstance(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getClientInstance',
      parentSpanInst
    );
    try {
      bh.clientInstance = this.clientInstance;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateClient(bh, parentSpanInst);
      //appendnew_next_getClientInstance
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_48qKB2ySDXcnIub2',
        spanInst,
        'getClientInstance'
      );
    }
  }

  async validateClient(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateClient',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.clientInstance,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.valdiateToken(bh, parentSpanInst);
      } else {
        bh = await this.createClientInstance(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a9I3lr8kx6fykiRV',
        spanInst,
        'validateClient'
      );
    }
  }

  async createClientInstance(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createClientInstance',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.createClientInstance(
          spanInst,
          undefined
        );
      bh.clientInstance = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.valdiateToken(bh, parentSpanInst);
      //appendnew_next_createClientInstance
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VRJvNLN7tIW7woTi',
        spanInst,
        'createClientInstance'
      );
    }
  }

  async valdiateToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'valdiateToken',
      parentSpanInst
    );
    try {
      // const token = "AgWPlxtBDGWpiD5Xjjg0oEHJamqJAK7WuSJdjxhM_2e";
      try {
        let token = bh.web.req.headers.authorization;

        console.log('token', token);
        if (token !== undefined && token.startsWith('Bearer ')) {
          token = token.substring(7, token.length);
        } else {
          throw 'Token unavailable';
        }

        bh.introFnOut = await bh.clientInstance.introspect(
          token,
          'access_token'
        );
        console.log(bh.introFnOut);
        if (bh.introFnOut.active && bh.introFnOut.canAccess) {
          bh.execContinue = true;
        } else {
          bh.execContinue = false;
        }
      } catch (e) {
        bh.introFnOut = {
          active: false,
          canAccess: false,
          reason: e,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1IWU1SORFiadVw0B(bh, parentSpanInst);
      //appendnew_next_valdiateToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GEHP2iCYAMIc4IXN',
        spanInst,
        'valdiateToken'
      );
    }
  }

  async sd_1IWU1SORFiadVw0B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1IWU1SORFiadVw0B',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.execContinue,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2QcuCBqdgN3h4hDg(bh, parentSpanInst);
      } else {
        bh = await this.unauthAcCount(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1IWU1SORFiadVw0B',
        spanInst,
        'sd_1IWU1SORFiadVw0B'
      );
    }
  }

  async sd_2QcuCBqdgN3h4hDg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2QcuCBqdgN3h4hDg',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2QcuCBqdgN3h4hDg',
        spanInst,
        'sd_2QcuCBqdgN3h4hDg'
      );
    }
  }

  async unauthAcCount(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unauthAcCount',
      parentSpanInst
    );
    try {
      bh.web.res
        .status(401)
        .send({ status: 401, message: 'Unauthorized Account.' });
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SkRF7zohfG369XVV',
        spanInst,
        'unauthAcCount'
      );
    }
  }

  async getClientInstance1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getClientInstance1',
      parentSpanInst
    );
    try {
      bh.sadadClientInstance = this.sadadClientInstance;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateClient1(bh, parentSpanInst);
      //appendnew_next_getClientInstance1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JkyE0XagtVhoHQfi',
        spanInst,
        'getClientInstance1'
      );
    }
  }

  async validateClient1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateClient1',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.sadadClientInstance,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.valdiateToken1(bh, parentSpanInst);
      } else {
        bh = await this.createClientInstance1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QN8zllYak7ej153I',
        spanInst,
        'validateClient1'
      );
    }
  }

  async createClientInstance1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createClientInstance1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.createSadadCi(
          spanInst,
          bh.sadadClientInstance
        );
      bh.sadadClientInstance = outputVariables.input.sadadClientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.valdiateToken1(bh, parentSpanInst);
      //appendnew_next_createClientInstance1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PARlqjON3ZWPZli8',
        spanInst,
        'createClientInstance1'
      );
    }
  }

  async valdiateToken1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'valdiateToken1',
      parentSpanInst
    );
    try {
      // const token = "AgWPlxtBDGWpiD5Xjjg0oEHJamqJAK7WuSJdjxhM_2e";
      try {
        let token = bh.web.req.headers.authorization;

        console.log('token', token);
        if (token !== undefined && token.startsWith('Bearer ')) {
          token = token.substring(7, token.length);
        } else {
          throw 'Token unavailable';
        }

        bh.introFnOut = await bh.sadadClientInstance.introspect(
          token,
          'access_token'
        );
        console.log(bh.introFnOut);
        if (bh.introFnOut.active && bh.introFnOut.canAccess) {
          bh.execContinue = true;
        } else {
          bh.execContinue = false;
        }
      } catch (e) {
        bh.introFnOut = {
          active: false,
          canAccess: false,
          reason: e,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Nl9tGzRFJRqrtdyY(bh, parentSpanInst);
      //appendnew_next_valdiateToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zq0UMRImhASTLFxU',
        spanInst,
        'valdiateToken1'
      );
    }
  }

  async sd_Nl9tGzRFJRqrtdyY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Nl9tGzRFJRqrtdyY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.execContinue,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lfaqhft8axPCnoNP(bh, parentSpanInst);
      } else {
        bh = await this.unauthAcCount1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Nl9tGzRFJRqrtdyY',
        spanInst,
        'sd_Nl9tGzRFJRqrtdyY'
      );
    }
  }

  async sd_lfaqhft8axPCnoNP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lfaqhft8axPCnoNP',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lfaqhft8axPCnoNP',
        spanInst,
        'sd_lfaqhft8axPCnoNP'
      );
    }
  }

  async unauthAcCount1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unauthAcCount1',
      parentSpanInst
    );
    try {
      bh.web.res
        .status(401)
        .send({ status: 401, message: 'Unauthorized Account.' });
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1kxbYxas4LauOrh3',
        spanInst,
        'unauthAcCount1'
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
  //appendnew_flow_middleware_flow_Catch
}
