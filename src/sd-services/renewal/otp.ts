// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK from '../auth/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf from './data_flows'; //_splitter_
//append_imports_end
export class otp {
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
    this.serviceName = 'otp';
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
      instance = new otp(
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
    //appendnew_flow_otp_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: otp');
    //appendnew_flow_otp_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: otp');

    this.app['post'](
      `${this.serviceBasePath}/renewal-verify-otp`,
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
          bh = await this.validations(bh, parentSpanInst);
          //appendnew_next_sd_JXtsjcQe62JSuMKO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JXtsjcQe62JSuMKO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_otp_HttpIn
  }
  //   service flows_otp

  //appendnew_flow_otp_start

  async validations(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validations',
      parentSpanInst
    );
    try {
      if (!bh.input.body.id_no) {
        throw 'NNID/Iqaama No is required!';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyData(bh, parentSpanInst);
      //appendnew_next_validations
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bs8bRCthJawYFz8w',
        spanInst,
        'validations'
      );
    }
  }

  async policyData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getPolicyData(
          spanInst,
          undefined,
          bh.input.body.id_no
        );
      bh.policy_data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.mobileNoValidation(bh, parentSpanInst);
      //appendnew_next_policyData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YHjF6DrS2ykj4yjy',
        spanInst,
        'policyData'
      );
    }
  }

  async mobileNoValidation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mobileNoValidation',
      parentSpanInst
    );
    try {
      if (bh.policy_data?.length) {
        bh.customer_number = String(bh.policy_data[0]?.CUST_CONTACT_NUMBER);
        if (!bh.customer_number) {
          throw 'Customer Number not found !!';
        } else {
          bh.customer_number = bh.customer_number.startsWith('0')
            ? `+966${bh.customer_number.slice(1)}`
            : `+966${bh.customer_number}`;
        }
      } else {
        throw 'Customer Details not found !!';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendOtp(bh, parentSpanInst);
      //appendnew_next_mobileNoValidation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z0soy2FXWCyMb1v3',
        spanInst,
        'mobileNoValidation'
      );
    }
  }

  async sendOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendOtp', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquKInstance: SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK.flows =
        SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquKInstance.sendSmsTemplated(
          spanInst,
          bh.customer_number
        );
      bh.tx_id = outputVariables.local.tx_id;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepResponse(bh, parentSpanInst);
      //appendnew_next_sendOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lrn3c7JTsgEk61fO',
        spanInst,
        'sendOtp'
      );
    }
  }

  async prepResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepResponse',
      parentSpanInst
    );
    try {
      // bh.redirect_headers = process.env.CA_UI_URL + bh.quoteRef + "/" + bh.tx_id

      bh.response = {
        txId: bh.tx_id,
        phone_no:
          '+966 XXXXX XX' +
          bh.customer_number.substring(bh.customer_number.length - 3),
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bbHsETyg84vxC8vG(bh, parentSpanInst);
      //appendnew_next_prepResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kGl1hpMlVvMjLsI9',
        spanInst,
        'prepResponse'
      );
    }
  }

  async sd_bbHsETyg84vxC8vG(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bbHsETyg84vxC8vG');
    }
  }

  async errResp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errResp', parentSpanInst);
    try {
      bh.response = {
        error: 'Failed to generate OTP',
        error_message: bh.error?.message || JSON.stringify(bh.error),
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LcoYUa4ilh7DSKqV(bh, parentSpanInst);
      //appendnew_next_errResp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GJ1auq314NbAfy8H',
        spanInst,
        'errResp'
      );
    }
  }

  async sd_LcoYUa4ilh7DSKqV(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LcoYUa4ilh7DSKqV');
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
      (await this.sd_trLd8BIFLqcXtwlR(bh, parentSpanInst))
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
  async sd_trLd8BIFLqcXtwlR(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_GJ1auq314NbAfy8H', 'sd_LcoYUa4ilh7DSKqV'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.errResp(bh, parentSpanInst);
    //appendnew_next_sd_trLd8BIFLqcXtwlR
    return true;
  }
  //appendnew_flow_otp_Catch
}
