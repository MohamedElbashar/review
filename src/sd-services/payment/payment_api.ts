// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK from '../ids/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE from './flows'; //_splitter_
//append_imports_end
export class payment_api {
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
    this.serviceName = 'payment_api';
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
      instance = new payment_api(
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
    //appendnew_flow_payment_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: payment_api');
    //appendnew_flow_payment_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: payment_api');

    this.app['post'](
      `${this.serviceBasePath}/payment/options`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
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
          bh = await this.getToken(bh, parentSpanInst);
          //appendnew_next_sd_okR6JYox6vwrugpn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_okR6JYox6vwrugpn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment/initiate`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
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
          bh = await this.sd_QaTJYHakJUD7xLq3(bh, parentSpanInst);
          //appendnew_next_sd_TmqlQHkkKjJWsAcu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TmqlQHkkKjJWsAcu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment_details`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
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
          bh = await this.sd_wJCsPkLTVL7Ge1ce(bh, parentSpanInst);
          //appendnew_next_sd_xEVHXTfvut9QcA11
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xEVHXTfvut9QcA11');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_payment_api_HttpIn
  }
  //   service flows_payment_api

  //appendnew_flow_payment_api_start

  async getToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getToken', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_McJy2ZGC1clerKpKInstance: SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK.flows =
        SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_McJy2ZGC1clerKpKInstance.generateToken(
          spanInst
        );
      bh.token = outputVariables.local.token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getOptions(bh, parentSpanInst);
      //appendnew_next_getToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rPeQecUqU2gLbSu2',
        spanInst,
        'getToken'
      );
    }
  }

  async getOptions(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getOptions',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyEInstance: SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE.flows =
        SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyEInstance.getOptions(
          spanInst,
          bh.input.body,
          bh.token
        );
      bh.result = outputVariables.local.result;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_cEx0rA04O1U9Z61o(bh, parentSpanInst);
      //appendnew_next_getOptions
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HhWamNA0ad94huCz',
        spanInst,
        'getOptions'
      );
    }
  }

  async sd_cEx0rA04O1U9Z61o(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cEx0rA04O1U9Z61o');
    }
  }

  async sd_QaTJYHakJUD7xLq3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QaTJYHakJUD7xLq3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyEInstance: SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE.flows =
        SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyEInstance.initPayment1(
          spanInst,
          bh.input.body['reference_number'],
          bh.input.body['device_type'],
          bh.input.body['selected_language']
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_FvgZbqNrW9rXLuyl(bh, parentSpanInst);
      //appendnew_next_sd_QaTJYHakJUD7xLq3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QaTJYHakJUD7xLq3',
        spanInst,
        'sd_QaTJYHakJUD7xLq3'
      );
    }
  }

  async sd_FvgZbqNrW9rXLuyl(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FvgZbqNrW9rXLuyl');
    }
  }

  async sd_wJCsPkLTVL7Ge1ce(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wJCsPkLTVL7Ge1ce',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyEInstance: SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE.flows =
        SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyEInstance.fetchPaymentDetails(
          spanInst,
          bh.input.body['quote_ref_no']
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_uCqS5M4C7mE7y5Zk(bh, parentSpanInst);
      //appendnew_next_sd_wJCsPkLTVL7Ge1ce
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wJCsPkLTVL7Ge1ce',
        spanInst,
        'sd_wJCsPkLTVL7Ge1ce'
      );
    }
  }

  async sd_uCqS5M4C7mE7y5Zk(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uCqS5M4C7mE7y5Zk');
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
  //appendnew_flow_payment_api_Catch
}
