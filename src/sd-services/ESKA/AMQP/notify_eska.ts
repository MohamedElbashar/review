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
export class notify_eska {
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
    this.serviceName = 'notify_eska';
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
      instance = new notify_eska(
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
    //appendnew_flow_notify_eska_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: notify_eska');
    //appendnew_flow_notify_eska_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: notify_eska');
    //appendnew_flow_notify_eska_HttpIn
  }
  //   service flows_notify_eska

  async notifyEska(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'notifyEska',
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
      //appendnew_next_notifyEska
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
        'sd_EL6Pw0qkwfIZMrD2',
        spanInst,
        'notifyEska'
      );
    }
  }

  async updateNajmOriginStatus(
    parentSpanInst,
    quote_summary: any = undefined,
    eska_response: any = undefined,
    najm_response: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmOriginStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        eska_response,
        najm_response,
        product_id,
      },
      local: {
        update_najm_origin_status_response: {},
        update_najm_sequence_no_response: {},
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H5AaRyzd0tpinZJt(bh, parentSpanInst);
      //appendnew_next_updateNajmOriginStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            update_najm_origin_status_response:
              bh.local.update_najm_origin_status_response,
            update_najm_sequence_no_response:
              bh.local.update_najm_sequence_no_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5ETlRu9VyOnw9aUB',
        spanInst,
        'updateNajmOriginStatus'
      );
    }
  }

  async eskaCalls(
    parentSpanInst,
    policy_audit_record: any = undefined,
    quote_summary: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('eskaCalls', parentSpanInst);
    let bh: any = {
      input: {
        policy_audit_record,
        quote_summary,
        product_id,
      },
      local: {
        notify_eska_responses: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.log2(bh, parentSpanInst);
      //appendnew_next_eskaCalls
      return (
        // formatting output variables
        {
          input: {},
          local: {
            notify_eska_responses: bh.local.notify_eska_responses,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cNUAtLH4OMOvvCOt',
        spanInst,
        'eskaCalls'
      );
    }
  }

  async updateNajmStatus(
    parentSpanInst,
    quote_summary: any = undefined,
    eska_response: any = undefined,
    najm_response: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        eska_response,
        najm_response,
        product_id,
      },
      local: {
        update_najm_status_response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dJJpj1wNjqwTVt6g(bh, parentSpanInst);
      //appendnew_next_updateNajmStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            update_najm_status_response: bh.local.update_najm_status_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fy2JdMMPWR8uHAEb',
        spanInst,
        'updateNajmStatus'
      );
    }
  }

  async updateNajmSequenceNo(
    parentSpanInst,
    quote_summary: any = undefined,
    eska_response: any = undefined,
    najm_response: any = undefined,
    risk_item: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmSequenceNo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        eska_response,
        najm_response,
        risk_item,
        product_id,
      },
      local: {
        update_najm_sequence_no_response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EQMEccDoNdJezLZi(bh, parentSpanInst);
      //appendnew_next_updateNajmSequenceNo
      return (
        // formatting output variables
        {
          input: {},
          local: {
            update_najm_sequence_no_response:
              bh.local.update_najm_sequence_no_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y3gmnSZsdxInYP3z',
        spanInst,
        'updateNajmSequenceNo'
      );
    }
  }

  async insertNajmGovMotor(
    parentSpanInst,
    quote_summary: any = undefined,
    eska_response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'insertNajmGovMotor',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_summary,
        eska_response,
      },
      local: {
        insert_najm_gov_motor_response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_insertNajmGovMotor
      return (
        // formatting output variables
        {
          input: {},
          local: {
            insert_najm_gov_motor_response:
              bh.local.insert_najm_gov_motor_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SWtRiBZyLEDQ2RCM',
        spanInst,
        'insertNajmGovMotor'
      );
    }
  }
  //appendnew_flow_notify_eska_start

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
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][NOTIFY_ESKA][START]`
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
        'sd_ifsYLxI51quqpyX9',
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
        'sd_IRfG3C5DLO93B58A',
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
      bh = await this.makeEskaCalls(bh, parentSpanInst);
      //appendnew_next_getPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_29OmTuwTJzsJfrcZ',
        spanInst,
        'getPolicyAudit'
      );
    }
  }

  async makeEskaCalls(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'makeEskaCalls',
      parentSpanInst
    );
    try {
      let outputVariables = await this.eskaCalls(
        spanInst,
        bh.policy_audit_record,
        bh.quote_summary,
        bh.product_id
      );
      bh.notify_eska_responses = outputVariables.local.notify_eska_responses;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyAuditMap(bh, parentSpanInst);
      //appendnew_next_makeEskaCalls
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WgSGt1MNZqN4UFnN',
        spanInst,
        'makeEskaCalls'
      );
    }
  }

  async policyAuditMap(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyAuditMap',
      parentSpanInst
    );
    try {
      bh.update_policy_audit = {
        filter: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
        },
        policy_audit: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
          notify_eska_responses: JSON.stringify(bh.notify_eska_responses),
        },
      };

      const rootObjectsWithZeroStatusCode = (response) => {
        const objectsWithZeroStatusCode = [];
        for (const key in response) {
          const rootObject = response[key];
          if (rootObject?.StatusCode == 0) {
            objectsWithZeroStatusCode.push({
              Error: key,
              ErrorMessage: rootObject,
            });
          } else {
            for (const nestedKey in rootObject) {
              if (rootObject[nestedKey]?.StatusCode == 0) {
                objectsWithZeroStatusCode.push({
                  Error: key,
                  ErrorMessage: rootObject[nestedKey],
                });
              }
            }
          }
        }
        return objectsWithZeroStatusCode;
      };

      bh.isNotifyEskaError = rootObjectsWithZeroStatusCode(
        bh.notify_eska_responses
      );

      if (bh.isNotifyEskaError?.length) {
        bh.signal_options = {
          Error: 'Notify Eska Error',
          ErrorMessage: JSON.stringify(bh.isNotifyEskaError),
          isError: true,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePolicyAudit(bh, parentSpanInst);
      //appendnew_next_policyAuditMap
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7I0w2HfCWY3NoDUI',
        spanInst,
        'policyAuditMap'
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
        'sd_ZXxHHOpfBikNV1Xq',
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
        'sd_H2NJNK3ld0hc7rEI',
        spanInst,
        'sendSignal'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${
          bh.product_id
        }][NOTIFY_ESKA][RESPONSE::${JSON.stringify(bh.notify_eska_responses)}]`
      );

      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][NOTIFY_ESKA][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WPNsl0j1BGRudNRU',
        spanInst,
        'log1'
      );
    }
  }

  async sd_H5AaRyzd0tpinZJt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H5AaRyzd0tpinZJt',
      parentSpanInst
    );
    try {
      bh.najm_submit_vehicles = Object.values(
        bh.input.najm_response?.submit_vehicle
      );

      bh.keys = Object.keys(bh.input.najm_response?.submit_vehicle);
      bh.index = 0;

      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${bh.input.product_id}][UPDATE_NAJM_ORIGIN_STATUS][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yAN4lUaIpEx2dhMu(bh, parentSpanInst);
      //appendnew_next_sd_H5AaRyzd0tpinZJt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H5AaRyzd0tpinZJt',
        spanInst,
        'sd_H5AaRyzd0tpinZJt'
      );
    }
  }

  async sd_yAN4lUaIpEx2dhMu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yAN4lUaIpEx2dhMu',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.najm_submit_vehicles.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RrnhZSw6kXbybQhm(bh, parentSpanInst);
      } else {
        bh = await this.sd_xDEUS1Zc2y4yq00m(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yAN4lUaIpEx2dhMu',
        spanInst,
        'sd_yAN4lUaIpEx2dhMu'
      );
    }
  }

  async sd_RrnhZSw6kXbybQhm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RrnhZSw6kXbybQhm',
      parentSpanInst
    );
    try {
      const najm_vehicle_response = bh.najm_submit_vehicles[bh.index];
      const mapper = {
        DocumantId: bh.input.eska_response?.PolicyID, //Policy ID
        PolicyGovId: bh.input.najm_response?.submit_policy?.nnPID, //Najm PIID
        VehicleGovId: najm_vehicle_response?.nnVID, //Najm Vehicle Id
        PolicyStatus: bh.input.najm_response?.submit_policy?.status, // submitPolicyResponse -> status
        PolicyStatusDiscreption:
          bh.input.najm_response?.submit_policy?.description, // submitPolicyResponse -> description
        VehicleStatus: najm_vehicle_response?.status, //submitVehicleResponse -> status
        VehicleStatusDiscreption: najm_vehicle_response?.description, //submitVehicleResponse -> description
      };

      bh.risk_item = bh.input.quote_summary.risk_item_details.filter(
        (risk_item) => risk_item?.id == bh.keys[bh.index]
      );

      bh.updateSequence = false;

      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${
          bh.input.product_id
        }][RISK_ITEM::${bh.keys[bh.index]}][UPDATE_NAJM_ORIGIN_STATUS][START]`
      );

      if (bh.risk_item?.length && bh.risk_item[0].id_type == 10) {
        bh.updateSequence = true;
        log.info(
          `[QUOTE_ID::${
            bh.input.quote_summary?.quote_details.id
          }][PRODUCT_ID::${bh.input.product_id}][RISK_ITEM::${
            bh.keys[bh.index]
          }][UPDATE_SEQUENCE_NUMBER][START]`
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.eskaCall1(bh, parentSpanInst);
      //appendnew_next_sd_RrnhZSw6kXbybQhm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RrnhZSw6kXbybQhm',
        spanInst,
        'sd_RrnhZSw6kXbybQhm'
      );
    }
  }

  async eskaCall1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('eskaCall1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.updateNajmOriginStatus(
          spanInst,
          bh.input.quote_summary
        );
      bh.result = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_K9T2kkIrTKXtFrUr(bh, parentSpanInst);
      //appendnew_next_eskaCall1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9IWf6wFtwHG5Rpft',
        spanInst,
        'eskaCall1'
      );
    }
  }

  async sd_K9T2kkIrTKXtFrUr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K9T2kkIrTKXtFrUr',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.updateSequence,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.eskaCall(bh, parentSpanInst);
      } else {
        bh = await this.sd_liNWeGczhz20a61N(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K9T2kkIrTKXtFrUr',
        spanInst,
        'sd_K9T2kkIrTKXtFrUr'
      );
    }
  }

  async eskaCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('eskaCall', parentSpanInst);
    try {
      let outputVariables = await this.updateNajmSequenceNo(
        spanInst,
        bh.input.quote_summary,
        bh.input.eska_response,
        bh.input.najm_response,
        bh.risk_item,
        bh.input.product_id
      );
      bh.update_najm_sequence_no_response =
        outputVariables.local.update_najm_sequence_no_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_liNWeGczhz20a61N(bh, parentSpanInst);
      //appendnew_next_eskaCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pLKV7untb6Xng2e2',
        spanInst,
        'eskaCall'
      );
    }
  }

  async sd_liNWeGczhz20a61N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_liNWeGczhz20a61N',
      parentSpanInst
    );
    try {
      bh.local.update_najm_origin_status_response[bh.keys[bh.index]] =
        bh.result?.UpdateNajmOriginStatusResponse?.UpdateNajmOriginStatusResult;
      if (bh.updateSequence) {
        bh.local.update_najm_sequence_no_response[bh.keys[bh.index]] =
          bh.update_najm_sequence_no_response?.UpdateNajmSequenceNoResponse?.UpdateNajmSequenceNoResult;
      }

      bh.index++;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yAN4lUaIpEx2dhMu(bh, parentSpanInst);
      //appendnew_next_sd_liNWeGczhz20a61N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_liNWeGczhz20a61N',
        spanInst,
        'sd_liNWeGczhz20a61N'
      );
    }
  }

  async sd_xDEUS1Zc2y4yq00m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xDEUS1Zc2y4yq00m',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${bh.input.product_id}][UPDATE_NAJM_ORIGIN_STATUS][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_xDEUS1Zc2y4yq00m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xDEUS1Zc2y4yq00m',
        spanInst,
        'sd_xDEUS1Zc2y4yq00m'
      );
    }
  }

  async log2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log2', parentSpanInst);
    try {
      bh.eska_response = JSON.parse(
        bh.input.policy_audit_record?.eska_response || ''
      );
      bh.najm_response = JSON.parse(
        bh.input.policy_audit_record?.najm_response || ''
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateNajmStatusCall(bh, parentSpanInst);
      //appendnew_next_log2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bLXtLIilUnTgZ0AV',
        spanInst,
        'log2'
      );
    }
  }

  async updateNajmStatusCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmStatusCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.updateNajmStatus(
        spanInst,
        bh.input.quote_summary,
        bh.eska_response,
        bh.najm_response,
        bh.input.product_id
      );
      bh.update_najm_status_response =
        outputVariables.local.update_najm_status_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateNajmOriginStatusCall(bh, parentSpanInst);
      //appendnew_next_updateNajmStatusCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x1rucPYyWsvUFPHI',
        spanInst,
        'updateNajmStatusCall'
      );
    }
  }

  async updateNajmOriginStatusCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateNajmOriginStatusCall',
      parentSpanInst
    );
    try {
      let outputVariables = await this.updateNajmOriginStatus(
        spanInst,
        bh.input.quote_summary,
        bh.eska_response,
        bh.najm_response,
        bh.input.product_id
      );
      bh.update_najm_origin_status_response =
        outputVariables.local.update_najm_origin_status_response;
      bh.update_najm_sequence_no_response =
        outputVariables.local.update_najm_sequence_no_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.groupResponses(bh, parentSpanInst);
      //appendnew_next_updateNajmOriginStatusCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u7vxKf65EbxwUFAh',
        spanInst,
        'updateNajmOriginStatusCall'
      );
    }
  }

  async groupResponses(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'groupResponses',
      parentSpanInst
    );
    try {
      bh.local.notify_eska_responses = {
        update_najm_origin_status_response:
          bh.update_najm_origin_status_response,
        update_najm_status_response:
          bh.update_najm_status_response?.UpdateNajmStatusResponse
            ?.UpdateNajmStatusResult,
        update_najm_sequence_no_response:
          bh.update_najm_sequence_no_response || {},
        insert_najm_gov_motor_response:
          bh.insert_najm_gov_motor_response?.InsertNajmGovMotorResponse
            ?.InsertNajmGovMotorResult || {},
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_groupResponses
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uf1rGZ1jTIYlKEkX',
        spanInst,
        'groupResponses'
      );
    }
  }

  async sd_dJJpj1wNjqwTVt6g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dJJpj1wNjqwTVt6g',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${bh.input.product_id}][UPDATE_NAJM_STATUS][START]`
      );

      const eska_response = bh.input.eska_response;
      const najm_response = bh.input.najm_response;
      const mapper = {
        DocumantId: eska_response?.PolicyID, // Eska Policy ID
        SubjectSerial: 205, // To confirm?
        GovId: najm_response?.submit_policy?.nnPID, //NNPID
        Status: najm_response?.submit_policy?.status, // Najm status
        StatusDiscreption: najm_response?.submit_policy?.description, //Najm description
        RecordType: 2, // To confirm
        NAJMRequest: najm_response?.submit_policy?.najm_request, // Najm request in stringified
        NAJMResponse: najm_response?.submit_policy?.najm_response, // Najm response in stringified
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.eskaCall2(bh, parentSpanInst);
      //appendnew_next_sd_dJJpj1wNjqwTVt6g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dJJpj1wNjqwTVt6g',
        spanInst,
        'sd_dJJpj1wNjqwTVt6g'
      );
    }
  }

  async eskaCall2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('eskaCall2', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.updateNajmStatus(
          spanInst,
          bh.input.quote_summary
        );
      bh.local.update_najm_status_response = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BMPohNrfvkKLkH7H(bh, parentSpanInst);
      //appendnew_next_eskaCall2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pOYBd5ZsFVYFevP2',
        spanInst,
        'eskaCall2'
      );
    }
  }

  async sd_BMPohNrfvkKLkH7H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BMPohNrfvkKLkH7H',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${bh.input.product_id}][UPDATE_NAJM_ORIGIN_STATUS][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_BMPohNrfvkKLkH7H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BMPohNrfvkKLkH7H',
        spanInst,
        'sd_BMPohNrfvkKLkH7H'
      );
    }
  }

  async sd_EQMEccDoNdJezLZi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EQMEccDoNdJezLZi',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${bh.input.product_id}][UPDATE_NAJM_SEQUENCE_NUMBER][START]`
      );

      const risk_item = bh.input?.risk_item[0];
      //  Call the  API if the vehicle has sequence Number
      bh.body = {
        DocumantId: bh.input.eska_response?.PolicyID, // Eska Policy ID
        SubjectSerial: 205, // To confirm
        SequenceNumber: risk_item?.id_no,
        PlateLetter1: risk_item?.addl_details?.plate_text1, //
        PlateLetter2: risk_item?.addl_details?.plate_text2,
        PlateLetter3: risk_item?.addl_details?.plate_text3,
        PlateNumber: risk_item?.addl_details?.plate_no,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.eskaCall3(bh, parentSpanInst);
      //appendnew_next_sd_EQMEccDoNdJezLZi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EQMEccDoNdJezLZi',
        spanInst,
        'sd_EQMEccDoNdJezLZi'
      );
    }
  }

  async eskaCall3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('eskaCall3', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.updateNajmSequenceNo(
          spanInst,
          bh.input.quote_summary
        );
      bh.local.update_najm_sequence_no_response = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FW04JPqZYTsy9PEc(bh, parentSpanInst);
      //appendnew_next_eskaCall3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yyBkLlTNEmHLwzpY',
        spanInst,
        'eskaCall3'
      );
    }
  }

  async sd_FW04JPqZYTsy9PEc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FW04JPqZYTsy9PEc',
      parentSpanInst
    );
    try {
      log.info(
        `[QUOTE_ID::${bh.input.quote_summary?.quote_details.id}][PRODUCT_ID::${bh.input.product_id}][UPDATE_NAJM_ORIGIN_STATUS][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_FW04JPqZYTsy9PEc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FW04JPqZYTsy9PEc',
        spanInst,
        'sd_FW04JPqZYTsy9PEc'
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
  //appendnew_flow_notify_eska_Catch
}
