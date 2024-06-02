// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { ActiveDirectoryAuthService } from '../../utils/ndefault-active-directory/ActiveDirectory/ActiveDirectoryAuthService'; //_splitter_
//append_imports_end
export class lookup_users {
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
    this.serviceName = 'lookup_users';
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
      instance = new lookup_users(
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
    //appendnew_flow_lookup_users_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: lookup_users');
    //appendnew_flow_lookup_users_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: lookup_users');

    this.app['post'](
      `${this.serviceBasePath}/ad/lookup`,
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
          bh = await this.constructAdSearchQuery(bh, parentSpanInst);
          //appendnew_next_sd_EYx3zZFTJz2NRCYg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EYx3zZFTJz2NRCYg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_lookup_users_HttpIn
  }
  //   service flows_lookup_users

  //appendnew_flow_lookup_users_start

  async constructAdSearchQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'constructAdSearchQuery',
      parentSpanInst
    );
    try {
      bh.q = `(|(cn=*${bh.input.body.searchQuery}*)(SAMAccountName=*${bh.input.body.searchQuery}*))`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.executeAdQuery(bh, parentSpanInst);
      //appendnew_next_constructAdSearchQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ky7cR9cKgAQ10rne',
        spanInst,
        'constructAdSearchQuery'
      );
    }
  }

  async executeAdQuery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'executeAdQuery',
      parentSpanInst
    );
    try {
      if (this.sdService.getConfigObj('ad-config', 'sd_dg9rd8Jd1qbTpeYM')) {
        let ad = new ActiveDirectoryAuthService();
        bh.result = await ad.findUsers(
          this.sdService.getConfigObj('ad-config', 'sd_dg9rd8Jd1qbTpeYM'),
          bh.q
        );
      } else {
        throw new Error('AD config is missing');
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_j4IU2TE0NFllwsfl(bh, parentSpanInst);
      //appendnew_next_executeAdQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DtITCl5DgDDMb4mN',
        spanInst,
        'executeAdQuery'
      );
    }
  }

  async sd_j4IU2TE0NFllwsfl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j4IU2TE0NFllwsfl');
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
  //appendnew_flow_lookup_users_Catch
}
