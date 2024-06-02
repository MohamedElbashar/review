// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Middleware } from '../../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_rPImRM4mySzJ4985 from '../utils/system_message_cache'; //_splitter_
//append_imports_end
export class ca_auth {
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
    this.serviceName = 'ca_auth';
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
      instance = new ca_auth(
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
    //appendnew_flow_ca_auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ca_auth');
    let mw_otp_check: Middleware = new Middleware(
      this.serviceName,
      'otp_check',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_5EpZetVFd9w7DVAL(bh, parentSpanInst);
          //appendnew_next_sd_Dxs23v5uUrpbte0b
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Dxs23v5uUrpbte0b');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['otp_check'] = mw_otp_check;
    //appendnew_flow_ca_auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ca_auth');
    //appendnew_flow_ca_auth_HttpIn
  }
  //   service flows_ca_auth

  //appendnew_flow_ca_auth_start

  async sd_5EpZetVFd9w7DVAL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5EpZetVFd9w7DVAL',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessionData = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_w73caAaPUcY3fi3q(bh, parentSpanInst);
      //appendnew_next_sd_5EpZetVFd9w7DVAL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5EpZetVFd9w7DVAL',
        spanInst,
        'sd_5EpZetVFd9w7DVAL'
      );
    }
  }

  async sd_w73caAaPUcY3fi3q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w73caAaPUcY3fi3q',
      parentSpanInst
    );
    try {
      bh.valid = false;
      bh.refNo =
        bh.input?.body?.reference_number || bh.input?.headers?.reference_number;
      if (bh.sessionData && bh.sessionData?.data) {
        if (
          bh.sessionData?.data?.['otp-verified'] &&
          bh.refNo == bh.sessionData?.data?.['reference_number']
        ) {
          bh.valid = true;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KYOj7Yq9YN2SZ0aR(bh, parentSpanInst);
      //appendnew_next_sd_w73caAaPUcY3fi3q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w73caAaPUcY3fi3q',
        spanInst,
        'sd_w73caAaPUcY3fi3q'
      );
    }
  }

  async sd_KYOj7Yq9YN2SZ0aR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KYOj7Yq9YN2SZ0aR',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FLiswHjydnT1YYsQ(bh, parentSpanInst);
      } else {
        bh = await this.getErrorMsg(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KYOj7Yq9YN2SZ0aR',
        spanInst,
        'sd_KYOj7Yq9YN2SZ0aR'
      );
    }
  }

  async sd_FLiswHjydnT1YYsQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FLiswHjydnT1YYsQ',
      parentSpanInst
    );
    try {
      bh.web.res.set({ type: 'bh', value: '' });

      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FLiswHjydnT1YYsQ',
        spanInst,
        'sd_FLiswHjydnT1YYsQ'
      );
    }
  }

  async getErrorMsg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getErrorMsg',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rPImRM4mySzJ4985Instance: SSD_SERVICE_ID_sd_rPImRM4mySzJ4985.system_message_cache =
        SSD_SERVICE_ID_sd_rPImRM4mySzJ4985.system_message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rPImRM4mySzJ4985Instance.getMessage(
          spanInst,
          'HTTP_401',
          bh.web.req.headers['lng']
        );
      bh.error_msg = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.errorMessage(bh, parentSpanInst);
      //appendnew_next_getErrorMsg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aUWnUcENKmrIQcIe',
        spanInst,
        'getErrorMsg'
      );
    }
  }

  async errorMessage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'errorMessage',
      parentSpanInst
    );
    try {
      bh.statusCode = 401;
      bh.response = bh.error_msg;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Tx9ejDmayOLWIjPn(bh, parentSpanInst);
      //appendnew_next_errorMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ciJMGxqREFzWwB2V',
        spanInst,
        'errorMessage'
      );
    }
  }

  async sd_Tx9ejDmayOLWIjPn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tx9ejDmayOLWIjPn',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AtYh5hbLjVq30i09(bh, parentSpanInst);
      //appendnew_next_sd_Tx9ejDmayOLWIjPn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tx9ejDmayOLWIjPn',
        spanInst,
        'sd_Tx9ejDmayOLWIjPn'
      );
    }
  }

  async sd_AtYh5hbLjVq30i09(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AtYh5hbLjVq30i09');
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
  //appendnew_flow_ca_auth_Catch
}
