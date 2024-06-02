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

  async sendSmsTemplated(parentSpanInst, phone_no: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'sendSmsTemplated',
      parentSpanInst
    );
    let bh: any = {
      input: {
        phone_no,
      },
      local: {
        tx_id: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dG8ZUOwVDTtqLTVi(bh, parentSpanInst);
      //appendnew_next_sendSmsTemplated
      return (
        // formatting output variables
        {
          input: {},
          local: {
            tx_id: bh.local.tx_id,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KeN59Rl8eMWaPcKu',
        spanInst,
        'sendSmsTemplated'
      );
    }
  }

  async verifyOtp(
    parentSpanInst,
    value: any = undefined,
    tx_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('verifyOtp', parentSpanInst);
    let bh: any = {
      input: {
        value,
        tx_id,
      },
      local: {
        result: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_b1qA467rMKNFTMzJ(bh, parentSpanInst);
      //appendnew_next_verifyOtp
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7900mSlJsz9NydBY',
        spanInst,
        'verifyOtp'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_dG8ZUOwVDTtqLTVi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dG8ZUOwVDTtqLTVi',
      parentSpanInst
    );
    try {
      bh.body = {
        otp_type: 'SMS',
        phone: bh.input.phone_no,
        purpose_code: 'customer-verification-otp',
      };

      bh.url = process.env.COMMS_MS_URL + 'send-otp';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GxyHatRHy8gbm82v(bh, parentSpanInst);
      //appendnew_next_sd_dG8ZUOwVDTtqLTVi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dG8ZUOwVDTtqLTVi',
        spanInst,
        'sd_dG8ZUOwVDTtqLTVi'
      );
    }
  }

  async sd_GxyHatRHy8gbm82v(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.sd_1j0v4MSVyvU16IuT(bh, parentSpanInst);
      //appendnew_next_sd_GxyHatRHy8gbm82v
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GxyHatRHy8gbm82v');
    }
  }

  async sd_1j0v4MSVyvU16IuT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1j0v4MSVyvU16IuT',
      parentSpanInst
    );
    try {
      console.log(bh.result.payload);
      bh.local.tx_id = bh.result.payload.TxId;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1j0v4MSVyvU16IuT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1j0v4MSVyvU16IuT',
        spanInst,
        'sd_1j0v4MSVyvU16IuT'
      );
    }
  }

  async sd_b1qA467rMKNFTMzJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b1qA467rMKNFTMzJ',
      parentSpanInst
    );
    try {
      bh.body = {
        value: bh.input.value,
        TxId: bh.input.tx_id,
      };

      bh.url = process.env.COMMS_MS_URL + 'verify-otp';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kj8XEmQ1tchjwLdm(bh, parentSpanInst);
      //appendnew_next_sd_b1qA467rMKNFTMzJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b1qA467rMKNFTMzJ',
        spanInst,
        'sd_b1qA467rMKNFTMzJ'
      );
    }
  }

  async sd_kj8XEmQ1tchjwLdm(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.sd_0XsGpJY8eqEQQOZW(bh, parentSpanInst);
      //appendnew_next_sd_kj8XEmQ1tchjwLdm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kj8XEmQ1tchjwLdm');
    }
  }

  async sd_0XsGpJY8eqEQQOZW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0XsGpJY8eqEQQOZW',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      bh.local.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_0XsGpJY8eqEQQOZW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0XsGpJY8eqEQQOZW',
        spanInst,
        'sd_0XsGpJY8eqEQQOZW'
      );
    }
  }

  async sd_rE1x2G7hc2Jheshj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rE1x2G7hc2Jheshj',
      parentSpanInst
    );
    try {
      bh.local.result = {
        error: 'invalid request',
      };
      bh.local.status_code = 500;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_rE1x2G7hc2Jheshj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rE1x2G7hc2Jheshj',
        spanInst,
        'sd_rE1x2G7hc2Jheshj'
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
      (await this.sd_Dxjl04HLxOHiIhSc(bh, parentSpanInst))
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
  async sd_Dxjl04HLxOHiIhSc(bh, parentSpanInst) {
    const nodes = ['sd_GxyHatRHy8gbm82v', 'sd_kj8XEmQ1tchjwLdm'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_rE1x2G7hc2Jheshj(bh, parentSpanInst);
      //appendnew_next_sd_Dxjl04HLxOHiIhSc
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
