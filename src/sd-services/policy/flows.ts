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

  async getPolicies2(
    parentSpanInst,
    body: any = undefined,
    policy_numbers: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPolicies2',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        policy_numbers,
      },
      local: {
        result: undefined,
        status: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cIIy31Ese2l0MgXd(bh, parentSpanInst);
      //appendnew_next_getPolicies2
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
        'sd_8AFUclrVqWpiGNYU',
        spanInst,
        'getPolicies2'
      );
    }
  }

  async getAgentsData(parentSpanInst, agent_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAgentsData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        agent_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Z0klyL5b1ZlZHEnh(bh, parentSpanInst);
      //appendnew_next_getAgentsData
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
        'sd_EArke4aFpU9W0t2q',
        spanInst,
        'getAgentsData'
      );
    }
  }

  async getGroupAgentsData(
    parentSpanInst,
    user_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getGroupAgentsData',
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
      bh = await this.sd_oHYuV6Gx9sVlLMVC(bh, parentSpanInst);
      //appendnew_next_getGroupAgentsData
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
        'sd_2lwL2Uu26WbUOeJ3',
        spanInst,
        'getGroupAgentsData'
      );
    }
  }

  async getPolicies(
    parentSpanInst,
    filter: any = undefined,
    orderBy: any = undefined,
    pageSize: any = undefined,
    offset: any = undefined,
    viewType: any = undefined,
    teamPolicy: any = undefined,
    agent_id: any = undefined,
    user_id: any = undefined,
    login_type: any = 'KC',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPolicies',
      parentSpanInst
    );
    let bh: any = {
      input: {
        filter,
        orderBy,
        pageSize,
        offset,
        viewType,
        teamPolicy,
        agent_id,
        user_id,
        login_type,
      },
      local: {
        result: undefined,
        status: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pA7YFQUNHcWo0fQ0(bh, parentSpanInst);
      //appendnew_next_getPolicies
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
        'sd_5EiMh2gIGf3pBiZE',
        spanInst,
        'getPolicies'
      );
    }
  }

  async filterOptions(
    parentSpanInst,
    login_type: any = undefined,
    agent_id: any = undefined,
    viewType: any = undefined,
    user_id: any = undefined,
    teamPolicy: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'filterOptions',
      parentSpanInst
    );
    let bh: any = {
      input: {
        login_type,
        agent_id,
        viewType,
        user_id,
        teamPolicy,
      },
      local: {
        status: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zUu72XQ0FaTwB9D7(bh, parentSpanInst);
      //appendnew_next_filterOptions
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6cY6e7LU785pglMV',
        spanInst,
        'filterOptions'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_cIIy31Ese2l0MgXd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cIIy31Ese2l0MgXd',
      parentSpanInst
    );
    try {
      const placeholders = bh.input.policy_numbers
        .map((_, index) => `:${index}`)
        .join(', ');
      const [orderBy, orderValue] = Object.entries(bh.input.body.orderBy)[0];
      bh.where_conditions = `WHERE p."SEGMENT_CODE" IN (${placeholders})`;
      bh.params = bh.input.policy_numbers;
      bh.counter = bh.params.length;

      if (bh.input.body.viewType == 'Active') {
        bh.where_conditions += ` AND TO_TIMESTAMP(p.EXPIRY_DATE, 'YYYY-MM-DD"T"HH24:MI:SS') > CURRENT_TIMESTAMP`;
      } else {
        bh.where_conditions += ` AND TO_TIMESTAMP(p.EXPIRY_DATE, 'YYYY-MM-DD"T"HH24:MI:SS') < CURRENT_TIMESTAMP`;
      }

      let filter_keys = bh.input.body.filter
        ? Object.keys(bh.input.body.filter)
        : [];
      if (filter_keys.length > 0) {
        filter_keys.forEach((el) => {
          switch (el) {
            case 'premium':
              bh.where_conditions += ` AND p.NET_PREMIUM BETWEEN :${
                bh.counter
              } AND :${++bh.counter} `;
              bh.params.push(
                bh.input.body.filter['premium']['min'],
                bh.input.body.filter['premium']['max']
              );
              bh.counter++;
              break;
            case 'effective_date':
              bh.where_conditions += ` AND TO_TIMESTAMP(p.EFFECTIVE_DATE, 'YYYY-MM-DD"T"HH24:MI:SS')  BETWEEN TO_TIMESTAMP(:${
                bh.counter
              }, 'YYYY-MM-DD"T"HH24:MI:SS') AND TO_TIMESTAMP(:${++bh.counter}, 'YYYY-MM-DD"T"HH24:MI:SS')`;
              bh.params = bh.params.concat(
                bh.input.body.filter['effective_date']['from']
              );
              bh.params = bh.params.concat(
                bh.input.body.filter['effective_date']['to']
              );
              bh.counter++;
              break;
            case 'expiry_date':
              bh.where_conditions += ` AND TO_TIMESTAMP(p.EXPIRY_DATE, 'YYYY-MM-DD"T"HH24:MI:SS') BETWEEN TO_TIMESTAMP(:${
                bh.counter
              }, 'YYYY-MM-DD"T"HH24:MI:SS') AND TO_TIMESTAMP(:${++bh.counter}, 'YYYY-MM-DD"T"HH24:MI:SS')`;
              bh.params = bh.params.concat(
                bh.input.body.filter['expiry_date']['from']
              );
              bh.params = bh.params.concat(
                bh.input.body.filter['expiry_date']['to']
              );
              bh.counter++;
              break;
            case 'searchString':
              bh.where_conditions +=
                ` AND (TO_CHAR(p.POLICY_NO) LIKE '%' || :${bh.counter} || '%' ` +
                `OR TO_CHAR(p.SEGMENT_CODE) LIKE '%' || :${++bh.counter} || '%' ` +
                `OR TO_CHAR(p.NET_PREMIUM) LIKE '%' || :${++bh.counter} || '%' ` +
                `OR TO_CHAR(b.MOBILE) LIKE '%' || :${++bh.counter} || '%' )`;
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.counter++;
              break;
          }
        });
      }

      bh.query = `SELECT p.DOCUMENT_TYPE,p.POLICY_NO,p.SEGMENT_CODE,p.EFFECTIVE_DATE,p.EXPIRY_DATE,p.SUMINSURED,p.INSURED_NAME,p.NET_PREMIUM,p.QUOTATION_EXP_DATE,p.AGENT_TYPE,p.BUSINESS_CHANNEL,b.MOBILE,b.NAME,
CASE WHEN TO_TIMESTAMP(p.EXPIRY_DATE , 'YYYY-MM-DD"T"HH24:MI:SS') < CURRENT_TIMESTAMP THEN 'Expired' ELSE 'Active' END AS expiry_status
FROM "POLICY_DATA" p 
JOIN BORKER_AGENTS_DATA b ON p.SEGMENT_CODE = b.POLICY_NO
${bh.where_conditions}
ORDER BY p."${orderBy}" ${orderValue}
OFFSET ${bh.input.body.offSet} ROWS
FETCH NEXT ${bh.input.body.pageSize} ROWS ONLY`;

      //

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KOl2QoDtvMQoxe9U(bh, parentSpanInst);
      //appendnew_next_sd_cIIy31Ese2l0MgXd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cIIy31Ese2l0MgXd',
        spanInst,
        'sd_cIIy31Ese2l0MgXd'
      );
    }
  }

  async sd_KOl2QoDtvMQoxe9U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KOl2QoDtvMQoxe9U',
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
      bh = await this.sd_gq6sVKVjmF42I2Yp(bh, parentSpanInst);
      //appendnew_next_sd_KOl2QoDtvMQoxe9U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KOl2QoDtvMQoxe9U',
        spanInst,
        'sd_KOl2QoDtvMQoxe9U'
      );
    }
  }

  async sd_gq6sVKVjmF42I2Yp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gq6sVKVjmF42I2Yp',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gq6sVKVjmF42I2Yp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gq6sVKVjmF42I2Yp',
        spanInst,
        'sd_gq6sVKVjmF42I2Yp'
      );
    }
  }

  async sd_Z0klyL5b1ZlZHEnh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z0klyL5b1ZlZHEnh',
      parentSpanInst
    );
    try {
      bh.params = [bh.input.agent_id];
      bh.query = `SELECT ba."POLICY_NO"
FROM "BORKER_AGENTS_DATA" ba WHERE ba.ID = :0`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qc8gyIaFBB3IHlnt(bh, parentSpanInst);
      //appendnew_next_sd_Z0klyL5b1ZlZHEnh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z0klyL5b1ZlZHEnh',
        spanInst,
        'sd_Z0klyL5b1ZlZHEnh'
      );
    }
  }

  async sd_qc8gyIaFBB3IHlnt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qc8gyIaFBB3IHlnt',
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
      bh = await this.c1(bh, parentSpanInst);
      //appendnew_next_sd_qc8gyIaFBB3IHlnt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qc8gyIaFBB3IHlnt',
        spanInst,
        'sd_qc8gyIaFBB3IHlnt'
      );
    }
  }

  async c1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('c1', parentSpanInst);
    try {
      console.log(bh.local.result);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_c1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K2TPgxuKS8AOF5Ad',
        spanInst,
        'c1'
      );
    }
  }

  async sd_oHYuV6Gx9sVlLMVC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oHYuV6Gx9sVlLMVC',
      parentSpanInst
    );
    try {
      bh.query = `SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" from "user" 
WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :0
connect by prior "id" = "managed_by")`;

      bh.params = [bh.input.user_id];

      console.log(bh.params);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B6xjRdcoIXzUStMN(bh, parentSpanInst);
      //appendnew_next_sd_oHYuV6Gx9sVlLMVC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oHYuV6Gx9sVlLMVC',
        spanInst,
        'sd_oHYuV6Gx9sVlLMVC'
      );
    }
  }

  async sd_B6xjRdcoIXzUStMN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B6xjRdcoIXzUStMN',
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
      bh = await this.sd_MQFfwQ9M9L85udAE(bh, parentSpanInst);
      //appendnew_next_sd_B6xjRdcoIXzUStMN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B6xjRdcoIXzUStMN',
        spanInst,
        'sd_B6xjRdcoIXzUStMN'
      );
    }
  }

  async sd_MQFfwQ9M9L85udAE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MQFfwQ9M9L85udAE',
      parentSpanInst
    );
    try {
      bh.params = [];
      bh.result.forEach((X) => {
        bh.params.push(X.agent_id);
      });
      console.log(bh.result);
      const placeholders = bh.params.map((_, index) => `:${index}`).join(', ');

      bh.query = `SELECT ba."POLICY_NO"
FROM "BORKER_AGENTS_DATA" ba WHERE ba.ID IN (${placeholders})`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x97qGA7nEujq9S7O(bh, parentSpanInst);
      //appendnew_next_sd_MQFfwQ9M9L85udAE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MQFfwQ9M9L85udAE',
        spanInst,
        'sd_MQFfwQ9M9L85udAE'
      );
    }
  }

  async sd_x97qGA7nEujq9S7O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x97qGA7nEujq9S7O',
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
      bh = await this.c(bh, parentSpanInst);
      //appendnew_next_sd_x97qGA7nEujq9S7O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x97qGA7nEujq9S7O',
        spanInst,
        'sd_x97qGA7nEujq9S7O'
      );
    }
  }

  async c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('c', parentSpanInst);
    try {
      console.log(bh.local.result);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_78kSPYOUBzkskpxt',
        spanInst,
        'c'
      );
    }
  }

  async sd_pA7YFQUNHcWo0fQ0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pA7YFQUNHcWo0fQ0',
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
      bh = await this.sd_Y6QgbZi492t9MICy(bh, parentSpanInst);
      //appendnew_next_sd_pA7YFQUNHcWo0fQ0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pA7YFQUNHcWo0fQ0',
        spanInst,
        'sd_pA7YFQUNHcWo0fQ0'
      );
    }
  }

  async sd_Y6QgbZi492t9MICy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y6QgbZi492t9MICy',
      parentSpanInst
    );
    try {
      const [orderBy, orderValue] = Object.entries(bh.input.orderBy)[0];
      if (bh.input.teamPolicy) {
        if (bh.input.filter.agent_id) {
          bh.counter = 0;
          bh.params = [];
          const agentParams = bh.local.parameterizedQuery(
            bh.input.filter.agent_id,
            bh.counter
          );
          bh.params.push(...agentParams.values);
          bh.counter = agentParams.count;

          const brokerParams = bh.local.parameterizedQuery(
            bh.input.filter.agent_id,
            bh.counter
          );
          bh.params.push(...brokerParams.values);
          bh.counter = brokerParams.count;

          bh.where_conditions = `WHERE (pd."AGENT_ID" IN(${agentParams.counter}) OR pd."BROKER_AGENT_ID" IN(${brokerParams.counter}))`;
        } else {
          bh.params = [bh.input.user_id, bh.input.user_id];
          bh.counter = 2;
          bh.where_conditions = `WHERE (pd."AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :0 connect BY NOCYCLE prior "id" = "managed_by"))
        OR pd."BROKER_AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :1 connect BY NOCYCLE prior "id" = "managed_by")))`;
        }
      } else {
        bh.params = [bh.input.agent_id, bh.input.agent_id];
        bh.counter = 2;
        // set default where condition for page load.
        bh.where_conditions = `WHERE (pd."AGENT_ID" = :0 OR pd."BROKER_AGENT_ID" = :1)`;
      }

      // update where conditions based on the view type
      if (bh.input.viewType == 'Active') {
        bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') > CURRENT_DATE`;
      } else {
        bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') < CURRENT_DATE`;
      }

      // updating where conditions for the filter
      let filter_keys = bh.input.filter ? Object.keys(bh.input.filter) : [];
      if (filter_keys.length > 0) {
        filter_keys.forEach((el) => {
          switch (el) {
            case 'customer_type':
              let cust_arr = bh.input.filter.customer_type;
              if (cust_arr.includes('SME')) {
                const index = cust_arr.indexOf('SME');
                cust_arr[index] = 'Corporate';
              }
              const custTypeParams = bh.local.parameterizedQuery(
                cust_arr,
                bh.counter
              );
              bh.where_conditions += ` AND pd."CUSTOMER_TYPE" IN(${custTypeParams.counter})`;
              bh.params.push(...custTypeParams.values);
              bh.counter = custTypeParams.count;
              break;
            case 'premium':
              bh.where_conditions += ` AND pd."TOTAL_PREMIUM" BETWEEN :${
                bh.counter
              } AND :${++bh.counter} `;
              bh.params.push(
                bh.input.filter['premium']['min'],
                bh.input.filter['premium']['max']
              );
              bh.counter++;
              break;
            case 'policy_holder':
              const typeParams = bh.local.parameterizedQuery(
                bh.input.filter.policy_holder,
                bh.counter
              );
              bh.where_conditions += ` AND pd."CUSTOMER_NAME" IN(${typeParams.counter})`;
              bh.params.push(...typeParams.values);
              bh.counter = typeParams.count;
              break;
            case 'effective_date':
              bh.where_conditions += ` AND pd."POLICY_ISSUE_DATE" BETWEEN TO_DATE(:${
                bh.counter
              }, 'DD-MON-YY') AND TO_DATE(:${++bh.counter}, 'DD-MON-YY')`;
              bh.params = bh.params.concat(
                bh.input.filter['effective_date']['from']
              );
              bh.params = bh.params.concat(
                bh.input.filter['effective_date']['to']
              );
              bh.counter++;
              break;
            case 'expiry_date':
              bh.where_conditions += ` AND pd."POLICY_EXPIRY_DATE" BETWEEN TO_DATE(:${
                bh.counter
              }, 'DD-MON-YY') AND TO_DATE(:${++bh.counter}, 'DD-MON-YY')`;
              bh.params = bh.params.concat(
                bh.input.filter['expiry_date']['from']
              );
              bh.params = bh.params.concat(
                bh.input.filter['expiry_date']['to']
              );
              bh.counter++;
              break;
            case 'searchString':
              bh.where_conditions += ` AND pd.POLICY_NUMBER LIKE '%' || :${++bh.counter} || '%'`;
              bh.params.push(bh.input.filter.searchString);
              break;
          }
        });
      }

      bh.query = `SELECT 
    pd.POLICY_ID,
    pd.POLICY_NUMBER,
    pd.CUSTOMER_TYPE,
    pd.CUST_EMAIL_ADDRESS,
    pd.CUSTOMER_NAME,
    pd.CUST_CONTACT_NUMBER,
    pd.AGENT_ID,
    pd.BROKER_AGENT_ID,
    pd.POLICY_EXPIRY_DATE,
    pd.POLICY_ISSUE_DATE,
    pd.PRODUCT_ID,
    pd.POLICY_BASE_PREMIUM,
    pd.TOTAL_PREMIUM,
    pd.NAJM_UPLOAD_STATUS,
    pd.CREATION_DATE,
    pd.UPDATED_DATE,
    ps.MOTOR_CATEGORY,
    COUNT(*) OVER() AS total_count,
    (
        SELECT "first_name" || ' ' || "last_name" 
        FROM "user" u 
        WHERE pd."AGENT_ID" = JSON_VALUE("addl_details", '$.agentResponse.ID') OR pd."BROKER_AGENT_ID" = JSON_VALUE("addl_details", '$.agentResponse.ID')
        FETCH FIRST 1 ROW ONLY
    ) AS agent_name,
    CASE 
        WHEN TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') < CURRENT_DATE THEN 'Expired' 
        ELSE 'Active' 
    END AS expiry_status
FROM 
    "${process.env.ORCL_POL_USER}"."NEU_POLICY_DATA" pd 
LEFT JOIN (
    SELECT 
        POLICY_ID,
        MAX(MOTOR_CATEGORY) AS MOTOR_CATEGORY
    FROM 
        "${process.env.ORCL_POL_USER}".NEU_SUBJECTS 
    GROUP BY 
        POLICY_ID
) ps ON ps.POLICY_ID = pd.POLICY_ID
${bh.where_conditions}
ORDER BY pd."${orderBy}" ${orderValue}
OFFSET ${bh.input.offset} ROWS
FETCH NEXT ${bh.input.pageSize} ROWS ONLY`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2dmPIlduW4CFHwJ3(bh, parentSpanInst);
      //appendnew_next_sd_Y6QgbZi492t9MICy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y6QgbZi492t9MICy',
        spanInst,
        'sd_Y6QgbZi492t9MICy'
      );
    }
  }

  async sd_2dmPIlduW4CFHwJ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2dmPIlduW4CFHwJ3',
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
      bh = await this.sd_OJNj5F5O8eOisWqJ(bh, parentSpanInst);
      //appendnew_next_sd_2dmPIlduW4CFHwJ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2dmPIlduW4CFHwJ3',
        spanInst,
        'sd_2dmPIlduW4CFHwJ3'
      );
    }
  }

  async sd_OJNj5F5O8eOisWqJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OJNj5F5O8eOisWqJ',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      bh.local.result.forEach((el) => {
        if (el.MOTOR_CATEGORY == 614427) {
          el['PRODUCT_NAME'] = 'Wafi Basic';
        } else if (el.MOTOR_CATEGORY == 614428) {
          el['PRODUCT_NAME'] = 'Wafi Smart';
        } else {
          el['PRODUCT_NAME'] = 'Comprehensive';
        }
        if (el['CUSTOMER_TYPE'] == 'Corporate') {
          el['CUSTOMER_TYPE'] = 'SME';
        }
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OJNj5F5O8eOisWqJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OJNj5F5O8eOisWqJ',
        spanInst,
        'sd_OJNj5F5O8eOisWqJ'
      );
    }
  }

  async sd_zUu72XQ0FaTwB9D7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zUu72XQ0FaTwB9D7',
      parentSpanInst
    );
    try {
      if (bh.input.teamPolicy) {
        bh.params = [bh.input.user_id, bh.input.user_id];
        bh.counter = 2;
        bh.where_conditions = `WHERE (pd."AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :0 connect BY NOCYCLE prior "id" = "managed_by"))
        OR pd."BROKER_AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :1 connect BY NOCYCLE prior "id" = "managed_by")))`;
      } else {
        bh.params = [bh.input.agent_id, bh.input.agent_id];
        bh.counter = 2;
        bh.where_conditions = `WHERE (pd."AGENT_ID" = :0 OR pd."BROKER_AGENT_ID" = :1)`;
      }

      // update where conditions based on the view type
      if (bh.input.viewType == 'Active') {
        bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') > CURRENT_DATE`;
      } else {
        bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') < CURRENT_DATE`;
      }

      bh.query = `SELECT DISTINCT 
pd.CUSTOMER_NAME,
pd.AGENT_ID,
pd.BROKER_AGENT_ID,
(SELECT DISTINCT "first_name" || ' ' || "last_name" 
        FROM "user" u 
        WHERE pd."AGENT_ID" = JSON_VALUE("addl_details", '$.agentResponse.ID') OR pd."BROKER_AGENT_ID" = JSON_VALUE("addl_details", '$.agentResponse.ID')
        FETCH FIRST 1 ROW ONLY) AS agent_name
FROM "${process.env.ORCL_POL_USER}"."NEU_POLICY_DATA" pd 
${bh.where_conditions}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lx4iiha5xWx71h3B(bh, parentSpanInst);
      //appendnew_next_sd_zUu72XQ0FaTwB9D7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zUu72XQ0FaTwB9D7',
        spanInst,
        'sd_zUu72XQ0FaTwB9D7'
      );
    }
  }

  async sd_lx4iiha5xWx71h3B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lx4iiha5xWx71h3B',
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
      bh.local.filterData = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A1qw0kvUtQlEfp0U(bh, parentSpanInst);
      //appendnew_next_sd_lx4iiha5xWx71h3B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lx4iiha5xWx71h3B',
        spanInst,
        'sd_lx4iiha5xWx71h3B'
      );
    }
  }

  async sd_A1qw0kvUtQlEfp0U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A1qw0kvUtQlEfp0U',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      // filterData

      // bh.local.result = bh.local.filterData

      // Extract unique customer names
      const uniqueCustomerNames = [
        ...new Set(bh.local.filterData.map((entry) => entry.CUSTOMER_NAME)),
      ];

      // Create an object to store agent details
      const agents = {};

      /// Iterate over data to collect agent details
      bh.local.filterData.forEach((entry) => {
        const agentId = entry.AGENT_ID || entry.BROKER_AGENT_ID;
        if (agentId !== null) {
          if (!agents[agentId]) {
            agents[agentId] = entry.AGENT_NAME;
          }
        }
      });
      console.log(agents);
      // Convert agents object to array of objects
      const agentsArray = Object.entries(agents).map(([id, name]) => ({
        id: id,
        name: name,
      }));

      // Construct the final object
      bh.local.result = {
        customer_name: uniqueCustomerNames,
        agents: agentsArray,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_A1qw0kvUtQlEfp0U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A1qw0kvUtQlEfp0U',
        spanInst,
        'sd_A1qw0kvUtQlEfp0U'
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
