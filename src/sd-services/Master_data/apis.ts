// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti from './flows'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/master_data/find`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.getMasterData(bh, parentSpanInst);
          //appendnew_next_sd_MIhAZ89KWNryaWaT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MIhAZ89KWNryaWaT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/master_data/products`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          //appendnew_next_sd_TwMSJ2NxVXRoo5sV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TwMSJ2NxVXRoo5sV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/master_data/add-ons`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          //appendnew_next_sd_jySIa7xQOwqEYYAJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jySIa7xQOwqEYYAJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async getMasterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMasterData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgctiInstance: SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti.flows =
        SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgctiInstance.searchMasterData(
          spanInst,
          bh.input.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_brQY0MiBbsdu7zyi(bh, parentSpanInst);
      //appendnew_next_getMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZsaEtQPrnAzuwyDY',
        spanInst,
        'getMasterData'
      );
    }
  }

  async sd_brQY0MiBbsdu7zyi(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_brQY0MiBbsdu7zyi');
    }
  }

  async getProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProduct',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgctiInstance: SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti.flows =
        SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgctiInstance.getProducts(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_d0UCiPeatyi9hqW9(bh, parentSpanInst);
      //appendnew_next_getProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R46EECImrEEGkCuz',
        spanInst,
        'getProduct'
      );
    }
  }

  async sd_d0UCiPeatyi9hqW9(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d0UCiPeatyi9hqW9');
    }
  }

  async getAddOn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAddOn', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgctiInstance: SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti.flows =
        SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgctiInstance.getAddOnGroup(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_cFSnnYzTzl5CEoM5(bh, parentSpanInst);
      //appendnew_next_getAddOn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vLXfqL7HpIJfdqH1',
        spanInst,
        'getAddOn'
      );
    }
  }

  async sd_cFSnnYzTzl5CEoM5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cFSnnYzTzl5CEoM5');
    }
  }

  async sd_8woOPOGUPSPlrzDU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8woOPOGUPSPlrzDU',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qawB26xOLei0ybKz(bh, parentSpanInst);
      //appendnew_next_sd_8woOPOGUPSPlrzDU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8woOPOGUPSPlrzDU',
        spanInst,
        'sd_8woOPOGUPSPlrzDU'
      );
    }
  }

  async sd_qawB26xOLei0ybKz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qawB26xOLei0ybKz');
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
      (await this.sd_8rXXoCjsMy7VaSA3(bh, parentSpanInst))
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
  async sd_8rXXoCjsMy7VaSA3(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_8woOPOGUPSPlrzDU', 'sd_qawB26xOLei0ybKz'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_8woOPOGUPSPlrzDU(bh, parentSpanInst);
    //appendnew_next_sd_8rXXoCjsMy7VaSA3
    return true;
  }
  //appendnew_flow_apis_Catch
}
