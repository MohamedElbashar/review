// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS from '../Strapi/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_garlOThj4kVRVw8w from './flows'; //_splitter_
//append_imports_end
export class sms_apis {
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
    this.serviceName = 'sms_apis';
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
      instance = new sms_apis(
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
    //appendnew_flow_sms_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: sms_apis');
    //appendnew_flow_sms_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: sms_apis');

    this.app['post'](
      `${this.serviceBasePath}/send-sms`,
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
          bh = await this.setParams0(bh, parentSpanInst);
          //appendnew_next_sd_Rckf9VDppLQPGD75
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Rckf9VDppLQPGD75');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_sms_apis_HttpIn
  }
  //   service flows_sms_apis

  //appendnew_flow_sms_apis_start

  async setParams0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setParams0',
      parentSpanInst
    );
    try {
      bh.get_template = false;
      //body or template code is requird to have the email content
      bh.body = bh.input.body.body;
      bh.to = bh.input.body.to;
      if (!bh.body) {
        //communication template code and values to replace
        bh.template_code = bh.input.body.template_code;
        bh.params = bh.input.body.params || [];
        if (bh.template_code) bh.get_template = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTemplateCheck(bh, parentSpanInst);
      //appendnew_next_setParams0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6SF3YaSKoYDQ3qv8',
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
        bh = await this.bodyCheck(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4YRc6Ro0mvxJk2lp',
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
          undefined
        );
      bh.template = outputVariables.local.template;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setTemplate0(bh, parentSpanInst);
      //appendnew_next_getTemplate0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o3HosAXnYnN2uaPb',
        spanInst,
        'getTemplate0'
      );
    }
  }

  async setTemplate0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setTemplate0',
      parentSpanInst
    );
    try {
      bh.body = bh.template?.sms_template;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.bodyCheck(bh, parentSpanInst);
      //appendnew_next_setTemplate0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R1m2OcH69PK9lfH0',
        spanInst,
        'setTemplate0'
      );
    }
  }

  async bodyCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('bodyCheck', parentSpanInst);
    try {
      if (
        this.sdService.operators['nempty'](
          bh.body,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sendSms(bh, parentSpanInst);
      } else {
        bh = await this.setError0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AoxhAgUNx4o9IMzx',
        spanInst,
        'bodyCheck'
      );
    }
  }

  async sendSms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendSms', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_garlOThj4kVRVw8wInstance: SSD_SERVICE_ID_sd_garlOThj4kVRVw8w.flows =
        SSD_SERVICE_ID_sd_garlOThj4kVRVw8w.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_garlOThj4kVRVw8wInstance.sendSMS(
          spanInst,
          bh.body,
          bh.to
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_sendSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHDq0dysj2vu9TSJ',
        spanInst,
        'sendSms'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.status ? 200 : 500;

      bh.response = {
        status: bh.status,
        error: !bh.status ? bh.error : undefined,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1DUD78n53XMnVnEs(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hKhn6SBTS9qQke3U',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_1DUD78n53XMnVnEs(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1DUD78n53XMnVnEs');
    }
  }

  async setError0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setError0', parentSpanInst);
    try {
      bh.status = false;
      bh.error = bh.get_template
        ? 'template not found'
        : 'body paramter is required if template_code not provided';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_setError0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tFOXqwQ1ytPHE37i',
        spanInst,
        'setError0'
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
  //appendnew_flow_sms_apis_Catch
}
