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
export class db_flows {
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
    this.serviceName = 'db_flows';
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
      instance = new db_flows(
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
    //appendnew_flow_db_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: db_flows');
    //appendnew_flow_db_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: db_flows');
    //appendnew_flow_db_flows_HttpIn
  }
  //   service flows_db_flows

  async getPayerData(
    parentSpanInst,
    parent_checkout_id = '',
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getPayerData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
      },
      local: {
        source_ref_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPayerDetails(bh, parentSpanInst);
      //appendnew_next_getPayerData
      return (
        // formatting output variables
        {
          input: {},
          local: {
            source_ref_data: bh.local.source_ref_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6uYXHIEmEWWnSNyw',
        spanInst,
        'getPayerData'
      );
    }
  }

  async addMokafaaTxn(parentSpanInst, payload: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'addMokafaaTxn',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Wrm8Y5e2bVBiOuvC(bh, parentSpanInst);
      //appendnew_next_addMokafaaTxn
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5oXgFmUfpMbYfim2',
        spanInst,
        'addMokafaaTxn'
      );
    }
  }

  async updateMokafaaTxn(
    parentSpanInst,
    payload: any = undefined,
    filter: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updateMokafaaTxn',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
        filter,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QFF5lne4ySkv9EVb(bh, parentSpanInst);
      //appendnew_next_updateMokafaaTxn
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GvoFT0q70uGOdUxS',
        spanInst,
        'updateMokafaaTxn'
      );
    }
  }

  async getMokafaaTxn(
    parentSpanInst,
    parent_checkout_id = '',
    source_id_no = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getMokafaaTxn',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
      },
      local: {
        source_ref_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KCx7dIT1ezORDZVo(bh, parentSpanInst);
      //appendnew_next_getMokafaaTxn
      return (
        // formatting output variables
        {
          input: {},
          local: {
            source_ref_data: bh.local.source_ref_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PKaPoMA53uG8p3VA',
        spanInst,
        'getMokafaaTxn'
      );
    }
  }

  async getOptionsDetails(
    parentSpanInst,
    payer_id: any = undefined,
    payment_method: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getOptionsDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payer_id,
        payment_method,
      },
      local: {
        source_ref_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nwidhJhxadnnZBAy(bh, parentSpanInst);
      //appendnew_next_getOptionsDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            source_ref_data: bh.local.source_ref_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8tCLjUMcBQucUw7k',
        spanInst,
        'getOptionsDetails'
      );
    }
  }

  async getTransaction(
    parentSpanInst,
    checkout_id: any = undefined,
    source_id_no: any = undefined,
    cron = false,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getTransaction',
      parentSpanInst
    );
    let bh: any = {
      input: {
        checkout_id,
        source_id_no,
        cron,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dUNSqjGisP167OMj(bh, parentSpanInst);
      //appendnew_next_getTransaction
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
        'sd_sB27khuom2gkaqKO',
        spanInst,
        'getTransaction'
      );
    }
  }

  async updatePaymentStatus(
    parentSpanInst,
    dataObj: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updatePaymentStatus',
      parentSpanInst
    );
    let bh: any = {
      input: {
        dataObj,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zZJR0cyoErRNotsw(bh, parentSpanInst);
      //appendnew_next_updatePaymentStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MnoboYo3XeQd9UbX',
        spanInst,
        'updatePaymentStatus'
      );
    }
  }
  //appendnew_flow_db_flows_start

  async getPayerDetails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPayerDetails',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd."currency",pd2."phone_no", pd."amount",pd."payment_status", pd."checkout_id", pd2."source_id_no", pd."txn_ref_number", json_value(pd2."addl_details", '$.locale') "locale", pd."payer_id", pd2."name", pd."callback_url", pd2."email",pd2."addl_details",
json_value(pd2."addl_details", '$.frontend_cb_partial_url') "frontend_cb_partial_url"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON pd2."id" = pd."payer_id"   
WHERE pd."checkout_id" = :1 AND pd2."source_id_no"  = :2`;

      bh.params = [bh.input.parent_checkout_id, bh.input.source_id_no];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SqItMqAs92mhX8Zi(bh, parentSpanInst);
      //appendnew_next_getPayerDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EoJRkDlsSS1Rvgvt',
        spanInst,
        'getPayerDetails'
      );
    }
  }

  async sd_SqItMqAs92mhX8Zi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SqItMqAs92mhX8Zi',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
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
      bh = await this.setRes(bh, parentSpanInst);
      //appendnew_next_sd_SqItMqAs92mhX8Zi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SqItMqAs92mhX8Zi',
        spanInst,
        'sd_SqItMqAs92mhX8Zi'
      );
    }
  }

  async setRes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setRes', parentSpanInst);
    try {
      if (bh.result.length > 0) {
        bh.local.source_ref_data = bh.result[0];
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setRes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LzJzR639dHNUgLZA',
        spanInst,
        'setRes'
      );
    }
  }

  async sd_Wrm8Y5e2bVBiOuvC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wrm8Y5e2bVBiOuvC',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.local.response = await dmUtilsInst.insert(
        '_EN_6dztaj38zn',
        bh.input.payload
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Wrm8Y5e2bVBiOuvC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wrm8Y5e2bVBiOuvC',
        spanInst,
        'sd_Wrm8Y5e2bVBiOuvC'
      );
    }
  }

  async sd_QFF5lne4ySkv9EVb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QFF5lne4ySkv9EVb',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_6dztaj38zn',
        bh.input.filter,
        bh.input.payload
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_QFF5lne4ySkv9EVb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QFF5lne4ySkv9EVb',
        spanInst,
        'sd_QFF5lne4ySkv9EVb'
      );
    }
  }

  async sd_KCx7dIT1ezORDZVo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KCx7dIT1ezORDZVo',
      parentSpanInst
    );
    try {
      // bh.query = `SELECT *
      // FROM (
      //     SELECT
      //         pd."currency",pd2."phone_no", pd."amount",pd."payment_status", pd."checkout_id", pd2."source_id_no", pd."txn_ref_number", json_value(pd2."addl_details", '$.locale') "locale", pd."payer_id",
      //         md."redemption_phone_no", md."otp_token", md."outstanding_amount", md."mokafaa_points",md."transaction_id",md."request_id", md."error_message", md."status_code",
      //         ROW_NUMBER() OVER (PARTITION BY pd."checkout_id" ORDER BY md."creation_date" DESC) AS rn
      //     FROM
      //          "payment_details" pd
      //     LEFT JOIN "payer_details" pd2 ON pd2."id" = pd."payer_id"
      //     LEFT JOIN  "mokafaa_details" md ON md."payer_id" = pd2."id" AND pd."checkout_id" = md."checkout_id"
      //     WHERE pd."checkout_id" = :1 AND pd2."source_id_no"  = :2
      // ) subquery
      // WHERE rn = 1`

      bh.query = `SELECT 
    pd."currency",
    pd1."phone_no", 
    pd."amount",
    pd."payment_status", 
    pd."checkout_id", 
    pd1."source_id_no", 
    pd."txn_ref_number", 
    json_value(pd1."addl_details", '$.locale') "locale", 
    json_value(pd1."addl_details", '$.frontend_cb_partial_url') "frontend_cb_partial_url",
    pd."payer_id",
    COALESCE(md."redemption_phone_no", md1."redemption_phone_no") "redemption_phone_no",
    COALESCE(md."otp_token", md1."otp_token") "otp_token",
    COALESCE(md."outstanding_amount", md3."outstanding_amount", md4."outstanding_amount") "outstanding_amount",
    COALESCE(md3."mokafaa_points", md4."mokafaa_points") "mokafaa_points",
    COALESCE(md3."transaction_id", md4."transaction_id") "transaction_id",
    md."request_id", 
    md."error_message", 
    md."status_code"
FROM 
    "payment_details" pd 
LEFT JOIN 
    "payer_details" pd1 ON (pd1."id" = pd."payer_id")
LEFT JOIN 
    "mokafaa_details" md ON (md."payer_id" = pd1."id" AND pd."checkout_id" = md."checkout_id" AND md."status_code" = 200)
LEFT JOIN 
    "mokafaa_details" md1 ON (md1."payer_id" = pd1."id" AND pd."checkout_id" = md1."checkout_id" AND md1."status_code" = 200 AND md1."id" > md."id" AND md."id" IS NOT NULL)
LEFT JOIN 
    "mokafaa_details" md3 ON (md3."payer_id" = pd1."id" AND pd."checkout_id" = md3."checkout_id" AND md."outstanding_amount" IS NULL AND md3."status_code" = 200 AND md3."id" < md."id" AND md."id" IS NOT NULL) 
LEFT JOIN 
    "mokafaa_details" md4 ON (md4."payer_id" = pd1."id" AND pd."checkout_id" = md4."checkout_id" AND md."outstanding_amount" IS NULL AND md4."status_code" = 200 AND md4."id" > md."id" AND md."id" IS NOT NULL) 
WHERE 
pd."checkout_id" = :1 
AND pd1."source_id_no" = :2 
    AND md1."id" IS NULL 
`;

      bh.params = [bh.input.parent_checkout_id, bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qlsNjodF4nO97qEJ(bh, parentSpanInst);
      //appendnew_next_sd_KCx7dIT1ezORDZVo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KCx7dIT1ezORDZVo',
        spanInst,
        'sd_KCx7dIT1ezORDZVo'
      );
    }
  }

  async sd_qlsNjodF4nO97qEJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qlsNjodF4nO97qEJ',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
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
      bh = await this.setResp(bh, parentSpanInst);
      //appendnew_next_sd_qlsNjodF4nO97qEJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qlsNjodF4nO97qEJ',
        spanInst,
        'sd_qlsNjodF4nO97qEJ'
      );
    }
  }

  async setResp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setResp', parentSpanInst);
    try {
      if (bh.result.length > 0) {
        bh.local.source_ref_data = bh.result[0];
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f6Yh3s4Y6I5M20bl',
        spanInst,
        'setResp'
      );
    }
  }

  async sd_nwidhJhxadnnZBAy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nwidhJhxadnnZBAy',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pom."product_type", pom."channel_code", json_value(pd."addl_details", '$.device_type') "device_ype", pd1."callback_url",
json_value(pd."addl_details", '$.frontend_cb_partial_url') "frontend_cb_partial_url",
json_value(pd."addl_details", '$.frontend_cb_success_url') "frontend_cb_success_url"
FROM "payment_option_master" pom 
LEFT JOIN "payment_option_details" pod ON (pod."payment_master_id" = pom."id")
LEFT JOIN "payer_details" pd ON (pd."id" = :1)
LEFT JOIN "payment_details" pd1 on (pd1."payer_id" = :2)
WHERE pod."payment_type" = :3`;

      bh.params = [
        bh.input.payer_id,
        bh.input.payer_id,
        bh.input.payment_method,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NVeiJ9ofRP7aN5Jc(bh, parentSpanInst);
      //appendnew_next_sd_nwidhJhxadnnZBAy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nwidhJhxadnnZBAy',
        spanInst,
        'sd_nwidhJhxadnnZBAy'
      );
    }
  }

  async sd_NVeiJ9ofRP7aN5Jc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NVeiJ9ofRP7aN5Jc',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
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
      bh = await this.setResp1(bh, parentSpanInst);
      //appendnew_next_sd_NVeiJ9ofRP7aN5Jc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NVeiJ9ofRP7aN5Jc',
        spanInst,
        'sd_NVeiJ9ofRP7aN5Jc'
      );
    }
  }

  async setResp1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setResp1', parentSpanInst);
    try {
      if (bh.result.length > 0) {
        bh.local.source_ref_data = bh.result[0];
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResp1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iUkTNiAmlME5uoq7',
        spanInst,
        'setResp1'
      );
    }
  }

  async sd_dUNSqjGisP167OMj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dUNSqjGisP167OMj',
      parentSpanInst
    );
    try {
      bh.params = [];
      if (bh.input.checkout_id) {
        bh.params.push(bh.input.checkout_id);
      }
      if (bh.input.source_id_no) {
        bh.params.push(bh.input.source_id_no);
      }

      let check = '';

      if (bh.input.cron) {
        check = ` AND "payment_status" = 'Initiated' AND "transaction_id" IS NOT NULL `;
      }

      bh.query = `SELECT md."checkout_id", md."payer_id","transaction_id", pd1."payment_status"
FROM "mokafaa_details" md
LEFT JOIN "payer_details" pd ON (pd."id" = md."payer_id")
LEFT JOIN "payment_details" pd1 ON (pd1."checkout_id" = md."checkout_id" AND pd1."payer_id" = pd."id")
WHERE "reverse_points" is null ${check} ${
        bh.input.checkout_id
          ? `AND md."checkout_id" = :${
              bh.params.indexOf(bh.input.checkout_id) + 1
            } `
          : ''
      } ${
        bh.input.source_id_no
          ? `AND pd."source_id_no" = :${
              bh.params.indexOf(bh.input.source_id_no) + 1
            }`
          : ''
      }`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7WqsUXIdVbaWTK4q(bh, parentSpanInst);
      //appendnew_next_sd_dUNSqjGisP167OMj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dUNSqjGisP167OMj',
        spanInst,
        'sd_dUNSqjGisP167OMj'
      );
    }
  }

  async sd_7WqsUXIdVbaWTK4q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7WqsUXIdVbaWTK4q',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_ZCuYINqp64A4kzfu'
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
      //appendnew_next_sd_7WqsUXIdVbaWTK4q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7WqsUXIdVbaWTK4q',
        spanInst,
        'sd_7WqsUXIdVbaWTK4q'
      );
    }
  }

  async sd_zZJR0cyoErRNotsw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zZJR0cyoErRNotsw',
      parentSpanInst
    );
    try {
      bh.payload = {
        payment_status: bh.input.dataObj['payment_status'],
        payment_status_desc: bh.input.dataObj['payment_status_desc'],
      };

      bh.filter = {
        checkout_id: bh.input.dataObj['checkout_id'],
        payer_id: bh.input.dataObj['payer_id'],
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VDXYHm2smNShu32L(bh, parentSpanInst);
      //appendnew_next_sd_zZJR0cyoErRNotsw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zZJR0cyoErRNotsw',
        spanInst,
        'sd_zZJR0cyoErRNotsw'
      );
    }
  }

  async sd_VDXYHm2smNShu32L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VDXYHm2smNShu32L',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh = await dmUtilsInst.updateByFilter(
        '_EN_dtkig9esmm',
        bh.filter,
        bh.payload
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_VDXYHm2smNShu32L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VDXYHm2smNShu32L',
        spanInst,
        'sd_VDXYHm2smNShu32L'
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
  //appendnew_flow_db_flows_Catch
}
