// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL from './flows'; //_splitter_
//append_imports_end
export class otp_apis {
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
    this.serviceName = 'otp_apis';
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
      instance = new otp_apis(
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
    //appendnew_flow_otp_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: otp_apis');
    //appendnew_flow_otp_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: otp_apis');

    this.app['post'](
      `${this.serviceBasePath}/send-otp`,
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
          bh = await this.sd_F5vbIkwINvfhwbXk(bh, parentSpanInst);
          //appendnew_next_sd_BYRqJNlGUyjujPKR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BYRqJNlGUyjujPKR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-otp`,
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
          bh = await this.sd_9zBFbLPDhmbRe8sv(bh, parentSpanInst);
          //appendnew_next_sd_jmrYOzfaJJD5lUZq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jmrYOzfaJJD5lUZq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_otp_apis_HttpIn
  }
  //   service flows_otp_apis

  //appendnew_flow_otp_apis_start

  async sd_F5vbIkwINvfhwbXk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F5vbIkwINvfhwbXk',
      parentSpanInst
    );
    try {
      bh.UID = bh.input.body.phone || bh.input.body.email;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendOtp(bh, parentSpanInst);
      //appendnew_next_sd_F5vbIkwINvfhwbXk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F5vbIkwINvfhwbXk',
        spanInst,
        'sd_F5vbIkwINvfhwbXk'
      );
    }
  }

  async sendOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendOtp', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDLInstance: SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL.flows =
        SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDLInstance.sendOTP(
          spanInst,
          bh.input.body.otp_type,
          bh.input.body.purpose_code,
          bh.UID,
          bh.input.body.params,
          undefined,
          undefined
        );
      bh.TxId = outputVariables.input.TxId;
      bh.message = outputVariables.input.Message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_sendOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ca99wLs2lmY0cHJp',
        spanInst,
        'sendOtp'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      if (bh.TxId) {
        bh.statusCode = 200;
        bh.response = {
          TxId: bh.TxId,
        };
      } else {
        bh.statusCode = 500;
        if (bh.message) {
          bh.response = {
            error: bh.message?.error || bh.message,
            description: bh.message?.description || undefined,
            data: bh.message?.data || undefined,
          };
        } else {
          bh.response = {
            type: 'APIFAIL',
            error: 'Failed to send the OTP, please try again',
          };
        }
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_JrDOSh88nVh6wfro(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XEttbP7NCy7KFVao',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_JrDOSh88nVh6wfro(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JrDOSh88nVh6wfro');
    }
  }

  async sd_9zBFbLPDhmbRe8sv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9zBFbLPDhmbRe8sv',
      parentSpanInst
    );
    try {
      bh.value = bh.input.body.value;
      bh.TxId = bh.input.body.TxId;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.verifyOtp(bh, parentSpanInst);
      //appendnew_next_sd_9zBFbLPDhmbRe8sv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9zBFbLPDhmbRe8sv',
        spanInst,
        'sd_9zBFbLPDhmbRe8sv'
      );
    }
  }

  async verifyOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('verifyOtp', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDLInstance: SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL.flows =
        SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDLInstance.verifyOTP(
          spanInst,
          bh.TxId,
          bh.value,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.Status;
      bh.message = outputVariables.input.Message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_verifyOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GQ0a6Ja7Xbia25EZ',
        spanInst,
        'verifyOtp'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      if (bh.status) {
        bh.statusCode = 200;
        bh.response = {
          status: true,
        };
      } else {
        bh.statusCode = 200;
        bh.response = {
          status: false,
          error: bh.message?.error || bh.message,
          description: bh.message?.description || undefined,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_6sVZBkoybLrjk7Hq(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HmS3nVZT8NT6CzGB',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_6sVZBkoybLrjk7Hq(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6sVZBkoybLrjk7Hq');
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
  //appendnew_flow_otp_apis_Catch
}
