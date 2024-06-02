// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class kc_flows {
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
    this.serviceName = 'kc_flows';
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
      instance = new kc_flows(
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
    //appendnew_flow_kc_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: kc_flows');
    //appendnew_flow_kc_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: kc_flows');
    //appendnew_flow_kc_flows_HttpIn
  }
  //   service flows_kc_flows

  async generatePassword(parentSpanInst, password: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generatePassword',
      parentSpanInst
    );
    let bh: any = {
      input: {
        password,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.generatePass(bh, parentSpanInst);
      //appendnew_next_generatePassword
      return (
        // formatting output variables
        {
          input: {
            password: bh.input.password,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hbd5PAxzuafPrSox',
        spanInst,
        'generatePassword'
      );
    }
  }
  //appendnew_flow_kc_flows_start

  async generatePass(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generatePass',
      parentSpanInst
    );
    try {
      const minLength = 8;
      const maxLength = 12;
      const splChars = ['%', '$', '#', '@', '!'];
      const allowedChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      const passwordLength =
        Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

      let password = '';

      // Make sure atleast 1 spl character is there in the password
      password += splChars[Math.floor(Math.random() * splChars.length)];

      // Generate the rest of the password
      for (let i = 1; i < passwordLength; i++) {
        const characterSet = i % 2 === 0 ? splChars : allowedChars;
        password +=
          characterSet[Math.floor(Math.random() * characterSet.length)];
      }

      // Randomize the password characters
      password = password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');

      bh.input.password = password;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_generatePass
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RTzkYXdNAzBMUE3b',
        spanInst,
        'generatePass'
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
  //appendnew_flow_kc_flows_Catch
}
