// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6 from './flows'; //_splitter_
//append_imports_end
export class addon_apis {
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
    this.serviceName = 'addon_apis';
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
      instance = new addon_apis(
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
    //appendnew_flow_addon_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addon_apis');
    //appendnew_flow_addon_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: addon_apis');

    this.app['post'](
      `${this.serviceBasePath}/addons/list`,
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
          bh = await this.addonsList(bh, parentSpanInst);
          //appendnew_next_sd_jD3C4df4DJJOaCwW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jD3C4df4DJJOaCwW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addons/create`,
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
          bh = await this.createAddons(bh, parentSpanInst);
          //appendnew_next_sd_QAKJetkMb1rNYe1J
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QAKJetkMb1rNYe1J');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addons/delete`,
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
          bh = await this.deleteRiskItem(bh, parentSpanInst);
          //appendnew_next_sd_pvrSG8YrmNy2oodj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pvrSG8YrmNy2oodj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_addon_apis_HttpIn
  }
  //   service flows_addon_apis

  //appendnew_flow_addon_apis_start

  async addonsList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addonsList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance: SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows =
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance.getAddOns(
          spanInst,
          bh.input.body.quote_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_addonsList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oU6Nm2QjGfTsMX9c',
        spanInst,
        'addonsList'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.response = bh.result;
      bh.statusCode = bh.response.length > 0 ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EwNOYDitakNuVVUt(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5IB4S8O8UgzivZhY',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_EwNOYDitakNuVVUt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EwNOYDitakNuVVUt');
    }
  }

  async createAddons(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createAddons',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance: SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows =
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance.createAddons(
          spanInst,
          bh.input.body.add_on_code,
          bh.input.body.premium,
          bh.input.body.addl_details,
          bh.input.body.risk_items
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_createAddons
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FeDxyUkqD83av0pb',
        spanInst,
        'createAddons'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = bh.result;
      bh.statusCode = bh.response.length > 0 ? 200 : bh.response.id ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_grqUfok387MSAQDC(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iFVgoJP6roTfJRvA',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_grqUfok387MSAQDC(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_grqUfok387MSAQDC');
    }
  }

  async deleteRiskItem(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteRiskItem',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance: SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows =
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance.deleteAddons(
          spanInst,
          bh.input.body.add_on_code,
          bh.input.body.risk_id,
          bh.input.body.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_deleteRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V0dVHxdB9DusssMT',
        spanInst,
        'deleteRiskItem'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      if (bh.result.affected > 0) {
        bh.response = bh.input.body;
        bh.statusCode = 200;
      } else {
        bh.response = {};
        bh.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_s1UOBtItAiJ06YiQ(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pL09eIpXXVUCL0UI',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_s1UOBtItAiJ06YiQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s1UOBtItAiJ06YiQ');
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
  //appendnew_flow_addon_apis_Catch
}
