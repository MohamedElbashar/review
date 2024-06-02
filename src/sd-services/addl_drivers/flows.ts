// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
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

  async getAddlDrivers(parentSpanInst, quote_id: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAddlDrivers',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl0(bh, parentSpanInst);
      //appendnew_next_getAddlDrivers
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
        'sd_nkQIW82C0S3yPgen',
        spanInst,
        'getAddlDrivers'
      );
    }
  }

  async upsertAddlDriver(
    parentSpanInst,
    driver: any = {},
    risk_items: any = [],
    mode: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'upsertAddlDriver',
      parentSpanInst
    );
    let bh: any = {
      input: {
        driver,
        risk_items,
        mode,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl1(bh, parentSpanInst);
      //appendnew_next_upsertAddlDriver
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
        'sd_Ix6fzFR143I0W08n',
        spanInst,
        'upsertAddlDriver'
      );
    }
  }

  async deleteAddlDriver(
    parentSpanInst,
    driver_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'deleteAddlDriver',
      parentSpanInst
    );
    let bh: any = {
      input: {
        driver_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl2(bh, parentSpanInst);
      //appendnew_next_deleteAddlDriver
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
        'sd_guoEmFUJgC4JrjNr',
        spanInst,
        'deleteAddlDriver'
      );
    }
  }

  async deleteRiskMapping(
    parentSpanInst,
    driver_id: any = undefined,
    del_type = '',
    risk_item_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'deleteRiskMapping',
      parentSpanInst
    );
    let bh: any = {
      input: {
        driver_id,
        del_type,
        risk_item_id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl3(bh, parentSpanInst);
      //appendnew_next_deleteRiskMapping
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
        'sd_8tQbyGL4BfIKyZcd',
        spanInst,
        'deleteRiskMapping'
      );
    }
  }

  async createRiskMapping(
    parentSpanInst,
    driver_id: any = undefined,
    risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'createRiskMapping',
      parentSpanInst
    );
    let bh: any = {
      input: {
        driver_id,
        risk_items,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setDelType(bh, parentSpanInst);
      //appendnew_next_createRiskMapping
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
        'sd_GQcFZW0ZRiuz37sI',
        spanInst,
        'createRiskMapping'
      );
    }
  }

  async createBulkDriverItem(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'createBulkDriverItem',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        bulk_result_driver: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kgmp6eit88xfwzjB(bh, parentSpanInst);
      //appendnew_next_createBulkDriverItem
      return (
        // formatting output variables
        {
          input: {},
          local: {
            bulk_result_driver: bh.local.bulk_result_driver,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jB5MaPeGZWdYwfwt',
        spanInst,
        'createBulkDriverItem'
      );
    }
  }

  async duplicateRiskItems(
    parentSpanInst,
    drivers: any = undefined,
    duplicate_quote: any = undefined,
    duplicate_risk_items: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'duplicateRiskItems',
      parentSpanInst
    );
    let bh: any = {
      input: {
        drivers,
        duplicate_quote,
        duplicate_risk_items,
      },
      local: {
        duplicate_data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_71enq1La85gWRgvC(bh, parentSpanInst);
      //appendnew_next_duplicateRiskItems
      return (
        // formatting output variables
        {
          input: {},
          local: {
            duplicate_data: bh.local.duplicate_data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_70tGdgYtHnV0ZmYa',
        spanInst,
        'duplicateRiskItems'
      );
    }
  }

  async driverBulkUploadStart(
    parentSpanInst,
    driver: any = {},
    risk_items: any = [],
    mode: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'driverBulkUploadStart',
      parentSpanInst
    );
    let bh: any = {
      input: {
        driver,
        risk_items,
        mode,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PEsJlcfd5aQnJqAX(bh, parentSpanInst);
      //appendnew_next_driverBulkUploadStart
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
        'sd_oQH40kHw2K3ct1Fp',
        spanInst,
        'driverBulkUploadStart'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl0', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'driver/list-by-quote';
      bh.body = { quote_id: bh.input.quote_id };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpDriverItemList(bh, parentSpanInst);
      //appendnew_next_setUrl0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zqUSHaxu9wZtKaMk',
        spanInst,
        'setUrl0'
      );
    }
  }

  async httpDriverItemList(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_httpDriverItemList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O5kJy4MbnZU1KyCf');
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tmbBBSva3a6QE4Lm',
        spanInst,
        'setResponse0'
      );
    }
  }

  async setUrl1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl1', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/driver/create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpRiskItemUpsert(bh, parentSpanInst);
      //appendnew_next_setUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c072dlBgXhzgGJdv',
        spanInst,
        'setUrl1'
      );
    }
  }

  async httpRiskItemUpsert(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.driver,
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

      bh.result = responseMsg;
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_httpRiskItemUpsert
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0GOvQ1L8sj1YE75w');
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JKjTA234CwFJDPTn(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_09jKVP25Z4qAAW23',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_JKjTA234CwFJDPTn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JKjTA234CwFJDPTn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.mode,
          'Create',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sOfqTOkYJATIUD8h(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JKjTA234CwFJDPTn',
        spanInst,
        'sd_JKjTA234CwFJDPTn'
      );
    }
  }

  async sd_sOfqTOkYJATIUD8h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sOfqTOkYJATIUD8h',
      parentSpanInst
    );
    try {
      bh.driver_id = bh.local.result.id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createRiskMapping1(bh, parentSpanInst);
      //appendnew_next_sd_sOfqTOkYJATIUD8h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sOfqTOkYJATIUD8h',
        spanInst,
        'sd_sOfqTOkYJATIUD8h'
      );
    }
  }

  async createRiskMapping1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createRiskMapping1',
      parentSpanInst
    );
    try {
      let outputVariables = await this.createRiskMapping(
        spanInst,
        bh.driver_id,
        bh.input.risk_items
      );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_createRiskMapping1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AEuV5Gqh7Sc2N38L',
        spanInst,
        'createRiskMapping1'
      );
    }
  }

  async setUrl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl2', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'dm/digital/driver/delete-by-id';
      bh.body = {
        filter: {
          id: bh.input.driver_id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpDeleteTenant(bh, parentSpanInst);
      //appendnew_next_setUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FXmFMSlcvloqzTjn',
        spanInst,
        'setUrl2'
      );
    }
  }

  async httpDeleteTenant(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_httpDeleteTenant
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7cIgHGf7QjO7XgnZ');
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QnHXOtfAinXOmmS5',
        spanInst,
        'setResponse2'
      );
    }
  }

  async setUrl3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl3', parentSpanInst);
    try {
      if (bh.input.del_type == 'unlink_unique') {
        bh.url =
          process.env.DB_API_URL + 'dm/digital/risk_item_driver/delete-by-id';
        bh.body = {
          filter: {
            risk_id: bh.input.risk_item_id,
            driver_id: bh.input.driver_id,
          },
        };
      }
      if (bh.input.del_type == 'unlink_all') {
        bh.url =
          process.env.DB_API_URL + 'dm/digital/risk_item_driver/delete-all';
        bh.body = {
          filter: {
            driver_id: bh.input.driver_id,
          },
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpDeleteMapping(bh, parentSpanInst);
      //appendnew_next_setUrl3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Nk2fVnnwAQ5RRDZz',
        spanInst,
        'setUrl3'
      );
    }
  }

  async httpDeleteMapping(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_httpDeleteMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Uu2XX5C3MBC94Iqn');
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bpPErZwRfvumuoGu',
        spanInst,
        'setResponse3'
      );
    }
  }

  async setDelType(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setDelType',
      parentSpanInst
    );
    try {
      // For Mobile APP Team, Business Case: Driver to be added without any mapping to the risk item
      bh.noRiskItems = bh.input.risk_items.length == 0 || !bh.input.risk_items;

      if (Array.isArray(bh.input.risk_items)) {
        bh.del_type = 'unlink_all';
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FytcZmRr94QAGfSx(bh, parentSpanInst);
      //appendnew_next_setDelType
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cZgckiU3eJN9C9CA',
        spanInst,
        'setDelType'
      );
    }
  }

  async sd_FytcZmRr94QAGfSx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FytcZmRr94QAGfSx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.noRiskItems,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dqgfmIX5vca8kPue(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.noRiskItems,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kCtNZ5oh9ms3G3vM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FytcZmRr94QAGfSx',
        spanInst,
        'sd_FytcZmRr94QAGfSx'
      );
    }
  }

  async sd_dqgfmIX5vca8kPue(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dqgfmIX5vca8kPue',
      parentSpanInst
    );
    try {
      bh.local.result = [{ driver_id: bh.input.driver_id }];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_dqgfmIX5vca8kPue
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dqgfmIX5vca8kPue',
        spanInst,
        'sd_dqgfmIX5vca8kPue'
      );
    }
  }

  async sd_kCtNZ5oh9ms3G3vM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kCtNZ5oh9ms3G3vM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.del_type,
          'Driver',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lxAZvqH7b9y2WOfI(bh, parentSpanInst);
      } else {
        bh = await this.setUrl4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kCtNZ5oh9ms3G3vM',
        spanInst,
        'sd_kCtNZ5oh9ms3G3vM'
      );
    }
  }

  async sd_lxAZvqH7b9y2WOfI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lxAZvqH7b9y2WOfI',
      parentSpanInst
    );
    try {
      let outputVariables = await this.deleteRiskMapping(
        spanInst,
        bh.input.driver_id,
        bh.del_type,
        undefined
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_sd_lxAZvqH7b9y2WOfI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lxAZvqH7b9y2WOfI',
        spanInst,
        'sd_lxAZvqH7b9y2WOfI'
      );
    }
  }

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url =
        process.env.DB_API_URL + 'dm/digital/risk_item_driver/create-all';

      let risk_items = [];
      if (Array.isArray(bh.input.risk_items)) {
        bh.input.risk_items.forEach((el) => {
          let tempObj = {
            risk_id: el,
            driver_id: bh.input.driver_id,
          };
          risk_items.push(tempObj);
        });
      } else {
        let tempObj = {
          risk_id: bh.input.risk_items,
          driver_id: bh.input.driver_id,
        };
        risk_items.push(tempObj);
      }

      bh.body = {
        risk_item_driver: risk_items,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpMappingCreate(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XvevjljSI64JMCJj',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpMappingCreate(bh, parentSpanInst) {
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

      bh.result = responseMsg;
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_httpMappingCreate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_38ldqDkUsZZl6cyB');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.result.payload || [];

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PnWWJ0K3iaqnb9hh',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_kgmp6eit88xfwzjB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kgmp6eit88xfwzjB',
      parentSpanInst
    );
    try {
      bh.payload = bh.input.data.map((el) => ({
        driver: {
          quote_id: el.duplicate_quote_id,
          driver_name: el?.driver_name,
          first_name: el?.driver_name
            ? String(el?.driver_name).split(' ')[0]
            : '',
          last_name: el?.driver_name
            ? String(el?.driver_name).split(' ')[1]
            : '',
          id_no: el.id_no,
          risk_items: el.duplicate_risk_items,
          id_type: el?.id_type || 1,
          addl_details: JSON.stringify(el['addl_details']),
        },
        risk_items: el.duplicate_risk_items,
      }));

      const asyncOperation = async (data) => {
        return await new Promise(async (resolve, reject) => {
          try {
            // let obj = await this.upsert_addl_driver(parentSpanInst, data, data.risk_items, 'Create');
            let obj = await this.driverBulkUploadStart(
              parentSpanInst,
              data,
              data.risk_items,
              'Create'
            );
            resolve(obj);
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(bh.payload.map(asyncOperation))
        .then((results) => {
          bh.local.bulk_result_driver = results;
        })
        .catch((error) => {
          console.error('Error', error);
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_kgmp6eit88xfwzjB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kgmp6eit88xfwzjB',
        spanInst,
        'sd_kgmp6eit88xfwzjB'
      );
    }
  }

  async sd_71enq1La85gWRgvC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_71enq1La85gWRgvC',
      parentSpanInst
    );
    try {
      bh.body = bh.input.drivers.map((item) => {
        return {
          ...item,
          duplicate_quote_id: bh.input.duplicate_quote.id,
          duplicate_risk_items: (item.risk_items || []).map((x) => {
            return bh.input.duplicate_risk_items.find((z) => z.old_risk_id == x)
              .id;
          }),
        };
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.createBulkDriversFunction(bh, parentSpanInst);
      //appendnew_next_sd_71enq1La85gWRgvC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_71enq1La85gWRgvC',
        spanInst,
        'sd_71enq1La85gWRgvC'
      );
    }
  }

  async createBulkDriversFunction(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createBulkDriversFunction',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: flows =
        flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.createBulkDriverItem(
          spanInst,
          bh.body
        )
      );

      bh.local.duplicate_data = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_createBulkDriversFunction
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zaARGOQztKV9Uoxn',
        spanInst,
        'createBulkDriversFunction'
      );
    }
  }

  async sd_PEsJlcfd5aQnJqAX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PEsJlcfd5aQnJqAX',
      parentSpanInst
    );
    try {
      let outputVariables = await this.upsertAddlDriver(
        spanInst,
        bh.input.driver,
        bh.input.risk_items,
        bh.input.mode
      );
      bh.driver_response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_PEsJlcfd5aQnJqAX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PEsJlcfd5aQnJqAX',
        spanInst,
        'sd_PEsJlcfd5aQnJqAX'
      );
    }
  }

  async catchResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catchResponse0',
      parentSpanInst
    );
    try {
      bh.local.result = [];
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_catchResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dy4v3rkOwCWwcoIB',
        spanInst,
        'catchResponse0'
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
      (await this.sd_MrjIqXcVPxvTXM8U(bh, parentSpanInst))
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
  async sd_MrjIqXcVPxvTXM8U(bh, parentSpanInst) {
    const nodes = ['sd_O5kJy4MbnZU1KyCf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catchResponse0(bh, parentSpanInst);
      //appendnew_next_sd_MrjIqXcVPxvTXM8U
      return true;
    }
    return false;
  }
  //appendnew_flow_flows_Catch
}
