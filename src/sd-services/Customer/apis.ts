// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
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
      `${this.serviceBasePath}/customer/details`,
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
          //appendnew_next_sd_ZpAm9KbWRPtn6zuJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZpAm9KbWRPtn6zuJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
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
      bh.url = process.env.MS_API_URL + 'customer/details';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WkInnx0kUACNsYIG(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MiAvIMVTZmyZIHoV',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_WkInnx0kUACNsYIG(bh, parentSpanInst) {
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
      bh = await this.sd_UNhPputL0tldUeaQ(bh, parentSpanInst);
      //appendnew_next_sd_WkInnx0kUACNsYIG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WkInnx0kUACNsYIG');
    }
  }

  async sd_UNhPputL0tldUeaQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UNhPputL0tldUeaQ',
      parentSpanInst
    );
    try {
      bh.customer_details = bh.result['payload'];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LnTA2j4uAwWNU7g4(bh, parentSpanInst);
      //appendnew_next_sd_UNhPputL0tldUeaQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UNhPputL0tldUeaQ',
        spanInst,
        'sd_UNhPputL0tldUeaQ'
      );
    }
  }

  async sd_LnTA2j4uAwWNU7g4(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.customer_details);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LnTA2j4uAwWNU7g4');
    }
  }

  async sd_RGFjBNMpS3oyFkTF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RGFjBNMpS3oyFkTF',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_i1he11WeXD5Vitg9(bh, parentSpanInst);
      //appendnew_next_sd_RGFjBNMpS3oyFkTF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RGFjBNMpS3oyFkTF',
        spanInst,
        'sd_RGFjBNMpS3oyFkTF'
      );
    }
  }

  async sd_i1he11WeXD5Vitg9(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i1he11WeXD5Vitg9');
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
      (await this.sd_MHKjqwHFDr6Hlmix(bh, parentSpanInst))
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
  async sd_MHKjqwHFDr6Hlmix(bh, parentSpanInst) {
    const nodes = ['sd_WkInnx0kUACNsYIG'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_RGFjBNMpS3oyFkTF(bh, parentSpanInst);
      //appendnew_next_sd_MHKjqwHFDr6Hlmix
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
