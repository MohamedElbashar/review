// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class db_flows {
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
    this.serviceName = 'db_flows';
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
      instance = new db_flows(
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
    //appendnew_flow_db_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: db_flows');
    //appendnew_flow_db_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: db_flows');
    //appendnew_flow_db_flows_HttpIn
  }
  //   service flows_db_flows

  async updateDb(
    parentSpanInst,
    filter: any = undefined,
    token_obj: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('updateDb', parentSpanInst);
    let bh: any = {
      input: {
        filter,
        token_obj,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateUrpayToken(bh, parentSpanInst);
      //appendnew_next_updateDb
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pd2XZZyJLrzCNrcK',
        spanInst,
        'updateDb'
      );
    }
  }

  async getPayerDetails(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
      },
      local: {
        payer_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yH9JFsEQcOfnHSO1(bh, parentSpanInst);
      //appendnew_next_getPayerDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payer_details: bh.local.payer_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b6mlaToeXs9MLZgJ',
        spanInst,
        'getPayerDetails'
      );
    }
  }
  //appendnew_flow_db_flows_start

  async updateUrpayToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateUrpayToken',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_dtkig9esmm',
        bh.input.filter,
        bh.input.token_obj
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_updateUrpayToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SH7sukacw13PBVwb',
        spanInst,
        'updateUrpayToken'
      );
    }
  }

  async sd_yH9JFsEQcOfnHSO1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yH9JFsEQcOfnHSO1',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd2."name",pd2."email", pd."payer_id",pd."checkout_id", pd2."source_id_no", pd."callback_url", pd."urpay_security_token",pd."urpay_session_id", pd."amount", concat(966, pd2."phone_no") "mobile_no", pd."urpay_verification_token", pd."urpay_otp_reference",
pd."voucher_code",pd."national_id",pd."application_id", json_value(pd2."addl_details", '$.frontend_cb_partial_url') "frontend_cb_partial_url"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON (pd2."id" = pd."payer_id") 
WHERE pd."checkout_id" = :1 AND pd2."source_id_no" = :2`;
      bh.params = [bh.input.parent_checkout_id, bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t7Rey3p1y1lde2Kb(bh, parentSpanInst);
      //appendnew_next_sd_yH9JFsEQcOfnHSO1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yH9JFsEQcOfnHSO1',
        spanInst,
        'sd_yH9JFsEQcOfnHSO1'
      );
    }
  }

  async sd_t7Rey3p1y1lde2Kb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t7Rey3p1y1lde2Kb',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
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
      bh.local.payer_details = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_icNzi5WmBCEikDcB(bh, parentSpanInst);
      //appendnew_next_sd_t7Rey3p1y1lde2Kb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t7Rey3p1y1lde2Kb',
        spanInst,
        'sd_t7Rey3p1y1lde2Kb'
      );
    }
  }

  async sd_icNzi5WmBCEikDcB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_icNzi5WmBCEikDcB',
      parentSpanInst
    );
    try {
      if (bh.local.payer_details.length > 0) {
        bh.local.payer_details = bh.local.payer_details[0];
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_icNzi5WmBCEikDcB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_icNzi5WmBCEikDcB',
        spanInst,
        'sd_icNzi5WmBCEikDcB'
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
  //appendnew_flow_db_flows_Catch
}
