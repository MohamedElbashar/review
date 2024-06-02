// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB from '../payment/flow'; //_splitter_
import * as SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK from './flows'; //_splitter_
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
          bh = await this.sd_zLvJ7LESSxYE0rN5(bh, parentSpanInst);
          //appendnew_next_sd_m00tP7u53dxNf7WX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_m00tP7u53dxNf7WX');
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
          bh = await this.sd_zOOz7W4Z4gcdDoVt(bh, parentSpanInst);
          //appendnew_next_sd_qZEFJBBS10dOBHQq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qZEFJBBS10dOBHQq');
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

  //appendnew_flow_apis_start

  async sd_zLvJ7LESSxYE0rN5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zLvJ7LESSxYE0rN5',
      parentSpanInst
    );
    try {
      bh.quoteRef = bh.input.params.reference_number;

      console.log('bh.quoteRef', bh.quoteRef);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YP2dTifuEqnvSrCn(bh, parentSpanInst);
      //appendnew_next_sd_zLvJ7LESSxYE0rN5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zLvJ7LESSxYE0rN5',
        spanInst,
        'sd_zLvJ7LESSxYE0rN5'
      );
    }
  }

  async sd_YP2dTifuEqnvSrCn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YP2dTifuEqnvSrCn',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance: SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow =
        SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWB.flow.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_THjo8qsY0OO0rmWBInstance.getQuote(
          spanInst,
          bh.quoteRef
        );
      bh.status_code = outputVariables.local.status_code;
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y5goPH0jf3UdGo5W(bh, parentSpanInst);
      //appendnew_next_sd_YP2dTifuEqnvSrCn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YP2dTifuEqnvSrCn',
        spanInst,
        'sd_YP2dTifuEqnvSrCn'
      );
    }
  }

  async sd_Y5goPH0jf3UdGo5W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y5goPH0jf3UdGo5W',
      parentSpanInst
    );
    try {
      bh.phone_no =
        bh.result.quote_details.phone_country_code +
        bh.result.quote_details.phone_no;

      console.log('result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6PQWqsAmZgnNsreP(bh, parentSpanInst);
      //appendnew_next_sd_Y5goPH0jf3UdGo5W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y5goPH0jf3UdGo5W',
        spanInst,
        'sd_Y5goPH0jf3UdGo5W'
      );
    }
  }

  async sd_6PQWqsAmZgnNsreP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6PQWqsAmZgnNsreP',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquKInstance: SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK.flows =
        SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquKInstance.sendSmsTemplated(
          spanInst,
          bh.phone_no
        );
      bh.tx_id = outputVariables.local.tx_id;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CywPKyg4VYUUE7Mk(bh, parentSpanInst);
      //appendnew_next_sd_6PQWqsAmZgnNsreP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6PQWqsAmZgnNsreP',
        spanInst,
        'sd_6PQWqsAmZgnNsreP'
      );
    }
  }

  async sd_CywPKyg4VYUUE7Mk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CywPKyg4VYUUE7Mk',
      parentSpanInst
    );
    try {
      // bh.redirect_headers = process.env.CA_UI_URL + bh.quoteRef + "/" + bh.tx_id

      bh.response = {
        txId: bh.tx_id,
        phone_no:
          '+966 XXXXX XX' + bh.phone_no.substring(bh.phone_no.length - 3),
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_P6Gfq8WLw20edfit(bh, parentSpanInst);
      //appendnew_next_sd_CywPKyg4VYUUE7Mk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CywPKyg4VYUUE7Mk',
        spanInst,
        'sd_CywPKyg4VYUUE7Mk'
      );
    }
  }

  async sd_P6Gfq8WLw20edfit(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P6Gfq8WLw20edfit');
    }
  }

  async sd_zOOz7W4Z4gcdDoVt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zOOz7W4Z4gcdDoVt',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquKInstance: SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK.flows =
        SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_p1yrWOr6cpbQlquKInstance.verifyOtp(
          spanInst,
          bh.input.body.value,
          bh.input.body.TxId
        );
      bh.result = outputVariables.local.result;
      bh.status_code = outputVariables.local.status_code;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_RQLKGjdrqEybzJjp(bh, parentSpanInst);
      //appendnew_next_sd_zOOz7W4Z4gcdDoVt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zOOz7W4Z4gcdDoVt',
        spanInst,
        'sd_zOOz7W4Z4gcdDoVt'
      );
    }
  }

  async sd_RQLKGjdrqEybzJjp(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RQLKGjdrqEybzJjp');
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
  //appendnew_flow_apis_Catch
}
