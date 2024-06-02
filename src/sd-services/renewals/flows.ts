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

  async getPolicyData(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getPolicyData',
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
      bh = await this.query0(bh, parentSpanInst);
      //appendnew_next_getPolicyData
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
        'sd_IuRJhkuBR7Me8b8G',
        spanInst,
        'getPolicyData'
      );
    }
  }

  async getSubjectsData(parentSpanInst, policy_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getSubjectsData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.query1(bh, parentSpanInst);
      //appendnew_next_getSubjectsData
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
        'sd_mhTDQBwSQwcDAAuq',
        spanInst,
        'getSubjectsData'
      );
    }
  }

  async getCoversData(parentSpanInst, policy_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getCoversData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.query2(bh, parentSpanInst);
      //appendnew_next_getCoversData
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
        'sd_Dv5C3HMFLdmdXq4M',
        spanInst,
        'getCoversData'
      );
    }
  }

  async getDriversData(parentSpanInst, policy_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getDriversData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        policy_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.query3(bh, parentSpanInst);
      //appendnew_next_getDriversData
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
        'sd_UvbB9m7dTqGM7sNU',
        spanInst,
        'getDriversData'
      );
    }
  }

  async getRenewalList(
    parentSpanInst,
    agent_id: any = undefined,
    filter: any = undefined,
    orderBy: any = undefined,
    pageSize: any = undefined,
    offset: any = undefined,
    viewType: any = undefined,
    teamPolicy: any = undefined,
    user_id: any = undefined,
    login_type: any = 'KC',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getRenewalList',
      parentSpanInst
    );
    let bh: any = {
      input: {
        agent_id,
        filter,
        orderBy,
        pageSize,
        offset,
        viewType,
        teamPolicy,
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
      bh = await this.sd_uHA0jfbx2DgRDAfZ(bh, parentSpanInst);
      //appendnew_next_getRenewalList
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
        'sd_tgndD0Bx3Mcd63TJ',
        spanInst,
        'getRenewalList'
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
      bh = await this.sd_5CCNllyXPoumvl5E(bh, parentSpanInst);
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
        'sd_6Ogpqq0s92NChajh',
        spanInst,
        'filterOptions'
      );
    }
  }
  //appendnew_flow_flows_start

  async query0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('query0', parentSpanInst);
    try {
      if (bh.input.body?.policy_id) {
        bh.params = [bh.input.body.policy_id];
        bh.query = `SELECT * FROM "${process.env.ORCL_POL_USER}"."NEU_POLICY_DATA" WHERE "POLICY_ID" = :0`;
      } else if (bh.input?.body?.id_no) {
        bh.params = [bh.input.body.id_no];
        bh.query = `SELECT * FROM "${process.env.ORCL_POL_USER}"."NEU_POLICY_DATA" WHERE "NATIONAL_ID" = :0 ORDER BY "CREATION_DATE" DESC FETCH FIRST 1 ROWS ONLY`;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IhTQl9qMIY2MSW9x(bh, parentSpanInst);
      //appendnew_next_query0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ifKyvDBkgogKuRlm',
        spanInst,
        'query0'
      );
    }
  }

  async sd_IhTQl9qMIY2MSW9x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IhTQl9qMIY2MSW9x',
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
      //appendnew_next_sd_IhTQl9qMIY2MSW9x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IhTQl9qMIY2MSW9x',
        spanInst,
        'sd_IhTQl9qMIY2MSW9x'
      );
    }
  }

  async query1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('query1', parentSpanInst);
    try {
      bh.params = [bh.input.policy_id];

      bh.query = `SELECT * FROM "${process.env.ORCL_POL_USER}"."NEU_SUBJECTS" WHERE "POLICY_ID" = :0`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G6WgM3ajmhGZjIDh(bh, parentSpanInst);
      //appendnew_next_query1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eEhOQfAeV8aAkdEp',
        spanInst,
        'query1'
      );
    }
  }

  async sd_G6WgM3ajmhGZjIDh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G6WgM3ajmhGZjIDh',
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
      //appendnew_next_sd_G6WgM3ajmhGZjIDh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G6WgM3ajmhGZjIDh',
        spanInst,
        'sd_G6WgM3ajmhGZjIDh'
      );
    }
  }

  async query2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('query2', parentSpanInst);
    try {
      bh.params = [bh.input.policy_id];

      bh.query = `SELECT * FROM "${process.env.ORCL_POL_USER}"."NEU_COVERS_DATA" WHERE "POLICY_ID" = :0`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x9ldHTfSsfULqXuC(bh, parentSpanInst);
      //appendnew_next_query2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kCrnAGB4PrYk8eSf',
        spanInst,
        'query2'
      );
    }
  }

  async sd_x9ldHTfSsfULqXuC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x9ldHTfSsfULqXuC',
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
      //appendnew_next_sd_x9ldHTfSsfULqXuC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x9ldHTfSsfULqXuC',
        spanInst,
        'sd_x9ldHTfSsfULqXuC'
      );
    }
  }

  async query3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('query3', parentSpanInst);
    try {
      bh.params = [bh.input.policy_id];

      bh.query = `SELECT * FROM "${process.env.ORCL_POL_USER}"."NEU_DRIVERS_DATA" WHERE "POLICY_ID" = :0`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_de2pBfBfcIqSyall(bh, parentSpanInst);
      //appendnew_next_query3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YqbSg6lXD2jg7yYe',
        spanInst,
        'query3'
      );
    }
  }

  async sd_de2pBfBfcIqSyall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_de2pBfBfcIqSyall',
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
      //appendnew_next_sd_de2pBfBfcIqSyall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_de2pBfBfcIqSyall',
        spanInst,
        'sd_de2pBfBfcIqSyall'
      );
    }
  }

  async sd_uHA0jfbx2DgRDAfZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uHA0jfbx2DgRDAfZ',
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
      bh = await this.query4(bh, parentSpanInst);
      //appendnew_next_sd_uHA0jfbx2DgRDAfZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uHA0jfbx2DgRDAfZ',
        spanInst,
        'sd_uHA0jfbx2DgRDAfZ'
      );
    }
  }

  async query4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('query4', parentSpanInst);
    try {
      const [orderBy, orderValue] = Object.entries(bh.input.orderBy)[0];
      bh.where_conditions = `WHERE ((POLICY_EXPIRY_DATE BETWEEN SYSDATE AND SYSDATE + (SELECT "value" FROM "${process.env.ORCL_USER}"."system_setting" WHERE "code" = 'POLICY_EXPIRY_DAYS_DEFAULT')
OR POLICY_EXPIRY_DATE BETWEEN SYSDATE - (SELECT "value" FROM "${process.env.ORCL_USER}"."system_setting" WHERE "code" = 'GRACE_EXPIRY_DAYS_DEFAULT') AND SYSDATE))`;
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

          bh.where_conditions += ` AND (pd."AGENT_ID" IN(${agentParams.counter}) OR pd."BROKER_AGENT_ID" IN(${brokerParams.counter}))`;
        } else {
          bh.params = [bh.input.user_id, bh.input.user_id];
          bh.counter = 2;
          bh.where_conditions += ` AND (pd."AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :0 connect BY NOCYCLE prior "id" = "managed_by"))
        OR pd."BROKER_AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :1 connect BY NOCYCLE prior "id" = "managed_by")))`;
        }
      } else {
        bh.params = [bh.input.agent_id, bh.input.agent_id];
        bh.counter = 2;
        // set default where condition for page load.
        bh.where_conditions += ` AND (pd."AGENT_ID" = :0 OR pd."BROKER_AGENT_ID" = :1)`;
      }

      // update where conditions based on the view type
      // if (bh.input.viewType == "Active") {
      //     bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') > CURRENT_DATE`
      // } else {
      //     bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') < CURRENT_DATE`
      // }

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

      bh.query = `SELECT pd."POLICY_ID",
    pd."POLICY_NUMBER",
    pd."CUSTOMER_TYPE",
    pd."CUST_EMAIL_ADDRESS",
    pd."CUSTOMER_NAME",
    pd."CUST_CONTACT_NUMBER",
    pd."POLICY_EXPIRY_DATE",
    pd."POLICY_ISSUE_DATE",
    pd."PRODUCT_ID",
    pd."POLICY_BASE_PREMIUM",
    pd."TOTAL_PREMIUM",
    pd."NAJM_UPLOAD_STATUS",
    pd."CREATION_DATE",
    pd."UPDATED_DATE",
    pd."AGENT_ID",
    pd."AGENT_NAME",
    pd."SEGMENT_CODE",
    pd."BROKER_AGENT_ID",
    pd."PRODUCT_NAME",
    pd."NATIONAL_ID",
    pd."DATE_OF_BIRTH",
    COUNT(*) OVER() AS total_count,
(SELECT "first_name" || ' ' || "last_name" 
        FROM "user" u 
        WHERE pd."AGENT_ID" = JSON_VALUE("addl_details", '$.agentResponse.ID') OR pd."BROKER_AGENT_ID" = JSON_VALUE("addl_details", '$.agentResponse.ID')
        FETCH FIRST 1 ROW ONLY) AS agent_name,
CASE 
    WHEN TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') < CURRENT_DATE THEN 'Expired' 
    ELSE 'Active' 
END AS expiry_status
FROM "${process.env.ORCL_POL_USER}"."NEU_POLICY_DATA" pd 
${bh.where_conditions}
ORDER BY pd."${orderBy}" ${orderValue}
OFFSET ${bh.input.offset} ROWS
FETCH NEXT ${bh.input.pageSize} ROWS ONLY`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6ygmVzGzZRd5DoCA(bh, parentSpanInst);
      //appendnew_next_query4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_089GfVreAulekkoi',
        spanInst,
        'query4'
      );
    }
  }

  async sd_6ygmVzGzZRd5DoCA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6ygmVzGzZRd5DoCA',
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
      bh = await this.sd_TLJh17B2d6iyoY6G(bh, parentSpanInst);
      //appendnew_next_sd_6ygmVzGzZRd5DoCA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6ygmVzGzZRd5DoCA',
        spanInst,
        'sd_6ygmVzGzZRd5DoCA'
      );
    }
  }

  async sd_TLJh17B2d6iyoY6G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TLJh17B2d6iyoY6G',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      bh.local.result.forEach((el) => {
        if (el.PRODUCT_ID == 102) {
          el['PRODUCT_NAME'] = 'Comprehensive';
        } else {
          el['PRODUCT_NAME'] = 'Wafi Basic';
        }
        if (el['CUSTOMER_TYPE'] == 'Corporate') {
          el['CUSTOMER_TYPE'] = 'SME';
        }
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_TLJh17B2d6iyoY6G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TLJh17B2d6iyoY6G',
        spanInst,
        'sd_TLJh17B2d6iyoY6G'
      );
    }
  }

  async sd_5CCNllyXPoumvl5E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5CCNllyXPoumvl5E',
      parentSpanInst
    );
    try {
      bh.where_conditions = `WHERE ((POLICY_EXPIRY_DATE BETWEEN SYSDATE AND SYSDATE + (SELECT "value" FROM "${process.env.ORCL_USER}"."system_setting" WHERE "code" = 'POLICY_EXPIRY_DAYS_DEFAULT')
OR POLICY_EXPIRY_DATE BETWEEN SYSDATE - (SELECT "value" FROM "${process.env.ORCL_USER}"."system_setting" WHERE "code" = 'GRACE_EXPIRY_DAYS_DEFAULT') AND SYSDATE))`;

      if (bh.input.teamPolicy) {
        bh.params = [bh.input.user_id, bh.input.user_id];
        bh.counter = 2;
        bh.where_conditions += ` AND (pd."AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :0 connect BY NOCYCLE prior "id" = "managed_by"))
        OR pd."BROKER_AGENT_ID" IN (SELECT JSON_VALUE("addl_details", '$.agentResponse.ID') AS "agent_id" 
        from "user" WHERE "managed_by" IN (SELECT "managed_by" from "user" start with "id" = :1 connect BY NOCYCLE prior "id" = "managed_by")))`;
      } else {
        bh.params = [bh.input.agent_id, bh.input.agent_id];
        bh.counter = 2;
        bh.where_conditions += ` AND (pd."AGENT_ID" = :0 OR pd."BROKER_AGENT_ID" = :1)`;
      }

      // update where conditions based on the view type
      // if (bh.input.viewType == "Active") {
      //     bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') > CURRENT_DATE`
      // } else {
      //     bh.where_conditions += ` AND TO_DATE(pd.POLICY_EXPIRY_DATE , 'DD-MON-YY') < CURRENT_DATE`
      // }

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
      bh = await this.sd_3mwo8U7TGTa6QZsn(bh, parentSpanInst);
      //appendnew_next_sd_5CCNllyXPoumvl5E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5CCNllyXPoumvl5E',
        spanInst,
        'sd_5CCNllyXPoumvl5E'
      );
    }
  }

  async sd_3mwo8U7TGTa6QZsn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3mwo8U7TGTa6QZsn',
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
      bh = await this.sd_mfN4E4NocXnRfgjH(bh, parentSpanInst);
      //appendnew_next_sd_3mwo8U7TGTa6QZsn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3mwo8U7TGTa6QZsn',
        spanInst,
        'sd_3mwo8U7TGTa6QZsn'
      );
    }
  }

  async sd_mfN4E4NocXnRfgjH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mfN4E4NocXnRfgjH',
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
      //appendnew_next_sd_mfN4E4NocXnRfgjH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mfN4E4NocXnRfgjH',
        spanInst,
        'sd_mfN4E4NocXnRfgjH'
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
