// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import * as SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB from '../Email/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_garlOThj4kVRVw8w from '../SMS/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS from '../Strapi/flows'; //_splitter_
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

  async sendOTP(
    parentSpanInst,
    OtpType = '',
    PurposeCode = '',
    UID = '',
    Params: any = undefined,
    TxId = '',
    Message = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendOTP', parentSpanInst);
    let bh: any = {
      input: {
        OtpType,
        PurposeCode,
        UID,
        Params,
        TxId,
        Message,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validate_uid(bh, parentSpanInst);
      //appendnew_next_sendOTP
      return (
        // formatting output variables
        {
          input: {
            TxId: bh.input.TxId,
            Message: bh.input.Message,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bMpefqZ9NA6Z6ctB',
        spanInst,
        'sendOTP'
      );
    }
  }

  async validateUID(
    parentSpanInst,
    OtpType = '',
    UID = '',
    error = 'NO_ERR',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validateUID',
      parentSpanInst
    );
    let bh: any = {
      input: {
        OtpType,
        UID,
        error,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AK93WbQLgWjHuIKh(bh, parentSpanInst);
      //appendnew_next_validateUID
      return (
        // formatting output variables
        {
          input: {
            UID: bh.input.UID,
            error: bh.input.error,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O4W5fCPvMhKsLPvB',
        spanInst,
        'validateUID'
      );
    }
  }

  async verifyOTP(
    parentSpanInst,
    TxId = '',
    OtpValue = '',
    Status = false,
    Message: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('verifyOTP', parentSpanInst);
    let bh: any = {
      input: {
        TxId,
        OtpValue,
        Status,
        Message,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setFilter0(bh, parentSpanInst);
      //appendnew_next_verifyOTP
      return (
        // formatting output variables
        {
          input: {
            Status: bh.input.Status,
            Message: bh.input.Message,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KW2AN0rTiZ2otO8P',
        spanInst,
        'verifyOTP'
      );
    }
  }
  //appendnew_flow_flows_start

  async validate_uid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validate_uid',
      parentSpanInst
    );
    try {
      let outputVariables = await this.validateUID(
        spanInst,
        bh.input.OtpType,
        bh.input.UID,
        undefined
      );
      bh.input.UID = outputVariables.input.UID;
      bh.error = outputVariables.input.error;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4Qx83ahPcyc1WbIS(bh, parentSpanInst);
      //appendnew_next_validate_uid
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kcYk8Y7U5mqlDPFQ',
        spanInst,
        'validate_uid'
      );
    }
  }

  async sd_4Qx83ahPcyc1WbIS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4Qx83ahPcyc1WbIS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.error, 'NO_ERR', undefined, undefined)
      ) {
        bh = await this.sd_iza3avNiLSQzUNXo(bh, parentSpanInst);
      } else {
        bh = await this.sd_IRR5tf0yRbEtBUT7(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4Qx83ahPcyc1WbIS',
        spanInst,
        'sd_4Qx83ahPcyc1WbIS'
      );
    }
  }

  async sd_iza3avNiLSQzUNXo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iza3avNiLSQzUNXo',
      parentSpanInst
    );
    try {
      const otpGenerator = require('otp-generator');
      bh.tx_id = otpGenerator.generate(20, { specialChars: false });
      bh.otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      bh.otp_type = bh.input.OtpType;
      bh.reciever_id = bh.input.UID;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTemplate0(bh, parentSpanInst);
      //appendnew_next_sd_iza3avNiLSQzUNXo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iza3avNiLSQzUNXo',
        spanInst,
        'sd_iza3avNiLSQzUNXo'
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
          bh.input.PurposeCode,
          undefined,
          undefined
        );
      bh.template = outputVariables.local.template;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZlDlzLpRFpWP51qe(bh, parentSpanInst);
      //appendnew_next_getTemplate0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xja2eBQIwx1QgOVL',
        spanInst,
        'getTemplate0'
      );
    }
  }

  async sd_ZlDlzLpRFpWP51qe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZlDlzLpRFpWP51qe',
      parentSpanInst
    );
    try {
      bh.message = '';
      bh.status = false;
      if (bh.input.OtpType == 'SMS') {
        bh.phone = bh.input.UID;
        bh.message = bh.template?.['sms_template'] || '';
      } else if (bh.input.OtpType == 'EMAIL') {
        bh.email = bh.input.UID;
        bh.message = bh.template?.input['email_template'] || '';
        bh.subject = 'OTP for verification';
      }

      if (bh.message) {
        bh.status = true;
        bh.input.Params = bh.input.Params || [];
        bh.input.Params.push({
          code: 'OTP',
          value: bh.otp,
        });
        bh.input.Params.forEach((x) => {
          bh.message = bh.message.replace('%%' + x.code + '%%', x.value);
        });
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.template_found(bh, parentSpanInst);
      //appendnew_next_sd_ZlDlzLpRFpWP51qe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZlDlzLpRFpWP51qe',
        spanInst,
        'sd_ZlDlzLpRFpWP51qe'
      );
    }
  }

  async template_found(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'template_found',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RH9Ziv8BwKoYqncf(bh, parentSpanInst);
      } else {
        bh = await this.sd_87I8RfJw6vwzsXQK(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gaRn4lj4lauANpSZ',
        spanInst,
        'template_found'
      );
    }
  }

  async sd_RH9Ziv8BwKoYqncf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RH9Ziv8BwKoYqncf',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.OtpType,
          'SMS',
          undefined,
          undefined
        )
      ) {
        bh = await this.send_sms(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.OtpType,
          'EMAIL',
          undefined,
          undefined
        )
      ) {
        bh = await this.send_email(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RH9Ziv8BwKoYqncf',
        spanInst,
        'sd_RH9Ziv8BwKoYqncf'
      );
    }
  }

  async send_sms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('send_sms', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_garlOThj4kVRVw8wInstance: SSD_SERVICE_ID_sd_garlOThj4kVRVw8w.flows =
        SSD_SERVICE_ID_sd_garlOThj4kVRVw8w.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_garlOThj4kVRVw8wInstance.sendSMS(
          spanInst,
          bh.message,
          bh.phone
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sms_send(bh, parentSpanInst);
      //appendnew_next_send_sms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BgA2jiN0Bc5gBAkE',
        spanInst,
        'send_sms'
      );
    }
  }

  async sms_send(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sms_send', parentSpanInst);
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uzDgY9UaBdi04lhb(bh, parentSpanInst);
      } else {
        bh = await this.sd_Bttti4GtA4FhP1CD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ku5oUj2LO1a3hkyi',
        spanInst,
        'sms_send'
      );
    }
  }

  async sd_uzDgY9UaBdi04lhb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uzDgY9UaBdi04lhb',
      parentSpanInst
    );
    try {
      bh.input.TxId = bh.tx_id;
      bh.generated_at = new Date(Date.now());
      bh.expires_at = new Date(
        new Date().getTime() + bh.system.environment.OTP_EXPIRY_MIN * 60 * 1000
      );

      bh.query = `INSERT INTO "otp_registry"("tx_id","otp_type", "reciever_id", "uid", "serial_no", "purpose_code", "generated_at", "expires_at", "retries","verified") VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10)`;

      bh.params = [
        bh.tx_id,
        bh.input.OtpType,
        bh.input.UID,
        bh.uid,
        bh.serialNo,
        bh.purpose_code,
        bh.generated_at,
        bh.expires_at,
        0,
        'N',
      ];
      bh.input.PurposeCode;
      bh.request = {
        tx_id: bh.tx_id,
        otp_type: bh.input.OtpType,
        otp: bh.otp,
        reciever_id: bh.input.UID,
        purpose_code: bh.input.PurposeCode,
        generated_at: bh.generated_at,
        expires_at: bh.expires_at,
        retries: 0,
        verified: false,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1idEqYTHTatd4DYt(bh, parentSpanInst);
      //appendnew_next_sd_uzDgY9UaBdi04lhb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uzDgY9UaBdi04lhb',
        spanInst,
        'sd_uzDgY9UaBdi04lhb'
      );
    }
  }

  async sd_1idEqYTHTatd4DYt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1idEqYTHTatd4DYt',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_XoHPoDdBdK8B4reI');
      bh.result = await dmUtilsInst.insert('_EN_xmu5gi50dz', bh.request);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1idEqYTHTatd4DYt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1idEqYTHTatd4DYt',
        spanInst,
        'sd_1idEqYTHTatd4DYt'
      );
    }
  }

  async sd_Bttti4GtA4FhP1CD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bttti4GtA4FhP1CD',
      parentSpanInst
    );
    try {
      console.log('Send sms failed, Failed to send OTP');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Bttti4GtA4FhP1CD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bttti4GtA4FhP1CD',
        spanInst,
        'sd_Bttti4GtA4FhP1CD'
      );
    }
  }

  async send_email(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'send_email',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgBInstance: SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB.flows =
        SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgBInstance.sendEMAIL(
          spanInst,
          bh.message,
          bh.email,
          bh.subject,
          undefined
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.email_send(bh, parentSpanInst);
      //appendnew_next_send_email
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pN9QfDfAGFyW8hBm',
        spanInst,
        'send_email'
      );
    }
  }

  async email_send(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'email_send',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uzDgY9UaBdi04lhb(bh, parentSpanInst);
      } else {
        bh = await this.sd_N2aUg19NCPk60MVX(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iVW6B66YLOa6wr8r',
        spanInst,
        'email_send'
      );
    }
  }

  async sd_N2aUg19NCPk60MVX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N2aUg19NCPk60MVX',
      parentSpanInst
    );
    try {
      console.log('Send email failed, Failed to send OTP');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_N2aUg19NCPk60MVX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N2aUg19NCPk60MVX',
        spanInst,
        'sd_N2aUg19NCPk60MVX'
      );
    }
  }

  async sd_87I8RfJw6vwzsXQK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_87I8RfJw6vwzsXQK',
      parentSpanInst
    );
    try {
      console.log('Template not found, Failed to send OTP');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_87I8RfJw6vwzsXQK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_87I8RfJw6vwzsXQK',
        spanInst,
        'sd_87I8RfJw6vwzsXQK'
      );
    }
  }

  async sd_IRR5tf0yRbEtBUT7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IRR5tf0yRbEtBUT7',
      parentSpanInst
    );
    try {
      console.log(bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_IRR5tf0yRbEtBUT7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IRR5tf0yRbEtBUT7',
        spanInst,
        'sd_IRR5tf0yRbEtBUT7'
      );
    }
  }

  async sd_AK93WbQLgWjHuIKh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AK93WbQLgWjHuIKh',
      parentSpanInst
    );
    try {
      const validator = require('validator');
      const otp_type = bh.input.OtpType.toLowerCase() || '';
      let uid = bh.input.UID || '';

      if (otp_type == 'email') {
        if (!validator.isEmail(uid)) {
          bh.input.error = 'INVALID_EMAIL';
        }
      } else if (otp_type == 'sms') {
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
          bh.input.error = 'INVALID_MOBILE_NO';
        } else {
          //prefix always with 966
          bh.input.UID = '966' + uid;
        }
      } else {
        bh.input.error = 'INVALID_OTP_TYPE';
      }
      //return with
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AK93WbQLgWjHuIKh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AK93WbQLgWjHuIKh',
        spanInst,
        'sd_AK93WbQLgWjHuIKh'
      );
    }
  }

  async setFilter0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setFilter0',
      parentSpanInst
    );
    try {
      bh.filter = {
        tx_id: bh.input.TxId,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CABTJuIrmufneAxT(bh, parentSpanInst);
      //appendnew_next_setFilter0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kr54wlC1Y6alSy5Y',
        spanInst,
        'setFilter0'
      );
    }
  }

  async sd_CABTJuIrmufneAxT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CABTJuIrmufneAxT',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_XoHPoDdBdK8B4reI');
      bh.result = await dmUtilsInst.find(
        '_EN_xmu5gi50dz',
        { tx_id: bh.input.TxId },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkExpiry(bh, parentSpanInst);
      //appendnew_next_sd_CABTJuIrmufneAxT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CABTJuIrmufneAxT',
        spanInst,
        'sd_CABTJuIrmufneAxT'
      );
    }
  }

  async checkExpiry(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkExpiry',
      parentSpanInst
    );
    try {
      bh.status = true;
      if (bh.result?.[0]?.tx_id && !bh.result?.[0]?.verified) {
        bh.row = bh.result[0];
        bh.otp_type = bh.row['otp_type'];
        bh.reciever_id = bh.row['reciever_id'];
        bh.otp = bh.row['otp'];
        if (bh.row.expires_at < new Date()) {
          bh.input.Message = 'OTP expired';
          bh.status = bh.input.Status = false;
        } else if (bh.row.retries >= bh.system.environment.OTP_RETRY_COUNT) {
          bh.input.Message = {
            error: `${bh.system.environment.OTP_RETRY_COUNT}/${bh.system.environment.OTP_RETRY_COUNT} Attempts reached`,
            // description: `You have reached the maximum allowance to enter OTP. Please try again after ${bh.system.environment.OTP_RETRY_HOUR} hours or with a different phone number.`
          };
          bh.status = bh.input.Status = false;
        }
      } else {
        bh.input.Message = 'Invalid request';
        bh.status = bh.input.Status = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0zeFotyKRTw0oa4A(bh, parentSpanInst);
      //appendnew_next_checkExpiry
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MKNemIEZLH3Ccnq8',
        spanInst,
        'checkExpiry'
      );
    }
  }

  async sd_0zeFotyKRTw0oa4A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0zeFotyKRTw0oa4A',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BEKMVwFl1OUuUkAe(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0zeFotyKRTw0oa4A',
        spanInst,
        'sd_0zeFotyKRTw0oa4A'
      );
    }
  }

  async sd_BEKMVwFl1OUuUkAe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BEKMVwFl1OUuUkAe',
      parentSpanInst
    );
    try {
      bh.status = bh.input.OtpValue == bh.otp;
      //SMS or EMAIL Mocking scenario
      if (!bh.status) {
        if (bh.system.environment.MOCK_SMS === 'true' && bh.otp_type == 'SMS') {
          bh.status = bh.input.OtpValue == '123456' ? true : false;
        } else if (
          bh.system.environment.MOCK_EMAIL === 'true' &&
          bh.otp_type == 'EMAIL'
        ) {
          bh.status = bh.input.OtpValue == '123456' ? true : false;
        } else if (bh.system.environment.ENV !== 'PROD') {
          bh.status = bh.input.OtpValue == '123456' ? true : false;
        }
      }

      bh.filter = {
        id: bh.row['id'],
      };

      if (bh.status) {
        bh.input.Status = true;
        bh.input.Message = {
          otp_type: bh.otp_type,
          reciever_id: bh.reciever_id,
        };
        bh.request = {
          verified: true,
          updated_date: new Date(Date.now()),
        };
      } else {
        bh.retries = bh.row['retries'] + 1;
        bh.input.Message = 'Invalid OTP';
        bh.input.Status = false;
        bh.request = {
          retries: bh.retries,
          updated_date: new Date(Date.now()),
        };
        if (bh.retries >= bh.system.environment.OTP_RETRY_COUNT) {
          bh.input.Message = {
            error: `${bh.system.environment.OTP_RETRY_COUNT}/${bh.system.environment.OTP_RETRY_COUNT} Attempts reached`,
            // description: `You have reached the maximum allowance to enter OTP. Please try again after ${bh.system.environment.OTP_RETRY_HOUR} hours or with a different phone number.`
          };
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FNuxG6MVsl4hEO48(bh, parentSpanInst);
      //appendnew_next_sd_BEKMVwFl1OUuUkAe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BEKMVwFl1OUuUkAe',
        spanInst,
        'sd_BEKMVwFl1OUuUkAe'
      );
    }
  }

  async sd_FNuxG6MVsl4hEO48(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FNuxG6MVsl4hEO48',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_XoHPoDdBdK8B4reI');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_xmu5gi50dz',
        bh.filter,
        bh.request
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_FNuxG6MVsl4hEO48
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FNuxG6MVsl4hEO48',
        spanInst,
        'sd_FNuxG6MVsl4hEO48'
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
