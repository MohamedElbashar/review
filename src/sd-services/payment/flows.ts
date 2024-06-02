// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj from '../hyper_pay/flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf from '../sadad/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S from '../tabby/apigee_tabby_flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu from '../urpay/urpay_flows'; //_splitter_
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

  async inputInitValidation(
    parentSpanInst,
    payload: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'inputInitValidation',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
      },
      local: {
        statusCode: 0,
        response: undefined,
        continue_check: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateIntiate(bh, parentSpanInst);
      //appendnew_next_inputInitValidation
      return (
        // formatting output variables
        {
          input: {},
          local: {
            statusCode: bh.local.statusCode,
            response: bh.local.response,
            continue_check: bh.local.continue_check,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tlCuHCzl47BqIgqv',
        spanInst,
        'inputInitValidation'
      );
    }
  }

  async fetchPaymentOptions(
    parentSpanInst,
    reqObject: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fetchPaymentOptions',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reqObject,
      },
      local: {
        result: undefined,
        statusCode: 200,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getOptionsSql(bh, parentSpanInst);
      //appendnew_next_fetchPaymentOptions
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F4GJBySxRcrugk39',
        spanInst,
        'fetchPaymentOptions'
      );
    }
  }

  async insertPayerDetails(
    parentSpanInst,
    payload: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'insertPayerDetails',
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
      bh = await this.payerInsert(bh, parentSpanInst);
      //appendnew_next_insertPayerDetails
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
        'sd_swHdLjgyP7IcMUT9',
        spanInst,
        'insertPayerDetails'
      );
    }
  }

  async fetchOptions(parentSpanInst, reqObject: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'fetchOptions',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reqObject,
      },
      local: {
        result: undefined,
        statusCode: 200,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getOptionsSql1(bh, parentSpanInst);
      //appendnew_next_fetchOptions
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o6ruj7EaOhRDL5sF',
        spanInst,
        'fetchOptions'
      );
    }
  }

  async triggerPayment(
    parentSpanInst,
    payload: any = undefined,
    payment_method: any = undefined,
    locale: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'triggerPayment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
        payment_method,
        locale,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentOptions(bh, parentSpanInst);
      //appendnew_next_triggerPayment
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JHJNmHT318C5fbDd',
        spanInst,
        'triggerPayment'
      );
    }
  }

  async fetchPayment(parentSpanInst, reqObject: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'fetchPayment',
      parentSpanInst
    );
    let bh: any = {
      input: {
        reqObject,
      },
      local: {
        result: undefined,
        statusCode: 200,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPaymentDetails(bh, parentSpanInst);
      //appendnew_next_fetchPayment
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2UkKnYB2SsQ6mWiB',
        spanInst,
        'fetchPayment'
      );
    }
  }

  async fetchPaymentDetails(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fetchPaymentDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EV1gJ1MLS4MUTrnd(bh, parentSpanInst);
      //appendnew_next_fetchPaymentDetails
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
        'sd_HPghAarAu3Cb6aD4',
        spanInst,
        'fetchPaymentDetails'
      );
    }
  }

  async updatePaymentDetails(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    update_key: any = undefined,
    update_value: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'updatePaymentDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        update_key,
        update_value,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eiOTbPk4EnOAVAQv(bh, parentSpanInst);
      //appendnew_next_updatePaymentDetails
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
        'sd_n8pW1NWjOppn6bGm',
        spanInst,
        'updatePaymentDetails'
      );
    }
  }

  async getMokafaaAmount(
    parentSpanInst,
    checkout_id: any = undefined,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getMokafaaAmount',
      parentSpanInst
    );
    let bh: any = {
      input: {
        checkout_id,
        source_id_no,
      },
      local: {
        mokafaa_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1DT4UIqPekVYchK2(bh, parentSpanInst);
      //appendnew_next_getMokafaaAmount
      return (
        // formatting output variables
        {
          input: {},
          local: {
            mokafaa_data: bh.local.mokafaa_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uTBZyE14LzFLXQA0',
        spanInst,
        'getMokafaaAmount'
      );
    }
  }

  async transaction(parentSpanInst, source_id_no: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'transaction',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
      },
      local: {
        response: undefined,
        status_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t4tIzuJmHQWihfwv(bh, parentSpanInst);
      //appendnew_next_transaction
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
            status_code: bh.local.status_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ImOGuI9xZFHk0cDg',
        spanInst,
        'transaction'
      );
    }
  }

  async tabbyCheck(parentSpanInst, checkout_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'tabbyCheck',
      parentSpanInst
    );
    let bh: any = {
      input: {
        checkout_id,
      },
      local: {
        is_tabby: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wIEVqMPHmubMZFyr(bh, parentSpanInst);
      //appendnew_next_tabbyCheck
      return (
        // formatting output variables
        {
          input: {},
          local: {
            is_tabby: bh.local.is_tabby,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uninPj1iVj6qNC0r',
        spanInst,
        'tabbyCheck'
      );
    }
  }

  async paymentIntiateSubflow(
    parentSpanInst,
    parent_checkout_id: any = undefined,
    source_id_no: any = undefined,
    payment_method: any = undefined,
    locale: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'paymentIntiateSubflow',
      parentSpanInst
    );
    let bh: any = {
      input: {
        parent_checkout_id,
        source_id_no,
        payment_method,
        locale,
      },
      local: {
        response: undefined,
        statusCode: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.pdReq11(bh, parentSpanInst);
      //appendnew_next_paymentIntiateSubflow
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
            statusCode: bh.local.statusCode,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RXGLocFUuYWSYXMZ',
        spanInst,
        'paymentIntiateSubflow'
      );
    }
  }

  async validateTransaction(
    parentSpanInst,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validateTransaction',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
      },
      local: {
        count: 0,
        payment_txn_5min: false,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CTrO0h5rfVtWMuwS(bh, parentSpanInst);
      //appendnew_next_validateTransaction
      return (
        // formatting output variables
        {
          input: {},
          local: {
            count: bh.local.count,
            payment_txn_5min: bh.local.payment_txn_5min,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K4dkON835UR19TeR',
        spanInst,
        'validateTransaction'
      );
    }
  }

  async clearTransaction(
    parentSpanInst,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'clearTransaction',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H38t82cjZraJRPPm(bh, parentSpanInst);
      //appendnew_next_clearTransaction
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
        'sd_0DZr2y6YeU7tqUEC',
        spanInst,
        'clearTransaction'
      );
    }
  }

  async validatedCompleted(
    parentSpanInst,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validatedCompleted',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
      },
      local: {
        count: undefined,
        db_payment_method: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NbN6bsrX6HL88rmh(bh, parentSpanInst);
      //appendnew_next_validatedCompleted
      return (
        // formatting output variables
        {
          input: {},
          local: {
            count: bh.local.count,
            db_payment_method: bh.local.db_payment_method,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QBPO70Z5dGs1ltIy',
        spanInst,
        'validatedCompleted'
      );
    }
  }

  async validateSadad(
    parentSpanInst,
    source_id_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validateSadad',
      parentSpanInst
    );
    let bh: any = {
      input: {
        source_id_no,
      },
      local: {
        count: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LOhVub0rSqFxTZHg(bh, parentSpanInst);
      //appendnew_next_validateSadad
      return (
        // formatting output variables
        {
          input: {},
          local: {
            count: bh.local.count,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sLoqqVsHxUILJpNY',
        spanInst,
        'validateSadad'
      );
    }
  }
  //appendnew_flow_flows_start

  async validateIntiate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateIntiate',
      parentSpanInst
    );
    try {
      bh.local.continue_check = true;

      if (
        !(
          bh.input.payload['customer_id_no'] &&
          bh.input.payload['amount'] &&
          bh.input.payload['email'] &&
          bh.input.payload['currency'] &&
          bh.input.payload['product_type'] &&
          bh.input.payload['callback_url'] &&
          bh.input.payload['source_id_no']
        ) ||
        !validateAmount(bh.input.payload['amount'])
      ) {
        bh.local.statusCode = 500;
        bh.local.response = {
          error: 'Invalid or Missing Data',
        };
        bh.local.continue_check = false;
      }

      function validateAmount(amt) {
        if (parseFloat(amt)) {
          return true;
        } else {
          return false;
        }
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_validateIntiate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8cllSRMp3LYjDl8U',
        spanInst,
        'validateIntiate'
      );
    }
  }

  async getOptionsSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getOptionsSql',
      parentSpanInst
    );
    try {
      let filter = '';
      let params = [];

      if (bh.input.reqObject['product_type']) {
        params.push(bh.input.reqObject['product_type']);
        filter += ` ${filter ? 'AND ' : ''}"product_type" = :${
          params.indexOf(bh.input.reqObject['product_type']) + 1
        }`;
      }
      if (bh.input.reqObject['channel_code']) {
        params.push(bh.input.reqObject['channel_code']);
        filter += ` ${filter ? 'AND ' : ''}"channel_code" = :${
          params.indexOf(bh.input.reqObject['channel_code']) + 1
        }`;
      }
      if (bh.input.reqObject['device_type']) {
        params.push(bh.input.reqObject['device_type']);
        filter += ` ${filter ? 'AND ' : ''}("device_type" = :${
          params.indexOf(bh.input.reqObject['device_type']) + 1
        } or "device_type" IS NULL)`;
      } else {
        filter += ` ${
          filter ? 'AND ' : ''
        }("device_type" != 'ios' or  "device_type" is null)`;
      }

      bh.query = `SELECT pom."product_type", pom."channel_code", JSON_ARRAYAGG(JSON_OBJECT('payment_type': pod."payment_type", 'image_path': CONCAT('${
        process.env.STRAPI_BASE_URL
      }', JSON_VALUE(pod."image_path", '$.${process.env.NODE_ENV.toLowerCase()}')), 'device_type': pod."device_type") ORDER BY pod."payment_type") AS "payment_options" FROM "payment_option_master" pom LEFT JOIN "payment_option_details" pod ON pod."payment_master_id" = pom."id" ${
        filter ? 'WHERE' + filter : ''
      } GROUP BY pom."product_type", pom."channel_code"`;

      bh.params = params || [];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentOptionsDb(bh, parentSpanInst);
      //appendnew_next_getOptionsSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6O2WPcpUI7RBWBan',
        spanInst,
        'getOptionsSql'
      );
    }
  }

  async paymentOptionsDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentOptionsDb',
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
      bh = await this.sd_miGnrDj7TgyJ18wq(bh, parentSpanInst);
      //appendnew_next_paymentOptionsDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n6KlJy3MeUKWfhvC',
        spanInst,
        'paymentOptionsDb'
      );
    }
  }

  async sd_miGnrDj7TgyJ18wq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_miGnrDj7TgyJ18wq',
      parentSpanInst
    );
    try {
      if (bh.local.result.length > 0) {
        bh.local.result = bh.local.result.map((res) => {
          if (res['payment_options']) {
            res['payment_options'] = JSON.parse(res['payment_options']);
          }
          return res;
        });
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_miGnrDj7TgyJ18wq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_miGnrDj7TgyJ18wq',
        spanInst,
        'sd_miGnrDj7TgyJ18wq'
      );
    }
  }

  async payerInsert(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'payerInsert',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.result = await dmUtilsInst.insert('_EN_a04fz0w3rf', bh.input.payload);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.mapPayerId(bh, parentSpanInst);
      //appendnew_next_payerInsert
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g4dXoOZR9iLXlrIT',
        spanInst,
        'payerInsert'
      );
    }
  }

  async mapPayerId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mapPayerId',
      parentSpanInst
    );
    try {
      bh.input.payload['payer_id'] = bh.result['id'];
      bh.input.payload['payment_status'] = 'Initiated';
      bh.input.payload['amount'] = parseFloat(
        bh.input.payload['amount']
      ).toFixed(2);

      console.log('payment_details', bh.input.payload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentInsert(bh, parentSpanInst);
      //appendnew_next_mapPayerId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VfMoElWs2lNRjRzk',
        spanInst,
        'mapPayerId'
      );
    }
  }

  async paymentInsert(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentInsert',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_ZCuYINqp64A4kzfu');
      bh.result = await dmUtilsInst.insert('_EN_dtkig9esmm', bh.input.payload);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_paymentInsert
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s0a4QEqLUpkDnvXt',
        spanInst,
        'paymentInsert'
      );
    }
  }

  async sd_DWwSiH1iorULGWjL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DWwSiH1iorULGWjL',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 500;
      bh.local.response = {
        error:
          bh.response ||
          'An error occurred during the execution of the database operation.',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DWwSiH1iorULGWjL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DWwSiH1iorULGWjL',
        spanInst,
        'sd_DWwSiH1iorULGWjL'
      );
    }
  }

  async getOptionsSql1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getOptionsSql1',
      parentSpanInst
    );
    try {
      let filter = '';
      let params = [];

      if (bh.input.reqObject['product_type']) {
        params.push(bh.input.reqObject['product_type']);
        filter += ` ${filter ? 'AND ' : ''}"product_type" = :${
          params.indexOf(bh.input.reqObject['product_type']) + 1
        }`;
      }
      if (bh.input.reqObject['channel_code']) {
        params.push(bh.input.reqObject['channel_code']);
        filter += ` ${filter ? 'AND ' : ''}"channel_code" = :${
          params.indexOf(bh.input.reqObject['channel_code']) + 1
        }`;
      }
      if (bh.input.reqObject['device_type']) {
        params.push(bh.input.reqObject['device_type']);
        filter += ` ${filter ? 'AND ' : ''}("device_type" = :${
          params.indexOf(bh.input.reqObject['device_type']) + 1
        } or "device_type" IS NULL)`;
      } else {
        filter += ` ${
          filter ? 'AND ' : ''
        }("device_type" != 'ios' or  "device_type" is null)`;
      }

      bh.query = `SELECT pom."product_type", pom."channel_code", JSON_ARRAYAGG(JSON_OBJECT('payment_type': pod."payment_type", 'image_path': CONCAT('${
        process.env.STRAPI_BASE_URL
      }', JSON_VALUE(pod."image_path", '$.${process.env.NODE_ENV.toLowerCase()}')), 'device_type': pod."device_type") ORDER BY pod."payment_type") AS "payment_options"
FROM "payment_option_master" pom 
LEFT JOIN "payment_option_details" pod ON pod."payment_master_id" = pom."id" 
${filter ? 'WHERE' + filter : ''} 
GROUP BY pom."product_type", pom."channel_code"`;

      bh.params = params;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentOptionsDb1(bh, parentSpanInst);
      //appendnew_next_getOptionsSql1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bDLHPrkLCifDkvrU',
        spanInst,
        'getOptionsSql1'
      );
    }
  }

  async paymentOptionsDb1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentOptionsDb1',
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
      bh = await this.sd_twRWcvPIo9cXEg80(bh, parentSpanInst);
      //appendnew_next_paymentOptionsDb1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wQqVqUIJ3FyLvB6M',
        spanInst,
        'paymentOptionsDb1'
      );
    }
  }

  async sd_twRWcvPIo9cXEg80(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_twRWcvPIo9cXEg80',
      parentSpanInst
    );
    try {
      if (bh.local.result.length > 0) {
        bh.local.result = bh.local.result.map((res) => {
          if (res['payment_options']) {
            res['payment_options'] = JSON.parse(res['payment_options']);
          }
          return res;
        });
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_twRWcvPIo9cXEg80
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_twRWcvPIo9cXEg80',
        spanInst,
        'sd_twRWcvPIo9cXEg80'
      );
    }
  }

  async paymentOptions(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentOptions',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.payment_method,
          'TABBY',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rhY1uJaDLWBdcihb(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.payment_method,
          'SADAD_VS',
          undefined,
          undefined
        )
      ) {
        bh = await this.generateBill(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.payment_method,
          'EMKAN',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MiDhzvgLw9qak5ng(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.payment_method,
          'URPAY',
          undefined,
          undefined
        )
      ) {
        bh = await this.urpayToken(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.payment_method,
          'MOKAFAA',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mZcCLKWhasXXhwMu(bh, parentSpanInst);
      } else {
        bh = await this.hyperCheckoutReq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P8Y8pCY21CEyXN5U',
        spanInst,
        'paymentOptions'
      );
    }
  }

  async sd_rhY1uJaDLWBdcihb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rhY1uJaDLWBdcihb',
      parentSpanInst
    );
    try {
      let quote_data = bh.input.payload['addl_details']?.['insurance_details'];
      bh.continue_check = true;

      if (typeof quote_data == 'string') {
        quote_data = JSON.parse(quote_data);
        bh.input.payload['insurance_details'] = quote_data;
      }

      bh.customer_payer_history = {
        LOYALITY_LEVEL: bh.input.payload['loyality_level'],
        UNIQUE_ACCOUNT_IDENTIFIER:
          bh.input.payload['unique_account_identifier'],
        REGISTERED_SINCE: bh.input.payload['registered_since'],
      };

      if (
        !bh.input.payload['loyality_level'] ||
        !bh.input.payload['registered_since'] ||
        !bh.input.payload['insurance_details']
      ) {
        bh.continue_check = false;
        bh.local.response = {
          error: 'National id validation failed',
        };
        bh.local.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LspWWkQzDCoBZ0Jx(bh, parentSpanInst);
      //appendnew_next_sd_rhY1uJaDLWBdcihb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rhY1uJaDLWBdcihb',
        spanInst,
        'sd_rhY1uJaDLWBdcihb'
      );
    }
  }

  async sd_LspWWkQzDCoBZ0Jx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LspWWkQzDCoBZ0Jx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.continue_check,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.tabbyCheckout(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LspWWkQzDCoBZ0Jx',
        spanInst,
        'sd_LspWWkQzDCoBZ0Jx'
      );
    }
  }

  async tabbyCheckout(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tabbyCheckout',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1SInstance: SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S.apigee_tabby_flow =
        SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S.apigee_tabby_flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1SInstance.tabbyCheckout(
          spanInst,
          bh.input.payload,
          bh.input.payload['source_id_no'],
          bh.customer_payer_history
        );
      bh.local.response = outputVariables.local.tabby_redirect;
      bh.local.statusCode = outputVariables.local.status_code;
      bh.tabby_avail = outputVariables.local.tabby_avail;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_tabbyCheckout
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qpg4OVPTo6dFaOZl',
        spanInst,
        'tabbyCheckout'
      );
    }
  }

  async generateBill(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateBill',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_z0l0HapXMZfE5JkfInstance: SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf.flows =
        SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_z0l0HapXMZfE5JkfInstance.sd_KdmOaBMql2HKq0W6(
          spanInst,
          bh.input.payload['customer_id_no'],
          bh.input.payload['amount'],
          bh.input.payload
        );
      bh.local.response = outputVariables.local.response;
      bh.local.statusCode = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_generateBill
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MybYRiz0LhiG7RaG',
        spanInst,
        'generateBill'
      );
    }
  }

  async sd_MiDhzvgLw9qak5ng(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MiDhzvgLw9qak5ng',
      parentSpanInst
    );
    try {
      if (
        bh.input.payload['checkout_id'] &&
        bh.input.payload['source_id_no'] &&
        bh.input.payload['national_id']
      ) {
        bh.local.statusCode = 200;
        bh.local.response = {
          redirectUrl: `emkan_redirect?parent_checkout_id=${bh.input.payload['checkout_id']}&source_id_no=${bh.input.payload['source_id_no']}&national_id=${bh.input.payload['national_id']}`,
        };
      } else {
        bh.local.statusCode = 500;
        bh.local.response = {
          error: 'Emkan  Payment render failure',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_MiDhzvgLw9qak5ng
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MiDhzvgLw9qak5ng',
        spanInst,
        'sd_MiDhzvgLw9qak5ng'
      );
    }
  }

  async urpayToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'urpayToken',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance: SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows =
        SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance.urpayToken(
          spanInst,
          bh.input.payload['source_id_no'],
          bh.input.payload['checkout_id'],
          bh.input.payment_method,
          bh.input.payload['locale']
        );
      bh.local.response = outputVariables.local.urpay_token_resp;
      bh.local.statusCode = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getOtpToken(bh, parentSpanInst);
      //appendnew_next_urpayToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bxwyhxxiMxzsgPmd',
        spanInst,
        'urpayToken'
      );
    }
  }

  async getOtpToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getOtpToken',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance: SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows =
        SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu.urpay_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvuInstance.initiateUrpay(
          spanInst,
          bh.input.payload['checkout_id'],
          bh.input.payload['source_id_no'],
          bh.input.payment_method,
          bh.input.payload['locale']
        );
      bh.local.response = outputVariables.local.verify_token_obj;
      bh.local.statusCode = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_getOtpToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WuBru9veap1mrZvF',
        spanInst,
        'getOtpToken'
      );
    }
  }

  async sd_mZcCLKWhasXXhwMu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mZcCLKWhasXXhwMu',
      parentSpanInst
    );
    try {
      if (
        bh.input.payment_method &&
        bh.input.payload['checkout_id'] &&
        bh.input.payload['source_id_no']
      ) {
        bh.local.statusCode = 200;
        bh.local.response = {
          redirectUrl: `mokafaa?parent_checkout_id=${bh.input.payload['checkout_id']}&payment_method=${bh.input.payment_method}&source_id_no=${bh.input.payload['source_id_no']}`,
        };
      } else {
        bh.local.statusCode = 500;
        bh.local.response = {
          error: 'Mokafaa  Payment render failure',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mZcCLKWhasXXhwMu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mZcCLKWhasXXhwMu',
        spanInst,
        'sd_mZcCLKWhasXXhwMu'
      );
    }
  }

  async hyperCheckoutReq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'hyperCheckoutReq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.hyperCheckout(
          spanInst,
          bh.input.payload,
          bh.input.payload['source_id_no'],
          bh.input.payment_method,
          bh.input.locale
        );
      bh.statusCode = outputVariables.local.statusCode;
      bh.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setCheckoutId(bh, parentSpanInst);
      //appendnew_next_hyperCheckoutReq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nkyCzULmSI7a4aIA',
        spanInst,
        'hyperCheckoutReq'
      );
    }
  }

  async setCheckoutId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setCheckoutId',
      parentSpanInst
    );
    try {
      bh.input.payload['hyperpay_checkout_id'] =
        bh.response['hyperpay_checkout_id'];
      bh.input.payload['payment_method'] = bh.input['payment_method'];
      bh.input.payload['addl_details'] = JSON.stringify({
        locale: bh.input.payload['locale'],
        device_type: bh.input.payload['device_type'],
        frontend_cb_success_url: bh.input.payload['frontend_cb_success_url'],
      });

      bh.local.response = {
        redirectUrl: bh.response['payment_redirect_url'],
      };
      bh.local.statusCode = 301;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateHpId(bh, parentSpanInst);
      //appendnew_next_setCheckoutId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oVLfk4U8eUU65L5k',
        spanInst,
        'setCheckoutId'
      );
    }
  }

  async updateHpId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateHpId',
      parentSpanInst
    );
    try {
      let outputVariables = await this.updatePaymentDetails(
        spanInst,
        bh.input.payload['checkout_id'],
        'hyperpay_checkout_id',
        bh.input.payload['hyperpay_checkout_id']
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditLog(bh, parentSpanInst);
      //appendnew_next_updateHpId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nE4NRqUJNJye43kD',
        spanInst,
        'updateHpId'
      );
    }
  }

  async auditLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditLog', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'hyper_pay_checkout',
          bh.input.payload,
          bh.response,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          bh.input.payload['addl_details'],
          bh.input.payload['source_id_no'],
          bh.local.statusCode
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_auditLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rkms8BaD52bWwYuX',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_5Pq8nOXLhfPKKqxS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5Pq8nOXLhfPKKqxS',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'TRIGGER_PAYMENT',
          bh.input.payload,
          bh.error,
          undefined,
          undefined,
          new Date().toISOString(),
          undefined,
          undefined,
          bh.input.payload['source_id_no'],
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_g1RkBnxAbcYk2A1M(bh, parentSpanInst);
      //appendnew_next_sd_5Pq8nOXLhfPKKqxS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5Pq8nOXLhfPKKqxS',
        spanInst,
        'sd_5Pq8nOXLhfPKKqxS'
      );
    }
  }

  async sd_g1RkBnxAbcYk2A1M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g1RkBnxAbcYk2A1M',
      parentSpanInst
    );
    try {
      bh.local.response = {
        error:
          'payment process failed, sorry for the inconvenience. Please try again after sometime..',
      };

      bh.local.status_code = 500;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_g1RkBnxAbcYk2A1M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g1RkBnxAbcYk2A1M',
        spanInst,
        'sd_g1RkBnxAbcYk2A1M'
      );
    }
  }

  async getPaymentDetails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getPaymentDetails',
      parentSpanInst
    );
    try {
      let filter = '';
      let params = [];

      if (bh.input.reqObject['product_type']) {
        params.push(bh.input.reqObject['product_type']);
        filter += ` ${filter ? 'AND ' : ''}"product_type" = :${
          params.indexOf(bh.input.reqObject['product_type']) + 1
        }`;
      }
      if (bh.input.reqObject['channel_code']) {
        params.push(bh.input.reqObject['channel_code']);
        filter += ` ${filter ? 'AND ' : ''}"channel_code" = :${
          params.indexOf(bh.input.reqObject['channel_code']) + 1
        }`;
      }
      if (bh.input.reqObject['device_type']) {
        params.push(bh.input.reqObject['device_type']);
        filter += ` ${filter ? 'AND ' : ''}("device_type" = :${
          params.indexOf(bh.input.reqObject['device_type']) + 1
        } or "device_type" IS NULL)`;
      } else {
        filter += ` ${
          filter ? 'AND ' : ''
        }("device_type" != 'ios' or  "device_type" is null)`;
      }

      bh.query = `SELECT pom."product_type", pom."channel_code", JSON_ARRAYAGG(JSON_OBJECT('payment_type': pod."payment_type", 'image_path': CONCAT('${
        process.env.STRAPI_BASE_URL
      }', JSON_VALUE(pod."image_path", '$.${process.env.NODE_ENV.toLowerCase()}')), 'device_type': pod."device_type") ORDER BY pod."payment_type") AS "payment_options"
FROM "payment_option_master" pom 
LEFT JOIN "payment_option_details" pod ON pod."payment_master_id" = pom."id" 
${filter ? 'WHERE' + filter : ''} 
GROUP BY pom."product_type", pom."channel_code"`;

      bh.params = params;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.paymentOptionsDb2(bh, parentSpanInst);
      //appendnew_next_getPaymentDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9HHhW66kQeFyMwOL',
        spanInst,
        'getPaymentDetails'
      );
    }
  }

  async paymentOptionsDb2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'paymentOptionsDb2',
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
      bh = await this.sd_8RRhsxbBFY2I23FD(bh, parentSpanInst);
      //appendnew_next_paymentOptionsDb2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hcu2lBt7VPoLuUqq',
        spanInst,
        'paymentOptionsDb2'
      );
    }
  }

  async sd_8RRhsxbBFY2I23FD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8RRhsxbBFY2I23FD',
      parentSpanInst
    );
    try {
      if (bh.local.result.length > 0) {
        bh.local.result = bh.local.result.map((res) => {
          if (res['payment_options']) {
            res['payment_options'] = JSON.parse(res['payment_options']);
          }
          return res;
        });
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8RRhsxbBFY2I23FD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8RRhsxbBFY2I23FD',
        spanInst,
        'sd_8RRhsxbBFY2I23FD'
      );
    }
  }

  async sd_EV1gJ1MLS4MUTrnd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EV1gJ1MLS4MUTrnd',
      parentSpanInst
    );
    try {
      let source_id_no = bh.input.source_id_no || '';
      // bh.query = `SELECT pom.*, pd.*,md.*
      // FROM "payment_details" pom
      // LEFT JOIN "payer_details" pd  ON pd."id" = pom."payer_id"
      // LEFT JOIN "mokafaa_details" md ON (md."payer_id" = pd."id" AND pom."checkout_id" = md."checkout_id")
      // LEFT JOIN "mokafaa_details" md2 ON (md."payer_id" = pd."id" AND pom."checkout_id" = md."checkout_id" AND md."id" < md2."id")
      // WHERE md2."id" IS NULL AND pom."checkout_id" = :1 ${source_id_no ? `and pd."source_id_no" = :2` : ''}`;

      // bh.query = `WITH RankedMokafaaDetails AS (
      //     SELECT md.*, ROW_NUMBER() OVER (PARTITION BY md."payer_id" ORDER BY md."creation_date" DESC) AS rn
      //     FROM "mokafaa_details" md
      //     )
      // SELECT pom.*, pd.*, md.*
      // FROM "payment_details" pom
      // LEFT JOIN "payer_details" pd ON pd."id" = pom."payer_id"
      // LEFT JOIN RankedMokafaaDetails md ON (md."payer_id" = pd."id" AND pom."checkout_id" = md."checkout_id" AND md.rn = 1)
      // WHERE pom."checkout_id" = :1 ${source_id_no ? `and pd."source_id_no" = :2` : ''}`

      bh.query = `SELECT pom.*, pd.*, md.*,json_value(pd."addl_details", '$.locale') "locale"
FROM "payment_details" pom 
LEFT JOIN "payer_details" pd ON pd."id" = pom."payer_id" 
LEFT JOIN "mokafaa_details" md ON (md."payer_id" = pd."id" AND pom."checkout_id" = md."checkout_id" AND md."status_code" = '200')
LEFT JOIN "mokafaa_details" md2 ON (md2."payer_id" = pd."id" AND pom."checkout_id" = md2."checkout_id" AND md2."status_code" = '200' AND md2."id" > md."id")
WHERE  md2."id" IS NULL AND  pom."checkout_id" = :1 ${
        source_id_no ? `and pd."source_id_no" = :2` : ''
      }`;

      bh.params = [bh.input.parent_checkout_id];
      if (source_id_no) {
        bh.params.push(source_id_no);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAmount(bh, parentSpanInst);
      //appendnew_next_sd_EV1gJ1MLS4MUTrnd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EV1gJ1MLS4MUTrnd',
        spanInst,
        'sd_EV1gJ1MLS4MUTrnd'
      );
    }
  }

  async getAmount(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAmount', parentSpanInst);
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
      bh = await this.sd_HxVko0HAZcOtoL0R(bh, parentSpanInst);
      //appendnew_next_getAmount
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Akoivg2ufYbdZ5s',
        spanInst,
        'getAmount'
      );
    }
  }

  async sd_HxVko0HAZcOtoL0R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HxVko0HAZcOtoL0R',
      parentSpanInst
    );
    try {
      if (bh.local.result.length > 0) {
        bh.local.result = bh.local.result[0];

        if (bh.local.result['addl_details']) {
          bh.local.result['addl_details'] = JSON.parse(
            bh.local.result['addl_details']
          );
        }
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HxVko0HAZcOtoL0R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HxVko0HAZcOtoL0R',
        spanInst,
        'sd_HxVko0HAZcOtoL0R'
      );
    }
  }

  async sd_eiOTbPk4EnOAVAQv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eiOTbPk4EnOAVAQv',
      parentSpanInst
    );
    try {
      bh.query = `UPDATE "payment_details" SET "${bh.input.update_key}" = '${bh.input.update_value}' WHERE "checkout_id" =  '${bh.input.parent_checkout_id}'`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePd(bh, parentSpanInst);
      //appendnew_next_sd_eiOTbPk4EnOAVAQv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eiOTbPk4EnOAVAQv',
        spanInst,
        'sd_eiOTbPk4EnOAVAQv'
      );
    }
  }

  async updatePd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('updatePd', parentSpanInst);
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
      //appendnew_next_updatePd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xuO89kyMJMtUTUa3',
        spanInst,
        'updatePd'
      );
    }
  }

  async sd_1DT4UIqPekVYchK2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1DT4UIqPekVYchK2',
      parentSpanInst
    );
    try {
      bh.query = `SELECT md."outstanding_amount" "outstanding_amount", "source_id_no", md3."redeemed_amount"
FROM "mokafaa_details" md 
LEFT JOIN "payer_details" pd ON (pd."id" = md."payer_id")
LEFT JOIN "mokafaa_details" md2 ON (md2."payer_id" = pd."id" AND md2."id" > md."id")
LEFT JOIN (SELECT SUM(("mokafaa_points"/(-250))) "redeemed_amount", "payer_id"
			FROM "mokafaa_details" 
			GROUP BY "checkout_id", "payer_id") md3 ON (md3."payer_id" = pd."id")
WHERE md2."outstanding_amount" IS NULL and md."checkout_id" = :1 AND pd."source_id_no" = :2 
AND md."reverse_points" is NULL`;

      bh.params = [bh.input.checkout_id, bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oEPWUe8iYkcuz8uM(bh, parentSpanInst);
      //appendnew_next_sd_1DT4UIqPekVYchK2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1DT4UIqPekVYchK2',
        spanInst,
        'sd_1DT4UIqPekVYchK2'
      );
    }
  }

  async sd_oEPWUe8iYkcuz8uM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oEPWUe8iYkcuz8uM',
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
      bh = await this.sd_F9ES6Zy5DjuiVCgK(bh, parentSpanInst);
      //appendnew_next_sd_oEPWUe8iYkcuz8uM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oEPWUe8iYkcuz8uM',
        spanInst,
        'sd_oEPWUe8iYkcuz8uM'
      );
    }
  }

  async sd_F9ES6Zy5DjuiVCgK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F9ES6Zy5DjuiVCgK',
      parentSpanInst
    );
    try {
      if (bh.result.length > 0) {
        bh.local.mokafaa_data = bh.result[0];
        bh.local.mokafaa_data['mokafaa_data'] = true;
      } else {
        bh.local.mokafaa_data = {};
        bh.local.mokafaa_data['mokafaa_data'] = false;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_F9ES6Zy5DjuiVCgK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F9ES6Zy5DjuiVCgK',
        spanInst,
        'sd_F9ES6Zy5DjuiVCgK'
      );
    }
  }

  async sd_t4tIzuJmHQWihfwv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t4tIzuJmHQWihfwv',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd."id",  pd."checkout_id", pd2."source_id_no", pd."payment_method",pd."hyperpay_checkout_id", pd."transaction_receipt", to_char(pd."updated_date" AT LOCAL,'YYYY-MM-DD') AS "updated_date"
FROM "payment_details" pd
LEFT JOIN "payer_details" pd2 ON (pd2."id" = pd."payer_id")
WHERE "payment_status" = 'completed' AND pd2."source_id_no" = :1 `;
      //this does not work for anything other than hyperpay
      bh.params = [bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CnVdJ9ZBf2uuKgm4(bh, parentSpanInst);
      //appendnew_next_sd_t4tIzuJmHQWihfwv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t4tIzuJmHQWihfwv',
        spanInst,
        'sd_t4tIzuJmHQWihfwv'
      );
    }
  }

  async sd_CnVdJ9ZBf2uuKgm4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CnVdJ9ZBf2uuKgm4',
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
      bh = await this.sd_ZMZm5o6zWYzJRNuS(bh, parentSpanInst);
      //appendnew_next_sd_CnVdJ9ZBf2uuKgm4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CnVdJ9ZBf2uuKgm4',
        spanInst,
        'sd_CnVdJ9ZBf2uuKgm4'
      );
    }
  }

  async sd_ZMZm5o6zWYzJRNuS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZMZm5o6zWYzJRNuS',
      parentSpanInst
    );
    try {
      if (bh.result.length > 0) {
        bh.local.response = bh.result[0];
        if (!bh.local.response?.transaction_receipt) {
          bh.local.response.transaction_receipt = bh.local.response.checkout_id;
        }
        bh.local.status_code = 200;
      } else {
        bh.local.response = {
          error: 'Failed to fetch',
        };
        bh.local.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZMZm5o6zWYzJRNuS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZMZm5o6zWYzJRNuS',
        spanInst,
        'sd_ZMZm5o6zWYzJRNuS'
      );
    }
  }

  async sd_iJYzAovbkPEcu82T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iJYzAovbkPEcu82T',
      parentSpanInst
    );
    try {
      bh.local.response = {
        error: 'Failed to fetch',
      };
      bh.local.status_code = 500;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_iJYzAovbkPEcu82T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iJYzAovbkPEcu82T',
        spanInst,
        'sd_iJYzAovbkPEcu82T'
      );
    }
  }

  async sd_wIEVqMPHmubMZFyr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wIEVqMPHmubMZFyr',
      parentSpanInst
    );
    try {
      bh.query = `select count(*)
            from "quote"
            where "loyality_level" is not null and "unique_account_identifier" is not null and "registered_since" is not null`;

      bh.params = [];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pJ0K28Bk5flyIfKO(bh, parentSpanInst);
      //appendnew_next_sd_wIEVqMPHmubMZFyr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wIEVqMPHmubMZFyr',
        spanInst,
        'sd_wIEVqMPHmubMZFyr'
      );
    }
  }

  async sd_pJ0K28Bk5flyIfKO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pJ0K28Bk5flyIfKO',
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
      bh = await this.sd_ekEOnDJcU0QvgANE(bh, parentSpanInst);
      //appendnew_next_sd_pJ0K28Bk5flyIfKO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pJ0K28Bk5flyIfKO',
        spanInst,
        'sd_pJ0K28Bk5flyIfKO'
      );
    }
  }

  async sd_ekEOnDJcU0QvgANE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ekEOnDJcU0QvgANE',
      parentSpanInst
    );
    try {
      if (bh.result.length > 0) {
        bh.local.is_tabby = true;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ekEOnDJcU0QvgANE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ekEOnDJcU0QvgANE',
        spanInst,
        'sd_ekEOnDJcU0QvgANE'
      );
    }
  }

  async pdReq11(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('pdReq11', parentSpanInst);
    try {
      let outputVariables = await this.fetchPaymentDetails(
        spanInst,
        bh.input.parent_checkout_id,
        bh.input.source_id_no
      );
      bh.payment_data = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sRuM8UzHjHrkpWpO(bh, parentSpanInst);
      //appendnew_next_pdReq11
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wkzHNU3aBV3jDuih',
        spanInst,
        'pdReq11'
      );
    }
  }

  async sd_sRuM8UzHjHrkpWpO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sRuM8UzHjHrkpWpO',
      parentSpanInst
    );
    try {
      if (bh.payment_data) {
        bh.payment_data['amount'] =
          bh.payment_data?.['outstanding_amount'] || bh.payment_data['amount'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.processPayment1(bh, parentSpanInst);
      //appendnew_next_sd_sRuM8UzHjHrkpWpO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sRuM8UzHjHrkpWpO',
        spanInst,
        'sd_sRuM8UzHjHrkpWpO'
      );
    }
  }

  async processPayment1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'processPayment1',
      parentSpanInst
    );
    try {
      let outputVariables = await this.triggerPayment(
        spanInst,
        bh.payment_data,
        bh.input.payment_method,
        bh.input.locale
      );
      bh.result = outputVariables.local.response;
      bh.local.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6C9m6lSc6496aAyD(bh, parentSpanInst);
      //appendnew_next_processPayment1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zpu2uqWdisKaCUFE',
        spanInst,
        'processPayment1'
      );
    }
  }

  async sd_6C9m6lSc6496aAyD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6C9m6lSc6496aAyD',
      parentSpanInst
    );
    try {
      bh.local.statusCode = 200;

      if (bh.result?.['redirectUrl']) {
        bh.local.response = {
          source_id_no: bh.input.source_id_no,
          payment_redirect_url: `${
            bh.result['redirectUrl'].includes('http')
              ? bh.result['redirectUrl']
              : `/v1/${bh.result['redirectUrl']}`
          }`,
        };
      } else {
        bh.local.response = bh.result;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6C9m6lSc6496aAyD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6C9m6lSc6496aAyD',
        spanInst,
        'sd_6C9m6lSc6496aAyD'
      );
    }
  }

  async sd_ihqQVzYBwPGG2ErF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ihqQVzYBwPGG2ErF',
      parentSpanInst
    );
    try {
      bh.local.status_code = 500;
      bh.local.response = {
        error: bh.error?.['response']?.['body'] || 'Payment failed',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ihqQVzYBwPGG2ErF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ihqQVzYBwPGG2ErF',
        spanInst,
        'sd_ihqQVzYBwPGG2ErF'
      );
    }
  }

  async sd_CTrO0h5rfVtWMuwS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CTrO0h5rfVtWMuwS',
      parentSpanInst
    );
    try {
      bh.query = `SELECT count(*) "count"
FROM "payer_details" pd 
LEFT JOIN "payer_details" pd2 ON (pd2."source_id_no" = pd."source_id_no" AND pd2."id" > pd."id")
LEFT JOIN "payment_details" pd3 ON (pd3."payer_id" = pd."id")
LEFT JOIN "payment_details" pd4 ON (pd4."payer_id" = pd."id" AND pd4."id" > pd3."id")
LEFT JOIN "mokafaa_details" md ON (md."payer_id" = pd."id" AND md."checkout_id" = pd3."checkout_id")
LEFT JOIN "mokafaa_details" md2 ON (md2."payer_id" = pd."id" AND md2."checkout_id" = pd3."checkout_id" AND md2."id" > md."id")
WHERE pd2."id" IS NULL AND pd4."id" IS NULL and pd."source_id_no" = :1
AND pd3."payment_status" != 'completed' AND (md."id" IS NULL OR TO_NUMBER(md."outstanding_amount") > 0)`;

      bh.params = [bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fGucnxq4qgKZriK3(bh, parentSpanInst);
      //appendnew_next_sd_CTrO0h5rfVtWMuwS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CTrO0h5rfVtWMuwS',
        spanInst,
        'sd_CTrO0h5rfVtWMuwS'
      );
    }
  }

  async sd_fGucnxq4qgKZriK3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fGucnxq4qgKZriK3',
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
      bh = await this.sd_Nr5bhVaX0OkQZujM(bh, parentSpanInst);
      //appendnew_next_sd_fGucnxq4qgKZriK3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fGucnxq4qgKZriK3',
        spanInst,
        'sd_fGucnxq4qgKZriK3'
      );
    }
  }

  async sd_Nr5bhVaX0OkQZujM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Nr5bhVaX0OkQZujM',
      parentSpanInst
    );
    try {
      if (bh.result.length > 0) {
        bh.local.count = bh.result[0]['count'];
        bh.local.status_code = 200;
      } else {
        bh.local.count = 1;
      }
      bh.local.status_code = 200;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CYS8iwEtmFg41X34(bh, parentSpanInst);
      //appendnew_next_sd_Nr5bhVaX0OkQZujM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Nr5bhVaX0OkQZujM',
        spanInst,
        'sd_Nr5bhVaX0OkQZujM'
      );
    }
  }

  async sd_CYS8iwEtmFg41X34(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CYS8iwEtmFg41X34',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.local.count, 0, undefined, undefined)
      ) {
        bh = await this.sd_gqopu5EJVszX8pqN(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CYS8iwEtmFg41X34',
        spanInst,
        'sd_CYS8iwEtmFg41X34'
      );
    }
  }

  async sd_gqopu5EJVszX8pqN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gqopu5EJVszX8pqN',
      parentSpanInst
    );
    try {
      bh.query = `    SELECT count(*) "count", (CASE 
        WHEN max("created_date") > (SYSTIMESTAMP - INTERVAL '5' MINUTE)
        THEN 'true'
        ELSE 'false'
    END) "payment_initated_date"
FROM "payer_details" pd 
WHERE "source_id_no" = :1`;

      bh.params = [bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eZmK0LWmt0xbiUSA(bh, parentSpanInst);
      //appendnew_next_sd_gqopu5EJVszX8pqN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gqopu5EJVszX8pqN',
        spanInst,
        'sd_gqopu5EJVszX8pqN'
      );
    }
  }

  async sd_eZmK0LWmt0xbiUSA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eZmK0LWmt0xbiUSA',
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
      bh.result1 = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qhrGFpKCJXDVQAMo(bh, parentSpanInst);
      //appendnew_next_sd_eZmK0LWmt0xbiUSA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eZmK0LWmt0xbiUSA',
        spanInst,
        'sd_eZmK0LWmt0xbiUSA'
      );
    }
  }

  async sd_qhrGFpKCJXDVQAMo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qhrGFpKCJXDVQAMo',
      parentSpanInst
    );
    try {
      if (bh.result1.length > 0) {
        if (bh.result1[0]['count'] == 0) {
          bh.local.count = 1;
        }
        bh.local.payment_txn_5min = bh.result1[0]?.['payment_initated_date'];
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qhrGFpKCJXDVQAMo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qhrGFpKCJXDVQAMo',
        spanInst,
        'sd_qhrGFpKCJXDVQAMo'
      );
    }
  }

  async sd_H38t82cjZraJRPPm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H38t82cjZraJRPPm',
      parentSpanInst
    );
    try {
      let outputVariables = await this.validatedCompleted(
        spanInst,
        bh.input.source_id_no
      );
      bh.count = outputVariables.local.count;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ACnfSSXnfAJhfyAP(bh, parentSpanInst);
      //appendnew_next_sd_H38t82cjZraJRPPm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H38t82cjZraJRPPm',
        spanInst,
        'sd_H38t82cjZraJRPPm'
      );
    }
  }

  async sd_ACnfSSXnfAJhfyAP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ACnfSSXnfAJhfyAP',
      parentSpanInst
    );
    try {
      if (this.sdService.operators['eq'](bh.count, 0, undefined, undefined)) {
        bh = await this.sd_raMKO09FWjAjlDPv(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ACnfSSXnfAJhfyAP',
        spanInst,
        'sd_ACnfSSXnfAJhfyAP'
      );
    }
  }

  async sd_raMKO09FWjAjlDPv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_raMKO09FWjAjlDPv',
      parentSpanInst
    );
    try {
      bh.query = `SELECT count(*),LISTAGG(pd."id", ',') WITHIN GROUP (ORDER BY pd."created_date") AS "concatenated_values"
FROM "payer_details" pd
LEFT JOIN "payment_details" pd2 ON (pd2."payer_id" = pd."id" AND pd2."payment_status" != 'completed')
LEFT JOIN "payment_details" pd3 ON (pd3."payer_id" = pd."id" AND pd3."payment_status" = 'completed')
WHERE pd."source_id_no" = :1 AND pd3."id" IS NULL `;

      bh.params = [bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y6t73akOi0hpHo2I(bh, parentSpanInst);
      //appendnew_next_sd_raMKO09FWjAjlDPv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_raMKO09FWjAjlDPv',
        spanInst,
        'sd_raMKO09FWjAjlDPv'
      );
    }
  }

  async sd_Y6t73akOi0hpHo2I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y6t73akOi0hpHo2I',
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
      bh = await this.sd_NUbLHLzCG4yxscec(bh, parentSpanInst);
      //appendnew_next_sd_Y6t73akOi0hpHo2I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y6t73akOi0hpHo2I',
        spanInst,
        'sd_Y6t73akOi0hpHo2I'
      );
    }
  }

  async sd_NUbLHLzCG4yxscec(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NUbLHLzCG4yxscec',
      parentSpanInst
    );
    try {
      bh.clear_status = false;

      if (bh.result.length > 0) {
        bh.clear_status = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ozHRKbhNmiXrg1Xn(bh, parentSpanInst);
      //appendnew_next_sd_NUbLHLzCG4yxscec
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NUbLHLzCG4yxscec',
        spanInst,
        'sd_NUbLHLzCG4yxscec'
      );
    }
  }

  async sd_ozHRKbhNmiXrg1Xn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ozHRKbhNmiXrg1Xn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.clear_status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_o9UM78XgDJyeNcbD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ozHRKbhNmiXrg1Xn',
        spanInst,
        'sd_ozHRKbhNmiXrg1Xn'
      );
    }
  }

  async sd_o9UM78XgDJyeNcbD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o9UM78XgDJyeNcbD',
      parentSpanInst
    );
    try {
      bh.query = `update "payment_details"
set "payment_status" = 'canceled'
where "payer_id" in (${bh.result[0]?.['concatenated_values']})`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GXSm6Zi718CQJ8bR(bh, parentSpanInst);
      //appendnew_next_sd_o9UM78XgDJyeNcbD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o9UM78XgDJyeNcbD',
        spanInst,
        'sd_o9UM78XgDJyeNcbD'
      );
    }
  }

  async sd_GXSm6Zi718CQJ8bR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GXSm6Zi718CQJ8bR',
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
      let params = undefined;
      params = params ? params : [];
      bh.result1 = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GXSm6Zi718CQJ8bR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GXSm6Zi718CQJ8bR',
        spanInst,
        'sd_GXSm6Zi718CQJ8bR'
      );
    }
  }

  async sd_NbN6bsrX6HL88rmh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NbN6bsrX6HL88rmh',
      parentSpanInst
    );
    try {
      bh.query = `SELECT count(*) "count","payment_method"
FROM "payer_details" pd
LEFT JOIN "payment_details" pd1 ON (pd."id" = pd1."payer_id")
WHERE "source_id_no" = :1
AND ("payment_status" = 'completed' or "payment_method" = 'SADAD_VS')
group by "payment_method"`;

      bh.params = [bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PekUJryGhkKsx23a(bh, parentSpanInst);
      //appendnew_next_sd_NbN6bsrX6HL88rmh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NbN6bsrX6HL88rmh',
        spanInst,
        'sd_NbN6bsrX6HL88rmh'
      );
    }
  }

  async sd_PekUJryGhkKsx23a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PekUJryGhkKsx23a',
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
      bh = await this.sd_Pgje7mSpUFVNVIKy(bh, parentSpanInst);
      //appendnew_next_sd_PekUJryGhkKsx23a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PekUJryGhkKsx23a',
        spanInst,
        'sd_PekUJryGhkKsx23a'
      );
    }
  }

  async sd_Pgje7mSpUFVNVIKy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pgje7mSpUFVNVIKy',
      parentSpanInst
    );
    try {
      bh.local.count = 0;

      if (bh.result.length > 0) {
        bh.local.count = bh.result[0]?.['count'];
        bh.local.db_payment_method = bh.result[0]['payment_method'];
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Pgje7mSpUFVNVIKy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pgje7mSpUFVNVIKy',
        spanInst,
        'sd_Pgje7mSpUFVNVIKy'
      );
    }
  }

  async sd_LOhVub0rSqFxTZHg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LOhVub0rSqFxTZHg',
      parentSpanInst
    );
    try {
      bh.query = `SELECT count(*) "count"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON (pd2."id" = pd."payer_id")
WHERE pd."payment_method" = 'SADAD_VS' AND pd2."source_id_no" = :1`;

      bh.params = [bh.input.source_id_no];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Og7MPOweZpnY8Jz1(bh, parentSpanInst);
      //appendnew_next_sd_LOhVub0rSqFxTZHg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LOhVub0rSqFxTZHg',
        spanInst,
        'sd_LOhVub0rSqFxTZHg'
      );
    }
  }

  async sd_Og7MPOweZpnY8Jz1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Og7MPOweZpnY8Jz1',
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
      bh = await this.sd_CS2wqBhyTizijdPh(bh, parentSpanInst);
      //appendnew_next_sd_Og7MPOweZpnY8Jz1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Og7MPOweZpnY8Jz1',
        spanInst,
        'sd_Og7MPOweZpnY8Jz1'
      );
    }
  }

  async sd_CS2wqBhyTizijdPh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CS2wqBhyTizijdPh',
      parentSpanInst
    );
    try {
      bh.local.count = 0;

      if (bh.result.length > 0) {
        bh.local.count = bh.result[0]?.['count'];
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_CS2wqBhyTizijdPh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CS2wqBhyTizijdPh',
        spanInst,
        'sd_CS2wqBhyTizijdPh'
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
      (await this.dbError(bh, parentSpanInst)) ||
      (await this.sd_LVc4vqzsg5f8pyW8(bh, parentSpanInst)) ||
      (await this.sd_3XkyBZjislW0NSQu(bh, parentSpanInst)) ||
      (await this.sd_mHte2tZHb9obNQYN(bh, parentSpanInst))
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
  async dbError(bh, parentSpanInst) {
    const nodes = ['sd_g4dXoOZR9iLXlrIT', 'sd_s0a4QEqLUpkDnvXt'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_DWwSiH1iorULGWjL(bh, parentSpanInst);
      //appendnew_next_dbError
      return true;
    }
    return false;
  }
  async sd_LVc4vqzsg5f8pyW8(bh, parentSpanInst) {
    const nodes = ['sd_nkyCzULmSI7a4aIA', 'sd_qpg4OVPTo6dFaOZl'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5Pq8nOXLhfPKKqxS(bh, parentSpanInst);
      //appendnew_next_sd_LVc4vqzsg5f8pyW8
      return true;
    }
    return false;
  }
  async sd_3XkyBZjislW0NSQu(bh, parentSpanInst) {
    const nodes = ['sd_CnVdJ9ZBf2uuKgm4'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_iJYzAovbkPEcu82T(bh, parentSpanInst);
      //appendnew_next_sd_3XkyBZjislW0NSQu
      return true;
    }
    return false;
  }
  async sd_mHte2tZHb9obNQYN(bh, parentSpanInst) {
    const nodes = ['sd_Zpu2uqWdisKaCUFE'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ihqQVzYBwPGG2ErF(bh, parentSpanInst);
      //appendnew_next_sd_mHte2tZHb9obNQYN
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
