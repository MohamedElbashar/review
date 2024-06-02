// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_CipFh1pFceESOsZK from './flows'; //_splitter_
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
      `${this.serviceBasePath}/document/quote/summary`,
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
          bh = await this.genPdf(bh, parentSpanInst);
          //appendnew_next_sd_nUtjrzs6Y3FFqRnd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nUtjrzs6Y3FFqRnd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-document`,
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
          bh = await this.uploadFile(bh, parentSpanInst);
          //appendnew_next_sd_os0ZlsEdKsKYnjdj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_os0ZlsEdKsKYnjdj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/delete-document`,
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
          bh = await this.deleteFile(bh, parentSpanInst);
          //appendnew_next_sd_pqVw6ZIm9kse86hD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pqVw6ZIm9kse86hD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/document/quote/vehicle-declaration`,
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
          bh = await this.manualEntVehPdf(bh, parentSpanInst);
          //appendnew_next_sd_MxkermV5KfpEhule
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MxkermV5KfpEhule');
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

  async genPdf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('genPdf', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_CipFh1pFceESOsZKInstance: SSD_SERVICE_ID_sd_CipFh1pFceESOsZK.flows =
        SSD_SERVICE_ID_sd_CipFh1pFceESOsZK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CipFh1pFceESOsZKInstance.generatePdf(
          spanInst,
          bh.input.body.quote_summary
        );
      bh.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setHeaders(bh, parentSpanInst);
      //appendnew_next_genPdf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_djaIGbotGcPIr9E7',
        spanInst,
        'genPdf'
      );
    }
  }

  async setHeaders(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setHeaders',
      parentSpanInst
    );
    try {
      // const { Readable } = require('stream');
      // bh.stream = Readable.from(bh.PdfFileBuffer);
      bh.headers = {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="quote_summary.pdf"',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IJFy36taaxFBlycf(bh, parentSpanInst);
      //appendnew_next_setHeaders
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eSWkmxsX4N9rJMqJ',
        spanInst,
        'setHeaders'
      );
    }
  }

  async sd_IJFy36taaxFBlycf(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.response);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IJFy36taaxFBlycf');
    }
  }

  async uploadFile(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'uploadFile',
      parentSpanInst
    );
    try {
      const fs = require('fs-extra');
      const path = require('path');

      bh.filePath = bh.input.body.filepath;
      bh.tempPath = bh.input.files.documents[0].path;
      const directoryPath = path.dirname(bh.filePath);

      fs.ensureDir(directoryPath)
        .then(() => {
          return fs.move(bh.tempPath, bh.filePath, { overwrite: true });
        })
        .then(() => {
          bh.web.res.status(200).send({ status: true });
        })
        .catch((err) => {
          bh.web.res.status(500).send({ status: false });
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_uploadFile
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PzxbrXTrFd7UqBNp',
        spanInst,
        'uploadFile'
      );
    }
  }

  async deleteFile(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteFile',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const filePath = bh.input.body.filepath;
      bh.result = {};
      // Use fs.unlink to delete the file
      fs.unlink(filePath, (err) => {
        if (err) {
          bh.web.res.status(500).send({ status: false });
        } else {
          bh.web.res.status(200).send({ status: true });
        }
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_deleteFile
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hzXk5bA6WIFp9zbm',
        spanInst,
        'deleteFile'
      );
    }
  }

  async manualEntVehPdf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'manualEntVehPdf',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_CipFh1pFceESOsZKInstance: SSD_SERVICE_ID_sd_CipFh1pFceESOsZK.flows =
        SSD_SERVICE_ID_sd_CipFh1pFceESOsZK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CipFh1pFceESOsZKInstance.manualEntVehPdf(
          spanInst,
          bh.input.body.quote_summary
        );
      bh.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setHeaders1(bh, parentSpanInst);
      //appendnew_next_manualEntVehPdf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PFSDlmP5RUmPr1BF',
        spanInst,
        'manualEntVehPdf'
      );
    }
  }

  async setHeaders1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setHeaders1',
      parentSpanInst
    );
    try {
      bh.headers = {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="policy_cover.pdf"',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Nk6gXiqQMQcgnEWS(bh, parentSpanInst);
      //appendnew_next_setHeaders1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dYb8oXaU2JXquySb',
        spanInst,
        'setHeaders1'
      );
    }
  }

  async sd_Nk6gXiqQMQcgnEWS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Nk6gXiqQMQcgnEWS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.response,
          ' No manual entry of vehicle found',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dLQWtFtmSsagGZAn(bh, parentSpanInst);
      } else {
        bh = await this.sd_7KAcj5EY2PZgwZ8W(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Nk6gXiqQMQcgnEWS',
        spanInst,
        'sd_Nk6gXiqQMQcgnEWS'
      );
    }
  }

  async sd_7KAcj5EY2PZgwZ8W(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.headers);

      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.response);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7KAcj5EY2PZgwZ8W');
    }
  }

  async sd_dLQWtFtmSsagGZAn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dLQWtFtmSsagGZAn');
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
