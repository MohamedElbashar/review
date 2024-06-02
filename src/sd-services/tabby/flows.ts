// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S from './apigee_tabby_flow'; //_splitter_
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

  async nationalIdEligibility(
    parentSpanInst,
    national_id: any = undefined,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'nationalIdEligibility',
      parentSpanInst
    );
    let bh: any = {
      input: {
        national_id,
        source_id_no,
      },
      local: {
        national_id_eligiblity: false,
        customer_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_63ua4KNrncG91OBa(bh, parentSpanInst);
      //appendnew_next_nationalIdEligibility
      return (
        // formatting output variables
        {
          input: {},
          local: {
            national_id_eligiblity: bh.local.national_id_eligiblity,
            customer_details: bh.local.customer_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r9MAZCWd8iOXLYk1',
        spanInst,
        'nationalIdEligibility'
      );
    }
  }

  async getPaymentData(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPaymentData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
      },
      local: {
        payment_details: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YYCmrztUKZc3fsH1(bh, parentSpanInst);
      //appendnew_next_getPaymentData
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payment_details: bh.local.payment_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_khFSYwaLn9CwHgpC',
        spanInst,
        'getPaymentData'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_63ua4KNrncG91OBa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_63ua4KNrncG91OBa',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.input.national_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getCustomerCheck(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nnull'](
          bh.input.national_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getCustomerCheck(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_63ua4KNrncG91OBa',
        spanInst,
        'sd_63ua4KNrncG91OBa'
      );
    }
  }

  async getCustomerCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCustomerCheck',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1SInstance: SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S.apigee_tabby_flow =
        SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S.apigee_tabby_flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1SInstance.getCustomerHistory(
          spanInst,
          bh.input.national_id,
          bh.input.source_id_no
        );
      bh.local.customer_details = outputVariables.local.customer_details;
      bh.status_code = outputVariables.local.status_code;
      bh.local.national_id_eligiblity =
        outputVariables.local.national_id_eligiblity;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_getCustomerCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TI5HAMvA62YZUUHj',
        spanInst,
        'getCustomerCheck'
      );
    }
  }

  async sd_B698POf0pCalEQeq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B698POf0pCalEQeq',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_B698POf0pCalEQeq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B698POf0pCalEQeq',
        spanInst,
        'sd_B698POf0pCalEQeq'
      );
    }
  }

  async sd_YYCmrztUKZc3fsH1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YYCmrztUKZc3fsH1',
      parentSpanInst
    );
    try {
      bh.query = `select pd1."name",pd1."phone_no", pd1."source_id_no", pd1."email", pd."checkout_id", pd."callback_url", pd."transaction_receipt", pd1."addl_details"
from "payment_details" pd
left join "payer_details" pd1 on (pd1."id" = pd."payer_id")
where pd."checkout_id" = :1`;

      bh.params = [bh.input.parent_checkout_id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mjg1BEkNuFAbPu1Y(bh, parentSpanInst);
      //appendnew_next_sd_YYCmrztUKZc3fsH1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YYCmrztUKZc3fsH1',
        spanInst,
        'sd_YYCmrztUKZc3fsH1'
      );
    }
  }

  async sd_mjg1BEkNuFAbPu1Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mjg1BEkNuFAbPu1Y',
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
      bh.payment_details = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1VjbwLgecofeWp7r(bh, parentSpanInst);
      //appendnew_next_sd_mjg1BEkNuFAbPu1Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mjg1BEkNuFAbPu1Y',
        spanInst,
        'sd_mjg1BEkNuFAbPu1Y'
      );
    }
  }

  async sd_1VjbwLgecofeWp7r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1VjbwLgecofeWp7r',
      parentSpanInst
    );
    try {
      if (bh.payment_details.length > 0) {
        bh.local.payment_details = bh.payment_details[0];
      } else {
        bh.local.payment_details = [];
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1VjbwLgecofeWp7r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1VjbwLgecofeWp7r',
        spanInst,
        'sd_1VjbwLgecofeWp7r'
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
      (await this.sd_JmVqm6StaJIstz0y(bh, parentSpanInst))
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
  async sd_JmVqm6StaJIstz0y(bh, parentSpanInst) {
    const nodes = ['sd_TI5HAMvA62YZUUHj'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_B698POf0pCalEQeq(bh, parentSpanInst);
      //appendnew_next_sd_JmVqm6StaJIstz0y
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
