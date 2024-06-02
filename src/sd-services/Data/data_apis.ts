// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk from '../ESKA/flows'; //_splitter_
//append_imports_end
export class data_apis {
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
    this.serviceName = 'data_apis';
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
      instance = new data_apis(
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
    //appendnew_flow_data_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: data_apis');
    //appendnew_flow_data_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: data_apis');

    this.app['post'](
      `${this.serviceBasePath}/quote/product-codes`,
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
          bh = await this.validations1(bh, parentSpanInst);
          //appendnew_next_sd_RiEhXDxSE9xTYaLN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RiEhXDxSE9xTYaLN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_data_apis_HttpIn
  }
  //   service flows_data_apis

  //appendnew_flow_data_apis_start

  async validations1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validations1',
      parentSpanInst
    );
    try {
      const request_body = bh.input.body;
      if (!request_body?.quote_id) {
        throw new Error('Quote Id is required !');
      }

      log.info(
        `[QUOTE_ID:${bh.input.body.quote_id}][GET_PRODUCT_CODES][START]`
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProducts(bh, parentSpanInst);
      //appendnew_next_validations1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fQd8SDU9xeavMgE8',
        spanInst,
        'validations1'
      );
    }
  }

  async getProducts(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProducts',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_4TJuT38nq8BegrhkInstance: SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk.flows =
        SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_4TJuT38nq8BegrhkInstance.getProductCodes(
          spanInst,
          bh.input.body.quote_id
        );
      bh.product_codes = outputVariables.local.product_codes;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resBody1(bh, parentSpanInst);
      //appendnew_next_getProducts
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oHr6aVNHpzyarwtM',
        spanInst,
        'getProducts'
      );
    }
  }

  async resBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('resBody1', parentSpanInst);
    try {
      bh.statusCode = 200;

      bh.response = {
        message: 'Success',
        product_codes: bh.product_codes,
      };
      if (bh.statusCode == 200)
        log.info(
          `[QUOTE_ID:${bh.input.body.quote_id}][GET_PRODUCT_CODES][END]`
        );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tsczU8C70ljMAICB(bh, parentSpanInst);
      //appendnew_next_resBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jizwu51GHqSK2rEZ',
        spanInst,
        'resBody1'
      );
    }
  }

  async sd_tsczU8C70ljMAICB(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tsczU8C70ljMAICB');
    }
  }

  async sd_4RtNk4lsrAVgVqd3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4RtNk4lsrAVgVqd3',
      parentSpanInst
    );
    try {
      bh.local.error = bh.error?.message || JSON.stringify(bh.error);
      log.info(
        `[QUOTE_ID:${bh.input.body.quote_id}][GET_PRODUCT_CODES][FAILED]`
      );
      bh.statusCode = 500;
      bh.response = {
        error: bh.local.error,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_a16RrmuYL10Jw9DF(bh, parentSpanInst);
      //appendnew_next_sd_4RtNk4lsrAVgVqd3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4RtNk4lsrAVgVqd3',
        spanInst,
        'sd_4RtNk4lsrAVgVqd3'
      );
    }
  }

  async sd_a16RrmuYL10Jw9DF(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a16RrmuYL10Jw9DF');
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
      (await this.catchProductCodes(bh, parentSpanInst))
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
  async catchProductCodes(bh, parentSpanInst) {
    const nodes = [
      'sd_Jizwu51GHqSK2rEZ',
      'sd_fQd8SDU9xeavMgE8',
      'sd_oHr6aVNHpzyarwtM',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_4RtNk4lsrAVgVqd3(bh, parentSpanInst);
      //appendnew_next_catchProductCodes
      return true;
    }
    return false;
  }
  //appendnew_flow_data_apis_Catch
}
