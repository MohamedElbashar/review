// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class email_flows {
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
    this.serviceName = 'email_flows';
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
      instance = new email_flows(
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
    //appendnew_flow_email_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: email_flows');
    //appendnew_flow_email_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: email_flows');
    //appendnew_flow_email_flows_HttpIn
  }
  //   service flows_email_flows

  async sendEMAIL(
    parentSpanInst,
    email = '',
    attachments: any = undefined,
    status = false,
    password = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendEMAIL', parentSpanInst);
    let bh: any = {
      input: {
        email,
        attachments,
        status,
        password,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMessage(bh, parentSpanInst);
      //appendnew_next_sendEMAIL
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4vbal9ISv428RCh7',
        spanInst,
        'sendEMAIL'
      );
    }
  }

  async quoteshareviaemail(
    parentSpanInst,
    quote_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'quoteshareviaemail',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBodyEmail(bh, parentSpanInst);
      //appendnew_next_quoteshareviaemail
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
        'sd_lzY3wANwQipXbr8S',
        spanInst,
        'quoteshareviaemail'
      );
    }
  }

  async sendSms(parentSpanInst, quote_details: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('sendSms', parentSpanInst);
    let bh: any = {
      input: {
        quote_details,
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
        'sd_bqnVqVA8nSV1WPT2',
        spanInst,
        'sendSms'
      );
    }
  }
  //appendnew_flow_email_flows_start

  async setStatus1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setStatus1',
      parentSpanInst
    );
    try {
      bh.input.status = false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setStatus1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sg8T0cTZhSEMrRwM',
        spanInst,
        'setStatus1'
      );
    }
  }

  async setMessage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMessage',
      parentSpanInst
    );
    try {
      // bh.input.message = "Your password is : " + bh.input.password
      // bh.input.subject = "Welcome to ART";
      // bh.fromAddr = process.env.SMTP_EMAIL;
      // bh.ccAddr = 'shantharam.shenoy@neutrinos.co';

      const { Readable } = require('stream');
      const FormData = require('form-data');
      const axios = require('axios');

      bh.url = process.env.COMM_MS_URL + 'send-email';

      let params = [
        {
          code: 'PASSWORD',
          value: bh.input.password,
        },
      ];

      const form_data = new FormData();
      form_data.append('subject', 'Welcome to ART');
      form_data.append(
        'to',
        bh.input.email + ',shantharam.shenoy@neutrinos.co'
      );
      form_data.append('template_code', 'user-registration');
      form_data.append('params', JSON.stringify(params));
      bh.body = form_data;
      bh.headers = form_data.getHeaders();

      bh.local.response = await axios.post(bh.url, form_data, {
        headers: {
          ...form_data.getHeaders(),
        },
      });
      bh.input.status = bh.local.response.status;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8mN3R8eY29jqjG19',
        spanInst,
        'setMessage'
      );
    }
  }

  async setBodyEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setBodyEmail',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs');
      const FormData = require('form-data');

      const fetchData = () => {
        return new Promise((resolve, reject) => {
          // Make API call to retrieve PDF file for quote summary
          bh.url = process.env.DOC_MS_URL + 'document/quote/summary/';
          bh.body = {
            quote_summary: bh.input.quote_data,
          };
          bh.headers = {
            'Content-Type': 'application/json',
          };

          axios
            .post(bh.url, bh.body, {
              headers: bh.headers,
              responseType: 'arraybuffer', // Ensure response data is treated as a buffer
            })
            .then((resp) => {
              // Prepare email data
              const emailData = new FormData();
              let params = [
                {
                  code: 'LINK',
                  value:
                    process.env.SHARE_QUOTE_LINK +
                    bh.input.quote_data?.quote_details?.reference_number,
                  //link to be based on what is required in customer acceptance
                },
                {
                  code: 'USER',
                  value:
                    bh.input.quote_data?.quote_details?.first_name +
                    ' ' +
                    bh.input.quote_data?.quote_details?.last_name,
                },
              ];
              emailData.append(
                'subject',
                `Quote_${bh.input.quote_data?.quote_details?.reference_number}`
              );
              emailData.append(
                'to',
                bh.input.quote_data?.quote_details?.email_id
              );
              emailData.append('template_code', 'customer-share-quote');
              emailData.append('params', JSON.stringify(params));
              emailData.append('html', 'true');
              emailData.append('attachments', Buffer.from(resp.data), {
                filename: `QUOTE_${bh.input.quote_data?.quote_details?.reference_number}.pdf`,
              });

              // Make API call to send email with PDF attachment
              const emailUrl = process.env.COMM_MS_URL + 'send-email';
              const emailHeaders = {
                ...emailData.getHeaders(),
              };
              axios
                .post(emailUrl, emailData, {
                  headers: emailHeaders,
                })
                .then(() => resolve(true)) // Resolve with true if successful
                .catch((error) => reject(error)); // Reject with error if email sending fails
            })
            .catch((error) => reject(error)); // Reject with error if PDF retrieval fails
        });
      };

      fetchData()
        .then((res) => {
          bh.local.response = res;
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setBodyEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jZP9klVs2iQq8qDU',
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
        'Failed to send to this emailid ' +
        bh.input.quote_data?.quote_details?.email_id;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_errorEmailFails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ltIoHZNFO9um0fy6',
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
      bh.url = process.env.COMM_MS_URL + 'send-sms';
      bh.body = {
        to:
          bh.input.quote_details?.quote_details?.phone_country_code +
          bh.input.quote_details?.quote_details?.phone_no,
        template_code: 'customer-share-quote',
        params: [
          {
            code: 'LINK',
            value:
              process.env.SHARE_QUOTE_LINK +
              bh.input.quote_details?.quote_details?.reference_number,
          },
        ],
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PvsbdjuScxdlDosz(bh, parentSpanInst);
      //appendnew_next_setBodySms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uAZUWpFzaaIsRlFK',
        spanInst,
        'setBodySms'
      );
    }
  }

  async sd_PvsbdjuScxdlDosz(bh, parentSpanInst) {
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
      //appendnew_next_sd_PvsbdjuScxdlDosz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PvsbdjuScxdlDosz');
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
        'sd_ySyhG5k9nM0CNxAo',
        spanInst,
        'setResponse'
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
      (await this.sd_jgl5clzE2CbTfDxc(bh, parentSpanInst)) ||
      (await this.sd_7g1n4sA1ISsLlQEW(bh, parentSpanInst))
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
  async sd_jgl5clzE2CbTfDxc(bh, parentSpanInst) {
    const nodes = ['sd_GWm9bjW4t2BLNpm8'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setStatus1(bh, parentSpanInst);
      //appendnew_next_sd_jgl5clzE2CbTfDxc
      return true;
    }
    return false;
  }
  async sd_7g1n4sA1ISsLlQEW(bh, parentSpanInst) {
    const nodes = ['sd_jZP9klVs2iQq8qDU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.errorEmailFails(bh, parentSpanInst);
      //appendnew_next_sd_7g1n4sA1ISsLlQEW
      return true;
    }
    return false;
  }
  //appendnew_flow_email_flows_Catch
}
