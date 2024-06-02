// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Middleware } from '../../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7 from '../Auth/flows'; //_splitter_
//append_imports_end
export class UserAuth {
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
    this.serviceName = 'UserAuth';
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
      instance = new UserAuth(
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
    //appendnew_flow_UserAuth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: UserAuth');
    let mw_ValidateUserSession: Middleware = new Middleware(
      this.serviceName,
      'ValidateUserSession',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_Zz4gAXUdZtMPExuN(bh, parentSpanInst);
          //appendnew_next_sd_yGZ5rJ84hmIl5tpG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yGZ5rJ84hmIl5tpG');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['ValidateUserSession'] =
      mw_ValidateUserSession;
    let mw_checkOtpVerified: Middleware = new Middleware(
      this.serviceName,
      'checkOtpVerified',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.getOtpSession(bh, parentSpanInst);
          //appendnew_next_sd_z9ngVVvvyrLsNieP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z9ngVVvvyrLsNieP');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['checkOtpVerified'] =
      mw_checkOtpVerified;
    //appendnew_flow_UserAuth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: UserAuth');
    //appendnew_flow_UserAuth_HttpIn
  }
  //   service flows_UserAuth

  //appendnew_flow_UserAuth_start

  async sd_Zz4gAXUdZtMPExuN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Zz4gAXUdZtMPExuN',
      parentSpanInst
    );
    try {
      const dcpToken = bh.input.headers?.authorization;
      bh.tokenPresent = !!dcpToken;
      bh.isNotUAT =
        !['UAT'].includes(process.env.ENV) ||
        bh.input.headers['x-source'] != 'dcp';
      bh.local.dcpToken = dcpToken;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.isNotUat(bh, parentSpanInst);
      //appendnew_next_sd_Zz4gAXUdZtMPExuN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zz4gAXUdZtMPExuN',
        spanInst,
        'sd_Zz4gAXUdZtMPExuN'
      );
    }
  }

  async isNotUat(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('isNotUat', parentSpanInst);
    try {
      if (
        this.sdService.operators['true'](
          bh.isNotUAT,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lTvovXyGQsuarHww(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.isNotUAT,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.tokenPresent(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vSfxDwV9ZRSmdHaK',
        spanInst,
        'isNotUat'
      );
    }
  }

  async sd_lTvovXyGQsuarHww(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lTvovXyGQsuarHww',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lTvovXyGQsuarHww',
        spanInst,
        'sd_lTvovXyGQsuarHww'
      );
    }
  }

  async tokenPresent(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenPresent',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.tokenPresent,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getSession(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.tokenPresent,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_pQzk8ZUX4zJSscdx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MqL2Aqk9mynpfoO2',
        spanInst,
        'tokenPresent'
      );
    }
  }

  async getSession(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSession',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessiondata = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateToken(bh, parentSpanInst);
      //appendnew_next_getSession
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jjHL6p5ko8qgAVyq',
        spanInst,
        'getSession'
      );
    }
  }

  async validateToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateToken',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7Instance: SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7.flows =
        SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7Instance.verifyDcpToken(
          spanInst,
          bh.local.dcpToken
        );
      bh.local.userInfo = outputVariables.local.userInfo;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WMFe6DgAgeG87hYN(bh, parentSpanInst);
      //appendnew_next_validateToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mms442UbGbPPk8kW',
        spanInst,
        'validateToken'
      );
    }
  }

  async sd_WMFe6DgAgeG87hYN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WMFe6DgAgeG87hYN',
      parentSpanInst
    );
    try {
      const userInfo = bh.local.userInfo;
      bh.isValidSession = userInfo && Object.values(userInfo).length > 0;

      bh.sessiondata = bh.sessiondata.data;
      bh.is_session_exist = bh.sessiondata?.['session_expiry'];
      if (bh.is_session_exist) {
        bh.session_expired = bh.sessiondata?.['session_expiry'] < Date.now();
      } else {
        bh.session_expired = false;
      }
      bh.invalidSession = false;

      if (!bh.isValidSession) {
        if (
          (bh.is_session_exist && bh.session_expired) ||
          !bh.is_session_exist
        ) {
          bh.invalidSession = true;
          bh.response = {
            statusCode: 401,
            message: 'Session not present.',
          };
        }
      } else {
        delete userInfo?.password;
        bh.web.req['userInfo'] = userInfo;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hDyS7SsdmBejOtjY(bh, parentSpanInst);
      //appendnew_next_sd_WMFe6DgAgeG87hYN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WMFe6DgAgeG87hYN',
        spanInst,
        'sd_WMFe6DgAgeG87hYN'
      );
    }
  }

  async sd_hDyS7SsdmBejOtjY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hDyS7SsdmBejOtjY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.invalidSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1gsagndmI7vkthuz(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.invalidSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sessionDestroy(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hDyS7SsdmBejOtjY',
        spanInst,
        'sd_hDyS7SsdmBejOtjY'
      );
    }
  }

  async sd_1gsagndmI7vkthuz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1gsagndmI7vkthuz',
      parentSpanInst
    );
    try {
      bh.setSession = false;

      if (!bh.sessiondata) {
        const userInfo = bh.local.userInfo;
        delete userInfo?.password;
        bh.sessiondata = {
          dcp_session: true,
          session_created_at: new Date(),
          session_expiry: new Date(
            new Date().getTime() +
              Number(process.env.SEESSION_MAX_AGE || 60 * 60 * 1000)
          ).getTime(),
          userInfo: userInfo,
        };
        bh.setSession = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Bv8pHPBST47LquCv(bh, parentSpanInst);
      //appendnew_next_sd_1gsagndmI7vkthuz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1gsagndmI7vkthuz',
        spanInst,
        'sd_1gsagndmI7vkthuz'
      );
    }
  }

  async sd_Bv8pHPBST47LquCv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bv8pHPBST47LquCv',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.setSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.createSession(bh, parentSpanInst);
      } else {
        bh = await this.sd_MWFqyw9xxuQSKHzz(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bv8pHPBST47LquCv',
        spanInst,
        'sd_Bv8pHPBST47LquCv'
      );
    }
  }

  async createSession(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createSession',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.sessiondata;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MWFqyw9xxuQSKHzz(bh, parentSpanInst);
      //appendnew_next_createSession
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ko28aUomcWtPDRsc',
        spanInst,
        'createSession'
      );
    }
  }

  async sd_MWFqyw9xxuQSKHzz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MWFqyw9xxuQSKHzz',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MWFqyw9xxuQSKHzz',
        spanInst,
        'sd_MWFqyw9xxuQSKHzz'
      );
    }
  }

  async sessionDestroy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sessionDestroy',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9DjoqDxqwFEDHJQg(bh, parentSpanInst);
      //appendnew_next_sessionDestroy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hlqBpFq2M8TtSxKK',
        spanInst,
        'sessionDestroy'
      );
    }
  }

  async sd_9DjoqDxqwFEDHJQg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.response.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9DjoqDxqwFEDHJQg');
    }
  }

  async sd_pQzk8ZUX4zJSscdx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pQzk8ZUX4zJSscdx',
      parentSpanInst
    );
    try {
      bh.response = {
        statusCode: 401,
        message: 'Session not present.',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.destroySession1(bh, parentSpanInst);
      //appendnew_next_sd_pQzk8ZUX4zJSscdx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pQzk8ZUX4zJSscdx',
        spanInst,
        'sd_pQzk8ZUX4zJSscdx'
      );
    }
  }

  async destroySession1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'destroySession1',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0Wx7LMw8BnZoCdFE(bh, parentSpanInst);
      //appendnew_next_destroySession1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l2alzC1VVsHaBGoj',
        spanInst,
        'destroySession1'
      );
    }
  }

  async sd_0Wx7LMw8BnZoCdFE(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.response.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0Wx7LMw8BnZoCdFE');
    }
  }

  async getOtpSession(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getOtpSession',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.sessiondata = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jQO8XBHTidU2tqME(bh, parentSpanInst);
      //appendnew_next_getOtpSession
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mCB006QV8xJhkzkC',
        spanInst,
        'getOtpSession'
      );
    }
  }

  async sd_jQO8XBHTidU2tqME(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jQO8XBHTidU2tqME',
      parentSpanInst
    );
    try {
      bh.sessiondata = bh.sessiondata.data;
      bh.is_session_exist = bh.sessiondata?.['session_expiry'];
      if (bh.is_session_exist) {
        bh.session_expired = bh.sessiondata?.['session_expiry'] < Date.now();
      } else {
        bh.session_expired = false;
      }
      bh.invalidSession = false;

      if ((bh.is_session_exist && bh.session_expired) || !bh.is_session_exist) {
        bh.invalidSession = true;
        bh.response = {
          statusCode: 401,
          message: 'Session not present.',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkForValidSession(bh, parentSpanInst);
      //appendnew_next_sd_jQO8XBHTidU2tqME
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jQO8XBHTidU2tqME',
        spanInst,
        'sd_jQO8XBHTidU2tqME'
      );
    }
  }

  async checkForValidSession(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkForValidSession',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.invalidSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7ppWymhXXyQPeBBv(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.invalidSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.destroySession(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3RIkoBFLyuTBBUSD',
        spanInst,
        'checkForValidSession'
      );
    }
  }

  async sd_7ppWymhXXyQPeBBv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7ppWymhXXyQPeBBv',
      parentSpanInst
    );
    try {
      bh.otp_verified = false;

      if (!!bh.sessiondata?.['otp-verified']) {
        bh.otp_verified = bh.sessiondata['otp-verified'];
      } else {
        bh.response = {
          statusCode: 403,
          message: 'Forbidden',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkForOtp(bh, parentSpanInst);
      //appendnew_next_sd_7ppWymhXXyQPeBBv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ppWymhXXyQPeBBv',
        spanInst,
        'sd_7ppWymhXXyQPeBBv'
      );
    }
  }

  async checkForOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkForOtp',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.otp_verified,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dpFMHNjfg9k6VTKy(bh, parentSpanInst);
      } else {
        bh = await this.unauthorized(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZvL22LDIaz6QtXXu',
        spanInst,
        'checkForOtp'
      );
    }
  }

  async sd_dpFMHNjfg9k6VTKy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dpFMHNjfg9k6VTKy',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dpFMHNjfg9k6VTKy',
        spanInst,
        'sd_dpFMHNjfg9k6VTKy'
      );
    }
  }

  async unauthorized(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.response.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hcSPh2YL2sgUcAN5');
    }
  }

  async destroySession(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'destroySession',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SlFchVn6FNVg8IDn(bh, parentSpanInst);
      //appendnew_next_destroySession
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G3x9RBV19BXppRSJ',
        spanInst,
        'destroySession'
      );
    }
  }

  async sd_SlFchVn6FNVg8IDn(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.response.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SlFchVn6FNVg8IDn');
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
  //appendnew_flow_UserAuth_Catch
}
