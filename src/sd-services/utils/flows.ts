// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
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

  async parameterizeValues(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'parameterizeValues',
      parentSpanInst
    );

    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XRVcI07iBBoZ29rd(bh, parentSpanInst);
      //appendnew_next_parameterizeValues
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TEsnfnz0lMLe7nox',
        spanInst,
        'parameterizeValues'
      );
    }
  }

  async sequentialMultyQuery(
    parentSpanInst,
    query_arr: any = [],
    status = false,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'sequentialMultyQuery',
      parentSpanInst
    );
    let bh: any = {
      input: {
        query_arr,
        status,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Mi0jqyE8ctFftpii(bh, parentSpanInst);
      //appendnew_next_sequentialMultyQuery
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cJ1KQK33NvJhhzVY',
        spanInst,
        'sequentialMultyQuery'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_XRVcI07iBBoZ29rd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XRVcI07iBBoZ29rd',
      parentSpanInst
    );
    try {
      bh.local.parameterizedQuery = (arr, count) => {
        let values = [];
        let counter = '';
        arr.forEach((id, index) => {
          counter += `:${index + count},`;
          values.push(id);
        });
        counter = counter.slice(0, -1);
        count += arr.length;
        return { counter, values, count };
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_XRVcI07iBBoZ29rd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XRVcI07iBBoZ29rd',
        spanInst,
        'sd_XRVcI07iBBoZ29rd'
      );
    }
  }

  async sd_Mi0jqyE8ctFftpii(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mi0jqyE8ctFftpii',
      parentSpanInst
    );
    try {
      bh.length = bh.input.query_arr.length;
      bh.counter = -1;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iJEMCZOT8nDiv9Js(bh, parentSpanInst);
      //appendnew_next_sd_Mi0jqyE8ctFftpii
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mi0jqyE8ctFftpii',
        spanInst,
        'sd_Mi0jqyE8ctFftpii'
      );
    }
  }

  async sd_iJEMCZOT8nDiv9Js(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iJEMCZOT8nDiv9Js',
      parentSpanInst
    );
    try {
      bh.counter += 1;
      bh.query = bh.input.query_arr[bh.counter];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fPf4eZcs2pvlw1mq(bh, parentSpanInst);
      //appendnew_next_sd_iJEMCZOT8nDiv9Js
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iJEMCZOT8nDiv9Js',
        spanInst,
        'sd_iJEMCZOT8nDiv9Js'
      );
    }
  }

  async sd_fPf4eZcs2pvlw1mq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fPf4eZcs2pvlw1mq',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.counter,
          bh.length,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BtYZsMik2jWp3AMr(bh, parentSpanInst);
      } else {
        bh = await this.sd_iKS8cr7lYg7sveMA(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fPf4eZcs2pvlw1mq',
        spanInst,
        'sd_fPf4eZcs2pvlw1mq'
      );
    }
  }

  async sd_BtYZsMik2jWp3AMr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BtYZsMik2jWp3AMr',
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
      let params = undefined;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iJEMCZOT8nDiv9Js(bh, parentSpanInst);
      //appendnew_next_sd_BtYZsMik2jWp3AMr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BtYZsMik2jWp3AMr',
        spanInst,
        'sd_BtYZsMik2jWp3AMr'
      );
    }
  }

  async sd_iKS8cr7lYg7sveMA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iKS8cr7lYg7sveMA',
      parentSpanInst
    );
    try {
      bh.input.status = true;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_iKS8cr7lYg7sveMA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iKS8cr7lYg7sveMA',
        spanInst,
        'sd_iKS8cr7lYg7sveMA'
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
