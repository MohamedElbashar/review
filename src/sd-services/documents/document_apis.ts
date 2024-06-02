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
import * as SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd from '../utils/customer_type_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4 from '../utils/lob_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB from '../utils/locale_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd from './flows'; //_splitter_
//append_imports_end
export class document_apis {
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
    this.serviceName = 'document_apis';
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
      instance = new document_apis(
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
    //appendnew_flow_document_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: document_apis');
    //appendnew_flow_document_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: document_apis');

    this.app['post'](
      `${this.serviceBasePath}/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
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
          bh = await this.sd_wO3NtloxYl5aH2oz(bh, parentSpanInst);
          //appendnew_next_sd_vJIBK08EnLkK3QYd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vJIBK08EnLkK3QYd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/quote/customer/required-files`,
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
          //appendnew_next_sd_XMnEe78qEicMDpS7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XMnEe78qEicMDpS7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/delete`,
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
          bh = await this.getMetadata(bh, parentSpanInst);
          //appendnew_next_sd_Xcs8OIAYAFlZ8Mwi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Xcs8OIAYAFlZ8Mwi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'authorized_apis',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_document_apis_HttpIn
  }
  //   service flows_document_apis

  //appendnew_flow_document_apis_start

  async sd_wO3NtloxYl5aH2oz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wO3NtloxYl5aH2oz',
      parentSpanInst
    );
    try {
      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cfbhrS92HOLipw9A(bh, parentSpanInst);
      //appendnew_next_sd_wO3NtloxYl5aH2oz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wO3NtloxYl5aH2oz',
        spanInst,
        'sd_wO3NtloxYl5aH2oz'
      );
    }
  }

  async sd_cfbhrS92HOLipw9A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cfbhrS92HOLipw9A',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYdInstance: SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd.customer_type_cache =
        SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd.customer_type_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYdInstance.customerTypeList(spanInst)
      );
      const SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4Instance: SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4.lob_cache =
        SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4.lob_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4Instance.lobList(spanInst)
      );
      const SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuBInstance: SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB.locale_cache =
        SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB.locale_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuBInstance.localeList(spanInst)
      );
      const SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance: SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows =
        SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance.quoteSummary(
          spanInst,
          undefined,
          bh.input.body.reference_number,
          undefined
        )
      );

      bh.data = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IkbRqpPd4IG7eCzB(bh, parentSpanInst);
      //appendnew_next_sd_cfbhrS92HOLipw9A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cfbhrS92HOLipw9A',
        spanInst,
        'sd_cfbhrS92HOLipw9A'
      );
    }
  }

  async sd_IkbRqpPd4IG7eCzB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IkbRqpPd4IG7eCzB',
      parentSpanInst
    );
    try {
      bh.customer_type = bh.data[0].local.customer_type;
      bh.lob = bh.data[1].local.lob;
      bh.locales = bh.data[2].local.locales;
      bh.quote = bh.data[3].local.result;

      bh.lob_obj = bh.lob.find((x) => x.id == bh.quote.quote_details.lob_id);
      bh.customer_obj = bh.customer_type.find(
        (x) => x.id == bh.quote.quote_details.customer_type_id
      );

      bh.lob_text = bh.locales.find((x) => x.id === bh.lob_obj.locale_id);
      bh.cust_text = bh.locales.find((x) => x.id === bh.customer_obj.locale_id);
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
      console.log(bh.filepath);
      console.log(bh.input.files.documents[0]);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gfjR9ldPeWKTZJsR(bh, parentSpanInst);
      //appendnew_next_sd_IkbRqpPd4IG7eCzB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IkbRqpPd4IG7eCzB',
        spanInst,
        'sd_IkbRqpPd4IG7eCzB'
      );
    }
  }

  async sd_gfjR9ldPeWKTZJsR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gfjR9ldPeWKTZJsR',
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
        console.log(data);
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
            console.log('API call successful:', response.data);
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
                console.log('Response data:', response.data);
                bh.web.res.status(200).send(response.data);
              })
              .catch((error) => {
                bh.local.result = { status: true, message: error };
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
      //appendnew_next_sd_gfjR9ldPeWKTZJsR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gfjR9ldPeWKTZJsR',
        spanInst,
        'sd_gfjR9ldPeWKTZJsR'
      );
    }
  }

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
          undefined,
          bh.input.body.reference_number,
          undefined
        );
      bh.quote_summary = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oNOUKstHnXpqoYGo(bh, parentSpanInst);
      //appendnew_next_getQuoteSummary
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hj4NuRMldE2cJAqV',
        spanInst,
        'getQuoteSummary'
      );
    }
  }

  async sd_oNOUKstHnXpqoYGo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oNOUKstHnXpqoYGo',
      parentSpanInst
    );
    try {
      bh.customer_type = bh.quote_summary.quote_details.customer_type_id;
      bh.lob = bh.quote_summary.quote_details.lob_id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sWKFoIvquvr1mv82(bh, parentSpanInst);
      //appendnew_next_sd_oNOUKstHnXpqoYGo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oNOUKstHnXpqoYGo',
        spanInst,
        'sd_oNOUKstHnXpqoYGo'
      );
    }
  }

  async sd_sWKFoIvquvr1mv82(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sWKFoIvquvr1mv82',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance: SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows =
        SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance.getRequiredFiles(
          spanInst,
          bh.lob,
          bh.customer_type
        );
      bh.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_yzsEmaulCRIFISBN(bh, parentSpanInst);
      //appendnew_next_sd_sWKFoIvquvr1mv82
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sWKFoIvquvr1mv82',
        spanInst,
        'sd_sWKFoIvquvr1mv82'
      );
    }
  }

  async sd_yzsEmaulCRIFISBN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yzsEmaulCRIFISBN');
    }
  }

  async getMetadata(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMetadata',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance: SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows =
        SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance.getMetadata(
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
        'sd_IwZtf5HsBomqfG7J',
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
      const SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance: SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows =
        SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance.deleteDocument(
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
        'sd_KgRZrG7Tir8BOvIs',
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
      const SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance: SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows =
        SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTdInstance.deleteMetadata(
          spanInst,
          bh.input.body.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_yB9XndtIipAklgzU(bh, parentSpanInst);
      //appendnew_next_deleteMetadata
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DrlyDcTWVkAM3FXM',
        spanInst,
        'deleteMetadata'
      );
    }
  }

  async sd_yB9XndtIipAklgzU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yB9XndtIipAklgzU');
    }
  }

  async sd_FypjE6LnlCm11AfY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FypjE6LnlCm11AfY',
      parentSpanInst
    );
    try {
      bh.result = { status: false, message: 'Invalid ID' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yB9XndtIipAklgzU(bh, parentSpanInst);
      //appendnew_next_sd_FypjE6LnlCm11AfY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FypjE6LnlCm11AfY',
        spanInst,
        'sd_FypjE6LnlCm11AfY'
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
      (await this.sd_xmfOxd41fsxcQZG6(bh, parentSpanInst))
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
  async sd_xmfOxd41fsxcQZG6(bh, parentSpanInst) {
    const nodes = [
      'sd_IwZtf5HsBomqfG7J',
      'sd_KgRZrG7Tir8BOvIs',
      'sd_DrlyDcTWVkAM3FXM',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_FypjE6LnlCm11AfY(bh, parentSpanInst);
      //appendnew_next_sd_xmfOxd41fsxcQZG6
      return true;
    }
    return false;
  }
  //appendnew_flow_document_apis_Catch
}
