// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y from '../Quotes/flow'; //_splitter_
//append_imports_end
export class api {
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
    this.serviceName = 'api';
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
      instance = new api(
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
    //appendnew_flow_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');
    //appendnew_flow_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

    this.app['post'](
      `${this.serviceBasePath}/vehicle/details`,
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
          //appendnew_next_sd_h3J0dtXEFeaDbVFG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_h3J0dtXEFeaDbVFG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/vehicle/image/:eska_make`,
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
          bh = await this.imageUrl(bh, parentSpanInst);
          //appendnew_next_sd_P6WvbjgloRsBLYcd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_P6WvbjgloRsBLYcd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  //appendnew_flow_api_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'vehicle/details';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hwiUxn8BHZhjeNmB(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ayCrukyKlHd0IQNi',
        spanInst,
        'setUrl0'
      );
    }
  }

  async sd_hwiUxn8BHZhjeNmB(bh, parentSpanInst) {
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
      bh = await this.sd_AwoCz1dFXg3ilMs2(bh, parentSpanInst);
      //appendnew_next_sd_hwiUxn8BHZhjeNmB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hwiUxn8BHZhjeNmB');
    }
  }

  async sd_AwoCz1dFXg3ilMs2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AwoCz1dFXg3ilMs2',
      parentSpanInst
    );
    try {
      bh.response = bh.result?.payload || {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_K3rsJJ4gX9U7Zy2j(bh, parentSpanInst);
      //appendnew_next_sd_AwoCz1dFXg3ilMs2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AwoCz1dFXg3ilMs2',
        spanInst,
        'sd_AwoCz1dFXg3ilMs2'
      );
    }
  }

  async sd_K3rsJJ4gX9U7Zy2j(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K3rsJJ4gX9U7Zy2j');
    }
  }

  async sd_34gopBGlAdhK0qIe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_34gopBGlAdhK0qIe',
      parentSpanInst
    );
    try {
      bh.vehicleDetails =
        bh.error?.['response']?.['body'] ||
        'Unable to fetch the vehicle information';
      bh.statusCode = bh.error?.['response']?.['statusCode'] || 200;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_lPowZdK3rf7O2T8y(bh, parentSpanInst);
      //appendnew_next_sd_34gopBGlAdhK0qIe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_34gopBGlAdhK0qIe',
        spanInst,
        'sd_34gopBGlAdhK0qIe'
      );
    }
  }

  async sd_lPowZdK3rf7O2T8y(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.vehicleDetails);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lPowZdK3rf7O2T8y');
    }
  }

  async imageUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('imageUrl', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance: SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow =
        SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7YInstance.getMakeImage(
          spanInst,
          bh.input.params.eska_make
        );
      bh.image_url = outputVariables.local.image_url;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp(bh, parentSpanInst);
      //appendnew_next_imageUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wt85cSS1VBeivckF',
        spanInst,
        'imageUrl'
      );
    }
  }

  async strapiHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.image_url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'arraybuffer',
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

      bh.data = responseMsg;
      bh = await this.sd_N1DxiCFYb2E2KQ14(bh, parentSpanInst);
      //appendnew_next_strapiHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iIsAXpVcB1nmxTfS');
    }
  }

  async sd_N1DxiCFYb2E2KQ14(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N1DxiCFYb2E2KQ14',
      parentSpanInst
    );
    try {
      const { Readable } = require('stream');
      bh.stream = Readable.from(bh.data?.payload);
      bh.headers = {
        'content-type': bh.data?.headers?.['content-type'],
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fswqwzxWTc1Uyz4F(bh, parentSpanInst);
      //appendnew_next_sd_N1DxiCFYb2E2KQ14
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N1DxiCFYb2E2KQ14',
        spanInst,
        'sd_N1DxiCFYb2E2KQ14'
      );
    }
  }

  async sd_fswqwzxWTc1Uyz4F(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      bh.stream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fswqwzxWTc1Uyz4F');
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
      (await this.sd_Zdac5FQK7g79jbqT(bh, parentSpanInst))
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
  async sd_Zdac5FQK7g79jbqT(bh, parentSpanInst) {
    const nodes = ['sd_hwiUxn8BHZhjeNmB'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_34gopBGlAdhK0qIe(bh, parentSpanInst);
      //appendnew_next_sd_Zdac5FQK7g79jbqT
      return true;
    }
    return false;
  }
  //appendnew_flow_api_Catch
}
