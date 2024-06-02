// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq from '../../Data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL from '../../Data/quote'; //_splitter_
import * as SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr from '../../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_J6X86g975hUioNVw from '../../NAJM/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m from '../eska_apis'; //_splitter_
import * as SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq from './flows'; //_splitter_
//append_imports_end
export class najm_upload {
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
    this.serviceName = 'najm_upload';
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
      instance = new najm_upload(
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
    //appendnew_flow_najm_upload_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: najm_upload');
    //appendnew_flow_najm_upload_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: najm_upload');
    //appendnew_flow_najm_upload_HttpIn
  }
  //   service flows_najm_upload

  async njamUpload(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'njamUpload',
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
      //appendnew_next_njamUpload
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
        'sd_SUFLpYgx5byKjpps',
        spanInst,
        'njamUpload'
      );
    }
  }

  async submitPolicy(
    parentSpanInst,
    quote_summary: any = undefined,
    product_id: any = undefined,
    policy_audit_record: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'submitPolicy',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        product_id,
        policy_audit_record,
      },
      local: {
        submit_policy_response: {},
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getHelperFunctions1(bh, parentSpanInst);
      //appendnew_next_submitPolicy
      return (
        // formatting output variables
        {
          input: {},
          local: {
            submit_policy_response: bh.local.submit_policy_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nbQLZcFIbQPFMjSl',
        spanInst,
        'submitPolicy'
      );
    }
  }

  async submitVehicle(
    parentSpanInst,
    quote_summary: any = undefined,
    product_id: any = undefined,
    najm_policy_response: any = undefined,
    policy_audit_record: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'submitVehicle',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        product_id,
        najm_policy_response,
        policy_audit_record,
      },
      local: {
        submit_vehicle_response: {},
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getHelperFunctions2(bh, parentSpanInst);
      //appendnew_next_submitVehicle
      return (
        // formatting output variables
        {
          input: {},
          local: {
            submit_vehicle_response: bh.local.submit_vehicle_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fYTKA0Ggu3XTNRS8',
        spanInst,
        'submitVehicle'
      );
    }
  }

  async getMasterData(
    parentSpanInst,
    filter: any = undefined,
    search_type: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getMasterData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        filter,
        search_type,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callMasterData(bh, parentSpanInst);
      //appendnew_next_getMasterData
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
        'sd_Tktr4UAAelacq3z4',
        spanInst,
        'getMasterData'
      );
    }
  }

  async sendEmail(
    parentSpanInst,
    vehicle_seq_cus: any = undefined,
    policy_no: any = undefined,
    email_id: any = undefined,
    quote_id: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    let bh: any = {
      input: {
        vehicle_seq_cus,
        policy_no,
        email_id,
        quote_id,
        product_id,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.emailId(bh, parentSpanInst);
      //appendnew_next_sendEmail
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
        'sd_9B7ElR3zQBVFgbiP',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sendSms(
    parentSpanInst,
    phone_no: any = undefined,
    policy_no: any = undefined,
    quote_id: any = undefined,
    vehicle_seq_cus: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('sendSms', parentSpanInst);
    let bh: any = {
      input: {
        phone_no,
        policy_no,
        quote_id,
        vehicle_seq_cus,
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
        'sd_HTBppzdhquChSB5Y',
        spanInst,
        'sendSms'
      );
    }
  }

  async sendSmsAsync(
    parentSpanInst,
    vehicle_seq_cus: any = undefined,
    policy_no: any = undefined,
    mobile_no: any = undefined,
    email_id: any = undefined,
    quote_id: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sendSmsAsync',
      parentSpanInst
    );
    let bh: any = {
      input: {
        vehicle_seq_cus,
        policy_no,
        mobile_no,
        email_id,
        quote_id,
        product_id,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hVvfNvUzMo4Tn7y6(bh, parentSpanInst);
      //appendnew_next_sendSmsAsync
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
        'sd_sDh4NrtzRBSAu78M',
        spanInst,
        'sendSmsAsync'
      );
    }
  }
  //appendnew_flow_najm_upload_start

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
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][NJAM_UPLOAD][START]`
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
        'sd_qKQE9eZFeiWBtmlu',
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
        'sd_eDrdHezWlCTPdSLJ',
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
      bh = await this.submitPolicyCall(bh, parentSpanInst);
      //appendnew_next_getPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_weaRmkh5vTtuqNmu',
        spanInst,
        'getPolicyAudit'
      );
    }
  }

  async submitPolicyCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'submitPolicyCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.submitPolicy(
        spanInst,
        bh.quote_summary,
        bh.product_id,
        bh.policy_audit_record
      );
      bh.submit_policy_response = outputVariables.local.submit_policy_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.submitVehicleCall(bh, parentSpanInst);
      //appendnew_next_submitPolicyCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XefCbPx4GctKqGFg',
        spanInst,
        'submitPolicyCall'
      );
    }
  }

  async submitVehicleCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'submitVehicleCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.submitVehicle(
        spanInst,
        bh.quote_summary,
        bh.product_id,
        bh.submit_policy_response,
        bh.policy_audit_record
      );
      bh.submit_vehicle_response =
        outputVariables.local.submit_vehicle_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyAuditMap(bh, parentSpanInst);
      //appendnew_next_submitVehicleCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mjfjDNWrtV1Rn9Z9',
        spanInst,
        'submitVehicleCall'
      );
    }
  }

  async policyAuditMap(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyAuditMap',
      parentSpanInst
    );
    try {
      bh.najm_response = {
        submit_policy: bh.submit_policy_response,
        submit_vehicle: bh.submit_vehicle_response,
      };

      bh.send_email_and_sms = true;

      const checkSubmission = (submissionData) => {
        // Check submit_policy
        if (
          submissionData?.submit_policy &&
          submissionData?.submit_policy?.nnPID == 0
        ) {
          bh.send_email_and_sms = false;
          //Setting signal Options if something failes in Najm Upload

          bh.signal_options = {
            Error: 'Najm Upload Error - Submit Policy',
            ErrorMessage: JSON.stringify(submissionData?.submit_policy),
            isError: true,
          };
          return bh.send_email_and_sms;
        }
        // Check submit_vehicle
        if (submissionData?.submit_vehicle) {
          const vehicles = Object.values(submissionData?.submit_vehicle);
          for (const vehicle of vehicles) {
            if (vehicle?.['nnVID'] == 0) {
              //Setting signal Options if something failes in Najm Upload
              bh.signal_options = {
                Error: 'Najm Upload Error - Submit Vehicle',
                ErrorMessage: JSON.stringify(vehicle),
                isError: true,
              };

              bh.send_email_and_sms = false;
              break;
            }
          }
        }

        if (bh.send_email_and_sms) {
          bh.policy_no =
            bh.najm_response?.['submit_policy']?.['najm_request']?.[
              'insertNewPolicy'
            ]?.['policyNumber'];
          bh.vehicle_seq_cus = [];
          bh.mobile_no =
            bh.najm_response?.['submit_policy']?.['najm_request']?.[
              'insertNewPolicy'
            ]?.['insuredPhoneNumber'];
          bh.email_id = bh.quote_summary?.quote_details?.email_id;
          const vehicles = Object.values(submissionData?.submit_vehicle);
          for (const vehicle of vehicles) {
            bh.vehicle_seq_cus.push(
              vehicle?.['najm_request']?.['insertNewVehicle']?.[
                'sequenceNumber'
              ] || vehicle?.['najm_request']?.['insertNewVehicle']?.['customId']
            );
          }
        }

        return bh.send_email_and_sms;
      };

      checkSubmission(bh.najm_response);

      bh.update_policy_audit = {
        filter: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
        },
        policy_audit: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
          najm_response: JSON.stringify(bh.najm_response),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PfVPSogi1wZsNL7d(bh, parentSpanInst);
      //appendnew_next_policyAuditMap
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FJjox2MN08QYPjoI',
        spanInst,
        'policyAuditMap'
      );
    }
  }

  async sd_PfVPSogi1wZsNL7d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PfVPSogi1wZsNL7d',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.send_email_and_sms,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.emailSmsCall(bh, parentSpanInst);
        bh = await this.updatePolicyAudit(bh, parentSpanInst);
      } else {
        bh = await this.updatePolicyAudit(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PfVPSogi1wZsNL7d',
        spanInst,
        'sd_PfVPSogi1wZsNL7d'
      );
    }
  }

  async emailSmsCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'emailSmsCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.sendSmsAsync(
        spanInst,
        bh.vehicle_seq_cus,
        bh.policy_no,
        bh.mobile_no,
        bh.email_id,
        bh.quote_id,
        bh.product_id
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_emailSmsCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nKCK1z04RFCgwx1W',
        spanInst,
        'emailSmsCall'
      );
    }
  }

  async updatePolicyAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePolicyAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance: SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows =
        SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance.updatePolicyAudit(
          spanInst,
          bh.update_policy_audit,
          bh.quote_id
        );
      bh.db_update = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendSignal(bh, parentSpanInst);
      //appendnew_next_updatePolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5AaXIsyK6KzCK2es',
        spanInst,
        'updatePolicyAudit'
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
        'sd_NU0kvW6x6pTVliOI',
        spanInst,
        'sendSignal'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][NJAM_UPLOAD][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gBtEd1KBPs2EgReq',
        spanInst,
        'log1'
      );
    }
  }

  async getHelperFunctions1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getHelperFunctions1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance: SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows =
        SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows.getInstance();
      bh = await SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance.helperFunction(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.najmLookupData(bh, parentSpanInst);
      //appendnew_next_getHelperFunctions1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cc1CbyeXtlV83HAA',
        spanInst,
        'getHelperFunctions1'
      );
    }
  }

  async najmLookupData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'najmLookupData',
      parentSpanInst
    );
    try {
      const owner_addl_details =
        bh.input.quote_summary?.quote_details?.addl_details;
      const asyncOperations = async () => {
        const cityData = owner_addl_details?.city_id
          ? await this.getMasterData(
              parentSpanInst,
              { ART_ID: String(owner_addl_details?.city_id) || '' },
              'najm_city'
            )
          : '';
        bh.policyIssueCity = cityData?.local?.result[0]?.NAJM_ID;
        const countryData = owner_addl_details?.nationality
          ? await this.getMasterData(
              parentSpanInst,
              { eska_code: String(owner_addl_details?.nationality) || '' },
              'nationality'
            )
          : '';
        const country = countryData?.local?.result[0]?.eska_name;
        const nationalityNajm = country
          ? await this.getMasterData(
              parentSpanInst,
              { NAME: country || '' },
              'najm_country'
            )
          : '';
        bh.ownerNationality = nationalityNajm?.local?.result[0]?.ID;
      };
      await asyncOperations();

      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${bh.input?.product_id}][][NJAM_UPLOAD_POLICY][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.najmPolicyMapper(bh, parentSpanInst);
      //appendnew_next_najmLookupData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VQgl6pGBLexfuIH7',
        spanInst,
        'najmLookupData'
      );
    }
  }

  async najmPolicyMapper(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'najmPolicyMapper',
      parentSpanInst
    );
    try {
      const quote = bh.input.quote_summary.quote_details;
      const eska_response = JSON.parse(
        bh.input.policy_audit_record?.eska_response || '{}'
      );

      bh.owner_name = `${bh.input.quote_summary.quote_details.first_name} ${
        bh.input.quote_summary.quote_details.addl_details?.second_name_en &&
        bh.input.quote_summary.quote_details.addl_details?.second_name_en !=
          'null'
          ? bh.input.quote_summary.quote_details.addl_details?.second_name_en +
            ' '
          : ''
      }${
        bh.input.quote_summary.quote_details.addl_details?.third_name_en &&
        bh.input.quote_summary.quote_details.addl_details?.third_name_en !=
          'null'
          ? bh.input.quote_summary.quote_details.addl_details?.third_name_en +
            ' '
          : ''
      }${bh.input.quote_summary.quote_details?.last_name}`; // firstName + secondName + thirdName + lastName
      bh.customer_id_type =
        bh.input.quote_summary.quote_details?.customer_type_id;

      bh.body = {
        insertNewPolicy: {
          username: process.env.NAJM_UP_USERNAME,
          password: process.env.NAJM_UP_KEY,
          policyNumber: eska_response?.PolicySegmantCode,
          insuredType: quote?.customer_type_id,
          insuredID: quote?.id_no,
          insuredIDVersionType: quote?.id_type,
          InsuredName:
            bh.customer_id_type == 2
              ? bh.quote_summary?.quote_details?.company_name
              : bh.owner_name,
          insuredPhoneNumber: `0${quote?.phone_no}`,
          insuredMobileNumber: `0${quote?.phone_no}`,
          // "policyMaximumLiability": 10000000, // To check
          driverAgeLimit: 100, //To check
          address: {
            ResidenceOrPremisesAddress: {
              buildingNo: quote.addl_details?.building_number,
              additionalNumber: quote.addl_details?.building_number, // To check
              zipCode: quote?.addl_details?.postal_code,
              city: quote?.addl_details?.city,
              neighborhood: quote?.addl_details?.region_id, //To check
              // "unitNo": 1111,// Optional
              street: quote?.addl_details?.street,
            },
            PostalAddress: {
              addressIdentifier: 1,
              WaselAddress: {
                buildingNo: quote.addl_details?.building_number,
                additionalNumber: quote.addl_details?.building_number,
                zipCode: quote?.addl_details?.postal_code,
                city: quote?.addl_details?.city,
                neighborhood: quote?.addl_details?.region_id,
              },
              POBoxAddress: {
                insuredPostalCode: quote?.addl_details?.postal_code,
                insuredPOBox: quote?.addl_details?.postal_code,
                insuredCity: quote?.addl_details?.city_id,
              },
            },
          },
          issueGreDate: bh.trim_date(eska_response?.PolicyIssueDate),
          effectiveGreDate: bh.trim_date(eska_response?.PolicyEffectiveDate),
          expireGreDate: bh.trim_date(eska_response?.PolicyExpiryDate),
          ownerDateOfBirth:
            bh.convertDateFormat(quote?.addl_details?.dob) || '',
          policyIssueCity: bh.policyIssueCity, // To confirm
          newOrRenew: quote?.is_renewal ? 2 : 1, //For New Policy 1 , For renewwal 2
          ownerNationality: bh.ownerNationality,
          // "userType": 2, // Optional
          // "salesUserID": "ADMIN", // Optional
          // "insuranceInstallment": 1, //Optional
          UNN: '', //Optional
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.najmCall1(bh, parentSpanInst);
      //appendnew_next_najmPolicyMapper
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P51VEQB6kTMdxZXH',
        spanInst,
        'najmPolicyMapper'
      );
    }
  }

  async najmCall1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('najmCall1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_J6X86g975hUioNVwInstance: SSD_SERVICE_ID_sd_J6X86g975hUioNVw.flows =
        SSD_SERVICE_ID_sd_J6X86g975hUioNVw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_J6X86g975hUioNVwInstance.najmSubmitPolicy(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HUDDM7na5ltAcm2w(bh, parentSpanInst);
      //appendnew_next_najmCall1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bwFS4cdQFVOomwEn',
        spanInst,
        'najmCall1'
      );
    }
  }

  async sd_HUDDM7na5ltAcm2w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HUDDM7na5ltAcm2w',
      parentSpanInst
    );
    try {
      bh.local.submit_policy_response = {
        ...bh.result?.submitPolicyResponse,
        ...{
          najm_request: bh.body,
          najm_response: bh.result,
        },
      };

      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${bh.input?.product_id}][][NJAM_UPLOAD_POLICY][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HUDDM7na5ltAcm2w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HUDDM7na5ltAcm2w',
        spanInst,
        'sd_HUDDM7na5ltAcm2w'
      );
    }
  }

  async getHelperFunctions2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getHelperFunctions2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance: SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows =
        SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows.getInstance();
      bh = await SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance.helperFunction(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policySearchReq(bh, parentSpanInst);
      //appendnew_next_getHelperFunctions2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g0l9QqKhT0M45XA5',
        spanInst,
        'getHelperFunctions2'
      );
    }
  }

  async policySearchReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policySearchReq',
      parentSpanInst
    );
    try {
      bh.risk_item_details_by_product_id =
        bh.input.quote_summary.risk_item_details?.filter(
          (risk_item) => risk_item?.product_code == bh.input.product_id
        );
      bh.eska_response = JSON.parse(
        bh.input.policy_audit_record?.eska_response || '{}'
      );

      bh.index = 0;

      bh.policySearchQuery = {
        classId: 184,
        pageNo: 1,
        pageSize: 100,
        policyNo: bh.eska_response?.PolicySegmantCode,
      };

      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${bh.input?.product_id}][NJAM_UPLOAD_VEHICLE][POLICY_SEARCH][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policySearch(bh, parentSpanInst);
      //appendnew_next_policySearchReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hymgLnAwj2xPiyP0',
        spanInst,
        'policySearchReq'
      );
    }
  }

  async policySearch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policySearch',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.policySearch(
          spanInst,
          bh.policySearchQuery
        );
      bh.policySearchRes = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fBPD1bkdwgxldVLM(bh, parentSpanInst);
      //appendnew_next_policySearch
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yjfkzTniQduT98PG',
        spanInst,
        'policySearch'
      );
    }
  }

  async sd_fBPD1bkdwgxldVLM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fBPD1bkdwgxldVLM',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${bh.input?.product_id}][NJAM_UPLOAD_VEHICLE][POLICY_SEARCH][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z6JoUXmW5moXSEwU(bh, parentSpanInst);
      //appendnew_next_sd_fBPD1bkdwgxldVLM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fBPD1bkdwgxldVLM',
        spanInst,
        'sd_fBPD1bkdwgxldVLM'
      );
    }
  }

  async sd_z6JoUXmW5moXSEwU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z6JoUXmW5moXSEwU',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.risk_item_details_by_product_id.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.lookupData(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z6JoUXmW5moXSEwU',
        spanInst,
        'sd_z6JoUXmW5moXSEwU'
      );
    }
  }

  async lookupData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'lookupData',
      parentSpanInst
    );
    try {
      const risk_item = bh.risk_item_details_by_product_id[bh.index];
      const owner_addl_details =
        bh.input.quote_summary?.quote_details?.addl_details;

      const asyncOperations = async () => {
        const plateText1Data = risk_item?.addl_details?.plate_text1
          ? await this.getMasterData(
              parentSpanInst,
              {
                ARABIC_LETTER:
                  String(risk_item?.addl_details?.plate_text1) || '',
              },
              'najm_plate_nos'
            )
          : '';
        bh.plateText1 = plateText1Data?.local?.result[0]?.CODE;

        const plateText2Data = risk_item?.addl_details?.plate_text2
          ? await this.getMasterData(
              parentSpanInst,
              {
                ARABIC_LETTER:
                  String(risk_item?.addl_details?.plate_text2) || '',
              },
              'najm_plate_nos'
            )
          : '';
        bh.plateText2 = plateText2Data?.local?.result[0]?.CODE;

        const plateText3Data = risk_item?.addl_details?.plate_text3
          ? await this.getMasterData(
              parentSpanInst,
              {
                ARABIC_LETTER:
                  String(risk_item?.addl_details?.plate_text3) || '',
              },
              'najm_plate_nos'
            )
          : '';
        bh.plateText3 = plateText3Data?.local?.result[0]?.CODE;

        const manufacturerData = risk_item?.addl_details?.eska_make
          ? await this.getMasterData(
              parentSpanInst,
              { ESKA_MAKE: String(risk_item?.addl_details?.eska_make) || '' },
              'najm_make'
            )
          : '';
        bh.manufacturer = manufacturerData?.local?.result[0]?.NAJM_MAKE;

        const modelData = risk_item?.addl_details?.eska_model
          ? await this.getMasterData(
              parentSpanInst,
              { ESKA_MODEL: String(risk_item?.addl_details?.eska_model) || '' },
              'najm_model'
            )
          : '';
        bh.model = modelData?.local?.result[0]?.NAJM_MODEL;

        const eska_color_id = risk_item.addl_details?.major_color
          ? await this.getMasterData(
              parentSpanInst,
              { name_ar: risk_item.addl_details?.major_color },
              'color'
            )
          : '';
        const colorData = eska_color_id?.local?.result[0]?.id
          ? await this.getMasterData(
              parentSpanInst,
              {
                ART_ID: String(eska_color_id?.local?.result[0]?.id) || '13525',
              },
              'najm_color'
            )
          : '';
        bh.color = colorData?.local?.result[0]?.NAJM_ID;

        const usageData = risk_item?.addl_details?.purposeOfUsingVehicle
          ? await this.getMasterData(
              parentSpanInst,
              {
                ART_ID:
                  String(risk_item?.addl_details?.purposeOfUsingVehicle) || '',
              },
              'najm_usage_type'
            )
          : '';
        bh.restrictionOnUse = usageData?.local?.result[0]?.NAJM_ID;
      };
      await asyncOperations();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.najmMapper(bh, parentSpanInst);
      //appendnew_next_lookupData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G5eevfr9q6eOi2UG',
        spanInst,
        'lookupData'
      );
    }
  }

  async najmMapper(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'najmMapper',
      parentSpanInst
    );
    try {
      const risk_item = bh.risk_item_details_by_product_id[bh.index];
      const najm_policy_response = bh.input.najm_policy_response;

      const voucherNo = () => {
        if (bh.policySearchRes?.PolicyList?.length) {
          return typeof bh.policySearchRes.PolicyList[0].VoucherNo == 'object'
            ? 'DN'
            : bh.policySearchRes.PolicyList[0].VoucherNo;
        }
        return 'DN';
      };

      bh.body = {
        insertNewVehicle: {
          username: process.env.NAJM_UP_USERNAME,
          password: process.env.NAJM_UP_KEY,
          nnPID: najm_policy_response?.nnPID,
          subPolicyNumber: bh.index + 1,
          vehicleDefinedBy: risk_item?.id_type == 11 ? 3 : 2,
          plateNumber:
            risk_item?.addl_details?.plate_no ||
            risk_item?.addl_details?.plate_number,
          plateLetter1: bh.plateText1,
          plateLetter2: bh.plateText2,
          plateLetter3: bh.plateText3,
          vehiclePlateType: risk_item?.addl_details?.plate_type_code,
          [risk_item?.id_type == 11 ? 'customId' : 'sequenceNumber']:
            risk_item?.id_no,
          vehicleCoverageType: risk_item?.product_code == '600460' ? 2 : 1,
          hijriIssueDate: bh.hijriDateNajm(bh.eska_response?.PolicyIssueDate),
          hijriEffectiveDate: bh.hijriDateNajm(
            bh.eska_response?.PolicyEffectiveDate
          ),
          hijriExpirationDate: bh.hijriDateNajm(
            bh.eska_response?.PolicyExpiryDate
          ),
          gregorianIssueDate: bh.trim_date(bh.eska_response?.PolicyIssueDate),
          gregorianEffectiveDate: bh.trim_date(
            bh.eska_response?.PolicyEffectiveDate
          ),
          gregorianExpirationDate: bh.trim_date(
            bh.eska_response?.PolicyExpiryDate
          ),
          category: risk_item?.addl_details?.body_type,
          manufacturer: bh.manufacturer,
          manufacturingYear: risk_item?.addl_details?.manufacturing_year,
          model: bh.model,
          color: bh.color,
          chassisNumber: risk_item?.addl_details?.chassis_number,
          under21: false,
          ipAdd: '',
          seatingCapacity: risk_item?.addl_details?.vehicle_seats,
          hijriIstmaraExpireDate: bh.hijriDateNajm(
            bh.eska_response?.PolicyExpiryDate
          ),
          greIstmaraExpireDate: bh.trim_date(
            bh.eska_response?.PolicyExpiryDate
          ),
          weightOfVehicle: risk_item?.addl_details?.vehicle_weight,
          personalAccedentCoverage: 1, //Static
          geographicCoverageGcc: 1, //Static
          naturalDisasterCoverage: 1, //Static
          premiumPolicyAmount: risk_item?.premium,
          financialTranactionID: voucherNo(),
          // "userType": 2,// Optional
          salesUserID: 'ADMIN', //
          restrictionOnUse: bh.restrictionOnUse, //
          baseRate:
            risk_item?.premium_details?.TPLBase ||
            (risk_item?.product_code == '600462'
              ? risk_item?.premium_details?.SuperSaverBasePremium
              : risk_item?.premium_details?.ODBasePremium), // Check - eska
          ncdEligibility: 1 || Number(risk_item?.premium_details?.ncd),
          noClaimDiscount: Number(risk_item?.premium_details?.NCDAmount),
          loyalityDiscount: Number(
            risk_item?.premium_details?.LoyaltyDiscountAmount
          ),
          marketValue: 0, // To confirm //Eska
        },
      };
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${
          bh.input?.product_id
        }][RISK_ITEM::${
          bh.risk_item_details_by_product_id[bh.index].id
        }][NJAM_UPLOAD_VEHICLE][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.najmCall2(bh, parentSpanInst);
      //appendnew_next_najmMapper
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_79duqdkxPAtKLnZE',
        spanInst,
        'najmMapper'
      );
    }
  }

  async najmCall2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('najmCall2', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_J6X86g975hUioNVwInstance: SSD_SERVICE_ID_sd_J6X86g975hUioNVw.flows =
        SSD_SERVICE_ID_sd_J6X86g975hUioNVw.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_J6X86g975hUioNVwInstance.najmSubmitVehicle(
          spanInst,
          bh.body,
          bh.input.quote_summary
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_g31ZUJHjZrxh6GIv(bh, parentSpanInst);
      //appendnew_next_najmCall2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kUEvlQRibQmCAekR',
        spanInst,
        'najmCall2'
      );
    }
  }

  async sd_g31ZUJHjZrxh6GIv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g31ZUJHjZrxh6GIv',
      parentSpanInst
    );
    try {
      bh.local.submit_vehicle_response[
        bh.risk_item_details_by_product_id[bh.index].id
      ] = {
        ...bh.result?.submitVehicleResponse,
        ...{
          najm_request: bh.body,
          najm_response: bh.result,
        },
      };
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details?.id}][PRODUCT_ID::${
          bh.input?.product_id
        }][NJAM_UPLOAD_VEHICLE][RISK_ITEM::${
          bh.risk_item_details_by_product_id[bh.index]?.id
        }][END]`
      );

      bh.index++;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z6JoUXmW5moXSEwU(bh, parentSpanInst);
      //appendnew_next_sd_g31ZUJHjZrxh6GIv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g31ZUJHjZrxh6GIv',
        spanInst,
        'sd_g31ZUJHjZrxh6GIv'
      );
    }
  }

  async callMasterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callMasterData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance: SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows =
        SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance.searchMasterData(
          spanInst,
          bh.input.search_type,
          bh.input.filter
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_callMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9UMaNNJRYHlqElTI',
        spanInst,
        'callMasterData'
      );
    }
  }

  async emailId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('emailId', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input?.product_id}][NJAM_UPLOAD][SEND_EMAIL][START]`
      );
      const axios = require('axios');
      const FormData = require('form-data');

      const fetchData = async (bh) => {
        try {
          // Make API call to retrieve PDF file for quote summary

          // Prepare email data
          const emailData = new FormData();
          const params = [
            {
              code: 'POLICY_NUMBER',
              value: bh.input.policy_no || '',
            },
            {
              code: 'VEHICLE_SEQUENCE',
              value: bh.input.vehicle_seq_cus || '',
            },
          ];
          emailData.append('subject', bh.input.policy_no || 'najm-upload');
          emailData.append('to', bh.input.email_id);
          emailData.append('template_code', 'najm-upload');
          emailData.append('params', JSON.stringify(params));

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
          `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input?.product_id}][NJAM_UPLOAD][SEND_EMAIL][END]`
        );
      } catch (error) {
        log.error('Error:', error);
        log.info(
          `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${
            bh.input?.product_id
          }][NJAM_UPLOAD][SEND_EMAIL][ERROR::${JSON.stringify(error)}]`
        );
        throw error;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_emailId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lQb5ZYiC4uS1ASLf',
        spanInst,
        'emailId'
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
        to: bh.input?.phone_no,
        template_code: 'najm-upload',
        params: [
          {
            code: 'POLICY_NUMBER',
            value: bh.input.policy_no,
          },
          {
            code: 'VEHICLE_SEQUENCE',
            value: bh.input.vehicle_seq_cus,
          },
        ],
        locale: locale,
      };

      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input?.product_id}][NJAM_UPLOAD][SEND_SMS][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8qWvskfdWXuGv6Zn(bh, parentSpanInst);
      //appendnew_next_setBodySms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yLB8W2mgWSbImIpY',
        spanInst,
        'setBodySms'
      );
    }
  }

  async sd_8qWvskfdWXuGv6Zn(bh, parentSpanInst) {
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
      //appendnew_next_sd_8qWvskfdWXuGv6Zn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8qWvskfdWXuGv6Zn');
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
        `[QUOTE_ID::${bh.input.quote_id}][PRODUCT_ID::${bh.input?.product_id}][NJAM_UPLOAD][SEND_SMS][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2NylvHBStQqOfqUm',
        spanInst,
        'setResponse'
      );
    }
  }

  async errorSms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('errorSms', parentSpanInst);
    try {
      bh.local.response = 'Failed to send to this sms ' + bh.input.quote_id;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_errorSms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U4ahYthTkv6UHQwA',
        spanInst,
        'errorSms'
      );
    }
  }

  async sd_hVvfNvUzMo4Tn7y6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hVvfNvUzMo4Tn7y6',
      parentSpanInst
    );
    try {
      bh.sequence_no = bh.input.vehicle_seq_cus.join(', ');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1C9mzC2lYCP1hCEw(bh, parentSpanInst);
      //appendnew_next_sd_hVvfNvUzMo4Tn7y6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hVvfNvUzMo4Tn7y6',
        spanInst,
        'sd_hVvfNvUzMo4Tn7y6'
      );
    }
  }

  async sd_1C9mzC2lYCP1hCEw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1C9mzC2lYCP1hCEw',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9LInstance: najm_upload =
        najm_upload.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9LInstance.sendEmail(
          spanInst,
          bh.sequence_no,
          bh.input.policy_no,
          bh.input.email_id,
          bh.input.quote_id,
          bh.input.product_id
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9LInstance.sendSms(
          spanInst,
          bh.input.mobile_no,
          bh.input.policy_no,
          bh.input.quote_id,
          bh.input.vehicle_seq_cus,
          bh.input.product_id
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1C9mzC2lYCP1hCEw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1C9mzC2lYCP1hCEw',
        spanInst,
        'sd_1C9mzC2lYCP1hCEw'
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
      (await this.sd_fcGSoirUO74V3KmO(bh, parentSpanInst))
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
  async sd_fcGSoirUO74V3KmO(bh, parentSpanInst) {
    const nodes = ['sd_HTBppzdhquChSB5Y'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.errorSms(bh, parentSpanInst);
      //appendnew_next_sd_fcGSoirUO74V3KmO
      return true;
    }
    return false;
  }
  //appendnew_flow_najm_upload_Catch
}
