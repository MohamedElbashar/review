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

  async getCommsTemplate(
    parentSpanInst,
    code = '',
    params: any = undefined,
    locale = 'en',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getCommsTemplate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        code,
        params,
        locale,
      },
      local: {
        template: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uxWntIl89U4dwf8E(bh, parentSpanInst);
      //appendnew_next_getCommsTemplate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            template: bh.local.template,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jNmCxRdnQrZGAbFX',
        spanInst,
        'getCommsTemplate'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_uxWntIl89U4dwf8E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uxWntIl89U4dwf8E',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.input.code,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uxWntIl89U4dwf8E',
        spanInst,
        'sd_uxWntIl89U4dwf8E'
      );
    }
  }

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url =
        bh.system.environment.STRAPI_URL +
        `/api/communication-templates?populate=digital_code,sms_template,email_template&filters[digital_code][$eq]=${
          bh.input.code
        }&locale=${bh.input.locale || 'en'}`;

      bh.headers = {
        Authorization: 'Bearer ' + bh.system.environment.STRAPI_KEY,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiCall0(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UowhDPdmoVqGQEoC',
        spanInst,
        'setUrl0'
      );
    }
  }

  async strapiCall0(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
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
      requestOptions.proxyConfig = this.sdService.getConfigObj(
        'httpProxy-config',
        'sd_6pKpxe01nfhg0Qhz'
      );
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
      bh = await this.sd_JRtetd20cUa83Ehe(bh, parentSpanInst);
      //appendnew_next_strapiCall0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QO7eVugpfSn53vQM');
    }
  }

  async sd_JRtetd20cUa83Ehe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JRtetd20cUa83Ehe',
      parentSpanInst
    );
    try {
      bh.result = bh.result?.payload?.data || [];
      bh.data = [];
      bh.result.forEach((item) => {
        let obj = item.attributes;
        delete obj['createdAt'];
        delete obj['updatedAt'];
        delete obj['publishedAt'];
        bh.data.push(obj);
      });

      bh.local.template = bh.data?.[0];
      bh.input.params = bh.input.params || [];
      if (bh.local.template) {
        bh.input.params.forEach((x) => {
          if (bh.local.template['sms_template'])
            bh.local.template['sms_template'] = bh.local.template[
              'sms_template'
            ].replace('%%' + x.code + '%%', x.value);
          if (bh.local.template['email_template'])
            bh.local.template['email_template'] = bh.local.template[
              'email_template'
            ].replace('%%' + x.code + '%%', x.value);
        });
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JRtetd20cUa83Ehe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JRtetd20cUa83Ehe',
        spanInst,
        'sd_JRtetd20cUa83Ehe'
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
