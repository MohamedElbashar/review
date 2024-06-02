// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W from '../quote/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK from './flows'; //_splitter_
//append_imports_end
export class addl_drivers_apis {
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
    this.serviceName = 'addl_drivers_apis';
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
      instance = new addl_drivers_apis(
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
    //appendnew_flow_addl_drivers_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addl_drivers_apis');
    //appendnew_flow_addl_drivers_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: addl_drivers_apis');

    this.app['post'](
      `${this.serviceBasePath}/driver/list`,
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
          bh = await this.addlDriverList(bh, parentSpanInst);
          //appendnew_next_sd_olAKlwGqWNDeXx92
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_olAKlwGqWNDeXx92');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/create`,
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
          bh = await this.sd_QpXoUUA1BnWTKLIw(bh, parentSpanInst);
          //appendnew_next_sd_aMg0BIT94L3giCNH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aMg0BIT94L3giCNH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/update`,
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
          bh = await this.setBody4(bh, parentSpanInst);
          //appendnew_next_sd_PGFhV7UY0fSRNUYx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PGFhV7UY0fSRNUYx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/delete`,
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
          bh = await this.setBody5(bh, parentSpanInst);
          //appendnew_next_sd_9VnKpRcdCWWAsCRB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9VnKpRcdCWWAsCRB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/link`,
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
          bh = await this.linkRiskAndProduct(bh, parentSpanInst);
          //appendnew_next_sd_I0wDeI5x8IgRaznm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I0wDeI5x8IgRaznm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/driver/unlink`,
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
          bh = await this.setBody2(bh, parentSpanInst);
          //appendnew_next_sd_yrnD63MAC5bxcPly
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yrnD63MAC5bxcPly');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_addl_drivers_apis_HttpIn
  }
  //   service flows_addl_drivers_apis

  //appendnew_flow_addl_drivers_apis_start

  async addlDriverList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addlDriverList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.getAddlDrivers(
          spanInst,
          bh.input.body.quote_id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_addlDriverList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iGwMHZR3cxLQb8aP',
        spanInst,
        'addlDriverList'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      // bh.response = bh.result.payload
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZIp79uVmj0P5aJNK(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5raVO3Alp5o1HeLO',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_ZIp79uVmj0P5aJNK(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZIp79uVmj0P5aJNK');
    }
  }

  async sd_QpXoUUA1BnWTKLIw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QpXoUUA1BnWTKLIw',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance: SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows =
        SSD_SERVICE_ID_sd_tqChgP39bXgJFp0W.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tqChgP39bXgJFp0WInstance.getQuotesSummary(
          spanInst,
          undefined,
          undefined,
          bh.input.body.driver.quote_id,
          undefined,
          'ESKA'
        );
      bh.quote_response = outputVariables.local.quote_summary;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkPrimaryDriver(bh, parentSpanInst);
      //appendnew_next_sd_QpXoUUA1BnWTKLIw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QpXoUUA1BnWTKLIw',
        spanInst,
        'sd_QpXoUUA1BnWTKLIw'
      );
    }
  }

  async checkPrimaryDriver(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkPrimaryDriver',
      parentSpanInst
    );
    try {
      bh.is_primary_driver = false;

      if (bh.quote_response.quote_details.id_no == bh.input.body.driver.id_no) {
        bh.is_primary_driver = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_848vDtsIpt50yXkX(bh, parentSpanInst);
      //appendnew_next_checkPrimaryDriver
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gu9lgElR7kR49sUP',
        spanInst,
        'checkPrimaryDriver'
      );
    }
  }

  async sd_848vDtsIpt50yXkX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_848vDtsIpt50yXkX',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.is_primary_driver,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.primaryDriverResponse(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.is_primary_driver,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XwDBXjmAMds7pjs5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_848vDtsIpt50yXkX',
        spanInst,
        'sd_848vDtsIpt50yXkX'
      );
    }
  }

  async primaryDriverResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'primaryDriverResponse',
      parentSpanInst
    );
    try {
      bh.response = {
        status: false,
        message: 'Primary Driver can not be added as additional driver',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_axPF1BYxYYPu6OYL(bh, parentSpanInst);
      //appendnew_next_primaryDriverResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wpm1og3eUdZTpNh1',
        spanInst,
        'primaryDriverResponse'
      );
    }
  }

  async sd_axPF1BYxYYPu6OYL(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_axPF1BYxYYPu6OYL');
    }
  }

  async sd_XwDBXjmAMds7pjs5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XwDBXjmAMds7pjs5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.getAddlDrivers(
          spanInst,
          bh.input.body.driver.quote_id
        );
      bh.local.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkAddlDriver(bh, parentSpanInst);
      //appendnew_next_sd_XwDBXjmAMds7pjs5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XwDBXjmAMds7pjs5',
        spanInst,
        'sd_XwDBXjmAMds7pjs5'
      );
    }
  }

  async checkAddlDriver(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkAddlDriver',
      parentSpanInst
    );
    try {
      bh.driver_exist = false;
      if (bh.local.response && bh.local.response.length > 0) {
        bh.local.response.forEach((el) => {
          if (el.id_no == bh.input.body.driver.id_no) {
            bh.driver_exist = true;
          }
        });
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y7f2bSyrDsvVKup5(bh, parentSpanInst);
      //appendnew_next_checkAddlDriver
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rs3IxKn5n20AuKgT',
        spanInst,
        'checkAddlDriver'
      );
    }
  }

  async sd_Y7f2bSyrDsvVKup5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y7f2bSyrDsvVKup5',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.driver_exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.addlDriverResponse(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.driver_exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setBody1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y7f2bSyrDsvVKup5',
        spanInst,
        'sd_Y7f2bSyrDsvVKup5'
      );
    }
  }

  async addlDriverResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addlDriverResponse',
      parentSpanInst
    );
    try {
      bh.response = {
        status: false,
        message: 'This driver is already exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kzaMZ8vFzyfzQwx7(bh, parentSpanInst);
      //appendnew_next_addlDriverResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j312YplRvjcLyPaF',
        spanInst,
        'addlDriverResponse'
      );
    }
  }

  async sd_kzaMZ8vFzyfzQwx7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kzaMZ8vFzyfzQwx7');
    }
  }

  async setBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody1', parentSpanInst);
    try {
      bh.input.body.driver['addl_details'] = JSON.stringify(
        bh.input.body.driver['addl_details']
      );
      bh.driver = {
        driver: bh.input.body.driver,
      };
      bh.risk_items = bh.input.body.risk_items;
      bh.mode = 'Create';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createAddlDrivers(bh, parentSpanInst);
      //appendnew_next_setBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wTsxdgVAlF96xTFZ',
        spanInst,
        'setBody1'
      );
    }
  }

  async createAddlDrivers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createAddlDrivers',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.upsertAddlDriver(
          spanInst,
          bh.driver,
          bh.risk_items,
          bh.mode
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_createAddlDrivers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P9azEr8i5p6z3R9C',
        spanInst,
        'createAddlDrivers'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = bh.result;
      bh.statusCode = bh.response.length > 0 ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vVbu13HfnWMN0RVy(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_laI4FLxyMCgeRtPE',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_vVbu13HfnWMN0RVy(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vVbu13HfnWMN0RVy');
    }
  }

  async setBody4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody4', parentSpanInst);
    try {
      bh.input.body.driver['addl_details'] = JSON.stringify(
        bh.input.body.driver['addl_details']
      );
      bh.driver = {
        driver: bh.input.body.driver,
      };
      bh.mode = 'Update';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateRiskItem(bh, parentSpanInst);
      //appendnew_next_setBody4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JKruVpHJIEmiimo3',
        spanInst,
        'setBody4'
      );
    }
  }

  async updateRiskItem(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateRiskItem',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.upsertAddlDriver(
          spanInst,
          bh.driver,
          undefined,
          bh.mode
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_updateRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HLWLgcZAEb3dIXQH',
        spanInst,
        'updateRiskItem'
      );
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.response = { id: bh.result.id };
      bh.statusCode = bh.result.id ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jApyyceCPziCNQRl(bh, parentSpanInst);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sOwXpAhjQYj4Pw5m',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_jApyyceCPziCNQRl(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jApyyceCPziCNQRl');
    }
  }

  async setBody5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody5', parentSpanInst);
    try {
      bh.body = {
        filter: {
          id: bh.input.body.id,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteRiskItem(bh, parentSpanInst);
      //appendnew_next_setBody5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5hLB25Yr7hGE4HB1',
        spanInst,
        'setBody5'
      );
    }
  }

  async deleteRiskItem(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteRiskItem',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.deleteAddlDriver(
          spanInst,
          bh.input.body.id
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse6(bh, parentSpanInst);
      //appendnew_next_deleteRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ttGSQA5EwDs8Ijy6',
        spanInst,
        'deleteRiskItem'
      );
    }
  }

  async setResponse6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse6',
      parentSpanInst
    );
    try {
      if (bh.result.affected === 1) {
        bh.response = {
          id: bh.input.body.id,
        };
        bh.statusCode = 200;
      } else {
        bh.response = {};
        bh.statusCode = 500;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mMFeteLJMQRcXXRM(bh, parentSpanInst);
      //appendnew_next_setResponse6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gC06MJrgTg56jMjC',
        spanInst,
        'setResponse6'
      );
    }
  }

  async sd_mMFeteLJMQRcXXRM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mMFeteLJMQRcXXRM');
    }
  }

  async linkRiskAndProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'linkRiskAndProduct',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.createRiskMapping(
          spanInst,
          bh.input.body.driver_id,
          bh.input.body.risk_items
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_linkRiskAndProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HFjhcJYcn8ZTZXgp',
        spanInst,
        'linkRiskAndProduct'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.result.length > 0 ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8koTifc0Hpeh4pij(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eGfWYjI90Sy6xzX7',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_8koTifc0Hpeh4pij(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8koTifc0Hpeh4pij');
    }
  }

  async setBody2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody2', parentSpanInst);
    try {
      if (bh.input.body.risk_item && bh.input.body.driver_id) {
        bh.del_type = 'unlink_unique';
      } else if (!bh.input.body.risk_item && bh.input.body.driver_id) {
        bh.del_type = 'unlink_all';
      }

      console.log(bh.del_type, 'del_type');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.unlinkRiskAndProduct(bh, parentSpanInst);
      //appendnew_next_setBody2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zf5cMn0mc8PUTNJa',
        spanInst,
        'setBody2'
      );
    }
  }

  async unlinkRiskAndProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unlinkRiskAndProduct',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance: SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows =
        SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eK.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fygwwXSM7rSCI6eKInstance.deleteRiskMapping(
          spanInst,
          bh.input.body.driver_id,
          bh.del_type,
          bh.input.body.risk_item
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_unlinkRiskAndProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3azYlBvGjeLNGeSR',
        spanInst,
        'unlinkRiskAndProduct'
      );
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      if (bh.result.affected > 0) {
        bh.response = bh.input.body;
        bh.response['status'] = true;
        bh.statusCode = 200;
      } else {
        bh.response = { error: 'Failed to unlink driver', status: false };
        bh.statusCode = 200;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MgNUGsXG3qyhPyid(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SQnAx3ERg9Jiue49',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_MgNUGsXG3qyhPyid(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MgNUGsXG3qyhPyid');
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
  //appendnew_flow_addl_drivers_apis_Catch
}
