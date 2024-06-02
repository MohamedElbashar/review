// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhS from '../utils/message_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS from './flows'; //_splitter_
//append_imports_end
export class customer_apis {
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
    this.serviceName = 'customer_apis';
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
      instance = new customer_apis(
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
    //appendnew_flow_customer_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: customer_apis');
    //appendnew_flow_customer_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: customer_apis');

    this.app['post'](
      `${this.serviceBasePath}/customer/details`,
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
          bh = await this.sd_RjmsKl5gAnN7vz2U(bh, parentSpanInst);
          //appendnew_next_sd_mUFdXitXgHs86DRH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mUFdXitXgHs86DRH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_customer_apis_HttpIn
  }
  //   service flows_customer_apis

  async customerDetails(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'customerDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        customer_info: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RjmsKl5gAnN7vz2U(bh, parentSpanInst);
      //appendnew_next_customerDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            customer_info: bh.local.customer_info,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z6dFzdHPTOjB0ziM',
        spanInst,
        'customerDetails'
      );
    }
  }
  //appendnew_flow_customer_apis_start

  async sd_RjmsKl5gAnN7vz2U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RjmsKl5gAnN7vz2U',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.id_type,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gB2CxkdgH9xc6xUv(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.id_type,
          2,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DY5WRvaL3FVEdE9F(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.id_type,
          4,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vxvlLPu8JRyuuVOI(bh, parentSpanInst);
      } else {
        bh = await this.getErrorMessage(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LKKfQmm9kAN4BRUX',
        spanInst,
        'sd_RjmsKl5gAnN7vz2U'
      );
    }
  }

  async sd_gB2CxkdgH9xc6xUv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gB2CxkdgH9xc6xUv',
      parentSpanInst
    );
    try {
      bh.mobile_validation_require =
        bh.input.body?.source == 'b2b'
          ? false
          : bh.input.body?.phone_no
          ? true
          : false;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GMdiRs4dzCYja6Ex(bh, parentSpanInst);
      //appendnew_next_sd_gB2CxkdgH9xc6xUv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gB2CxkdgH9xc6xUv',
        spanInst,
        'sd_gB2CxkdgH9xc6xUv'
      );
    }
  }

  async sd_GMdiRs4dzCYja6Ex(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GMdiRs4dzCYja6Ex',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.mobile_validation_require,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.validatePhone0(bh, parentSpanInst);
      } else {
        bh = await this.sd_uMnM7vj8FDi7J1ZI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GMdiRs4dzCYja6Ex',
        spanInst,
        'sd_GMdiRs4dzCYja6Ex'
      );
    }
  }

  async validatePhone0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validatePhone0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance: SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows =
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.validatePhone(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.phone_no
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2Hu9BRGQG33HfP5j(bh, parentSpanInst);
      //appendnew_next_validatePhone0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d1200hpzo71LDjlg',
        spanInst,
        'validatePhone0'
      );
    }
  }

  async sd_2Hu9BRGQG33HfP5j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Hu9BRGQG33HfP5j',
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
        bh = await this.sd_uMnM7vj8FDi7J1ZI(bh, parentSpanInst);
      } else {
        bh = await this.sd_PqeDhiFG70T8u4YO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Hu9BRGQG33HfP5j',
        spanInst,
        'sd_2Hu9BRGQG33HfP5j'
      );
    }
  }

  async sd_uMnM7vj8FDi7J1ZI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uMnM7vj8FDi7J1ZI',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance: SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows =
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.getCitizenInfo(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.dob
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.getAddressById(
          spanInst,
          bh.input.body.id_no
        )
      );

      bh.res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapCustDetails0(bh, parentSpanInst);
      //appendnew_next_sd_uMnM7vj8FDi7J1ZI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uMnM7vj8FDi7J1ZI',
        spanInst,
        'sd_uMnM7vj8FDi7J1ZI'
      );
    }
  }

  async mapCustDetails0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mapCustDetails0',
      parentSpanInst
    );
    try {
      if (
        bh.res_arr[0].local &&
        bh.res_arr[0].local.customer_details &&
        bh.res_arr[0].local.customer_details.error
      ) {
        bh.resCode = 400;
        bh.customerDetails = bh.res_arr[0].local.customer_details;
      } else if (
        bh.phone_no_exists &&
        bh.res_arr[1].local &&
        bh.res_arr[1].local.address_details &&
        bh.res_arr[1].local.address_details.error
      ) {
        bh.resCode = 400;
        bh.customerDetails = bh.res_arr[1].local.address_details;
      } else {
        bh.customerDetails = Object.assign(
          {},
          bh.res_arr[0].local,
          bh.res_arr[1].local
        );
        bh.resCode = 200;
      }

      switch (bh.resCode) {
        case 400:
          if (
            bh.res_arr[0].local.customer_details.error ==
            'The IqamaNumber format is not valid'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'INVALID_IQAMA_FORMAT';
          else if (
            bh.res_arr[0].local.customer_details.error ==
            'Date Of Birth does not match NIC records'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'DOB_VALIDATION_ERROR';
          else if (
            bh.res_arr[0].local.customer_details.error ==
            'The National ID format is not valid'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'INVALID_NID_FORMAT';

          break;
        case 200:
          break;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_afq9tRmbNBRVN3fF(bh, parentSpanInst);
      //appendnew_next_mapCustDetails0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BEepEgQnYmZqCr1m',
        spanInst,
        'mapCustDetails0'
      );
    }
  }

  async sd_afq9tRmbNBRVN3fF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_afq9tRmbNBRVN3fF',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.resCode, 200, undefined, undefined)
      ) {
        bh = await this.setSearchBody(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](bh.resCode, 400, undefined, undefined)
      ) {
        bh = await this.sd_ij9xB4LDQd9G5cae(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_afq9tRmbNBRVN3fF',
        spanInst,
        'sd_afq9tRmbNBRVN3fF'
      );
    }
  }

  async setSearchBody(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setSearchBody',
      parentSpanInst
    );
    try {
      bh.nationality_search = {
        search_type: 'nationality',
        filter: {
          elm_code: (
            bh.customerDetails.customer_details.nationality || ''
          ).toString(),
        },
      };
      bh.cities_body = {
        search_type: 'cities',
        filter: {
          spl_id: (bh.customerDetails.address_details.city_id || '').toString(),
        },
      };
      bh.postal_body = {
        search_type: 'postal',
        filter: {
          postal_code: (
            bh.customerDetails.address_details.postal_code || ''
          ).toString(),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eerkMC0plTXDStZa(bh, parentSpanInst);
      //appendnew_next_setSearchBody
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4I3ILJ2B0F54g5U0',
        spanInst,
        'setSearchBody'
      );
    }
  }

  async sd_eerkMC0plTXDStZa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eerkMC0plTXDStZa',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.nationality_search
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.cities_body
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.postal_body
        )
      );

      bh.serach_res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapCodes(bh, parentSpanInst);
      //appendnew_next_sd_eerkMC0plTXDStZa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eerkMC0plTXDStZa',
        spanInst,
        'sd_eerkMC0plTXDStZa'
      );
    }
  }

  async mapCodes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mapCodes', parentSpanInst);
    try {
      bh.customerDetails.customer_details.nationality =
        bh.serach_res_arr[0]?.local?.result?.[0]?.eska_code || 'SA';
      bh.customerDetails.address_details.city_id =
        bh.serach_res_arr[1]?.local?.result?.length > 0
          ? bh.serach_res_arr[1].local.result[0].id
          : '1';
      bh.customerDetails.address_details.postal_city =
        bh.serach_res_arr[2]?.local?.result?.length > 0
          ? bh.serach_res_arr[2].local.result[0].PostalCity
          : 'Riyadh';
      bh.customerDetails.address_details.postal_region =
        bh.serach_res_arr[2]?.local?.result?.length > 0
          ? bh.serach_res_arr[2].local.result[0].PostalRegion
          : 'Riyadh';

      bh.local.customer_info = bh.customerDetails;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ryd0a9MNorktHeTF(bh, parentSpanInst);
      //appendnew_next_mapCodes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MmhfW6rivbGUAVS3',
        spanInst,
        'mapCodes'
      );
    }
  }

  async sd_ryd0a9MNorktHeTF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ryd0a9MNorktHeTF',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.web.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EaTbEEPFFCP8BVvB(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ryd0a9MNorktHeTF',
        spanInst,
        'sd_ryd0a9MNorktHeTF'
      );
    }
  }

  async sd_EaTbEEPFFCP8BVvB(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.customerDetails);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EaTbEEPFFCP8BVvB');
    }
  }

  async sd_ij9xB4LDQd9G5cae(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ij9xB4LDQd9G5cae',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.web.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zOY0RhYCsEvnOFyL(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ij9xB4LDQd9G5cae',
        spanInst,
        'sd_ij9xB4LDQd9G5cae'
      );
    }
  }

  async sd_zOY0RhYCsEvnOFyL(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.resCode).send(bh.customerDetails);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zOY0RhYCsEvnOFyL');
    }
  }

  async sd_PqeDhiFG70T8u4YO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PqeDhiFG70T8u4YO',
      parentSpanInst
    );
    try {
      bh.response = {
        error_code: 'MOBILE_VALIDATION_FAILED',
        error_type: 'MOBILE_VALIDATION_ERROR',
      };

      bh.local.customer_info = bh.response;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hmKcauJ5dwsuhg5r(bh, parentSpanInst);
      //appendnew_next_sd_PqeDhiFG70T8u4YO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PqeDhiFG70T8u4YO',
        spanInst,
        'sd_PqeDhiFG70T8u4YO'
      );
    }
  }

  async sd_hmKcauJ5dwsuhg5r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hmKcauJ5dwsuhg5r',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.web.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Vika5ZSJF4kYqVPr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hmKcauJ5dwsuhg5r',
        spanInst,
        'sd_hmKcauJ5dwsuhg5r'
      );
    }
  }

  async sd_Vika5ZSJF4kYqVPr(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vika5ZSJF4kYqVPr');
    }
  }

  async sd_DY5WRvaL3FVEdE9F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DY5WRvaL3FVEdE9F',
      parentSpanInst
    );
    try {
      bh.mobile_validation_require =
        bh.input.body?.source == 'b2b'
          ? false
          : bh.input.body?.phone_no
          ? true
          : false;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yuppSAdEloAUBvSz(bh, parentSpanInst);
      //appendnew_next_sd_DY5WRvaL3FVEdE9F
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DY5WRvaL3FVEdE9F',
        spanInst,
        'sd_DY5WRvaL3FVEdE9F'
      );
    }
  }

  async sd_yuppSAdEloAUBvSz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yuppSAdEloAUBvSz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.mobile_validation_require,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.validatePhone1(bh, parentSpanInst);
      } else {
        bh = await this.sd_992JxPoAw38lWtRw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yuppSAdEloAUBvSz',
        spanInst,
        'sd_yuppSAdEloAUBvSz'
      );
    }
  }

  async validatePhone1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validatePhone1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance: SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows =
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.validatePhone(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.phone_no
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S61Nk1sHmZA44kIa(bh, parentSpanInst);
      //appendnew_next_validatePhone1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wCIlMjYkl0ur7Izu',
        spanInst,
        'validatePhone1'
      );
    }
  }

  async sd_S61Nk1sHmZA44kIa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S61Nk1sHmZA44kIa',
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
        bh = await this.sd_992JxPoAw38lWtRw(bh, parentSpanInst);
      } else {
        bh = await this.sd_PqeDhiFG70T8u4YO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S61Nk1sHmZA44kIa',
        spanInst,
        'sd_S61Nk1sHmZA44kIa'
      );
    }
  }

  async sd_992JxPoAw38lWtRw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_992JxPoAw38lWtRw',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance: SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows =
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.getalieninfobyiqamaanddob(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.dob
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.getAddressById(
          spanInst,
          bh.input.body.id_no
        )
      );

      bh.res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapCustDetails1(bh, parentSpanInst);
      //appendnew_next_sd_992JxPoAw38lWtRw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_992JxPoAw38lWtRw',
        spanInst,
        'sd_992JxPoAw38lWtRw'
      );
    }
  }

  async mapCustDetails1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mapCustDetails1',
      parentSpanInst
    );
    try {
      if (
        bh.res_arr[0].local &&
        bh.res_arr[0].local.customer_details &&
        bh.res_arr[0].local.customer_details.error
      ) {
        bh.resCode = 400;
        bh.customerDetails = bh.res_arr[0].local.customer_details;
      } else if (
        bh.phone_no_exists &&
        bh.res_arr[1].local &&
        bh.res_arr[1].local.address_details &&
        bh.res_arr[1].local.address_details.error
      ) {
        bh.resCode = 400;
        bh.customerDetails = bh.res_arr[1].local.address_details;
      } else {
        bh.customerDetails = Object.assign(
          {},
          bh.res_arr[0].local,
          bh.res_arr[1].local
        );
        bh.resCode = 200;
      }

      switch (bh.resCode) {
        case 400:
          if (
            bh.res_arr[0].local.customer_details.error ==
            'The IqamaNumber format is not valid'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'INVALID_IQAMA_FORMAT';
          else if (
            bh.res_arr[0].local.customer_details.error ==
            'Date Of Birth does not match NIC records'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'DOB_VALIDATION_ERROR';
          else if (
            bh.res_arr[0].local.customer_details.error ==
            'The National ID format is not valid'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'INVALID_NID_FORMAT';
          else if (
            bh.res_arr[0].local.customer_details.error ==
            '(AlienInfoByIqama) ExpDate does not match NIC records'
          )
            bh.res_arr[0].local.customer_details['error_type'] =
              'DOB_VALIDATION_ERROR';
          break;
        case 200:
          break;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_afq9tRmbNBRVN3fF(bh, parentSpanInst);
      //appendnew_next_mapCustDetails1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wKNiYhE2OuybXuT1',
        spanInst,
        'mapCustDetails1'
      );
    }
  }

  async sd_vxvlLPu8JRyuuVOI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vxvlLPu8JRyuuVOI',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance: SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows =
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruS.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_FzxCcoRF8CwVNruSInstance.getAddressByCr(
          spanInst,
          bh.input.body.id_no
        )
      );

      bh.res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapCompanyDetails0(bh, parentSpanInst);
      //appendnew_next_sd_vxvlLPu8JRyuuVOI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vxvlLPu8JRyuuVOI',
        spanInst,
        'sd_vxvlLPu8JRyuuVOI'
      );
    }
  }

  async mapCompanyDetails0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mapCompanyDetails0',
      parentSpanInst
    );
    try {
      bh.customerDetails = Object.assign(
        {},
        bh.res_arr?.[0]?.local,
        bh.res_arr?.[1]?.local
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setSearchBody1(bh, parentSpanInst);
      //appendnew_next_mapCompanyDetails0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4BuHoeN85fEmS2qu',
        spanInst,
        'mapCompanyDetails0'
      );
    }
  }

  async setSearchBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setSearchBody1',
      parentSpanInst
    );
    try {
      bh.cities_body = {
        search_type: 'cities',
        filter: {
          spl_id: (
            bh.customerDetails?.address_details?.city_id || ''
          ).toString(),
        },
      };
      bh.postal_body = {
        search_type: 'postal',
        filter: {
          postal_code: (
            bh.customerDetails?.address_details?.postal_code || ''
          ).toString(),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_whwSMVuvC5pTeK0m(bh, parentSpanInst);
      //appendnew_next_setSearchBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SN5w5lBBV15hLiZD',
        spanInst,
        'setSearchBody1'
      );
    }
  }

  async sd_whwSMVuvC5pTeK0m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_whwSMVuvC5pTeK0m',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.cities_body
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.postal_body
        )
      );

      bh.serach_res_arr = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapCodes1(bh, parentSpanInst);
      //appendnew_next_sd_whwSMVuvC5pTeK0m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_whwSMVuvC5pTeK0m',
        spanInst,
        'sd_whwSMVuvC5pTeK0m'
      );
    }
  }

  async mapCodes1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mapCodes1', parentSpanInst);
    try {
      if (bh.customerDetails?.address_details?.error_code) {
        bh.customerDetails = {
          error_code: bh.customerDetails.address_details.error_code,
          error_type: 'ENTITY_UNREGISTERED',
        };
      } else {
        bh.customerDetails.address_details.city_id =
          bh.serach_res_arr[0]?.local?.result?.length > 0
            ? bh.serach_res_arr[0].local.result[0].id
            : '1';
        bh.customerDetails.address_details.postal_city =
          bh.serach_res_arr[1]?.local?.result?.length > 0
            ? bh.serach_res_arr[1].local.result[0].PostalCity
            : 'Riyadh';
        bh.customerDetails.address_details.postal_region =
          bh.serach_res_arr[1]?.local?.result?.length > 0
            ? bh.serach_res_arr[1].local.result[0].PostalRegion
            : 'Riyadh';
      }
      bh.local.customer_info = bh.customerDetails;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ryd0a9MNorktHeTF(bh, parentSpanInst);
      //appendnew_next_mapCodes1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4xhVIMZKMQFRTANZ',
        spanInst,
        'mapCodes1'
      );
    }
  }

  async getErrorMessage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getErrorMessage',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhSInstance: SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhS.message_cache =
        SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhS.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_z1Q6t1Hx6ScMxNhSInstance.getMessage(
          spanInst,
          'HTTP_400',
          bh.web.req.headers['lng']
        );
      bh.message = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse(bh, parentSpanInst);
      //appendnew_next_getErrorMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SWQsVAM8fogGxVz7',
        spanInst,
        'getErrorMessage'
      );
    }
  }

  async setResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse',
      parentSpanInst
    );
    try {
      bh.customerDetails = {
        error: bh.message,
      };

      bh.local.customer_info = bh.customerDetails;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ryd0a9MNorktHeTF(bh, parentSpanInst);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H34kwLi4vb4ZDEGS',
        spanInst,
        'setResponse'
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
  //appendnew_flow_customer_apis_Catch
}
