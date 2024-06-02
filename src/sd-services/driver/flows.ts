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

  async getDriverList(parentSpanInst, quote_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getDriverList',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_erNn5JrCO5HrYaYD(bh, parentSpanInst);
      //appendnew_next_getDriverList
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
        'sd_WcwTIrzpSBboIYej',
        spanInst,
        'getDriverList'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_erNn5JrCO5HrYaYD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_erNn5JrCO5HrYaYD',
      parentSpanInst
    );
    try {
      bh.query = `SELECT 
	d."id" ,
	d."first_name" || ' ' || d."last_name" AS full_name,
	d."id_no",
	LISTAGG(rid."risk_id", ',') AS risk_id,
	DBMS_LOB.SUBSTR(d."addl_details", 4000, 1) AS addl_details_substr
FROM 
	"driver" d  
JOIN
	"risk_item" ri ON ri."quote_id" = d."quote_id" 
LEFT JOIN 
	"risk_item_driver" rid ON (rid."driver_id" = d."id" AND rid."risk_id" = ri."id")  
WHERE 
	d."quote_id" = :0
GROUP BY 
	d."id",
	d."first_name",
	d."last_name",
	d."id_no",
	DBMS_LOB.SUBSTR(d."addl_details", 4000, 1)`;
      bh.params = [bh.input.quote_id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_V4rwoNeB7yVG78md(bh, parentSpanInst);
      //appendnew_next_sd_erNn5JrCO5HrYaYD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_erNn5JrCO5HrYaYD',
        spanInst,
        'sd_erNn5JrCO5HrYaYD'
      );
    }
  }

  async sd_V4rwoNeB7yVG78md(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V4rwoNeB7yVG78md',
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
      bh = await this.sd_l4khBzFqdI0V9RMj(bh, parentSpanInst);
      //appendnew_next_sd_V4rwoNeB7yVG78md
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V4rwoNeB7yVG78md',
        spanInst,
        'sd_V4rwoNeB7yVG78md'
      );
    }
  }

  async sd_l4khBzFqdI0V9RMj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l4khBzFqdI0V9RMj',
      parentSpanInst
    );
    try {
      let result = [];
      bh.local.result.forEach((el) => {
        let tempObj = {
          id: el.id,
          driver_name: el.FULL_NAME,
          id_no: el.id_no,
          risk_items: el.RISK_ID ? el.RISK_ID.split(',') : [],
          addl_details: JSON.parse(el.ADDL_DETAILS_SUBSTR),
        };
        result.push(tempObj);
      });

      bh.local.result = result;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_l4khBzFqdI0V9RMj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l4khBzFqdI0V9RMj',
        spanInst,
        'sd_l4khBzFqdI0V9RMj'
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
