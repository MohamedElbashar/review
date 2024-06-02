// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUg from './customer_type_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_4GbRWjpiSBAuJzay from './identity_type_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_BaDFuSCcMM0zkwQN from './lob_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_xsKlDwfVNO35MfaK from './locale_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_l0YcjU1B0Qm8OHnc from './status_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC from './system_settings'; //_splitter_
//append_imports_end
export class util_apis {
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
    this.serviceName = 'util_apis';
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
      instance = new util_apis(
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
    //appendnew_flow_util_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: util_apis');
    //appendnew_flow_util_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: util_apis');

    this.app['post'](
      `${this.serviceBasePath}/util/cache/data`,
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
          bh = await this.sd_pIFr11O7T1aN9mNA(bh, parentSpanInst);
          //appendnew_next_sd_oI4CeTtkJjuLfyES
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oI4CeTtkJjuLfyES');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/system-settings/update`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'SuperAdminAPIs',
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
          bh = await this.updateMultiple(bh, parentSpanInst);
          //appendnew_next_sd_wvVkvFaqfyr8mTlQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wvVkvFaqfyr8mTlQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'SuperAdminAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_util_apis_HttpIn
  }
  //   service flows_util_apis

  //appendnew_flow_util_apis_start

  async sd_pIFr11O7T1aN9mNA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pIFr11O7T1aN9mNA',
      parentSpanInst
    );
    try {
      let promiseArray = [];
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
      const SSD_SERVICE_ID_sd_l0YcjU1B0Qm8OHncInstance: SSD_SERVICE_ID_sd_l0YcjU1B0Qm8OHnc.status_cache =
        SSD_SERVICE_ID_sd_l0YcjU1B0Qm8OHnc.status_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_l0YcjU1B0Qm8OHncInstance.statusList(spanInst)
      );
      const SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUgInstance: SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUg.customer_type_cache =
        SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUg.customer_type_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_bYcKkG4iEBX2taUgInstance.customerTypeList(spanInst)
      );
      const SSD_SERVICE_ID_sd_4GbRWjpiSBAuJzayInstance: SSD_SERVICE_ID_sd_4GbRWjpiSBAuJzay.identity_type_cache =
        SSD_SERVICE_ID_sd_4GbRWjpiSBAuJzay.identity_type_cache.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_4GbRWjpiSBAuJzayInstance.idTypeList(spanInst)
      );
      const SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance: SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings =
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance.getSystemSettings(spanInst)
      );

      bh.cache = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YiPKunQHHEoE0RU5(bh, parentSpanInst);
      //appendnew_next_sd_pIFr11O7T1aN9mNA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pIFr11O7T1aN9mNA',
        spanInst,
        'sd_pIFr11O7T1aN9mNA'
      );
    }
  }

  async sd_YiPKunQHHEoE0RU5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YiPKunQHHEoE0RU5',
      parentSpanInst
    );
    try {
      bh.response = {
        lob: bh.cache[0].local.lob,
        locale: bh.cache[1].local.locales,
        status: bh.cache[2].local.status,
        customer_type: bh.cache[3].local.customer_type,
        id_type: bh.cache[4].local.id_type,
        system_settings: bh.cache[5].local.system_settings,
      };
      //Vehicle Limit to be added to the DB.
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MhE3hLr3nBH8ZMFe(bh, parentSpanInst);
      //appendnew_next_sd_YiPKunQHHEoE0RU5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YiPKunQHHEoE0RU5',
        spanInst,
        'sd_YiPKunQHHEoE0RU5'
      );
    }
  }

  async sd_MhE3hLr3nBH8ZMFe(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MhE3hLr3nBH8ZMFe');
    }
  }

  async updateMultiple(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateMultiple',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance: SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings =
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance.updateAllSystemSettings(
          spanInst,
          bh.input.body
        );
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resetCache(bh, parentSpanInst);
      //appendnew_next_updateMultiple
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hnEeZLkD5oDzerKW',
        spanInst,
        'updateMultiple'
      );
    }
  }

  async resetCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resetCache',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance: SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings =
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance.clearCache(spanInst);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1cjpapIuNFOtmWRB(bh, parentSpanInst);
      //appendnew_next_resetCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C0boOZTVJUe2apok',
        spanInst,
        'resetCache'
      );
    }
  }

  async sd_1cjpapIuNFOtmWRB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1cjpapIuNFOtmWRB',
      parentSpanInst
    );
    try {
      bh.response = {
        status: bh.status,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Z2teYLY00RHEEgpl(bh, parentSpanInst);
      //appendnew_next_sd_1cjpapIuNFOtmWRB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1cjpapIuNFOtmWRB',
        spanInst,
        'sd_1cjpapIuNFOtmWRB'
      );
    }
  }

  async sd_Z2teYLY00RHEEgpl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z2teYLY00RHEEgpl');
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
  //appendnew_flow_util_apis_Catch
}
