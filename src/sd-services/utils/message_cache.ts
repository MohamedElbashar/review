// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class message_cache {
  public systemMessages: any;
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
    this.serviceName = 'message_cache';
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
      instance = new message_cache(
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
    //appendnew_flow_message_cache_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: message_cache');
    //appendnew_flow_message_cache_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: message_cache');

    this.app['post'](
      `${this.serviceBasePath}/utils/system-messages`,
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
          bh = await this.getAllMsgs0(bh, parentSpanInst);
          //appendnew_next_sd_mIVMGODTAZQxy0Bn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mIVMGODTAZQxy0Bn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_message_cache_HttpIn
  }
  //   service flows_message_cache

  async getMessage(parentSpanInst, code = '', locale = 'en', ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMessage',
      parentSpanInst
    );
    let bh: any = {
      input: {
        code,
        locale,
      },
      local: {
        message: '',
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAllMsgs1(bh, parentSpanInst);
      //appendnew_next_getMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {
            message: bh.local.message,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fLhc6g5zrqP5BxLl',
        spanInst,
        'getMessage'
      );
    }
  }

  async getAllMessages(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAllMessages',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        messages: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMsgCache(bh, parentSpanInst);
      //appendnew_next_getAllMessages
      return (
        // formatting output variables
        {
          input: {},
          local: {
            messages: bh.local.messages,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5BDbfNwJwICwqjde',
        spanInst,
        'getAllMessages'
      );
    }
  }
  //appendnew_flow_message_cache_start

  async getAllMsgs1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAllMsgs1',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getAllMessages(spanInst);
      bh.messages = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J5yl2P7TqM3emkmO(bh, parentSpanInst);
      //appendnew_next_getAllMsgs1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uxWp4poSi5rZcmuw',
        spanInst,
        'getAllMsgs1'
      );
    }
  }

  async sd_J5yl2P7TqM3emkmO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J5yl2P7TqM3emkmO',
      parentSpanInst
    );
    try {
      let msg = bh.messages.find((x) => x.message_code == bh.input.code);
      bh.local.message = msg[bh.input.locale] || msg['en'];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J5yl2P7TqM3emkmO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J5yl2P7TqM3emkmO',
        spanInst,
        'sd_J5yl2P7TqM3emkmO'
      );
    }
  }

  async getMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMsgCache',
      parentSpanInst
    );
    try {
      bh.local.messages = this.systemMessages;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XvF4UWTI5t0Yrq6N(bh, parentSpanInst);
      //appendnew_next_getMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3aWKYcUJeWpC8cSA',
        spanInst,
        'getMsgCache'
      );
    }
  }

  async sd_XvF4UWTI5t0Yrq6N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XvF4UWTI5t0Yrq6N',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.local.messages,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xhFCtbnYle1McEYn(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.messages,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xhFCtbnYle1McEYn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XvF4UWTI5t0Yrq6N',
        spanInst,
        'sd_XvF4UWTI5t0Yrq6N'
      );
    }
  }

  async sd_xhFCtbnYle1McEYn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xhFCtbnYle1McEYn',
      parentSpanInst
    );
    try {
      bh.query = `SELECT sm."message_code" , sm."message_type" , l."en" , l."ar"  FROM "system_messages" sm, "locale" l WHERE sm."locale_id" = l."id" `;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSystemMsgs(bh, parentSpanInst);
      //appendnew_next_sd_xhFCtbnYle1McEYn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xhFCtbnYle1McEYn',
        spanInst,
        'sd_xhFCtbnYle1McEYn'
      );
    }
  }

  async getSystemMsgs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSystemMsgs',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_7x57vczK8BKALy2d'
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
      let params = [];
      params = params ? params : [];
      bh.local.messages = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCache(bh, parentSpanInst);
      //appendnew_next_getSystemMsgs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IUPn0JPRFbmefj7L',
        spanInst,
        'getSystemMsgs'
      );
    }
  }

  async setMsgCache(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMsgCache',
      parentSpanInst
    );
    try {
      this.systemMessages = bh.local.messages;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setMsgCache
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J0yP5K7ZipQfhT5x',
        spanInst,
        'setMsgCache'
      );
    }
  }

  async getAllMsgs0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAllMsgs0',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getAllMessages(spanInst);
      bh.local.allMessages = outputVariables.local.messages;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_dUlVOZxemy4M35a0(bh, parentSpanInst);
      //appendnew_next_getAllMsgs0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mD0ZICvlIPAq3SUP',
        spanInst,
        'getAllMsgs0'
      );
    }
  }

  async sd_dUlVOZxemy4M35a0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.allMessages);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dUlVOZxemy4M35a0');
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
  //appendnew_flow_message_cache_Catch
}
