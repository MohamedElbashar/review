// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4 from '../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH from '../utils/apigee_token_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p from '../utils/message_cache'; //_splitter_
//append_imports_end
export class yakeen_flows {
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
    this.serviceName = 'yakeen_flows';
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
      instance = new yakeen_flows(
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
    //appendnew_flow_yakeen_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: yakeen_flows');
    //appendnew_flow_yakeen_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: yakeen_flows');
    //appendnew_flow_yakeen_flows_HttpIn
  }
  //   service flows_yakeen_flows

  async getCitizenInfo(
    parentSpanInst,
    nationalId = '',
    dateOfBirth: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getCitizenInfo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        nationalId,
        dateOfBirth,
      },
      local: {
        result: undefined,
        status: false,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getCitizenInfo
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status: bh.local.status,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kRz1jGpalEBPCnT3',
        spanInst,
        'getCitizenInfo'
      );
    }
  }

  async getalieninfobyiqamaanddob(
    parentSpanInst,
    iqamaNumber: any = undefined,
    dateOfBirth: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getalieninfobyiqamaanddob',
      parentSpanInst
    );
    let bh: any = {
      input: {
        iqamaNumber,
        dateOfBirth,
      },
      local: {
        result: undefined,
        status: false,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_getalieninfobyiqamaanddob
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status: bh.local.status,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s2tWswMcxHfq77CL',
        spanInst,
        'getalieninfobyiqamaanddob'
      );
    }
  }

  async getcarinfobysequence(
    parentSpanInst,
    sequenceNumber = '',
    ownerId = '',
    locale_code: any = undefined,
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
        locale_code,
      },
      local: {
        result: undefined,
        status: false,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_getcarinfobysequence
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status: bh.local.status,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P9iyChzo51rgVQDP',
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
        status: false,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_getcarinfobycustom
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status: bh.local.status,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AeIE96Br3HfJLKmX',
        spanInst,
        'getcarinfobycustom'
      );
    }
  }

  async validateMobile(
    parentSpanInst,
    nationalId = '',
    mobileNumber = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validateMobile',
      parentSpanInst
    );
    let bh: any = {
      input: {
        nationalId,
        mobileNumber,
      },
      local: {
        status: false,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_validateMobile
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8PNDeuO8BUumfUv9',
        spanInst,
        'validateMobile'
      );
    }
  }

  async getAlienInfoByIqamaExpiryDate(
    parentSpanInst,
    iqamaNumber: any = undefined,
    expiryDate: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getAlienInfoByIqamaExpiryDate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        iqamaNumber,
        expiryDate,
      },
      local: {
        yakeen_result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl5(bh, parentSpanInst);
      //appendnew_next_getAlienInfoByIqamaExpiryDate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            yakeen_result: bh.local.yakeen_result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Csz2Uhlf2IC1Zpiy',
        spanInst,
        'getAlienInfoByIqamaExpiryDate'
      );
    }
  }
  //appendnew_flow_yakeen_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v2/art/yakeen/getcitizeninfo?nationalId=${bh.input.nationalId}&dateOfBirth=${bh.input.dateOfBirth}`;

      bh.target = process.env.TARGET_OCE;
      bh.api_key = 'yakeen-citizeninfo-nid';
      bh.identifier = `${bh.input.nationalId}`;
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
        'sd_dGnWLCIodkyY98su',
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
      bh = await this.yakeenGetcitizeninfo(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7EvyrDNqbNCaoJuy',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async yakeenGetcitizeninfo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenGetcitizeninfo',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      await axios
        .get(bh.url, { headers: { Authorization: `Bearer ${bh.token}` } })
        .then((response) => {
          bh.data = response.data;
        })
        .catch((error) => {
          console.error('Error:', error?.response?.data || error.message);
          if (error?.response?.data) {
            bh.data = error?.response?.data;
            if (bh.data['ErrorResponse']?.['ErrorCode'])
              bh.yaken_error_code = bh.data['ErrorResponse']?.['ErrorCode'];
          } else if (error.message) {
            bh.data = {
              error_code: error.message,
            };
          } else {
            bh.data = {
              error_code: 'FETCH_FAILED',
            };
          }
          bh.local.status = false;
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getResponse0(bh, parentSpanInst);
      //appendnew_next_yakeenGetcitizeninfo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7Mo5V6ZzO3aT38iu',
        spanInst,
        'yakeenGetcitizeninfo'
      );
    }
  }

  async getResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getResponse0',
      parentSpanInst
    );
    try {
      bh.payload = bh.data?.['payload'] || bh.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k8ygRHitYUFnuk9D(bh, parentSpanInst);
      //appendnew_next_getResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EAIGjEgWJCiBGcWD',
        spanInst,
        'getResponse0'
      );
    }
  }

  async sd_k8ygRHitYUFnuk9D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k8ygRHitYUFnuk9D',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.yaken_error_code,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setErrorCode(bh, parentSpanInst);
      } else {
        bh = await this.sd_RArhkOlv3o99lKGc(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k8ygRHitYUFnuk9D',
        spanInst,
        'sd_k8ygRHitYUFnuk9D'
      );
    }
  }

  async setErrorCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setErrorCode',
      parentSpanInst
    );
    try {
      switch (bh.yaken_error_code) {
        case '2':
          bh.message_code = 'ERR_YNCI_002';
          break;
        case '5':
          bh.message_code = 'ERR_YNCI_004';
          break;
        case '7':
          bh.message_code = 'ERR_YKVI_003';
          break;
        case '13':
          bh.message_code = 'ERR_YKVI_001';
          break;
        case '16':
          bh.message_code = 'ERR_YNCI_003';
          break;
        case '22':
          bh.message_code = 'ERR_YKVI_002';
          break;
        case '34':
        case '20':
          bh.message_code = 'ERR_YNCI_006';
          break;
        case '30':
          bh.message_code = 'ERR_YNCI_007';
          break;
        default:
          bh.message_code = '';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage0(bh, parentSpanInst);
      //appendnew_next_setErrorCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ikJiRtg5UhuG9PhV',
        spanInst,
        'setErrorCode'
      );
    }
  }

  async getMessage0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance: SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache =
        SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance.getMessage(
          spanInst,
          bh.message_code,
          bh.input.locale_code
        );
      bh.errorMessage = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zGPeLRRfEnyiKLn8(bh, parentSpanInst);
      //appendnew_next_getMessage0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_umiZeHvaP5Xt5cri',
        spanInst,
        'getMessage0'
      );
    }
  }

  async sd_zGPeLRRfEnyiKLn8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zGPeLRRfEnyiKLn8',
      parentSpanInst
    );
    try {
      bh.local.result = {
        error:
          bh.errorMessage == ''
            ? bh.data?.ErrorResponse?.ErrorMessage
            : bh.errorMessage,
      };
      bh.local.statusCode = bh.local.statusCode || 400;
      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k2Bec9ibVM9vVtcC(bh, parentSpanInst);
      //appendnew_next_sd_zGPeLRRfEnyiKLn8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zGPeLRRfEnyiKLn8',
        spanInst,
        'sd_zGPeLRRfEnyiKLn8'
      );
    }
  }

  async sd_k2Bec9ibVM9vVtcC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k2Bec9ibVM9vVtcC',
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
          bh.local.result,
          bh.apiStartTime,
          bh.apiEndTime,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_k2Bec9ibVM9vVtcC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k2Bec9ibVM9vVtcC',
        spanInst,
        'sd_k2Bec9ibVM9vVtcC'
      );
    }
  }

  async sd_RArhkOlv3o99lKGc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RArhkOlv3o99lKGc',
      parentSpanInst
    );
    try {
      bh.inputKey = '';
      if (bh.input?.nationalId) {
        bh.inputKey = 'nationalId';
      } else if (bh.input?.iqamaNumber) {
        bh.inputKey = 'iqamaNumber';
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HxhwycwdRPLoGUIo(bh, parentSpanInst);
      //appendnew_next_sd_RArhkOlv3o99lKGc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RArhkOlv3o99lKGc',
        spanInst,
        'sd_RArhkOlv3o99lKGc'
      );
    }
  }

  async sd_HxhwycwdRPLoGUIo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HxhwycwdRPLoGUIo',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.inputKey,
          'nationalId',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WFCmezJVpevNCoks(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.inputKey,
          'iqamaNumber',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_m1QhVpUTd0FBFIa2(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HxhwycwdRPLoGUIo',
        spanInst,
        'sd_HxhwycwdRPLoGUIo'
      );
    }
  }

  async sd_WFCmezJVpevNCoks(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WFCmezJVpevNCoks',
      parentSpanInst
    );
    try {
      // bh.marital_search = {
      //     "search_type": "marital_status",
      // }

      bh.search_type = 'marital_status';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callMasterData(bh, parentSpanInst);
      //appendnew_next_sd_WFCmezJVpevNCoks
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WFCmezJVpevNCoks',
        spanInst,
        'sd_WFCmezJVpevNCoks'
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
          bh.search_type,
          undefined
        );
      bh.res_marital_status = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse7(bh, parentSpanInst);
      //appendnew_next_callMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AnRYdJGn7P5hSh5a',
        spanInst,
        'callMasterData'
      );
    }
  }

  async setResponse7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse7',
      parentSpanInst
    );
    try {
      bh.marital_status_resp = bh.res_marital_status;
      bh.payload_iqama = bh.payload;
      let socialStatusDesc =
        bh.payload_iqama.getUserInfoResponse?.socialStatusDesc;
      bh.payload_iqama.getUserInfoResponse.socialStatusCode =
        bh.marital_status_resp.find((x) => x.name_ar == socialStatusDesc)
          ?.master_id || '6';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_setResponse7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tVl2KciVPFKC9szV',
        spanInst,
        'setResponse7'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      const hdate = require('hijri-date');
      const HijriDate = hdate.default;

      if (bh.payload_iqama.getUserInfoResponse) {
        let dob = '';

        if (bh.payload_iqama.getUserInfoResponse.dateOfBirthH) {
          const custDate = new HijriDate(
            bh.payload_iqama.getUserInfoResponse.dateOfBirthH,
            'dd-mm-yyyy'
          );
          const dayGreg = custDate.toGregorian();
          const day = String(dayGreg.getDate()).padStart(2, '0');
          const month = String(dayGreg.getMonth() + 1).padStart(2, '0'); // Adding 1 as month is zero-based
          const year = dayGreg.getFullYear();

          // Format the components to 'DD-MM-YYYY'
          dob = `${day}-${month}-${year}`;
        } else {
          dob = bh.payload_iqama.getUserInfoResponse.dateOfBirthG;
        }

        bh.local.result = {
          first_name_en: bh.payload_iqama.getUserInfoResponse.englishFirstName,
          first_name_ar: bh.payload_iqama.getUserInfoResponse.firstName,
          last_name_en: bh.payload_iqama.getUserInfoResponse.englishLastName,
          last_name_ar:
            bh.payload_iqama.getUserInfoResponse.familyName ||
            bh.payload_iqama.getUserInfoResponse.lastName,
          second_name_en:
            bh.payload_iqama.getUserInfoResponse.englishSecondName,
          third_name_en: bh.payload_iqama.getUserInfoResponse.englishThirdName,
          id_issued_place:
            bh.payload_iqama.getUserInfoResponse.idIssuePlace ||
            bh.payload_iqama.getUserInfoResponse.iqamaIssuePlaceDesc,
          marital_status: Number(
            bh.payload_iqama.getUserInfoResponse.socialStatusCode
          ),
          gender: bh.payload_iqama.getUserInfoResponse.gender == 'M' ? 1 : 2,
          occupation: bh.payload_iqama.getUserInfoResponse?.occupationCode
            ? bh.payload_iqama.getUserInfoResponse?.occupationCode
            : '',
          nationality:
            bh.payload_iqama.getUserInfoResponse.nationalityCode || 0,
          dob: dob,
        };
        bh.local.status = true;
        bh.local.statusCode = 200;
      } else if (!bh.payload_iqama) {
        bh.local.result = {
          error_code: 'FETCH_FAILED',
        };
        bh.local.status = false;
        bh.local.statusCode = 500;
      } else {
        bh.local.result = bh.payload_iqama;
        bh.local.status = false;
        bh.local.statusCode = 400;
      }
      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k2Bec9ibVM9vVtcC(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1CvlzECIZnPOOIU9',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_m1QhVpUTd0FBFIa2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m1QhVpUTd0FBFIa2',
      parentSpanInst
    );
    try {
      let exipryDateArr = String(
        bh.payload.getUserInfoResponse?.iqamaExpiryDateH
      ).split('-');
      bh.iqamaExpiryDateH = exipryDateArr[2];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callIqamaExpiryDate(bh, parentSpanInst);
      //appendnew_next_sd_m1QhVpUTd0FBFIa2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m1QhVpUTd0FBFIa2',
        spanInst,
        'sd_m1QhVpUTd0FBFIa2'
      );
    }
  }

  async callIqamaExpiryDate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callIqamaExpiryDate',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getAlienInfoByIqamaExpiryDate(
        spanInst,
        bh.input.iqamaNumber,
        bh.iqamaExpiryDateH
      );
      bh.data_iqama = outputVariables.local.yakeen_result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_callIqamaExpiryDate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0U5xVueURFZkNGYL',
        spanInst,
        'callIqamaExpiryDate'
      );
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.payload_iqama = bh.data_iqama?.['payload'] || bh.data_iqama;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SJlcQq2oII8F8CLv',
        spanInst,
        'setResponse3'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v2/art/yakeen/getalieninfobyiqamaanddob?iqamaNumber=${bh.input.iqamaNumber}&dateOfBirth=${bh.input.dateOfBirth}`;

      bh.target = process.env.TARGET_OCE;

      bh.api_key = 'yakeen-customerinfo-iqama';
      bh.identifier = `${bh.input.iqamaNumber}`;
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
        'sd_XXTLrJs97hZVjGgB',
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
      bh = await this.yakeenGetiqamainfo(bh, parentSpanInst);
      //appendnew_next_apigeeToken1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qTm1MJVLJJI6ZiaD',
        spanInst,
        'apigeeToken1'
      );
    }
  }

  async yakeenGetiqamainfo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenGetiqamainfo',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      await axios
        .get(bh.url, { headers: { Authorization: `Bearer ${bh.token}` } })
        .then((response) => {
          bh.data = response.data;
        })
        .catch((error) => {
          console.error('Error:', error?.response?.data || error.message);
          if (error?.response?.data) {
            bh.data = error?.response?.data;
            if (bh.data['ErrorResponse']?.['ErrorCode'])
              bh.yaken_error_code = bh.data['ErrorResponse']?.['ErrorCode'];
          } else if (error.message) {
            bh.data = {
              error_code: error.message,
            };
          } else {
            bh.data = {
              error_code: 'FETCH_FAILED',
            };
          }
          bh.local.status = false;
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getResponse1(bh, parentSpanInst);
      //appendnew_next_yakeenGetiqamainfo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sUqOtv3SR3DVBWsZ',
        spanInst,
        'yakeenGetiqamainfo'
      );
    }
  }

  async getResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getResponse1',
      parentSpanInst
    );
    try {
      bh.payload = bh.data?.['payload'] || bh.data;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k8ygRHitYUFnuk9D(bh, parentSpanInst);
      //appendnew_next_getResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1JJELCT5jBLS3PXQ',
        spanInst,
        'getResponse1'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v2/art/yakeen/getcarinfobysequence?sequenceNumber=${bh.input.sequenceNumber}&ownerId=${bh.input.ownerId}`;

      bh.target = process.env.TARGET_OCE;
      bh.api_key = 'yakeen-vehicleinfo-seq';
      bh.identifier = `${bh.input.sequenceNumber}`;
      bh.apiStartTime = Date.now();
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken2(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k3je9LXibMBhyAMR',
        spanInst,
        'setUrl2'
      );
    }
  }

  async apigeeToken2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken2',
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
      bh = await this.vehicleBySeq(bh, parentSpanInst);
      //appendnew_next_apigeeToken2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_605w3R9CxnOR9ekT',
        spanInst,
        'apigeeToken2'
      );
    }
  }

  async vehicleBySeq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'vehicleBySeq',
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
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_vehicleBySeq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SvaThm9dllKofdkS',
        spanInst,
        'vehicleBySeq'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      console.log('yakeen success', bh);
      bh.payload = bh.response?.['payload'] || bh.response;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CQqZG2cgpj2ZFxIz(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0CpHDPIsZZDMNn63',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_CQqZG2cgpj2ZFxIz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CQqZG2cgpj2ZFxIz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.yaken_error_code,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setErrorCode1(bh, parentSpanInst);
      } else {
        bh = await this.sd_VGnmjQnm9r8mhUiL(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CQqZG2cgpj2ZFxIz',
        spanInst,
        'sd_CQqZG2cgpj2ZFxIz'
      );
    }
  }

  async setErrorCode1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setErrorCode1',
      parentSpanInst
    );
    try {
      switch (bh.yaken_error_code) {
        case '2':
          bh.message_code = 'ERR_YNCI_002';
          break;
        case '5':
          bh.message_code = 'ERR_YNCI_004';
          break;
        case '7':
          bh.message_code = 'ERR_YKVI_003';
          break;
        case '13':
          bh.message_code = 'ERR_YKVI_001';
          break;
        case '16':
          bh.message_code = 'ERR_YNCI_003';
          break;
        case '22':
          bh.message_code = 'ERR_YKVI_002';
          break;
        case '34':
          bh.message_code = 'ERR_YNCI_006';
          break;
        case '24':
          bh.message_code = 'ERR_YKVI_004';
          break;
        default:
          bh.message_code = '';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMessage1(bh, parentSpanInst);
      //appendnew_next_setErrorCode1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GsuLxlyZ3HGsDbnl',
        spanInst,
        'setErrorCode1'
      );
    }
  }

  async getMessage1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance: SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache =
        SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance.getMessage(
          spanInst,
          bh.message_code,
          bh.input.locale_code
        );
      bh.errorMessage = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_98rFg7uPnR4iAnBO(bh, parentSpanInst);
      //appendnew_next_getMessage1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZAH7HvSmEZvgLsIO',
        spanInst,
        'getMessage1'
      );
    }
  }

  async sd_98rFg7uPnR4iAnBO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_98rFg7uPnR4iAnBO',
      parentSpanInst
    );
    try {
      bh.local.result = {
        error:
          bh.errorMessage == ''
            ? bh.response?.ErrorResponse?.ErrorMessage
            : bh.errorMessage,
      };
      bh.local.statusCode = bh.local.statusCode || 400;

      log.error(
        `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][YAKEEN_E]${JSON.stringify(
          bh.local.result
        )}`
      );
      bh.apiEndTime = Date.now();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7jgKeU4L4lmj0MD9(bh, parentSpanInst);
      //appendnew_next_sd_98rFg7uPnR4iAnBO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_98rFg7uPnR4iAnBO',
        spanInst,
        'sd_98rFg7uPnR4iAnBO'
      );
    }
  }

  async sd_7jgKeU4L4lmj0MD9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7jgKeU4L4lmj0MD9',
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
          bh.local.result,
          bh.apiStartTime,
          bh.apiEndTime,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_7jgKeU4L4lmj0MD9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7jgKeU4L4lmj0MD9',
        spanInst,
        'sd_7jgKeU4L4lmj0MD9'
      );
    }
  }

  async sd_VGnmjQnm9r8mhUiL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VGnmjQnm9r8mhUiL',
      parentSpanInst
    );
    try {
      if (
        bh.payload?.CarInfoBySequenceResponse ||
        bh.payload?.CarInfoByCustomResponse
      ) {
        bh.payload =
          bh.payload['CarInfoBySequenceResponse'] ||
          bh.payload['CarInfoByCustomResponse'];
        //NIYAS - START
        let plateText1, plateText2, plateText3;
        if (!bh.payload.plateText1 || bh.payload.plateText1 == 'NULL')
          bh.payload.plateText1 = plateText1 = '';
        if (!bh.payload.plateText2 || bh.payload.plateText2 == 'NULL')
          bh.payload.plateText2 = plateText2 = '';
        if (!bh.payload.plateText3 || bh.payload.plateText3 == 'NULL')
          bh.payload.plateText3 = plateText3 = '';
        if (bh.payload.plateText1) plateText1 = ' ' + bh.payload.plateText1;
        if (bh.payload.plateText2) plateText2 = ' ' + bh.payload.plateText2;
        if (bh.payload.plateText3) plateText3 = ' ' + bh.payload.plateText3;
        //NIYAS - END
        bh.local.result = {
          make: bh.payload.vehicleMakerCode,
          model: bh.payload.vehicleModelCode,
          plate_number: `${bh.payload.plateNumber}${plateText3}${plateText2}${plateText1}`, //reversed plate number
          plate_no: `${bh.payload.plateNumber}`,
          manufacturing_year: bh.payload.modelYear,
          chassis_number: bh.payload.chassisNumber,
          cylinders: bh.payload.cylinders,
          lk_vehicle_class: bh.payload.lkVehicleClass,
          log_id: bh.payload.logId,
          major_color: bh.payload.majorColor,
          minor_color: bh.payload.minorColor,
          owner_name: bh.payload.ownerName,
          plate_text1: bh.payload.plateText1,
          plate_text2: bh.payload.plateText2,
          plate_text3: bh.payload.plateText3,
          plate_type_code: bh.payload.plateTypeCode,
          registration_place: bh.payload.regplace,
          vehicle_body_code: bh.payload.vehicleBodyCode,
          vehicle_body_description: bh.payload.vehicleBodyDesc,
          vehicle_seats: bh.payload.vehicleLoad,
          vehicle_weight: bh.payload.vehicleWeight,
          city_ar: bh.payload.regplace || bh.payload.regPlace,
        };
        log.info(
          `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][RESPONSE_REMAPPED]${JSON.stringify(
            bh.local.result
          )}`
        );

        bh.local.status = true;
        bh.local.statusCode = 200;
      } else if (bh.local?.error_response) {
        bh.local.result = {
          error_code:
            bh.local.error_response?.['ErrorResponse']?.['ErrorCode'] || '',
          error_message:
            bh.local.error_response?.['ErrorResponse']?.['ErrorMessage'] || '',
        };
        bh.local.status = false;
        bh.local.statusCode = 400;
        log.error(
          `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][ERROR]${JSON.stringify(
            bh.local.result
          )}`
        );
      } else {
        bh.local.result = {
          error_code: 'FETCH_FAILED',
        };
        bh.local.status = false;
        log.error(
          `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][ERROR]${JSON.stringify(
            bh.local.result
          )}`
        );

        bh.local.statusCode = 500;
      }

      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7jgKeU4L4lmj0MD9(bh, parentSpanInst);
      //appendnew_next_sd_VGnmjQnm9r8mhUiL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VGnmjQnm9r8mhUiL',
        spanInst,
        'sd_VGnmjQnm9r8mhUiL'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v2/art/yakeen/getcarinfobycustom?customNumber=${bh.input.customNumber}&modelYear=${bh.input.modelYear}`;

      log.info(`[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID::${bh.url}[START]`);

      bh.target = process.env.TARGET_OCE;
      bh.api_key = 'yakeen-vehicleinfo-custom';
      bh.identifier = `${bh.input.customNumber}`;
      bh.apiStartTime = Date.now();
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken3(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EIvY0xXn80537hOV',
        spanInst,
        'setUrl3'
      );
    }
  }

  async apigeeToken3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken3',
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
      bh = await this.vehicleByCustomNo(bh, parentSpanInst);
      //appendnew_next_apigeeToken3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yWlOLDr75BMPDKTe',
        spanInst,
        'apigeeToken3'
      );
    }
  }

  async vehicleByCustomNo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'vehicleByCustomNo',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      await axios
        .get(bh.url, { headers: { Authorization: `Bearer ${bh.token}` } })
        .then((response) => {
          bh.response = response.data;
          log.info(
            `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][RESPONSE]${JSON.stringify(
              bh.response
            )}`
          );
        })
        .catch((error) => {
          log.error('Error:', error?.response?.data || error.message);
          if (error?.response?.data) {
            log.error(
              `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][ERROR]${JSON.stringify(
                error?.response?.data
              )}`
            );
            bh.response = error?.response?.data;
            if (bh.response['ErrorResponse']?.['ErrorCode'])
              bh.yaken_error_code = bh.response['ErrorResponse']?.['ErrorCode'];
          } else if (error.message) {
            log.error(
              `[GET_YAKEEN_VEHICLE_INFO_BY_CUSTOM_ID][ERROR]${error?.message}`
            );
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
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_vehicleByCustomNo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EIosle2P59zgJbu3',
        spanInst,
        'vehicleByCustomNo'
      );
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.payload = bh.response?.['payload'] || bh.response;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CQqZG2cgpj2ZFxIz(bh, parentSpanInst);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1kczFc1eGFOpvMzp',
        spanInst,
        'setResponse4'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_OCE_URL +
        `/v1/art/elm-mobile-verification?nationalId=${bh.input.nationalId}&mobileNumber=${bh.input.mobileNumber}`;

      bh.target = process.env.TARGET_OCE;
      bh.api_key = 'elm-mobile-verification';
      bh.identifier = `${bh.input.mobileNumber}`;
      bh.apiStartTime = Date.now();
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken4(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gnvsAADelHne0s4x',
        spanInst,
        'setUrl4'
      );
    }
  }

  async apigeeToken4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken4',
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
      bh = await this.validateMobileElm(bh, parentSpanInst);
      //appendnew_next_apigeeToken4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vGP8W0WCSLl9X4rY',
        spanInst,
        'apigeeToken4'
      );
    }
  }

  async validateMobileElm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateMobileElm',
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
          console.error('Error:', error?.response?.data || error.message);
          if (error?.response?.data) {
            bh.response = error?.response?.data;
            if (bh.response['ErrorResponse']?.['ErrorCode'])
              bh.yaken_error_code = bh.response['ErrorResponse']?.['ErrorCode'];
          } else if (error.message) {
            bh.data = {
              error_code: error.message,
            };
          } else {
            bh.data = {
              error_code: 'FETCH_FAILED',
            };
          }
          bh.local.status = false;
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_validateMobileElm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BF1wfttbDZcUkNIE',
        spanInst,
        'validateMobileElm'
      );
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
      parentSpanInst
    );
    try {
      bh.payload = bh.response?.['payload'] || bh.response;
      bh.local.status = bh.payload?.isOwner == true;
      bh.local.statusCode = 200;
      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oaMhWj9xk0hedngp(bh, parentSpanInst);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vz0BAXPklX8OWs7v',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_oaMhWj9xk0hedngp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oaMhWj9xk0hedngp',
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
          bh.local.status,
          bh.apiStartTime,
          bh.apiEndTime,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_oaMhWj9xk0hedngp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oaMhWj9xk0hedngp',
        spanInst,
        'sd_oaMhWj9xk0hedngp'
      );
    }
  }

  async setCatchResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCatchResponse5',
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
          bh.local.status = data?.isOwner == true;
        } else {
          bh.local.status = false;
        }
      } else {
        bh.local.status = false;
        bh.local.statusCode = 400;
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
      bh = await this.sd_oaMhWj9xk0hedngp(bh, parentSpanInst);
      //appendnew_next_setCatchResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BRofH7Boi48gVYX9',
        spanInst,
        'setCatchResponse5'
      );
    }
  }

  async setCatchResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCatchResponse3',
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
          bh.payload = data;
        } else if (data['ErrorResponse']?.['ErrorCode']) {
          switch (data['ErrorResponse']?.['ErrorCode']) {
            case '2':
              bh.message_code = 'ERR_YNCI_002';
              break;
            case '5':
              bh.message_code = 'ERR_YNCI_004';
              break;
            case '7':
              bh.message_code = 'ERR_YKVI_003';
              break;
            case '13':
              bh.message_code = 'ERR_YKVI_001';
              break;
            case '16':
              bh.message_code = 'ERR_YNCI_003';
              break;
            case '22':
              bh.message_code = 'ERR_YKVI_002';
              break;
            default:
              bh.message_code = '';
          }
          bh.local.result = {
            code: data['ErrorResponse']?.['ErrorCode'] || 'FETCH_FAILED',
            error:
              data['ErrorResponse']?.['ErrorMessage'] ||
              data['Response']?.['ErrorMessage'] ||
              'FETCH_FAILED',
          };
          bh.local.status = false;
        } else {
          bh.local.result = {
            code: 'FETCH_FAILED',
            error: 'FETCH_FAILED',
          };
          bh.local.status = false;
        }
      } else {
        bh.local.result = {
          code: 'FETCH_FAILED',
          error: 'FETCH_FAILED',
        };
        bh.local.status = false;
        bh.local.statusCode = bh.local.statusCode || 400;
      }

      function isJSON(str) {
        try {
          JSON.stringify(JSON.parse(str));
          return true;
        } catch (e) {
          return false;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cMp3FDfMlNcn6pnx(bh, parentSpanInst);
      //appendnew_next_setCatchResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TMRXPuTRZMZcHYFf',
        spanInst,
        'setCatchResponse3'
      );
    }
  }

  async sd_cMp3FDfMlNcn6pnx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cMp3FDfMlNcn6pnx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.status,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else {
        bh = await this.sd_a0qLnrgbetNrX3uC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cMp3FDfMlNcn6pnx',
        spanInst,
        'sd_cMp3FDfMlNcn6pnx'
      );
    }
  }

  async sd_a0qLnrgbetNrX3uC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a0qLnrgbetNrX3uC',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.message_code,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getMessage(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a0qLnrgbetNrX3uC',
        spanInst,
        'sd_a0qLnrgbetNrX3uC'
      );
    }
  }

  async getMessage(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance: SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache =
        SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance.getMessage(
          spanInst,
          bh.message_code,
          bh.input.locale_code
        );
      bh.errorMessage = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LWKeuyd10SaI1Avh(bh, parentSpanInst);
      //appendnew_next_getMessage
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ijjFMkWmO7uLLaoO',
        spanInst,
        'getMessage'
      );
    }
  }

  async sd_LWKeuyd10SaI1Avh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LWKeuyd10SaI1Avh',
      parentSpanInst
    );
    try {
      bh.local.result = {
        error: bh.errorMessage,
      };
      bh.local.statusCode = bh.local.statusCode || 400;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LWKeuyd10SaI1Avh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LWKeuyd10SaI1Avh',
        spanInst,
        'sd_LWKeuyd10SaI1Avh'
      );
    }
  }

  async setCatchResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCatchResponse2',
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
          bh.payload = data;
        } else if (data['ErrorResponse']?.['ErrorCode']) {
          switch (data['ErrorResponse']?.['ErrorCode']) {
            case '2':
              bh.message_code = 'ERR_YNCI_002';
              break;
            case '5':
              bh.message_code = 'ERR_YNCI_004';
              break;
            case '7':
              bh.message_code = 'ERR_YKVI_003';
              break;
            case '13':
              bh.message_code = 'ERR_YKVI_001';
              break;
            case '16':
              bh.message_code = 'ERR_YNCI_003';
              break;
            case '22':
              bh.message_code = 'ERR_YKVI_002';
              break;
            default:
              bh.message_code = '';
          }
          bh.local.result = {
            code: data['ErrorResponse']?.['ErrorCode'] || 'FETCH_FAILED',
            error:
              data['ErrorResponse']?.['ErrorMessage'] ||
              data['Response']?.['ErrorMessage'] ||
              'FETCH_FAILED',
          };
          bh.local.status = false;
        } else {
          bh.local.result = {
            code: 'FETCH_FAILED',
            error: 'FETCH_FAILED',
          };
          bh.local.status = false;
        }
      } else {
        bh.local.result = {
          code: 'FETCH_FAILED',
          error: 'FETCH_FAILED',
        };
        bh.local.status = false;
        bh.local.statusCode = bh.local.statusCode || 400;
      }

      function isJSON(str) {
        try {
          JSON.stringify(JSON.parse(str));
          return true;
        } catch (e) {
          return false;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6lUQyUAD8Mz343ju(bh, parentSpanInst);
      //appendnew_next_setCatchResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aCN1jKhnB18BColU',
        spanInst,
        'setCatchResponse2'
      );
    }
  }

  async sd_6lUQyUAD8Mz343ju(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6lUQyUAD8Mz343ju',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.status,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else {
        bh = await this.sd_ilx56IODsNgZ9eaP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6lUQyUAD8Mz343ju',
        spanInst,
        'sd_6lUQyUAD8Mz343ju'
      );
    }
  }

  async sd_ilx56IODsNgZ9eaP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ilx56IODsNgZ9eaP',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.message_code,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getMessage3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ilx56IODsNgZ9eaP',
        spanInst,
        'sd_ilx56IODsNgZ9eaP'
      );
    }
  }

  async getMessage3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMessage3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance: SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache =
        SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2pInstance.getMessage(
          spanInst,
          bh.message_code,
          bh.input.locale_code
        );
      bh.errorMessage = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aphlp5FVThpyRvVV(bh, parentSpanInst);
      //appendnew_next_getMessage3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G8PVCVAevKnA4vXw',
        spanInst,
        'getMessage3'
      );
    }
  }

  async sd_aphlp5FVThpyRvVV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aphlp5FVThpyRvVV',
      parentSpanInst
    );
    try {
      bh.local.result = {
        error: bh.errorMessage,
      };
      bh.local.statusCode = bh.local.statusCode || 400;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_aphlp5FVThpyRvVV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aphlp5FVThpyRvVV',
        spanInst,
        'sd_aphlp5FVThpyRvVV'
      );
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url2 =
        process.env.APIGEE_OCE_URL +
        `/v2/art/yakeen/getalieninfobyiqama?iqamaNumber=${bh.input.iqamaNumber}&expiryDate=${bh.input.expiryDate}`;

      bh.target = process.env.TARGET_OCE;
      bh.api_key = 'yakeen-getalieninfo-iqama';
      bh.identifier = `${bh.input.iqamaNumber}`;
      bh.apiStartTime = Date.now();
      bh.request = {
        url: bh.url,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken5(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AZaHWppIvZXdL6N7',
        spanInst,
        'setUrl5'
      );
    }
  }

  async apigeeToken5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          'OCE'
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.yakeenResponse(bh, parentSpanInst);
      //appendnew_next_apigeeToken5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6b6DPrYXsXPaBmx5',
        spanInst,
        'apigeeToken5'
      );
    }
  }

  async yakeenResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'yakeenResponse',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      await axios
        .get(bh.url2, { headers: { Authorization: `Bearer ${bh.token}` } })
        .then((response) => {
          bh.data_iqama = response.data;
        })
        .catch((error) => {
          console.error('Error:', error?.response?.data || error.message);
          if (error?.response?.data) {
            bh.data_iqama = error?.response?.data;
            if (bh.data_iqama['ErrorResponse']?.['ErrorCode'])
              bh.yaken_error_code =
                bh.data_iqama['ErrorResponse']?.['ErrorCode'];
          } else if (error.message) {
            bh.data_iqama = {
              error_code: error.message,
            };
          } else {
            bh.data_iqama = {
              error_code: 'FETCH_FAILED',
            };
          }
          bh.local.status = false;
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse6(bh, parentSpanInst);
      //appendnew_next_yakeenResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R5FHlFGxmP4u9uP9',
        spanInst,
        'yakeenResponse'
      );
    }
  }

  async setResponse6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse6',
      parentSpanInst
    );
    try {
      bh.local.yakeen_result = bh.data_iqama?.['payload'] || bh.data_iqama;
      bh.apiEndTime = Date.now();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3AKGo55m5WfgZbEq(bh, parentSpanInst);
      //appendnew_next_setResponse6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bej7qnA8ZfMxAQHd',
        spanInst,
        'setResponse6'
      );
    }
  }

  async sd_3AKGo55m5WfgZbEq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3AKGo55m5WfgZbEq',
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
          bh.local.yakeen_result,
          bh.apiStartTime,
          bh.apiEndTime,
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3AKGo55m5WfgZbEq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3AKGo55m5WfgZbEq',
        spanInst,
        'sd_3AKGo55m5WfgZbEq'
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
      (await this.sd_AW2pMQD2vRqaoKk7(bh, parentSpanInst)) ||
      (await this.sd_IZhR8or6anRIuj6h(bh, parentSpanInst)) ||
      (await this.sd_VJ39XIZgvJBzpxXz(bh, parentSpanInst))
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
  async sd_AW2pMQD2vRqaoKk7(bh, parentSpanInst) {
    const nodes = [];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setCatchResponse5(bh, parentSpanInst);
      //appendnew_next_sd_AW2pMQD2vRqaoKk7
      return true;
    }
    return false;
  }
  async sd_IZhR8or6anRIuj6h(bh, parentSpanInst) {
    const nodes = ['sd_qDXouZAonPZIXg1F', 'sd_xMYUijB2jOXwmkHt'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setCatchResponse3(bh, parentSpanInst);
      //appendnew_next_sd_IZhR8or6anRIuj6h
      return true;
    }
    return false;
  }
  async sd_VJ39XIZgvJBzpxXz(bh, parentSpanInst) {
    const nodes = ['sd_1XsnVLmts1tUojLf', 'sd_6UyytWUr78eJm1N0'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.setCatchResponse2(bh, parentSpanInst);
      //appendnew_next_sd_VJ39XIZgvJBzpxXz
      return true;
    }
    return false;
  }
  //appendnew_flow_yakeen_flows_Catch
}
