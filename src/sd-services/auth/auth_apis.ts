// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME from './flows'; //_splitter_
//append_imports_end
export class auth_apis {
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
    this.serviceName = 'auth_apis';
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
      instance = new auth_apis(
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
    //appendnew_flow_auth_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auth_apis');
    //appendnew_flow_auth_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: auth_apis');

    this.app['post'](
      `${this.serviceBasePath}/view-quote/:reference_number`,
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
          bh = await this.sd_AvMpxfwYFsHV8Yuq(bh, parentSpanInst);
          //appendnew_next_sd_3Kwa2rNDdlHqFz2D
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3Kwa2rNDdlHqFz2D');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-user`,
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
          bh = await this.sd_CwiwwrW8Mipc6OF1(bh, parentSpanInst);
          //appendnew_next_sd_RubvniDclS31w30N
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RubvniDclS31w30N');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_auth_apis_HttpIn
  }
  //   service flows_auth_apis

  //appendnew_flow_auth_apis_start

  async sd_AvMpxfwYFsHV8Yuq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AvMpxfwYFsHV8Yuq',
      parentSpanInst
    );
    try {
      bh.quoteRef = bh.input.params.reference_number;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fowu626pQWE0uNX6(bh, parentSpanInst);
      //appendnew_next_sd_AvMpxfwYFsHV8Yuq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AvMpxfwYFsHV8Yuq',
        spanInst,
        'sd_AvMpxfwYFsHV8Yuq'
      );
    }
  }

  async sd_fowu626pQWE0uNX6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fowu626pQWE0uNX6',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance: SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows =
        SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJInstance.quoteSummary(
          spanInst,
          undefined,
          bh.quoteRef,
          undefined
        );
      bh.status = outputVariables.local.status_code;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uGkCUplMjRJllRSE(bh, parentSpanInst);
      //appendnew_next_sd_fowu626pQWE0uNX6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fowu626pQWE0uNX6',
        spanInst,
        'sd_fowu626pQWE0uNX6'
      );
    }
  }

  async sd_uGkCUplMjRJllRSE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uGkCUplMjRJllRSE',
      parentSpanInst
    );
    try {
      bh.phone_no =
        bh.result.quote_details.phone_country_code +
        bh.result.quote_details.phone_no;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LUL2bJC6AAUiplGG(bh, parentSpanInst);
      //appendnew_next_sd_uGkCUplMjRJllRSE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uGkCUplMjRJllRSE',
        spanInst,
        'sd_uGkCUplMjRJllRSE'
      );
    }
  }

  async sd_LUL2bJC6AAUiplGG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LUL2bJC6AAUiplGG',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_T5DhFgK9wLilbSMEInstance: SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME.flows =
        SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_T5DhFgK9wLilbSMEInstance.sendSmsTemplated(
          spanInst,
          bh.phone_no
        );
      bh.tx_id = outputVariables.local.tx_id;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_leUnrTwmLdDELMUS(bh, parentSpanInst);
      //appendnew_next_sd_LUL2bJC6AAUiplGG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LUL2bJC6AAUiplGG',
        spanInst,
        'sd_LUL2bJC6AAUiplGG'
      );
    }
  }

  async sd_leUnrTwmLdDELMUS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_leUnrTwmLdDELMUS',
      parentSpanInst
    );
    try {
      // bh.redirect_headers = process.env.CA_UI_URL + bh.quoteRef + "/" + bh.tx_id

      bh.response = {
        txId: bh.tx_id,
        phone_no:
          '+966 XXXXX XX' + bh.phone_no.substring(bh.phone_no.length - 3),
      };

      bh.sessionData = {
        'otp-verified': false,
        phone_no: '',
        reference_number: bh.quoteRef,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IbjMLzHHLbcbSEsD(bh, parentSpanInst);
      //appendnew_next_sd_leUnrTwmLdDELMUS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_leUnrTwmLdDELMUS',
        spanInst,
        'sd_leUnrTwmLdDELMUS'
      );
    }
  }

  async sd_IbjMLzHHLbcbSEsD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IbjMLzHHLbcbSEsD',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.sessionData;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oyzb0JogQ6ZsQDxO(bh, parentSpanInst);
      //appendnew_next_sd_IbjMLzHHLbcbSEsD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IbjMLzHHLbcbSEsD',
        spanInst,
        'sd_IbjMLzHHLbcbSEsD'
      );
    }
  }

  async sd_oyzb0JogQ6ZsQDxO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oyzb0JogQ6ZsQDxO');
    }
  }

  async sd_CwiwwrW8Mipc6OF1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CwiwwrW8Mipc6OF1',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessionParams = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MpPapxBBQ5VBp2YW(bh, parentSpanInst);
      //appendnew_next_sd_CwiwwrW8Mipc6OF1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CwiwwrW8Mipc6OF1',
        spanInst,
        'sd_CwiwwrW8Mipc6OF1'
      );
    }
  }

  async sd_MpPapxBBQ5VBp2YW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MpPapxBBQ5VBp2YW',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_T5DhFgK9wLilbSMEInstance: SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME.flows =
        SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_T5DhFgK9wLilbSMEInstance.verifyOtp(
          spanInst,
          bh.input.body.value,
          bh.input.body.TxId
        );
      bh.result = outputVariables.local.result;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MN8xjXj8Ri06dq7O(bh, parentSpanInst);
      //appendnew_next_sd_MpPapxBBQ5VBp2YW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MpPapxBBQ5VBp2YW',
        spanInst,
        'sd_MpPapxBBQ5VBp2YW'
      );
    }
  }

  async sd_MN8xjXj8Ri06dq7O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MN8xjXj8Ri06dq7O',
      parentSpanInst
    );
    try {
      bh.sessionData = bh.sessionParams['data'];

      bh.sessionData['otp-verified'] = bh.result.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3XDFIIgFel7uR20n(bh, parentSpanInst);
      //appendnew_next_sd_MN8xjXj8Ri06dq7O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MN8xjXj8Ri06dq7O',
        spanInst,
        'sd_MN8xjXj8Ri06dq7O'
      );
    }
  }

  async sd_3XDFIIgFel7uR20n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3XDFIIgFel7uR20n',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.sessionData;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Gh3l0STV9v4z84rX(bh, parentSpanInst);
      //appendnew_next_sd_3XDFIIgFel7uR20n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3XDFIIgFel7uR20n',
        spanInst,
        'sd_3XDFIIgFel7uR20n'
      );
    }
  }

  async sd_Gh3l0STV9v4z84rX(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Gh3l0STV9v4z84rX');
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
  //appendnew_flow_auth_apis_Catch
}
