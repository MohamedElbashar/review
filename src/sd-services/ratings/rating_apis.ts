// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class rating_apis {
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
    this.serviceName = 'rating_apis';
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
      instance = new rating_apis(
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
    //appendnew_flow_rating_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: rating_apis');
    //appendnew_flow_rating_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: rating_apis');

    this.app['post'](
      `${this.serviceBasePath}/htp_factor`,
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
          bh = await this.sd_9brA7pve5PfOCkFk(bh, parentSpanInst);
          //appendnew_next_sd_a6MOdqQWATdaIH0U
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_a6MOdqQWATdaIH0U');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/coupen/can-apply`,
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
          bh = await this.sd_NqMpKfZPfMYcsnYb(bh, parentSpanInst);
          //appendnew_next_sd_NIw0ixh81vz8sx9z
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NIw0ixh81vz8sx9z');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_rating_apis_HttpIn
  }
  //   service flows_rating_apis

  //appendnew_flow_rating_apis_start

  async sd_9brA7pve5PfOCkFk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9brA7pve5PfOCkFk',
      parentSpanInst
    );
    try {
      let national_id = bh.input.body.national_id.join(',');
      bh.query = `select *
from "HTP_FACTOR"
where "NATIONAL_ID" in (${national_id}) `;

      bh.params = [];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lzRELpCpheObmwqH(bh, parentSpanInst);
      //appendnew_next_sd_9brA7pve5PfOCkFk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9brA7pve5PfOCkFk',
        spanInst,
        'sd_9brA7pve5PfOCkFk'
      );
    }
  }

  async sd_lzRELpCpheObmwqH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lzRELpCpheObmwqH',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7x57vczK8BKALy2d'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1cf4bMvdkoMHrmGx(bh, parentSpanInst);
      //appendnew_next_sd_lzRELpCpheObmwqH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lzRELpCpheObmwqH',
        spanInst,
        'sd_lzRELpCpheObmwqH'
      );
    }
  }

  async sd_1cf4bMvdkoMHrmGx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1cf4bMvdkoMHrmGx');
    }
  }

  async sd_NqMpKfZPfMYcsnYb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NqMpKfZPfMYcsnYb',
      parentSpanInst
    );
    try {
      bh.query = `SELECT * FROM "api_audit" WHERE "key" ='ifoundry-coupen-discount' AND "identifier" = :1 AND "created_date" >= (SYSTIMESTAMP - INTERVAL '1' HOUR)`;
      bh.params = [bh.input.body.id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OmgqcG3pIOS761ZJ(bh, parentSpanInst);
      //appendnew_next_sd_NqMpKfZPfMYcsnYb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NqMpKfZPfMYcsnYb',
        spanInst,
        'sd_NqMpKfZPfMYcsnYb'
      );
    }
  }

  async sd_OmgqcG3pIOS761ZJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OmgqcG3pIOS761ZJ',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7x57vczK8BKALy2d'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a52h69QYywOk74MS(bh, parentSpanInst);
      //appendnew_next_sd_OmgqcG3pIOS761ZJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OmgqcG3pIOS761ZJ',
        spanInst,
        'sd_OmgqcG3pIOS761ZJ'
      );
    }
  }

  async sd_a52h69QYywOk74MS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a52h69QYywOk74MS',
      parentSpanInst
    );
    try {
      bh.response = {
        status: bh.result.length < (process.env.COUPON_LIMIT_PH || 3),
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UrrVErq2TGvOMXlH(bh, parentSpanInst);
      //appendnew_next_sd_a52h69QYywOk74MS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a52h69QYywOk74MS',
        spanInst,
        'sd_a52h69QYywOk74MS'
      );
    }
  }

  async sd_UrrVErq2TGvOMXlH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UrrVErq2TGvOMXlH');
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
  //appendnew_flow_rating_apis_Catch
}
