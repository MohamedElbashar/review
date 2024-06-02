// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr from '../utils/flows'; //_splitter_
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

  async getUserList(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getUserList',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
        status: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e479xgpWsEydKOxV(bh, parentSpanInst);
      //appendnew_next_getUserList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tghnflKT1JQXqLgr',
        spanInst,
        'getUserList'
      );
    }
  }

  async filterOptions(
    parentSpanInst,
    is_super_admin: any = undefined,
    tenant_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'filterOptions',
      parentSpanInst
    );
    let bh: any = {
      input: {
        is_super_admin,
        tenant_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_To2zDiLxnccHUd30(bh, parentSpanInst);
      //appendnew_next_filterOptions
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
        'sd_FxtWnyB9oWxTpC1u',
        spanInst,
        'filterOptions'
      );
    }
  }

  async managedByUser(parentSpanInst, user_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'managedByUser',
      parentSpanInst
    );
    let bh: any = {
      input: {
        user_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MhTnc4hfSb8roCAp(bh, parentSpanInst);
      //appendnew_next_managedByUser
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
        'sd_ZV0gtTJqggdBqo7R',
        spanInst,
        'managedByUser'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_e479xgpWsEydKOxV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e479xgpWsEydKOxV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawrInstance: SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr.flows =
        SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr.flows.getInstance();
      bh = await SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawrInstance.parameterizeValues(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PV0XCEH77j00h4dR(bh, parentSpanInst);
      //appendnew_next_sd_e479xgpWsEydKOxV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e479xgpWsEydKOxV',
        spanInst,
        'sd_e479xgpWsEydKOxV'
      );
    }
  }

  async sd_PV0XCEH77j00h4dR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PV0XCEH77j00h4dR',
      parentSpanInst
    );
    try {
      const [orderBy, orderValue] = Object.entries(bh.input.body.orderBy)[0];
      bh.where_conditions = ``;
      bh.params = [];
      bh.counter = 0;
      if (!bh.input.body.is_super_admin) {
        bh.params = bh.input.body.filter.tenant_id;
        bh.where_conditions = `WHERE u."tenant_id" = :0`;
        bh.counter = 1;
      }

      let filter_keys = Object.keys(bh.input.body.filter);

      if (filter_keys.length > 0) {
        filter_keys.forEach((el) => {
          switch (el) {
            case 'tenant_id':
              if (bh.input.body.is_super_admin) {
                const tenentParams = bh.local.parameterizedQuery(
                  bh.input.body.filter.tenant_id,
                  bh.counter
                );
                bh.counter > 0
                  ? (bh.where_conditions += `AND u."tenant_id" IN(${tenentParams.counter})`)
                  : (bh.where_conditions = `WHERE u."tenant_id" IN(${tenentParams.counter})`);
                bh.params.push(...tenentParams.values);
                bh.counter = tenentParams.count;
              }
              break;
            case 'managed_by':
              const reportedParams = bh.local.parameterizedQuery(
                bh.input.body.filter.managed_by,
                bh.counter
              );
              bh.counter > 0
                ? (bh.where_conditions += `AND u."managed_by" IN(${reportedParams.counter})`)
                : (bh.where_conditions = `WHERE u."managed_by" IN(${reportedParams.counter})`);
              bh.params.push(...reportedParams.values);
              bh.counter = reportedParams.count;
              break;
            case 'role_id':
              const roleParams = bh.local.parameterizedQuery(
                bh.input.body.filter.role_id,
                bh.counter
              );
              bh.counter > 0
                ? (bh.where_conditions += ` AND u."role_id" IN(${roleParams.counter})`)
                : (bh.where_conditions = `WHERE u."role_id" IN(${roleParams.counter})`);
              bh.params.push(...roleParams.values);
              bh.counter = roleParams.count;
              break;
            case 'searchString':
              bh.counter > 0
                ? (bh.where_conditions +=
                    `AND TO_CHAR(u."username") LIKE '%' || :${bh.counter} || '%'` +
                    `OR TO_CHAR(u."email_id") LIKE '%' || :${++bh.counter} || '%' ` +
                    `OR TO_CHAR(u."phone_no") LIKE '%' || :${++bh.counter} || '%'`)
                : (bh.where_conditions =
                    `WHERE TO_CHAR(u."username") LIKE '%' || :${bh.counter} || '%'` +
                    `OR TO_CHAR(u."email_id") LIKE '%' || :${++bh.counter} || '%' ` +
                    `OR TO_CHAR(u."phone_no") LIKE '%' || :${++bh.counter} || '%'`);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.counter++;
              break;
          }
        });
      }

      bh.query = `SELECT u.* , COUNT(*) OVER() AS total_count FROM "user" u
    ${bh.where_conditions}
ORDER BY
    u."${orderBy}" ${orderValue}
OFFSET
    ${bh.input.body.offSet} ROWS
FETCH NEXT
    ${bh.input.body.pageSize} ROWS ONLY`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7yusdhaW5kxScNO0(bh, parentSpanInst);
      //appendnew_next_sd_PV0XCEH77j00h4dR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PV0XCEH77j00h4dR',
        spanInst,
        'sd_PV0XCEH77j00h4dR'
      );
    }
  }

  async sd_7yusdhaW5kxScNO0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7yusdhaW5kxScNO0',
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
      bh = await this.sd_cWDVrLk5MaChDpHz(bh, parentSpanInst);
      //appendnew_next_sd_7yusdhaW5kxScNO0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7yusdhaW5kxScNO0',
        spanInst,
        'sd_7yusdhaW5kxScNO0'
      );
    }
  }

  async sd_cWDVrLk5MaChDpHz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cWDVrLk5MaChDpHz',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cWDVrLk5MaChDpHz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cWDVrLk5MaChDpHz',
        spanInst,
        'sd_cWDVrLk5MaChDpHz'
      );
    }
  }

  async sd_To2zDiLxnccHUd30(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_To2zDiLxnccHUd30',
      parentSpanInst
    );
    try {
      bh.where_conditions = '';
      bh.params = [];
      if (!bh.input.is_super_admin) {
        bh.params = [bh.input.tenant_id];
        bh.where_conditions = `WHERE u."tenant_id" = :0`;
      }

      bh.query = `SELECT DISTINCT u."id", u."username"
FROM "user" u 
JOIN "user" u2 ON u."id" = u2."managed_by"
    ${bh.where_conditions}`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MZo8ygK2qvNgq7X1(bh, parentSpanInst);
      //appendnew_next_sd_To2zDiLxnccHUd30
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_To2zDiLxnccHUd30',
        spanInst,
        'sd_To2zDiLxnccHUd30'
      );
    }
  }

  async sd_MZo8ygK2qvNgq7X1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MZo8ygK2qvNgq7X1',
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
      bh = await this.sd_sad7HjZCPCNkanHT(bh, parentSpanInst);
      //appendnew_next_sd_MZo8ygK2qvNgq7X1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MZo8ygK2qvNgq7X1',
        spanInst,
        'sd_MZo8ygK2qvNgq7X1'
      );
    }
  }

  async sd_sad7HjZCPCNkanHT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sad7HjZCPCNkanHT',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_sad7HjZCPCNkanHT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sad7HjZCPCNkanHT',
        spanInst,
        'sd_sad7HjZCPCNkanHT'
      );
    }
  }

  async sd_MhTnc4hfSb8roCAp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MhTnc4hfSb8roCAp',
      parentSpanInst
    );
    try {
      bh.params = [bh.input.user_id];
      bh.query = `SELECT DISTINCT u."id", u."first_name" || ' ' || u."last_name" AS fullname from "user" u start with u."managed_by" = :0 connect by NOCYCLE prior u."id" = u."managed_by"`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lvonNcYQOcc7KTUm(bh, parentSpanInst);
      //appendnew_next_sd_MhTnc4hfSb8roCAp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MhTnc4hfSb8roCAp',
        spanInst,
        'sd_MhTnc4hfSb8roCAp'
      );
    }
  }

  async sd_lvonNcYQOcc7KTUm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lvonNcYQOcc7KTUm',
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
      bh = await this.sd_Bafzl1VAQHt29AqY(bh, parentSpanInst);
      //appendnew_next_sd_lvonNcYQOcc7KTUm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lvonNcYQOcc7KTUm',
        spanInst,
        'sd_lvonNcYQOcc7KTUm'
      );
    }
  }

  async sd_Bafzl1VAQHt29AqY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bafzl1VAQHt29AqY',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Bafzl1VAQHt29AqY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bafzl1VAQHt29AqY',
        spanInst,
        'sd_Bafzl1VAQHt29AqY'
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
