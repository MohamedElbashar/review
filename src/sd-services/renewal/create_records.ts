// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK from '../addl_drivers/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6 from '../addons/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC from '../risk_item/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21 from '../vehicle/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf from './data_flows'; //_splitter_
//append_imports_end
export class create_records {
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
    this.serviceName = 'create_records';
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
      instance = new create_records(
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
    //appendnew_flow_create_records_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: create_records');
    //appendnew_flow_create_records_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_records');
    //appendnew_flow_create_records_HttpIn
  }
  //   service flows_create_records

  async createQuoteRecord(
    parentSpanInst,
    policy_id: any = undefined,
    policy_number: any = undefined,
    eska_details: any = undefined,
    broker_info: any = undefined,
    user_id: any = undefined,
    tenant_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createQuoteRecord',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
        policy_number,
        eska_details,
        broker_info,
        user_id,
        tenant_id,
      },
      local: {
        cq_response: undefined,
        policy_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPolicyData(bh, parentSpanInst);
      //appendnew_next_createQuoteRecord
      return (
        // formatting output variables
        {
          input: {},
          local: {
            cq_response: bh.local.cq_response,
            policy_data: bh.local.policy_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hdRscRTRUYGAW2GS',
        spanInst,
        'createQuoteRecord'
      );
    }
  }

  async createRiskItemRecords(
    parentSpanInst,
    policy_id: any = undefined,
    cq_response: any = undefined,
    policy_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createRiskItemRecords',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
        cq_response,
        policy_data,
      },
      local: {
        cr_response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSubjects(bh, parentSpanInst);
      //appendnew_next_createRiskItemRecords
      return (
        // formatting output variables
        {
          input: {},
          local: {
            cr_response: bh.local.cr_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QTLQgJZ7QdKYKuoC',
        spanInst,
        'createRiskItemRecords'
      );
    }
  }

  async createAddOns(
    parentSpanInst,
    policy_id: any = undefined,
    cr_response: any = undefined,
    policy_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createAddOns',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
        cr_response,
        policy_data,
      },
      local: {
        ca_response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCovers(bh, parentSpanInst);
      //appendnew_next_createAddOns
      return (
        // formatting output variables
        {
          input: {},
          local: {
            ca_response: bh.local.ca_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i2HqatOGLsccwqLT',
        spanInst,
        'createAddOns'
      );
    }
  }

  async createAddlDrivers(
    parentSpanInst,
    policy_id: any = undefined,
    cr_response: any = undefined,
    cq_response: any = undefined,
    policy_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createAddlDrivers',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
        cr_response,
        cq_response,
        policy_data,
      },
      local: {
        ca_response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getDrivers(bh, parentSpanInst);
      //appendnew_next_createAddlDrivers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            ca_response: bh.local.ca_response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sSAMfK5hZbY8XRbI',
        spanInst,
        'createAddlDrivers'
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
      bh = await this.sd_d4vrY4hZwSHazrky(bh, parentSpanInst);
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
        'sd_3rlg90cCCuGOU7YJ',
        spanInst,
        'getMasterData'
      );
    }
  }
  //appendnew_flow_create_records_start

  async getPolicyData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getPolicyData(
          spanInst,
          bh.input.policy_id,
          undefined
        );
      bh.policy_data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.yakeenCusRequest(bh, parentSpanInst);
      //appendnew_next_getPolicyData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ifh4PRNvtPI8KU1L',
        spanInst,
        'getPolicyData'
      );
    }
  }

  async yakeenCusRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenCusRequest',
      parentSpanInst
    );
    try {
      const moment = require('moment');
      bh.policy_data = bh?.policy_data?.length ? bh?.policy_data[0] : {};
      const id_type =
        bh.policy_data?.CUSTOMER_TYPE == 'Individual'
          ? bh.policy_data?.NATIONAL_ID.startsWith('1')
            ? 1
            : 2
          : 4;
      const phone_no = (str) =>
        str.startsWith('0') ? `966${str.slice(1)}` : `966${str}`;
      bh.local.policy_data = bh.policy_data;

      // for Individual
      if (id_type == 1 || id_type == 2) {
        bh.formatDateMMYYYY = (timestamp) => {
          const momentObj = moment(timestamp);
          const formattedDate = momentObj.format('MM-YYYY');
          return formattedDate;
        };
        bh.body = {
          id_type,
          id_no: bh.policy_data?.NATIONAL_ID,
          dob: bh.formatDateMMYYYY(bh.policy_data?.DATE_OF_BIRTH),
          phone_no: phone_no(String(bh.policy_data?.CUST_CONTACT_NUMBER)),
        };
      }
      // for SME
      else if (id_type == 4) {
        bh.body = {
          id_type,
          id_no: bh.policy_data?.NATIONAL_ID,
        };
      }

      log.info(
        `[POLICY_ID::${
          bh.input.policy_id
        }][CREATE_QUOTE_RECORD_FOR_RENEWAL][GET_CUSTOMER_INFO][REQUEST_BODY}[${JSON.stringify(
          bh.body
        )}}`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.yakeenCustomerInfo(bh, parentSpanInst);
      //appendnew_next_yakeenCusRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aq5PxTzEe1lVRkql',
        spanInst,
        'yakeenCusRequest'
      );
    }
  }

  async yakeenCustomerInfo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenCustomerInfo',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getCustomer(
          spanInst,
          bh.body
        );
      bh.customer_info = outputVariables.local.customer_info;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertQuoteMapping(bh, parentSpanInst);
      //appendnew_next_yakeenCustomerInfo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tbQ0DwBvtnIjUx0J',
        spanInst,
        'yakeenCustomerInfo'
      );
    }
  }

  async insertQuoteMapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertQuoteMapping',
      parentSpanInst
    );
    try {
      const moment = require('moment');
      const customer_details = bh.customer_info?.customer_details;
      const address_details = bh.customer_info?.address_details;

      const new_policy_start_date = (timestamp) => {
        const currentDate = moment();
        if (timestamp) {
          let momentObj = moment(timestamp);
          // Check if timestamp is less than current date
          if (momentObj.isBefore(currentDate, 'day')) {
            // If yes, use current date instead
            momentObj = currentDate;
          }
          const momentWithAddedDay = momentObj.add(1, 'day');
          const formattedDate = momentWithAddedDay.format('DD-MM-YYYY');
          return formattedDate;
        } else {
          // Handle the case when timestamp is not provided
          return currentDate.format('DD-MM-YYYY');
        }
      };

      bh.bds_quote_details = {
        id_type: bh.body.id_type,
        id_no: bh.body.id_no,
        lob_id: 1, //Motor-1
        customer_type_id: bh.policy_data?.CUSTOMER_TYPE == 'Individual' ? 1 : 2,
        first_name: customer_details?.first_name_en,
        last_name: customer_details?.last_name_en,
        company_name: address_details?.title_en || '',
        phone_country_code: '+966',
        phone_no: String(bh.policy_data?.CUST_CONTACT_NUMBER),
        email_id: bh.policy_data?.CUST_EMAIL_ADDRESS,
        quote_id: '',
        addl_details: {
          // Can be Hijri
          calendar_type: 'G',
          // Can be Hijri
          date_of_birth: bh.body?.dob,
          // Can be Hijri
          dob: customer_details?.dob,
          policy_start_date: new_policy_start_date(
            bh.policy_data?.POLICY_EXPIRY_DATE
          ),
          first_name_ar: customer_details?.first_name_ar,
          last_name_ar: customer_details?.last_name_ar,
          gender: customer_details?.gender,
          nationality: customer_details?.nationality,
          second_name_en: customer_details?.second_name_en,
          third_name_en: customer_details?.third_name_en,
          marital_status: customer_details?.marital_status || 2,
          address_line_1: address_details?.address_line_1,
          adddress_line_2: address_details?.address_line_2,
          building_number: address_details?.building_number,
          short_address: address_details?.short_address,
          street: address_details?.street,
          district: address_details?.district,
          city: address_details?.city,
          postal_code: address_details?.postal_code,
          postal_code_addl_number: address_details?.postal_code_addl_number,
          region_name_en: address_details?.region_name_en,
          city_id: address_details?.city_id,
          region_id: address_details?.region_id,
          district_id: address_details?.district_id,
          region_name_ar: address_details?.region_name_ar,
          city_ar: address_details?.city_ar,
          street_ar: address_details?.street_ar,
          district_ar: address_details?.district_ar,
          drivingLicenceType: 'Private Needs',
          postal_city: address_details?.postal_city,
          postal_region: address_details?.postal_region,
          old_policy_expiry_date: bh.policy_data?.POLICY_EXPIRY_DATE,
        },
        is_renewal: true,
        old_policy_id: bh.input.policy_id,
        old_policy_number: bh.input?.policy_number || '',
        eska_details: bh.input?.eska_details || {},
      };

      // FOR SME
      if (bh.bds_quote_details.customer_type_id == 2) {
        ['first_name', 'last_name'].forEach(
          (prop) => delete bh.bds_quote_details[prop]
        );

        [
          'calendar_type',
          'date_of_birth',
          'dob',
          'gender',
          'nationality',
          'second_name_en',
          'third_name_en',
          'marital_status',
          'drivingLicenceType',
        ].forEach((prop) => delete bh.bds_quote_details.addl_details[prop]);

        // ??? Get these values
        // Can be Yes or No
        bh.bds_quote_details['zatcaVan'] = 'No';
        bh.bds_quote_details['vatNum'] = '';
        bh.bds_quote_details.addl_details['zatcaVan'] = 'No';
        bh.bds_quote_details.addl_details['vatNum'] = '';
        bh.bds_quote_details.addl_details['company_name'] =
          address_details?.title_en || '';
        bh.bds_quote_details.addl_details['title_en'] =
          address_details?.title_en || '';
      }

      bh.bds_quote_details = {
        ...bh.bds_quote_details,
        ...bh.input.broker_info,
        user_id: bh.input.user_id,
        tenant_id: bh.input.tenant_id,
      };

      log.info(
        `[POLICY_ID::${
          bh.input.policy_id
        }][CREATE_QUOTE_RECORD_FOR_RENEWAL][CREATE_QUOTE][REQUEST_BODY}[${JSON.stringify(
          bh.bds_quote_details
        )}}`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createQuote(bh, parentSpanInst);
      //appendnew_next_insertQuoteMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8GxPzhspfRMHAzhB',
        spanInst,
        'insertQuoteMapping'
      );
    }
  }

  async createQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createQuote',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.createQuote(
          spanInst,
          bh.bds_quote_details
        );
      bh.local.cq_response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_createQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FoalYb58qiWuiXDr',
        spanInst,
        'createQuote'
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
          bh.input.policy_id
        );
      bh.subjects = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.vehicleInit(bh, parentSpanInst);
      //appendnew_next_getSubjects
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kwBQ6ejiDaCYAFLB',
        spanInst,
        'getSubjects'
      );
    }
  }

  async vehicleInit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'vehicleInit',
      parentSpanInst
    );
    try {
      bh.index = 0;
      bh.local.cr_response = {};

      bh.risk_items = {
        risk_item: [],
      };

      bh.id_no_subject_serial_map = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AsOokgWDf5QaAGnJ(bh, parentSpanInst);
      //appendnew_next_vehicleInit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fN714mZrWMCCwMTb',
        spanInst,
        'vehicleInit'
      );
    }
  }

  async sd_AsOokgWDf5QaAGnJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AsOokgWDf5QaAGnJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.subjects.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.yakeenRequest(bh, parentSpanInst);
      } else {
        bh = await this.sd_APJemSiOhYakqGZx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AsOokgWDf5QaAGnJ',
        spanInst,
        'sd_AsOokgWDf5QaAGnJ'
      );
    }
  }

  async yakeenRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenRequest',
      parentSpanInst
    );
    try {
      bh.subject = bh.subjects[bh.index];

      bh.yakeen_req = {
        id_type: bh.subject?.VEHICLE_SEQUENCE_NUMBER ? 10 : 11,
        vehicle_id_no:
          bh.subject?.VEHICLE_SEQUENCE_NUMBER ||
          bh.subject?.VEHICLE_CUSTOM_NUMBER,
        owner_id: bh.input.policy_data?.NATIONAL_ID,
        model_year: bh.subject?.VEHICLE_MODEL_YEAR,
        policy_holder_id: bh.input.policy_data?.NATIONAL_ID,
      };
      log.info(
        `[POLICY_ID::${
          bh.input.policy_id
        }][CREATE_RISK_ITEM_FOR_RENEWAL][YAKEEN_CALL][REQUEST}[${JSON.stringify(
          bh.yakeen_req
        )}}`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.yakeenCall(bh, parentSpanInst);
      //appendnew_next_yakeenRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ecIo9ZcipcaUNcWp',
        spanInst,
        'yakeenRequest'
      );
    }
  }

  async yakeenCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance: SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21.flows =
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getVehicleDetails(
          spanInst,
          bh.yakeen_req.id_type,
          bh.yakeen_req.owner_id,
          bh.yakeen_req.vehicle_id_no,
          bh.yakeen_req.model_year,
          bh.yakeen_req.policy_holder_id
        );
      bh.vehicle_details = outputVariables.local.vehicleDetails;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.crMapper(bh, parentSpanInst);
      //appendnew_next_yakeenCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TpsmQ3X3kOHDg3k2',
        spanInst,
        'yakeenCall'
      );
    }
  }

  async crMapper(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('crMapper', parentSpanInst);
    try {
      const risk_item = bh.vehicle_details;

      const deductibleDefaultValue = (insured_value) => {
        const max_val = 25000;
        let return_val = 0;
        const insured_value_thirty_percent = (insured_value * 30) / 100;
        if (insured_value_thirty_percent > max_val) {
          return_val = max_val;
        } else {
          let y = Math.ceil(insured_value_thirty_percent / 500);
          return_val = y * 500;
        }

        return return_val;
      };

      const product_codes_mapper = {
        614428: 600462, //Super -2000
        614429: 600461, //Comp  - function
        614427: 600460, //TPL  - No decuctible
      };

      const master_data_call = risk_item?.plate_type_code
        ? await this.getMasterData(
            parentSpanInst,
            { order: risk_item?.plate_type_code || '' },
            'usage_type'
          )
        : '283';
      const purposeOfUsingVehicle =
        master_data_call.local?.result?.[0]?.id || '283';

      const risk_item_map = {
        id_type: bh.yakeen_req.id_type,
        id_no: Number(bh.yakeen_req.vehicle_id_no),
        quote_id: bh.input.cq_response.id,
        product_code:
          product_codes_mapper[bh.subjects[bh.index].MOTOR_CATEGORY],
        addl_details: JSON.stringify({
          make: risk_item?.make,
          model: risk_item?.make,
          plate_number: risk_item?.plate_number,
          plate_no: risk_item?.plate_no,
          manufacturing_year: risk_item?.manufacturing_year,
          chassis_number: risk_item?.chassis_number,
          cylinders: risk_item?.cylinders,
          lk_vehicle_class: risk_item?.lk_vehicle_class,
          log_id: risk_item?.log_id,
          major_color: risk_item.major_color,
          minor_color: risk_item.minor_color,
          owner_name: risk_item.owner_name,
          plate_text1: risk_item.plate_text1,
          plate_text2: risk_item.plate_text2,
          plate_text3: risk_item.plate_text3,
          plate_type_code: risk_item.plate_type_code,
          registration_place: risk_item.registration_place,
          vehicle_body_code: risk_item.vehicle_body_code,
          vehicle_body_description: risk_item.vehicle_body_description,
          vehicle_seats: risk_item.vehicle_seats,
          vehicle_weight: risk_item.vehicle_weight,
          city_ar: risk_item.city_ar,
          ncd: risk_item.ncd,
          traffic_violations_score: risk_item.traffic_violations_score,
          accidents_record_score: risk_item.accidents_record_score,
          demographic_information_score:
            risk_item.demographic_information_score,
          vehicle_information_score: risk_item.vehicle_information_score,
          lezam_score: risk_item.lezam_score,
          Min_SI: risk_item.Min_SI,
          Rec_SI: risk_item.Rec_SI,
          Max_SI: risk_item.Max_SI,
          make_en: risk_item.make_en,
          model_en: risk_item.model_en,
          make_ar: risk_item.make_ar,
          model_ar: risk_item.model_ar,
          body_type: risk_item.body_type,
          no_of_seats: risk_item.no_of_seats,
          eska_make: risk_item.eska_make,
          eska_model: risk_item.eska_model,
          eska_body: risk_item.eska_body,
          city_id: risk_item.city_id || '',
          [bh.yakeen_req.id_type == 10 ? 'sequenceNumber' : 'customNumber']:
            bh.yakeen_req.vehicle_id_no,
          id_type: bh.yakeen_req.id_type,
          deductible:
            risk_item?.deductible ||
            bh.subjects[bh.index].MOTOR_CATEGORY == 614428
              ? '2000'
              : bh.subjects[bh.index].MOTOR_CATEGORY == 614429
              ? deductibleDefaultValue(risk_item.Rec_SI)
              : '',
          distanceTraveled: 1000,
          engineVolume: '2',
          insuredValue: risk_item.Rec_SI,
          purposeOfUsingVehicle: purposeOfUsingVehicle,
          transmission: 'Automatic',
          vehicleRepairType: 'Out of Agency',
          numOfSeat: '5',
          old_policy_product_code:
            product_codes_mapper[bh.subject.MOTOR_CATEGORY],
          subject_serial: bh.subject.SUBJECT_SERIAL_NUMBER,
        }),
      };
      bh.id_no_subject_serial_map[bh.yakeen_req.vehicle_id_no] =
        bh.subject.SUBJECT_SERIAL_NUMBER;
      bh.risk_items.risk_item.push(risk_item_map);
      log.info(
        `[POLICY_ID::${
          bh.input.policy_id
        }][CREATE_RISK_ITEM_FOR_RENEWAL][CREATE_RISK_ITEM_${
          bh.index + 1
        }][REQUEST}[${JSON.stringify(risk_item)}}`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MsShLyRbO2VhTbbW(bh, parentSpanInst);
      //appendnew_next_crMapper
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pSHVXuQGX2ThHZaf',
        spanInst,
        'crMapper'
      );
    }
  }

  async sd_MsShLyRbO2VhTbbW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MsShLyRbO2VhTbbW',
      parentSpanInst
    );
    try {
      bh.index++;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AsOokgWDf5QaAGnJ(bh, parentSpanInst);
      //appendnew_next_sd_MsShLyRbO2VhTbbW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MsShLyRbO2VhTbbW',
        spanInst,
        'sd_MsShLyRbO2VhTbbW'
      );
    }
  }

  async sd_APJemSiOhYakqGZx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_APJemSiOhYakqGZx',
      parentSpanInst
    );
    try {
      bh.create_records = false;
      if (bh.risk_items.risk_item.length) {
        bh.create_records = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MCtgbH3oXUM8F0QT(bh, parentSpanInst);
      //appendnew_next_sd_APJemSiOhYakqGZx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_APJemSiOhYakqGZx',
        spanInst,
        'sd_APJemSiOhYakqGZx'
      );
    }
  }

  async sd_MCtgbH3oXUM8F0QT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MCtgbH3oXUM8F0QT',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.create_records,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.crCall(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MCtgbH3oXUM8F0QT',
        spanInst,
        'sd_MCtgbH3oXUM8F0QT'
      );
    }
  }

  async crCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('crCall', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.addMultipleRiskItem(
          spanInst,
          bh.risk_items
        );
      bh.cr_response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nM7PTrxDdR22gq9U(bh, parentSpanInst);
      //appendnew_next_crCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_59hNBAN9gPj20Hz9',
        spanInst,
        'crCall'
      );
    }
  }

  async sd_nM7PTrxDdR22gq9U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nM7PTrxDdR22gq9U',
      parentSpanInst
    );
    try {
      bh.cr_response?.map((risk_item) => {
        bh.local.cr_response[bh.id_no_subject_serial_map[risk_item.id_no]] =
          risk_item.id;
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_nM7PTrxDdR22gq9U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nM7PTrxDdR22gq9U',
        spanInst,
        'sd_nM7PTrxDdR22gq9U'
      );
    }
  }

  async getCovers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCovers', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getAddOns(
          spanInst,
          bh.input.policy_id
        );
      bh.covers = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0fkVbRvfZHPhuU9L(bh, parentSpanInst);
      //appendnew_next_getCovers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5PcwGmqlILMIyIwK',
        spanInst,
        'getCovers'
      );
    }
  }

  async sd_0fkVbRvfZHPhuU9L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0fkVbRvfZHPhuU9L',
      parentSpanInst
    );
    try {
      bh.add_master_data_body = {
        customer_type_id:
          bh.input.policy_data?.CUSTOMER_TYPE == 'Individual' ? 1 : 2,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.masterDataAddOns(bh, parentSpanInst);
      //appendnew_next_sd_0fkVbRvfZHPhuU9L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0fkVbRvfZHPhuU9L',
        spanInst,
        'sd_0fkVbRvfZHPhuU9L'
      );
    }
  }

  async masterDataAddOns(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'masterDataAddOns',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.getAddOnGroup(
          spanInst,
          bh.add_master_data_body
        );
      bh.add_ons_master_data = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wFPzG3LmIq3iutuo(bh, parentSpanInst);
      //appendnew_next_masterDataAddOns
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jg2wzbFBl3Bca7Iq',
        spanInst,
        'masterDataAddOns'
      );
    }
  }

  async sd_wFPzG3LmIq3iutuo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wFPzG3LmIq3iutuo',
      parentSpanInst
    );
    try {
      const covers_to_remove = [1316, 2, 600460, 611144, 610464, 611593];
      //NCDAmount -Bonus Malus System -600460
      //"Multi vehicle Discount" -611144
      //LoyaltyDiscountAmount - 610464
      bh.add_ons = bh.covers.filter(
        (obj) => !covers_to_remove.includes(obj?.COVER_ID)
      );

      const addonIdToName = new Map(
        bh.add_ons_master_data.flatMap(({ add_ons }) =>
          add_ons.map((a) => [
            a.cover_id,
            {
              cover_name: a.cover_name,
              cover_name_ar: a.cover_name_ar,
              applicable_products: a.applicable_products,
            },
          ])
        )
      );

      const createOutputObject = (data) => {
        const result = {};

        data.forEach((item) => {
          const add_on_master = addonIdToName.get(item.COVER_ID);
          const add_on_code = item.COVER_ID;
          if (!result[add_on_code]) {
            result[add_on_code] = {
              add_on_code,
              addl_details: {
                cover_id: item.COVER_ID,
                cover_name: add_on_master?.['cover_name'] || '',
                cover_name_ar: add_on_master?.['cover_name_ar'] || '',
                applicable_products:
                  add_on_master?.['applicable_products'] || [],
                selected: true,
                vehiclesCount: 1,
              },
              risk_items: [bh.input.cr_response[item.SUBJECT_SERIAL_NUMBER]],
            };
          } else {
            result[add_on_code].risk_items.push(
              bh.input.cr_response[item.SUBJECT_SERIAL_NUMBER]
            );
          }
        });

        return Object.values(result);
      };

      bh.add_ons_remap = [];

      bh.add_ons_remap = createOutputObject(bh.add_ons);

      bh.index = 0;

      log.info(
        `[POLICY_ID::${
          bh.input.policy_id
        }][CREATE_ADDONS_FOR_RENEWAL][REQUEST}[${JSON.stringify(
          bh.add_ons_remap
        )}}`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qoUg5Ag6lICeaxvj(bh, parentSpanInst);
      //appendnew_next_sd_wFPzG3LmIq3iutuo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wFPzG3LmIq3iutuo',
        spanInst,
        'sd_wFPzG3LmIq3iutuo'
      );
    }
  }

  async sd_qoUg5Ag6lICeaxvj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qoUg5Ag6lICeaxvj',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.add_ons_remap.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DHYlHHLyCML21j2U(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qoUg5Ag6lICeaxvj',
        spanInst,
        'sd_qoUg5Ag6lICeaxvj'
      );
    }
  }

  async sd_DHYlHHLyCML21j2U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DHYlHHLyCML21j2U',
      parentSpanInst
    );
    try {
      bh.risk_items = bh.add_ons_remap[bh.index].risk_items;
      bh.add_on_code = bh.add_ons_remap[bh.index].add_on_code;
      bh.addl_details = bh.add_ons_remap[bh.index].addl_details;
      bh.premium = bh.add_ons_remap[bh.index]?.premium;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createAddOn(bh, parentSpanInst);
      //appendnew_next_sd_DHYlHHLyCML21j2U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DHYlHHLyCML21j2U',
        spanInst,
        'sd_DHYlHHLyCML21j2U'
      );
    }
  }

  async createAddOn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createAddOn',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance: SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows =
        SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_b3Wtui9d7UIKvVa6Instance.createAddons(
          spanInst,
          bh.add_on_code,
          bh.premium,
          bh.addl_details,
          bh.risk_items
        );
      bh.create_add_on_response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_htwl8Ct0lj5GhA21(bh, parentSpanInst);
      //appendnew_next_createAddOn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xLx0q1dRFQdtuafw',
        spanInst,
        'createAddOn'
      );
    }
  }

  async sd_htwl8Ct0lj5GhA21(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_htwl8Ct0lj5GhA21',
      parentSpanInst
    );
    try {
      bh.index++;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qoUg5Ag6lICeaxvj(bh, parentSpanInst);
      //appendnew_next_sd_htwl8Ct0lj5GhA21
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_htwl8Ct0lj5GhA21',
        spanInst,
        'sd_htwl8Ct0lj5GhA21'
      );
    }
  }

  async getDrivers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDrivers',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getDrivers(
          spanInst,
          bh.input.policy_id
        );
      bh.drivers = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X90YK4H9igpGn478(bh, parentSpanInst);
      //appendnew_next_getDrivers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W2ulyEvEiyMMgCYR',
        spanInst,
        'getDrivers'
      );
    }
  }

  async sd_X90YK4H9igpGn478(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X90YK4H9igpGn478',
      parentSpanInst
    );
    try {
      bh.drivers = bh.drivers.filter(
        (driver) => driver?.LICENSE_NO != bh.input.policy_data?.NATIONAL_ID
      );

      bh.new_drivers = {};
      for (let driver of bh.drivers) {
        if (!bh.new_drivers[driver?.NATIONAL_ID]) {
          bh.new_drivers[driver.NATIONAL_ID] = {
            driver_details: driver,
            risk_items: [driver.SUBJECT_SERIAL_NUMBER],
          };
        } else {
          bh.new_drivers[driver.NATIONAL_ID].risk_items.push(
            driver.SUBJECT_SERIAL_NUMBER
          );
        }
      }

      bh.drivers_risk_items = Object.values(bh.new_drivers);
      bh.index = 0;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_veKF0Kp5WyE6yC3c(bh, parentSpanInst);
      //appendnew_next_sd_X90YK4H9igpGn478
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X90YK4H9igpGn478',
        spanInst,
        'sd_X90YK4H9igpGn478'
      );
    }
  }

  async sd_veKF0Kp5WyE6yC3c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_veKF0Kp5WyE6yC3c',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.index,
          bh.drivers_risk_items.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.yakeenCusRequest2(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_veKF0Kp5WyE6yC3c',
        spanInst,
        'sd_veKF0Kp5WyE6yC3c'
      );
    }
  }

  async yakeenCusRequest2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenCusRequest2',
      parentSpanInst
    );
    try {
      const moment = require('moment');
      bh.driver = bh.drivers_risk_items[bh.index] || {};

      bh.formatDateMMYYYY = (timestamp) => {
        const momentObj = moment(timestamp);
        const formattedDate = momentObj.format('MM-YYYY');
        return formattedDate;
      };

      bh.body = {
        id_type: bh.driver?.driver_details?.LICENSE_NO.startsWith('2') ? 2 : 1,
        id_no: bh.driver?.driver_details?.LICENSE_NO,
        dob: bh.formatDateMMYYYY(bh.driver?.driver_details?.BIRTHDATE),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.yakeenCustomerInfo1(bh, parentSpanInst);
      //appendnew_next_yakeenCusRequest2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wlzDUPV8RcZtX5m7',
        spanInst,
        'yakeenCusRequest2'
      );
    }
  }

  async yakeenCustomerInfo1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenCustomerInfo1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getCustomer(
          spanInst,
          bh.body
        );
      bh.driver_customer_info = outputVariables.local.customer_info;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qhrixBwYjurOrYh1(bh, parentSpanInst);
      //appendnew_next_yakeenCustomerInfo1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VLnYydGNoGv02nQx',
        spanInst,
        'yakeenCustomerInfo1'
      );
    }
  }

  async sd_qhrixBwYjurOrYh1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qhrixBwYjurOrYh1',
      parentSpanInst
    );
    try {
      const [first_name, ...names] =
        bh.driver?.driver_details?.NAME?.split(' ');
      const last_name = names.pop();
      bh.cd_request = {
        driver: {
          quote_id: bh.input.cq_response.id,
          id_type: bh.driver?.driver_details?.LICENSE_NO.startsWith('2')
            ? 2
            : 1,
          id_no: bh.driver?.driver_details?.LICENSE_NO,
          first_name: first_name,
          last_name: last_name,
          addl_details: JSON.stringify({
            ...bh.driver_customer_info?.customer_details,
            ...bh.driver_customer_info?.address_details,
          }),
        },
      };
      bh.risk_items = [
        bh.input.cr_response[bh.driver?.driver_details?.SUBJECT_SERIAL_NUMBER],
      ];

      bh.mode = 'Create';

      log.info(
        `[POLICY_ID::${
          bh.input.policy_id
        }][CREATE_ADDL_DRIVERS_FOR_RENEWAL][REQUEST}[DRIVER::${JSON.stringify(
          bh.cd_request
        )}][RISK_ITEMS::${JSON.stringify(bh.risk_items)}`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createAddlDriver(bh, parentSpanInst);
      //appendnew_next_sd_qhrixBwYjurOrYh1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qhrixBwYjurOrYh1',
        spanInst,
        'sd_qhrixBwYjurOrYh1'
      );
    }
  }

  async createAddlDriver(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createAddlDriver',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.upsertAddlDriver(
          spanInst,
          bh.cd_request,
          bh.risk_items,
          bh.mode
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pvU6ihRP3ozpTU0c(bh, parentSpanInst);
      //appendnew_next_createAddlDriver
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YEzRlwlyOPU9PUBH',
        spanInst,
        'createAddlDriver'
      );
    }
  }

  async sd_pvU6ihRP3ozpTU0c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pvU6ihRP3ozpTU0c',
      parentSpanInst
    );
    try {
      bh.index++;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_veKF0Kp5WyE6yC3c(bh, parentSpanInst);
      //appendnew_next_sd_pvU6ihRP3ozpTU0c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pvU6ihRP3ozpTU0c',
        spanInst,
        'sd_pvU6ihRP3ozpTU0c'
      );
    }
  }

  async sd_d4vrY4hZwSHazrky(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d4vrY4hZwSHazrky',
      parentSpanInst
    );
    try {
      bh.body = {
        search_type: bh.input.search_type,
        filter: bh.input.filter,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callMasterData(bh, parentSpanInst);
      //appendnew_next_sd_d4vrY4hZwSHazrky
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d4vrY4hZwSHazrky',
        spanInst,
        'sd_d4vrY4hZwSHazrky'
      );
    }
  }

  async callMasterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callMasterData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_callMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VxDBCixK3NuUcjx4',
        spanInst,
        'callMasterData'
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
  //appendnew_flow_create_records_Catch
}
