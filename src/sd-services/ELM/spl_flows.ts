// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4 from '../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH from '../utils/apigee_token_cache'; //_splitter_
//append_imports_end
export class spl_flows {
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
    this.serviceName = 'spl_flows';
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
      instance = new spl_flows(
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
    //appendnew_flow_spl_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: spl_flows');
    //appendnew_flow_spl_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: spl_flows');
    //appendnew_flow_spl_flows_HttpIn
  }
  //   service flows_spl_flows

  async getAddressById(parentSpanInst, id_no = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAddressById',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
      },
      local: {
        address: undefined,
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getAddressById
      return (
        // formatting output variables
        {
          input: {},
          local: {
            address: bh.local.address,
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DufoKcBS8QTWaNbE',
        spanInst,
        'getAddressById'
      );
    }
  }

  async getAddressByCr(parentSpanInst, crNumber = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAddressByCr',
      parentSpanInst
    );
    let bh: any = {
      input: {
        crNumber,
      },
      local: {
        address: undefined,
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_getAddressByCr
      return (
        // formatting output variables
        {
          input: {},
          local: {
            address: bh.local.address,
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TJwySGIKguLqIwuU',
        spanInst,
        'getAddressByCr'
      );
    }
  }
  //appendnew_flow_spl_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v1/art/dcp/address?Id=${bh.input.id_no}&language=E`;

      bh.target = process.env.TARGET_OCE;

      bh.api_key = 'dcp-address';
      bh.identifier = `${bh.input.id_no}`;
      bh.apiStartTime = Date.now();
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VdhT6MhMBCFcqvsR',
        spanInst,
        'setUrl0'
      );
    }
  }

  async apigeeToken0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAddrId(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c1N7ah3C6PahG6Z2',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async getAddrId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAddrId', parentSpanInst);
    try {
      const axios = require('axios');
      await axios
        .get(bh.url, { headers: { Authorization: `Bearer ${bh.token}` } })
        .then((response) => {
          bh.response = response.data;
          if (bh.response.success == false) {
            bh.response = {
              error: bh.response.statusdescription,
            };
            bh.local.status = false;
          }
        })
        .catch((error) => {
          console.error('Error:', error?.response?.data || error.message);
          if (error?.response?.data) {
            bh.response = error?.response?.data;
            if (bh.response['ErrorResponse']?.['ErrorCode'])
              bh.yaken_error_code = bh.response['ErrorResponse']?.['ErrorCode'];
          } else if (error.message) {
            bh.response = {
              error_code: error.message,
            };
          } else {
            bh.response = {
              error_code: 'FETCH_FAILED',
            };
          }
          bh.local.status = false;
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dNcLB4GEbwFiUWtA(bh, parentSpanInst);
      //appendnew_next_getAddrId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hE2VoUyHLuBHlYYU',
        spanInst,
        'getAddrId'
      );
    }
  }

  async sd_dNcLB4GEbwFiUWtA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dNcLB4GEbwFiUWtA',
      parentSpanInst
    );
    try {
      bh.response = bh.response?.['payload'] || bh.response;

      bh.address = bh.response?.Addresses?.[0];
      if (bh.address) {
        bh.local.address = {
          address_line_1: bh.address['Address1'],
          adddress_line_2: bh.address['Address2'],
          lat_long: bh.address['ObjLatLng'],
          building_number: bh.address['BuildingNumber'],
          short_address: bh.address['ShortAddress'],
          street: bh.address['Street'],
          district: bh.address['District'],
          city: bh.address['City'],
          postal_code: bh.address['PostCode'],
          postal_code_addl_number: bh.address['AdditionalNumber'],
          region_name_en: bh.address['RegionName'],
          polygon_string: bh.address['PolygonString'],
          is_primary_address: bh.address['IsPrimaryAddress'],
          unit_number: bh.address['UnitNumber'],
          latitude: bh.address['Latitude'],
          longitude: bh.address['Longitude'],
          city_id: bh.address['CityID'],
          region_id: bh.address['RegionID'],
          restriction: bh.address['Restriction'],
          pk_address_id: bh.address['PKAddressID'],
          district_id: bh.address['DistrictID'],
          title_ar: bh.address['Title_L2'],
          region_name_ar: bh.address['RegionName_L2'],
          city_ar: bh.address['City_L2'],
          street_ar: bh.address['Street_L2'],
          district_ar: bh.address['District_L2'],
        };
      } else if (!bh.response) {
        bh.local.address = {
          error_code: 'FETCH_FAILED',
        };
        bh.local.status = false;
      } else {
        bh.local.address = bh.response;
        bh.local.status = false;
        bh.local.statusCode = 400;
      }
      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jyh5lo0JOX1Tq8rK(bh, parentSpanInst);
      //appendnew_next_sd_dNcLB4GEbwFiUWtA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dNcLB4GEbwFiUWtA',
        spanInst,
        'sd_dNcLB4GEbwFiUWtA'
      );
    }
  }

  async sd_Jyh5lo0JOX1Tq8rK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jyh5lo0JOX1Tq8rK',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance: SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows =
        SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance.logApiAudit(
          spanInst,
          bh.api_key,
          bh.identifier,
          bh.request,
          bh.local.address,
          bh.apiStartTime,
          bh.apiEndTime,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Jyh5lo0JOX1Tq8rK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jyh5lo0JOX1Tq8rK',
        spanInst,
        'sd_Jyh5lo0JOX1Tq8rK'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v1/art/dcp/address/addressbycr?crNumber=${bh.input.crNumber}&language=E`;

      bh.target = process.env.TARGET_OCE;

      bh.api_key = 'dcp-address-crno';
      bh.identifier = `${bh.input.crNumber}`;
      bh.apiStartTime = Date.now();
      bh.request = {
        url: bh.url,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken1(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0RurLKkusqqIba3r',
        spanInst,
        'setUrl1'
      );
    }
  }

  async apigeeToken1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GnvijhlGHdrmIyG8(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AQCMoV71xzLiIToa',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async sd_GnvijhlGHdrmIyG8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GnvijhlGHdrmIyG8',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      await axios
        .get(bh.url, { headers: { Authorization: `Bearer ${bh.token}` } })
        .then((response) => {
          bh.response = response.data;
        })
        .catch((error) => {
          console.error('Error:', error.message);
          bh.local.address = {
            error_code: 'FETCH_FAILED',
          };
          bh.local.status = false;
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_sd_GnvijhlGHdrmIyG8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GnvijhlGHdrmIyG8',
        spanInst,
        'sd_GnvijhlGHdrmIyG8'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = bh.response?.['payload'] || bh.response;
      if (
        bh.response?.KSABusinesses?.length &&
        bh.response?.statusdescription == 'SUCCESS'
      ) {
        bh.address = bh.response.KSABusinesses[0];
        bh.local.address = {
          title_en: bh.address['Title'],
          address_line_1: bh.address['Address1'],
          adddress_line_2: bh.address['Address2'],
          lat_long: bh.address['ObjLatLng'],
          building_number: bh.address['BuildingNumber'],
          street: bh.address['Street'],
          district: bh.address['District'],
          city: bh.address['City'],
          postal_code: bh.address['PostCode'],
          postal_code_addl_number: bh.address['AdditionalNumber'],
          region_name_en: bh.address['RegionName'],
          polygon_string: bh.address['PolygonString'],
          is_primary_address: bh.address['IsPrimaryAddress'],
          unit_number: bh.address['UnitNumber'],
          latitude: bh.address['Latitude'],
          longitude: bh.address['Longitude'],
          city_id: bh.address['CityId'],
          region_id: bh.address['RegionId'],
          restriction: bh.address['Restriction'],
          pk_address_id: bh.address['PKAddressID'],
          district_id: bh.address['DistrictID'],
          title_ar: bh.address['Title_L2'],
          region_name_ar: bh.address['RegionName_L2'],
          city_ar: bh.address['City_L2'],
          street_ar: bh.address['Street_L2'],
          district_ar: bh.address['District_L2'],
          company_name: bh.address['CompanyName_L2'],
          governorate_id: bh.address['GovernorateID'],
          governorate: bh.address['Governorate'],
          governorate_ar: bh.address['Governorate'],
        };
        bh.local.status = true;
      } else {
        bh.local.address = {
          error_code: bh.response?.statusdescription,
        };
        bh.local.status = false;
      }

      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jyh5lo0JOX1Tq8rK(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kC2qX1E4DiRMQcDx',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setCatchResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCatchResponse1',
      parentSpanInst
    );
    try {
      let data;
      if (bh.error['response'] && bh.error['response']['body']) {
        if (isJSON(bh.error['response']['body'])) {
          data = JSON.parse(bh.error['response']['body']);
        } else {
          data = bh.error['response']['body'];
        }
        bh.local.statusCode = bh.error['response']['statusCode'] || 400;

        if (bh.error['response']['statusCode'] == 200) {
          bh.local.status = true;
          bh.response = {};
          bh.response['payload'] = data;
        } else {
          bh.local.address = {
            error_code: 'FETCH_FAILED',
          };
          bh.local.status = false;
        }
      } else {
        bh.local.address = {
          error_code: 'FETCH_FAILED',
        };
        bh.local.status = false;
      }

      function isJSON(str) {
        try {
          JSON.stringify(JSON.parse(str));
          return true;
        } catch (e) {
          return false;
        }
      }

      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jyh5lo0JOX1Tq8rK(bh, parentSpanInst);
      //appendnew_next_setCatchResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fzQCFtwsGdqjhqNV',
        spanInst,
        'setCatchResponse1'
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
      (await this.sd_QV3LvQhdYF7oqPlq(bh, parentSpanInst))
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
  async sd_QV3LvQhdYF7oqPlq(bh, parentSpanInst) {
    const nodes = ['sd_a0DJsZZFwUfAj8qV'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setCatchResponse1(bh, parentSpanInst);
      //appendnew_next_sd_QV3LvQhdYF7oqPlq
      return true;
    }
    return false;
  }
  //appendnew_flow_spl_flows_Catch
}
