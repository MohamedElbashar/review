// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J from '../utils/message_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb from './flows'; //_splitter_
//append_imports_end
export class role_permission_apis {
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
    this.serviceName = 'role_permission_apis';
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
      instance = new role_permission_apis(
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
    //appendnew_flow_role_permission_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: role_permission_apis');
    //appendnew_flow_role_permission_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: role_permission_apis');

    this.app['post'](
      `${this.serviceBasePath}/role/map-permission`,
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
          bh = await this.upsertRolePermission(bh, parentSpanInst);
          //appendnew_next_sd_Sx1XuWlqhc3Lbdjv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Sx1XuWlqhc3Lbdjv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/role/get-permissions`,
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
          bh = await this.getRolePermission(bh, parentSpanInst);
          //appendnew_next_sd_lXHB2hNybNFyvcpL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lXHB2hNybNFyvcpL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/filter/roles`,
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
          bh = await this.sd_17f7MnBpqQYi7k4t(bh, parentSpanInst);
          //appendnew_next_sd_YoYutJT1YxVZAPZw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YoYutJT1YxVZAPZw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_role_permission_apis_HttpIn
  }
  //   service flows_role_permission_apis

  //appendnew_flow_role_permission_apis_start

  async upsertRolePermission(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'upsertRolePermission',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJbInstance: SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb.flows =
        SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJbInstance.createUpdateRolePermission(
          spanInst,
          bh.input.body.role_id,
          bh.input.body.permission_list
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_FX9JJGKbgyp1Ul3I(bh, parentSpanInst);
      //appendnew_next_upsertRolePermission
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WdMOwITGXYwBpX8L',
        spanInst,
        'upsertRolePermission'
      );
    }
  }

  async sd_FX9JJGKbgyp1Ul3I(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ status: true });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FX9JJGKbgyp1Ul3I');
    }
  }

  async getRolePermission(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRolePermission',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJbInstance: SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb.flows =
        SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJbInstance.getRolePermission(
          spanInst,
          bh.input.body.id
        );
      bh.response = outputVariables.local.result;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xKcPIrXM01f5SfcD(bh, parentSpanInst);
      //appendnew_next_getRolePermission
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_70glS1ivUbPMHnsU',
        spanInst,
        'getRolePermission'
      );
    }
  }

  async sd_xKcPIrXM01f5SfcD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xKcPIrXM01f5SfcD',
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
        bh = await this.sd_CBbHH4XKJgoZnACL(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getErrorMsg(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xKcPIrXM01f5SfcD',
        spanInst,
        'sd_xKcPIrXM01f5SfcD'
      );
    }
  }

  async sd_CBbHH4XKJgoZnACL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CBbHH4XKJgoZnACL',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_uLGbogfGUqjO7pGL(bh, parentSpanInst);
      //appendnew_next_sd_CBbHH4XKJgoZnACL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CBbHH4XKJgoZnACL',
        spanInst,
        'sd_CBbHH4XKJgoZnACL'
      );
    }
  }

  async sd_uLGbogfGUqjO7pGL(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uLGbogfGUqjO7pGL');
    }
  }

  async getErrorMsg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getErrorMsg',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9JInstance: SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J.message_cache =
        SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J.message_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9JInstance.getMessage(
          spanInst,
          'HTTP_404',
          bh.web.req.headers['lng']
        );
      bh.error_msg = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qkX8CMLpwAZRCXPy(bh, parentSpanInst);
      //appendnew_next_getErrorMsg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8WIt9H9Gq5aK2dPb',
        spanInst,
        'getErrorMsg'
      );
    }
  }

  async sd_qkX8CMLpwAZRCXPy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qkX8CMLpwAZRCXPy',
      parentSpanInst
    );
    try {
      bh.statusCode = 404;
      bh.response = {
        error: bh.error_msg,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uLGbogfGUqjO7pGL(bh, parentSpanInst);
      //appendnew_next_sd_qkX8CMLpwAZRCXPy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qkX8CMLpwAZRCXPy',
        spanInst,
        'sd_qkX8CMLpwAZRCXPy'
      );
    }
  }

  async sd_17f7MnBpqQYi7k4t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_17f7MnBpqQYi7k4t',
      parentSpanInst
    );
    try {
      bh.id = bh.input.body.filter?.id || {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TiJN7D04dsLWMo2Z(bh, parentSpanInst);
      //appendnew_next_sd_17f7MnBpqQYi7k4t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_17f7MnBpqQYi7k4t',
        spanInst,
        'sd_17f7MnBpqQYi7k4t'
      );
    }
  }

  async sd_TiJN7D04dsLWMo2Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TiJN7D04dsLWMo2Z',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJbInstance: SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb.flows =
        SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJbInstance.filterRolePermission(
          spanInst,
          bh.id
        );
      bh.result = outputVariables.local.result;
      bh.status = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_kiSCg95B3LHuOZpz(bh, parentSpanInst);
      //appendnew_next_sd_TiJN7D04dsLWMo2Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TiJN7D04dsLWMo2Z',
        spanInst,
        'sd_TiJN7D04dsLWMo2Z'
      );
    }
  }

  async sd_kiSCg95B3LHuOZpz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kiSCg95B3LHuOZpz');
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
  //appendnew_flow_role_permission_apis_Catch
}
