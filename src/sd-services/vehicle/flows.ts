// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
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

  async getcarinfobysequence(
    parentSpanInst,
    sequenceNumber = '',
    ownerId = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getcarinfobysequence',
      parentSpanInst
    );
    let bh: any = {
      input: {
        sequenceNumber,
        ownerId,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getcarinfobysequence
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
        'sd_jlh6eDLUrm3JwvoK',
        spanInst,
        'getcarinfobysequence'
      );
    }
  }

  async getcarinfobycustom(
    parentSpanInst,
    customNumber = '',
    modelYear = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getcarinfobycustom',
      parentSpanInst
    );
    let bh: any = {
      input: {
        customNumber,
        modelYear,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_getcarinfobycustom
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
        'sd_GTiQs0D8e5G3Hc8w',
        spanInst,
        'getcarinfobycustom'
      );
    }
  }

  async getnajmNcd(
    parentSpanInst,
    vehicleIdentifier = '',
    vehicleId = '',
    policyHolderId = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getnajmNcd',
      parentSpanInst
    );
    let bh: any = {
      input: {
        vehicleIdentifier,
        vehicleId,
        policyHolderId,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_getnajmNcd
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
        'sd_kQpvvHzkvecZu1Ak',
        spanInst,
        'getnajmNcd'
      );
    }
  }

  async getVehicleDetails(
    parentSpanInst,
    id_type = 0,
    owner_id = 0,
    vehicle_id_no = 0,
    model_year = 0,
    policy_holder_id = 0,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getVehicleDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_type,
        owner_id,
        vehicle_id_no,
        model_year,
        policy_holder_id,
      },
      local: {
        vehicleDetails: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rAfo2s5XJSV4QvI4(bh, parentSpanInst);
      //appendnew_next_getVehicleDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            vehicleDetails: bh.local.vehicleDetails,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZJmLBuhs8nlhYDqu',
        spanInst,
        'getVehicleDetails'
      );
    }
  }

  async getMultipleVehicleDetailsV1(
    parentSpanInst,
    vehList: any = undefined,
    ownerId: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getMultipleVehicleDetailsV1',
      parentSpanInst
    );
    let bh: any = {
      input: {
        vehList,
        ownerId,
      },
      local: {
        vehicleDetails: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZQGvo2Loobr9yzU2(bh, parentSpanInst);
      //appendnew_next_getMultipleVehicleDetailsV1
      return (
        // formatting output variables
        {
          input: {},
          local: {
            vehicleDetails: bh.local.vehicleDetails,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pzWtGa57ea9J6Mte',
        spanInst,
        'getMultipleVehicleDetailsV1'
      );
    }
  }

  async getMakeImage(parentSpanInst, eska_make = 0, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMakeImage',
      parentSpanInst
    );
    let bh: any = {
      input: {
        eska_make,
      },
      local: {
        image_url: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_getMakeImage
      return (
        // formatting output variables
        {
          input: {},
          local: {
            image_url: bh.local.image_url,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uwEzr768zryF77ww',
        spanInst,
        'getMakeImage'
      );
    }
  }

  async getRiskScore(
    parentSpanInst,
    ownerId: any = undefined,
    seqNumber: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getRiskScore',
      parentSpanInst
    );
    let bh: any = {
      input: {
        ownerId,
        seqNumber,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jlTbTEQagfRu7APS(bh, parentSpanInst);
      //appendnew_next_getRiskScore
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
        'sd_XIc6UOGBtlKcKRCv',
        spanInst,
        'getRiskScore'
      );
    }
  }

  async getMultipleVehicleDetails(
    parentSpanInst,
    vehList: any = undefined,
    ownerId: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getMultipleVehicleDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        vehList,
        ownerId,
      },
      local: {
        vehicleDetails: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Kaaf1HE1eG68d2Kb(bh, parentSpanInst);
      //appendnew_next_getMultipleVehicleDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            vehicleDetails: bh.local.vehicleDetails,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zmrfd055Rex6NVCI',
        spanInst,
        'getMultipleVehicleDetails'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'yakeen/vehicleinfo/sequence';
      bh.body = {
        sequenceNumber: bh.input.sequenceNumber,
        ownerId: bh.input.ownerId,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpCarInfoSeq(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ho0swsKD0XeUCALi',
        spanInst,
        'setUrl0'
      );
    }
  }

  async httpCarInfoSeq(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_httpCarInfoSeq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AxJnB2RvWaO9jzbl');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VJeqAQRlbnlJuaWO',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'yakeen/vehicleinfo/custom';
      bh.body = {
        customNumber: bh.input.customNumber,
        modelYear: bh.input.modelYear,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpCarInfoCustm(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iTsa1cwtwKxYn7Z3',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpCarInfoCustm(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_httpCarInfoCustm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qSdL1wytDXaAhbCU');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y23PUpXfbHoW0DyC',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'najm/ncd';

      bh.input.vehicleIdentifier =
        bh.input.vehicleIdentifier == '10' ? '1' : '2';

      bh.body = {
        vehicleIdentifier: bh.input.vehicleIdentifier,
        vehicleId: bh.input.vehicleId,
        policyHolderId: bh.input.policyHolderId,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mkdaqNilmCgs58ke(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NDVNx6GA4P3m0k7c',
        spanInst,
        'setUrl2'
      );
    }
  }

  async sd_mkdaqNilmCgs58ke(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_sd_mkdaqNilmCgs58ke
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mkdaqNilmCgs58ke');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0PoRNYB4r57LrQkk',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_rAfo2s5XJSV4QvI4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rAfo2s5XJSV4QvI4',
      parentSpanInst
    );
    try {
      bh.policyHolderId = bh.input.policy_holder_id || bh.input.owner_id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkIdType(bh, parentSpanInst);
      //appendnew_next_sd_rAfo2s5XJSV4QvI4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rAfo2s5XJSV4QvI4',
        spanInst,
        'sd_rAfo2s5XJSV4QvI4'
      );
    }
  }

  async checkIdType(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkIdType',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.id_type,
          10,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mAcDhCr4KJEn5UKw(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.id_type,
          11,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ziRwcGX5f42di3jV(bh, parentSpanInst);
      } else {
        bh = await this.setResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SxMyYHI2VZ7Smhl7',
        spanInst,
        'checkIdType'
      );
    }
  }

  async sd_mAcDhCr4KJEn5UKw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mAcDhCr4KJEn5UKw',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance: flows =
        flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getcarinfobysequence(
          spanInst,
          bh.input.vehicle_id_no,
          bh.input.owner_id
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getnajmNcd(
          spanInst,
          bh.input.id_type,
          bh.input.vehicle_id_no,
          bh.policyHolderId
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getRiskScore(
          spanInst,
          bh.input.owner_id,
          bh.input.vehicle_id_no
        )
      );

      bh.res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.vehicleUsageData(bh, parentSpanInst);
      //appendnew_next_sd_mAcDhCr4KJEn5UKw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mAcDhCr4KJEn5UKw',
        spanInst,
        'sd_mAcDhCr4KJEn5UKw'
      );
    }
  }

  async vehicleUsageData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'vehicleUsageData',
      parentSpanInst
    );
    try {
      bh.vehicleUsageData = [
        {
          plate_type_code: 1,
          purposeOfUsingVehicleId: '283',
        },
        {
          plate_type_code: 2,
          purposeOfUsingVehicleId: '30008',
        },
        {
          plate_type_code: 3,
          purposeOfUsingVehicleId: '30007',
        },
        {
          plate_type_code: 4,
          purposeOfUsingVehicleId: '30001',
        },
        {
          plate_type_code: 5,
          purposeOfUsingVehicleId: '30007',
        },
        {
          plate_type_code: 6,
          purposeOfUsingVehicleId: '605118',
        },
        {
          plate_type_code: 7,
          purposeOfUsingVehicleId: '30009',
        },
        {
          plate_type_code: 8,
          purposeOfUsingVehicleId: '3648',
        },
        {
          plate_type_code: 9,
          purposeOfUsingVehicleId: '30000',
        },
        {
          plate_type_code: 10,
          purposeOfUsingVehicleId: '283',
        },
        {
          plate_type_code: 11,
          purposeOfUsingVehicleId: '3648',
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_y1tjTnHuzFzRnKs0(bh, parentSpanInst);
      //appendnew_next_vehicleUsageData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VSuYC0b6GfwiYqa4',
        spanInst,
        'vehicleUsageData'
      );
    }
  }

  async sd_y1tjTnHuzFzRnKs0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y1tjTnHuzFzRnKs0',
      parentSpanInst
    );
    try {
      bh.vehicleDetails = Object.assign(
        {},
        bh.res_arr[0].local.result,
        bh.res_arr[1].local.result,
        bh.res_arr[2].local.result
      );

      bh.vehicleDetails['purposeOfUsingVehicle'] =
        bh.vehicleUsageData.find(
          (X) => X.plate_type_code == bh.vehicleDetails?.plate_type_code
        )?.purposeOfUsingVehicleId || '283';

      bh.vehicle_search = {
        search_type: 'vehicle',
        filter: {
          yakeen_make: parseInt(bh.vehicleDetails.make), //need to change when reels integrated
          yakeen_model: parseInt(bh.vehicleDetails.model), //need to change when reels integrated
        },
      };
      bh.city_search = {
        search_type: 'cities',
        filter: {
          name_ar: (bh.vehicleDetails.city_ar || '').toString(),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.searchVehicle(bh, parentSpanInst);
      //appendnew_next_sd_y1tjTnHuzFzRnKs0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y1tjTnHuzFzRnKs0',
        spanInst,
        'sd_y1tjTnHuzFzRnKs0'
      );
    }
  }

  async searchVehicle(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'searchVehicle',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.vehicle_search
        );
      bh.vehicle = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.searchCity(bh, parentSpanInst);
      //appendnew_next_searchVehicle
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MUNhBOVMlAiywhbb',
        spanInst,
        'searchVehicle'
      );
    }
  }

  async searchCity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'searchCity',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.city_search
        );
      bh.city = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapMasterData(bh, parentSpanInst);
      //appendnew_next_searchCity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y9i5KPmBiAeTRFvB',
        spanInst,
        'searchCity'
      );
    }
  }

  async mapMasterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mapMasterData',
      parentSpanInst
    );
    try {
      if (bh.vehicle?.[0]) {
        let current_year = new Date().getFullYear();
        let make_year = bh.vehicleDetails['manufacturing_year'];
        let si_year = current_year - make_year || -1;
        if (si_year > 9) si_year = 10;

        bh.vehicleDetails['Min_SI'] = bh.vehicle[0][`${si_year}_Min_SI`];
        bh.vehicleDetails['Rec_SI'] = bh.vehicle[0][`${si_year}_Rec_SI`];
        bh.vehicleDetails['Max_SI'] = bh.vehicle[0][`${si_year}_Max_SI`];
        bh.vehicleDetails['make_en'] = bh.vehicle[0]['yakeen_make_en'];
        bh.vehicleDetails['model_en'] = bh.vehicle[0]['yakeen_model_en'];
        bh.vehicleDetails['make_ar'] = bh.vehicle[0]['yakeen_make_ar'];
        bh.vehicleDetails['model_ar'] = bh.vehicle[0]['yakeen_model_ar'];
        bh.vehicleDetails['body_type'] = bh.vehicle[0]['body_type'];
        bh.vehicleDetails['no_of_seats'] = bh.vehicle[0]['no_of_seats'];
        //eska make, model and body
        bh.vehicleDetails['eska_make'] = bh.vehicle[0]['eska_make'];
        bh.vehicleDetails['eska_model'] = bh.vehicle[0]['eska_model'];
        bh.vehicleDetails['eska_body'] = bh.vehicle[0]['eska_body'];
      }
      if (bh.city?.[0]) {
        bh.vehicleDetails['city_id'] = bh.city[0]['id'];
      }
      bh.local.vehicleDetails = bh.vehicleDetails;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_mapMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QwX9QoB8yt1qN5Sa',
        spanInst,
        'mapMasterData'
      );
    }
  }

  async sd_ziRwcGX5f42di3jV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ziRwcGX5f42di3jV',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance: flows =
        flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getnajmNcd(
          spanInst,
          bh.input.id_type,
          bh.input.vehicle_id_no,
          bh.policyHolderId
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getcarinfobycustom(
          spanInst,
          bh.input.vehicle_id_no,
          bh.input.model_year
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getRiskScore(
          spanInst,
          bh.input.owner_id,
          bh.input.vehicle_id_no
        )
      );

      bh.res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.vehicleUsageData(bh, parentSpanInst);
      //appendnew_next_sd_ziRwcGX5f42di3jV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ziRwcGX5f42di3jV',
        spanInst,
        'sd_ziRwcGX5f42di3jV'
      );
    }
  }

  async setResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse',
      parentSpanInst
    );
    try {
      bh.local.vehicleDetails = {
        error: bh.message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NG3wvozNIhOjYxbd',
        spanInst,
        'setResponse'
      );
    }
  }

  async sd_ZQGvo2Loobr9yzU2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZQGvo2Loobr9yzU2',
      parentSpanInst
    );
    try {
      let primise_arr = [];
      const flow_instance: flows = flows.getInstance();
      bh.input.vehList = bh.input.vehList || [];
      bh.input.vehList.forEach((VEHICLE) => {
        let vehicleId = VEHICLE.Sequence_Number
          ? VEHICLE.Sequence_Number
          : VEHICLE.Custom_Number;
        let id_type = VEHICLE.Sequence_Number ? 10 : 11;
        primise_arr.push(
          flow_instance.getVehicleDetails(
            spanInst,
            id_type,
            bh.input.ownerId,
            vehicleId,
            VEHICLE.Year_Made
          )
        );
      });
      //promise await
      bh.local.vehicleDetails = await Promise.allSettled(primise_arr);
      //promise process
      bh.local.vehicleDetails.forEach((x, i) => {
        if (x.value?.local?.vehicleDetails) {
          x.value.local.vehicleDetails.id_type = bh.input.vehList[i]
            .Sequence_Number
            ? 10
            : 11;
          x.value.local.vehicleDetails.id_no =
            bh.input.vehList[i].Sequence_Number ||
            bh.input.vehList[i].Custom_Number;
        }
      });
      bh.local.vehicleDetails = bh.local.vehicleDetails.map(
        (y) => y?.value?.local?.vehicleDetails
      );
      //successfull apis and bring only the result
      // bh.local.vehicleDetails = bh.local.vehicleDetails.filter(x => x.status == 'fulfilled' && x?.value?.local?.vehicleDetails).map(y => y?.value?.local?.vehicleDetails);
      //bring only vehicle which has eska make and model from product master
      // bh.local.vehicleDetails = bh.local.vehicleDetails.filter(x => x['eska_make'] && x['eska_model']);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZQGvo2Loobr9yzU2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZQGvo2Loobr9yzU2',
        spanInst,
        'sd_ZQGvo2Loobr9yzU2'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url =
        process.env.INT_MS_URL + 'strapi/vehicle-image/' + bh.input.eska_make;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X07aKaPTXEHVfwVs(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L39FH2ItDYPOKGo9',
        spanInst,
        'setUrl3'
      );
    }
  }

  async sd_X07aKaPTXEHVfwVs(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
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

      bh.response = responseMsg;
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_sd_X07aKaPTXEHVfwVs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X07aKaPTXEHVfwVs');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.payload = bh.response['payload'];
      bh.local.image_url = bh.payload?.image_url;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yXjKiEfScl8pQdiu',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_jlTbTEQagfRu7APS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jlTbTEQagfRu7APS',
      parentSpanInst
    );
    try {
      bh.url = process.env.INT_MS_URL + 'lezam/risk-score';
      bh.body = {
        personId: bh.input.ownerId,
        vehicleSequenceNumber: bh.input.seqNumber,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRiskScoreHttp(bh, parentSpanInst);
      //appendnew_next_sd_jlTbTEQagfRu7APS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jlTbTEQagfRu7APS',
        spanInst,
        'sd_jlTbTEQagfRu7APS'
      );
    }
  }

  async getRiskScoreHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 10000,
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

      bh.response = responseMsg;
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_getRiskScoreHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ui5Xqp4BMMlnTZLY');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response['payload'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KoNRB47KMv7sFPco',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_JhLiKc8zgqKBsGfB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JhLiKc8zgqKBsGfB',
      parentSpanInst
    );
    try {
      bh.local.result = {
        traffic_violations_score: 0,
        accidents_record_score: 0,
        demographic_information_score: 0,
        vehicle_information_score: 0,
        lezam_score: 0,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JhLiKc8zgqKBsGfB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JhLiKc8zgqKBsGfB',
        spanInst,
        'sd_JhLiKc8zgqKBsGfB'
      );
    }
  }

  async sd_5mt8fUdlFoItQPed(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5mt8fUdlFoItQPed',
      parentSpanInst
    );
    try {
      bh.local.result = { ...bh.error.response.body, ...bh.body };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5mt8fUdlFoItQPed
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5mt8fUdlFoItQPed',
        spanInst,
        'sd_5mt8fUdlFoItQPed'
      );
    }
  }

  async sd_Kaaf1HE1eG68d2Kb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Kaaf1HE1eG68d2Kb',
      parentSpanInst
    );
    try {
      let primise_arr = [];
      const flow_instance: flows = flows.getInstance();
      bh.input.vehList = bh.input.vehList || [];
      bh.input.vehList.forEach((VEHICLE) => {
        if (VEHICLE.validStatus) {
          let type_of_insurance = VEHICLE.Type_of_Insurance.split(' /')[0];
          VEHICLE['insurance_type'] = type_of_insurance;
          let vehicleId =
            type_of_insurance == 'New Vehicle'
              ? VEHICLE.Custom_Number
              : VEHICLE.Sequence_Number;
          let id_type = type_of_insurance == 'New Vehicle' ? 11 : 10;
          let ownerId =
            type_of_insurance == 'Ownership Transfer'
              ? VEHICLE.Old_Owner_ID
              : bh.input.ownerId;
          primise_arr.push(
            flow_instance.getVehicleDetails(
              spanInst,
              id_type,
              ownerId,
              vehicleId,
              VEHICLE.Production_Year
            )
          );
        }
      });
      //promise await
      bh.local.vehicleDetails = await Promise.allSettled(primise_arr);
      //promise process

      bh.local.vehicleDetails.forEach((x, i) => {
        if (x.value?.local?.vehicleDetails) {
          x.value.local.vehicleDetails.id_type =
            bh.input.vehList[i].insurance_type == 'New Vehicle' ? 11 : 10;
          x.value.local.vehicleDetails.id_no =
            bh.input.vehList[i].insurance_type == 'New Vehicle'
              ? bh.input.vehList[i].Custom_Number
              : bh.input.vehList[i].Sequence_Number;
        }
      });
      bh.local.vehicleDetails = bh.local.vehicleDetails.map(
        (y) => y?.value?.local?.vehicleDetails
      );
      //successfull apis and bring only the result
      // bh.local.vehicleDetails = bh.local.vehicleDetails.filter(x => x.status == 'fulfilled' && x?.value?.local?.vehicleDetails).map(y => y?.value?.local?.vehicleDetails);
      //bring only vehicle which has eska make and model from product master
      // bh.local.vehicleDetails = bh.local.vehicleDetails.filter(x => x['eska_make'] && x['eska_model']);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Kaaf1HE1eG68d2Kb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Kaaf1HE1eG68d2Kb',
        spanInst,
        'sd_Kaaf1HE1eG68d2Kb'
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
      (await this.sd_6aeKsyfL2hyll40Q(bh, parentSpanInst)) ||
      (await this.sd_PkZ2pVUJ2NEm9OEW(bh, parentSpanInst))
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
  async sd_6aeKsyfL2hyll40Q(bh, parentSpanInst) {
    const nodes = ['sd_Ui5Xqp4BMMlnTZLY'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_JhLiKc8zgqKBsGfB(bh, parentSpanInst);
      //appendnew_next_sd_6aeKsyfL2hyll40Q
      return true;
    }
    return false;
  }
  async sd_PkZ2pVUJ2NEm9OEW(bh, parentSpanInst) {
    const nodes = ['sd_AxJnB2RvWaO9jzbl', 'sd_qSdL1wytDXaAhbCU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5mt8fUdlFoItQPed(bh, parentSpanInst);
      //appendnew_next_sd_PkZ2pVUJ2NEm9OEW
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
