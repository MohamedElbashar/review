// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L from '../rating/motor/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D from './create_records'; //_splitter_
import * as SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf from './data_flows'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/policy-renewal`,
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
          bh = await this.getQuote(bh, parentSpanInst);
          //appendnew_next_sd_7yFrs23vQnGahXiP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7yFrs23vQnGahXiP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  async createRecords(
    parentSpanInst,
    body: any = undefined,
    cr_response: any = undefined,
    policy_data: any = undefined,
    cq_response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createRecords',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
        cr_response,
        policy_data,
        cq_response,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createAddOns(bh, parentSpanInst);
      //appendnew_next_createRecords
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
        'sd_HsASYPEjBfyQjCaS',
        spanInst,
        'createRecords'
      );
    }
  }
  //appendnew_flow_apis_start

  async getQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getQuote', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance: SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows =
        SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnf.data_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_CQYWHIuv2CYkrcnfInstance.getQuote(
          spanInst,
          bh.input.body.old_policy_id
        );
      bh.renewal_data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.renewalCheck(bh, parentSpanInst);
      //appendnew_next_getQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sDkpu7Tu3tk1rxDZ',
        spanInst,
        'getQuote'
      );
    }
  }

  async renewalCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'renewalCheck',
      parentSpanInst
    );
    try {
      //Duplicate check for the renewal if it is active
      const in_active_status = [1, 2, 3, 4, 5, 6, 7, 11];
      if (
        bh.renewal_data?.length &&
        bh.renewal_data?.some((quote) =>
          in_active_status.includes(quote.status_id)
        )
      ) {
        bh.response = {
          status: false,
          locale_key: 'RENEWAL_ERROR',
          statusCode: 200,
        };
      } else {
        //Response for renewal success
        bh.response = {
          status: true,
          locale_key: 'RENEWAL_CREATE_SUCCESS',
          statusCode: 200,
          reference_number: '',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wmmL1ecsT5uoa2yk(bh, parentSpanInst);
      //appendnew_next_renewalCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ZgY1GrFE2WKb1cI',
        spanInst,
        'renewalCheck'
      );
    }
  }

  async sd_wmmL1ecsT5uoa2yk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wmmL1ecsT5uoa2yk',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.response.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.createQuote(bh, parentSpanInst);
      } else {
        bh = await this.setResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wmmL1ecsT5uoa2yk',
        spanInst,
        'sd_wmmL1ecsT5uoa2yk'
      );
    }
  }

  async setResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse',
      parentSpanInst
    );
    try {
      //do not wait for response
      const spanInst = this.tracerService.createSpan(
        'call_seq_1',
        parentSpanInst
      );
      this.createRecords(
        spanInst,
        bh.input.body,
        bh.cr_response,
        bh.policy_data,
        bh.cq_response
      );

      if (bh.response?.status) {
        bh.response.reference_number = bh.cq_response?.reference_number;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hiqp18p7rFZrZ6Rx(bh, parentSpanInst);
      //appendnew_next_setResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nNXYoXDgxPYA0T6m',
        spanInst,
        'setResponse'
      );
    }
  }

  async sd_hiqp18p7rFZrZ6Rx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hiqp18p7rFZrZ6Rx');
    }
  }

  async createQuote(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createQuote',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance: SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records =
        SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance.createQuoteRecord(
          spanInst,
          bh.input.body.old_policy_id,
          bh.input.body.old_policy_number,
          bh.input.body.eska_details,
          bh.input.body.broker_info,
          bh.input.body.user_id,
          bh.input.body.tenant_id
        );
      bh.cq_response = outputVariables.local.cq_response;
      bh.policy_data = outputVariables.local.policy_data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createRiskItems(bh, parentSpanInst);
      //appendnew_next_createQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vTmm7SxcXFY3fbxY',
        spanInst,
        'createQuote'
      );
    }
  }

  async createRiskItems(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createRiskItems',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance: SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records =
        SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance.createRiskItemRecords(
          spanInst,
          bh.input.body.old_policy_id,
          bh.cq_response,
          bh.policy_data
        );
      bh.cr_response = outputVariables.local.cr_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse(bh, parentSpanInst);
      //appendnew_next_createRiskItems
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2xXFbQ4DRsbqhJTr',
        spanInst,
        'createRiskItems'
      );
    }
  }

  async createAddOns(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createAddOns',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance: SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records =
        SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance.createAddOns(
          spanInst,
          bh.input.body.old_policy_id,
          bh.input.cr_response,
          bh.input.policy_data
        );
      bh.ca_response = outputVariables.local.ca_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createDrivers(bh, parentSpanInst);
      //appendnew_next_createAddOns
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gU0igcZEXSHlI4XM',
        spanInst,
        'createAddOns'
      );
    }
  }

  async createDrivers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createDrivers',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance: SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records =
        SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2D.create_records.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_2eTo64DQBbmJUo2DInstance.createAddlDrivers(
          spanInst,
          bh.input.body.old_policy_id,
          bh.input.cr_response,
          bh.input.cq_response,
          bh.input.policy_data
        );
      bh.cd_response = outputVariables.local.ca_response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.motorRate(bh, parentSpanInst);
      //appendnew_next_createDrivers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SLNwIGN2kTcQdDwV',
        spanInst,
        'createDrivers'
      );
    }
  }

  async motorRate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('motorRate', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.getMotorRate(
          spanInst,
          bh.input.cq_response.reference_number
        );
      bh.rates = outputVariables.local.rates;
      bh.quote_id = outputVariables.local.quote_id;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.savePremiumObj(bh, parentSpanInst);
      //appendnew_next_motorRate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T96Ndk9gEmj4PtWX',
        spanInst,
        'motorRate'
      );
    }
  }

  async savePremiumObj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'savePremiumObj',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.saveQuoteRates(
          spanInst,
          bh.input.cq_response.id,
          bh.rates
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.calcPremium(bh, parentSpanInst);
      //appendnew_next_savePremiumObj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JcEcMIZ7U10JxAKl',
        spanInst,
        'savePremiumObj'
      );
    }
  }

  async calcPremium(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calcPremium',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance: SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows =
        SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4L.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Gk7mjixr01gG9a4LInstance.calculatePremium(
          spanInst,
          bh.input.cq_response.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_calcPremium
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aw5R1Y0RnQHfduKz',
        spanInst,
        'calcPremium'
      );
    }
  }

  async sd_iTa6fjbUPaZ70lRg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iTa6fjbUPaZ70lRg',
      parentSpanInst
    );
    try {
      bh.response = {
        error: 'Error while creating a quote!',
        error_message: bh.error?.message || bh.error,
      };

      log.info(
        `[POLICY_ID::${
          bh.input.body.policy_id
        }][CREATE_QUOTE_FOR_RENEWAL][ERR0R}[${JSON.stringify(bh.response)}}`
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_UuDrAmxaREXvlPU6(bh, parentSpanInst);
      //appendnew_next_sd_iTa6fjbUPaZ70lRg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iTa6fjbUPaZ70lRg',
        spanInst,
        'sd_iTa6fjbUPaZ70lRg'
      );
    }
  }

  async sd_UuDrAmxaREXvlPU6(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UuDrAmxaREXvlPU6');
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
      (await this.sd_guqeWQ5FkAUPVe4i(bh, parentSpanInst))
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
  async sd_guqeWQ5FkAUPVe4i(bh, parentSpanInst) {
    const nodes = [
      'sd_KKxRpXdqgOljdTH0',
      'sd_sDkpu7Tu3tk1rxDZ',
      'sd_7ZgY1GrFE2WKb1cI',
      'sd_vTmm7SxcXFY3fbxY',
      'sd_nNXYoXDgxPYA0T6m',
      'sd_2xXFbQ4DRsbqhJTr',
      'sd_gU0igcZEXSHlI4XM',
      'sd_SLNwIGN2kTcQdDwV',
      'sd_T96Ndk9gEmj4PtWX',
      'sd_aw5R1Y0RnQHfduKz',
      'sd_JcEcMIZ7U10JxAKl',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_iTa6fjbUPaZ70lRg(bh, parentSpanInst);
      //appendnew_next_sd_guqeWQ5FkAUPVe4i
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
