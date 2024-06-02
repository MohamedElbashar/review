// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
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
      `${this.serviceBasePath}/quote/customer/required-files`,
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
          bh = await this.sd_3iLjFRa7Gd3RaIQ7(bh, parentSpanInst);
          //appendnew_next_sd_tNzxcLoGnB20VtC9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tNzxcLoGnB20VtC9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/delete`,
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
          bh = await this.sd_Qi1FlhMR0Z6Rlj80(bh, parentSpanInst);
          //appendnew_next_sd_PUbukEihz56z16C3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PUbukEihz56z16C3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: (os.tmpdir() + '').replace(/\\|\//g, sep),
        options: [{ name: 'documents', maxCount: 5 }],
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
          bh = await this.sd_5IzBB9cSvA9sLLQ6(bh, parentSpanInst);
          //appendnew_next_sd_keOS32FVYvDEd3pk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_keOS32FVYvDEd3pk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/upload-image-sms`,
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
          bh = await this.sd_pB1mkgUmmA68DuDi(bh, parentSpanInst);
          //appendnew_next_sd_TMAoxvXZjMU5nvHt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TMAoxvXZjMU5nvHt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/zatka/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_auth',
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: (os.tmpdir() + '').replace(/\\|\//g, sep),
        options: [{ name: 'documents', maxCount: 5 }],
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
          bh = await this.sd_zrsvYjAVbCuVzcWw(bh, parentSpanInst);
          //appendnew_next_sd_QobaNUiQTKb4TDpe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QobaNUiQTKb4TDpe');
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

  async sd_3iLjFRa7Gd3RaIQ7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3iLjFRa7Gd3RaIQ7',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'quote/customer/required-files';
      bh.input.body['query_mode'] = 'CA';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gjhHmlLN1BPn1UHv(bh, parentSpanInst);
      //appendnew_next_sd_3iLjFRa7Gd3RaIQ7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3iLjFRa7Gd3RaIQ7',
        spanInst,
        'sd_3iLjFRa7Gd3RaIQ7'
      );
    }
  }

  async sd_gjhHmlLN1BPn1UHv(bh, parentSpanInst) {
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
      bh = await this.sd_OqffUIkTo1FhhJ7M(bh, parentSpanInst);
      //appendnew_next_sd_gjhHmlLN1BPn1UHv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gjhHmlLN1BPn1UHv');
    }
  }

  async sd_OqffUIkTo1FhhJ7M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OqffUIkTo1FhhJ7M',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.result.statusCode;
      bh.response = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BbOvtZheceCQdCxK(bh, parentSpanInst);
      //appendnew_next_sd_OqffUIkTo1FhhJ7M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OqffUIkTo1FhhJ7M',
        spanInst,
        'sd_OqffUIkTo1FhhJ7M'
      );
    }
  }

  async sd_BbOvtZheceCQdCxK(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BbOvtZheceCQdCxK');
    }
  }

  async sd_Qi1FlhMR0Z6Rlj80(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qi1FlhMR0Z6Rlj80',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'delete';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteReq(bh, parentSpanInst);
      //appendnew_next_sd_Qi1FlhMR0Z6Rlj80
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qi1FlhMR0Z6Rlj80',
        spanInst,
        'sd_Qi1FlhMR0Z6Rlj80'
      );
    }
  }

  async deleteReq(bh, parentSpanInst) {
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
      bh = await this.sd_bXCGNgBSBH6V9egE(bh, parentSpanInst);
      //appendnew_next_deleteReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FoPSOlRCPbvEWMB6');
    }
  }

  async sd_bXCGNgBSBH6V9egE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bXCGNgBSBH6V9egE',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.result.statusCode;
      bh.response = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EsWl0gqooOSuUp71(bh, parentSpanInst);
      //appendnew_next_sd_bXCGNgBSBH6V9egE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bXCGNgBSBH6V9egE',
        spanInst,
        'sd_bXCGNgBSBH6V9egE'
      );
    }
  }

  async sd_EsWl0gqooOSuUp71(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EsWl0gqooOSuUp71');
    }
  }

  async sd_5IzBB9cSvA9sLLQ6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5IzBB9cSvA9sLLQ6',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs');
      const FormData = require('form-data');

      const emailData = new FormData();

      emailData.append('doc_type_id', bh.input.body.doc_type_id);
      emailData.append('doc_sub_type_id', bh.input.body.doc_sub_type_id);
      emailData.append('risk_id', bh.input.body.risk_id);
      emailData.append('image_type', bh.input.body.image_type);
      emailData.append('reference_number', bh.input.body.reference_number);
      emailData.append('query_mode', 'CA');

      const filePath = bh.input.files.documents[0].path;

      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        emailData.append('documents', data, {
          filename: bh.input.files.documents[0].originalname,
          contentType: bh.input.files.documents[0].mimetype,
        });

        // Sales MS to upload file and insert metadata
        const url = process.env.MS_API_URL + 'upload';
        const emailHeaders = {
          ...emailData.getHeaders(),
        };
        axios
          .post(url, emailData, {
            headers: emailHeaders,
          })
          .then((response) => {
            bh.local.result = { status: true, data: response.data };
            bh.web.res.status(201).send(bh.local.result);
          })
          .catch((error) => {
            bh.local.result = {
              status: false,
              message: 'Invalid Risk ID or Reference Number',
            };
            bh.web.res.status(500).send(bh.local.result);
          });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5IzBB9cSvA9sLLQ6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5IzBB9cSvA9sLLQ6',
        spanInst,
        'sd_5IzBB9cSvA9sLLQ6'
      );
    }
  }

  async sd_YYoTMjb7tn8yHV5E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YYoTMjb7tn8yHV5E',
      parentSpanInst
    );
    try {
      bh.response = { status: false, message: 'Invalid ID' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DyHvMGREtrG10K9K(bh, parentSpanInst);
      //appendnew_next_sd_YYoTMjb7tn8yHV5E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YYoTMjb7tn8yHV5E',
        spanInst,
        'sd_YYoTMjb7tn8yHV5E'
      );
    }
  }

  async sd_DyHvMGREtrG10K9K(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DyHvMGREtrG10K9K');
    }
  }

  async sd_pB1mkgUmmA68DuDi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pB1mkgUmmA68DuDi',
      parentSpanInst
    );
    try {
      bh.url = process.env.MS_API_URL + 'quote/send-upload-sms';
      bh.input.body['link'] = process.env.UPLOAD_VEHICLE_IMAGE_URL;
      bh.input.body['query_mode'] = 'ESKA';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DTFLkqUqq0KgoXzv(bh, parentSpanInst);
      //appendnew_next_sd_pB1mkgUmmA68DuDi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pB1mkgUmmA68DuDi',
        spanInst,
        'sd_pB1mkgUmmA68DuDi'
      );
    }
  }

  async sd_DTFLkqUqq0KgoXzv(bh, parentSpanInst) {
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
      bh = await this.sd_AWXe2jIvQYrebUdx(bh, parentSpanInst);
      //appendnew_next_sd_DTFLkqUqq0KgoXzv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DTFLkqUqq0KgoXzv');
    }
  }

  async sd_AWXe2jIvQYrebUdx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AWXe2jIvQYrebUdx',
      parentSpanInst
    );
    try {
      bh.response = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Rlft6w4ees9Izxsg(bh, parentSpanInst);
      //appendnew_next_sd_AWXe2jIvQYrebUdx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AWXe2jIvQYrebUdx',
        spanInst,
        'sd_AWXe2jIvQYrebUdx'
      );
    }
  }

  async sd_Rlft6w4ees9Izxsg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rlft6w4ees9Izxsg');
    }
  }

  async sd_zrsvYjAVbCuVzcWw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zrsvYjAVbCuVzcWw',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs');
      const FormData = require('form-data');

      const emailData = new FormData();

      emailData.append('id', bh.input.body.id);
      emailData.append('query_mode', 'CA');

      const filePath = bh.input.files.documents[0].path;

      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        emailData.append('documents', data, {
          filename: bh.input.files.documents[0].originalname,
          contentType: bh.input.files.documents[0].mimetype,
        });

        // Sales MS to upload file and insert metadata
        const url = process.env.MS_API_URL + 'zatka/upload';
        const emailHeaders = {
          ...emailData.getHeaders(),
        };
        axios
          .post(url, emailData, {
            headers: emailHeaders,
          })
          .then((response) => {
            bh.local.result = response.data;
            bh.web.res.status(201).send(bh.local.result);
          })
          .catch((error) => {
            bh.local.result = {
              status: false,
              message: 'Failed to upload the document. Please try again',
            };
            bh.web.res.status(500).send(bh.local.result);
          });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zrsvYjAVbCuVzcWw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zrsvYjAVbCuVzcWw',
        spanInst,
        'sd_zrsvYjAVbCuVzcWw'
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
      (await this.sd_vjzfNUhPKGi7OWQ6(bh, parentSpanInst))
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
  async sd_vjzfNUhPKGi7OWQ6(bh, parentSpanInst) {
    const nodes = ['sd_FoPSOlRCPbvEWMB6'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_YYoTMjb7tn8yHV5E(bh, parentSpanInst);
      //appendnew_next_sd_vjzfNUhPKGi7OWQ6
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
