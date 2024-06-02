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
import * as SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m from '../eska_apis'; //_splitter_
import * as SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq from './flows'; //_splitter_
//append_imports_end
export class create_policy {
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
    this.serviceName = 'create_policy';
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
      instance = new create_policy(
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
    //appendnew_flow_create_policy_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: create_policy');
    //appendnew_flow_create_policy_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_policy');
    //appendnew_flow_create_policy_HttpIn
  }
  //   service flows_create_policy

  async preparePolicyWrapper(
    parentSpanInst,
    quote_id: any = undefined,
    product_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'preparePolicyWrapper',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
        product_id,
      },
      local: {
        payload: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary2(bh, parentSpanInst);
      //appendnew_next_preparePolicyWrapper
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payload: bh.local.payload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2eTCRBGoJ3fc6k6R',
        spanInst,
        'preparePolicyWrapper'
      );
    }
  }

  async createPolicyCall(
    parentSpanInst,
    quote_id: any = undefined,
    quote_summary: any = undefined,
    product_id: any = undefined,
    piid: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createPolicyCall',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
        quote_summary,
        product_id,
        piid,
      },
      local: {
        result: undefined,
        eska_request: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getHelperFunctions1(bh, parentSpanInst);
      //appendnew_next_createPolicyCall
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            eska_request: bh.local.eska_request,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mXZskfDZU9FQUQOZ',
        spanInst,
        'createPolicyCall'
      );
    }
  }

  async createPolicy(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createPolicy',
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
      bh = await this.messageParsing1(bh, parentSpanInst);
      //appendnew_next_createPolicy
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
        'sd_KfjNnMqdP7SaizLA',
        spanInst,
        'createPolicy'
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
        'sd_HP0rtk49m4fdaseR',
        spanInst,
        'getMasterData'
      );
    }
  }
  //appendnew_flow_create_policy_start

  async quoteSummary2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance: SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote =
        SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance.getQuoteSummary(
          spanInst,
          bh.input.quote_id,
          bh.input.product_id
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getHelperFunctions(bh, parentSpanInst);
      //appendnew_next_quoteSummary2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dQhWidvm6Zrv95MF',
        spanInst,
        'quoteSummary2'
      );
    }
  }

  async getHelperFunctions(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getHelperFunctions',
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
      bh = await this.prepGeneralInterests(bh, parentSpanInst);
      //appendnew_next_getHelperFunctions
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OsUrUsUF2TouhRW0',
        spanInst,
        'getHelperFunctions'
      );
    }
  }

  async prepGeneralInterests(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepGeneralInterests',
      parentSpanInst
    );
    try {
      bh.customer_id_type = bh.quote_summary.quote_details?.customer_type_id;
      bh.owner_dob =
        bh.customer_id_type == 1
          ? bh.convertDateFormat(
              bh.quote_summary.quote_details.addl_details?.dob
            ) || ''
          : '1989-01-01'; //  For SME - Sending default value
      bh.owner_name = `${bh.quote_summary.quote_details.first_name} ${
        bh.quote_summary.quote_details.addl_details?.second_name_en &&
        bh.quote_summary.quote_details.addl_details?.second_name_en?.toLowerCase() !=
          'null'
          ? bh.quote_summary.quote_details.addl_details?.second_name_en + ' '
          : ''
      }${
        bh.quote_summary.quote_details.addl_details?.third_name_en &&
        bh.quote_summary.quote_details.addl_details?.third_name_en?.toLowerCase() !=
          'null'
          ? bh.quote_summary.quote_details.addl_details?.third_name_en + ' '
          : ''
      }${bh.quote_summary.quote_details?.last_name}`; // firstName + secondName + thirdName + lastName

      bh.getGeneralInterest = async (quote_summary, product_id) => {
        const risk_item_details = quote_summary.risk_item_details?.filter(
          (risk_item) => risk_item?.product_code == product_id
        );
        const quote_details = quote_summary.quote_details;
        const getGeneralInterest = [];
        await Promise.all(
          risk_item_details?.map(async (risk_item, index) => {
            bh.color = risk_item.addl_details?.major_color
              ? await this.getMasterData(
                  parentSpanInst,
                  { name_ar: risk_item.addl_details?.major_color },
                  'color'
                )
              : '';
            //NIYAS FIX BUG - 418
            bh.SI_VALUE =
              risk_item.product_code == '600461'
                ? risk_item.addl_details?.insuredValue || '2000'
                : risk_item.product_code == '600462'
                ? risk_item?.premium_details?.ITDPremium || 0
                : 0;
            getGeneralInterest.push({
              Address:
                bh.customer_id_type == 2
                  ? quote_details?.addl_details.address_line_1
                  : `${
                      quote_details.addl_details?.building_number
                        ? quote_details.addl_details.building_number + ' '
                        : ''
                    }${quote_details.addl_details.street}`,
              Beneficiaries:
                bh.customer_id_type == 2
                  ? quote_details?.company_name
                  : bh.owner_name, //  For SME - Company Name , individual -  owner info
              BeneficiaryID: 0, // CRNumber // National Id
              BirthDate: bh.owner_dob,
              CarStatus: '2',
              ChassisNo: risk_item.addl_details?.chassis_number,
              City: quote_details.addl_details?.city_id,
              ClassID: '184',
              DocumentID: 0,
              Color: bh.color ? bh.color?.local?.result[0]?.id : '13472',
              Country: 'SA',
              CreatedBy: 'NE_ADMIN',
              CurrencyCode: 'SAR',
              Cylender: risk_item.addl_details?.cylinders,
              EffectiveDate: bh.policy_start_date,
              EngineSize: '0',
              ExcessFrom: 'ClaimValue',
              ExchangeRate: '1',
              ExpiryDate: bh.policy_end_date,
              InterestCoverPremiums: {
                InterestCoverPremium:
                  (await bh.interestCoverPremium(quote_summary, risk_item)) ||
                  [],
              },
              InterestDrivers: {
                InterestDriver:
                  bh.interestDrivers(
                    quote_summary?.driver_details,
                    risk_item.id
                  ) || [],
              },
              InterestName: risk_item.addl_details?.chassis_number,
              InterestSerial: index + 1,
              InterestType: '1033',
              IntrestFlexFields: {
                ProductionFlexFields: await bh.getFlexFields(
                  risk_item,
                  index + 1
                ),
              },

              IsDriverCovered: '0',
              IsImported: '0',
              IsTheftExcluded: '0',
              IsTopLocation: '0',
              LicenseNo: bh.quote_summary.quote_details?.id_no,
              MaxExcessAmount:
                product_id == '600461'
                  ? risk_item.addl_details?.deductible || '2000'
                  : 0, // 600461-Comprehensive
              MinExcessAmount:
                product_id == '600461'
                  ? risk_item.addl_details?.deductible || '2000'
                  : 0, // 600461-Comprehensive
              NoOfCoveredPassengers: '0',
              Notes: `NEU-${bh.quote_summary.quote_details?.reference_number}`,
              PlateNoFirstCharacter: risk_item.addl_details?.plate_text1,
              PlateNoNumbers: risk_item?.addl_details?.plate_no,
              PlateNoSecondCharacter: risk_item.addl_details?.plate_text2,
              PlateNoThirdCharacter: risk_item.addl_details?.plate_text3,
              PlateType: risk_item?.id_type == 11 ? '3' : '2', //Sequence No is '2' and If CustomID is 3
              PolicyType: product_id == '600460' ? '100' : '102', //600460 TPL product id in ESKA is 100, Smart and Comp product id in ESKA is 102
              RepairCondition:
                risk_item?.addl_details?.vehicleRepairType == 'Agency'
                  ? 2245
                  : 3727,
              ProductionYear: risk_item.addl_details?.manufacturing_year,
              SeatsNo: risk_item.addl_details?.vehicle_seats || '5 ',
              [risk_item?.id_type == 11 ? 'CustomID' : 'SequenceNo']:
                risk_item?.id_no,
              SumInsured: bh.SI_VALUE,
              LastSurveyDate: '0001-01-01T00:00:00', //To Confirm
              PurchaseDate: '0001-01-01T00:00:00', //To Confirm
              Quantity: 0,
              ShipmentDate: '0001-01-01T00:00:00', //To Confirm
              UnitSumInsured: bh.SI_VALUE,
              VehicleBody: risk_item.addl_details?.eska_body,
              VehicleCategory:
                product_id == '600460'
                  ? '614427'
                  : product_id == '600461'
                  ? '614429'
                  : '614428',
              // Vehicle Category Dropdown in ESKA, WAFI Basic, Smart or Comp (Product for smart and comp is same, vehicle category identifies the difference)
              VehicleModel: risk_item.addl_details?.eska_model,
              VehicleType: risk_item.addl_details?.eska_make,
              VehicleUsage:
                risk_item.addl_details?.purposeOfUsingVehicle || '283',
            });
          })
        );
        return getGeneralInterest;
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepFlexFields(bh, parentSpanInst);
      //appendnew_next_prepGeneralInterests
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ewl7SWnF1jXwPKLJ',
        spanInst,
        'prepGeneralInterests'
      );
    }
  }

  async prepFlexFields(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepFlexFields',
      parentSpanInst
    );
    try {
      bh.getFlexFields = async (risk_item, index) => {
        bh.vehicle_usage_type = risk_item.addl_details?.purposeOfUsingVehicle
          ? await this.getMasterData(
              parentSpanInst,
              { id: risk_item.addl_details?.purposeOfUsingVehicle || '' },
              'usage_type'
            )
          : '';

        // In SME , do not send , 32,33,34,35,129,13
        const flexTemplate = [
          {
            ColumnID: '612961',
            FieldValue: bh.add_days_to_date(new Date(), 30),
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '600760',
            FieldValue: bh.hijriDate(bh.add_days_to_date(new Date(), 30)),
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '712961',
            FieldValue: '113',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '610841',
            FieldValue: risk_item?.premium_details?.NCDLevel || '',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '610842',
            FieldValue: risk_item?.premium_details?.NCDRate || '',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '610921',
            FieldValue:
              bh.quote_summary.quote_details.addl_details?.postal_code || '',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '600883',
            FieldValue: bh.quote_summary.quote_details.addl_details?.city || '',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '600903',
            FieldValue: risk_item?.premium_details?.AddittionalElement5 || 0,
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID:
              process.env.ENV?.toLowerCase() == 'prod' ? '600984' : '611024',
            FieldValue: risk_item?.premium_details?.SchemeDiscountAmount || 0,
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID:
              process.env.ENV?.toLowerCase() == 'prod' ? '600985' : '611025',
            FieldValue: risk_item?.premium_details?.SchemeDiscount || 0,
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '126',
            FieldValue: risk_item?.premium_details?.SchemeDiscount || 0,
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '36',
            FieldValue: risk_item.addl_details?.purposeOfUsingVehicle || '283',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '37',
            FieldValue:
              bh.vehicle_usage_type?.local?.result?.[0]?.name_en ||
              'Private Use – Private Vehicle',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '32',
            FieldValue: risk_item.addl_details.transmission || 'Automatic',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '33',
            FieldValue: risk_item?.addl_details?.parking || 'Street',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '34',
            FieldValue: risk_item?.addl_details?.modification || '',
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '35',
            FieldValue:
              bh.quote_summary.quote_details.addl_details?.postal_code,
            // "InterestSerial": index
            PolicyID: 0,
          },
          {
            ColumnID: '129', //NationalID
            FieldValue: '113',
            // "InterestSerial": index
            PolicyID: 0,
          },
        ];
        return flexTemplate;
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepPremiumsGuna(bh, parentSpanInst);
      //appendnew_next_prepFlexFields
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7tUvlC2W4gO5jeoU',
        spanInst,
        'prepFlexFields'
      );
    }
  }

  async prepPremiumsGuna(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepPremiumsGuna',
      parentSpanInst
    );
    try {
      //GUNA Changes for Cover Objects - START
      // bh.interestCoverPremium = (quote_summary, risk_item) => {
      //     const interestCoverPremiums = []
      //     const addons_details = quote_summary.addons_details;

      //     let getUniqueAddOnItems = []
      //     getUniqueAddOnItems.push({
      //         "add_on_code": risk_item.product_code == "600461"? 1316:risk_item.product_code,
      //         "premium": risk_item.premium,
      //         "deductible": risk_item.addl_details?.deductible,
      //         "addl_details": {
      //             "cover_id": risk_item.product_code == "600461"? 1316:risk_item.product_code ,
      //             "cover_name": bh.get_cover_name(risk_item.product_code),
      //             "id": 0,
      //             "selected": true,
      //             "vehiclesCount": 1,
      //             "premium": risk_item?.premium,
      //             "sumInsured": risk_item?.addl_details?.insuredValue ||0
      //         }
      //     })

      //     const getUniqueAddOnsByRiskId = (addOns, riskId) => {
      //         const uniqueAddOns = {};

      //         addOns.forEach((addOn) => {
      //             if (addOn.risk_id.includes(String(riskId))) {
      //                 const addOnCode = addOn.add_on_code;
      //                 if (!uniqueAddOns[addOnCode]) {
      //                     uniqueAddOns[addOnCode] = { ...addOn };
      //                 } else {
      //                     // Merge applicable_products arrays for repetitive add_on_code
      //                     uniqueAddOns[addOnCode].risk_id = [...new Set(uniqueAddOns[addOnCode].risk_id.concat(addOn.risk_id))];
      //                     uniqueAddOns[addOnCode].addl_details.applicable_products = [
      //                         ...uniqueAddOns[addOnCode].addl_details.applicable_products,
      //                         ...addOn.addl_details.applicable_products
      //                     ];
      //                 }
      //             }
      //         });

      //         return Object.values(uniqueAddOns);
      //     }

      //     getUniqueAddOnItems = [...getUniqueAddOnItems, ...getUniqueAddOnsByRiskId(addons_details, risk_item.id)]
      //     if (getUniqueAddOnItems?.length) {
      //         getUniqueAddOnItems.map((cover: any, index) => {
      //             interestCoverPremiums.push({
      //                 "AnnualLimit": "0",
      //                 "ApplyCommission": "1",
      //                 "ApplyPremium": "1",
      //                 "CaseLimit": "0",
      //                 "CoverName": cover?.addl_details?.cover_name,
      //                 "CoverPremId": 0,
      //                 "DocumentId": 0,
      //                 "InterestSerial": 0,
      //                 "CoverTypeId": cover?.addl_details?.cover_id,
      //                 "CreatedBy": "ADMIN",
      //                 "ExcessFrom": "ClaimValue",
      //                 "ExcessPercentage": "1",
      //                 "IncreaseSumInsured": "0",
      //                 "IsActive": "1",
      //                 "IsAutoFill": "0",
      //                 "IsBasic": "1",
      //                 "IsCanceled": "0",
      //                 "LoadingAmount": "0",
      //                 "LoadingPercent": "0",
      //                 "ManualPremium": cover?.premium,//To confirm
      //                 "MaximumExcessAmount": cover?.addl_details?.cover_id == "600461" ? cover?.deductible || "2000" : 0,
      //                 "MinimumExcessAmount": cover?.addl_details?.cover_id == "600461" ? cover?.deductible || "2000" : 0,
      //                 "PremiumRate": "0",
      //                 "Serial": index + 1,
      //                 "SumInsured": cover?.addl_details?.cover_id == '600460' ? '0' : cover?.addl_details?.cover_id == '600462' ? cover.premium : cover?.sumInsured //SumInsured = (productId == '600460') ? '0' : (productId == '600462') ? `${vehicle.ITDPremium}` : `${vehicle.SumInsured}`;
      //             })
      //         })
      //     }
      //     return interestCoverPremiums;
      // }
      //GUNA Changes for Cover Objects - END

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepPremiumsNiyas(bh, parentSpanInst);
      //appendnew_next_prepPremiumsGuna
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SY41FRuaBhpDOgZE',
        spanInst,
        'prepPremiumsGuna'
      );
    }
  }

  async prepPremiumsNiyas(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepPremiumsNiyas',
      parentSpanInst
    );
    try {
      //NIYAS Changes for Cover Objects - START
      bh.interestCoverPremium = (quote_summary, risk_item) => {
        const interestCoverPremiums = [];
        const addons_details = quote_summary.addons_details;
        let Serial = 0;
        let cover_object_base = {
          AnnualLimit: '0',
          ApplyCommission: '1',
          ApplyPremium: '1',
          CaseLimit: '0',
          CoverName: '',
          CoverTypeId: '',
          CreatedBy: 'NE_ADMIN',
          ExcessFrom: 'ClaimValue',
          ExcessPercentage: '1',
          IncreaseSumInsured: '0',
          InterestSerial: '1',
          IsActive: '1',
          IsAutoFill: '0',
          IsBasic: '0',
          IsCanceled: '0',
          LoadingAmount: '0',
          LoadingPercent: '0',
          ManualPremium: '',
          MaximumExcessAmount: '0',
          MinimumExcessAmount: '0',
          Notes: '',
          PremiumRate: '0',
          Serial: 0,
          SumInsured: '0',
        };
        let main_cover_object = {};
        //push tpl base cover object in case of WAFI Basic
        if (risk_item.product_code == '600460') {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = 'Third Party Liability up to SAR 10 m';
          cover_object['CoverTypeId'] = '2';
          cover_object['ManualPremium'] =
            risk_item?.premium_details?.['TPLBase'];
          cover_object['Serial'] = ++Serial;
          interestCoverPremiums.push(cover_object);
        }
        //push tpl base cover in case of WAFI Smart
        if (risk_item.product_code == '600462') {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = 'Third Party Liability up to SAR 10 m';
          cover_object['CoverTypeId'] = '1316';
          cover_object['ManualPremium'] =
            risk_item?.premium_details?.['SuperSaverBasePremium'];
          cover_object['Serial'] = ++Serial;
          cover_object['SumInsured'] = risk_item?.premium_details?.ITDPremium; //Sum insured will be ITDPremium in case of Smart
          interestCoverPremiums.push(cover_object);
        }
        //push tpl base cover in case of Comprehensive
        if (risk_item.product_code == '600461') {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = 'Third Party Liability up to SAR 10 m';
          cover_object['CoverTypeId'] = '1316';
          cover_object['ManualPremium'] =
            risk_item?.premium_details?.['ODBasePremium'];
          cover_object['MaximumExcessAmount'] =
            risk_item.addl_details?.deductible || '2000';
          cover_object['MinimumExcessAmount'] =
            risk_item.addl_details?.deductible || '2000';
          cover_object['Serial'] = ++Serial;
          cover_object['SumInsured'] = risk_item?.addl_details?.insuredValue; // Captured value from Quotatiin Journey between Min-Max of SI Value from Vehicle Master
          interestCoverPremiums.push(cover_object);
        }
        //main cover object for all the products
        main_cover_object = { ...interestCoverPremiums[0] };
        //push add on cover for selected add ons
        let risk_add_ons = addons_details.filter((x) =>
          x.risk_id.includes(risk_item['id'].toString())
        );
        risk_add_ons = risk_add_ons || [];
        risk_add_ons.forEach((cover) => {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = cover?.addl_details?.cover_name;
          cover_object['CoverTypeId'] = cover?.addl_details?.cover_id;
          cover_object['ManualPremium'] =
            cover?.premium_details?.Premium ||
            cover?.addl_details?.premium ||
            cover?.premium;
          cover_object['Serial'] = ++Serial;
          //DCP doing this for all below 3 properties to have same value as main cover object
          cover_object['MaximumExcessAmount'] =
            main_cover_object['MaximumExcessAmount'];
          cover_object['MinimumExcessAmount'] =
            main_cover_object['MinimumExcessAmount'];
          cover_object['SumInsured'] = main_cover_object['SumInsured'];
          interestCoverPremiums.push(cover_object);
        });
        // NCDAmount Object
        if (Math.abs(risk_item?.premium_details?.NCDAmount || 0) > 0) {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = 'Bonus Malus System';
          cover_object['CoverTypeId'] = '600460'; //eska cover type id for NCD
          cover_object['ManualPremium'] = risk_item?.premium_details?.NCDAmount;
          cover_object['Serial'] = ++Serial;
          //DCP doing this for all below 3 properties to have same value as main cover object
          cover_object['MaximumExcessAmount'] =
            main_cover_object['MaximumExcessAmount'];
          cover_object['MinimumExcessAmount'] =
            main_cover_object['MinimumExcessAmount'];
          cover_object['SumInsured'] = main_cover_object['SumInsured'];
          interestCoverPremiums.push(cover_object);
        }
        // MultiVehicleDiscountAmount Object
        if (
          Math.abs(
            risk_item?.premium_details?.MultiVehicleDiscountAmount || 0
          ) > 0
        ) {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = 'Multi vehicle Discount';
          cover_object['CoverTypeId'] = '611144'; //eska cover type id for Multi vehicle Discount
          cover_object['ManualPremium'] =
            risk_item?.premium_details?.MultiVehicleDiscountAmount;
          cover_object['Serial'] = ++Serial;
          //DCP doing this for all below 3 properties to have same value as main cover object
          cover_object['MaximumExcessAmount'] =
            main_cover_object['MaximumExcessAmount'];
          cover_object['MinimumExcessAmount'] =
            main_cover_object['MinimumExcessAmount'];
          cover_object['SumInsured'] = main_cover_object['SumInsured'];
          interestCoverPremiums.push(cover_object);
        }
        // LoyaltyDiscountAmount Object
        if (
          Math.abs(risk_item?.premium_details?.LoyaltyDiscountAmount || 0) > 0
        ) {
          let cover_object = { ...cover_object_base };
          cover_object['CoverName'] = 'Loyalty Amount Discount';
          cover_object['CoverTypeId'] = '610464'; //eska cover type id for Loyalty Amount Discount
          cover_object['ManualPremium'] =
            risk_item?.premium_details?.LoyaltyDiscountAmount;
          cover_object['Serial'] = ++Serial;
          //DCP doing this for all below 3 properties to have same value as main cover object
          cover_object['MaximumExcessAmount'] =
            main_cover_object['MaximumExcessAmount'];
          cover_object['MinimumExcessAmount'] =
            main_cover_object['MinimumExcessAmount'];
          cover_object['SumInsured'] = main_cover_object['SumInsured'];
          interestCoverPremiums.push(cover_object);
        }
        return interestCoverPremiums;
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepDrivers(bh, parentSpanInst);
      //appendnew_next_prepPremiumsNiyas
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xFsAZMqJ1JwgHbO5',
        spanInst,
        'prepPremiumsNiyas'
      );
    }
  }

  async prepDrivers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepDrivers',
      parentSpanInst
    );
    try {
      const identificationType = (str) => (str.startsWith('1') ? 7965 : 7966);
      const identificationTypeText = (str) =>
        str.startsWith('1') ? 'Saudi' : 'Non Saudi';
      bh.interestDrivers = (driver_details, risk_item_id) => {
        const interest_drivers = [];
        //Add main driver details
        const filtered_drivers = driver_details.filter((x) =>
          x.risk_items.includes(risk_item_id?.toString())
        );
        if (bh.customer_id_type == 1) {
          interest_drivers.push({
            BirthDate:
              bh.customer_id_type == 1
                ? bh.add_days_to_date(
                    bh.convertDateFormat(
                      bh.quote_summary.quote_details.addl_details?.dob
                    ),
                    0
                  ) || ''
                : '1989-01-01', //  For SME - Sending default value
            DriverLicenseNum: bh.quote_summary.quote_details?.id_no,
            DriverID: 0,
            Gender:
              String(bh.quote_summary.quote_details.addl_details?.gender) ||
              '1',
            DriverName: bh.owner_name,
            IdentificationType: identificationType(
              bh.quote_summary.quote_details?.id_no
            ),
            IdentificationTypeText: identificationTypeText(
              bh.quote_summary.quote_details?.id_no
            ),
            IsPrimary: '1',
            LicenseEffDate: null,
            LicenseIssueDate: null,
          });
        }
        filtered_drivers?.map((driver) => {
          interest_drivers.push({
            BirthDate:
              bh.add_days_to_date(
                bh.convertDateFormat(driver?.addl_details?.dob),
                0
              ) || '',
            DriverLicenseNum: driver?.id_no, //National Id of the driver
            DriverID: 0,
            Gender: driver?.addl_details?.gender || '1',
            DriverName: driver?.driver_name,
            IdentificationType: identificationType(driver?.id_no),
            IdentificationTypeText: identificationTypeText(driver?.id_no),
            IsPrimary: '0', //If main driver then 1 else 0
            LicenseEffDate: null,
            LicenseIssueDate: null,
          });
        });
        return interest_drivers;
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyWrap(bh, parentSpanInst);
      //appendnew_next_prepDrivers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mIJNUdCp9DU6KJdu',
        spanInst,
        'prepDrivers'
      );
    }
  }

  async policyWrap(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyWrap',
      parentSpanInst
    );
    try {
      const get_risk_items_based_on_plan_items =
        bh.get_risk_items_based_on_plans(bh.quote_summary);
      bh.quote_wrapper_bodies = [];
      bh.eska_id = '';
      bh.eska_segment_code = '';
      bh.AccountedAccountID = '';
      bh.AccountedCustomerSegmentCode = '';

      const owner_addl_details = bh.quote_summary?.quote_details?.addl_details;

      if (bh.customer_id_type == 1)
        bh.address =
          owner_addl_details?.city +
          ' ' +
          owner_addl_details?.district +
          ' ' +
          owner_addl_details?.city_ar +
          ' ' +
          owner_addl_details?.district_ar; //city + district + city_ar + district_ar;
      else bh.address = owner_addl_details?.address_line_1;

      // deleted address `${bh.quote_summary.quote_details.addl_details?.building_number ? bh.quote_summary.quote_details.addl_details?.building_number + ' ' : ''}${bh.quote_summary.quote_details.addl_details?.street || ''}`, //For SME - Address Of the company
      if (bh.quote_summary?.quote_details?.agent_type == 4) {
        bh.eska_id =
          bh.quote_summary?.quote_details?.eska_details?.tenant_eska_id;
        bh.eska_segment_code =
          bh.quote_summary?.quote_details?.eska_details?.tenant_eska_segment_code;
      } else {
        bh.eska_id =
          bh.quote_summary?.quote_details?.eska_details?.user_eska_id;
        bh.eska_segment_code =
          bh.quote_summary?.quote_details?.eska_details?.user_eska_segment_code;
      }
      //AccountedAccountID and AccountedCustomerSegmentCode from user eska details
      bh.AccountedAccountID =
        bh.quote_summary?.quote_details?.eska_details?.AccountedAccountID;
      bh.AccountedCustomerSegmentCode =
        bh.quote_summary?.quote_details?.eska_details?.AccountedCustomerSegmentCode;
      //Main Account Id and SegmentCode value mapping, 1st from user input field, if not env value if not agent/broken info data or hard coded
      bh.AccountID =
        bh.AccountedAccountID ||
        process.env.ESKA_ACCOUNT_ID ||
        bh.eska_id ||
        '102018';
      bh.SegmentCode =
        bh.AccountedCustomerSegmentCode ||
        process.env.ESKA_SEG_CODE ||
        bh.eska_segment_code ||
        '1134310868';

      const eska_id_policy_wrap = () => {
        try {
          const eskaId = Number(process.env.DEFAULT_AGENT_ID);
          return bh.eska_id || eskaId || 0;
        } catch (error) {
          return 0;
        }
      };

      async function asyncOperation() {
        for (let product_id in get_risk_items_based_on_plan_items) {
          if (product_id == bh.input.product_id) {
            bh.quote_wrapper_bodies.push({
              GeneralQuotation: {
                AccountedAccountID: bh.AccountID,
                AccountedCustomerSegmentCode: bh.SegmentCode,
                AgentReferenceCode:
                  bh.quote_summary?.quote_details?.addl_details?.agent_code ||
                  '', //It will be captured from the agent code input field on the policy summary page for b2c policies
                AccountedFor: process.env.ESKA_ACCOUNT_FOR || '6', //always 6 in case of b2e and direct, b2b to be checked, eska saeed/ahmad todo
                AgentType: bh.quote_summary?.quote_details?.agent_type || '1', // 1-direct, 2-agent, 3-sales person, 4-broker
                Agents: {
                  GeneralAgent: {
                    CommissionPercentage: '0',
                    CustomerID: eska_id_policy_wrap() || 0,
                    SharePercentage: '100',
                  },
                },
                AgtCommissionAmount: 0,
                Beneficiary: 0, // CRNumber in SME - NatinalID
                BranchCurrency: 'SAR',
                BranchExrate: 1,
                BranchID: bh.quote_summary?.quote_details?.branch_id || '121',
                BusinessChannel:
                  bh.quote_summary?.quote_details?.business_channel || '602402',
                BusinessType: '1',
                CalculationBase: '4',
                ClassID: '184',
                CompanyID: '1',
                CreatedBy: 'NE_ADMIN',
                CommissionAmount: 0,
                DocumentID: 0,
                DocumentNo: 0,
                IsCalculated: 0,
                IsConverted: 0,
                IsDriverAgeLoadingApplied: false,
                IsFronting: 0,
                IsPrinted: 0,
                IsReinsured: 0,
                LiabilityLimit: 0,
                NetPremium: 0,
                Notes: 'IFOUNDRY',
                OurSharePercentage: 100,
                PaymentCycleID: 1,
                PrintCount: 0,
                ExcessAmount: 100,
                FiscalYear: 2021, //To Check
                CurrencyCode: 'SAR',
                EffectiveDate: bh.policy_start_date,
                ExchangeRate: '1',
                ExpiryDate: bh.policy_end_date,
                GrossPremium: '0',
                Insured: 0,
                InsuredAddress: bh.address,
                InsuredName:
                  bh.customer_id_type == 2
                    ? bh.quote_summary?.quote_details?.company_name
                    : bh.owner_name,
                IssueDate: bh.trim_date(new Date()),
                OpenCoverType: '0',
                PolicyType: product_id == '600460' ? '100' : '102',
                QuotationDate: bh.trim_date(new Date()),
                QuotationExpiryDate: bh.add_days_to_date(new Date(), 30),
                QuotationStatus: '1',
                QuotationType: 'Customer',
                QuotationValidity: '30',
                TotalFees: 0,
                TotalInstallmentsAmount: 0,
                VoucherDate: bh.trim_date(new Date()),
                intLoadingSurvayId: 0,
              },
              QuotationInterests: {
                GeneralInterest:
                  (await bh.getGeneralInterest(bh.quote_summary, product_id)) ||
                  [],
              },
            });
          }
        }
      }
      log.info(
        `[QUOTE_ID:${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][ESKA_CREATE_POLICY][POLICY_WRAPPER][START]`
      );
      await asyncOperation();
      log.info(
        `[QUOTE_ID:${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][ESKA_CREATE_POLICY][POLICY_WRAPPER][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.postProcess(bh, parentSpanInst);
      //appendnew_next_policyWrap
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_21vof2YQl7PJKDdL',
        spanInst,
        'policyWrap'
      );
    }
  }

  async postProcess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'postProcess',
      parentSpanInst
    );
    try {
      bh.quote_wrapper_bodies = bh.quote_wrapper_bodies[0];

      //Renewal Flow
      if (bh.quote_summary?.quote_details?.is_eska_renewal) {
        log.info(
          `[QUOTE_ID:${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][ESKA_CREATE_POLICY][IS_RENEWAL_POLICY::TRUE]`
        );
        bh.quote_wrapper_bodies.GeneralQuotation['PolicyRenewalId'] =
          bh.quote_summary?.quote_details?.old_policy_id;
      } else {
        log.info(
          `[QUOTE_ID:${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][ESKA_CREATE_POLICY][IS_RENEWAL_POLICY::FALSE]`
        );
      }

      bh.local.payload = bh.quote_wrapper_bodies;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_postProcess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G0vjHIifEUfl35gi',
        spanInst,
        'postProcess'
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
      bh = await this.createCustomerMap(bh, parentSpanInst);
      //appendnew_next_getHelperFunctions1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6jpNCW3ECyEbOEsd',
        spanInst,
        'getHelperFunctions1'
      );
    }
  }

  async createCustomerMap(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createCustomerMap',
      parentSpanInst
    );
    try {
      bh.quote_summary = bh.input.quote_summary;

      bh.owner_name = `${bh.quote_summary.quote_details.first_name} ${
        bh.quote_summary.quote_details.addl_details?.second_name_en &&
        bh.quote_summary.quote_details.addl_details?.second_name_en?.toLowerCase() !=
          'null'
          ? bh.quote_summary.quote_details.addl_details?.second_name_en + ' '
          : ''
      }${
        bh.quote_summary.quote_details.addl_details?.third_name_en &&
        bh.quote_summary.quote_details.addl_details?.third_name_en?.toLowerCase() !=
          'null'
          ? bh.quote_summary.quote_details.addl_details?.third_name_en + ' '
          : ''
      }${bh.quote_summary.quote_details?.last_name}`; // firstName + secondName + thirdName + lastName

      bh.customer_id_type = bh.quote_summary.quote_details?.customer_type_id;

      bh.nationality = bh.quote_summary?.quote_details?.addl_details
        ?.nationality
        ? await this.getMasterData(
            parentSpanInst,
            {
              Eska_code:
                bh.quote_summary?.quote_details?.addl_details?.nationality ||
                '',
            },
            'nationality'
          )
        : '';

      const owner_addl_details = bh.quote_summary?.quote_details?.addl_details;

      if (bh.customer_id_type == 1)
        bh.address =
          owner_addl_details?.city +
          ' ' +
          owner_addl_details?.district +
          ' ' +
          owner_addl_details?.city_ar +
          ' ' +
          owner_addl_details?.district_ar; //city + district + city_ar + district_ar;
      else bh.address = owner_addl_details?.address_line_1;

      bh.customer = {
        BENEFICIARY_NAME:
          bh.customer_id_type == 2
            ? bh.quote_summary?.quote_details?.company_name
            : bh.owner_name, // TO check in the SME - COmpany Name
        BIRTH_DATE:
          bh.customer_id_type == 1
            ? bh.convertDateFormat(
                bh.quote_summary.quote_details.addl_details?.dob
              ) || ''
            : '1989-01-01', //  For SME - Sending default value
        COMMERCIAL_NAME:
          bh.customer_id_type == 2
            ? bh.quote_summary?.quote_details?.company_name
            : bh.owner_name, // For SME -Company Name
        COMP_INDV_FLAG: 1, // TO check
        CREATED_BY: 'NE_ADMIN',
        CRG_BRN_ID: bh.quote_summary?.quote_details?.branch_id || '121',
        CRG_CNT_CODE: 1,
        CRG_COM_ID: 1,
        CRG_CTY_CODE: 1,
        CST_SUP_FLAG: 1,
        EMAIL: bh.quote_summary.quote_details?.email_id || '',
        FAX: 0,
        GENDER:
          String(bh.quote_summary.quote_details.addl_details?.gender) || '1', // Gender of the owner
        INDIVIDUAL_OR_COMPANY: bh.customer_id_type,
        MAIN_ADDRESS: bh.address,
        MOBILE: bh.quote_summary.quote_details.phone_no,
        NAME:
          bh.customer_id_type == 2
            ? bh.quote_summary?.quote_details?.company_name
            : bh.owner_name, // For SME - Company name
        NATIONALITY: bh.nationality?.local?.result[0]?.eska_name || 'SA',
        NATIONAL_ID: bh.quote_summary.quote_details.id_no,
        PHONE: bh.quote_summary.quote_details.phone_no,
        POBOX: bh.quote_summary.quote_details.addl_details.postal_code,
        POSTAL_CODE: bh.quote_summary.quote_details.addl_details.postal_code,
        TAXABLE: bh.quote_summary?.quote_details.addl_details?.vatNum ? 1 : 0,
        TAX_NO: bh.quote_summary?.quote_details.addl_details?.vatNum || '',
        TITLE: bh.quote_summary.quote_details.addl_details.gender || 1,
      };

      log.info(
        `[QUOTE_ID:${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][ESKA_CREATE_POLICY][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyWrapper(bh, parentSpanInst);
      //appendnew_next_createCustomerMap
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_td7uHJa5P2G68AZ0',
        spanInst,
        'createCustomerMap'
      );
    }
  }

  async policyWrapper(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyWrapper',
      parentSpanInst
    );
    try {
      let outputVariables = await this.preparePolicyWrapper(
        spanInst,
        bh.input.quote_id,
        bh.input.product_id
      );
      bh.payload = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policy(bh, parentSpanInst);
      //appendnew_next_policyWrapper
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H4SZeXGd1pdrrLcb',
        spanInst,
        'policyWrapper'
      );
    }
  }

  async policy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('policy', parentSpanInst);
    try {
      function replaceUndefinedNullWithEmptyString(obj) {
        // If obj is an array, iterate over its elements
        if (Array.isArray(obj)) {
          for (let i = 0; i < obj.length; i++) {
            obj[i] = replaceUndefinedNullWithEmptyString(obj[i]);
          }
        } else if (typeof obj === 'object' && obj !== null) {
          // If obj is an object, iterate over its properties
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              obj[key] = replaceUndefinedNullWithEmptyString(obj[key]);
            }
          }
        } else if (typeof obj === 'string') {
          // If obj is a string containing 'undefined', replace it with an empty string
          obj = obj.replace('undefined', '');
          obj = obj.replace('null', '');
        } else if (obj === undefined || obj === null) {
          // If obj is undefined or null, replace it with an empty string
          obj = '';
        }
        // Return the modified object
        return obj;
      }

      //AGENT or BROKER Identfication
      bh.eska_id = '';
      if (bh.quote_summary?.quote_details?.agent_type == 4) {
        bh.eska_id =
          bh.quote_summary?.quote_details?.eska_details?.tenant_eska_id;
      } else {
        bh.eska_id =
          bh.quote_summary?.quote_details?.eska_details?.user_eska_id;
      }

      const eska_id = () => {
        try {
          const eskaId = Number(process.env.DEFAULT_AGENT_ID);
          return bh.eska_id || eskaId || 0;
        } catch (error) {
          return 0;
        }
      };

      bh.body = {
        ESKAWrapperInput: {
          AGENTS_LIST: {
            ID: {
              int: eska_id() || 0,
            },
          },
          CUSTOMER: bh.customer,
          CUSTOMER_TYPE: {
            ID: bh.quote_summary.quote_details?.customer_type_id,
          },
          InsertQuotationWrapperInput: bh.payload,
        },
      };

      bh.local.eska_request = replaceUndefinedNullWithEmptyString(bh.body);

      bh.policy_audit = {
        policy_audit: {
          quote_id: bh.input.quote_id,
          product_id: String(bh.input.product_id),
          piid: Number(bh.input.piid),
          eska_customer_id: String(),
          eska_policy_id: String(),
          eska_quote_id: String(),
          eska_policy_no: '',
          eska_request: JSON.stringify(bh.body),
          eska_response: '',
          notify_eska_responses: '',
          generate_report_response: '',
          najm_response: '',
          created_date: new Date(),
          updated_at: new Date(),
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createPolicyAudit(bh, parentSpanInst);
      //appendnew_next_policy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2yOQ0rs6RSegeB7V',
        spanInst,
        'policy'
      );
    }
  }

  async createPolicyAudit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createPolicyAudit',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance: SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows =
        SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKqInstance.createPolicyAudit(
          spanInst,
          bh.policy_audit,
          bh.input.quote_id
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createPolicyHttp(bh, parentSpanInst);
      //appendnew_next_createPolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GkQaiWIGGKlwqEvT',
        spanInst,
        'createPolicyAudit'
      );
    }
  }

  async createPolicyHttp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createPolicyHttp',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance: SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis =
        SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m.eska_apis.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0mInstance.createPolicy(
          spanInst,
          bh.body,
          bh.input.quote_id
        );
      bh.local.result = outputVariables.local.payload;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.log1(bh, parentSpanInst);
      //appendnew_next_createPolicyHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F7kKetJ7iovjDP92',
        spanInst,
        'createPolicyHttp'
      );
    }
  }

  async log1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log1', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID:${bh.input.quote_id}][PRODUCT_ID::${bh.input.product_id}][ESKA_CREATE_POLICY][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.isQuoteUpdate(bh, parentSpanInst);
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UbHnIwk4NAD7vtUp',
        spanInst,
        'log1'
      );
    }
  }

  async isQuoteUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'isQuoteUpdate',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.update_policy_start_date,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yYk2dfy8M1AdPDwv(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HIoBlrgJBp1bfq53',
        spanInst,
        'isQuoteUpdate'
      );
    }
  }

  async sd_yYk2dfy8M1AdPDwv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yYk2dfy8M1AdPDwv',
      parentSpanInst
    );
    try {
      bh.input.quote_summary.quote_details.addl_details['policy_start_date'] =
        bh.policy_start_date_for_quote;
      bh.add_details = JSON.stringify(
        bh.input.quote_summary.quote_details?.addl_details
      );
      log.info(
        `[QUOTE_ID::${bh.input.quote_id}][UPDATE_POLICY_START_DATE_IN_QUOTE::TRUE]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateQuote(bh, parentSpanInst);
      //appendnew_next_sd_yYk2dfy8M1AdPDwv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yYk2dfy8M1AdPDwv',
        spanInst,
        'sd_yYk2dfy8M1AdPDwv'
      );
    }
  }

  async updateQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateQuote',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance: SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote =
        SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL.quote.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mGygVbCHYy2kHadLInstance.patchQuote(
          spanInst,
          bh.add_details,
          bh.input.quote_id
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updateQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gBYhuagaz0wzWEtb',
        spanInst,
        'updateQuote'
      );
    }
  }

  async messageParsing1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'messageParsing1',
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
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${bh.product_id}][AMQP_CONSUMER][CREATE_POLICY_QUEUE][START]`
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.quoteSummary(bh, parentSpanInst);
      //appendnew_next_messageParsing1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MAaOdnOaPjOKCxbI',
        spanInst,
        'messageParsing1'
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
      bh = await this.callCreatePolicy(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HjHN8xXUT78kqVx2',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async callCreatePolicy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callCreatePolicy',
      parentSpanInst
    );
    try {
      let outputVariables = await this.createPolicyCall(
        spanInst,
        bh.quote_id,
        bh.quote_summary,
        bh.product_id,
        bh.piid
      );
      bh.create_policy_response = outputVariables.local.result;
      bh.eska_request = outputVariables.local.eska_request;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyAuditMapping(bh, parentSpanInst);
      //appendnew_next_callCreatePolicy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YFN3UZGw81OE7kPC',
        spanInst,
        'callCreatePolicy'
      );
    }
  }

  async policyAuditMapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyAuditMapping',
      parentSpanInst
    );
    try {
      const eska_response = bh.create_policy_response?.ESKAWrapperServiceResult;
      bh.update_policy_audit = {
        filter: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
        },
        policy_audit: {
          quote_id: Number(bh.quote_id),
          product_id: String(bh.product_id),
          eska_customer_id: String(eska_response?.CustomerID),
          eska_policy_id: String(eska_response?.PolicyID),
          eska_quote_id: String(eska_response?.QuotationID),
          eska_policy_no:
            typeof eska_response?.PolicySegmantCode == 'object'
              ? JSON.stringify(eska_response?.PolicySegmantCode)
              : eska_response?.PolicySegmantCode,
          eska_response: JSON.stringify(eska_response),
          updated_at: new Date(),
        },
      };
      const eska_error = eska_response?._Status;

      if (eska_error?.StatusCode == 0) {
        bh.signal_options = {
          Error: 'Eska Error',
          ErrorMessage: JSON.stringify(eska_error),
          isError: true,
        };
      }
      //can update quote table
      bh.policy_status = false;
      bh.reference_no = bh.quote_summary?.quote_details?.reference_number;
      if (eska_response?.PolicyID && bh.reference_no) {
        bh.policy_status = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X8rDBg03ObM9a7O9(bh, parentSpanInst);
      //appendnew_next_policyAuditMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BuHuuN3ZWKl7gI6Y',
        spanInst,
        'policyAuditMapping'
      );
    }
  }

  async sd_X8rDBg03ObM9a7O9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X8rDBg03ObM9a7O9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.policy_status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.updatePolicyAudit(bh, parentSpanInst);
        bh = await this.updateStatus(bh, parentSpanInst);
      } else {
        bh = await this.updatePolicyAudit(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X8rDBg03ObM9a7O9',
        spanInst,
        'sd_X8rDBg03ObM9a7O9'
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
      bh = await this.sendSignal1(bh, parentSpanInst);
      //appendnew_next_updatePolicyAudit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cS96zCrNvu00KVBR',
        spanInst,
        'updatePolicyAudit'
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
        'sd_Oylm8jmW8gosHwt2',
        spanInst,
        'sendSignal1'
      );
    }
  }

  async log2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('log2', parentSpanInst);
    try {
      log.info(
        `[QUOTE_ID::${bh.quote_id}][PRODUCT_ID::${
          bh.product_id
        }][AMQP_CONSUMER][CREATE_POLICY_QUEUE][RESULT][${JSON.stringify(
          bh.result
        )}][END]`
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_log2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SER6Rz8Rtp9re9e7',
        spanInst,
        'log2'
      );
    }
  }

  async updateStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateStatus',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance: SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows =
        SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIqInstance.updateStatus(
          spanInst,
          bh.reference_no
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updateStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HJmXeftGyHa81OCm',
        spanInst,
        'updateStatus'
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
        'sd_hQvSESe3Ci2AReRn',
        spanInst,
        'callMasterData'
      );
    }
  }

  async sd_ETUxpGKho5qzWvFS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ETUxpGKho5qzWvFS',
      parentSpanInst
    );
    try {
      throw new Error(
        `ERROR FROM ESKA CREATE POLICY ${JSON.stringify(bh.error)}`
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ETUxpGKho5qzWvFS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ETUxpGKho5qzWvFS',
        spanInst,
        'sd_ETUxpGKho5qzWvFS'
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
      (await this.sd_Ul5N5JzhXFgeUhXo(bh, parentSpanInst))
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
  async sd_Ul5N5JzhXFgeUhXo(bh, parentSpanInst) {
    const nodes = ['sd_F7kKetJ7iovjDP92'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ETUxpGKho5qzWvFS(bh, parentSpanInst);
      //appendnew_next_sd_Ul5N5JzhXFgeUhXo
      return true;
    }
    return false;
  }
  //appendnew_flow_create_policy_Catch
}
