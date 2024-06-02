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
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUg from '../utils/customer_type_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN from '../utils/lob_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_xsKlDwfVNO35MfaK from '../utils/locale_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h from './flows'; //_splitter_
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
          bh = await this.getQuoteSummary(bh, parentSpanInst);
          //appendnew_next_sd_biyf9hxJZgj0RuvQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_biyf9hxJZgj0RuvQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/delete`,
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
          bh = await this.getMetadata(bh, parentSpanInst);
          //appendnew_next_sd_FF2OJts4ahaLCMqx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FF2OJts4ahaLCMqx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_HPqoX5edJDhHjx7q(bh, parentSpanInst);
          //appendnew_next_sd_X4m9odiqdW7bXvef
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_X4m9odiqdW7bXvef');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/zatka/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_c0gvd0FEN9PkiQut(bh, parentSpanInst);
          //appendnew_next_sd_QHkrX9VuAvt7cWOb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QHkrX9VuAvt7cWOb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async getQuoteSummary(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getQuoteSummary',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          undefined,
          bh.input.body.reference_number,
          bh.input.body.query_mode
        );
      bh.quote_summary = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_20v4G5ienB37Y7DV(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W0bjX1WiTVrEz7YZ',
        spanInst,
        'getQuoteSummary'
      );
    }
  }

  async sd_20v4G5ienB37Y7DV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_20v4G5ienB37Y7DV',
      parentSpanInst
    );
    try {
      bh.customer_type = bh.quote_summary.quote_details.customer_type_id;
      bh.lob = bh.quote_summary.quote_details.lob_id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GqZNy7GDDHnFJENJ(bh, parentSpanInst);
      //appendnew_next_sd_20v4G5ienB37Y7DV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_20v4G5ienB37Y7DV',
        spanInst,
        'sd_20v4G5ienB37Y7DV'
      );
    }
  }

  async sd_GqZNy7GDDHnFJENJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GqZNy7GDDHnFJENJ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance: SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows =
        SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance.getRequiredFiles(
          spanInst,
          bh.lob,
          bh.customer_type
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_xzVbH14GwtE27lm5(bh, parentSpanInst);
      //appendnew_next_sd_GqZNy7GDDHnFJENJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GqZNy7GDDHnFJENJ',
        spanInst,
        'sd_GqZNy7GDDHnFJENJ'
      );
    }
  }

  async sd_xzVbH14GwtE27lm5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xzVbH14GwtE27lm5');
    }
  }

  async getMetadata(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMetadata',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance: SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows =
        SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance.getMetadata(
          spanInst,
          bh.input.body.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteDocument(bh, parentSpanInst);
      //appendnew_next_getMetadata
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BdJY0blZFz3I0N4e',
        spanInst,
        'getMetadata'
      );
    }
  }

  async deleteDocument(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteDocument',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance: SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows =
        SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance.deleteDocument(
          spanInst,
          bh.result[0].filepath
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteMetadata(bh, parentSpanInst);
      //appendnew_next_deleteDocument
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VrbcLAjqfcipKwz3',
        spanInst,
        'deleteDocument'
      );
    }
  }

  async deleteMetadata(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteMetadata',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance: SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows =
        SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6h.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_9QojCYU7HRrHHa6hInstance.deleteMetadata(
          spanInst,
          bh.input.body.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_uMofCH7xeHP4MOWC(bh, parentSpanInst);
      //appendnew_next_deleteMetadata
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z2WQuhQ28eXxByPb',
        spanInst,
        'deleteMetadata'
      );
    }
  }

  async sd_uMofCH7xeHP4MOWC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uMofCH7xeHP4MOWC');
    }
  }

  async sd_HPqoX5edJDhHjx7q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HPqoX5edJDhHjx7q',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUgInstance: SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUg.customer_type_cache =
        SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUg.customer_type_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUgInstance.customerTypeList(spanInst)
      );
      const SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQNInstance: SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN.lob_cache =
        SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN.lob_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQNInstance.lobList(spanInst)
      );
      const SSD_SERVICE_ID_sd_xsKlDwfVNO35MfaKInstance: SSD_SERVICE_ID_sd_xsKlDwfVNO35MfaK.locale_cache =
        SSD_SERVICE_ID_sd_xsKlDwfVNO35MfaK.locale_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_xsKlDwfVNO35MfaKInstance.localeList(spanInst)
      );
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          undefined,
          bh.input.body.reference_number,
          bh.input.body.query_mode
        )
      );

      bh.data = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hu9dOVq7oOGVgoaG(bh, parentSpanInst);
      //appendnew_next_sd_HPqoX5edJDhHjx7q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HPqoX5edJDhHjx7q',
        spanInst,
        'sd_HPqoX5edJDhHjx7q'
      );
    }
  }

  async sd_hu9dOVq7oOGVgoaG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hu9dOVq7oOGVgoaG',
      parentSpanInst
    );
    try {
      bh.customer_type = bh.data[0].local.customer_type;
      bh.lob = bh.data[1].local.lob;
      bh.locales = bh.data[2].local.locales;
      bh.quote = bh.data[3].local.quote_summary;

      bh.lob_obj = bh.lob.find((x) => x.id == bh.quote.quote_details.lob_id);
      bh.customer_obj = bh.customer_type.find(
        (x) => x.id == bh.quote.quote_details.customer_type_id
      );

      bh.lob_text = bh.locales.find((x) => x.id == bh.lob_obj.locale_id);
      bh.cust_text = bh.locales.find((x) => x.id == bh.customer_obj.locale_id);
      // Extract file extension
      const fileExtension = bh.input.files.documents[0].originalname
        .split('.')
        .pop();

      bh.filepath =
        process.env.UPLOAD_BASE_PATH +
        bh.lob_text['en'] +
        '/' +
        bh.cust_text['en'] +
        '/' +
        bh.quote.quote_details.id +
        '/vehicle_images/' +
        bh.input.body.risk_id +
        '/' +
        bh.input.body.image_type +
        `-${Date.now()}` +
        '.' +
        fileExtension;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Qsuuq8lP1TCWwRaJ(bh, parentSpanInst);
      //appendnew_next_sd_hu9dOVq7oOGVgoaG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hu9dOVq7oOGVgoaG',
        spanInst,
        'sd_hu9dOVq7oOGVgoaG'
      );
    }
  }

  async sd_Qsuuq8lP1TCWwRaJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qsuuq8lP1TCWwRaJ',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs');
      const FormData = require('form-data');

      const emailData = new FormData();
      emailData.append('filepath', bh.filepath);

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

        const url = process.env.DOC_MS_URL + 'upload-document';
        const emailHeaders = {
          ...emailData.getHeaders(),
        };
        axios
          .post(url, emailData, {
            headers: emailHeaders,
          })
          .then((response) => {
            bh.body = {
              file_metadata: {
                mime_type: bh.input.files.documents[0].mimetype,
                filepath: bh.filepath,
                filename: bh.input.body.image_type,
                quote_id: bh.quote.quote_details.id,
                risk_id: parseInt(bh.input.body.risk_id),
                doc_type_id: parseInt(bh.input.body.doc_type_id),
                doc_sub_type_id: parseInt(bh.input.body.doc_sub_type_id),
              },
            };
            bh.url = process.env.DB_API_URL + 'dm/digital/file_metadata/create';
            axios
              .post(bh.url, bh.body)
              .then((response) => {
                // console.log('Response data:', response.data);
                bh.web.res.status(200).send(response.data);
              })
              .catch((error) => {
                bh.local.result = { status: false, message: error };
                bh.web.res.status(500).send(bh.local.result);
              });
          })
          .catch((error) => {
            console.error('API call failed:', error);
            bh.local.result = { status: false, message: error };
            bh.web.res.status(500).send(bh.local.result);
          });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Qsuuq8lP1TCWwRaJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qsuuq8lP1TCWwRaJ',
        spanInst,
        'sd_Qsuuq8lP1TCWwRaJ'
      );
    }
  }

  async sd_c0gvd0FEN9PkiQut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c0gvd0FEN9PkiQut',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          bh.input.body.id,
          undefined,
          bh.input.body.query_mode
        );
      bh.quote = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rIDheCfVelNUAJVy(bh, parentSpanInst);
      //appendnew_next_sd_c0gvd0FEN9PkiQut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c0gvd0FEN9PkiQut',
        spanInst,
        'sd_c0gvd0FEN9PkiQut'
      );
    }
  }

  async sd_rIDheCfVelNUAJVy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rIDheCfVelNUAJVy',
      parentSpanInst
    );
    try {
      // Extract file extension
      const fileExtension = bh.input.files.documents[0].originalname
        .split('.')
        .pop();

      bh.filepath =
        process.env.UPLOAD_BASE_PATH +
        bh.quote.quote_details.id +
        '/zatka/exception_letter/Exception-Letter' +
        `-${Date.now()}` +
        '.' +
        fileExtension;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_osApSb9PCkfwymKs(bh, parentSpanInst);
      //appendnew_next_sd_rIDheCfVelNUAJVy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rIDheCfVelNUAJVy',
        spanInst,
        'sd_rIDheCfVelNUAJVy'
      );
    }
  }

  async sd_osApSb9PCkfwymKs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_osApSb9PCkfwymKs',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs');
      const FormData = require('form-data');

      const docData = new FormData();
      docData.append('filepath', bh.filepath);

      const filePath = bh.input.files.documents[0].path;

      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        docData.append('documents', data, {
          filename: bh.input.files.documents[0].originalname,
          contentType: bh.input.files.documents[0].mimetype,
        });

        const url = process.env.DOC_MS_URL + 'upload-document';
        const docHeaders = {
          ...docData.getHeaders(),
        };
        axios
          .post(url, docData, {
            headers: docHeaders,
          })
          .then((response) => {
            let addl_details = bh.quote.quote_details.addl_details;
            addl_details['zatka_exception_letter_path'] = bh.filepath;
            bh.body = {
              quote: {
                id: bh.quote.quote_details.id,
                reference_number: bh.quote.quote_details.reference_number,
                id_type: bh.quote.quote_details.id_type,
                id_no: bh.quote.quote_details.id_no,
                lob_id: bh.quote.quote_details.lob_id,
                customer_type_id: bh.quote.quote_details.customer_type_id,
                status_id: bh.quote.quote_details.status_id,
                tenant_id: bh.tenant_id,
                addl_details: JSON.stringify(addl_details),
              },
            };
            bh.url = process.env.DB_API_URL + 'dm/digital/quote/create';
            axios
              .post(bh.url, bh.body)
              .then((response) => {
                // console.log('Response data:', response.data);
                bh.local.result = {
                  status: true,
                  message: 'Zatka Exception Letter uploaded successfully',
                };
                bh.web.res.status(200).send(bh.local.result);
              })
              .catch((error) => {
                bh.local.result = { status: false, message: error };
                bh.web.res.status(500).send(bh.local.result);
              });
          })
          .catch((error) => {
            console.error('API call failed:', error);
            bh.local.result = { status: false, message: error };
            bh.web.res.status(500).send(bh.local.result);
          });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_osApSb9PCkfwymKs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_osApSb9PCkfwymKs',
        spanInst,
        'sd_osApSb9PCkfwymKs'
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
  //appendnew_flow_apis_Catch
}
