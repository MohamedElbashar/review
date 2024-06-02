// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf from '../renewal/data_flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_UMs35tEwQZN2qEuJ from './flows'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/customer/renewals`,
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
          bh = await this.payloadCheck(bh, parentSpanInst);
          //appendnew_next_sd_Ot6LWkVgao7qtZ2j
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ot6LWkVgao7qtZ2j');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async payloadCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'payloadCheck',
      parentSpanInst
    );
    try {
      const payload = bh.input.body;
      // possible values for query_type.  list / status
      bh.local.isValidPayload =
        !!payload['customer_id'] &&
        ['list', 'status'].includes(payload['query_type']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_99mHrkx9oIZrxDey(bh, parentSpanInst);
      //appendnew_next_payloadCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hNvyCKZM7wYgf56Y',
        spanInst,
        'payloadCheck'
      );
    }
  }

  async sd_99mHrkx9oIZrxDey(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_99mHrkx9oIZrxDey',
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
        bh = await this.getPolicies(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValidPayload,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lwtxyIsXMJ8mmXIk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_99mHrkx9oIZrxDey',
        spanInst,
        'sd_99mHrkx9oIZrxDey'
      );
    }
  }

  async getPolicies(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPolicies',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UMs35tEwQZN2qEuJInstance: SSD_SERVICE_ID_sd_UMs35tEwQZN2qEuJ.flows =
        SSD_SERVICE_ID_sd_UMs35tEwQZN2qEuJ.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UMs35tEwQZN2qEuJInstance.getPolicyListByQuerytype(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A800vK84YJVkiaZn(bh, parentSpanInst);
      //appendnew_next_getPolicies
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CDRur9u8taXdc0Kh',
        spanInst,
        'getPolicies'
      );
    }
  }

  async sd_A800vK84YJVkiaZn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A800vK84YJVkiaZn',
      parentSpanInst
    );
    try {
      bh.local.policyList = bh.local.result;
      bh.local.queryType = bh.input.body.query_type;
      bh.local.response = { status: bh.local.policyList.length > 0 };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MHWDocuO0HnlyBf2(bh, parentSpanInst);
      //appendnew_next_sd_A800vK84YJVkiaZn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A800vK84YJVkiaZn',
        spanInst,
        'sd_A800vK84YJVkiaZn'
      );
    }
  }

  async sd_MHWDocuO0HnlyBf2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MHWDocuO0HnlyBf2',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.queryType,
          'list',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zCbVigOgSMIuzSbF(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.queryType,
          'status',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1a2Svx80wSGi378z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MHWDocuO0HnlyBf2',
        spanInst,
        'sd_MHWDocuO0HnlyBf2'
      );
    }
  }

  async sd_zCbVigOgSMIuzSbF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zCbVigOgSMIuzSbF',
      parentSpanInst
    );
    try {
      bh.local.isSME = false;
      if (bh.local.response.status) {
        const moment = require('moment');
        const formatDateMMYYYY = (timestamp) => {
          const momentObj = moment(timestamp);
          const formattedDate = momentObj.format('MM-YYYY');
          return formattedDate;
        };
        bh.local.isSME = bh.local.policyList[0].NATIONAL_ID.startsWith('7');

        bh.local.response['list'] = bh.local.policyList;
        bh.local.response['customer_info'] = {
          [bh.local.isSME ? 'company_name' : 'customer_name']:
            bh.local.policyList[0].CUSTOMER_NAME,
          contact_number: bh.local.policyList[0].CUST_CONTACT_NUMBER,
          email: bh.local.policyList[0].CUST_EMAIL_ADDRESS,
        };
        if (!bh.local.isSME) {
          bh.local.customerInfoPayload = {
            id_type: bh.local.policyList[0].NATIONAL_ID.startsWith('2') ? 2 : 1,
            id_no: bh.local.policyList[0].NATIONAL_ID,
            dob: formatDateMMYYYY(bh.local.policyList[0].DATE_OF_BIRTH),
            phone_no: `966${bh.local.policyList[0].CUST_CONTACT_NUMBER}`,
          };
        }
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.hasRenewalPolicies(bh, parentSpanInst);
      //appendnew_next_sd_zCbVigOgSMIuzSbF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zCbVigOgSMIuzSbF',
        spanInst,
        'sd_zCbVigOgSMIuzSbF'
      );
    }
  }

  async hasRenewalPolicies(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'hasRenewalPolicies',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.response.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.isSme(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.response.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1a2Svx80wSGi378z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_brv0rT2p2MuvynLx',
        spanInst,
        'hasRenewalPolicies'
      );
    }
  }

  async isSme(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('isSme', parentSpanInst);
    try {
      if (
        this.sdService.operators['false'](
          bh.local.isSME,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getCustomerDetails(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.isSME,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1a2Svx80wSGi378z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wBuej8NTMr0uxro',
        spanInst,
        'isSme'
      );
    }
  }

  async getCustomerDetails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCustomerDetails',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getCustomer(
          spanInst,
          bh.local.customerInfoPayload
        );
      bh.local.customerDetails = outputVariables.local.customer_info;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HR8zDpDpaRIGBEt5(bh, parentSpanInst);
      //appendnew_next_getCustomerDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K2bo2hQ5LaFo44Rm',
        spanInst,
        'getCustomerDetails'
      );
    }
  }

  async sd_HR8zDpDpaRIGBEt5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HR8zDpDpaRIGBEt5',
      parentSpanInst
    );
    try {
      const { customer_details, address_details } = bh.local.customerDetails;
      bh.local.response['customer_info']['first_name_en'] =
        customer_details['first_name_en'];
      bh.local.response['customer_info']['first_name_ar'] =
        customer_details['first_name_ar'];
      bh.local.response['customer_info']['last_name_en'] =
        customer_details['last_name_en'];
      bh.local.response['customer_info']['last_name_ar'] =
        customer_details['last_name_ar'];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1a2Svx80wSGi378z(bh, parentSpanInst);
      //appendnew_next_sd_HR8zDpDpaRIGBEt5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HR8zDpDpaRIGBEt5',
        spanInst,
        'sd_HR8zDpDpaRIGBEt5'
      );
    }
  }

  async sd_1a2Svx80wSGi378z(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1a2Svx80wSGi378z');
    }
  }

  async sd_lwtxyIsXMJ8mmXIk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lwtxyIsXMJ8mmXIk',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: false,
        error: 'Invalid Request Parameters',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yT60gG2G0ipDZlF7(bh, parentSpanInst);
      //appendnew_next_sd_lwtxyIsXMJ8mmXIk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lwtxyIsXMJ8mmXIk',
        spanInst,
        'sd_lwtxyIsXMJ8mmXIk'
      );
    }
  }

  async sd_yT60gG2G0ipDZlF7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yT60gG2G0ipDZlF7');
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
  //appendnew_flow_apis_Catch
}
