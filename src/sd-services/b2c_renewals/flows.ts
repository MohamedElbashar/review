// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
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

  async getPoliciesByQueryType(
    parentSpanInst,
    body: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPoliciesByQueryType',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7VdbG84ausQ3LoH8(bh, parentSpanInst);
      //appendnew_next_getPoliciesByQueryType
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
        'sd_vE6wCpl4YCn7XByQ',
        spanInst,
        'getPoliciesByQueryType'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_7VdbG84ausQ3LoH8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7VdbG84ausQ3LoH8',
      parentSpanInst
    );
    try {
      const { customer_id, query_type } = bh.input.body;
      bh.params = [customer_id];

      bh.query = `SELECT * FROM "${process.env.ORCL_POL_USER}"."NEU_POLICY_DATA" WHERE "NATIONAL_ID" = :0 AND ((POLICY_EXPIRY_DATE BETWEEN SYSDATE AND SYSDATE + (SELECT "value" FROM "${process.env.ORCL_USER}"."system_setting" WHERE "code" = 'POLICY_EXPIRY_DAYS_DEFAULT')
OR POLICY_EXPIRY_DATE BETWEEN SYSDATE - (SELECT "value" FROM "${process.env.ORCL_USER}"."system_setting" WHERE "code" = 'GRACE_EXPIRY_DAYS_DEFAULT') AND SYSDATE))`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TNbVBEDgl76tboCk(bh, parentSpanInst);
      //appendnew_next_sd_7VdbG84ausQ3LoH8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7VdbG84ausQ3LoH8',
        spanInst,
        'sd_7VdbG84ausQ3LoH8'
      );
    }
  }

  async sd_TNbVBEDgl76tboCk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TNbVBEDgl76tboCk',
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
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_TNbVBEDgl76tboCk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TNbVBEDgl76tboCk',
        spanInst,
        'sd_TNbVBEDgl76tboCk'
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
