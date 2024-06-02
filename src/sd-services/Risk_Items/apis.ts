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
      `${this.serviceBasePath}/risk_item/list`,
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
          //appendnew_next_sd_ehqRAglOKKQFsbBj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ehqRAglOKKQFsbBj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/update`,
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
          bh = await this.setUrl2(bh, parentSpanInst);
          //appendnew_next_sd_reO1A2U263WFNVEu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_reO1A2U263WFNVEu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/delete`,
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
          bh = await this.setUrl3(bh, parentSpanInst);
          //appendnew_next_sd_SSpNVTtuhnEA8lSO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SSpNVTtuhnEA8lSO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/link_product`,
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
          bh = await this.setUrl4(bh, parentSpanInst);
          //appendnew_next_sd_SaijpoNZm3QsUckt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SaijpoNZm3QsUckt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/create`,
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
          bh = await this.setUrl12(bh, parentSpanInst);
          //appendnew_next_sd_z4L98tSbKhREpUka
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z4L98tSbKhREpUka');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/sme/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.setUrl5(bh, parentSpanInst);
          //appendnew_next_sd_09K8UunfZLgKVeBN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_09K8UunfZLgKVeBN');
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
      bh.url = process.env.MS_API_URL + 'risk_item/list';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getVehicleReq(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_poG3tL7JbbabJcr5',
        spanInst,
        'setUrl0'
      );
    }
  }

  async getVehicleReq(bh, parentSpanInst) {
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
      bh = await this.setResponse01(bh, parentSpanInst);
      //appendnew_next_getVehicleReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UBSU0bQ3nUr1XSZ3');
    }
  }

  async setResponse01(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse01',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];
      bh.local.result?.payload?.data.forEach((x) => {
        x.addl_details = JSON.parse(x.addl_details);
        // x.add_ons = JSON.parse(x.add_ons);
        x.premium_details = JSON.parse(x.premium_details);
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_r9cgoWwyUaHVNvQU(bh, parentSpanInst);
      //appendnew_next_setResponse01
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q19gwxx7A9rEKTRN',
        spanInst,
        'setResponse01'
      );
    }
  }

  async sd_r9cgoWwyUaHVNvQU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r9cgoWwyUaHVNvQU');
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'risk_item/update';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ztg78JJEXA2Jl0xW(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yrxviyCcIlFMYYU1',
        spanInst,
        'setUrl2'
      );
    }
  }

  async sd_ztg78JJEXA2Jl0xW(bh, parentSpanInst) {
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
      bh = await this.setResponse03(bh, parentSpanInst);
      //appendnew_next_sd_ztg78JJEXA2Jl0xW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ztg78JJEXA2Jl0xW');
    }
  }

  async setResponse03(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse03',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      await this.sd_paWwd4nfmf5zjRHl(bh, parentSpanInst);
      //appendnew_next_setResponse03
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zKZ04MGzzyyF5pCL',
        spanInst,
        'setResponse03'
      );
    }
  }

  async sd_paWwd4nfmf5zjRHl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_paWwd4nfmf5zjRHl');
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'risk_item/delete';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.delReq(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Td1HUMVtHCQhgSYp',
        spanInst,
        'setUrl3'
      );
    }
  }

  async delReq(bh, parentSpanInst) {
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
      bh = await this.setResponse04(bh, parentSpanInst);
      //appendnew_next_delReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ViRN7Z16TJzQKvy9');
    }
  }

  async setResponse04(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse04',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      await this.sd_kJ2czUCJucTjHf0B(bh, parentSpanInst);
      //appendnew_next_setResponse04
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bZX6Wjc5ukTV9dck',
        spanInst,
        'setResponse04'
      );
    }
  }

  async sd_kJ2czUCJucTjHf0B(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kJ2czUCJucTjHf0B');
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'risk_item/link_product';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.linkReq(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2P1b0bIjt8FXJzMW',
        spanInst,
        'setUrl4'
      );
    }
  }

  async linkReq(bh, parentSpanInst) {
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
      bh = await this.setResponse05(bh, parentSpanInst);
      //appendnew_next_linkReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Btf7roKbwdXKQAEN');
    }
  }

  async setResponse05(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse05',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      await this.sd_65hSXCXQ7oVwfP8S(bh, parentSpanInst);
      //appendnew_next_setResponse05
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bFdGEAxLLt7ie25O',
        spanInst,
        'setResponse05'
      );
    }
  }

  async sd_65hSXCXQ7oVwfP8S(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_65hSXCXQ7oVwfP8S');
    }
  }

  async setUrl12(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl12', parentSpanInst);
    try {
      bh.url = process.env.MS_API_URL + 'risk_item/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createVehicleReq(bh, parentSpanInst);
      //appendnew_next_setUrl12
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GD4dcgDLy6JNNBDU',
        spanInst,
        'setUrl12'
      );
    }
  }

  async createVehicleReq(bh, parentSpanInst) {
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
      bh = await this.setResponse07(bh, parentSpanInst);
      //appendnew_next_createVehicleReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1efQpg2ZPK55gwaL');
    }
  }

  async setResponse07(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse07',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      await this.sd_gWMRQT4b8TAJwk5X(bh, parentSpanInst);
      //appendnew_next_setResponse07
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QiQPu1jsm4NZMYuk',
        spanInst,
        'setResponse07'
      );
    }
  }

  async sd_gWMRQT4b8TAJwk5X(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gWMRQT4b8TAJwk5X');
    }
  }

  async setUrl5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl5', parentSpanInst);
    try {
      const axios = require('axios');
      const FormData = require('form-data');

      const formData = new FormData();

      formData.append('id_no', bh.input.body.id_no);
      formData.append('quote_id', bh.input.body.quote_id);

      const fileData = bh.input.files.file[0];

      const fileBuffer = Buffer.from(fileData.buffer);
      formData.append('file', fileBuffer, {
        filename: fileData.originalname,
        contentType: fileData.mimetype,
      });

      bh.url = process.env.MS_API_URL + 'risk_item/sme/upload';

      bh.response = await axios.post(bh.url, formData, {
        headers: {
          ...formData.getHeaders(),
        },
        responseType: 'json',
      });

      bh.response = bh.response?.data;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_mKsHlXp7rRcL9Xdn(bh, parentSpanInst);
      //appendnew_next_setUrl5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g11YHA0nwC1Rj30p',
        spanInst,
        'setUrl5'
      );
    }
  }

  async sd_mKsHlXp7rRcL9Xdn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mKsHlXp7rRcL9Xdn');
    }
  }

  async sd_XNNWjwWHBXzn7ZCa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XNNWjwWHBXzn7ZCa',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_W6aiYLPtt04HpfHH(bh, parentSpanInst);
      //appendnew_next_sd_XNNWjwWHBXzn7ZCa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XNNWjwWHBXzn7ZCa',
        spanInst,
        'sd_XNNWjwWHBXzn7ZCa'
      );
    }
  }

  async sd_W6aiYLPtt04HpfHH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W6aiYLPtt04HpfHH');
    }
  }

  async sd_3P7ltQSIv21GZRYR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3P7ltQSIv21GZRYR',
      parentSpanInst
    );
    try {
      bh.response = bh.error?.response?.body;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BZpR2X1ezQnDW3WT(bh, parentSpanInst);
      //appendnew_next_sd_3P7ltQSIv21GZRYR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3P7ltQSIv21GZRYR',
        spanInst,
        'sd_3P7ltQSIv21GZRYR'
      );
    }
  }

  async sd_BZpR2X1ezQnDW3WT(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BZpR2X1ezQnDW3WT');
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
      (await this.sd_2AmvITRFWaAzV1T3(bh, parentSpanInst)) ||
      (await this.sd_6mAU3GawwT9nCsCT(bh, parentSpanInst))
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
  async sd_2AmvITRFWaAzV1T3(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_XNNWjwWHBXzn7ZCa', 'sd_W6aiYLPtt04HpfHH'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_XNNWjwWHBXzn7ZCa(bh, parentSpanInst);
    //appendnew_next_sd_2AmvITRFWaAzV1T3
    return true;
  }
  async sd_6mAU3GawwT9nCsCT(bh, parentSpanInst) {
    const nodes = [];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_3P7ltQSIv21GZRYR(bh, parentSpanInst);
      //appendnew_next_sd_6mAU3GawwT9nCsCT
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
