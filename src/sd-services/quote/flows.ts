// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
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

  async getTeamQuotes(parentSpanInst, user_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getTeamQuotes',
      parentSpanInst
    );
    let bh: any = {
      input: {
        user_id,
      },
      local: {
        result: undefined,
        status: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ss3mZAUQe5hbIsgO(bh, parentSpanInst);
      //appendnew_next_getTeamQuotes
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
        'sd_duavpYnvouse1UrD',
        spanInst,
        'getTeamQuotes'
      );
    }
  }

  async getUserQuotes(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getUserQuotes',
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
      bh = await this.sd_7vtyEQofzyVBcZ8Z(bh, parentSpanInst);
      //appendnew_next_getUserQuotes
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
        'sd_BQhwgJsF04PL4vXO',
        spanInst,
        'getUserQuotes'
      );
    }
  }

  async getFilterOptions(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getFilterOptions',
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
      bh = await this.sd_KUoMlGj0jcNxbIdR(bh, parentSpanInst);
      //appendnew_next_getFilterOptions
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
        'sd_1jUQGVYADAhaJ52a',
        spanInst,
        'getFilterOptions'
      );
    }
  }

  async updatePremium(
    parentSpanInst,
    quote_id = 0,
    premium = 0,
    risk_items: any = undefined,
    add_ons: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updatePremium',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
        premium,
        risk_items,
        add_ons,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.queryArray(bh, parentSpanInst);
      //appendnew_next_updatePremium
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
        'sd_wLUqC8Xek2cDXhje',
        spanInst,
        'updatePremium'
      );
    }
  }

  async generalSqlQuery(parentSpanInst, query = '', ...others) {
    const spanInst = this.tracerService.createSpan(
      'generalSqlQuery',
      parentSpanInst
    );
    let bh: any = {
      input: {
        query,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xaSs1ZQgvqlwV4D6(bh, parentSpanInst);
      //appendnew_next_generalSqlQuery
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
        'sd_KNyh7RwmjlppUWp2',
        spanInst,
        'generalSqlQuery'
      );
    }
  }

  async getQuote(
    parentSpanInst,
    user_id: any = undefined,
    reference_number: any = undefined,
    id: any = undefined,
    tenant_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('getQuote', parentSpanInst);
    let bh: any = {
      input: {
        user_id,
        reference_number,
        id,
        tenant_id,
      },
      local: {
        quote: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.queryForAccessCheck(bh, parentSpanInst);
      //appendnew_next_getQuote
      return (
        // formatting output variables
        {
          input: {},
          local: {
            quote: bh.local.quote,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2ygrv4zlAN0VQnC2',
        spanInst,
        'getQuote'
      );
    }
  }

  async updateQuoteStatus(
    parentSpanInst,
    reference_number: any = undefined,
    status_code: any = undefined,
    source: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateQuoteStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reference_number,
        status_code,
        source,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SvEQEdzi8CxFdqxs(bh, parentSpanInst);
      //appendnew_next_updateQuoteStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yKlrqWAKqoMvafSV',
        spanInst,
        'updateQuoteStatus'
      );
    }
  }

  async validateStatusChange(
    parentSpanInst,
    fromStatus = 0,
    toStatus = 0,
    source = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validateStatusChange',
      parentSpanInst
    );
    let bh: any = {
      input: {
        fromStatus,
        toStatus,
        source,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5eZiCiLp2Y95Gz3k(bh, parentSpanInst);
      //appendnew_next_validateStatusChange
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uMrq3GzXbuBES9aQ',
        spanInst,
        'validateStatusChange'
      );
    }
  }

  async updateQuoteComment(
    parentSpanInst,
    reference_number: any = undefined,
    comment: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateQuoteComment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reference_number,
        comment,
      },
      local: {
        status: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Kz4rybaxPwG1j7uE(bh, parentSpanInst);
      //appendnew_next_updateQuoteComment
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K2GLz1BOlGn2Mcqx',
        spanInst,
        'updateQuoteComment'
      );
    }
  }

  async createQuoteReference(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createQuoteReference',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        reference_number: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XlkMcZ8zqVCTJCwa(bh, parentSpanInst);
      //appendnew_next_createQuoteReference
      return (
        // formatting output variables
        {
          input: {},
          local: {
            reference_number: bh.local.reference_number,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ULKQrC1fcMUKrtv7',
        spanInst,
        'createQuoteReference'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_ss3mZAUQe5hbIsgO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ss3mZAUQe5hbIsgO',
      parentSpanInst
    );
    try {
      bh.query = `SELECT * FROM "quote" WHERE "owned_by" IN (SELECT "id" from "user" 
start with "managed_by" = :0
connect by prior "id" = "managed_by")`;
      bh.params = [bh.input.user_id];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OM0iveB24BxIi8nA(bh, parentSpanInst);
      //appendnew_next_sd_ss3mZAUQe5hbIsgO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ss3mZAUQe5hbIsgO',
        spanInst,
        'sd_ss3mZAUQe5hbIsgO'
      );
    }
  }

  async sd_OM0iveB24BxIi8nA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OM0iveB24BxIi8nA',
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
      bh = await this.sd_lERkxhAuLsCo2K4l(bh, parentSpanInst);
      //appendnew_next_sd_OM0iveB24BxIi8nA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OM0iveB24BxIi8nA',
        spanInst,
        'sd_OM0iveB24BxIi8nA'
      );
    }
  }

  async sd_lERkxhAuLsCo2K4l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lERkxhAuLsCo2K4l',
      parentSpanInst
    );
    try {
      bh.local.status = bh.local.result.length > 0 ? true : false;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_lERkxhAuLsCo2K4l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lERkxhAuLsCo2K4l',
        spanInst,
        'sd_lERkxhAuLsCo2K4l'
      );
    }
  }

  async sd_7vtyEQofzyVBcZ8Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7vtyEQofzyVBcZ8Z',
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
      bh = await this.sd_mWjPYIXs0ygma16z(bh, parentSpanInst);
      //appendnew_next_sd_7vtyEQofzyVBcZ8Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7vtyEQofzyVBcZ8Z',
        spanInst,
        'sd_7vtyEQofzyVBcZ8Z'
      );
    }
  }

  async sd_mWjPYIXs0ygma16z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mWjPYIXs0ygma16z',
      parentSpanInst
    );
    try {
      const [orderBy, orderValue] = Object.entries(bh.input.body.orderBy)[0];
      if (bh.input.body.teamQuotes) {
        if (bh.input.body.filter.owned_by) {
          bh.params = [bh.input.body.tenant_id];
          bh.counter = 1; //1 because there are already 1 values in the bh.params.
          bh.where_conditions = `WHERE q."tenant_id" = :0`;
          const ownerParams = bh.local.parameterizedQuery(
            bh.input.body.filter.owned_by,
            bh.counter
          );
          bh.where_conditions += ` AND q."owned_by" IN(${ownerParams.counter})`;
          bh.params.push(...ownerParams.values);
          bh.counter = ownerParams.count;
        } else {
          bh.params = [bh.input.body.user_id, bh.input.body.tenant_id];
          bh.counter = 2; //2 because there are already 2 values in the bh.params.
          bh.where_conditions = `WHERE q."owned_by" IN (SELECT u."id" from "user" u start with u."managed_by" = :0 connect by NOCYCLE prior u."id" = u."managed_by") AND q."tenant_id" = :1`;
        }
      } else {
        bh.params = [bh.input.body.user_id, bh.input.body.tenant_id];
        bh.counter = 2; //2 because there are already 2 values in the bh.params.
        bh.where_conditions = 'WHERE q."owned_by" = :0 AND q."tenant_id" = :1';
      }

      let filter_keys = Object.keys(bh.input.body.filter);
      if (filter_keys.length > 0) {
        filter_keys.forEach((el) => {
          switch (el) {
            case 'status_id':
              const statusParams = bh.local.parameterizedQuery(
                bh.input.body.filter.status_id,
                bh.counter
              );
              bh.where_conditions += ` AND q."status_id" IN(${statusParams.counter})`;
              bh.params.push(...statusParams.values);
              bh.counter = statusParams.count;
              break;
            case 'customer_name':
              const nameParams = bh.local.parameterizedQuery(
                bh.input.body.filter.customer_name,
                bh.counter
              );
              bh.where_conditions += ` AND q."id_no" IN(${nameParams.counter})`;
              bh.params.push(...nameParams.values);
              bh.counter = nameParams.count;
              break;
            case 'quote_value':
              bh.where_conditions += ` AND q."premium" BETWEEN :${
                bh.counter
              } AND :${++bh.counter} `;
              bh.params.push(
                bh.input.body.filter['quote_value']['min'],
                bh.input.body.filter['quote_value']['max']
              );
              bh.counter++;
              break;
            case 'created_date':
              bh.where_conditions += ` AND q."created_date" BETWEEN TO_TIMESTAMP(:${
                bh.counter
              }, 'YYYY-MM-DD"T"HH24:MI:SS.FFTZH:TZM') AND TO_TIMESTAMP(:${++bh.counter}, 'YYYY-MM-DD"T"HH24:MI:SS.FFTZH:TZM')`;
              bh.params = bh.params.concat(
                bh.input.body.filter['created_date']['from']
              );
              bh.params = bh.params.concat(
                bh.input.body.filter['created_date']['to']
              );
              bh.counter++;
              break;
            case 'customer_type_id':
              const typeParams = bh.local.parameterizedQuery(
                bh.input.body.filter.customer_type_id,
                bh.counter
              );
              bh.where_conditions += ` AND q."customer_type_id" IN(${typeParams.counter})`;
              bh.params.push(...typeParams.values);
              bh.counter = typeParams.count;
              break;
            case 'searchString':
              bh.where_conditions +=
                ` AND (TO_CHAR(q."reference_number") LIKE '%' || :${bh.counter} || '%'` +
                `OR TO_CHAR(q."phone_country_code" || ' ' || q."phone_no") LIKE '%' || :${++bh.counter} || '%' ` +
                `OR TO_CHAR(q."id_no") LIKE '%' || :${++bh.counter} || '%' ` +
                `OR (TO_CHAR(ri."id_no") LIKE '%' || :${++bh.counter} || '%' AND ri."id_type" = 10) ` +
                `OR (TO_CHAR(ri."id_no") LIKE '%' || :${++bh.counter} || '%' AND ri."id_type" = 11) ` +
                `OR TO_CHAR(LOWER(q."first_name") || ' ' || LOWER(q."last_name")) LIKE '%' || LOWER(:${++bh.counter}) || '%'` +
                `OR TO_CHAR(LOWER(q."company_name")) LIKE '%' || :${bh.counter} || '%'` +
                `OR TO_CHAR(LOWER(JSON_VALUE(q."addl_details", '$.first_name_ar')) || ' ' || LOWER(JSON_VALUE(q."addl_details", '$.last_name_ar'))) LIKE '%' || LOWER(:${++bh.counter}) || '%')`;
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.params.push(bh.input.body.filter.searchString);
              bh.counter++;
              break;
          }
        });
      }
      bh.query = `SELECT
    q."reference_number",
    q."id",
    q."id_type",
    q."id_no",
    q."lob_id",
    q."status_id",
    q."tenant_id",
    q."first_name",
    q."last_name",
    q."company_name",
    q."phone_country_code",
    q."phone_no",
    q."email_id",
    q."created_by",
    q."updated_by",
    q."owned_by",
    q."premium",
    q."is_renewal",
    q."customer_type_id",
    DBMS_LOB.SUBSTR(q."addl_details", 4000, 1) AS addl_details_substr,
    q."created_date",
    q."updated_date",
    LISTAGG(DISTINCT ri."product_code", ',') AS product_ids,
    u."first_name" || ' ' || u."last_name" AS username,
    COUNT(*) OVER() AS total_count
FROM
    "quote" q
LEFT JOIN
    "risk_item" ri ON q."id" = ri."quote_id"
JOIN
    "user" u ON u."id" = q."owned_by"
    ${bh.where_conditions}
GROUP BY
    q."reference_number",
    q."id",
    q."id_type",
    q."id_no",
    q."lob_id",
    q."status_id",
    q."tenant_id",
    q."first_name",
    q."last_name",
    q."company_name",
    q."phone_country_code",
    q."phone_no",
    q."email_id",
    q."created_by",
    q."updated_by",
    q."owned_by",
    q."premium",
    q."is_renewal",
    u."first_name",
    u."last_name",
    q."customer_type_id",
    DBMS_LOB.SUBSTR(q."addl_details", 4000, 1),
    q."created_date",
    q."updated_date"
ORDER BY
    q."${orderBy}" ${orderValue}
OFFSET
    ${bh.input.body.offSet} ROWS
FETCH NEXT
    ${bh.input.body.pageSize} ROWS ONLY`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_O8Q9uNIJNSufPc6y(bh, parentSpanInst);
      //appendnew_next_sd_mWjPYIXs0ygma16z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mWjPYIXs0ygma16z',
        spanInst,
        'sd_mWjPYIXs0ygma16z'
      );
    }
  }

  async sd_O8Q9uNIJNSufPc6y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O8Q9uNIJNSufPc6y',
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
      bh = await this.sd_YFo07m2uIDh1YcJR(bh, parentSpanInst);
      //appendnew_next_sd_O8Q9uNIJNSufPc6y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O8Q9uNIJNSufPc6y',
        spanInst,
        'sd_O8Q9uNIJNSufPc6y'
      );
    }
  }

  async sd_YFo07m2uIDh1YcJR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YFo07m2uIDh1YcJR',
      parentSpanInst
    );
    try {
      bh.local.status = 200;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_YFo07m2uIDh1YcJR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YFo07m2uIDh1YcJR',
        spanInst,
        'sd_YFo07m2uIDh1YcJR'
      );
    }
  }

  async sd_KUoMlGj0jcNxbIdR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KUoMlGj0jcNxbIdR',
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
      bh = await this.sd_DwCJg1UO8JXpwkPE(bh, parentSpanInst);
      //appendnew_next_sd_KUoMlGj0jcNxbIdR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KUoMlGj0jcNxbIdR',
        spanInst,
        'sd_KUoMlGj0jcNxbIdR'
      );
    }
  }

  async sd_DwCJg1UO8JXpwkPE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DwCJg1UO8JXpwkPE',
      parentSpanInst
    );
    try {
      const result = bh.local.parameterizedQuery(bh.input.body.status_id, 2);

      if (bh.input.body.teamQuotes) {
        bh.where_conditions = `
        WHERE q."owned_by" IN (
            SELECT u."id" FROM "user" u 
            START WITH u."managed_by" = :0 
            CONNECT BY PRIOR u."id" = u."managed_by"
        ) 
        AND q."tenant_id" = :1 
        AND q."status_id" IN (${result.counter})
    `;
      } else {
        bh.where_conditions = `WHERE q."owned_by" = :0 AND q."tenant_id" = :1 AND q."status_id" IN (${result.counter})`;
      }

      bh.query = `
    SELECT DISTINCT
        q."id_no",
        MIN(q."first_name" || ' ' || q."last_name") AS full_name,
        DBMS_LOB.SUBSTR(q."addl_details", 4000, 1) AS addl_details_substr,
        MIN(q."premium") AS premium,
        u."id",
        u."username"
    FROM
        "quote" q
    JOIN
        "user" u ON u."id" = q."owned_by"
    ${bh.where_conditions}
    GROUP BY
        q."id_no",
        u."id",
        u."username",
        DBMS_LOB.SUBSTR(q."addl_details", 4000, 1)
`;

      bh.params = [
        bh.input.body.user_id,
        bh.input.body.tenant_id,
        ...result.values,
      ];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zhzAsLsM7VdnYXwC(bh, parentSpanInst);
      //appendnew_next_sd_DwCJg1UO8JXpwkPE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DwCJg1UO8JXpwkPE',
        spanInst,
        'sd_DwCJg1UO8JXpwkPE'
      );
    }
  }

  async sd_zhzAsLsM7VdnYXwC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zhzAsLsM7VdnYXwC',
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
      bh = await this.sd_ZjN9dvbpnD96gnnB(bh, parentSpanInst);
      //appendnew_next_sd_zhzAsLsM7VdnYXwC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zhzAsLsM7VdnYXwC',
        spanInst,
        'sd_zhzAsLsM7VdnYXwC'
      );
    }
  }

  async sd_ZjN9dvbpnD96gnnB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZjN9dvbpnD96gnnB',
      parentSpanInst
    );
    try {
      if (bh.local.result.length > 0) {
        bh.local.result.forEach((x) => {
          if (x.FULL_NAME == ' ') {
            x.FULL_NAME = JSON.parse(x?.ADDL_DETAILS_SUBSTR)?.company_name
              ? JSON.parse(x?.ADDL_DETAILS_SUBSTR)?.company_name
              : ' ';
          }
        });
      }

      bh.local.status =
        bh.local.result.length > 0
          ? 200
          : bh.local.result.length == 0
          ? 400
          : 404;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZjN9dvbpnD96gnnB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZjN9dvbpnD96gnnB',
        spanInst,
        'sd_ZjN9dvbpnD96gnnB'
      );
    }
  }

  async queryArray(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryArray',
      parentSpanInst
    );
    try {
      bh.query = [
        `UPDATE "quote" SET "premium" = ${bh.input.premium} WHERE "id"=${bh.input.quote_id}`,
      ];
      bh.input.risk_items.forEach((x) => {
        bh.query.push(
          `UPDATE "risk_item" SET "premium" = ${
            x.premium
          }, "premium_details"= '${JSON.stringify(
            x.premium_details
          )}' WHERE "id"=${x.id}`
        );
      });
      bh.input.add_ons.forEach((x) => {
        bh.query.push(
          `UPDATE "risk_item_add_ons" SET "premium" = ${
            x.premium
          }, "premium_details" = '${JSON.stringify(
            x.premium_details
          )}' WHERE "add_on_code" = ${x.add_on_code} AND "risk_id" = ${
            x.risk_id
          }`
        );
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.promiseAll(bh, parentSpanInst);
      //appendnew_next_queryArray
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J8HgVtPTpwt8t2hj',
        spanInst,
        'queryArray'
      );
    }
  }

  async promiseAll(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'promiseAll',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const flow_instance: flows = flows.getInstance();
      bh.query.forEach((Q) => {
        promiseArray.push(flow_instance.generalSqlQuery(spanInst, Q));
      });
      bh.local.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_promiseAll
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SGsYKq4UbHaHGTVQ',
        spanInst,
        'promiseAll'
      );
    }
  }

  async sd_xaSs1ZQgvqlwV4D6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xaSs1ZQgvqlwV4D6',
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
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_xaSs1ZQgvqlwV4D6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xaSs1ZQgvqlwV4D6',
        spanInst,
        'sd_xaSs1ZQgvqlwV4D6'
      );
    }
  }

  async queryForAccessCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryForAccessCheck',
      parentSpanInst
    );
    try {
      let quoteRef = '';
      if (bh.input.id) {
        quoteRef = ` q."id" = :2`;
        bh.quoteRef = bh.input.id;
      }

      if (bh.input.reference_number) {
        quoteRef = ` q."reference_number" = :2`;
        bh.quoteRef = bh.input.reference_number;
      }

      bh.query = `SELECT q.*
FROM "quote" q
WHERE "owned_by"=:0 AND "tenant_id" = :1 AND ${quoteRef}`;
      bh.params = [bh.input.user_id, bh.input.tenant_id, bh.quoteRef];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_udRXFuCHn1TRgY1A(bh, parentSpanInst);
      //appendnew_next_queryForAccessCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jgKhy8WXWaf6QOZQ',
        spanInst,
        'queryForAccessCheck'
      );
    }
  }

  async sd_udRXFuCHn1TRgY1A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_udRXFuCHn1TRgY1A',
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
      bh = await this.setResponse(bh, parentSpanInst);
      //appendnew_next_sd_udRXFuCHn1TRgY1A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_udRXFuCHn1TRgY1A',
        spanInst,
        'sd_udRXFuCHn1TRgY1A'
      );
    }
  }

  async setResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse',
      parentSpanInst
    );
    try {
      bh.local.quote = bh.local.result[0] || [];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LwhQpcEfPdzraEBe',
        spanInst,
        'setResponse'
      );
    }
  }

  async sd_SvEQEdzi8CxFdqxs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SvEQEdzi8CxFdqxs',
      parentSpanInst
    );
    try {
      bh.filter = {
        code: bh.input.status_code,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5s5g8ncphLsPSx8W(bh, parentSpanInst);
      //appendnew_next_sd_SvEQEdzi8CxFdqxs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SvEQEdzi8CxFdqxs',
        spanInst,
        'sd_SvEQEdzi8CxFdqxs'
      );
    }
  }

  async sd_5s5g8ncphLsPSx8W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5s5g8ncphLsPSx8W',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.result = await dmUtilsInst.find(
        '_EN_tlee4w28wc',
        bh.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_C7rCObP62ULoAcM6(bh, parentSpanInst);
      //appendnew_next_sd_5s5g8ncphLsPSx8W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5s5g8ncphLsPSx8W',
        spanInst,
        'sd_5s5g8ncphLsPSx8W'
      );
    }
  }

  async sd_C7rCObP62ULoAcM6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C7rCObP62ULoAcM6',
      parentSpanInst
    );
    try {
      bh.status_id = bh.result?.[0]?.id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sKnc3YF0LaZBeCQE(bh, parentSpanInst);
      //appendnew_next_sd_C7rCObP62ULoAcM6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C7rCObP62ULoAcM6',
        spanInst,
        'sd_C7rCObP62ULoAcM6'
      );
    }
  }

  async sd_sKnc3YF0LaZBeCQE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sKnc3YF0LaZBeCQE',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.status_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_a3vAphbzvj6lt7lz(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nnull'](
          bh.status_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_a3vAphbzvj6lt7lz(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sKnc3YF0LaZBeCQE',
        spanInst,
        'sd_sKnc3YF0LaZBeCQE'
      );
    }
  }

  async sd_a3vAphbzvj6lt7lz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3vAphbzvj6lt7lz',
      parentSpanInst
    );
    try {
      bh.filter = {
        reference_number: bh.input.reference_number,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZlOFNysrvIyB4BU4(bh, parentSpanInst);
      //appendnew_next_sd_a3vAphbzvj6lt7lz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3vAphbzvj6lt7lz',
        spanInst,
        'sd_a3vAphbzvj6lt7lz'
      );
    }
  }

  async sd_ZlOFNysrvIyB4BU4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZlOFNysrvIyB4BU4',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.quote = await dmUtilsInst.find(
        '_EN_2988ntmb36',
        bh.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gguwdrwT9dSDZmGB(bh, parentSpanInst);
      //appendnew_next_sd_ZlOFNysrvIyB4BU4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZlOFNysrvIyB4BU4',
        spanInst,
        'sd_ZlOFNysrvIyB4BU4'
      );
    }
  }

  async sd_gguwdrwT9dSDZmGB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gguwdrwT9dSDZmGB',
      parentSpanInst
    );
    try {
      bh.quote_status_id = bh.quote?.[0]?.status_id;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h167QZEorsmnUueh(bh, parentSpanInst);
      //appendnew_next_sd_gguwdrwT9dSDZmGB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gguwdrwT9dSDZmGB',
        spanInst,
        'sd_gguwdrwT9dSDZmGB'
      );
    }
  }

  async sd_h167QZEorsmnUueh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h167QZEorsmnUueh',
      parentSpanInst
    );
    try {
      let outputVariables = await this.validateStatusChange(
        spanInst,
        bh.quote_status_id,
        bh.status_id,
        bh.input.source
      );
      bh.valid = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Dp6A1FxIo3HadTsk(bh, parentSpanInst);
      //appendnew_next_sd_h167QZEorsmnUueh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h167QZEorsmnUueh',
        spanInst,
        'sd_h167QZEorsmnUueh'
      );
    }
  }

  async sd_Dp6A1FxIo3HadTsk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dp6A1FxIo3HadTsk',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_u9Z3iC9RuDAk1OlR(bh, parentSpanInst);
      } else {
        bh = await this.sd_mRfEv49SZdBZtfNS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dp6A1FxIo3HadTsk',
        spanInst,
        'sd_Dp6A1FxIo3HadTsk'
      );
    }
  }

  async sd_u9Z3iC9RuDAk1OlR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u9Z3iC9RuDAk1OlR',
      parentSpanInst
    );
    try {
      bh.filter = {
        reference_number: bh.input.reference_number,
      };

      bh.payload = {
        status_id: bh.status_id,
        update_date: new Date(Date.now()),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rHrOsGB7xInONbb8(bh, parentSpanInst);
      //appendnew_next_sd_u9Z3iC9RuDAk1OlR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u9Z3iC9RuDAk1OlR',
        spanInst,
        'sd_u9Z3iC9RuDAk1OlR'
      );
    }
  }

  async sd_rHrOsGB7xInONbb8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rHrOsGB7xInONbb8',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_2988ntmb36',
        bh.filter,
        bh.payload
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5NzZaiGVEn1FFYF6(bh, parentSpanInst);
      //appendnew_next_sd_rHrOsGB7xInONbb8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rHrOsGB7xInONbb8',
        spanInst,
        'sd_rHrOsGB7xInONbb8'
      );
    }
  }

  async sd_5NzZaiGVEn1FFYF6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5NzZaiGVEn1FFYF6',
      parentSpanInst
    );
    try {
      if (bh.result?.affected > 0) {
        bh.local.status = true;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5NzZaiGVEn1FFYF6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5NzZaiGVEn1FFYF6',
        spanInst,
        'sd_5NzZaiGVEn1FFYF6'
      );
    }
  }

  async sd_mRfEv49SZdBZtfNS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mRfEv49SZdBZtfNS',
      parentSpanInst
    );
    try {
      bh.local.status = false;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mRfEv49SZdBZtfNS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mRfEv49SZdBZtfNS',
        spanInst,
        'sd_mRfEv49SZdBZtfNS'
      );
    }
  }

  async sd_5eZiCiLp2Y95Gz3k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5eZiCiLp2Y95Gz3k',
      parentSpanInst
    );
    try {
      let status_rules = {
        1: [2, 8, 9, 10],
        2: [3, 5, 6, 8, 9, 10],
        3: [4, 7, 8, 9, 10, 11, 12],
        4: [7, 8, 9, 10, 11, 12],
        5: [2, 8, 9, 10],
        6: [3, 8, 9, 10],
        11: [7, 10],
        12: [4, 10, 11],
      };

      if (bh.input.source) {
        status_rules[1].push(3, 6);
      }

      let to_arr = status_rules[bh.input.fromStatus] || [];
      bh.local.status = to_arr.includes(bh.input.toStatus);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5eZiCiLp2Y95Gz3k
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5eZiCiLp2Y95Gz3k',
        spanInst,
        'sd_5eZiCiLp2Y95Gz3k'
      );
    }
  }

  async sd_Kz4rybaxPwG1j7uE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Kz4rybaxPwG1j7uE',
      parentSpanInst
    );
    try {
      bh.filter = {
        reference_number: bh.input.reference_number,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UGt5cR5Zk1Dbgva0(bh, parentSpanInst);
      //appendnew_next_sd_Kz4rybaxPwG1j7uE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Kz4rybaxPwG1j7uE',
        spanInst,
        'sd_Kz4rybaxPwG1j7uE'
      );
    }
  }

  async sd_UGt5cR5Zk1Dbgva0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UGt5cR5Zk1Dbgva0',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.quote = await dmUtilsInst.find(
        '_EN_2988ntmb36',
        bh.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NXxqxhsQxeUjRiLy(bh, parentSpanInst);
      //appendnew_next_sd_UGt5cR5Zk1Dbgva0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UGt5cR5Zk1Dbgva0',
        spanInst,
        'sd_UGt5cR5Zk1Dbgva0'
      );
    }
  }

  async sd_NXxqxhsQxeUjRiLy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NXxqxhsQxeUjRiLy',
      parentSpanInst
    );
    try {
      bh.quote_addl_details = JSON.parse(bh.quote?.[0]?.addl_details);
      bh.quote_addl_details['comment'] = bh.input.comment;
      bh.quote_addl_details = JSON.stringify(bh.quote_addl_details);

      bh.filter = {
        reference_number: bh.input.reference_number,
      };

      bh.payload = {
        addl_details: bh.quote_addl_details,
        update_date: new Date(Date.now()),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fw23LlhPM2vuMDaf(bh, parentSpanInst);
      //appendnew_next_sd_NXxqxhsQxeUjRiLy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NXxqxhsQxeUjRiLy',
        spanInst,
        'sd_NXxqxhsQxeUjRiLy'
      );
    }
  }

  async sd_Fw23LlhPM2vuMDaf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fw23LlhPM2vuMDaf',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_7x57vczK8BKALy2d');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_2988ntmb36',
        bh.filter,
        bh.payload
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uBA3IqbEIXOzZGuk(bh, parentSpanInst);
      //appendnew_next_sd_Fw23LlhPM2vuMDaf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fw23LlhPM2vuMDaf',
        spanInst,
        'sd_Fw23LlhPM2vuMDaf'
      );
    }
  }

  async sd_uBA3IqbEIXOzZGuk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uBA3IqbEIXOzZGuk',
      parentSpanInst
    );
    try {
      if (bh.result?.affected > 0) {
        bh.local.status = true;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_uBA3IqbEIXOzZGuk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uBA3IqbEIXOzZGuk',
        spanInst,
        'sd_uBA3IqbEIXOzZGuk'
      );
    }
  }

  async sd_XlkMcZ8zqVCTJCwa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XlkMcZ8zqVCTJCwa',
      parentSpanInst
    );
    try {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().substring(2);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      //DDMMYYHHMMSS
      bh.local.reference_number =
        day + month + year + hours + minutes + seconds;
      //SEQ QUERY
      bh.query = `SELECT ART_RESET_SEQ FROM dual`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Gx6R6cjp7B7pAUFp(bh, parentSpanInst);
      //appendnew_next_sd_XlkMcZ8zqVCTJCwa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XlkMcZ8zqVCTJCwa',
        spanInst,
        'sd_XlkMcZ8zqVCTJCwa'
      );
    }
  }

  async sd_Gx6R6cjp7B7pAUFp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gx6R6cjp7B7pAUFp',
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
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GA7toMDDcXpFqyHF(bh, parentSpanInst);
      //appendnew_next_sd_Gx6R6cjp7B7pAUFp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gx6R6cjp7B7pAUFp',
        spanInst,
        'sd_Gx6R6cjp7B7pAUFp'
      );
    }
  }

  async sd_GA7toMDDcXpFqyHF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GA7toMDDcXpFqyHF',
      parentSpanInst
    );
    try {
      const random = Math.floor(Math.random() * 90) + 10; //10-99 random number
      if (bh.result?.[0]?.ART_RESET_SEQ)
        bh.local.reference_number += bh.result[0]['ART_RESET_SEQ']
          .toString()
          .padStart(2, '0');
      else bh.local.reference_number += random;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GA7toMDDcXpFqyHF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GA7toMDDcXpFqyHF',
        spanInst,
        'sd_GA7toMDDcXpFqyHF'
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
      (await this.sd_479RB0dedTswfFyv(bh, parentSpanInst))
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
  async sd_479RB0dedTswfFyv(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_GA7toMDDcXpFqyHF'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_GA7toMDDcXpFqyHF(bh, parentSpanInst);
    //appendnew_next_sd_479RB0dedTswfFyv
    return true;
  }
  //appendnew_flow_flows_Catch
}
