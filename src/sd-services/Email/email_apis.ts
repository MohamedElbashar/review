// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS from '../Strapi/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB from './flows'; //_splitter_
//append_imports_end
export class email_apis {
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
    this.serviceName = 'email_apis';
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
      instance = new email_apis(
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
    //appendnew_flow_email_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: email_apis');
    //appendnew_flow_email_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: email_apis');

    this.app['post'](
      `${this.serviceBasePath}/send-email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: (os.tmpdir() + '').replace(/\\|\//g, sep),
        options: [{ name: 'attachments', maxCount: 5 }],
      }),

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
          bh = await this.setParams0(bh, parentSpanInst);
          //appendnew_next_sd_sWxT51Fxyi84tA33
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sWxT51Fxyi84tA33');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_email_apis_HttpIn
  }
  //   service flows_email_apis

  //appendnew_flow_email_apis_start

  async setParams0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setParams0',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      bh.get_template = false;
      bh.locale = bh.input.body.locale || 'en';
      //body or template code is requird to have the email content
      bh.body = bh.input.body.body;
      bh.to = bh.input.body.to;
      bh.subject = bh.input.body.subject;
      if (!bh.body) {
        //communication template code and values to replace
        bh.template_code = bh.input.body.template_code;
        bh.params = JSON.parse(bh.input.body.params || '[]');
        if (bh.template_code) bh.get_template = true;
      }
      // attachments for email
      bh.attachments = [];
      if (bh.input.files?.attachments) {
        bh.input.files.attachments.forEach((FILE) => {
          bh.attachments.push({
            filename: FILE.originalname,
            content: fs.readFileSync(FILE.path),
          });
        });
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTemplateCheck(bh, parentSpanInst);
      //appendnew_next_setParams0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6UtIO425EFV62n4R',
        spanInst,
        'setParams0'
      );
    }
  }

  async getTemplateCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTemplateCheck',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.get_template,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getTemplate0(bh, parentSpanInst);
      } else {
        bh = await this.sd_98Z67OykRhDuMDxV(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QITZGgNarYm9ITwp',
        spanInst,
        'getTemplateCheck'
      );
    }
  }

  async getTemplate0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTemplate0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUSInstance: SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS.flows =
        SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUSInstance.getCommsTemplate(
          spanInst,
          bh.template_code,
          bh.params,
          bh.locale
        );
      bh.template = outputVariables.local.template;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xi7DBOMY9N4bhsAW(bh, parentSpanInst);
      //appendnew_next_getTemplate0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DSj2S0KroS9HVeNg',
        spanInst,
        'getTemplate0'
      );
    }
  }

  async sd_xi7DBOMY9N4bhsAW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xi7DBOMY9N4bhsAW',
      parentSpanInst
    );
    try {
      bh.body = bh.template?.email_template;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_98Z67OykRhDuMDxV(bh, parentSpanInst);
      //appendnew_next_sd_xi7DBOMY9N4bhsAW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xi7DBOMY9N4bhsAW',
        spanInst,
        'sd_xi7DBOMY9N4bhsAW'
      );
    }
  }

  async sd_98Z67OykRhDuMDxV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_98Z67OykRhDuMDxV',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.body,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sendEmail0(bh, parentSpanInst);
      } else {
        bh = await this.sd_yIUOkXd5O8R1plny(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_98Z67OykRhDuMDxV',
        spanInst,
        'sd_98Z67OykRhDuMDxV'
      );
    }
  }

  async sendEmail0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendEmail0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgBInstance: SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB.flows =
        SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgBInstance.sendEMAIL(
          spanInst,
          bh.body,
          bh.to,
          bh.subject,
          bh.attachments
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pqQZ0GdRfbCCo4dH(bh, parentSpanInst);
      //appendnew_next_sendEmail0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tu9pB7L8Lp0yT8Zj',
        spanInst,
        'sendEmail0'
      );
    }
  }

  async sd_pqQZ0GdRfbCCo4dH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pqQZ0GdRfbCCo4dH',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.status ? 200 : 500;
      bh.response = {
        status: bh.status,
        error: !bh.status ? bh.error : undefined,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_QKtS9HMD2m227xdn(bh, parentSpanInst);
      //appendnew_next_sd_pqQZ0GdRfbCCo4dH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pqQZ0GdRfbCCo4dH',
        spanInst,
        'sd_pqQZ0GdRfbCCo4dH'
      );
    }
  }

  async sd_QKtS9HMD2m227xdn(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QKtS9HMD2m227xdn');
    }
  }

  async sd_yIUOkXd5O8R1plny(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yIUOkXd5O8R1plny',
      parentSpanInst
    );
    try {
      bh.status = false;
      bh.error = bh.get_template
        ? 'template not found'
        : 'body paramter is required if template_code not provided';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pqQZ0GdRfbCCo4dH(bh, parentSpanInst);
      //appendnew_next_sd_yIUOkXd5O8R1plny
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yIUOkXd5O8R1plny',
        spanInst,
        'sd_yIUOkXd5O8R1plny'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_email_apis_Catch
}
