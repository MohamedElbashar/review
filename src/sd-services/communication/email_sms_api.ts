// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class email_sms_api {
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
    this.serviceName = 'email_sms_api';
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
      instance = new email_sms_api(
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
    //appendnew_flow_email_sms_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: email_sms_api');
    //appendnew_flow_email_sms_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: email_sms_api');
    //appendnew_flow_email_sms_api_HttpIn
  }
  //   service flows_email_sms_api

  async sendEmailQuoteshare(
    parentSpanInst,
    payer_details: any = undefined,
    template_code: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sendEmailQuoteshare',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payer_details,
        template_code,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBodyEmail(bh, parentSpanInst);
      //appendnew_next_sendEmailQuoteshare
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bKYR4GQlHMl0meF5',
        spanInst,
        'sendEmailQuoteshare'
      );
    }
  }

  async sendSms(
    parentSpanInst,
    payer_details: any = undefined,
    template_code: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendSms', parentSpanInst);
    let bh: any = {
      input: {
        payer_details,
        template_code,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBodySms(bh, parentSpanInst);
      //appendnew_next_sendSms
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gzutpN2pjvr0Lvr3',
        spanInst,
        'sendSms'
      );
    }
  }
  //appendnew_flow_email_sms_api_start

  async setBodyEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setBodyEmail',
      parentSpanInst
    );
    try {
      const FormData = require('form-data');
      const axios = require('axios');

      bh.url = process.env.COMM_MICROSERVICE_URL + 'send-email';
      let params;

      if (bh.input.template_code) {
        params = [
          {
            code: 'BILLNUMBER',
            value: bh.input.payer_details['sadad_bill_no'],
          },
          {
            code: 'AMOUNT',
            value:
              parseFloat(bh.input.payer_details['amount'] || 0).toFixed(2) ||
              '0',
          },
        ];
      } else {
        params = [
          {
            code: 'LINK',
            value: '',
            //link to be based on what is required in customer acceptance
          },
          {
            code: 'NAME',
            value: bh.input.payer_details?.['name'],
          },
        ];
      }

      let template_code = bh.input.template_code
        ? bh.input.template_code
        : 'payment-successful';
      let subject = bh.input.template_code
        ? 'Al Rajhi Takaful Bill Reference Number'
        : 'Payment_' + bh.input.payer_details?.['source_id_no'];

      let locale =
        JSON.parse(bh.input.payer_details?.['addl_details'] || '{}')?.[
          'locale'
        ] || 'en';
      const form_data = new FormData();
      form_data.append('subject', subject);
      form_data.append('to', bh.input.payer_details?.['email']);
      form_data.append('template_code', template_code);
      form_data.append('params', JSON.stringify(params));
      form_data.append('locale', locale || 'en');
      bh.body = form_data;
      bh.headers = form_data.getHeaders();

      bh.email_response = await axios.post(bh.url, form_data, {
        headers: {
          ...form_data.getHeaders(),
        },
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setBodyEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0IjOEH5sPCLTHNnW',
        spanInst,
        'setBodyEmail'
      );
    }
  }

  async errorEmailFails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'errorEmailFails',
      parentSpanInst
    );
    try {
      bh.local.response =
        'Failed to send to this emailid ' + bh.input.payment_details?.email;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_errorEmailFails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6kAjzzn9Zq4EVEzJ',
        spanInst,
        'errorEmailFails'
      );
    }
  }

  async setBodySms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setBodySms',
      parentSpanInst
    );
    try {
      bh.url = process.env.COMM_MICROSERVICE_URL + 'send-sms';
      let locale =
        JSON.parse(bh.input.payer_details?.['addl_details'] || '{}')?.[
          'locale'
        ] || 'en';

      let template_code = bh.input.template_code
        ? bh.input.template_code
        : 'payment-successful';
      let mobile_no =
        bh.input.payer_details?.['phone_no'] ||
        bh.input.payer_details?.['mobile_no'];

      if (mobile_no.substring(0, 2) != '966') {
        mobile_no = `966${mobile_no}`;
      }
      let params;

      if (bh.input.template_code) {
        params = [
          {
            code: 'BILLNUMBER',
            value: bh.input.payer_details['sadad_bill_no'],
          },
          {
            code: 'AMOUNT',
            value:
              parseFloat(bh.input.payer_details['amount'] || 0).toFixed(2) ||
              '0',
          },
        ];
      } else {
        params = [
          {
            code: 'NAME',
            value: bh.input.payer_details?.['name'],
          },
        ];
      }

      bh.body = {
        to: mobile_no,
        template_code: template_code,
        params: params,
        locale: locale || 'en',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZOxt3F2gAmCDznCf(bh, parentSpanInst);
      //appendnew_next_setBodySms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zc3NWdPDjOd5ltzP',
        spanInst,
        'setBodySms'
      );
    }
  }

  async sd_ZOxt3F2gAmCDznCf(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
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

      bh.sms_response = responseMsg;
      bh = await this.setResponse(bh, parentSpanInst);
      //appendnew_next_sd_ZOxt3F2gAmCDznCf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZOxt3F2gAmCDznCf');
    }
  }

  async setResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse',
      parentSpanInst
    );
    try {
      if (bh.sms_response.statusCode == 200) {
        bh.local.result = true;
      } else {
        bh.local.result = 'SMS not sent';
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hosV4QeURci3fGfc',
        spanInst,
        'setResponse'
      );
    }
  }

  async errorSms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errorSms', parentSpanInst);
    try {
      bh.local.response =
        'Failed to send to this sms ' + bh.input.payment_details?.phone_no;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_errorSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OlB8Ytl4gNeZ8npX',
        spanInst,
        'errorSms'
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
      (await this.sd_ZqGDTXJ05xY8egvR(bh, parentSpanInst)) ||
      (await this.sd_b4epc7g8H8Tumii6(bh, parentSpanInst))
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
  async sd_ZqGDTXJ05xY8egvR(bh, parentSpanInst) {
    const nodes = ['sd_0IjOEH5sPCLTHNnW'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.errorEmailFails(bh, parentSpanInst);
      //appendnew_next_sd_ZqGDTXJ05xY8egvR
      return true;
    }
    return false;
  }
  async sd_b4epc7g8H8Tumii6(bh, parentSpanInst) {
    const nodes = ['sd_0IjOEH5sPCLTHNnW', 'sd_ZOxt3F2gAmCDznCf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.errorSms(bh, parentSpanInst);
      //appendnew_next_sd_b4epc7g8H8Tumii6
      return true;
    }
    return false;
  }
  //appendnew_flow_email_sms_api_Catch
}
