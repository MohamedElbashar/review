// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO from './flows'; //_splitter_
//append_imports_end
export class master_data_apis {
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
    this.serviceName = 'master_data_apis';
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
      instance = new master_data_apis(
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
    //appendnew_flow_master_data_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: master_data_apis');
    //appendnew_flow_master_data_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: master_data_apis');

    this.app['post'](
      `${this.serviceBasePath}/master_data/products`,
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
          bh = await this.getProduct(bh, parentSpanInst);
          //appendnew_next_sd_Bo0nHfiSyjAidbrf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Bo0nHfiSyjAidbrf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/master_data/add-ons`,
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
          bh = await this.getAddOn(bh, parentSpanInst);
          //appendnew_next_sd_On9Fh7YankfAgv03
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_On9Fh7YankfAgv03');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_master_data_apis_HttpIn
  }
  //   service flows_master_data_apis

  //appendnew_flow_master_data_apis_start

  async getProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProduct',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance: SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows =
        SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance.getProducts(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IPbZHUWhacJl4uiD(bh, parentSpanInst);
      //appendnew_next_getProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xuyr9RipD6o7p9xr',
        spanInst,
        'getProduct'
      );
    }
  }

  async sd_IPbZHUWhacJl4uiD(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IPbZHUWhacJl4uiD');
    }
  }

  async getAddOn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAddOn', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance: SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows =
        SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance.getAddOnGroup(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_zKJM4VVnV6T0fcWC(bh, parentSpanInst);
      //appendnew_next_getAddOn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XlrjtvG7b6k28yiv',
        spanInst,
        'getAddOn'
      );
    }
  }

  async sd_zKJM4VVnV6T0fcWC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zKJM4VVnV6T0fcWC');
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
  //appendnew_flow_master_data_apis_Catch
}
