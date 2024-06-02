// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO from '../master_data/flows'; //_splitter_
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
      bh = await this.sd_jIUQx13pR869VnpF(bh, parentSpanInst);
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
        'sd_6Nbx2NsI8MsZLNLS',
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
      bh = await this.sd_x5TX2ktHsXOLfSmT(bh, parentSpanInst);
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
        'sd_21zloqKfV5eyHDAv',
        spanInst,
        'updateMetadata'
      );
    }
  }

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
      bh = await this.sd_L5tRl4S9w1LtvrZQ(bh, parentSpanInst);
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
        'sd_Epvypr6WstvSnMfw',
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
      bh = await this.sd_X96LMFPGacrurApo(bh, parentSpanInst);
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
        'sd_UwikD8cDuV6MVE51',
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
      bh = await this.sd_CtDt34hBMjnb9itG(bh, parentSpanInst);
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
        'sd_PSNhsdIpWMnpremn',
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
      bh = await this.sd_mWwWMQTaSivgASh5(bh, parentSpanInst);
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
        'sd_8mQmV1N8rFXLFvvQ',
        spanInst,
        'deleteMetadata'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_jIUQx13pR869VnpF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jIUQx13pR869VnpF',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs');
      const FormData = require('form-data');

      const emailData = new FormData();
      emailData.append('filepath', bh.input.filepath);

      const filePath = bh.input.filedata.documents[0].path;

      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        console.log(data);
        emailData.append('documents', data, {
          filename: bh.input.filedata.documents[0].originalname,
          contentType: bh.input.filedata.documents[0].mimetype,
        });

        const url = process.env.DOC_MS_URL + 'upload-document';
        const emailHeaders = {
          ...emailData.getHeaders(),
        };
        axios
          .post(url, emailData, {
            headers: emailHeaders,
          })
          .then((response) => {
            console.log('API call successful:', response.data);
            bh.local.result = { status: true };
          })
          .catch((error) => {
            console.error('API call failed:', error);
            bh.local.result = { status: true, message: error };
          });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jIUQx13pR869VnpF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jIUQx13pR869VnpF',
        spanInst,
        'sd_jIUQx13pR869VnpF'
      );
    }
  }

  async sd_x5TX2ktHsXOLfSmT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x5TX2ktHsXOLfSmT',
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

      bh.url = process.env.DB_API_URL + 'dm/digital/file_metadata/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TItsENtwfiY4eLCQ(bh, parentSpanInst);
      //appendnew_next_sd_x5TX2ktHsXOLfSmT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x5TX2ktHsXOLfSmT',
        spanInst,
        'sd_x5TX2ktHsXOLfSmT'
      );
    }
  }

  async sd_TItsENtwfiY4eLCQ(bh, parentSpanInst) {
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
      bh = await this.sd_3wv6gkcsZz8xEwha(bh, parentSpanInst);
      //appendnew_next_sd_TItsENtwfiY4eLCQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TItsENtwfiY4eLCQ');
    }
  }

  async sd_3wv6gkcsZz8xEwha(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3wv6gkcsZz8xEwha',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3wv6gkcsZz8xEwha
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wv6gkcsZz8xEwha',
        spanInst,
        'sd_3wv6gkcsZz8xEwha'
      );
    }
  }

  async sd_L5tRl4S9w1LtvrZQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L5tRl4S9w1LtvrZQ',
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
      bh = await this.sd_hSOgVn1KdFXGeYtd(bh, parentSpanInst);
      //appendnew_next_sd_L5tRl4S9w1LtvrZQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L5tRl4S9w1LtvrZQ',
        spanInst,
        'sd_L5tRl4S9w1LtvrZQ'
      );
    }
  }

  async sd_hSOgVn1KdFXGeYtd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hSOgVn1KdFXGeYtd',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance: SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows =
        SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance.searchMasterData(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9wFerIq6EbK4aRxR(bh, parentSpanInst);
      //appendnew_next_sd_hSOgVn1KdFXGeYtd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hSOgVn1KdFXGeYtd',
        spanInst,
        'sd_hSOgVn1KdFXGeYtd'
      );
    }
  }

  async sd_9wFerIq6EbK4aRxR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9wFerIq6EbK4aRxR',
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
      //appendnew_next_sd_9wFerIq6EbK4aRxR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9wFerIq6EbK4aRxR',
        spanInst,
        'sd_9wFerIq6EbK4aRxR'
      );
    }
  }

  async sd_X96LMFPGacrurApo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X96LMFPGacrurApo',
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
      bh = await this.sd_mYTAP8jkSUBRSQ88(bh, parentSpanInst);
      //appendnew_next_sd_X96LMFPGacrurApo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X96LMFPGacrurApo',
        spanInst,
        'sd_X96LMFPGacrurApo'
      );
    }
  }

  async sd_mYTAP8jkSUBRSQ88(bh, parentSpanInst) {
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
      bh = await this.sd_qfDxXFwAjmWhPfx5(bh, parentSpanInst);
      //appendnew_next_sd_mYTAP8jkSUBRSQ88
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mYTAP8jkSUBRSQ88');
    }
  }

  async sd_qfDxXFwAjmWhPfx5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qfDxXFwAjmWhPfx5',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qfDxXFwAjmWhPfx5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qfDxXFwAjmWhPfx5',
        spanInst,
        'sd_qfDxXFwAjmWhPfx5'
      );
    }
  }

  async sd_CtDt34hBMjnb9itG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CtDt34hBMjnb9itG',
      parentSpanInst
    );
    try {
      bh.url = process.env.DOC_MS_URL + 'delete-document';
      bh.body = {
        filepath: bh.input.filepath,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SpakiUnsfFMI8IK0(bh, parentSpanInst);
      //appendnew_next_sd_CtDt34hBMjnb9itG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CtDt34hBMjnb9itG',
        spanInst,
        'sd_CtDt34hBMjnb9itG'
      );
    }
  }

  async sd_SpakiUnsfFMI8IK0(bh, parentSpanInst) {
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
      bh = await this.sd_cNbCCwPLsWSjN9Zl(bh, parentSpanInst);
      //appendnew_next_sd_SpakiUnsfFMI8IK0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SpakiUnsfFMI8IK0');
    }
  }

  async sd_cNbCCwPLsWSjN9Zl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cNbCCwPLsWSjN9Zl',
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
      //appendnew_next_sd_cNbCCwPLsWSjN9Zl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cNbCCwPLsWSjN9Zl',
        spanInst,
        'sd_cNbCCwPLsWSjN9Zl'
      );
    }
  }

  async sd_mWwWMQTaSivgASh5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mWwWMQTaSivgASh5',
      parentSpanInst
    );
    try {
      bh.body = {
        filter: { id: bh.input.id },
      };

      bh.url = process.env.DB_API_URL + 'dm/digital/file_metadata/delete-by-id';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eJMhlQF1Viv0bcIv(bh, parentSpanInst);
      //appendnew_next_sd_mWwWMQTaSivgASh5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mWwWMQTaSivgASh5',
        spanInst,
        'sd_mWwWMQTaSivgASh5'
      );
    }
  }

  async sd_eJMhlQF1Viv0bcIv(bh, parentSpanInst) {
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
      bh = await this.sd_zaDwS0ii2JiOq2DI(bh, parentSpanInst);
      //appendnew_next_sd_eJMhlQF1Viv0bcIv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eJMhlQF1Viv0bcIv');
    }
  }

  async sd_zaDwS0ii2JiOq2DI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zaDwS0ii2JiOq2DI',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zaDwS0ii2JiOq2DI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zaDwS0ii2JiOq2DI',
        spanInst,
        'sd_zaDwS0ii2JiOq2DI'
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
