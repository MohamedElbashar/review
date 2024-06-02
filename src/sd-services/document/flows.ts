// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
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

  async getRequiredFiles(
    parentSpanInst,
    lob_id: any = undefined,
    customer_type_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getRequiredFiles',
      parentSpanInst
    );
    let bh: any = {
      input: {
        lob_id,
        customer_type_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Tq2HD0Rj4hxAR5Hg(bh, parentSpanInst);
      //appendnew_next_getRequiredFiles
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vrFxP54tX5OsDKI5',
        spanInst,
        'getRequiredFiles'
      );
    }
  }

  async getMetadata(parentSpanInst, id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMetadata',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_migk5mFo2hhMDHD9(bh, parentSpanInst);
      //appendnew_next_getMetadata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NkvdUytEJ0cUw9mg',
        spanInst,
        'getMetadata'
      );
    }
  }

  async deleteDocument(parentSpanInst, filepath: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'deleteDocument',
      parentSpanInst
    );
    let bh: any = {
      input: {
        filepath,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Dg7VratQ32DoobFi(bh, parentSpanInst);
      //appendnew_next_deleteDocument
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1G883uWL3fmOA4SR',
        spanInst,
        'deleteDocument'
      );
    }
  }

  async deleteMetadata(parentSpanInst, id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'deleteMetadata',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rexB7gZu3443cJ1E(bh, parentSpanInst);
      //appendnew_next_deleteMetadata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sBIwwdBDD7MTtj9H',
        spanInst,
        'deleteMetadata'
      );
    }
  }

  async uploadDocuments(
    parentSpanInst,
    filedata: any = undefined,
    filepath: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'uploadDocuments',
      parentSpanInst
    );
    let bh: any = {
      input: {
        filedata,
        filepath,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GMnPrINipzFndsuL(bh, parentSpanInst);
      //appendnew_next_uploadDocuments
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TM4qRBsdPqUOw8SI',
        spanInst,
        'uploadDocuments'
      );
    }
  }

  async updateMetadata(
    parentSpanInst,
    mime_type: any = undefined,
    filepath: any = undefined,
    filename: any = undefined,
    quote_id: any = undefined,
    risk_id: any = undefined,
    doc_type_id: any = undefined,
    doc_sub_type_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateMetadata',
      parentSpanInst
    );
    let bh: any = {
      input: {
        mime_type,
        filepath,
        filename,
        quote_id,
        risk_id,
        doc_type_id,
        doc_sub_type_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_izq5ElgmrKmAUkR3(bh, parentSpanInst);
      //appendnew_next_updateMetadata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_csU3kwqHSRktI43T',
        spanInst,
        'updateMetadata'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_Tq2HD0Rj4hxAR5Hg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tq2HD0Rj4hxAR5Hg',
      parentSpanInst
    );
    try {
      bh.search = {
        search_type: 'files',
        filter: {
          lob_id: bh.input.lob_id.toString(),
          cust_type_id: bh.input.customer_type_id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZzDqNGN0La4XxXPc(bh, parentSpanInst);
      //appendnew_next_sd_Tq2HD0Rj4hxAR5Hg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tq2HD0Rj4hxAR5Hg',
        spanInst,
        'sd_Tq2HD0Rj4hxAR5Hg'
      );
    }
  }

  async sd_ZzDqNGN0La4XxXPc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZzDqNGN0La4XxXPc',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LMyjyWdfu7NurB49(bh, parentSpanInst);
      //appendnew_next_sd_ZzDqNGN0La4XxXPc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZzDqNGN0La4XxXPc',
        spanInst,
        'sd_ZzDqNGN0La4XxXPc'
      );
    }
  }

  async sd_LMyjyWdfu7NurB49(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LMyjyWdfu7NurB49',
      parentSpanInst
    );
    try {
      const input = bh.result;
      const transformedOutput = input.reduce(
        (result, item) => {
          const existingDocType = result.required_documents.find(
            (doc) => doc.document_type_id === item.doc_type_id
          );

          if (existingDocType) {
            existingDocType.documents.push({
              doc_sub_type_id: item.doc_sub_type_id,
              doc_sub_type: item.doc_sub_type,
            });
          } else {
            result.required_documents.push({
              document_type_id: item.doc_type_id,
              doc_type: item.doc_type,
              documents: [
                {
                  doc_sub_type_id: item.doc_sub_type_id,
                  doc_sub_type: item.doc_sub_type,
                },
              ],
            });
          }

          return result;
        },
        {
          lob_id: input[0].lob_id,
          lob_text: input[0].lob_text,
          cust_type_id: input[0].cust_type_id,
          cust_type_text: input[0].cust_type_text,
          code_identifier: input[0].code_identifier,
          product_add_on_code: input[0].product_add_on_code,
          required_documents: [],
        }
      );

      bh.local.result = transformedOutput;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LMyjyWdfu7NurB49
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LMyjyWdfu7NurB49',
        spanInst,
        'sd_LMyjyWdfu7NurB49'
      );
    }
  }

  async sd_migk5mFo2hhMDHD9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_migk5mFo2hhMDHD9',
      parentSpanInst
    );
    try {
      bh.body = {
        filter: { id: bh.input.id },
        orderBy: {},
        pageSize: 0,
        offSet: 0,
      };

      bh.url = process.env.DB_API_URL + 'dm/digital/file_metadata/find-all';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x4aEwIxQMXaLvlGh(bh, parentSpanInst);
      //appendnew_next_sd_migk5mFo2hhMDHD9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_migk5mFo2hhMDHD9',
        spanInst,
        'sd_migk5mFo2hhMDHD9'
      );
    }
  }

  async sd_x4aEwIxQMXaLvlGh(bh, parentSpanInst) {
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
      bh = await this.sd_rlCVf9eU6opG9Tw4(bh, parentSpanInst);
      //appendnew_next_sd_x4aEwIxQMXaLvlGh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x4aEwIxQMXaLvlGh');
    }
  }

  async sd_rlCVf9eU6opG9Tw4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rlCVf9eU6opG9Tw4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_rlCVf9eU6opG9Tw4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rlCVf9eU6opG9Tw4',
        spanInst,
        'sd_rlCVf9eU6opG9Tw4'
      );
    }
  }

  async sd_Dg7VratQ32DoobFi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dg7VratQ32DoobFi',
      parentSpanInst
    );
    try {
      bh.url = process.env.DOC_MS_URL + 'delete-document';
      bh.body = {
        filepath: bh.input.filepath,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BMA04tzMgYZchT7R(bh, parentSpanInst);
      //appendnew_next_sd_Dg7VratQ32DoobFi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dg7VratQ32DoobFi',
        spanInst,
        'sd_Dg7VratQ32DoobFi'
      );
    }
  }

  async sd_BMA04tzMgYZchT7R(bh, parentSpanInst) {
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
      bh = await this.sd_H0U6HY51im3RjHkr(bh, parentSpanInst);
      //appendnew_next_sd_BMA04tzMgYZchT7R
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BMA04tzMgYZchT7R');
    }
  }

  async sd_H0U6HY51im3RjHkr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H0U6HY51im3RjHkr',
      parentSpanInst
    );
    try {
      // const fs = require('fs');
      // bh.attachments = [];
      // if (bh.input.files?.file) {
      //     bh.input.files.file.forEach((FILE) => {
      //         bh.attachments.push({
      //             filename: FILE.originalname,
      //             content: fs.readFileSync(FILE.path)
      //         });
      //     });
      // }
      bh.local.result = bh.result.payload;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_H0U6HY51im3RjHkr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H0U6HY51im3RjHkr',
        spanInst,
        'sd_H0U6HY51im3RjHkr'
      );
    }
  }

  async sd_rexB7gZu3443cJ1E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rexB7gZu3443cJ1E',
      parentSpanInst
    );
    try {
      bh.body = {
        filter: { id: bh.input.id },
      };

      bh.url = process.env.DB_API_URL + 'dm/digital/file_metadata/delete-by-id';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YaQov4ceGRm5AsH5(bh, parentSpanInst);
      //appendnew_next_sd_rexB7gZu3443cJ1E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rexB7gZu3443cJ1E',
        spanInst,
        'sd_rexB7gZu3443cJ1E'
      );
    }
  }

  async sd_YaQov4ceGRm5AsH5(bh, parentSpanInst) {
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
      bh = await this.sd_JDKDL2VErPQbHQyB(bh, parentSpanInst);
      //appendnew_next_sd_YaQov4ceGRm5AsH5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YaQov4ceGRm5AsH5');
    }
  }

  async sd_JDKDL2VErPQbHQyB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JDKDL2VErPQbHQyB',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JDKDL2VErPQbHQyB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JDKDL2VErPQbHQyB',
        spanInst,
        'sd_JDKDL2VErPQbHQyB'
      );
    }
  }

  async sd_GMnPrINipzFndsuL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GMnPrINipzFndsuL',
      parentSpanInst
    );
    try {
      bh.url = process.env.DOC_MS_URL + 'upload-document';

      bh.body = {
        data: bh.input.filedata,
        filepath: bh.input.filepath,
      };
      console.log(bh.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.uploadHttp(bh, parentSpanInst);
      //appendnew_next_sd_GMnPrINipzFndsuL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GMnPrINipzFndsuL',
        spanInst,
        'sd_GMnPrINipzFndsuL'
      );
    }
  }

  async uploadHttp(bh, parentSpanInst) {
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
      bh = await this.sd_1QDN7FuiiwCOgqtA(bh, parentSpanInst);
      //appendnew_next_uploadHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sRWHFibl4SQFB2wv');
    }
  }

  async sd_1QDN7FuiiwCOgqtA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1QDN7FuiiwCOgqtA',
      parentSpanInst
    );
    try {
      // const fs = require('fs');
      // bh.attachments = [];
      // if (bh.input.files?.file) {
      //     bh.input.files.file.forEach((FILE) => {
      //         bh.attachments.push({
      //             filename: FILE.originalname,
      //             content: fs.readFileSync(FILE.path)
      //         });
      //     });
      // }
      bh.local.result = bh.result.payload;
      console.log('asDASD', bh.input.files);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1QDN7FuiiwCOgqtA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1QDN7FuiiwCOgqtA',
        spanInst,
        'sd_1QDN7FuiiwCOgqtA'
      );
    }
  }

  async sd_izq5ElgmrKmAUkR3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_izq5ElgmrKmAUkR3',
      parentSpanInst
    );
    try {
      bh.body = {
        file_metadata: {
          mime_type: bh.input.mime_type,
          filepath: bh.input.filepath,
          filename: bh.input.filename,
          quote_id: bh.input.quote_id,
          risk_id: parseInt(bh.input.risk_id),
          doc_type_id: parseInt(bh.input.doc_type_id),
          doc_sub_type_id: parseInt(bh.input.doc_sub_type_id),
        },
      };

      console.log(bh.body);
      bh.url = process.env.DB_API_URL + 'dm/digital/file_metadata/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ivlEDlvW5arueCzA(bh, parentSpanInst);
      //appendnew_next_sd_izq5ElgmrKmAUkR3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_izq5ElgmrKmAUkR3',
        spanInst,
        'sd_izq5ElgmrKmAUkR3'
      );
    }
  }

  async sd_ivlEDlvW5arueCzA(bh, parentSpanInst) {
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
      bh = await this.sd_hwShnjNQit5lgYdm(bh, parentSpanInst);
      //appendnew_next_sd_ivlEDlvW5arueCzA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ivlEDlvW5arueCzA');
    }
  }

  async sd_hwShnjNQit5lgYdm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hwShnjNQit5lgYdm',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;
      console.log('bh.result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_hwShnjNQit5lgYdm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hwShnjNQit5lgYdm',
        spanInst,
        'sd_hwShnjNQit5lgYdm'
      );
    }
  }

  async sd_17KDhm4HfB84mSY9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_17KDhm4HfB84mSY9',
      parentSpanInst
    );
    try {
      bh.result = bh.error;

      console.log('bh.error', bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_17KDhm4HfB84mSY9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_17KDhm4HfB84mSY9',
        spanInst,
        'sd_17KDhm4HfB84mSY9'
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
      (await this.sd_wTS0LdVCMZVgZ2zi(bh, parentSpanInst))
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
  async sd_wTS0LdVCMZVgZ2zi(bh, parentSpanInst) {
    const nodes = ['sd_sRWHFibl4SQFB2wv'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_17KDhm4HfB84mSY9(bh, parentSpanInst);
      //appendnew_next_sd_wTS0LdVCMZVgZ2zi
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
