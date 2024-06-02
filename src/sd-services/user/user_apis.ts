// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa from './flows'; //_splitter_
//append_imports_end
export class user_apis {
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
    this.serviceName = 'user_apis';
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
      instance = new user_apis(
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
    //appendnew_flow_user_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: user_apis');
    //appendnew_flow_user_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: user_apis');

    this.app['post'](
      `${this.serviceBasePath}/user/list`,
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
          bh = await this.getUsersList(bh, parentSpanInst);
          //appendnew_next_sd_7IPV7fnwHuARGpRP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7IPV7fnwHuARGpRP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/user/filter_options`,
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
          bh = await this.getReportingTo(bh, parentSpanInst);
          //appendnew_next_sd_0A9VCwbeRkYm81KG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0A9VCwbeRkYm81KG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/user/managed_user`,
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
          bh = await this.getManagedByUser(bh, parentSpanInst);
          //appendnew_next_sd_Qr1NkS9fTmemUDmS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Qr1NkS9fTmemUDmS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_user_apis_HttpIn
  }
  //   service flows_user_apis

  //appendnew_flow_user_apis_start

  async getUsersList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getUsersList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_pscznEj3HfuOzaaaInstance: SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa.flows =
        SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_pscznEj3HfuOzaaaInstance.getUserList(
          spanInst,
          bh.input.body
        );
      bh.result = outputVariables.local.result;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_9hu6ybRwKzvzKSmX(bh, parentSpanInst);
      //appendnew_next_getUsersList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YqdugmCY85ycM9ex',
        spanInst,
        'getUsersList'
      );
    }
  }

  async sd_9hu6ybRwKzvzKSmX(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9hu6ybRwKzvzKSmX');
    }
  }

  async getReportingTo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getReportingTo',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_pscznEj3HfuOzaaaInstance: SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa.flows =
        SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_pscznEj3HfuOzaaaInstance.filterOptions(
          spanInst,
          bh.input.body.is_super_admin,
          bh.input.body.tenant_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_3ZearyDniGSLDGvw(bh, parentSpanInst);
      //appendnew_next_getReportingTo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vyHhxlEXWFBAXnPY',
        spanInst,
        'getReportingTo'
      );
    }
  }

  async sd_3ZearyDniGSLDGvw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3ZearyDniGSLDGvw');
    }
  }

  async getManagedByUser(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getManagedByUser',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_pscznEj3HfuOzaaaInstance: SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa.flows =
        SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_pscznEj3HfuOzaaaInstance.managedByUser(
          spanInst,
          bh.input.body.user_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_TXRH54HC3C4DNkUK(bh, parentSpanInst);
      //appendnew_next_getManagedByUser
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vmMwhxjczw3XL3aq',
        spanInst,
        'getManagedByUser'
      );
    }
  }

  async sd_TXRH54HC3C4DNkUK(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TXRH54HC3C4DNkUK');
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
  //appendnew_flow_user_apis_Catch
}
