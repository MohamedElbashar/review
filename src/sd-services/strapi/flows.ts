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

  async getStrapiTemplate(parentSpanInst, templateKey = 'quote', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getStrapiTemplate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        templateKey,
      },
      local: {
        templateSource: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_imyJVAj6T4zRDvkm(bh, parentSpanInst);
      //appendnew_next_getStrapiTemplate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            templateSource: bh.local.templateSource,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xKZw0WOGfwO5pgsy',
        spanInst,
        'getStrapiTemplate'
      );
    }
  }

  async getStrapiCoverTemplate(
    parentSpanInst,
    templateKey = 'quote',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getStrapiCoverTemplate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        templateKey,
      },
      local: {
        templateSource: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_P4K4iRD5VS8UMpxX(bh, parentSpanInst);
      //appendnew_next_getStrapiCoverTemplate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            templateSource: bh.local.templateSource,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XSHz10sHgXouuJJ9',
        spanInst,
        'getStrapiCoverTemplate'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_imyJVAj6T4zRDvkm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_imyJVAj6T4zRDvkm',
      parentSpanInst
    );
    try {
      bh.url = process.env.QUOATAION_TEMPLATE_URL;
      // https://dev-strapi.alrajhitakaful.com/uploads/quotation_template_b7701d0699.html
      // if(bh.input.templateKey === 'quote'){
      //     bh.url += "uploads/quotation_template_b7701d0699.html"
      // }
      console.log(bh.url);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp(bh, parentSpanInst);
      //appendnew_next_sd_imyJVAj6T4zRDvkm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_imyJVAj6T4zRDvkm',
        spanInst,
        'sd_imyJVAj6T4zRDvkm'
      );
    }
  }

  async strapiHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
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
      bh = await this.strapiTemplate(bh, parentSpanInst);
      //appendnew_next_strapiHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WzbXrkHu49eGEIH0');
    }
  }

  async strapiTemplate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'strapiTemplate',
      parentSpanInst
    );
    try {
      const buffer = Buffer.from(bh.data?.payload);
      bh.local.templateSource = buffer.toString('utf8');
      console.log(bh.local.templateSource);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_strapiTemplate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nNUq68OQ0PVVsQof',
        spanInst,
        'strapiTemplate'
      );
    }
  }

  async sd_P4K4iRD5VS8UMpxX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P4K4iRD5VS8UMpxX',
      parentSpanInst
    );
    try {
      bh.url = process.env.COVER_TEMPLATE_URL;
      // https://dev-strapi.alrajhitakaful.com/uploads/quotation_template_b7701d0699.html
      // if(bh.input.templateKey === 'quote'){
      //     bh.url += "uploads/quotation_template_b7701d0699.html"
      // }
      console.log(bh.url);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp1(bh, parentSpanInst);
      //appendnew_next_sd_P4K4iRD5VS8UMpxX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P4K4iRD5VS8UMpxX',
        spanInst,
        'sd_P4K4iRD5VS8UMpxX'
      );
    }
  }

  async strapiHttp1(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
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
      bh = await this.strapiTemplate1(bh, parentSpanInst);
      //appendnew_next_strapiHttp1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wyBVI6WEFXJRH2SF');
    }
  }

  async strapiTemplate1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'strapiTemplate1',
      parentSpanInst
    );
    try {
      const buffer = Buffer.from(bh.data?.payload);
      bh.local.templateSource = buffer.toString('utf8');
      // console.log(bh.local.templateSource)
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_strapiTemplate1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i9awzVxDezCRtDLi',
        spanInst,
        'strapiTemplate1'
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
  //appendnew_flow_flows_Catch
}
