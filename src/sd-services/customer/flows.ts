// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
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

  async getCitizenInfo(parentSpanInst, id_no = '', dob = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getCitizenInfo',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
        dob,
      },
      local: {
        customer_details: undefined,
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
            customer_details: bh.local.customer_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8fdeUoy9kbh5XeGB',
        spanInst,
        'getCitizenInfo'
      );
    }
  }

  async getalieninfobyiqamaanddob(
    parentSpanInst,
    id_no = '',
    dob = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getalieninfobyiqamaanddob',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
        dob,
      },
      local: {
        customer_details: undefined,
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
            customer_details: bh.local.customer_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_elA7ayTeaiN06EVW',
        spanInst,
        'getalieninfobyiqamaanddob'
      );
    }
  }

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
        address_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_getAddressById
      return (
        // formatting output variables
        {
          input: {},
          local: {
            address_details: bh.local.address_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Eysdx1q2Q8mublOa',
        spanInst,
        'getAddressById'
      );
    }
  }

  async getAddressByCr(parentSpanInst, id_no = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAddressByCr',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id_no,
      },
      local: {
        address_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_getAddressByCr
      return (
        // formatting output variables
        {
          input: {},
          local: {
            address_details: bh.local.address_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lcH2r39PkRWFd5ct',
        spanInst,
        'getAddressByCr'
      );
    }
  }

  async getCrInfo(parentSpanInst, cr_num = '', vat_num = '', ...others) {
    const spanInst = this.tracerService.createSpan('getCrInfo', parentSpanInst);
    let bh: any = {
      input: {
        cr_num,
        vat_num,
      },
      local: {
        company_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl5(bh, parentSpanInst);
      //appendnew_next_getCrInfo
      return (
        // formatting output variables
        {
          input: {},
          local: {
            company_details: bh.local.company_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j18zM3D9ve1V3iFm',
        spanInst,
        'getCrInfo'
      );
    }
  }

  async validatePhone(
    parentSpanInst,
    nationalId: any = undefined,
    mobileNumber: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validatePhone',
      parentSpanInst
    );
    let bh: any = {
      input: {
        nationalId,
        mobileNumber,
      },
      local: {
        status: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl7(bh, parentSpanInst);
      //appendnew_next_validatePhone
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6MRzXTDC9XslT7Sm',
        spanInst,
        'validatePhone'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'yakeen/customerinfo/nid';
      bh.body = {
        id_no: bh.input.id_no,
        dob: bh.input.dob,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpReq1(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bv6NXHvxVvQdkScA',
        spanInst,
        'setUrl0'
      );
    }
  }

  async httpReq1(bh, parentSpanInst) {
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
      //appendnew_next_httpReq1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XKC7yVqxRMwzTrZU');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.customer_details = bh.response['payload'];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wz6Ll7osQOgPv1cT',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'yakeen/customerinfo/iqama';
      bh.body = {
        id_no: bh.input.id_no,
        dob: bh.input.dob,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpReq2(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YSD1zjykYh8qCpX4',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpReq2(bh, parentSpanInst) {
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
      //appendnew_next_httpReq2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SeNoSlC7JNCez0zP');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.customer_details = bh.response['payload'];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rBDq8Hgiy9jdlN2e',
        spanInst,
        'setResponse1'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'spl/addressinfo/id';
      bh.body = {
        id_no: bh.input.id_no,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpReq3(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6VRT1L0f2PruYoRw',
        spanInst,
        'setUrl3'
      );
    }
  }

  async httpReq3(bh, parentSpanInst) {
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
      //appendnew_next_httpReq3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ks0PAkETtktxsw70');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.address_details = bh.response['payload'];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ST8cyttr3lFlyW7d',
        spanInst,
        'setResponse2'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'spl/addressinfo/cr';
      bh.body = {
        id_no: bh.input.id_no,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpReq4(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NCYQ4djYKwf7D59j',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpReq4(bh, parentSpanInst) {
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
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_httpReq4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JfsK3khtabdNRTlh');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.local.address_details = bh.response['payload'];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WCCteOeBmnPGq9uF',
        spanInst,
        'setResponse3'
      );
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + '';
      bh.body = {
        cr_num: bh.input.cr_num,
        vat_num: bh.input.vat_num,
      };

      bh.local.company_details = {
        company_name_en: '',
        company_name_ar: '',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_icGFz9ur4caDNUBT',
        spanInst,
        'setUrl5'
      );
    }
  }

  async setUrl7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl7', parentSpanInst);
    try {
      bh.url = process.env.INT_MS_URL + 'elm/validate/customer';
      bh.body = {
        nationalId: bh.input.nationalId,
        mobileNumber: bh.input.mobileNumber,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpReq6(bh, parentSpanInst);
      //appendnew_next_setUrl7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TV3s70i9THLFhDyZ',
        spanInst,
        'setUrl7'
      );
    }
  }

  async httpReq6(bh, parentSpanInst) {
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
      bh = await this.setResponse7(bh, parentSpanInst);
      //appendnew_next_httpReq6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e7R2t8U7S8GALIvt');
    }
  }

  async setResponse7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse7',
      parentSpanInst
    );
    try {
      bh.local.status = bh.response?.['payload']?.['status'] || false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7jaC9Fugel5bcajV',
        spanInst,
        'setResponse7'
      );
    }
  }

  async catchResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse0',
      parentSpanInst
    );
    try {
      bh.local.customer_details = bh.error?.response?.body || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IuklZZEFThJJrp3n',
        spanInst,
        'catchResponse0'
      );
    }
  }

  async catchResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse1',
      parentSpanInst
    );
    try {
      bh.local.customer_details = bh.error?.response?.body || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HBbUmn1IORjIpjlL',
        spanInst,
        'catchResponse1'
      );
    }
  }

  async catchResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse2',
      parentSpanInst
    );
    try {
      bh.local.address_details = bh.error?.response?.body || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f0VGbnbiwLqNBTyK',
        spanInst,
        'catchResponse2'
      );
    }
  }

  async catchResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse3',
      parentSpanInst
    );
    try {
      bh.local.address_details = bh.error?.response?.body || {};

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZgY0CvTcOtqJiuJa',
        spanInst,
        'catchResponse3'
      );
    }
  }

  async catchResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse4',
      parentSpanInst
    );
    try {
      bh.local.company_details = bh.error?.response?.body || {};
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NSBU52WHWAPlwVst',
        spanInst,
        'catchResponse4'
      );
    }
  }

  async catchResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse5',
      parentSpanInst
    );
    try {
      bh.local.status = false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TlJPDAbytksHni6G',
        spanInst,
        'catchResponse5'
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
      (await this.sd_PzeR4Obd8cCTufwb(bh, parentSpanInst)) ||
      (await this.sd_BSxhNLtbCgmq0IeZ(bh, parentSpanInst)) ||
      (await this.sd_l071ENElWgRAxLwH(bh, parentSpanInst)) ||
      (await this.sd_ryopgduCgtbAyM8N(bh, parentSpanInst)) ||
      (await this.sd_5Unslu9qQI98iw94(bh, parentSpanInst)) ||
      (await this.sd_tGWN3Lls9kU8ahQu(bh, parentSpanInst))
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
  async sd_PzeR4Obd8cCTufwb(bh, parentSpanInst) {
    const nodes = ['sd_XKC7yVqxRMwzTrZU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse0(bh, parentSpanInst);
      //appendnew_next_sd_PzeR4Obd8cCTufwb
      return true;
    }
    return false;
  }
  async sd_BSxhNLtbCgmq0IeZ(bh, parentSpanInst) {
    const nodes = ['sd_SeNoSlC7JNCez0zP'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse1(bh, parentSpanInst);
      //appendnew_next_sd_BSxhNLtbCgmq0IeZ
      return true;
    }
    return false;
  }
  async sd_l071ENElWgRAxLwH(bh, parentSpanInst) {
    const nodes = ['sd_Ks0PAkETtktxsw70'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse2(bh, parentSpanInst);
      //appendnew_next_sd_l071ENElWgRAxLwH
      return true;
    }
    return false;
  }
  async sd_ryopgduCgtbAyM8N(bh, parentSpanInst) {
    const nodes = ['sd_JfsK3khtabdNRTlh'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse3(bh, parentSpanInst);
      //appendnew_next_sd_ryopgduCgtbAyM8N
      return true;
    }
    return false;
  }
  async sd_5Unslu9qQI98iw94(bh, parentSpanInst) {
    const nodes = ['sd_r9oB35NoZUuxuuyG'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse4(bh, parentSpanInst);
      //appendnew_next_sd_5Unslu9qQI98iw94
      return true;
    }
    return false;
  }
  async sd_tGWN3Lls9kU8ahQu(bh, parentSpanInst) {
    const nodes = ['sd_e7R2t8U7S8GALIvt'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse5(bh, parentSpanInst);
      //appendnew_next_sd_tGWN3Lls9kU8ahQu
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
