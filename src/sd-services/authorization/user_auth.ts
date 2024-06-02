// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J from '../utils/message_cache'; //_splitter_
//append_imports_end
export class user_auth {
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
    this.serviceName = 'user_auth';
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
      instance = new user_auth(
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
    //appendnew_flow_user_auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: user_auth');
    //appendnew_flow_user_auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: user_auth');

    this.app['post'](
      `${this.serviceBasePath}/user/auth-info`,
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
          bh = await this.sd_2xzz6UjAlMXx1y5x(bh, parentSpanInst);
          //appendnew_next_sd_UlTegki7maequ16q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UlTegki7maequ16q');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_user_auth_HttpIn
  }
  //   service flows_user_auth

  //appendnew_flow_user_auth_start

  async sd_2xzz6UjAlMXx1y5x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2xzz6UjAlMXx1y5x',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.body.username,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WwEm4hJCDHXnCzHG(bh, parentSpanInst);
      } else {
        bh = await this.getErrorMsg(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2xzz6UjAlMXx1y5x',
        spanInst,
        'sd_2xzz6UjAlMXx1y5x'
      );
    }
  }

  async sd_WwEm4hJCDHXnCzHG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WwEm4hJCDHXnCzHG',
      parentSpanInst
    );
    try {
      // bh.query = `SELECT
      // 		u."id",
      // 	    u."username",
      // 	    u."is_super_admin",
      // 		u."is_tenant_admin",
      // 		u."first_name",
      // 		u."last_name",
      // 		u."email_id",
      // 		u."phone_no",
      // 		u."phone_country_code",
      // 		u."is_active",
      // 	    r."name" AS role_name,
      // 		t."id" AS tenant_id,
      // 	    t."name" AS tenant_name,
      // 	    t."logo",
      // 	    t."addl_details",
      // 	    t."code",
      // 	    p."code" AS permission_name
      // 	FROM
      // 	    "user" u
      // 	LEFT JOIN
      // 	    "role" r ON u."role_id" = r."id"
      // 	LEFT JOIN
      // 		"tenant" t ON u."tenant_id" = t."id"
      // 	LEFT JOIN
      // 		"role_permission" rp ON NVL(u."role_id", -1) = rp."role_id"
      // 	LEFT JOIN
      // 	    "permission" p ON rp."permission_id" = p."id"
      // 	WHERE
      // 	    u."username" = :1`;

      // bh.params = [bh.input.body.username];
      //previ query
      // WHERE
      //     (u."username" = :1 AND u."role_id" IS NULL AND u."tenant_id" IS NULL AND u."is_super_admin" = 1)
      //     OR
      //     (u."username" = :2 AND u."role_id" IS NOT NULL AND u."tenant_id" IS NOT NULL )`;

      //   bh.params = [bh.input.body.username, bh.input.body.username];
      bh.query = `SELECT 
		u."id",
	    u."username",
	    u."is_super_admin",
		u."is_tenant_admin",
		u."first_name",
		u."last_name",
		u."email_id",
		u."phone_no",
		u."is_active" AS user_status,
		u."phone_country_code",
		u."branch_id",
		u."region_id",
		u."addl_details" AS user_addl_details,
	    r."name" AS role_name,
		t."id" AS tenant_id,
	    t."name" AS tenant_name,
		t."is_active" AS tenant_status,
	    t."logo",
		t."channel_type",
	    t."addl_details" as tenant_addl_details,
	    t."code",
	    p."code" AS permission_name
	FROM 
	    "user" u 
	LEFT JOIN 
	    "role" r ON u."role_id" = r."id"
	LEFT JOIN 
		"tenant" t ON u."tenant_id" = t."id"
	LEFT JOIN 
		"role_permission" rp ON NVL(u."role_id", -1) = rp."role_id"
	LEFT JOIN
	    "permission" p ON rp."permission_id" = p."id"
	WHERE 
	   LOWER(u."username") = :1`;

      bh.params = [bh.input.body.username.toLowerCase()];

      //previ query
      // WHERE
      //     (u."username" = :1 AND u."role_id" IS NULL AND u."tenant_id" IS NULL AND u."is_super_admin" = 1)
      //     OR
      //     (u."username" = :2 AND u."role_id" IS NOT NULL AND u."tenant_id" IS NOT NULL )`;
      //   bh.params = [bh.input.body.username, bh.input.body.username];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Uu2h974f7Jp31142(bh, parentSpanInst);
      //appendnew_next_sd_WwEm4hJCDHXnCzHG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WwEm4hJCDHXnCzHG',
        spanInst,
        'sd_WwEm4hJCDHXnCzHG'
      );
    }
  }

  async sd_Uu2h974f7Jp31142(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uu2h974f7Jp31142',
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
      bh = await this.sd_UljzQ0hhtNg8AOZ0(bh, parentSpanInst);
      //appendnew_next_sd_Uu2h974f7Jp31142
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uu2h974f7Jp31142',
        spanInst,
        'sd_Uu2h974f7Jp31142'
      );
    }
  }

  async sd_UljzQ0hhtNg8AOZ0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UljzQ0hhtNg8AOZ0',
      parentSpanInst
    );
    try {
      if (bh.result.length > 0) {
        let tempArray = [];

        bh.result.forEach((el) => {
          if (
            el.hasOwnProperty('PERMISSION_NAME') &&
            el['PERMISSION_NAME'] !== null
          ) {
            tempArray.push(el.PERMISSION_NAME);
          }
        });

        delete bh.result[0]['PERMISSION_NAME'];

        bh.result[0]['permissions'] = tempArray;

        let tempObj = bh.result[0];
        let lowerCaseObj = {};
        let keys = Object.keys(tempObj);
        keys.forEach((el) => {
          lowerCaseObj[el.toLowerCase()] = tempObj[el];
        });

        bh.response = lowerCaseObj;
      } else {
        bh.response = {};
      }
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LQ6QR9FPe07z9xY9(bh, parentSpanInst);
      //appendnew_next_sd_UljzQ0hhtNg8AOZ0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UljzQ0hhtNg8AOZ0',
        spanInst,
        'sd_UljzQ0hhtNg8AOZ0'
      );
    }
  }

  async sd_LQ6QR9FPe07z9xY9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LQ6QR9FPe07z9xY9');
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
          'HTTP_400',
          bh.web.req.headers['lng']
        );
      bh.error_msg = outputVariables.local.message;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Pm6ubYOarcFaEmHG(bh, parentSpanInst);
      //appendnew_next_getErrorMsg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_klODq0HMuIAjus4c',
        spanInst,
        'getErrorMsg'
      );
    }
  }

  async sd_Pm6ubYOarcFaEmHG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pm6ubYOarcFaEmHG',
      parentSpanInst
    );
    try {
      bh.statusCode = 400;
      bh.response = {
        error: bh.error_msg,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LQ6QR9FPe07z9xY9(bh, parentSpanInst);
      //appendnew_next_sd_Pm6ubYOarcFaEmHG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pm6ubYOarcFaEmHG',
        spanInst,
        'sd_Pm6ubYOarcFaEmHG'
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
  //appendnew_flow_user_auth_Catch
}
