// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri from '../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS from '../utils/apigee_token_cache'; //_splitter_
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

  async sendSMS(parentSpanInst, message = '', phone = '', ...others) {
    const spanInst = this.tracerService.createSpan('sendSMS', parentSpanInst);
    let bh: any = {
      input: {
        message,
        phone,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.transformPhone(bh, parentSpanInst);
      //appendnew_next_sendSMS
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
        'sd_Qu3A3V4C2uynPtho',
        spanInst,
        'sendSMS'
      );
    }
  }

  async transformNumber(parentSpanInst, inputPhone = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'transformNumber',
      parentSpanInst
    );
    let bh: any = {
      input: {
        inputPhone,
      },
      local: {
        outputPhone: '',
        error: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_O3NeYXY85zYuinl9(bh, parentSpanInst);
      //appendnew_next_transformNumber
      return (
        // formatting output variables
        {
          input: {},
          local: {
            outputPhone: bh.local.outputPhone,
            error: bh.local.error,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uxLEYOZ4DfHqOq2h',
        spanInst,
        'transformNumber'
      );
    }
  }
  //appendnew_flow_flows_start

  async transformPhone(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'transformPhone',
      parentSpanInst
    );
    try {
      let outputVariables = await this.transformNumber(
        spanInst,
        bh.input.phone
      );
      bh.input.phone = outputVariables.local.outputPhone;
      bh.error = outputVariables.local.error;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BqvcDP0K7Jr8ENvz(bh, parentSpanInst);
      //appendnew_next_transformPhone
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rgzUrALlg7nheMap',
        spanInst,
        'transformPhone'
      );
    }
  }

  async sd_BqvcDP0K7Jr8ENvz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BqvcDP0K7Jr8ENvz',
      parentSpanInst
    );
    try {
      bh.error_status = bh.error?.length > 0;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mU0b4xlepgovNfB4(bh, parentSpanInst);
      //appendnew_next_sd_BqvcDP0K7Jr8ENvz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BqvcDP0K7Jr8ENvz',
        spanInst,
        'sd_BqvcDP0K7Jr8ENvz'
      );
    }
  }

  async sd_mU0b4xlepgovNfB4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mU0b4xlepgovNfB4',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.error_status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wsXUFKgkcpU0MWcX(bh, parentSpanInst);
      } else {
        bh = await this.sd_7VuHA0DnLUN87e8S(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mU0b4xlepgovNfB4',
        spanInst,
        'sd_mU0b4xlepgovNfB4'
      );
    }
  }

  async sd_wsXUFKgkcpU0MWcX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wsXUFKgkcpU0MWcX',
      parentSpanInst
    );
    try {
      bh.local.status = false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wsXUFKgkcpU0MWcX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wsXUFKgkcpU0MWcX',
        spanInst,
        'sd_wsXUFKgkcpU0MWcX'
      );
    }
  }

  async sd_7VuHA0DnLUN87e8S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7VuHA0DnLUN87e8S',
      parentSpanInst
    );
    try {
      bh.mock = bh.system.environment.MOCK_SMS === 'true';

      if (bh.system.environment.ENV == 'UAT') {
        let white_listed_number = [
          '966530256372',
          '966543086196',
          '966546831934',
          '966540496844',
        ];
        if (!white_listed_number.includes(bh.input.phone)) {
          bh.input.phone = '966581265754';
        }
      }

      bh.target = bh.system.environment.TARGET;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MXrDjRWtw3A7cB72(bh, parentSpanInst);
      //appendnew_next_sd_7VuHA0DnLUN87e8S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7VuHA0DnLUN87e8S',
        spanInst,
        'sd_7VuHA0DnLUN87e8S'
      );
    }
  }

  async sd_MXrDjRWtw3A7cB72(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MXrDjRWtw3A7cB72',
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
        bh = await this.sd_lZvnxwz0JF3AtsxP(bh, parentSpanInst);
      } else {
        bh = await this.apigeeToken0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MXrDjRWtw3A7cB72',
        spanInst,
        'sd_MXrDjRWtw3A7cB72'
      );
    }
  }

  async sd_lZvnxwz0JF3AtsxP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lZvnxwz0JF3AtsxP',
      parentSpanInst
    );
    try {
      bh.local.status = true;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_lZvnxwz0JF3AtsxP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lZvnxwz0JF3AtsxP',
        spanInst,
        'sd_lZvnxwz0JF3AtsxP'
      );
    }
  }

  async apigeeToken0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZASInstance: SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS.apigee_token_cache =
        SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZASInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ncw48q1vE7nHPC2e(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PQ7KUoLsQGXdkVLm',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async sd_Ncw48q1vE7nHPC2e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ncw48q1vE7nHPC2e',
      parentSpanInst
    );
    try {
      bh.url = bh.system.environment.APIGEE_OCE_URL + '/v1/art/send-sms';
      bh.headers = {
        Authorization: 'Bearer ' + bh.token,
      };
      bh.body = {
        MobileNumber: bh.input.phone,
        Message: encodeURIComponent(bh.input.message),
      };

      bh.api_key = 'send-sms';
      bh.identifier = `${bh.input.phone}`;
      bh.request = bh.body;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendSms(bh, parentSpanInst);
      //appendnew_next_sd_Ncw48q1vE7nHPC2e
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ncw48q1vE7nHPC2e',
        spanInst,
        'sd_Ncw48q1vE7nHPC2e'
      );
    }
  }

  async sendSms(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.payload = responseMsg;
      bh = await this.sd_GkT4JrJwQVyngUKr(bh, parentSpanInst);
      //appendnew_next_sendSms
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aRvOBloH9QlG6bPF');
    }
  }

  async sd_GkT4JrJwQVyngUKr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GkT4JrJwQVyngUKr',
      parentSpanInst
    );
    try {
      bh.local.status = bh.payload['statusCode'] == 200;
      bh.duration = Number(bh.payload['requestDuration']);
      bh.response = {
        code: bh.payload.payload,
        status: bh.local.status,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditSendSms(bh, parentSpanInst);
      //appendnew_next_sd_GkT4JrJwQVyngUKr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GkT4JrJwQVyngUKr',
        spanInst,
        'sd_GkT4JrJwQVyngUKr'
      );
    }
  }

  async auditSendSms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'auditSendSms',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4riInstance: SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri.flows =
        SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4riInstance.logApiAudit(
          spanInst,
          bh.api_key,
          bh.identifier,
          bh.request,
          bh.response,
          undefined,
          undefined,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_auditSendSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7hUtKcopr11M61Hx',
        spanInst,
        'auditSendSms'
      );
    }
  }

  async sd_O3NeYXY85zYuinl9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O3NeYXY85zYuinl9',
      parentSpanInst
    );
    try {
      const validator = require('validator');
      let uid = bh.input.inputPhone;
      if (uid.startsWith('+966')) {
        uid = uid.substring(4);
      } else if (uid.startsWith('966')) {
        uid = uid.substring(3);
      }
      //do 2 times to avoid having 966 in input twice
      if (uid.startsWith('+966')) {
        uid = uid.substring(4);
      } else if (uid.startsWith('966')) {
        uid = uid.substring(3);
      }
      //remove zero if exist
      if (uid.startsWith('0')) {
        uid = uid.substring(1);
      }
      if (
        !validator.isMobilePhone('+966' + uid, 'ar-SA', { strictMode: true })
      ) {
        bh.local.error = 'INVALID_MOBILE_NO';
      } else {
        //prefix always with 966
        bh.local.outputPhone = '966' + uid;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_O3NeYXY85zYuinl9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O3NeYXY85zYuinl9',
        spanInst,
        'sd_O3NeYXY85zYuinl9'
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
  //appendnew_flow_flows_Catch
}
