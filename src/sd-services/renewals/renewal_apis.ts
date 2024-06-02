// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt from './flows'; //_splitter_
//append_imports_end
export class renewal_apis {
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
    this.serviceName = 'renewal_apis';
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
      instance = new renewal_apis(
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
    //appendnew_flow_renewal_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: renewal_apis');
    //appendnew_flow_renewal_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: renewal_apis');

    this.app['post'](
      `${this.serviceBasePath}/policy/data`,
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
          bh = await this.getPolicyData(bh, parentSpanInst);
          //appendnew_next_sd_f5ndrKgV2kC2vVxb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_f5ndrKgV2kC2vVxb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/subjects`,
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
          bh = await this.getSubjectsData(bh, parentSpanInst);
          //appendnew_next_sd_fQzABCF6QgwHDkpa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fQzABCF6QgwHDkpa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/covers`,
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
          bh = await this.getCoverData(bh, parentSpanInst);
          //appendnew_next_sd_3IgNgBF6nb7Gf3eW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3IgNgBF6nb7Gf3eW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/driver`,
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
          bh = await this.getDriverData(bh, parentSpanInst);
          //appendnew_next_sd_X2wHmi120Nc5uGOe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_X2wHmi120Nc5uGOe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/renewal/list`,
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
          bh = await this.getRenewalsData(bh, parentSpanInst);
          //appendnew_next_sd_GZ1lKGiXpyAtr4qi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GZ1lKGiXpyAtr4qi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/renewals/filter_options`,
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
          bh = await this.sd_sFpBZrSweqRRTqe8(bh, parentSpanInst);
          //appendnew_next_sd_X26VjaZ9u7axqa6y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_X26VjaZ9u7axqa6y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_renewal_apis_HttpIn
  }
  //   service flows_renewal_apis

  //appendnew_flow_renewal_apis_start

  async getPolicyData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance: SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows =
        SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance.getPolicyData(
          spanInst,
          bh.input.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_srsaNzHi0d3GPEGn(bh, parentSpanInst);
      //appendnew_next_getPolicyData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i8ghjMQuwrLt2vky',
        spanInst,
        'getPolicyData'
      );
    }
  }

  async sd_srsaNzHi0d3GPEGn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_srsaNzHi0d3GPEGn');
    }
  }

  async getSubjectsData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSubjectsData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance: SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows =
        SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance.getSubjectsData(
          spanInst,
          bh.input.body.policy_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_lZJ3mwmCsZ5KCQes(bh, parentSpanInst);
      //appendnew_next_getSubjectsData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XqMIw1DBzZQPwznE',
        spanInst,
        'getSubjectsData'
      );
    }
  }

  async sd_lZJ3mwmCsZ5KCQes(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lZJ3mwmCsZ5KCQes');
    }
  }

  async getCoverData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCoverData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance: SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows =
        SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance.getCoversData(
          spanInst,
          bh.input.body.policy_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_UeRYs0PTd4sCCwvk(bh, parentSpanInst);
      //appendnew_next_getCoverData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_krMw7NgAxvJDbBYO',
        spanInst,
        'getCoverData'
      );
    }
  }

  async sd_UeRYs0PTd4sCCwvk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UeRYs0PTd4sCCwvk');
    }
  }

  async getDriverData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDriverData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance: SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows =
        SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance.getDriversData(
          spanInst,
          bh.input.body.policy_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_mRfIm8ygK2j9W28c(bh, parentSpanInst);
      //appendnew_next_getDriverData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q0pitO1b05kRsIax',
        spanInst,
        'getDriverData'
      );
    }
  }

  async sd_mRfIm8ygK2j9W28c(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mRfIm8ygK2j9W28c');
    }
  }

  async getRenewalsData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRenewalsData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance: SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows =
        SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance.getRenewalList(
          spanInst,
          bh.input.body.agent_id,
          bh.input.body.filter,
          bh.input.body.orderBy,
          bh.input.body.pageSize,
          bh.input.body.offSet,
          bh.input.body.viewType,
          bh.input.body.teamPolicy,
          bh.input.body.user_id,
          bh.input.body.login_type
        );
      bh.result = outputVariables.local.result;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AkVJfxgJ6k8js4u3(bh, parentSpanInst);
      //appendnew_next_getRenewalsData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rJxiauUukvrNgR0D',
        spanInst,
        'getRenewalsData'
      );
    }
  }

  async sd_AkVJfxgJ6k8js4u3(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AkVJfxgJ6k8js4u3');
    }
  }

  async sd_sFpBZrSweqRRTqe8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sFpBZrSweqRRTqe8',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance: SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows =
        SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vtInstance.filterOptions(
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
      await this.sd_ErS9fagZOEaNGbFd(bh, parentSpanInst);
      //appendnew_next_sd_sFpBZrSweqRRTqe8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sFpBZrSweqRRTqe8',
        spanInst,
        'sd_sFpBZrSweqRRTqe8'
      );
    }
  }

  async sd_ErS9fagZOEaNGbFd(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ErS9fagZOEaNGbFd');
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
  //appendnew_flow_renewal_apis_Catch
}
