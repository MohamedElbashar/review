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
  public apigee_token: any;
  public expiry: any;
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
          bh = await this.sd_zpnkMqmNxBWHXxw6(bh, parentSpanInst);
          //appendnew_next_sd_IsoWs9qHGbxNYGZt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IsoWs9qHGbxNYGZt');
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
          bh = await this.sd_jZrGi3BBPafgM5i7(bh, parentSpanInst);
          //appendnew_next_sd_ovqbTxoJVkI1Zixq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ovqbTxoJVkI1Zixq');
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
        'sd_2TXRpbdtF3bCZUKJ',
        spanInst,
        'authCode'
      );
    }
  }

  async apigeeToken(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'apigeeToken',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        apigee_token: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getToken(bh, parentSpanInst);
      //appendnew_next_apigeeToken
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
        'sd_3ns9bq6L2tBqaO96',
        spanInst,
        'apigeeToken'
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
        'sd_iZSho4YqgI4XXDSw',
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
      bh = await this.sd_lOpUEgdS1aKRDaEG(bh, parentSpanInst);
      //appendnew_next_getAuthCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vOVSOOFQEaPSgsOB',
        spanInst,
        'getAuthCode'
      );
    }
  }

  async sd_lOpUEgdS1aKRDaEG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lOpUEgdS1aKRDaEG',
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
      bh = await this.sd_MPlMpdceZflnv8g9(bh, parentSpanInst);
      //appendnew_next_sd_lOpUEgdS1aKRDaEG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lOpUEgdS1aKRDaEG',
        spanInst,
        'sd_lOpUEgdS1aKRDaEG'
      );
    }
  }

  async sd_MPlMpdceZflnv8g9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MPlMpdceZflnv8g9',
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
        'sd_MPlMpdceZflnv8g9',
        spanInst,
        'sd_MPlMpdceZflnv8g9'
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
        'sd_6pv4QmlYkil0M3Ts',
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
      bh = await this.sd_gmjwGaZsmUxkdYjG(bh, parentSpanInst);
      //appendnew_next_apigeeAuthCode
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JYHnDJMR3U7KLvc8');
    }
  }

  async sd_gmjwGaZsmUxkdYjG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gmjwGaZsmUxkdYjG',
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
      //appendnew_next_sd_gmjwGaZsmUxkdYjG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gmjwGaZsmUxkdYjG',
        spanInst,
        'sd_gmjwGaZsmUxkdYjG'
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
        'sd_w66dpbKI6tXO9aL3',
        spanInst,
        'setAuthCode'
      );
    }
  }

  async getToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getToken', parentSpanInst);
    try {
      bh.local.apigee_token = this.apigee_token;
      bh.local.expiry = this.expiry;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a3nzDDsrM5Eh4kXr(bh, parentSpanInst);
      //appendnew_next_getToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TQL1dBjqEzf07QrA',
        spanInst,
        'getToken'
      );
    }
  }

  async sd_a3nzDDsrM5Eh4kXr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3nzDDsrM5Eh4kXr',
      parentSpanInst
    );
    try {
      if (
        bh.local.apigee_token &&
        bh.local.expiry &&
        new Date().getTime() < bh.local.expiry
      )
        bh.valid = true;
      else bh.valid = false;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3OPPR8gUzKHlLz7n(bh, parentSpanInst);
      //appendnew_next_sd_a3nzDDsrM5Eh4kXr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3nzDDsrM5Eh4kXr',
        spanInst,
        'sd_a3nzDDsrM5Eh4kXr'
      );
    }
  }

  async sd_3OPPR8gUzKHlLz7n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3OPPR8gUzKHlLz7n',
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
        bh = await this.getCode(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3OPPR8gUzKHlLz7n',
        spanInst,
        'sd_3OPPR8gUzKHlLz7n'
      );
    }
  }

  async getCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCode', parentSpanInst);
    try {
      let outputVariables = await this.authCode(spanInst, 'datased');
      bh.auth_code = outputVariables.local.auth_code;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_getCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZigVvn68ylhhu65I',
        spanInst,
        'getCode'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url =
        process.env.APIGEE_URL +
        `/dcp-oauth/accesstoken?grant_type=authorization_code&client_id=${process.env.APIGEE_CLIENT_ID}&redirect_uri=https://b`;
      bh.body = {
        code: bh.auth_code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://b',
      };

      bh.headers = {
        Authorization: 'Basic ' + process.env.APIGEE_CLIENT_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.apigeeAccessToken(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qQSPS8KYzfCMIKZu',
        spanInst,
        'setUrl1'
      );
    }
  }

  async apigeeAccessToken(bh, parentSpanInst) {
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
      bh = await this.sd_sGXTV1yaZ1e0AnO4(bh, parentSpanInst);
      //appendnew_next_apigeeAccessToken
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_daKcymDrMWwXjeUs');
    }
  }

  async sd_sGXTV1yaZ1e0AnO4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sGXTV1yaZ1e0AnO4',
      parentSpanInst
    );
    try {
      bh.local.apigee_token = bh.response['payload']['Access_token'];
      bh.local.expiry = new Date().setSeconds(
        bh.response['payload']['Access_token_expires_in'] || 1799
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setApigeeToken(bh, parentSpanInst);
      //appendnew_next_sd_sGXTV1yaZ1e0AnO4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sGXTV1yaZ1e0AnO4',
        spanInst,
        'sd_sGXTV1yaZ1e0AnO4'
      );
    }
  }

  async setApigeeToken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setApigeeToken',
      parentSpanInst
    );
    try {
      this.apigee_token = bh.local.apigee_token;
      this.expiry = bh.local.expiry;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setApigeeToken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vjyL0jYDiRVcEjCy',
        spanInst,
        'setApigeeToken'
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
      bh = await this.sd_LLaCG2oKkigbpDDX(bh, parentSpanInst);
      //appendnew_next_getTokenOc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gOQdMvQtZoG1CRo4',
        spanInst,
        'getTokenOc'
      );
    }
  }

  async sd_LLaCG2oKkigbpDDX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LLaCG2oKkigbpDDX',
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
      bh = await this.sd_07wHAhrcBWVglkYW(bh, parentSpanInst);
      //appendnew_next_sd_LLaCG2oKkigbpDDX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LLaCG2oKkigbpDDX',
        spanInst,
        'sd_LLaCG2oKkigbpDDX'
      );
    }
  }

  async sd_07wHAhrcBWVglkYW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_07wHAhrcBWVglkYW',
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
        'sd_07wHAhrcBWVglkYW',
        spanInst,
        'sd_07wHAhrcBWVglkYW'
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
        'sd_wG1xuDPCaCdcJlvd',
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
        'sd_2WR2aoAqas1k42Kq',
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
        cookies: undefined,
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
      bh = await this.sd_U3Y3nDJqZaCYd8Tk(bh, parentSpanInst);
      //appendnew_next_apigeeAccessTokenOc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_99MI2RFkL4Nj1VqZ');
    }
  }

  async sd_U3Y3nDJqZaCYd8Tk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U3Y3nDJqZaCYd8Tk',
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
      //appendnew_next_sd_U3Y3nDJqZaCYd8Tk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U3Y3nDJqZaCYd8Tk',
        spanInst,
        'sd_U3Y3nDJqZaCYd8Tk'
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
        'sd_VnNEhQuGw2xvHuLB',
        spanInst,
        'setApigeeTokenOc'
      );
    }
  }

  async sd_zpnkMqmNxBWHXxw6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zpnkMqmNxBWHXxw6',
      parentSpanInst
    );
    try {
      let outputVariables = await this.authCode(spanInst, bh.input.body.target);
      bh.code = outputVariables.local.auth_code;
      bh.expiry = outputVariables.local.expiry;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAuthCode2(bh, parentSpanInst);
      //appendnew_next_sd_zpnkMqmNxBWHXxw6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zpnkMqmNxBWHXxw6',
        spanInst,
        'sd_zpnkMqmNxBWHXxw6'
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
      await this.sd_W5L3oC5pFrMZbH3W(bh, parentSpanInst);
      //appendnew_next_getAuthCode2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lvv0mk9vmAItgDXL',
        spanInst,
        'getAuthCode2'
      );
    }
  }

  async sd_W5L3oC5pFrMZbH3W(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.auth_code);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W5L3oC5pFrMZbH3W');
    }
  }

  async sd_jZrGi3BBPafgM5i7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jZrGi3BBPafgM5i7',
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
      //appendnew_next_sd_jZrGi3BBPafgM5i7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jZrGi3BBPafgM5i7',
        spanInst,
        'sd_jZrGi3BBPafgM5i7'
      );
    }
  }

  async getAuth1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAuth1', parentSpanInst);
    try {
      bh.auth = this.auth;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jsLlK5ASPRPY7LOg(bh, parentSpanInst);
      //appendnew_next_getAuth1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_32OuhDtVogkrHbag',
        spanInst,
        'getAuth1'
      );
    }
  }

  async sd_jsLlK5ASPRPY7LOg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.auth);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jsLlK5ASPRPY7LOg');
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
