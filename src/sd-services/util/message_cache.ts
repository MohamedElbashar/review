// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

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
    //appendnew_flow_message_cache_HttpIn
  }
  //   service flows_message_cache

  async getAllMessages(
    parentSpanInst,
    messageCode = '',
    localeCode = 'en',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getAllMessages',
      parentSpanInst
    );
    let bh: any = {
      input: {
        messageCode,
        localeCode,
      },
      local: {
        messages: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getMsgCachee(bh, parentSpanInst);
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
        'sd_nw2ZTjzEiyKprGTM',
        spanInst,
        'getAllMessages'
      );
    }
  }
  //appendnew_flow_message_cache_start

  async getMsgCachee(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMsgCachee',
      parentSpanInst
    );
    try {
      bh.local.messages = this.systemMessages;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_imgKCPFbUXsoIecs(bh, parentSpanInst);
      //appendnew_next_getMsgCachee
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aVzFb2u04cqi8VEI',
        spanInst,
        'getMsgCachee'
      );
    }
  }

  async sd_imgKCPFbUXsoIecs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_imgKCPFbUXsoIecs',
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
        bh = await this.sd_HXvwyOQ9hF3bWuYI(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.messages,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_HXvwyOQ9hF3bWuYI(bh, parentSpanInst);
      } else {
        bh = await this.sd_Ief0IZddYIYoWDo9(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_imgKCPFbUXsoIecs',
        spanInst,
        'sd_imgKCPFbUXsoIecs'
      );
    }
  }

  async sd_HXvwyOQ9hF3bWuYI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HXvwyOQ9hF3bWuYI',
      parentSpanInst
    );
    try {
      bh.query = `SELECT sm."message_code" , sm."message_type" , l."en" , l."ar", sm."apigee_code"  FROM "system_messages" sm, "locale" l WHERE sm."locale_id" = l."id" `;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSystemMsgs(bh, parentSpanInst);
      //appendnew_next_sd_HXvwyOQ9hF3bWuYI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HXvwyOQ9hF3bWuYI',
        spanInst,
        'sd_HXvwyOQ9hF3bWuYI'
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
        'sd_coBP8BjMOCSmmMOl'
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
      bh.local.messages = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setMsgCachee(bh, parentSpanInst);
      //appendnew_next_getSystemMsgs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rpL2WhQa0uUR1Psr',
        spanInst,
        'getSystemMsgs'
      );
    }
  }

  async setMsgCachee(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setMsgCachee',
      parentSpanInst
    );
    try {
      this.systemMessages = bh.local.messages;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ief0IZddYIYoWDo9(bh, parentSpanInst);
      //appendnew_next_setMsgCachee
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fntyuL2KHjRrJ68k',
        spanInst,
        'setMsgCachee'
      );
    }
  }

  async sd_Ief0IZddYIYoWDo9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ief0IZddYIYoWDo9',
      parentSpanInst
    );
    try {
      if (typeof bh.input.messageCode === 'string') {
        let msg = bh.local.messages.find(
          (x) =>
            x.message_code == bh.input.messageCode ||
            x.apigee_code == bh.input.messageCode
        );
        if (msg)
          bh.local.messages = msg[bh.input.localeCode || 'en'] || msg['en'];
      } else {
        bh.local.messages = bh.local.messages.filter(
          (x) =>
            bh.input.messageCode.includes(x.message_code) ||
            bh.input.messageCode.includes(x.apigee_code)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Ief0IZddYIYoWDo9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ief0IZddYIYoWDo9',
        spanInst,
        'sd_Ief0IZddYIYoWDo9'
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
  //appendnew_flow_message_cache_Catch
}
