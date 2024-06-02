// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class apigee_token_cache {
  public auth_code: any;
  public ac_expiry: any;
  public auth: any;
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
    this.serviceName = 'apigee_token_cache';
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
      instance = new apigee_token_cache(
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
    //appendnew_flow_apigee_token_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apigee_token_cache');
    //appendnew_flow_apigee_token_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apigee_token_cache');

    this.app['post'](
      `${this.serviceBasePath}/auth_code`,
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
          bh = await this.sd_m5qZaOPpAPcATNNp(bh, parentSpanInst);
          //appendnew_next_sd_3p5Pk22bD10w6mhT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3p5Pk22bD10w6mhT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/auth`,
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
          bh = await this.sd_8AE5oxcGMl6Vb7Kj(bh, parentSpanInst);
          //appendnew_next_sd_qlBEyW3QHpwylV4w
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qlBEyW3QHpwylV4w');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apigee_token_cache_HttpIn
  }
  //   service flows_apigee_token_cache

  async authCode(parentSpanInst, target: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('authCode', parentSpanInst);
    let bh: any = {
      input: {
        target,
      },
      local: {
        auth_code: undefined,
        expiry: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAuthCode(bh, parentSpanInst);
      //appendnew_next_authCode
      return (
        // formatting output variables
        {
          input: {},
          local: {
            auth_code: bh.local.auth_code,
            expiry: bh.local.expiry,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ISsaVAqHPW8k1vzB',
        spanInst,
        'authCode'
      );
    }
  }

  async apigeeTokenOc(parentSpanInst, target: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'apigeeTokenOc',
      parentSpanInst
    );
    let bh: any = {
      input: {
        target,
      },
      local: {
        apigee_token: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTokenOc(bh, parentSpanInst);
      //appendnew_next_apigeeTokenOc
      return (
        // formatting output variables
        {
          input: {},
          local: {
            apigee_token: bh.local.apigee_token,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oCtYY7tZxUASSlTa',
        spanInst,
        'apigeeTokenOc'
      );
    }
  }
  //appendnew_flow_apigee_token_cache_start

  async getAuthCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAuthCode',
      parentSpanInst
    );
    try {
      bh.auth_code = this.auth_code;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G0PlHz8kvTuEBRKO(bh, parentSpanInst);
      //appendnew_next_getAuthCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHCaqr56yawNJ4jB',
        spanInst,
        'getAuthCode'
      );
    }
  }

  async sd_G0PlHz8kvTuEBRKO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G0PlHz8kvTuEBRKO',
      parentSpanInst
    );
    try {
      if (bh.auth_code?.[bh.input.target]) {
        bh.local.auth_code = bh.auth_code[bh.input.target]['auth_code'];
        bh.local.expiry = bh.auth_code[bh.input.target]['expiry'];
      }

      if (
        bh.local.auth_code &&
        bh.local.expiry &&
        new Date().getTime() < bh.local.expiry
      )
        bh.valid = true;
      else bh.valid = false;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aiXJZa4EwN7KAk0h(bh, parentSpanInst);
      //appendnew_next_sd_G0PlHz8kvTuEBRKO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G0PlHz8kvTuEBRKO',
        spanInst,
        'sd_G0PlHz8kvTuEBRKO'
      );
    }
  }

  async sd_aiXJZa4EwN7KAk0h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aiXJZa4EwN7KAk0h',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aiXJZa4EwN7KAk0h',
        spanInst,
        'sd_aiXJZa4EwN7KAk0h'
      );
    }
  }

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      if (bh.input.target == 'OCI') {
        bh.url =
          process.env.APIGEE_OCI_URL +
          `/dcp-oauth/authorizationcode?response_type=code&client_id=${process.env.APIGEE_OCI_CLIENT_ID}&redirect_uri=https://b`;
      } else if (bh.input.target == 'OCE') {
        bh.url =
          process.env.APIGEE_OCE_URL +
          `/dcp-oauth/authorizationcode?response_type=code&client_id=${process.env.APIGEE_OCE_CLIENT_ID}&redirect_uri=https://b`;
      } else {
        bh.url =
          process.env.APIGEE_URL +
          `/dcp-oauth/authorizationcode?response_type=code&client_id=${process.env.APIGEE_CLIENT_ID}&redirect_uri=https://b`;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeAuthCode(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qVk7cp2upfVF76Pa',
        spanInst,
        'setUrl0'
      );
    }
  }

  async apigeeAuthCode(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
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

      bh.response = responseMsg;
      bh = await this.sd_gvQNKgFKbbBvDtnS(bh, parentSpanInst);
      //appendnew_next_apigeeAuthCode
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_onxbr9gwFl7Mk7iG');
    }
  }

  async sd_gvQNKgFKbbBvDtnS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gvQNKgFKbbBvDtnS',
      parentSpanInst
    );
    try {
      bh.local.auth_code = bh.response['payload']?.Authorization_code;
      bh.local.expiry = new Date().setSeconds(899);
      (bh.auth_code = bh.auth_code || {})[bh.input.target] = {
        auth_code: bh.local.auth_code,
        expiry: bh.local.expiry,
      };
      console.log(bh.local.auth_code);
      console.log(bh.local.expiry);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setAuthCode(bh, parentSpanInst);
      //appendnew_next_sd_gvQNKgFKbbBvDtnS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gvQNKgFKbbBvDtnS',
        spanInst,
        'sd_gvQNKgFKbbBvDtnS'
      );
    }
  }

  async setAuthCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setAuthCode',
      parentSpanInst
    );
    try {
      this.auth_code = bh.auth_code;
      this.ac_expiry = bh.local.expiry;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setAuthCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lJkHN6topMVWEGRL',
        spanInst,
        'setAuthCode'
      );
    }
  }

  async getTokenOc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTokenOc',
      parentSpanInst
    );
    try {
      bh.auth = this.auth;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Th7QYFU78XL9P4Dp(bh, parentSpanInst);
      //appendnew_next_getTokenOc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IQhAegxIYteWcxSB',
        spanInst,
        'getTokenOc'
      );
    }
  }

  async sd_Th7QYFU78XL9P4Dp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Th7QYFU78XL9P4Dp',
      parentSpanInst
    );
    try {
      if (bh.auth?.[bh.input.target]) {
        bh.local.apigee_token = bh.auth[bh.input.target]['apigee_token'];
        bh.local.expiry = bh.auth[bh.input.target]['expiry'];
      }

      if (
        bh.local.apigee_token &&
        bh.local.expiry &&
        new Date().getTime() < bh.local.expiry
      )
        bh.valid = true;
      else bh.valid = false;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qscJnS7KOeiZLNL6(bh, parentSpanInst);
      //appendnew_next_sd_Th7QYFU78XL9P4Dp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Th7QYFU78XL9P4Dp',
        spanInst,
        'sd_Th7QYFU78XL9P4Dp'
      );
    }
  }

  async sd_qscJnS7KOeiZLNL6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qscJnS7KOeiZLNL6',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getCodeOc(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qscJnS7KOeiZLNL6',
        spanInst,
        'sd_qscJnS7KOeiZLNL6'
      );
    }
  }

  async getCodeOc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCodeOc', parentSpanInst);
    try {
      let outputVariables = await this.authCode(spanInst, bh.input.target);
      bh.auth_code = outputVariables.local.auth_code;
      bh.expiry = outputVariables.local.expiry;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_getCodeOc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3To7Vod9Jstl0fnK',
        spanInst,
        'getCodeOc'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      // bh.url = process.env.APIGEE_URL + `/dcp-oauth/accesstoken?grant_type=authorization_code&client_id=${process.env.APIGEE_CLIENT_ID}&redirect_uri=https://b`;
      if (bh.input.target == 'OCI') {
        bh.url =
          process.env.APIGEE_OCI_URL +
          `/dcp-oauth/accesstoken?grant_type=authorization_code&client_id=${process.env.APIGEE_OCI_CLIENT_ID}&redirect_uri=https://b`;
        bh.headers = {
          Authorization: 'Basic ' + process.env.APIGEE_OCI_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      } else if (bh.input.target == 'OCE') {
        bh.url =
          process.env.APIGEE_OCE_URL +
          `/dcp-oauth/accesstoken?grant_type=authorization_code&client_id=${process.env.APIGEE_OCE_CLIENT_ID}&redirect_uri=https://b`;
        bh.headers = {
          Authorization: 'Basic ' + process.env.APIGEE_OCE_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      } else {
        bh.url =
          process.env.APIGEE_URL +
          `/dcp-oauth/accesstoken?grant_type=authorization_code&client_id=${process.env.APIGEE_CLIENT_ID}&redirect_uri=https://b`;
        bh.headers = {
          Authorization: 'Basic ' + process.env.APIGEE_CLIENT_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      }

      bh.body = {
        code: bh.auth_code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://b',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeAccessTokenOc(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PHhW9zGM07RWbvbU',
        spanInst,
        'setUrl2'
      );
    }
  }

  async apigeeAccessTokenOc(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.body,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
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

      bh.response = responseMsg;
      bh = await this.sd_5O403xhMtdLUUtHN(bh, parentSpanInst);
      //appendnew_next_apigeeAccessTokenOc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JfXB5dlQY0eu19zj');
    }
  }

  async sd_5O403xhMtdLUUtHN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5O403xhMtdLUUtHN',
      parentSpanInst
    );
    try {
      bh.local.apigee_token = bh.response['payload']['Access_token'];
      bh.local.expiry = new Date().setSeconds(
        bh.response['payload']['Access_token_expires_in'] || 1799
      );

      (bh.auth = bh.auth || {})[bh.input.target] = {
        apigee_token: bh.local.apigee_token,
        expiry: bh.local.expiry,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setApigeeTokenOc(bh, parentSpanInst);
      //appendnew_next_sd_5O403xhMtdLUUtHN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5O403xhMtdLUUtHN',
        spanInst,
        'sd_5O403xhMtdLUUtHN'
      );
    }
  }

  async setApigeeTokenOc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setApigeeTokenOc',
      parentSpanInst
    );
    try {
      this.auth = bh.auth;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setApigeeTokenOc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sgCaGrois1xOQxN0',
        spanInst,
        'setApigeeTokenOc'
      );
    }
  }

  async sd_m5qZaOPpAPcATNNp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m5qZaOPpAPcATNNp',
      parentSpanInst
    );
    try {
      let outputVariables = await this.authCode(spanInst, bh.input.body.target);
      bh.code = outputVariables.local.auth_code;
      bh.expiry = outputVariables.local.expiry;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAuthCode2(bh, parentSpanInst);
      //appendnew_next_sd_m5qZaOPpAPcATNNp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m5qZaOPpAPcATNNp',
        spanInst,
        'sd_m5qZaOPpAPcATNNp'
      );
    }
  }

  async getAuthCode2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAuthCode2',
      parentSpanInst
    );
    try {
      bh.auth_code = this.auth_code;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Qf9TnvFZOfD7rR7p(bh, parentSpanInst);
      //appendnew_next_getAuthCode2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w7xsreUgSjkGHUFc',
        spanInst,
        'getAuthCode2'
      );
    }
  }

  async sd_Qf9TnvFZOfD7rR7p(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.auth_code);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qf9TnvFZOfD7rR7p');
    }
  }

  async sd_8AE5oxcGMl6Vb7Kj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8AE5oxcGMl6Vb7Kj',
      parentSpanInst
    );
    try {
      let outputVariables = await this.apigeeTokenOc(
        spanInst,
        bh.input.body.target
      );
      bh.auth_token = outputVariables.local.apigee_token;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAuth1(bh, parentSpanInst);
      //appendnew_next_sd_8AE5oxcGMl6Vb7Kj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8AE5oxcGMl6Vb7Kj',
        spanInst,
        'sd_8AE5oxcGMl6Vb7Kj'
      );
    }
  }

  async getAuth1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAuth1', parentSpanInst);
    try {
      bh.auth = this.auth;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LSHzPMhWM7acHFAb(bh, parentSpanInst);
      //appendnew_next_getAuth1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_220oXLNOdxy0UDqs',
        spanInst,
        'getAuth1'
      );
    }
  }

  async sd_LSHzPMhWM7acHFAb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.auth);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LSHzPMhWM7acHFAb');
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
  //appendnew_flow_apigee_token_cache_Catch
}
