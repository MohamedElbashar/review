// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o from '../Redis/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN from './spl_flows'; //_splitter_
//append_imports_end
export class spl_apis {
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
    this.serviceName = 'spl_apis';
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
      instance = new spl_apis(
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
    //appendnew_flow_spl_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: spl_apis');
    //appendnew_flow_spl_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: spl_apis');

    this.app['post'](
      `${this.serviceBasePath}/spl/addressinfo/id`,
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
          bh = await this.setCacheKey1(bh, parentSpanInst);
          //appendnew_next_sd_RHxxGbAPYNUKfWEM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RHxxGbAPYNUKfWEM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/spl/addressinfo/cr`,
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
          bh = await this.setCacheKey2(bh, parentSpanInst);
          //appendnew_next_sd_miio4Qpp1583gGme
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_miio4Qpp1583gGme');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_spl_apis_HttpIn
  }
  //   service flows_spl_apis

  //appendnew_flow_spl_apis_start

  async setCacheKey1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCacheKey1',
      parentSpanInst
    );
    try {
      bh.key = `SPL_ADDRESS_IND_${bh.input.body.id_no}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache0(bh, parentSpanInst);
      //appendnew_next_setCacheKey1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GLMhb9uihVkeZNEk',
        spanInst,
        'setCacheKey1'
      );
    }
  }

  async getCache0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_awy5NB6wwcdVemue(bh, parentSpanInst);
      //appendnew_next_getCache0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qYMpBxQTAbYgAIgH',
        spanInst,
        'getCache0'
      );
    }
  }

  async sd_awy5NB6wwcdVemue(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_awy5NB6wwcdVemue',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInfoId(bh, parentSpanInst);
      } else {
        bh = await this.sd_95UFYXCfUaSDZ2i2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_awy5NB6wwcdVemue',
        spanInst,
        'sd_awy5NB6wwcdVemue'
      );
    }
  }

  async getInfoId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getInfoId', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1S5Noml2zHju5JVNInstance: SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN.spl_flows =
        SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN.spl_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1S5Noml2zHju5JVNInstance.getAddressById(
          spanInst,
          bh.input.body.id_no
        );
      bh.response = outputVariables.local.address;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DkcuUjNSYtnYoMNJ(bh, parentSpanInst);
      //appendnew_next_getInfoId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nVK3NO1HlVq6mlBC',
        spanInst,
        'getInfoId'
      );
    }
  }

  async sd_DkcuUjNSYtnYoMNJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DkcuUjNSYtnYoMNJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setCache0(bh, parentSpanInst);
      } else {
        bh = await this.sd_95UFYXCfUaSDZ2i2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DkcuUjNSYtnYoMNJ',
        spanInst,
        'sd_DkcuUjNSYtnYoMNJ'
      );
    }
  }

  async setCache0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_95UFYXCfUaSDZ2i2(bh, parentSpanInst);
      //appendnew_next_setCache0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GYHK0Y0Tn9OIttyl',
        spanInst,
        'setCache0'
      );
    }
  }

  async sd_95UFYXCfUaSDZ2i2(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_95UFYXCfUaSDZ2i2');
    }
  }

  async setCacheKey2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCacheKey2',
      parentSpanInst
    );
    try {
      bh.key = `SPL_ADDRESS_CR_${bh.input.body.id_no}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache1(bh, parentSpanInst);
      //appendnew_next_setCacheKey2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OvUebLGHVnkY3zER',
        spanInst,
        'setCacheKey2'
      );
    }
  }

  async getCache1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f38EHWYQ62n52Wbf(bh, parentSpanInst);
      //appendnew_next_getCache1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i7VbxaOdXdLlXP8O',
        spanInst,
        'getCache1'
      );
    }
  }

  async sd_f38EHWYQ62n52Wbf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f38EHWYQ62n52Wbf',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInfoCr(bh, parentSpanInst);
      } else {
        bh = await this.sd_DO2fm3z8gh0UDP3J(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f38EHWYQ62n52Wbf',
        spanInst,
        'sd_f38EHWYQ62n52Wbf'
      );
    }
  }

  async getInfoCr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getInfoCr', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1S5Noml2zHju5JVNInstance: SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN.spl_flows =
        SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN.spl_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1S5Noml2zHju5JVNInstance.getAddressByCr(
          spanInst,
          bh.input.body.id_no
        );
      bh.response = outputVariables.local.address;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LS9WmOMcXN2Wzjxz(bh, parentSpanInst);
      //appendnew_next_getInfoCr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YcB4h6VL3rwSFVpm',
        spanInst,
        'getInfoCr'
      );
    }
  }

  async sd_LS9WmOMcXN2Wzjxz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LS9WmOMcXN2Wzjxz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setCache1(bh, parentSpanInst);
      } else {
        bh = await this.sd_DO2fm3z8gh0UDP3J(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LS9WmOMcXN2Wzjxz',
        spanInst,
        'sd_LS9WmOMcXN2Wzjxz'
      );
    }
  }

  async setCache1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );
      bh.data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_DO2fm3z8gh0UDP3J(bh, parentSpanInst);
      //appendnew_next_setCache1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wWWzVDoINtpRTHiJ',
        spanInst,
        'setCache1'
      );
    }
  }

  async sd_DO2fm3z8gh0UDP3J(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DO2fm3z8gh0UDP3J');
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
  //appendnew_flow_spl_apis_Catch
}
