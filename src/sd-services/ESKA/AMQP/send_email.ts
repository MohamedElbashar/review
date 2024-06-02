// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq from '../../Data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL from '../../Data/quote'; //_splitter_
import * as SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq from './flows'; //_splitter_
//append_imports_end
export class send_email {
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
    this.serviceName = 'send_email';
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
      instance = new send_email(
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
    //appendnew_flow_send_email_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: send_email');
    //appendnew_flow_send_email_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: send_email');
    //appendnew_flow_send_email_HttpIn
  }
  //   service flows_send_email

  async sendEmailSmsQuoteshare(
    parentSpanInst,
    quote_data: any = undefined,
    eska_response: any = undefined,
    policy_document: any = undefined,
    premium: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sendEmailSmsQuoteshare',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_data,
        eska_response,
        policy_document,
        premium,
        product_id,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPdfs(bh, parentSpanInst);
      //appendnew_next_sendEmailSmsQuoteshare
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
        'sd_IJlChGoaLM3n18Mh',
        spanInst,
        'sendEmailSmsQuoteshare'
      );
    }
  }

  async sendEmail(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    let bh: any = {
      input: {
        result,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.messageParsing(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PERbxwytk3YJjYEh',
        spanInst,
        'sendEmail'
      );
    }
  }

  async policyDocument(
    parentSpanInst,
    PolicySegmantCode: any = undefined,
    quote_data: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'policyDocument',
      parentSpanInst
    );
    let bh: any = {
      input: {
        PolicySegmantCode,
        quote_data,
        product_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mn7sl9meuBmqE04c(bh, parentSpanInst);
      //appendnew_next_policyDocument
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
        'sd_pldVs2O3iXMx7yAX',
        spanInst,
        'policyDocument'
      );
    }
  }

  async premiumCalculation(
    parentSpanInst,
    quote_summary: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'premiumCalculation',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        product_id,
      },
      local: {
        premium: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cL4XqOhTV9ArMUoY(bh, parentSpanInst);
      //appendnew_next_premiumCalculation
      return (
        // formatting output variables
        {
          input: {},
          local: {
            premium: bh.local.premium,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j8gQbhsUrcS7B2iG',
        spanInst,
        'premiumCalculation'
      );
    }
  }

  async sendSms(
    parentSpanInst,
    quote_data: any = undefined,
    eska_response: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendSms', parentSpanInst);
    let bh: any = {
      input: {
        quote_data,
        eska_response,
        product_id,
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
        'sd_vEzOh5ACAd7RFBMo',
        spanInst,
        'sendSms'
      );
    }
  }

  async getPdf(parentSpanInst, remote_path: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('getPdf', parentSpanInst);
    let bh: any = {
      input: {
        remote_path,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TZTmNa7Yd8bKxrw2(bh, parentSpanInst);
      //appendnew_next_getPdf
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
        'sd_JkIpW1XQhJ34NXDK',
        spanInst,
        'getPdf'
      );
    }
  }
  //appendnew_flow_send_email_start

  async getPdfs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getPdfs', parentSpanInst);
    try {
      const eska_response = bh.input.eska_response;
      const axios = require('axios');
      const FormData = require('form-data');
      const quote_details = bh.input.quote_data?.quote_details;
      let customer_name = '';

      //Filtered risk_items based on risk_items
      const filtered_risk_items =
        bh.input.quote_data?.risk_item_details?.filter(
          (risk_item) => risk_item?.product_code == bh.input.product_id
        );
      bh.input.quote_data.risk_item_details = filtered_risk_items;

      bh.send_material_fact_letter =
        bh.input.quote_data?.risk_item_details?.some(
          (risk_item) => risk_item?.addl_details?.manual_entry == 'true'
        );
      log.info(
        `[QUOTE_ID::${bh.input.quote_data.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][SEND_MATERIAL_FACT_LETTER?][${bh.send_material_fact_letter}]`
      );

      const fetchData = async (bh) => {
        try {
          if (quote_details?.customer_type_id == 2) {
            customer_name = quote_details?.company_name;
          } else {
            customer_name =
              quote_details?.first_name + ' ' + quote_details?.last_name;
          }

          // Prepare email data
          const emailData = new FormData();
          const params = [
            {
              code: 'CUSTOMER_NAME',
              value: customer_name,
            },
            {
              code: 'REFERENCE_NUMBER',
              value: quote_details?.reference_number || '',
            },
            {
              code: 'POLICY_START_DATE',
              value: eska_response?.PolicyEffectiveDate || '',
            },
            {
              code: 'PRICE',
              value: bh.input.premium || '',
            },
            {
              code: 'POLICY_NUMBER',
              value: eska_response?.PolicySegmantCode || '',
            },
          ];
          emailData.append(
            'subject',
            eska_response?.PolicySegmantCode || 'Policy Issuance'
          );
          emailData.append('to', quote_details?.email_id);
          emailData.append('template_code', 'policy-issuance');
          emailData.append('params', JSON.stringify(params));
          emailData.append('html', 'true');
          emailData.append(
            'attachments',
            Buffer.from(bh.input.policy_document),
            {
              filename: `${eska_response?.PolicySegmantCode?.replace(
                '/',
                '_'
              )}.pdf`,
            }
          );

          //Hiding the material fact letter as confirmed by Pandian
          // if (bh.send_material_fact_letter) {
          //   try {
          //     log.info(`[QUOTE_ID::${bh.input.quote_data.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][SEND_MATERIAL_FACT_LETTER_PDF_REQUESTED]`);

          //     const axios = require('axios');
          //     bh.input.quote_data.quote_details['policy_number'] = bh.input.eska_response?.PolicySegmantCode
          //     const resp = await axios.post(process.env.DOC_MS_URL + "document/quote/vehicle-declaration", {
          //       quote_summary: bh.input.quote_data
          //     }, {
          //       headers: {
          //         "Content-Type": "application/json"
          //       },
          //       responseType: 'arraybuffer' // Ensure response data is treated as a buffer
          //     })
          //     emailData.append('attachments', Buffer.from(resp.data), {
          //       filename: `policy_cover_letter_${eska_response?.PolicySegmantCode?.replace('/', '_')}.pdf`
          //     });
          //     log.info(`[QUOTE_ID::${bh.input.quote_data.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][SEND_MATERIAL_FACT_LETTER_PDF_RECEIVED]`);
          //   }
          //   catch (err) {
          //     throw err
          //   }
          // }

          // Make API call to send email with PDF attachment
          const emailUrl = process.env.COMM_MS_URL + 'send-email';
          const emailHeaders = {
            ...emailData.getHeaders(),
          };
          await axios.post(emailUrl, emailData, {
            headers: emailHeaders,
          });

          return true; // Return true if successful
        } catch (error) {
          throw error; // Throw error if any step fails
        }
      };

      try {
        const res = await fetchData(bh);
        bh.local.response = res;
        log.info(
          `[QUOTE_ID::${quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][EMAIL_SENT]`
        );
      } catch (error) {
        log.info(
          `[QUOTE_ID::${quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][EMAIL][ERROR]`
        );
        throw error;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_getPdfs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JGD6hlXHC7eKEf75',
        spanInst,
        'getPdfs'
      );
    }
  }

  async messageParsing(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'messageParsing',
      parentSpanInst
    );
    try {
      bh.result = bh.input.result;

      bh.quote_id = bh.result.quote_id;
      bh.product_id = bh.result.product_id;
      bh.piid = bh.result.piid;
      bh.signal_name = bh.result.signal_name;
      bh.cid = bh.result.cid;

      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][SEND_EMAIL_QUEUE][START]`
      );

      bh.get_policy_audit_filter = {
        quote_id: bh.quote_id,
        product_id: bh.product_id,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_messageParsing
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m19kHAOGk2TPqRIa',
        spanInst,
        'messageParsing'
      );
    }
  }

  async quoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance: SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote =
        SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance.getQuoteSummary(
          spanInst,
          bh.quote_id,
          bh.product_id
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPolicyAudit(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i9Jhd3XiRpELTYvG',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async getPolicyAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance: SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows =
        SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance.getPolicyAudit(
          spanInst,
          bh.get_policy_audit_filter,
          bh.quote_id
        );
      bh.policy_audit_record = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getFilePath(bh, parentSpanInst);
      //appendnew_next_getPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7xupQ16gAs95AOWn',
        spanInst,
        'getPolicyAudit'
      );
    }
  }

  async getFilePath(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getFilePath',
      parentSpanInst
    );
    try {
      bh.eska_response = JSON.parse(
        bh.policy_audit_record?.eska_response || ''
      );
      bh.reference_no = bh.quote_summary?.quote_details?.reference_number;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPolicyDoc(bh, parentSpanInst);
      //appendnew_next_getFilePath
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_20wqJG8aZvGvG0tT',
        spanInst,
        'getFilePath'
      );
    }
  }

  async getPolicyDoc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyDoc',
      parentSpanInst
    );
    try {
      let outputVariables = await this.policyDocument(
        spanInst,
        bh.eska_response.PolicySegmantCode,
        bh.quote_summary,
        bh.product_id
      );
      bh.policy_document = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.premiumCalc(bh, parentSpanInst);
      //appendnew_next_getPolicyDoc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M1fqwzeSmNvA49x7',
        spanInst,
        'getPolicyDoc'
      );
    }
  }

  async premiumCalc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'premiumCalc',
      parentSpanInst
    );
    try {
      let outputVariables = await this.premiumCalculation(
        spanInst,
        bh.quote_summary,
        bh.product_id
      );
      bh.premium = outputVariables.local.premium;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendEmailCall(bh, parentSpanInst);
      //appendnew_next_premiumCalc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HmC4opvUZcommeOi',
        spanInst,
        'premiumCalc'
      );
    }
  }

  async sendEmailCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendEmailCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.sendEmailSmsQuoteshare(
        spanInst,
        bh.quote_summary,
        bh.eska_response,
        bh.policy_document,
        bh.premium,
        bh.product_id
      );
      bh.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendsms(bh, parentSpanInst);
      //appendnew_next_sendEmailCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RBCOh3nARYR1JuHK',
        spanInst,
        'sendEmailCall'
      );
    }
  }

  async sendsms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendsms', parentSpanInst);
    try {
      let outputVariables = await this.sendSms(
        spanInst,
        bh.quote_summary,
        bh.eska_response,
        bh.product_id
      );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendSignal1(bh, parentSpanInst);
      //appendnew_next_sendsms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tuDbB5uoDnL4xYDv',
        spanInst,
        'sendsms'
      );
    }
  }

  async sendSignal1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendSignal1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance: SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows =
        SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance.signal(
          spanInst,
          bh.signal_options,
          bh.quote_id,
          bh.cid,
          bh.piid,
          bh.signal_name,
          bh.product_id
        );
      bh.bpm_result = outputVariables.local.bpm_result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log2(bh, parentSpanInst);
      //appendnew_next_sendSignal1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u45YZIuQ7OE8insz',
        spanInst,
        'sendSignal1'
      );
    }
  }

  async log2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log2', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][SEND_EMAIL_QUEUE][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LCavOZ5vzlyEnjD6',
        spanInst,
        'log2'
      );
    }
  }

  async sd_mn7sl9meuBmqE04c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mn7sl9meuBmqE04c',
      parentSpanInst
    );
    try {
      bh.mock_policy_pdf = process.env.MOCK_POLICY_PDF == 'true' ? true : false;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KoZyKZozEkaccAG7(bh, parentSpanInst);
      //appendnew_next_sd_mn7sl9meuBmqE04c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mn7sl9meuBmqE04c',
        spanInst,
        'sd_mn7sl9meuBmqE04c'
      );
    }
  }

  async sd_KoZyKZozEkaccAG7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KoZyKZozEkaccAG7',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.mock_policy_pdf,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OLEBvRxv6IPSKEYR(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.mock_policy_pdf,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_TZTmNa7Yd8bKxrw2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KoZyKZozEkaccAG7',
        spanInst,
        'sd_KoZyKZozEkaccAG7'
      );
    }
  }

  async sd_OLEBvRxv6IPSKEYR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OLEBvRxv6IPSKEYR',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const FormData = require('form-data');
      try {
        const resp = await axios.post(
          process.env.DOC_MS_URL + 'document/quote/summary/',
          {
            quote_summary: bh.input.quote_data,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer', // Ensure response data is treated as a buffer
          }
        );
        bh.local.result = resp.data;
      } catch (err) {
        throw err;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OLEBvRxv6IPSKEYR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OLEBvRxv6IPSKEYR',
        spanInst,
        'sd_OLEBvRxv6IPSKEYR'
      );
    }
  }

  async sd_TZTmNa7Yd8bKxrw2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TZTmNa7Yd8bKxrw2',
      parentSpanInst
    );
    try {
      bh.remote_path =
        process.env.SFTP_BASE_FILE_PATH +
        `${
          bh.input?.PolicySegmantCode?.replace('/', '_') ||
          bh.input?.remote_path?.replace('/', '_')
        }.pdf`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sftpGet(bh, parentSpanInst);
      //appendnew_next_sd_TZTmNa7Yd8bKxrw2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TZTmNa7Yd8bKxrw2',
        spanInst,
        'sd_TZTmNa7Yd8bKxrw2'
      );
    }
  }

  async sftpGet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sftpGet', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_data?.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][SFTP_PATH][${bh.remote_path}][START]`
      );

      const Client = require('ssh2-sftp-client');

      async function downloadFileToBufferWithRetry() {
        const sftp = new Client();
        const config = {
          host: process.env.SFTP_HOST,
          user: process.env.SFTP_USER_NAME,
          password: process.env.SFTP_PASSWORD,
          port: 22,
          retries: 3, // integer. Number of times to retry connecting
          retry_factor: 2, // integer. Time factor used to calculate time between retries
          retry_minTimeout: 1000, // integer. Minimum timeout between attempts
        };
        const remoteFilePath = bh.remote_path;

        try {
          await sftp.connect(config);
          const data = await sftp.get(remoteFilePath);
          log.info(
            `[QUOTE_ID::${
              bh.input.quote_data?.quote_details?.id || ''
            }][PRODUCT_ID::${
              bh.input.product_id
            }]::[FILE_DOWNLOADED_SUCCESSFULLY]`
          );
          bh.local.result = data;
          return data;
        } catch (err) {
          log.info(`SFTP Error : ${err}`);
          throw err;
        }
      }
      await downloadFileToBufferWithRetry();

      log.info(
        `[QUOTE_ID::${
          bh.input.quote_data?.quote_details?.id || ''
        }][PRODUCT_ID::${bh.input.product_id}][SFTP_PATH][${
          bh.remote_path
        }][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sftpGet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q9Ps93w5aeNND9jF',
        spanInst,
        'sftpGet'
      );
    }
  }

  async sd_cL4XqOhTV9ArMUoY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cL4XqOhTV9ArMUoY',
      parentSpanInst
    );
    try {
      const quote_summary = bh.input.quote_summary;
      log.info(
        `[QUOTE_ID::${quote_summary?.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][PREMIUM_CALCULATION][START]`
      );
      const selectRiskItemsByProductCode = (quoteData, productCode) => {
        const selectedRiskItems = [];
        quoteData.risk_item_details.forEach((riskItem) => {
          if (riskItem.premium_details?.product_code == productCode) {
            selectedRiskItems.push(riskItem);
          }
        });
        return selectedRiskItems;
      };

      const filteredRiskItems = selectRiskItemsByProductCode(
        quote_summary,
        bh.input.product_id
      );

      const filterRiskIds = (selectedItems, addonsDetails) => {
        const selectedRiskIds = selectedItems.map((item) => item.id.toString());
        const filteredAddons = addonsDetails.filter((addon) => {
          return addon.risk_id.some((id) => selectedRiskIds.includes(id));
        });
        return filteredAddons;
      };

      const filteredAddons = filterRiskIds(
        filteredRiskItems,
        quote_summary.addons_details
      );
      const sumPremiumsMethod = (filteredAddons) =>
        filteredAddons.reduce((total, addon) => total + addon.premium, 0);

      const sumAddonPremiums = sumPremiumsMethod(filteredAddons) || 0;
      const sumPremiums = sumPremiumsMethod(filteredRiskItems) || 0;

      bh.local.premium =
        Math.round((sumAddonPremiums + sumPremiums + Number.EPSILON) * 100) /
        100;

      log.info(
        `[QUOTE_ID::${quote_summary?.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][PREMIUM_CALCULATION][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cL4XqOhTV9ArMUoY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cL4XqOhTV9ArMUoY',
        spanInst,
        'sd_cL4XqOhTV9ArMUoY'
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
      let locale = 'en';
      bh.body = {
        to: bh.input.quote_data?.quote_details?.phone_no,
        template_code: 'policy-issuance',
        params: [
          {
            code: 'POLICYNO',
            value: bh.input.eska_response?.PolicySegmantCode,
          },
        ],
        locale: locale,
      };

      log.info(
        `[QUOTE_ID::${bh.input.quote_data?.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][SMS_START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IAr1x4Mf8t3n9n7D(bh, parentSpanInst);
      //appendnew_next_setBodySms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hxDF2zg6N13kwYZd',
        spanInst,
        'setBodySms'
      );
    }
  }

  async sd_IAr1x4Mf8t3n9n7D(bh, parentSpanInst) {
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
      //appendnew_next_sd_IAr1x4Mf8t3n9n7D
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IAr1x4Mf8t3n9n7D');
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

      log.info(
        `[QUOTE_ID::${bh.input.quote_data?.quote_details?.id}][PRODUCT_ID::${bh.input.product_id}][SMS_SENT]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zXY9fqddvdtizF6b',
        spanInst,
        'setResponse'
      );
    }
  }

  async errorSms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errorSms', parentSpanInst);
    try {
      bh.local.response =
        'Failed to send to this sms ' +
        bh.input.quote_data?.quote_details?.phone_no;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_errorSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ejXfdCFKXqc0WBjO',
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
      (await this.sd_509PRXSFm5H2HslP(bh, parentSpanInst))
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
  async sd_509PRXSFm5H2HslP(bh, parentSpanInst) {
    const nodes = ['sd_0IjOEH5sPCLTHNnW', 'sd_ZOxt3F2gAmCDznCf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.errorSms(bh, parentSpanInst);
      //appendnew_next_sd_509PRXSFm5H2HslP
      return true;
    }
    return false;
  }
  //appendnew_flow_send_email_Catch
}
