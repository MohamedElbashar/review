// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class flows {
  public redis_client: any;
  public status_list: any;
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

  async clientInstance(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'clientInstance',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        redis_client: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getClient(bh, parentSpanInst);
      //appendnew_next_clientInstance
      return (
        // formatting output variables
        {
          input: {},
          local: {
            redis_client: bh.local.redis_client,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6m3Cb7rEwUj0YVUn',
        spanInst,
        'clientInstance'
      );
    }
  }

  async setKey(parentSpanInst, key = '', value: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('setKey', parentSpanInst);
    let bh: any = {
      input: {
        key,
        value,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3zzKv9WUHwnJmpHC(bh, parentSpanInst);
      //appendnew_next_setKey
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iKo0CyCQZ6dJTKK1',
        spanInst,
        'setKey'
      );
    }
  }

  async getKey(parentSpanInst, key = '', ...others) {
    const spanInst = this.tracerService.createSpan('getKey', parentSpanInst);
    let bh: any = {
      input: {
        key,
      },
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PtWaOsxOFwLreXfK(bh, parentSpanInst);
      //appendnew_next_getKey
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_piAhXFaG9LImDlo9',
        spanInst,
        'getKey'
      );
    }
  }

  async statusList(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'statusList',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        status: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache(bh, parentSpanInst);
      //appendnew_next_statusList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status: bh.local.status,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rOS9aa5p7EQU01ye',
        spanInst,
        'statusList'
      );
    }
  }
  //appendnew_flow_flows_start

  async getClient(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getClient', parentSpanInst);
    try {
      bh.local.redis_client = this.redis_client;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nZI6DWWHKZt9LWvq(bh, parentSpanInst);
      //appendnew_next_getClient
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yIomifLhHBi5TEdT',
        spanInst,
        'getClient'
      );
    }
  }

  async sd_nZI6DWWHKZt9LWvq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nZI6DWWHKZt9LWvq',
      parentSpanInst
    );
    try {
      log.info(
        `[PRE_CHECK][IS_CLIENT_READY]:: ${bh.local.redis_client?.isReady}`
      );

      if (!bh.local.redis_client?.isReady) {
        bh.local.redis_client = null;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XNZ1HEkVAuHJaaqs(bh, parentSpanInst);
      //appendnew_next_sd_nZI6DWWHKZt9LWvq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nZI6DWWHKZt9LWvq',
        spanInst,
        'sd_nZI6DWWHKZt9LWvq'
      );
    }
  }

  async sd_XNZ1HEkVAuHJaaqs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XNZ1HEkVAuHJaaqs',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.redis_client,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.createInstance(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.redis_client,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.createInstance(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XNZ1HEkVAuHJaaqs',
        spanInst,
        'sd_XNZ1HEkVAuHJaaqs'
      );
    }
  }

  async createInstance(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createInstance',
      parentSpanInst
    );
    try {
      const redis = require('redis');
      const MAX_RETRIES = 1;

      const client = await redis.createClient({
        url: process.env.REDIS_URL,
        socket: {
          reconnectStrategy: (retries) => {
            if (retries >= MAX_RETRIES) {
              client.disconnect();
              log.info('Max retries reached');
            }
            const delay = retries * 50;
            log.info(`Retry attempt ${retries + 1} in ${delay}ms`);
            return delay;
          },
        },
      });

      client?.connect(() => {
        log.info('Connected to Redis');
      });

      client.on('error', (err) => {
        log.error('Error connecting to Redis:', err);
      });

      log.info(`[POST_CHECK][IS_CLIENT_READY]:: ${client?.isReady}`);

      bh.local.redis_client = client;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setClient(bh, parentSpanInst);
      //appendnew_next_createInstance
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b82ctCt52IU4JXfM',
        spanInst,
        'createInstance'
      );
    }
  }

  async setClient(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setClient', parentSpanInst);
    try {
      this.redis_client = bh.local.redis_client;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setClient
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8bV5YxDussj8Psvv',
        spanInst,
        'setClient'
      );
    }
  }

  async sd_3zzKv9WUHwnJmpHC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3zzKv9WUHwnJmpHC',
      parentSpanInst
    );
    try {
      bh.status = process.env.ENABLE_CACHE == 'true';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5ERMkmUDkRPTasVD(bh, parentSpanInst);
      //appendnew_next_sd_3zzKv9WUHwnJmpHC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3zzKv9WUHwnJmpHC',
        spanInst,
        'sd_3zzKv9WUHwnJmpHC'
      );
    }
  }

  async sd_5ERMkmUDkRPTasVD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5ERMkmUDkRPTasVD',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInstance0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5ERMkmUDkRPTasVD',
        spanInst,
        'sd_5ERMkmUDkRPTasVD'
      );
    }
  }

  async getInstance0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInstance0',
      parentSpanInst
    );
    try {
      let outputVariables = await this.clientInstance(spanInst);
      bh.redis_client = outputVariables.local.redis_client;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getExpiryConfig(bh, parentSpanInst);
      //appendnew_next_getInstance0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A2UeZB46re1MhZsX',
        spanInst,
        'getInstance0'
      );
    }
  }

  async getExpiryConfig(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getExpiryConfig',
      parentSpanInst
    );
    try {
      let outputVariables = await this.statusList(spanInst);
      bh.status_list = outputVariables.local.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mu8v5sXvc5pqB7gJ(bh, parentSpanInst);
      //appendnew_next_getExpiryConfig
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DE7exnMGC4l6Cpjc',
        spanInst,
        'getExpiryConfig'
      );
    }
  }

  async sd_mu8v5sXvc5pqB7gJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mu8v5sXvc5pqB7gJ',
      parentSpanInst
    );
    try {
      if (
        typeof bh.input.value === 'object' ||
        bh.input.value instanceof Object
      ) {
        bh.input.value = JSON.stringify(bh.input.value);
      }

      try {
        await bh.redis_client.set(bh.input.key, bh.input.value, {
          EX: bh.status_list || 60,
          NX: true,
        });
        bh.local.data = 'OK';
      } catch (error) {
        bh.local.data = null;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mu8v5sXvc5pqB7gJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mu8v5sXvc5pqB7gJ',
        spanInst,
        'sd_mu8v5sXvc5pqB7gJ'
      );
    }
  }

  async sd_PtWaOsxOFwLreXfK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PtWaOsxOFwLreXfK',
      parentSpanInst
    );
    try {
      bh.status = process.env.ENABLE_CACHE == 'true';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S7pwU1InVXUM5Zow(bh, parentSpanInst);
      //appendnew_next_sd_PtWaOsxOFwLreXfK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PtWaOsxOFwLreXfK',
        spanInst,
        'sd_PtWaOsxOFwLreXfK'
      );
    }
  }

  async sd_S7pwU1InVXUM5Zow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S7pwU1InVXUM5Zow',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInstance1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S7pwU1InVXUM5Zow',
        spanInst,
        'sd_S7pwU1InVXUM5Zow'
      );
    }
  }

  async getInstance1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInstance1',
      parentSpanInst
    );
    try {
      let outputVariables = await this.clientInstance(spanInst);
      bh.redis_client = outputVariables.local.redis_client;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MeqfkrmDw1tdKxBY(bh, parentSpanInst);
      //appendnew_next_getInstance1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tmmsa3oee7Xf2pXe',
        spanInst,
        'getInstance1'
      );
    }
  }

  async sd_MeqfkrmDw1tdKxBY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MeqfkrmDw1tdKxBY',
      parentSpanInst
    );
    try {
      try {
        const data = await bh.redis_client.get(bh.input.key);
        if (data) {
          bh.local.data = JSON.parse(data);
        } else {
          bh.local.data = data;
        }
      } catch (error) {
        bh.local.data = null;
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_MeqfkrmDw1tdKxBY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MeqfkrmDw1tdKxBY',
        spanInst,
        'sd_MeqfkrmDw1tdKxBY'
      );
    }
  }

  async getCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache', parentSpanInst);
    try {
      bh.local.status = this.status_list;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7k3u09pnkX5TCQFS(bh, parentSpanInst);
      //appendnew_next_getCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9UXaZCwcvQmzivs5',
        spanInst,
        'getCache'
      );
    }
  }

  async sd_7k3u09pnkX5TCQFS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7k3u09pnkX5TCQFS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.local.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setUrl(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7k3u09pnkX5TCQFS',
        spanInst,
        'sd_7k3u09pnkX5TCQFS'
      );
    }
  }

  async setUrl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + '/dm/digital/system_setting/find-by-id';
      bh.body = {
        filter: {
          code: 'REDIS_DEFAULT_EXPIRY',
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpExpiry(bh, parentSpanInst);
      //appendnew_next_setUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v8UQdm7xdfizYk3c',
        spanInst,
        'setUrl'
      );
    }
  }

  async httpExpiry(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
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

      bh.local.status = responseMsg;
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_httpExpiry
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kUuQFrzeL7dsFWYn');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.status = bh.local.status['payload']['value'];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCache(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LSLWEhaJu5FfAMHV',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMsgCache',
      parentSpanInst
    );
    try {
      this.status_list = bh.local.status;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4YgwQZ7XBslJ8avA',
        spanInst,
        'setMsgCache'
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
  //appendnew_flow_flows_Catch
}
