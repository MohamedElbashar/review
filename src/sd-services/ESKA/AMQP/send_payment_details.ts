// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq from '../../Data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL from '../../Data/quote'; //_splitter_
import * as SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m from '../eska_apis'; //_splitter_
import * as SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq from './flows'; //_splitter_
//append_imports_end
export class send_payment_details {
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
    this.serviceName = 'send_payment_details';
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
      instance = new send_payment_details(
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
    //appendnew_flow_send_payment_details_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: send_payment_details');
    //appendnew_flow_send_payment_details_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: send_payment_details');
    //appendnew_flow_send_payment_details_HttpIn
  }
  //   service flows_send_payment_details

  async sendPaymentDetails(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sendPaymentDetails',
      parentSpanInst
    );
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
      //appendnew_next_sendPaymentDetails
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
        'sd_jIzmoeOtHaALrmDs',
        spanInst,
        'sendPaymentDetails'
      );
    }
  }

  async sendPayment(
    parentSpanInst,
    reference_number: any = undefined,
    policy_id: any = undefined,
    quote_summary: any = undefined,
    piid: any = undefined,
    product_id: any = undefined,
    quote_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sendPayment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reference_number,
        policy_id,
        quote_summary,
        piid,
        product_id,
        quote_id,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.loadPolicy(bh, parentSpanInst);
      //appendnew_next_sendPayment
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
        'sd_Sphr5sUH5BgLrLW7',
        spanInst,
        'sendPayment'
      );
    }
  }

  async getTxn(
    parentSpanInst,
    source_id_no: any = undefined,
    quote_id: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('getTxn', parentSpanInst);
    let bh: any = {
      input: {
        source_id_no,
        quote_id,
        product_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wDx5udNqTwrKV2Hl(bh, parentSpanInst);
      //appendnew_next_getTxn
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
        'sd_bkHDyxG4XR1cpLcz',
        spanInst,
        'getTxn'
      );
    }
  }
  //appendnew_flow_send_payment_details_start

  async messageParsing(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'messageParsing',
      parentSpanInst
    );
    try {
      bh.result = bh.input.result;

      bh.product_id = bh.result.product_id;
      bh.quote_id = bh.result.quote_id;
      bh.piid = bh.result.piid;
      bh.signal_name = bh.result.signal_name;
      bh.cid = bh.result.cid;

      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][SEND_PAYMENT_DETIALS][START]`
      );

      bh.get_policy_audit_filter = {
        quote_id: bh.quote_id,
        product_id: bh.product_id,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPolicyAudit(bh, parentSpanInst);
      //appendnew_next_messageParsing
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BndDvCUx06JRBDrz',
        spanInst,
        'messageParsing'
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
      bh = await this.request(bh, parentSpanInst);
      //appendnew_next_getPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yoa8TB8UrhxZa8nI',
        spanInst,
        'getPolicyAudit'
      );
    }
  }

  async request(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('request', parentSpanInst);
    try {
      const eska_response = JSON.parse(
        bh.policy_audit_record?.eska_response || ''
      );
      bh.policy_id = eska_response?.PolicyID;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_request
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1b3V297wEubLPTOH',
        spanInst,
        'request'
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
      bh = await this.sendPay(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a0hp7kk0E6BpyJUr',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async sendPay(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendPay', parentSpanInst);
    try {
      let outputVariables = await this.sendPayment(
        spanInst,
        bh.quote_summary['quote_details']['reference_number'],
        bh.policy_id,
        bh.quote_summary,
        bh.piid,
        bh.product_id,
        bh.quote_id
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendSignal(bh, parentSpanInst);
      //appendnew_next_sendPay
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aW4SYSS3uNJaamhv',
        spanInst,
        'sendPay'
      );
    }
  }

  async sendSignal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendSignal',
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
      bh = await this.log1(bh, parentSpanInst);
      //appendnew_next_sendSignal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_krarVBPMyWvHu2Yt',
        spanInst,
        'sendSignal'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][SEND_PAYMENT_DETIALS][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R0XsOxRKUPHqguVw',
        spanInst,
        'log1'
      );
    }
  }

  async loadPolicy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'loadPolicy',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.loadPolicy(
          spanInst,
          bh.input.policy_id
        );
      bh.load_policy = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentTxn(bh, parentSpanInst);
      //appendnew_next_loadPolicy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ev4GU2wIpW6rC7mo',
        spanInst,
        'loadPolicy'
      );
    }
  }

  async paymentTxn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentTxn',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getTxn(
        spanInst,
        bh.input.reference_number,
        bh.input.quote_id,
        bh.input.product_id
      );
      bh.payment_details = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X9900j9YorkeAnha(bh, parentSpanInst);
      //appendnew_next_paymentTxn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z1xwCPW1yr0OM099',
        spanInst,
        'paymentTxn'
      );
    }
  }

  async sd_X9900j9YorkeAnha(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X9900j9YorkeAnha',
      parentSpanInst
    );
    try {
      bh.payloadObj = {
        paymentMethod: bh.payment_details?.['payment_method'],
        sourceSystem:
          bh.payment_details?.['payment_method'] == 'MOKAFAA' ? 'ARB' : '',
        uniqueCount: bh.payment_details?.['id'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateReceipt(bh, parentSpanInst);
      //appendnew_next_sd_X9900j9YorkeAnha
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X9900j9YorkeAnha',
        spanInst,
        'sd_X9900j9YorkeAnha'
      );
    }
  }

  async generateReceipt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateReceipt',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance: SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows =
        SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance.generateReceipt(
          spanInst,
          bh.payloadObj,
          bh.input.piid
        );
      bh.receipt_number = outputVariables.local.receipt_number;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendPayApigee(bh, parentSpanInst);
      //appendnew_next_generateReceipt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_05jQ13DW62Jpc9B6',
        spanInst,
        'generateReceipt'
      );
    }
  }

  async sendPayApigee(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sendPayApigee',
      parentSpanInst
    );
    try {
      const moment = require('moment');

      const timestamp = moment().format('YYYY-MM-DDThh:mm:ss');
      bh.payload = {
        MsgId: '12345678',
        TransId: '12345678',
        DestAppId: 'ERP',
        DocCreated: timestamp,
        AuthKey: '12345678',
        DocNum: bh.load_policy?.['GeneralPolicy']?.['DocumentID'],
        OperatingUnit: 'Al Rajhi Operating Unit',
        TransactionNumber: bh.load_policy?.['GeneralPolicy']?.['VoucherNo']?.[
          'nil'
        ]
          ? ''
          : bh.load_policy?.['GeneralPolicy']?.['VoucherNo'],
        ReceiptCurrency: 'SAR',
        Amount:
          bh.load_policy?.['GeneralPolicy']?.['TotalInstallmentsAmount'] || '',
        ReceiptMethod: getReceiptMethod(), // "ReceiptMethod": paymentMethod.toLowerCase() === 'sadad' ? 'ARB_Sadad-AC16096' : paymentMethod.toLowerCase() === 'emkan' ? 'EMKAN' : paymentMethod.toLowerCase() === 'urpay' ? URPAY_ERP_RECEIPT_METHOD : paymentMethod.toLowerCase() === 'mokafaa' ? 'MOKAFAA' : paymentMethod.toLowerCase() === 'surplus' ? 'SURPLUS' : 'ARB_HyperPay_Websales-AC16096'
        Date: timestamp,
        Created: timestamp,
        CustomerNumber:
          bh.input.quote_summary?.['quote_details']?.['eska_details']?.[
            'AccountedCustomerSegmentCode'
          ] ||
          process.env.ESKA_SEG_CODE ||
          '1134310868',
        CustomerName:
          bh.input.quote_summary?.['quote_details']?.['eska_details']?.[
            'PremiumAccountName'
          ] ||
          process.env.ESKA_PREM_ACCOUNT ||
          'Cash Premium-Web Sales Br 4500',
        BalanceAmount:
          bh.load_policy?.['GeneralPolicy']?.['TotalInstallmentsAmount'] || '', // Collected Amount
        CheckNumber:
          bh.payment_details?.['transaction_receipt'] ||
          bh.payment_details?.['id'], // generated by DCP that identifies a unique payment transaction in DCP
        CheckDate: timestamp,
        PolicyNumber: bh.load_policy?.['GeneralPolicy']?.['SegmentCode'] || '', //
        DataSource: 'AUTOMATIC RECEIPTS RETAIL', //hardcoded in DCP - new value to be decided
        UnderWritingYear: moment().format('YYYY'), // current year
        ProcessedDate: timestamp,
        SourceAppId: 'NEUTRINOS-SALES-PORTAL', // Hardcoded in DCP - add the new portal name ()
        TransDesc: 'NEUTRINOS-SALES-PORTAL', // Hardcoded in DCP- add the new portal name ()
        CreatedByName: 'NEUTRINOS-SALES-PORTAL', // Hardcoded in DCP- add the new portal name ()
        Remarks: `Receipt voucher creation from NEUTRINOS-SALES-PORTAL for ${bh.payment_details['payment_method']} transaction - ${bh.receipt_number}`,
        Comments: `Receipt voucher creation from NEUTRINOS-SALES-PORTAL for ${
          bh.payment_details['payment_method']
        } transaction - ${
          bh.payment_details?.['transaction_receipt'] ||
          bh.payment_details?.['id']
        }`,
        receiptNumber: bh.receipt_number, // must be the same for multiple debit notes
      };

      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${
          bh.input.product_id
        }][SEND_PAYMENT_DETAILS][PAYLOAD]::${JSON.stringify(bh.payload)}`
      );

      function getReceiptMethod() {
        let paymentMethod = bh.payment_details['payment_method'].toLowerCase();
        if (paymentMethod === 'sadad_vs') {
          return 'ARB_Sadad-AC16096';
        } else if (paymentMethod === 'emkan') {
          return 'Emkan';
        } else if (paymentMethod === 'urpay') {
          return 'Urpay';
        } else if (paymentMethod === 'mokafaa') {
          return 'Mokafaa';
        } else if (paymentMethod === 'tabby') {
          return 'Tabby';
        } else if (paymentMethod === 'stc_pay') {
          return 'StcPay';
        } else if (paymentMethod === 'surplus') {
          return 'SURPLUS';
        } else {
          return 'ARB_HyperPay_Neutrinos-AC16096';
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendTrans(bh, parentSpanInst);
      //appendnew_next_sendPayApigee
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3jQGIh1mjwlkLIYa',
        spanInst,
        'sendPayApigee'
      );
    }
  }

  async sendTrans(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendTrans', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.sendTransactionDetails(
          spanInst,
          bh.payload
        );
      bh.result = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8mVHTWS92DKOncKR(bh, parentSpanInst);
      //appendnew_next_sendTrans
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fKOLuDDkigzBZ5ld',
        spanInst,
        'sendTrans'
      );
    }
  }

  async sd_8mVHTWS92DKOncKR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8mVHTWS92DKOncKR',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${
          bh.input.product_id
        }][SEND_PAYMENT_DETAILS][RESULT]::${JSON.stringify(bh.result)}`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8mVHTWS92DKOncKR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8mVHTWS92DKOncKR',
        spanInst,
        'sd_8mVHTWS92DKOncKR'
      );
    }
  }

  async sd_wDx5udNqTwrKV2Hl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wDx5udNqTwrKV2Hl',
      parentSpanInst
    );
    try {
      bh.url = `${process.env.PAYMENT_URL}get_transaction?source_id_no=${bh.input.source_id_no}`;

      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][GET_TRANSACTION_DETAILS][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WnfhJ29liWV8aSrE(bh, parentSpanInst);
      //appendnew_next_sd_wDx5udNqTwrKV2Hl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wDx5udNqTwrKV2Hl',
        spanInst,
        'sd_wDx5udNqTwrKV2Hl'
      );
    }
  }

  async sd_WnfhJ29liWV8aSrE(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
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

      bh.local.result = responseMsg;
      bh = await this.sd_EUCT2ymvwvHji8IC(bh, parentSpanInst);
      //appendnew_next_sd_WnfhJ29liWV8aSrE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WnfhJ29liWV8aSrE');
    }
  }

  async sd_EUCT2ymvwvHji8IC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EUCT2ymvwvHji8IC',
      parentSpanInst
    );
    try {
      if (bh.local.result?.['payload']) {
        bh.local.result = bh.local.result?.['payload'];
      }

      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][GET_TRANSACTION_DETAILS][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_EUCT2ymvwvHji8IC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EUCT2ymvwvHji8IC',
        spanInst,
        'sd_EUCT2ymvwvHji8IC'
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
  //appendnew_flow_send_payment_details_Catch
}
