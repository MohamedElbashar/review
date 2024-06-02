// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as crypto from 'crypto'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4 from '../Audit/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH from '../utils/apigee_token_cache'; //_splitter_
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

  async getMotorRate(parentSpanInst, payload: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMotorRate',
      parentSpanInst
    );
    let bh: any = {
      input: {
        payload,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getMotorRate
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
        'sd_cGBv13UYlsJlP5Dd',
        spanInst,
        'getMotorRate'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.APIGEE_OCI_URL + `/v1/neutrinous/motor/rate`;
      bh.api_key = 'ifoundry-motor-rate';
      bh.identifier =
        bh.input.payload?.RatingService?.message?.service?.getRate?.request
          ?.Policy?.Motor?.AddittionalElement10 ||
        crypto.randomBytes(10).toString('hex');
      bh.apiStartTime = Date.now();

      bh.target = process.env.TARGET_OCI;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeToken0(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bmMVbh47w0k9sArQ',
        spanInst,
        'setUrl0'
      );
    }
  }

  async apigeeToken0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance: SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache =
        SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH.apigee_token_cache.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NHInstance.apigeeTokenOc(
          spanInst,
          bh.target
        );
      bh.token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.ifoundryRate(bh, parentSpanInst);
      //appendnew_next_apigeeToken0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Apxj1ChoWS7BnrjG',
        spanInst,
        'apigeeToken0'
      );
    }
  }

  async ifoundryRate(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: 'bearer',
        body: bh.input.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'text',
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

      bh.data = responseMsg;
      bh = await this.getResponse0(bh, parentSpanInst);
      //appendnew_next_ifoundryRate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RtfAd7yhOKETreWu');
    }
  }

  async getResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getResponse0',
      parentSpanInst
    );
    try {
      bh.apiEndTime = Date.now();
      if (bh.data['payload']) {
        bh.payload = JSON.parse(bh.data['payload']);
      }

      bh.duration = Number(bh.payload['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ma6xOhnFINeqeWgM(bh, parentSpanInst);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_getResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hl4u3Y21qw71kzfl',
        spanInst,
        'getResponse0'
      );
    }
  }

  async sd_ma6xOhnFINeqeWgM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ma6xOhnFINeqeWgM',
      parentSpanInst
    );
    try {
      bh.premium_arr =
        bh.payload?.RatingService?.message?.service?.getRate?.response?.Policy
          ?.Motor?.Vehicle || [];
      const sequence_list = [...new Set(bh.premium_arr.map((item) => item.Id))];
      let vehicleArray = [];
      sequence_list.forEach((item) => {
        let partial = bh.premium_arr.filter((x) => x.Id == item);
        let vehicleObj = {
          vehicle_id_no: item,
          plan_list: partial.map((vehicle) => {
            //array props to take
            let object_props = [
              'NCDAmount',
              'LoyaltyDiscountAmount',
              'ODBasePremium',
              'MultiVehicleDiscountAmount',
              'SuperSaverBasePremium',
              'TotalPremium',
              'TPLBase',
              'VATAmount',
              'PolicyPremium',
              'ITDPremium',
              'NCDRate',
              'SchemeDiscount',
              'SchemeDiscountAmount',
              'AddittionalElement5',
            ];

            let planObj = {
              product_code: vehicle.ProductInfo.ProductID,
              NCDLevel: vehicle?.NCDLevel,
              validation_message: vehicle.ProductInfo?.ValidationMessage || '',
              validation_code: vehicle.ProductInfo?.ValidationCode || 0,
            };
            object_props.forEach((x) => {
              planObj[x] = vehicle.ProductInfo[x];
            });
            planObj['add_ons_list'] = (vehicle.ProductInfo.CoverageInfo || [])
              .filter((x) => x.Premium > 0)
              .map((coverage) => {
                return {
                  cover_id: coverage.CoverID,
                  TotalPremium: coverage.TotalPremium,
                  PremiumVatAmount: coverage.PremiumVatAmount,
                  Premium: coverage.Premium,
                };
              });
            return planObj;
          }),
        };
        vehicleArray.push(vehicleObj);
      });
      //get the response for front end
      vehicleArray.forEach((V) => {
        V['plans'] = {};
        V.plan_list.forEach((P) => {
          V['plans'][P.product_code] = {};
          V['plans'][P.product_code] = P;
          V['plans'][P.product_code]['add_ons'] = {};
          P.add_ons_list.forEach((A) => {
            V['plans'][P.product_code]['add_ons'][A.cover_id] = A;
          });
          delete P.add_ons_list;
        });
        delete V.plan_list;
      });
      bh.local.result = vehicleArray;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ma6xOhnFINeqeWgM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ma6xOhnFINeqeWgM',
        spanInst,
        'sd_ma6xOhnFINeqeWgM'
      );
    }
  }

  async apiAudit0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('apiAudit0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance: SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows =
        SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4Instance.logApiAudit(
          spanInst,
          bh.api_key,
          bh.identifier,
          bh.input.payload,
          bh.payload,
          bh.apiStartTime,
          bh.apiEndTime,
          bh.duration
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_apiAudit0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rc5fixaIrtpWjGmJ',
        spanInst,
        'apiAudit0'
      );
    }
  }

  async sd_N0JZocf1zvIorrYz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N0JZocf1zvIorrYz',
      parentSpanInst
    );
    try {
      bh.payload = bh.error?.response?.body;
      bh.local.result = [];
      bh.duration = Number(bh.error['requestDuration']);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apiAudit0(bh, parentSpanInst);
      //appendnew_next_sd_N0JZocf1zvIorrYz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N0JZocf1zvIorrYz',
        spanInst,
        'sd_N0JZocf1zvIorrYz'
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
      (await this.sd_RNoP13MHFslHuBN4(bh, parentSpanInst))
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
  async sd_RNoP13MHFslHuBN4(bh, parentSpanInst) {
    const nodes = ['sd_RtfAd7yhOKETreWu'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_N0JZocf1zvIorrYz(bh, parentSpanInst);
      //appendnew_next_sd_RNoP13MHFslHuBN4
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
