// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_y00uR766CtzyXVq9 from './flows'; //_splitter_
//append_imports_end
export class addons_apis {
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
    this.serviceName = 'addons_apis';
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
      instance = new addons_apis(
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
    //appendnew_flow_addons_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addons_apis');
    //appendnew_flow_addons_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: addons_apis');

    this.app['post'](
      `${this.serviceBasePath}/addons/list-by-quote`,
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
          bh = await this.sd_aMiaW1SeiLG23kVB(bh, parentSpanInst);
          //appendnew_next_sd_bKwsKHN00P35191D
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bKwsKHN00P35191D');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addon-risk`,
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
          bh = await this.sd_99bGt7YSzy4Bby8I(bh, parentSpanInst);
          //appendnew_next_sd_PstQyTfUkLnFvtkA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PstQyTfUkLnFvtkA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_addons_apis_HttpIn
  }
  //   service flows_addons_apis

  //appendnew_flow_addons_apis_start

  async sd_aMiaW1SeiLG23kVB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aMiaW1SeiLG23kVB',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_y00uR766CtzyXVq9Instance: SSD_SERVICE_ID_sd_y00uR766CtzyXVq9.flows =
        SSD_SERVICE_ID_sd_y00uR766CtzyXVq9.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_y00uR766CtzyXVq9Instance.getAddonsList(
          spanInst,
          bh.input.body.quote_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_XZHYompfHLWRDdpm(bh, parentSpanInst);
      //appendnew_next_sd_aMiaW1SeiLG23kVB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aMiaW1SeiLG23kVB',
        spanInst,
        'sd_aMiaW1SeiLG23kVB'
      );
    }
  }

  async sd_XZHYompfHLWRDdpm(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XZHYompfHLWRDdpm');
    }
  }

  async sd_99bGt7YSzy4Bby8I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_99bGt7YSzy4Bby8I',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_y00uR766CtzyXVq9Instance: SSD_SERVICE_ID_sd_y00uR766CtzyXVq9.flows =
        SSD_SERVICE_ID_sd_y00uR766CtzyXVq9.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_y00uR766CtzyXVq9Instance.checkAddonRiskExists(
          spanInst,
          bh.input.body.addon_code,
          bh.input.body.risk_items
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_cEr5TkYqr2xVRXRQ(bh, parentSpanInst);
      //appendnew_next_sd_99bGt7YSzy4Bby8I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_99bGt7YSzy4Bby8I',
        spanInst,
        'sd_99bGt7YSzy4Bby8I'
      );
    }
  }

  async sd_cEr5TkYqr2xVRXRQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cEr5TkYqr2xVRXRQ');
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
  //appendnew_flow_addons_apis_Catch
}
