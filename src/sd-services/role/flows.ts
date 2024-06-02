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

  async createUpdateRolePermission(
    parentSpanInst,
    role_id = 0,
    permission_list: any = [],
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createUpdateRolePermission',
      parentSpanInst
    );
    let bh: any = {
      input: {
        role_id,
        permission_list,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setScript0(bh, parentSpanInst);
      //appendnew_next_createUpdateRolePermission
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
        'sd_HUBSH3oeB2QuNzJb',
        spanInst,
        'createUpdateRolePermission'
      );
    }
  }

  async getRolePermission(parentSpanInst, role_id = 0, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getRolePermission',
      parentSpanInst
    );
    let bh: any = {
      input: {
        role_id,
      },
      local: {
        result: undefined,
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setScript1(bh, parentSpanInst);
      //appendnew_next_getRolePermission
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
        'sd_EOvZ709dlrYoFshw',
        spanInst,
        'getRolePermission'
      );
    }
  }

  async filterRolePermission(
    parentSpanInst,
    role_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'filterRolePermission',
      parentSpanInst
    );
    let bh: any = {
      input: {
        role_id,
      },
      local: {
        result: undefined,
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setScript2(bh, parentSpanInst);
      //appendnew_next_filterRolePermission
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
        'sd_8gS1iLsHobfVbYZ2',
        spanInst,
        'filterRolePermission'
      );
    }
  }
  //appendnew_flow_flows_start

  async setScript0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setScript0',
      parentSpanInst
    );
    try {
      bh.filter = {
        role_id: bh.input.role_id,
      };

      bh.body = {
        role_permission: [],
      };

      bh.body = [];

      bh.input.permission_list = bh.input.permission_list || [];
      bh.input.permission_list.forEach((x) => {
        bh.body.push({
          role_id: bh.input.role_id,
          permission_id: x,
        });
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.rmRolePermission(bh, parentSpanInst);
      //appendnew_next_setScript0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MHZN4jAdHCGBpTHB',
        spanInst,
        'setScript0'
      );
    }
  }

  async rmRolePermission(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'rmRolePermission',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.result = await dmUtilsInst.delete('_EN_dyeg1vpdt5', bh.filter);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertRolePermission(bh, parentSpanInst);
      //appendnew_next_rmRolePermission
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vnC67fvTMRQmZ0do',
        spanInst,
        'rmRolePermission'
      );
    }
  }

  async insertRolePermission(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertRolePermission',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.local.result = await dmUtilsInst.insert('_EN_dyeg1vpdt5', bh.body);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_insertRolePermission
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C8Pw0hWE1w2bXu32',
        spanInst,
        'insertRolePermission'
      );
    }
  }

  async setScript1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setScript1',
      parentSpanInst
    );
    try {
      bh.query = `SELECT * FROM "vw_role_permission" WHERE "id" = :1`;
      bh.params = [bh.input.role_id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.vwRolePermission(bh, parentSpanInst);
      //appendnew_next_setScript1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HFNHA2l96kO4qDud',
        spanInst,
        'setScript1'
      );
    }
  }

  async vwRolePermission(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'vwRolePermission',
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
      bh.data = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jo8TfC9YWqqA9p3r(bh, parentSpanInst);
      //appendnew_next_vwRolePermission
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lqBFxMEU4V8lM6DW',
        spanInst,
        'vwRolePermission'
      );
    }
  }

  async sd_jo8TfC9YWqqA9p3r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jo8TfC9YWqqA9p3r',
      parentSpanInst
    );
    try {
      bh.local.status = false;
      if (bh.data.length) {
        bh.local.status = true;
        bh.local.result = {
          id: bh.data[0].id,
          name: bh.data[0].name,
          tenant_id: bh.data[0].tenant_id,
          permission_list: bh.data.map((x) => x.code).filter((y) => y != null),
        };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jo8TfC9YWqqA9p3r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jo8TfC9YWqqA9p3r',
        spanInst,
        'sd_jo8TfC9YWqqA9p3r'
      );
    }
  }

  async setScript2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setScript2',
      parentSpanInst
    );
    try {
      let commaSeparatedString = [];
      if (Array.isArray(bh.input.role_id)) {
        const role_id = bh.input.role_id;
        commaSeparatedString = commaSeparatedString = role_id
          .map((item) => "'" + item + "'")
          .join(', ');
        bh.query =
          `SELECT * FROM "role" WHERE "tenant_id" IN (` +
          commaSeparatedString +
          `)`;
      } else {
        bh.query = `SELECT * FROM "role"`;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.vwRolePermission1(bh, parentSpanInst);
      //appendnew_next_setScript2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_grXz34CnYAwMLpD3',
        spanInst,
        'setScript2'
      );
    }
  }

  async vwRolePermission1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'vwRolePermission1',
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
      bh.data = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JWealReedLAUuHCt(bh, parentSpanInst);
      //appendnew_next_vwRolePermission1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EjoMRtmokWA5OThd',
        spanInst,
        'vwRolePermission1'
      );
    }
  }

  async sd_JWealReedLAUuHCt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JWealReedLAUuHCt',
      parentSpanInst
    );
    try {
      // bh.local.status = false;
      // // bh.local.result = bh.data
      // console.log('sadsadasda',bh.data)
      // if (bh.data.length && bh.data?.payload) {
      //    bh.data?.payload.forEach((ele) => {
      //         bh.local.result.push({
      //         id: ele.id,
      //         name: ele.name,
      //         tenant_id: ele.tenant_id,
      //     })
      //    })
      //      bh.local.status = true;
      // }

      // //  bh.local.result = {
      // //         id: bh.data[0].id,
      // //         name: bh.data[0].name,
      // //         tenant_id: bh.data[0].tenant_id,
      // //         permission_list: bh.data.map(x => x.code).filter(y => y != null)
      // //     }

      bh.local.result = bh.data;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JWealReedLAUuHCt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JWealReedLAUuHCt',
        spanInst,
        'sd_JWealReedLAUuHCt'
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
