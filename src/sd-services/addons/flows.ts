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

  async getAddonsList(parentSpanInst, quote_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAddonsList',
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
      bh = await this.sd_yFr0o4oonuiyEKxG(bh, parentSpanInst);
      //appendnew_next_getAddonsList
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
        'sd_o47HcZwwA6EkSxOn',
        spanInst,
        'getAddonsList'
      );
    }
  }

  async checkAddonRiskExists(
    parentSpanInst,
    addon_code: any = undefined,
    risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'checkAddonRiskExists',
      parentSpanInst
    );
    let bh: any = {
      input: {
        addon_code,
        risk_items,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gGngVcCycLyacyLZ(bh, parentSpanInst);
      //appendnew_next_checkAddonRiskExists
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
        'sd_HeGlKX2Wa70K65Ld',
        spanInst,
        'checkAddonRiskExists'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_yFr0o4oonuiyEKxG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yFr0o4oonuiyEKxG',
      parentSpanInst
    );
    try {
      bh.query = `SELECT 
	LISTAGG(ri."id", ',' ) WITHIN GROUP (ORDER BY ri."id") AS risk_id,
	RIAO."add_on_code" AS selected_add_ons,
	DBMS_LOB.SUBSTR(riao."addl_details", 4000, 1) AS addl_details_substr,
	DBMS_LOB.SUBSTR(riao."premium_details", 4000, 1) AS premium_details_substr,
	RIAO."premium",
	RIAO."id"
FROM
	"risk_item" ri 
JOIN
	"risk_item_add_ons" riao ON riao."risk_id" = ri."id" 
WHERE 
	ri."quote_id" = :0
GROUP BY 
	RIAO."add_on_code",
	DBMS_LOB.SUBSTR(riao."addl_details", 4000, 1),
	DBMS_LOB.SUBSTR(riao."premium_details", 4000, 1),
	RIAO."premium",
	RIAO."id"`;

      bh.params = [bh.input.quote_id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xSinBtNJ77os0Ojt(bh, parentSpanInst);
      //appendnew_next_sd_yFr0o4oonuiyEKxG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yFr0o4oonuiyEKxG',
        spanInst,
        'sd_yFr0o4oonuiyEKxG'
      );
    }
  }

  async sd_xSinBtNJ77os0Ojt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xSinBtNJ77os0Ojt',
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
      bh.local.data = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RqmQQquekstX9FEV(bh, parentSpanInst);
      //appendnew_next_sd_xSinBtNJ77os0Ojt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xSinBtNJ77os0Ojt',
        spanInst,
        'sd_xSinBtNJ77os0Ojt'
      );
    }
  }

  async sd_RqmQQquekstX9FEV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RqmQQquekstX9FEV',
      parentSpanInst
    );
    try {
      // Create an array to store the modified objects
      const modifiedResult = bh.local.data.map((el) => {
        // Create a temporary object and assign values to it
        const tempObj = {
          add_on_id: el.id,
          add_on_code: el.SELECTED_ADD_ONS,
          risk_id: el.RISK_ID.split(','),
          premium: el.premium,
          addl_details: JSON.parse(el.ADDL_DETAILS_SUBSTR || '{}'),
          premium_details:
            el.PREMIUM_DETAILS_SUBSTR != 'undefined'
              ? JSON.parse(el.PREMIUM_DETAILS_SUBSTR)
              : {},
        };
        return tempObj; // Return the temporary object
      });

      // Initialize an object to store the count of risk items per add-on code
      const riskItemCountPerAddon = {};

      // Iterate through each element in the modifiedResult array
      modifiedResult.forEach((el) => {
        const { add_on_code, risk_id } = el;
        // Increment the count of risk items for the current add-on code
        riskItemCountPerAddon[add_on_code] =
          (riskItemCountPerAddon[add_on_code] || 0) + risk_id.length;
      });

      // Map over each element in the modifiedResult array to add totalCount
      const newData = modifiedResult.map((item) => {
        const addOnCode = item.add_on_code.toString(); // Convert add_on_code to string for consistent comparison
        if (riskItemCountPerAddon[addOnCode] !== undefined) {
          return {
            ...item,
            totalCount: riskItemCountPerAddon[addOnCode],
          };
        }
        return item;
      });

      // Assign the modified newData array to bh.local.result
      bh.local.result = newData.length > 0 ? newData : [];
      //make premium in add_details and premium_details same, premium_details is read only, add_details might have inputed premium
      bh.local.result.forEach((x) => {
        if (x['addl_details']) {
          x['addl_details'].premium = x['premium_details'].Premium;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_RqmQQquekstX9FEV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RqmQQquekstX9FEV',
        spanInst,
        'sd_RqmQQquekstX9FEV'
      );
    }
  }

  async sd_gGngVcCycLyacyLZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gGngVcCycLyacyLZ',
      parentSpanInst
    );
    try {
      const riskItemArr = bh.input.risk_items;
      const riskItemsCommaSep = riskItemArr.map((r) => String(r)).join(',');
      bh.query = `
SELECT "risk_id" FROM "risk_item_add_ons" WHERE "risk_id" IN (${riskItemsCommaSep}) AND "add_on_code" = ${bh.input.addon_code}
`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_up8CFdetFQYK9NWt(bh, parentSpanInst);
      //appendnew_next_sd_gGngVcCycLyacyLZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gGngVcCycLyacyLZ',
        spanInst,
        'sd_gGngVcCycLyacyLZ'
      );
    }
  }

  async sd_up8CFdetFQYK9NWt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_up8CFdetFQYK9NWt',
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
      bh.local.queryResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vFu9Mm2O9ATgQ5o1(bh, parentSpanInst);
      //appendnew_next_sd_up8CFdetFQYK9NWt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_up8CFdetFQYK9NWt',
        spanInst,
        'sd_up8CFdetFQYK9NWt'
      );
    }
  }

  async sd_vFu9Mm2O9ATgQ5o1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vFu9Mm2O9ATgQ5o1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.local.queryResult.map((r) => r.risk_id);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vFu9Mm2O9ATgQ5o1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vFu9Mm2O9ATgQ5o1',
        spanInst,
        'sd_vFu9Mm2O9ATgQ5o1'
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
