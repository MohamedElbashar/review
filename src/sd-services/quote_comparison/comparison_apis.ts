// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf from '../renewal/data_flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_9WBaI7BaEMv4G5GN from './comparison_flows'; //_splitter_
//append_imports_end
export class comparison_apis {
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
    this.serviceName = 'comparison_apis';
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
      instance = new comparison_apis(
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
    //appendnew_flow_comparison_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: comparison_apis');
    //appendnew_flow_comparison_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: comparison_apis');

    this.app['post'](
      `${this.serviceBasePath}/compare/riskitem`,
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
          bh = await this.sd_CDpiRCjOA1GtqBUl(bh, parentSpanInst);
          //appendnew_next_sd_KBPd40eNvRJaJY6b
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KBPd40eNvRJaJY6b');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_comparison_apis_HttpIn
  }
  //   service flows_comparison_apis

  //appendnew_flow_comparison_apis_start

  async sd_CDpiRCjOA1GtqBUl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CDpiRCjOA1GtqBUl',
      parentSpanInst
    );
    try {
      bh.local.reqPayloadKeys = ['quote_id', 'old_policy_id'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkPayload(bh, parentSpanInst);
      //appendnew_next_sd_CDpiRCjOA1GtqBUl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CDpiRCjOA1GtqBUl',
        spanInst,
        'sd_CDpiRCjOA1GtqBUl'
      );
    }
  }

  async checkPayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkPayload',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_9WBaI7BaEMv4G5GNInstance: SSD_SERVICE_ID_sd_9WBaI7BaEMv4G5GN.comparison_flows =
        SSD_SERVICE_ID_sd_9WBaI7BaEMv4G5GN.comparison_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_9WBaI7BaEMv4G5GNInstance.validatePayload(
          spanInst,
          bh.local.reqPayloadKeys,
          bh.input.body
        );
      bh.local.isValidPayload = outputVariables.local.isValidPayload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LtvjxDMb6FJiZgCr(bh, parentSpanInst);
      //appendnew_next_checkPayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Iq4eEpJb7Y9x7n8U',
        spanInst,
        'checkPayload'
      );
    }
  }

  async sd_LtvjxDMb6FJiZgCr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LtvjxDMb6FJiZgCr',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValidPayload,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getQuoteSummary(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValidPayload,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_P14W62OZVYoP2Ss0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LtvjxDMb6FJiZgCr',
        spanInst,
        'sd_LtvjxDMb6FJiZgCr'
      );
    }
  }

  async getQuoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          bh.input.body.quote_id,
          undefined,
          'ESKA'
        );
      bh.local.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSubjects(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MbiKvfDylREnudBc',
        spanInst,
        'getQuoteSummary'
      );
    }
  }

  async getSubjects(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSubjects',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getSubjects(
          spanInst,
          bh.input.body.old_policy_id
        );
      bh.local.subjects = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OAgsc5uMzN47W2MH(bh, parentSpanInst);
      //appendnew_next_getSubjects
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IYfXg2T8RazovMSa',
        spanInst,
        'getSubjects'
      );
    }
  }

  async sd_OAgsc5uMzN47W2MH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OAgsc5uMzN47W2MH',
      parentSpanInst
    );
    try {
      bh.local.searchType = {
        search_type:
          bh.local.quote_summary.quote_details.customer_type_id == 2
            ? 'usage_type_sme'
            : 'usage_type',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getUsageTypes(bh, parentSpanInst);
      //appendnew_next_sd_OAgsc5uMzN47W2MH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OAgsc5uMzN47W2MH',
        spanInst,
        'sd_OAgsc5uMzN47W2MH'
      );
    }
  }

  async getUsageTypes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getUsageTypes',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.local.searchType
        );
      bh.local.vehicleUsageResult = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3jMcabvT5bxWnbWA(bh, parentSpanInst);
      //appendnew_next_getUsageTypes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3GvEH527Y0MCm0X3',
        spanInst,
        'getUsageTypes'
      );
    }
  }

  async sd_3jMcabvT5bxWnbWA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3jMcabvT5bxWnbWA',
      parentSpanInst
    );
    try {
      const usageTypesArr = bh.local.vehicleUsageResult || [];
      const productCodeMap = {
        614428: 600462, //Smart
        614429: 600461, //Comprehensive
        614427: 600460, //Basic
      };

      const subjects = bh.local.subjects || [];
      const riskItemList = bh.local.quote_summary.risk_item_details || [];

      const riskItemMap = new Map(riskItemList.map((r) => [r.id_no, r]));

      const riskItemMatch = subjects.every(
        ({ VEHICLE_SEQUENCE_NUMBER, VEHICLE_CUSTOM_NUMBER }) =>
          riskItemMap.has(
            Number(VEHICLE_SEQUENCE_NUMBER) || Number(VEHICLE_CUSTOM_NUMBER)
          )
      );

      const riskItemProductMatch = subjects.every(
        ({ VEHICLE_SEQUENCE_NUMBER, VEHICLE_CUSTOM_NUMBER, MOTOR_CATEGORY }) =>
          riskItemMap.get(
            Number(VEHICLE_SEQUENCE_NUMBER || VEHICLE_CUSTOM_NUMBER)
          ) == Number(productCodeMap[MOTOR_CATEGORY])
      );

      const getRepairType = (repairType) => {
        return repairType.split(' ').includes('Outside')
          ? 'Out of Agency'
          : 'Agency';
      };
      const getUsageId = (usageType) => {
        const usageTypeStr = usageType.split(' ').slice(1).join(' ');
        return usageTypesArr.find((e) => e.name_en == usageTypeStr).id;
      };

      const riskItemAdditionalDetailsMatch = subjects.every(
        ({
          VEHICLE_SEQUENCE_NUMBER,
          VEHICLE_CUSTOM_NUMBER,
          DEDUCTIBLE,
          SUM_INSURED,
          VEHICLE_REPAIR_CONDITION,
          VEHICLE_USAGE_TYPE,
          NO_OF_SEATS,
          ENGINE_VOLUME,
          TRANSMISSION,
        }) => {
          const riskItem: any = riskItemMap.get(
            Number(VEHICLE_SEQUENCE_NUMBER || VEHICLE_CUSTOM_NUMBER)
          );

          return (
            DEDUCTIBLE == riskItem?.addl_details?.deductible &&
            SUM_INSURED == riskItem?.addl_details?.insuredValue &&
            getRepairType(VEHICLE_REPAIR_CONDITION) ==
              riskItem?.addl_details?.vehicleRepairType &&
            getUsageId(VEHICLE_USAGE_TYPE) ==
              riskItem?.addl_details?.purposeOfUsingVehicle &&
            NO_OF_SEATS ==
              (riskItem?.addl_details?.no_of_seats ||
                riskItem?.addl_details?.vehicle_seats) &&
            ENGINE_VOLUME == riskItem?.addl_details?.engineVolume &&
            TRANSMISSION == riskItem?.addl_details?.transmission
          );
        }
      );

      bh.local.response = {
        riskItemMatch,
        riskItemProductMatch,
        riskItemAdditionalDetailsMatch,
      };

      const is_eska_renewal =
        riskItemMatch && riskItemProductMatch && riskItemAdditionalDetailsMatch;

      const quoteUpdatePayload = bh.local.quote_summary.quote_details;
      ['created_date', 'updated_date'].forEach(
        (k) => delete quoteUpdatePayload[k]
      );

      // Update Quote Body
      bh.local.quoteUpdatePayload = {
        quote: {
          id: quoteUpdatePayload.id,
          reference_number: quoteUpdatePayload.reference_number,
          id_type: quoteUpdatePayload.id_type,
          id_no: quoteUpdatePayload.id_no,
          lob_id: quoteUpdatePayload.lob_id,
          customer_type_id: quoteUpdatePayload.customer_type_id,
          status_id: quoteUpdatePayload.status_id,
          // "tenant_id": bh.tenant_id,
          first_name: quoteUpdatePayload.first_name,
          last_name: quoteUpdatePayload.last_name,
          company_name: quoteUpdatePayload.company_name || '',
          phone_country_code: quoteUpdatePayload.phone_country_code,
          phone_no: quoteUpdatePayload.phone_no,
          email_id: quoteUpdatePayload.email_id,
          // "updated_by": bh.user_id,
          // "owned_by": bh.user_id,
          is_eska_renewal: is_eska_renewal,
          addl_details: JSON.stringify(quoteUpdatePayload.addl_details),
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateEskaRenewal(bh, parentSpanInst);
      //appendnew_next_sd_3jMcabvT5bxWnbWA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3jMcabvT5bxWnbWA',
        spanInst,
        'sd_3jMcabvT5bxWnbWA'
      );
    }
  }

  async updateEskaRenewal(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateEskaRenewal',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.upsert(
          spanInst,
          bh.local.quoteUpdatePayload
        );
      bh.local.updateQuoteResponse = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_092A5QXbwGsMmniY(bh, parentSpanInst);
      //appendnew_next_updateEskaRenewal
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_szjTi0R3Sy55Ej5h',
        spanInst,
        'updateEskaRenewal'
      );
    }
  }

  async sd_092A5QXbwGsMmniY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_092A5QXbwGsMmniY');
    }
  }

  async sd_P14W62OZVYoP2Ss0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P14W62OZVYoP2Ss0',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: false,
        error: 'Invalid Request Parametes',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_F7Nkfr311swQ73gw(bh, parentSpanInst);
      //appendnew_next_sd_P14W62OZVYoP2Ss0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P14W62OZVYoP2Ss0',
        spanInst,
        'sd_P14W62OZVYoP2Ss0'
      );
    }
  }

  async sd_F7Nkfr311swQ73gw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F7Nkfr311swQ73gw');
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
  //appendnew_flow_comparison_apis_Catch
}
