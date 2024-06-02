// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel from '../audit/audit_log'; //_splitter_
import * as SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH from '../communication/email_sms_api'; //_splitter_
import * as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj from '../hyper_pay/flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 from '../util/apigee_token_cache'; //_splitter_
import * as SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf from './flows'; //_splitter_
//append_imports_end
export class sadad_apis {
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
    this.serviceName = 'sadad_apis';
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
      instance = new sadad_apis(
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
    //appendnew_flow_sadad_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: sadad_apis');
    //appendnew_flow_sadad_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: sadad_apis');

    this.app['post'](
      `${this.serviceBasePath}/v1/pending_payment_details`,
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
          bh = await this.sd_uJRCdNqDxyu37aJb(bh, parentSpanInst);
          //appendnew_next_sd_1DPRCoVzEjoyW9sU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1DPRCoVzEjoyW9sU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/v1/sadad/paymentStatus`,
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
          bh = await this.sd_kwITAcCQgtlZMqSK(bh, parentSpanInst);
          //appendnew_next_sd_bf4VqtmN1KQHwLY1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bf4VqtmN1KQHwLY1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/v1/sadad/payment-status/callback`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'serviceAccAuthSadad',
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
          bh = await this.sd_cVH8PLKXyKOS40zX(bh, parentSpanInst);
          //appendnew_next_sd_plRTpM5INRFx7aKh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_plRTpM5INRFx7aKh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'serviceAccAuthSadad',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_sadad_apis_HttpIn
  }
  //   service flows_sadad_apis

  //appendnew_flow_sadad_apis_start

  async sd_uJRCdNqDxyu37aJb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uJRCdNqDxyu37aJb',
      parentSpanInst
    );
    try {
      if (!bh.input.body?.['quote_ref_no']) {
        bh.status_code = 500;
        bh.response = {
          error: 'Quote ref number missing',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9G6X1Brr6A4j6hz4(bh, parentSpanInst);
      //appendnew_next_sd_uJRCdNqDxyu37aJb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uJRCdNqDxyu37aJb',
        spanInst,
        'sd_uJRCdNqDxyu37aJb'
      );
    }
  }

  async sd_9G6X1Brr6A4j6hz4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9G6X1Brr6A4j6hz4',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.status_code,
          500,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Qd81qOcg5dw4PDSM(bh, parentSpanInst);
      } else {
        bh = await this.sd_xtDnw7At45p1TmVU(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9G6X1Brr6A4j6hz4',
        spanInst,
        'sd_9G6X1Brr6A4j6hz4'
      );
    }
  }

  async sd_xtDnw7At45p1TmVU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xtDnw7At45p1TmVU',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd2."source_id_no" , pd."payment_method",pd."payment_status", CASE WHEN pd."payment_method" = 'SADAD_VS' THEN pd."sadad_bill_no" ELSE pd."checkout_id" END "code", pd."amount", pd."checkout_id"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON pd2."id" = pd."payer_id"
WHERE pd2."source_id_no" = :1
ORDER BY "created_date" DESC FETCH FIRST ROW ONLY `;

      bh.params = [bh.input.body?.['quote_ref_no']];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iL4MyRRstvVcGWYG(bh, parentSpanInst);
      //appendnew_next_sd_xtDnw7At45p1TmVU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xtDnw7At45p1TmVU',
        spanInst,
        'sd_xtDnw7At45p1TmVU'
      );
    }
  }

  async sd_iL4MyRRstvVcGWYG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iL4MyRRstvVcGWYG',
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
      bh = await this.sd_3KMquhUyfDec95Ho(bh, parentSpanInst);
      //appendnew_next_sd_iL4MyRRstvVcGWYG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iL4MyRRstvVcGWYG',
        spanInst,
        'sd_iL4MyRRstvVcGWYG'
      );
    }
  }

  async sd_3KMquhUyfDec95Ho(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3KMquhUyfDec95Ho',
      parentSpanInst
    );
    try {
      bh.response = bh.result[0];
      bh.response[
        'redirect_url'
      ] = `payment_status?parent_checkout_id=${bh.result[0]['checkout_id']}&txn_ref_number=&source_id_no=${bh.result[0]['source_id_no']}`;
      bh.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Qd81qOcg5dw4PDSM(bh, parentSpanInst);
      //appendnew_next_sd_3KMquhUyfDec95Ho
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3KMquhUyfDec95Ho',
        spanInst,
        'sd_3KMquhUyfDec95Ho'
      );
    }
  }

  async sd_Qd81qOcg5dw4PDSM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qd81qOcg5dw4PDSM');
    }
  }

  async sd_kwITAcCQgtlZMqSK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kwITAcCQgtlZMqSK',
      parentSpanInst
    );
    try {
      bh.query = `SELECT max(pd."payment_status") "payment_status",pd1."source_id_no", max(pd."checkout_id") "checkout_id", max(pd."sadad_bill_no") "sadad_bill_no", max(pd1."email") "email", max(pd1."phone_no") "phone_no", max(pd1."name") "name",
max(pd."callback_url") "callback_url", max(pd."creation_date") "created_date",EXTRACT(DAY FROM SYSDATE - max(pd."creation_date")) "diff"
FROM "payment_details" pd
LEFT JOIN "payer_details" pd1 ON (pd1."id" = pd."payer_id")
WHERE "payment_method" = 'SADAD_VS' AND "payment_status" NOT IN ('completed', 'expiry')
GROUP BY pd1."source_id_no"`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lDtmk48b3mO0Y8Fv(bh, parentSpanInst);
      //appendnew_next_sd_kwITAcCQgtlZMqSK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kwITAcCQgtlZMqSK',
        spanInst,
        'sd_kwITAcCQgtlZMqSK'
      );
    }
  }

  async sd_lDtmk48b3mO0Y8Fv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lDtmk48b3mO0Y8Fv',
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
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LCBMvH7PhvzRYs5I(bh, parentSpanInst);
      //appendnew_next_sd_lDtmk48b3mO0Y8Fv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lDtmk48b3mO0Y8Fv',
        spanInst,
        'sd_lDtmk48b3mO0Y8Fv'
      );
    }
  }

  async sd_LCBMvH7PhvzRYs5I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LCBMvH7PhvzRYs5I',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['gt'](
          bh.result.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_up89ILEjZqVV856M(bh, parentSpanInst);
      } else {
        bh = await this.sd_BZ2SxLCy4ZFbKARg(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LCBMvH7PhvzRYs5I',
        spanInst,
        'sd_LCBMvH7PhvzRYs5I'
      );
    }
  }

  async sd_up89ILEjZqVV856M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_up89ILEjZqVV856M',
      parentSpanInst
    );
    try {
      bh.url = `${process.env.APIGEE_OCE_URL}/dcp_sadad_proxy/querybill?MsgID=${process.env.SADAD_MSG_ID}&TranID=${process.env.SADAD_TRANS_ID}&SourceAppID=${process.env.SADAD_SOURCE_APPID}&DestAppID=${process.env.SADAD_DEST_APPID}&TranDesc=tests&AuthKey=${process.env.SADAD_AUTH_KEY}&DocNum=${process.env.SADAD_DOC_NUM}&BillNumber=${bh.result[0]['sadad_bill_no']}&CRMCustomerId=${process.env.SADAD_CRM_CUSTOMER_ID}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken(bh, parentSpanInst);
      //appendnew_next_sd_up89ILEjZqVV856M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_up89ILEjZqVV856M',
        spanInst,
        'sd_up89ILEjZqVV856M'
      );
    }
  }

  async apigeeToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance: SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache =
        SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84Instance.apigeeToken(
          spanInst,
          undefined
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPaymentStatus(bh, parentSpanInst);
      //appendnew_next_apigeeToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LxxpBpigKrOoaKnc',
        spanInst,
        'apigeeToken'
      );
    }
  }

  async getPaymentStatus(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.token,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.payment_status_obj = responseMsg;
      bh = await this.audit(bh, parentSpanInst);
      //appendnew_next_getPaymentStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T36fNlEc6t1LzQmA');
    }
  }

  async audit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('audit', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance: SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log =
        SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel.audit_log.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnelInstance.sd_xNRtDSHUGSEXPyTh(
          spanInst,
          'SADAD_PAYMENT_STATUS',
          bh.url,
          bh.payment_status_obj,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.result[0]['source_id_no'],
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UWfnjZD6Nn8axZY6(bh, parentSpanInst);
      //appendnew_next_audit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aPU2GJMSI0xLzx0w',
        spanInst,
        'audit'
      );
    }
  }

  async sd_UWfnjZD6Nn8axZY6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UWfnjZD6Nn8axZY6',
      parentSpanInst
    );
    try {
      let response =
        bh.payment_status_obj?.['payload']?.['Envelope']?.['Body']?.[
          'QueryBillResponse'
        ]?.['ARTNCIS']?.['IDOCDATA'];

      if (
        response?.['PAYLOAD']?.['DATA']?.['QueryBillResponse']?.[
          'RecordCount'
        ] == 0
      ) {
        bh.payment_status = 'Failed';
      } else if (
        !response?.['PAYLOAD']?.['DATA']?.['QueryBillResponse'] &&
        response?.['PAYLOAD']?.['DATA']?.['Errors']
      ) {
        bh.payment_status =
          response?.['PAYLOAD']?.['DATA']?.['Errors']?.['Error']?.[
            'ErrorMessage'
          ];
      } else {
        bh.payment_status =
          response?.['PAYLOAD']?.['DATA']?.['QueryBillResponse']?.[
            'BillDetails'
          ]?.['PaymentStatus'];
      }

      if (bh.result[0]?.['diff'] > 3) {
        bh.payment_status = 'expired';
      }
      bh.filter = {
        checkout_id: bh.result[0]['checkout_id'],
        sadad_bill_no: bh.result[0]['sadad_bill_no'],
      };

      bh.updateObj = {
        payment_status: bh.payment_status,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateStatus(bh, parentSpanInst);
      //appendnew_next_sd_UWfnjZD6Nn8axZY6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UWfnjZD6Nn8axZY6',
        spanInst,
        'sd_UWfnjZD6Nn8axZY6'
      );
    }
  }

  async updateStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateStatus',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_z0l0HapXMZfE5JkfInstance: SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf.flows =
        SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_z0l0HapXMZfE5JkfInstance.updateBill(
          spanInst,
          bh.filter,
          bh.updateObj
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HBEL06Ci06uJC7rx(bh, parentSpanInst);
      //appendnew_next_updateStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jAyNZ5ljFQVv7SqT',
        spanInst,
        'updateStatus'
      );
    }
  }

  async sd_HBEL06Ci06uJC7rx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HBEL06Ci06uJC7rx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.payment_status,
          'completed',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_86tYiU4nmLrDkgMM(bh, parentSpanInst);
      } else {
        bh = await this.sd_AJLYxZRUvIwmW1E0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HBEL06Ci06uJC7rx',
        spanInst,
        'sd_HBEL06Ci06uJC7rx'
      );
    }
  }

  async sd_86tYiU4nmLrDkgMM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_86tYiU4nmLrDkgMM',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance: SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api =
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendEmailQuoteshare(
          spanInst,
          bh.result[0],
          'sadad-payment-bill'
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendSms(
          spanInst,
          bh.result[0],
          'sadad-payment-bill'
        )
      );
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.result[0]['source_id_no'],
          bh.result[0]['checkout_id'],
          'PS',
          'Payment completed',
          bh.result[0]['callback_url'],
          undefined
        )
      );

      bh.asyncresult = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AJLYxZRUvIwmW1E0(bh, parentSpanInst);
      //appendnew_next_sd_86tYiU4nmLrDkgMM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_86tYiU4nmLrDkgMM',
        spanInst,
        'sd_86tYiU4nmLrDkgMM'
      );
    }
  }

  async sd_AJLYxZRUvIwmW1E0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AJLYxZRUvIwmW1E0',
      parentSpanInst
    );
    try {
      bh.result = bh.result.slice(1);

      bh.loop_back = false;
      if (bh.result.length > 0) {
        bh.loop_back = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J33CZDieRtRzgnQj(bh, parentSpanInst);
      //appendnew_next_sd_AJLYxZRUvIwmW1E0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AJLYxZRUvIwmW1E0',
        spanInst,
        'sd_AJLYxZRUvIwmW1E0'
      );
    }
  }

  async sd_J33CZDieRtRzgnQj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J33CZDieRtRzgnQj',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.loop_back,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Re8sq9VlAXJE7Vwh(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.loop_back,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_up89ILEjZqVV856M(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J33CZDieRtRzgnQj',
        spanInst,
        'sd_J33CZDieRtRzgnQj'
      );
    }
  }

  async sd_Re8sq9VlAXJE7Vwh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Re8sq9VlAXJE7Vwh',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'Cron completed',
      };
      bh.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_s14v1NHoJkQwmOhV(bh, parentSpanInst);
      //appendnew_next_sd_Re8sq9VlAXJE7Vwh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Re8sq9VlAXJE7Vwh',
        spanInst,
        'sd_Re8sq9VlAXJE7Vwh'
      );
    }
  }

  async sd_s14v1NHoJkQwmOhV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s14v1NHoJkQwmOhV');
    }
  }

  async sd_BZ2SxLCy4ZFbKARg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BZ2SxLCy4ZFbKARg',
      parentSpanInst
    );
    try {
      bh.response = {
        message: 'No records found',
      };
      bh.status_code = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_l00jPIvTUGjiRmCE(bh, parentSpanInst);
      //appendnew_next_sd_BZ2SxLCy4ZFbKARg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BZ2SxLCy4ZFbKARg',
        spanInst,
        'sd_BZ2SxLCy4ZFbKARg'
      );
    }
  }

  async sd_l00jPIvTUGjiRmCE(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l00jPIvTUGjiRmCE');
    }
  }

  async sd_HqEOZiQ8ExuCiurh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HqEOZiQ8ExuCiurh',
      parentSpanInst
    );
    try {
      bh.error;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HqEOZiQ8ExuCiurh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HqEOZiQ8ExuCiurh',
        spanInst,
        'sd_HqEOZiQ8ExuCiurh'
      );
    }
  }

  async sd_cVH8PLKXyKOS40zX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cVH8PLKXyKOS40zX',
      parentSpanInst
    );
    try {
      if (!bh.input.body['status'] && !bh.input.body['billNumber']) {
        bh.response = {
          error: 'missing billnumber',
        };
        bh.status_code = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GWGg4mU7qwfw6Efi(bh, parentSpanInst);
      //appendnew_next_sd_cVH8PLKXyKOS40zX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cVH8PLKXyKOS40zX',
        spanInst,
        'sd_cVH8PLKXyKOS40zX'
      );
    }
  }

  async sd_GWGg4mU7qwfw6Efi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GWGg4mU7qwfw6Efi',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.status_code,
          500,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uUvhjVRaIk6SeLim(bh, parentSpanInst);
      } else {
        bh = await this.sd_ZE6Ja6t6P0oE1q8I(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GWGg4mU7qwfw6Efi',
        spanInst,
        'sd_GWGg4mU7qwfw6Efi'
      );
    }
  }

  async sd_ZE6Ja6t6P0oE1q8I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZE6Ja6t6P0oE1q8I',
      parentSpanInst
    );
    try {
      bh.query = `SELECT pd.*, pd2.*, json_value(pd2."addl_details", '$.locale') AS "locale"
FROM "payment_details" pd 
LEFT JOIN "payer_details" pd2 ON (pd2."id" = pd."payer_id")
WHERE "sadad_bill_no" = :1`;

      bh.params = [bh.input.body?.['billNumber']];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B73tRxAibaCykWa9(bh, parentSpanInst);
      //appendnew_next_sd_ZE6Ja6t6P0oE1q8I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZE6Ja6t6P0oE1q8I',
        spanInst,
        'sd_ZE6Ja6t6P0oE1q8I'
      );
    }
  }

  async sd_B73tRxAibaCykWa9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B73tRxAibaCykWa9',
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
      bh.payment_details = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditLog(bh, parentSpanInst);
      //appendnew_next_sd_B73tRxAibaCykWa9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B73tRxAibaCykWa9',
        spanInst,
        'sd_B73tRxAibaCykWa9'
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
          'SADAD_PAYMENT_CALLBACK_INCOMING',
          bh.input.body,
          undefined,
          undefined,
          new Date().toISOString(),
          new Date().toISOString(),
          undefined,
          undefined,
          bh.payment_details[0]['source_id_no'],
          undefined
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hbPRwNuFdYr46W1a(bh, parentSpanInst);
      //appendnew_next_auditLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MiJ2IOGX2qqTuUFH',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_hbPRwNuFdYr46W1a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hbPRwNuFdYr46W1a',
      parentSpanInst
    );
    try {
      bh.filter = {
        sadad_bill_no: bh.input.body['billNumber'],
        checkout_id: bh.payment_details?.[0]?.['checkout_id'],
      };

      let status = bh.input.body?.['status'].toLowerCase();
      bh.updateObj = {
        payment_status:
          status == 'paid' ? 'completed' : bh.input.body?.['status'],
        updated_date: new Date().toISOString(),
      };

      bh.payment_details = bh.payment_details[0];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateStatus1(bh, parentSpanInst);
      //appendnew_next_sd_hbPRwNuFdYr46W1a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hbPRwNuFdYr46W1a',
        spanInst,
        'sd_hbPRwNuFdYr46W1a'
      );
    }
  }

  async updateStatus1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateStatus1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_z0l0HapXMZfE5JkfInstance: SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf.flows =
        SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_z0l0HapXMZfE5JkfInstance.updateBill(
          spanInst,
          bh.filter,
          bh.updateObj
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mSBlQ9kk0Rl5cHWn(bh, parentSpanInst);
      //appendnew_next_updateStatus1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cA8DIM7QvarZ19i8',
        spanInst,
        'updateStatus1'
      );
    }
  }

  async sd_mSBlQ9kk0Rl5cHWn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mSBlQ9kk0Rl5cHWn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body['status'],
          'paid',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ga0kuFONckycmLk6(bh, parentSpanInst);
      } else {
        bh = await this.sd_hPezUdqlH6exbcO6(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mSBlQ9kk0Rl5cHWn',
        spanInst,
        'sd_mSBlQ9kk0Rl5cHWn'
      );
    }
  }

  async sd_ga0kuFONckycmLk6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ga0kuFONckycmLk6',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance: SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api =
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH.email_sms_api.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendEmailQuoteshare(
          spanInst,
          bh.payment_details,
          'sadad-payment-bill'
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzHInstance.sendSms(
          spanInst,
          bh.payment_details,
          'sadad-payment-bill'
        )
      );
      const SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance: SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow =
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj.flow.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qjInstance.appPsUpdate(
          spanInst,
          bh.payment_details['source_id_no'],
          bh.payment_details['checkout_id'],
          'PS',
          'Payment completed',
          bh.payment_details['callback_url'],
          undefined
        )
      );

      bh.asyncresult = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hPezUdqlH6exbcO6(bh, parentSpanInst);
      //appendnew_next_sd_ga0kuFONckycmLk6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ga0kuFONckycmLk6',
        spanInst,
        'sd_ga0kuFONckycmLk6'
      );
    }
  }

  async sd_hPezUdqlH6exbcO6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hPezUdqlH6exbcO6',
      parentSpanInst
    );
    try {
      bh.response = {
        meta: {
          status: 1,
          statusCode: 200,
        },
        data: {
          code: 200,
          message: 'Payment Successful!',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4TWqOgBfQdq9f1Mk(bh, parentSpanInst);
      //appendnew_next_sd_hPezUdqlH6exbcO6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hPezUdqlH6exbcO6',
        spanInst,
        'sd_hPezUdqlH6exbcO6'
      );
    }
  }

  async sd_4TWqOgBfQdq9f1Mk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4TWqOgBfQdq9f1Mk');
    }
  }

  async sd_uUvhjVRaIk6SeLim(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uUvhjVRaIk6SeLim');
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
      (await this.sd_LQUBhDop2qYXHnKm(bh, parentSpanInst))
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
  async sd_LQUBhDop2qYXHnKm(bh, parentSpanInst) {
    const nodes = ['sd_T36fNlEc6t1LzQmA'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_HqEOZiQ8ExuCiurh(bh, parentSpanInst);
      //appendnew_next_sd_LQUBhDop2qYXHnKm
      return true;
    }
    return false;
  }
  //appendnew_flow_sadad_apis_Catch
}
