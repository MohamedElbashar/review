// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ from './flows'; //_splitter_
//append_imports_end
export class quote_api {
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
    this.serviceName = 'quote_api';
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
      instance = new quote_api(
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
    //appendnew_flow_quote_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: quote_api');
    //appendnew_flow_quote_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: quote_api');

    this.app['post'](
      `${this.serviceBasePath}/quote/summary`,
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
          bh = await this.getQuoteSummary(bh, parentSpanInst);
          //appendnew_next_sd_BnKw7UVOJkv6Fovm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BnKw7UVOJkv6Fovm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/summary-pdf`,
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
          bh = await this.setBody14(bh, parentSpanInst);
          //appendnew_next_sd_WCWOZgimR7DBozJQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WCWOZgimR7DBozJQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/send-upload-sms`,
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
          bh = await this.sd_VVHeeWjEjdi9FlJK(bh, parentSpanInst);
          //appendnew_next_sd_17GDT77cbTtRM5PG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_17GDT77cbTtRM5PG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_quote_api_HttpIn
  }
  //   service flows_quote_api

  //appendnew_flow_quote_api_start

  async getQuoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance: SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows =
        SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance.quoteSummary(
          spanInst,
          bh.input.body.id,
          bh.input.body.reference_number,
          bh.input.body.phone_no
        );
      bh.status_code = outputVariables.local.status_code;
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_XWwCZqDcHzyuq5oC(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZQIOyxVXOUanSmOB',
        spanInst,
        'getQuoteSummary'
      );
    }
  }

  async sd_XWwCZqDcHzyuq5oC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XWwCZqDcHzyuq5oC');
    }
  }

  async setBody14(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody14', parentSpanInst);
    try {
      bh.user_id = bh.session?.data?.userInfo?.['user_id'];
      bh.tenant_id = bh.session?.data?.userInfo?.tenant_info?.['tenant_id'];

      // bh.user_id = 45
      // bh.tenant_id = 22
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getQuoteSummary1(bh, parentSpanInst);
      //appendnew_next_setBody14
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cx9UePiRJ0kGw2HH',
        spanInst,
        'setBody14'
      );
    }
  }

  async getQuoteSummary1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteSummary1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance: SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows =
        SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance.quoteSummary(
          spanInst,
          bh.input.body.id,
          bh.input.body.reference_number,
          bh.input.body.phone_no
        );
      bh.status_code = outputVariables.local.status_code;
      bh.quote_summary = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GSBZdY9mpRdv9LJJ(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EbjbhlJnNgcevlC7',
        spanInst,
        'getQuoteSummary1'
      );
    }
  }

  async sd_GSBZdY9mpRdv9LJJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GSBZdY9mpRdv9LJJ',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs'); // If writing to a file is necessary

      bh.url = process.env.DOC_MS_URL + 'document/quote/summary/';

      bh.body = {
        quote_summary: bh.quote_summary,
      };

      bh.headers = {
        'Content-Type': 'application/json',
      };

      axios
        .post(bh.url, bh.body, {
          headers: {
            ...bh.headers,
            ...bh.httpsAgent,
          },
          responseType: 'stream', // Ensure response data is treated as a stream
        })
        .then((resp) => {
          const contentDisposition = resp.headers['content-disposition'];
          const contentType = resp.headers['content-type'];

          // Set response headers
          bh.web.res.setHeader('content-disposition', contentDisposition);
          bh.web.res.setHeader('Content-type', contentType);
          resp.data.pipe(bh.web.res);
        })
        .catch((error) => {
          console.error('Error:', error);
          bh.web.res.status(500).send('Internal Server Error');
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GSBZdY9mpRdv9LJJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GSBZdY9mpRdv9LJJ',
        spanInst,
        'sd_GSBZdY9mpRdv9LJJ'
      );
    }
  }

  async sd_VVHeeWjEjdi9FlJK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VVHeeWjEjdi9FlJK',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'quote/send-upload-sms';
      bh.input.body['link'] = process.env.UPLOAD_VEHICLE_IMAGE_URL;
      bh.input.body['query_mode'] = 'CA';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FqPHVsBdhNCml1fB(bh, parentSpanInst);
      //appendnew_next_sd_VVHeeWjEjdi9FlJK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VVHeeWjEjdi9FlJK',
        spanInst,
        'sd_VVHeeWjEjdi9FlJK'
      );
    }
  }

  async sd_FqPHVsBdhNCml1fB(bh, parentSpanInst) {
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
      bh = await this.sd_WOM3fQOWxx1ApuZZ(bh, parentSpanInst);
      //appendnew_next_sd_FqPHVsBdhNCml1fB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FqPHVsBdhNCml1fB');
    }
  }

  async sd_WOM3fQOWxx1ApuZZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WOM3fQOWxx1ApuZZ',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mhPn6OQTIeiRc3a1(bh, parentSpanInst);
      //appendnew_next_sd_WOM3fQOWxx1ApuZZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WOM3fQOWxx1ApuZZ',
        spanInst,
        'sd_WOM3fQOWxx1ApuZZ'
      );
    }
  }

  async sd_mhPn6OQTIeiRc3a1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mhPn6OQTIeiRc3a1');
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
  //appendnew_flow_quote_api_Catch
}
