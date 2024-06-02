// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb from './flows'; //_splitter_
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
      `${this.serviceBasePath}/payment/options`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.setUrl0(bh, parentSpanInst);
          //appendnew_next_sd_dVES8iLe6falTP9A
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dVES8iLe6falTP9A');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment/initiate`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.initPayment(bh, parentSpanInst);
          //appendnew_next_sd_JQHMCg3P18RnSjW5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JQHMCg3P18RnSjW5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/customer/decision`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.sd_JT9Eo0L4NjgeM4Jz(bh, parentSpanInst);
          //appendnew_next_sd_aE47UlUgUpS6uxSN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aE47UlUgUpS6uxSN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment/balance/enquiry`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
          bh = await this.setUrl1(bh, parentSpanInst);
          //appendnew_next_sd_olrctQqhK5Bbyna6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_olrctQqhK5Bbyna6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/payment_details`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
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
          bh = await this.fetchPpDetailsCall(bh, parentSpanInst);
          //appendnew_next_sd_7xVKNmshHwIR9mjP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7xVKNmshHwIR9mjP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url =
        process.env.MS_API_URL +
        `payment/options?product_type=MOTOR&channel_code=SP&device_type=${bh.input.body.device_type}`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7qoHlLD6v3vEDs6F(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wRA3zy1ixUn2OBVK',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_7qoHlLD6v3vEDs6F(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body,
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
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_sd_7qoHlLD6v3vEDs6F
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7qoHlLD6v3vEDs6F');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9Wn4N5YnKR0WMbuO(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QHvLs2KqBIpH4scf',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_9Wn4N5YnKR0WMbuO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Wn4N5YnKR0WMbuO');
    }
  }

  async initPayment(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'initPayment',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UsrexzchFYbKGMGbInstance: SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb.flows =
        SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UsrexzchFYbKGMGbInstance.initPayment(
          spanInst,
          bh.input.body['reference_number'],
          bh.input.body['payment_method'],
          bh.input.body['selected_language'],
          bh.input.body['frontend_cb_success_url'],
          bh.input.body['device_type'],
          bh.input.body['frontend_cb_partial_url'],
          bh.input.body['parent_checkout_id']
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Gj6Oy500pYSkJmNK(bh, parentSpanInst);
      //appendnew_next_initPayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vKu6uWl4Z4RivaKc',
        spanInst,
        'initPayment'
      );
    }
  }

  async sd_Gj6Oy500pYSkJmNK(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Gj6Oy500pYSkJmNK');
    }
  }

  async sd_JT9Eo0L4NjgeM4Jz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JT9Eo0L4NjgeM4Jz',
      parentSpanInst
    );
    try {
      if (
        !bh.input.body?.reference_number ||
        !bh.input.body?.status ||
        !bh.input.body?.comment
      ) {
        throw new Error('Invalid Body');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.customerDecisionUpdateCall(bh, parentSpanInst);
      //appendnew_next_sd_JT9Eo0L4NjgeM4Jz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JT9Eo0L4NjgeM4Jz',
        spanInst,
        'sd_JT9Eo0L4NjgeM4Jz'
      );
    }
  }

  async customerDecisionUpdateCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'customerDecisionUpdateCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UsrexzchFYbKGMGbInstance: SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb.flows =
        SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UsrexzchFYbKGMGbInstance.customerPaymentDecision(
          spanInst,
          bh.input.body['status'],
          bh.input.body['reference_number'],
          bh.input.body['comment']
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_fRe0Zcq94rYMDc93(bh, parentSpanInst);
      //appendnew_next_customerDecisionUpdateCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2RQoadhOpl1ZLijY',
        spanInst,
        'customerDecisionUpdateCall'
      );
    }
  }

  async sd_fRe0Zcq94rYMDc93(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fRe0Zcq94rYMDc93');
    }
  }

  async sd_EAhJYgdYqd1Dysb9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EAhJYgdYqd1Dysb9',
      parentSpanInst
    );
    try {
      bh.local.payload = {
        status: 500,
        error: bh.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zN5JNT8xLcLc0brU(bh, parentSpanInst);
      //appendnew_next_sd_EAhJYgdYqd1Dysb9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EAhJYgdYqd1Dysb9',
        spanInst,
        'sd_EAhJYgdYqd1Dysb9'
      );
    }
  }

  async sd_zN5JNT8xLcLc0brU(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.payload.status).send(bh.local.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zN5JNT8xLcLc0brU');
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + `balance_summary`;
      bh.local.body = {
        reference_number: bh.input.body?.['reference_number'],
        parent_checkout_id: bh.input.body?.['parent_checkout_id'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yvjFpWQCx05s97ss(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KVotBjyqsA1PEzVa',
        spanInst,
        'setUrl1'
      );
    }
  }

  async sd_yvjFpWQCx05s97ss(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.body,
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
      await this.sd_BZC2gEMpYpn7gvZE(bh, parentSpanInst);
      //appendnew_next_sd_yvjFpWQCx05s97ss
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yvjFpWQCx05s97ss');
    }
  }

  async sd_BZC2gEMpYpn7gvZE(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BZC2gEMpYpn7gvZE');
    }
  }

  async sd_4llRCubYSFEoOV0U(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4llRCubYSFEoOV0U');
    }
  }

  async fetchPpDetailsCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fetchPpDetailsCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UsrexzchFYbKGMGbInstance: SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb.flows =
        SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UsrexzchFYbKGMGbInstance.fetchPpDetails(
          spanInst,
          bh.input.body['quote_ref_no']
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_OWWFqYEhxTbCxThH(bh, parentSpanInst);
      //appendnew_next_fetchPpDetailsCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_64L575omCjvPJ92D',
        spanInst,
        'fetchPpDetailsCall'
      );
    }
  }

  async sd_OWWFqYEhxTbCxThH(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OWWFqYEhxTbCxThH');
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
      (await this.sd_yClbZMgtCNJu1Wqx(bh, parentSpanInst)) ||
      (await this.sd_71YHAl3jmzar61Mt(bh, parentSpanInst)) ||
      (await this.sd_dTbcgalr73SrLH7M(bh, parentSpanInst))
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
  async sd_yClbZMgtCNJu1Wqx(bh, parentSpanInst) {
    const nodes = [];
    if (nodes.includes(bh.errorSource)) {
      //appendnew_next_sd_yClbZMgtCNJu1Wqx
      return true;
    }
    return false;
  }
  async sd_71YHAl3jmzar61Mt(bh, parentSpanInst) {
    const nodes = ['sd_2RQoadhOpl1ZLijY'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_EAhJYgdYqd1Dysb9(bh, parentSpanInst);
      //appendnew_next_sd_71YHAl3jmzar61Mt
      return true;
    }
    return false;
  }
  async sd_dTbcgalr73SrLH7M(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_4llRCubYSFEoOV0U'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_4llRCubYSFEoOV0U(bh, parentSpanInst);
    //appendnew_next_sd_dTbcgalr73SrLH7M
    return true;
  }
  //appendnew_flow_apis_Catch
}
