// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class flows {
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
    this.serviceName = 'flows';
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
      instance = new flows(
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
    //appendnew_flow_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flows');
    //appendnew_flow_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: flows');
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async sendEMAIL(
    parentSpanInst,
    message = '',
    email = '',
    subject = '',
    attachments: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendEMAIL', parentSpanInst);
    let bh: any = {
      input: {
        message,
        email,
        subject,
        attachments,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nhPeqeEzLltNoSBc(bh, parentSpanInst);
      //appendnew_next_sendEMAIL
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vph6MlCY37Sd0ZMZ',
        spanInst,
        'sendEMAIL'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_nhPeqeEzLltNoSBc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nhPeqeEzLltNoSBc',
      parentSpanInst
    );
    try {
      bh.mock = bh.system.environment.MOCK_EMAIL == 'true';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0aoKO8UNFBUrXeUr(bh, parentSpanInst);
      //appendnew_next_sd_nhPeqeEzLltNoSBc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nhPeqeEzLltNoSBc',
        spanInst,
        'sd_nhPeqeEzLltNoSBc'
      );
    }
  }

  async sd_0aoKO8UNFBUrXeUr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0aoKO8UNFBUrXeUr',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.mock,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_LIpi43rK0BcmAwsT(bh, parentSpanInst);
      } else {
        bh = await this.nodemailer(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0aoKO8UNFBUrXeUr',
        spanInst,
        'sd_0aoKO8UNFBUrXeUr'
      );
    }
  }

  async sd_LIpi43rK0BcmAwsT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LIpi43rK0BcmAwsT',
      parentSpanInst
    );
    try {
      bh.local.status = true;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LIpi43rK0BcmAwsT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LIpi43rK0BcmAwsT',
        spanInst,
        'sd_LIpi43rK0BcmAwsT'
      );
    }
  }

  async nodemailer(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'nodemailer',
      parentSpanInst
    );
    try {
      const nodemailer = require('nodemailer');
      let SMTP_CONFIG = JSON.parse(bh.system.environment.SMTP_CONFIG);
      let transporter = nodemailer.createTransport(SMTP_CONFIG);

      const mailOptions = {
        from: SMTP_CONFIG.from,
        to: bh.input.email,
        subject: bh.input.subject,
        html: bh.input.message,
        attachments: bh.input.attachments,
      };
      await transporter.sendMail(mailOptions).then(
        (info) => {
          if (info?.['messageId']) {
            bh.local.status = true;
            return;
          } else {
            bh.local.status = false;
            return;
          }
        },
        (error) => {
          console.log(`SEND MAIL ERROR ${JSON.stringify(error)}`);
          bh.local.status = false;
        }
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_nodemailer
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cGV4koDecTaEIWF3',
        spanInst,
        'nodemailer'
      );
    }
  }

  async sd_5ZSgUqRbi3h3LEkL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5ZSgUqRbi3h3LEkL',
      parentSpanInst
    );
    try {
      bh.local.status = false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5ZSgUqRbi3h3LEkL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5ZSgUqRbi3h3LEkL',
        spanInst,
        'sd_5ZSgUqRbi3h3LEkL'
      );
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
      (await this.sd_h9uSTewnn8iofIpD(bh, parentSpanInst))
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
  async sd_h9uSTewnn8iofIpD(bh, parentSpanInst) {
    const nodes = ['sd_r9Lni1qrkCcbAbJz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5ZSgUqRbi3h3LEkL(bh, parentSpanInst);
      //appendnew_next_sd_h9uSTewnn8iofIpD
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
