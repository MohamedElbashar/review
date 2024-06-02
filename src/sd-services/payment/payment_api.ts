// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx from '../ids/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB from './flow'; //_splitter_
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
      `${this.serviceBasePath}/update_status`,
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
          bh = await this.sd_GgLrrbb8soakpvzC(bh, parentSpanInst);
          //appendnew_next_sd_ZGKtMyXRdN5wYa5y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZGKtMyXRdN5wYa5y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment/options`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorize',
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
          //appendnew_next_sd_isJhwsJxJs1F2PDa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_isJhwsJxJs1F2PDa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorize',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment/initiate`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorize',
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
          bh = await this.getToken1(bh, parentSpanInst);
          //appendnew_next_sd_pYGcQCfc1AJw5Swn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pYGcQCfc1AJw5Swn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorize',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/balance_summary`,
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
          bh = await this.getToken2(bh, parentSpanInst);
          //appendnew_next_sd_CFXmpcXiuGYVmdgR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CFXmpcXiuGYVmdgR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/pending_payment_details`,
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
          bh = await this.getToken3(bh, parentSpanInst);
          //appendnew_next_sd_VrZoYBmxXeDO53Hy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VrZoYBmxXeDO53Hy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_payment_api_HttpIn
  }
  //   service flows_payment_api

  //appendnew_flow_payment_api_start

  async sd_GgLrrbb8soakpvzC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GgLrrbb8soakpvzC',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.updateStatus(
          spanInst,
          bh.input.body['status'],
          bh.input.body['reference_number']
        );
      bh.result = outputVariables.local.result;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_JUK6et39usJfsTuB(bh, parentSpanInst);
      //appendnew_next_sd_GgLrrbb8soakpvzC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GgLrrbb8soakpvzC',
        spanInst,
        'sd_GgLrrbb8soakpvzC'
      );
    }
  }

  async sd_JUK6et39usJfsTuB(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JUK6et39usJfsTuB');
    }
  }

  async getToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getToken', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance: SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows =
        SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance.generateToken(
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
        'sd_wVeEjL51XeAn14ic',
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
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.getOptions(
          spanInst,
          bh.input.body,
          bh.token
        );
      bh.result = outputVariables.local.result;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AJVY7AXcS9guELuu(bh, parentSpanInst);
      //appendnew_next_getOptions
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3H8VvRPHPe04xQkQ',
        spanInst,
        'getOptions'
      );
    }
  }

  async sd_AJVY7AXcS9guELuu(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AJVY7AXcS9guELuu');
    }
  }

  async getToken1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getToken1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance: SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows =
        SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance.generateToken(
          spanInst
        );
      bh.token = outputVariables.local.token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.initPayment(bh, parentSpanInst);
      //appendnew_next_getToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IOj4neu7eqivle1D',
        spanInst,
        'getToken1'
      );
    }
  }

  async initPayment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'initPayment',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.initPayment(
          spanInst,
          bh.input.body['reference_number'],
          bh.token,
          bh.input.body['payment_method'],
          bh.input.body,
          bh.input.body['device_type']
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_6VBcVaH7bJoY4f7a(bh, parentSpanInst);
      //appendnew_next_initPayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jiLbayZx9z3NMojf',
        spanInst,
        'initPayment'
      );
    }
  }

  async sd_6VBcVaH7bJoY4f7a(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6VBcVaH7bJoY4f7a');
    }
  }

  async getToken2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getToken2', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance: SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows =
        SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance.generateToken(
          spanInst
        );
      bh.token = outputVariables.local.token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lkMhxYgG057JgrjG(bh, parentSpanInst);
      //appendnew_next_getToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8M5NwE1awUKNUmiy',
        spanInst,
        'getToken2'
      );
    }
  }

  async sd_lkMhxYgG057JgrjG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lkMhxYgG057JgrjG',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.paymentBalance(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.response;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_v8PZxOUIv71KLdbw(bh, parentSpanInst);
      //appendnew_next_sd_lkMhxYgG057JgrjG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lkMhxYgG057JgrjG',
        spanInst,
        'sd_lkMhxYgG057JgrjG'
      );
    }
  }

  async sd_v8PZxOUIv71KLdbw(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v8PZxOUIv71KLdbw');
    }
  }

  async getToken3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getToken3', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance: SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows =
        SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lx.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1RttoVCbCvHRz7lxInstance.generateToken(
          spanInst
        );
      bh.token = outputVariables.local.token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cz1yX5FuuPYSFOTG(bh, parentSpanInst);
      //appendnew_next_getToken3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FERRyVaJdFM1vpda',
        spanInst,
        'getToken3'
      );
    }
  }

  async sd_cz1yX5FuuPYSFOTG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cz1yX5FuuPYSFOTG',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.pendingPaymentCheck(
          spanInst,
          bh.input.body
        );
      bh.response = outputVariables.local.response;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Au7dwsDLjHMeH0fd(bh, parentSpanInst);
      //appendnew_next_sd_cz1yX5FuuPYSFOTG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cz1yX5FuuPYSFOTG',
        spanInst,
        'sd_cz1yX5FuuPYSFOTG'
      );
    }
  }

  async sd_Au7dwsDLjHMeH0fd(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Au7dwsDLjHMeH0fd');
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
