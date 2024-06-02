// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e from '../common/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC from '../utils/system_settings'; //_splitter_
import * as SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21 from '../vehicle/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC from './flows'; //_splitter_
//append_imports_end
export class risk_item_apis {
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
    this.serviceName = 'risk_item_apis';
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
      instance = new risk_item_apis(
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
    //appendnew_flow_risk_item_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: risk_item_apis');
    //appendnew_flow_risk_item_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: risk_item_apis');

    this.app['post'](
      `${this.serviceBasePath}/risk_item/list`,
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
          bh = await this.riskItemList(bh, parentSpanInst);
          //appendnew_next_sd_xcWkNvXoPEqfFxs8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xcWkNvXoPEqfFxs8');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/create`,
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
          bh = await this.setBody1(bh, parentSpanInst);
          //appendnew_next_sd_TAQOb2h5yjoa6K4E
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TAQOb2h5yjoa6K4E');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/sme/create`,
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
          bh = await this.setBody3(bh, parentSpanInst);
          //appendnew_next_sd_qZH5p1s6gPYFKo1E
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qZH5p1s6gPYFKo1E');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/update`,
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
          //appendnew_next_sd_euXEEwjQNczYmqAE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_euXEEwjQNczYmqAE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/delete`,
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
          //appendnew_next_sd_aJCUKQQ7qFbZ1Oo4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aJCUKQQ7qFbZ1Oo4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/sme/upload_v1`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.checkFileValid(bh, parentSpanInst);
          //appendnew_next_sd_EC51IBzFYZMo7IAs
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EC51IBzFYZMo7IAs');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/link_product`,
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
          bh = await this.getRiskById(bh, parentSpanInst);
          //appendnew_next_sd_l1DuHeAKrobYj71X
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l1DuHeAKrobYj71X');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/risk_item/sme/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.checkFileValidV2(bh, parentSpanInst);
          //appendnew_next_sd_RRNGZvuVcogtHUEe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RRNGZvuVcogtHUEe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_risk_item_apis_HttpIn
  }
  //   service flows_risk_item_apis

  //appendnew_flow_risk_item_apis_start

  async riskItemList(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'riskItemList',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.input.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_riskItemList
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kSmzz2OknI71lzmP',
        spanInst,
        'riskItemList'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.result.length > 0 ? 200 : 200;
      bh.response = {
        count: bh.result.length,
        data: bh.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NFRNAaKDYuMsF3wU(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ceoOUgRw8yjkj5f1',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_NFRNAaKDYuMsF3wU(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NFRNAaKDYuMsF3wU');
    }
  }

  async setBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody1', parentSpanInst);
    try {
      bh.local.risk_item_id_no = bh.input.body.id_no;

      bh.local.getRiskItemListPayload = {
        filter: {
          quote_id: bh.input.body.quote_id,
        },
        orderBy: {},
        pageSize: 5000,
        offSet: 0,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.riskDuplicateCheck(bh, parentSpanInst);
      //appendnew_next_setBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eGl4d5tjxFOLhliP',
        spanInst,
        'setBody1'
      );
    }
  }

  async riskDuplicateCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'riskDuplicateCheck',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.checkRiskItemExists(
          spanInst,
          bh.local.getRiskItemListPayload,
          bh.local.risk_item_id_no
        );
      bh.local.exists = outputVariables.local.exists;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oPCJUGchyZv34v0J(bh, parentSpanInst);
      //appendnew_next_riskDuplicateCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zskB1ZjwMGkmJyOP',
        spanInst,
        'riskDuplicateCheck'
      );
    }
  }

  async sd_oPCJUGchyZv34v0J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oPCJUGchyZv34v0J',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.exists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NK07iUKiaBv2koKI(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.exists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_g11qmslCtWFl1bsw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oPCJUGchyZv34v0J',
        spanInst,
        'sd_oPCJUGchyZv34v0J'
      );
    }
  }

  async sd_NK07iUKiaBv2koKI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NK07iUKiaBv2koKI',
      parentSpanInst
    );
    try {
      bh.response = {
        status: false,
        error: 'Risk item already exists',
      };
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1grZamUF6gRNCyAA(bh, parentSpanInst);
      //appendnew_next_sd_NK07iUKiaBv2koKI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NK07iUKiaBv2koKI',
        spanInst,
        'sd_NK07iUKiaBv2koKI'
      );
    }
  }

  async sd_1grZamUF6gRNCyAA(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1grZamUF6gRNCyAA');
    }
  }

  async sd_g11qmslCtWFl1bsw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g11qmslCtWFl1bsw',
      parentSpanInst
    );
    try {
      bh.input.body['addl_details'] = JSON.stringify(
        bh.input.body['addl_details']
      );
      // bh.input.body['add_ons'] = JSON.stringify(bh.input.body['add_ons']);
      bh.body = {
        risk_item: bh.input.body,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createRiskItem(bh, parentSpanInst);
      //appendnew_next_sd_g11qmslCtWFl1bsw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g11qmslCtWFl1bsw',
        spanInst,
        'sd_g11qmslCtWFl1bsw'
      );
    }
  }

  async createRiskItem(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createRiskItem',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.createRiskItem(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody2(bh, parentSpanInst);
      //appendnew_next_createRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LqJlYjZwaazMf1k4',
        spanInst,
        'createRiskItem'
      );
    }
  }

  async setBody2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody2', parentSpanInst);
    try {
      bh.response = {
        id: bh.result.id,
      };
      bh.statusCode = bh.response.id ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1grZamUF6gRNCyAA(bh, parentSpanInst);
      //appendnew_next_setBody2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vy82UmU8cABnpmA0',
        spanInst,
        'setBody2'
      );
    }
  }

  async setBody3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody3', parentSpanInst);
    try {
      bh.input.body.forEach((el) => {
        el['addl_details'] = JSON.stringify(el['addl_details']);
        // el['add_ons'] = JSON.stringify(el['add_ons']);
      });
      bh.body = {
        risk_item: bh.input.body,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.upsertRiskItemAll(bh, parentSpanInst);
      //appendnew_next_setBody3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SZgXihlmuldo11C4',
        spanInst,
        'setBody3'
      );
    }
  }

  async upsertRiskItemAll(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'upsertRiskItemAll',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.addMultipleRiskItem(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse2(bh, parentSpanInst);
      //appendnew_next_upsertRiskItemAll
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_41xAy7lHVna1Neki',
        spanInst,
        'upsertRiskItemAll'
      );
    }
  }

  async setResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse2',
      parentSpanInst
    );
    try {
      bh.response = bh.result;
      bh.statusCode = bh.response.length > 0 ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8Wp6u9aoswOKnVyW(bh, parentSpanInst);
      //appendnew_next_setResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JO4Rbk9fWFqKFkaN',
        spanInst,
        'setResponse2'
      );
    }
  }

  async sd_8Wp6u9aoswOKnVyW(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8Wp6u9aoswOKnVyW');
    }
  }

  async setBody4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody4', parentSpanInst);
    try {
      bh.input.body['addl_details'] = JSON.stringify(
        bh.input.body['addl_details']
      );
      // bh.input.body['add_ons'] = JSON.stringify(bh.input.body['add_ons']);
      bh.body = {
        risk_item: bh.input.body,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateRiskItem(bh, parentSpanInst);
      //appendnew_next_setBody4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pk5Y73HMxFgOGmW4',
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
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.createRiskItem(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse3(bh, parentSpanInst);
      //appendnew_next_updateRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9I8Tum6QJ3p8r8Bn',
        spanInst,
        'updateRiskItem'
      );
    }
  }

  async setResponse3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse3',
      parentSpanInst
    );
    try {
      bh.response = bh.result;
      bh.statusCode = bh.response.id ? 200 : 500;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IJ3aHIP8SY84tGIS(bh, parentSpanInst);
      //appendnew_next_setResponse3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_et48ULYHXgfRpS39',
        spanInst,
        'setResponse3'
      );
    }
  }

  async sd_IJ3aHIP8SY84tGIS(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IJ3aHIP8SY84tGIS');
    }
  }

  async setBody5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody5', parentSpanInst);
    try {
      // bh.body = {
      //   "filter": {
      //     "id": bh.input.body.id
      //   }
      // }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteRiskItem(bh, parentSpanInst);
      //appendnew_next_setBody5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VsZHjgV4tRdp5Jca',
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
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.deleteRiskItem(
          spanInst,
          bh.input.body.id,
          bh.web.req.headers['lng']
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_deleteRiskItem
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mRAZ5k7xqVejXwWw',
        spanInst,
        'deleteRiskItem'
      );
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.response = bh.result;
      bh.statusCode = bh.response['affected'] === 1 ? 200 : 500;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_pYqFjzMfj2VVIFjg(bh, parentSpanInst);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UKR8T6oE5FYNAE3a',
        spanInst,
        'setResponse4'
      );
    }
  }

  async sd_pYqFjzMfj2VVIFjg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pYqFjzMfj2VVIFjg');
    }
  }

  async checkFileValid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkFileValid',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files?.file?.[0];
      if (bh.file) {
        let file_name = bh.file.originalname || '';
        let name_parts = file_name.split('.');
        let extension = name_parts[name_parts.length - 1];
        bh.validExt = ['xls', 'xlsx'];
        bh.status = bh.validExt.includes(extension);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_j87shaVBrODH3kdw(bh, parentSpanInst);
      //appendnew_next_checkFileValid
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VORGfy6CFOe0axTM',
        spanInst,
        'checkFileValid'
      );
    }
  }

  async sd_j87shaVBrODH3kdw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j87shaVBrODH3kdw',
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
        bh = await this.extractExcelData(bh, parentSpanInst);
      } else {
        bh = await this.sd_4ZXZoQlZYJejMpXd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j87shaVBrODH3kdw',
        spanInst,
        'sd_j87shaVBrODH3kdw'
      );
    }
  }

  async extractExcelData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'extractExcelData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance: SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows =
        SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance.excelToJson(
          spanInst,
          bh.file
        );
      bh.vehList = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody7(bh, parentSpanInst);
      //appendnew_next_extractExcelData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zv57tadLnbkKRSyo',
        spanInst,
        'extractExcelData'
      );
    }
  }

  async setBody7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody7', parentSpanInst);
    try {
      bh.hasVehDetls = false;
      bh.vehList.forEach((X) => {
        if (X.Type_of_Insurance) {
          let ins_type = X.Type_of_Insurance?.split('/')?.[0]?.trim();
          switch (ins_type) {
            case 'Ownership Transfer':
              X['validStatus'] = false;
              if (X.Sequence_Number && X.Old_Owner_ID) X['validStatus'] = true;
              break;
            case 'New Insurance':
              X['validStatus'] = false;
              if (X.Sequence_Number) X['validStatus'] = true;
              break;
            case 'New Vehicle':
              X['validStatus'] = false;
              if (X.Custom_Number && X.Production_Year) X['validStatus'] = true;
              break;
            default:
              break;
          }
        } else {
          X.validStatus = false;
        }
      });

      bh.validVehList = bh.vehList.filter((X) => X.validStatus);

      if (bh.validVehList && bh.validVehList.length) {
        bh.hasVehDetls = true;
      }

      bh.payload = {
        filter: {
          quote_id: Number(bh.input.body.quote_id),
        },
      };

      bh.usageTypePayload = {
        search_type: 'usage_type_sme',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.fetchRiskItems(bh, parentSpanInst);
      //appendnew_next_setBody7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Six7zsBf43IjtH0i',
        spanInst,
        'setBody7'
      );
    }
  }

  async fetchRiskItems(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fetchRiskItems',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.payload
        );
      bh.riskList = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UJpB8OyUVSbdxSfS(bh, parentSpanInst);
      //appendnew_next_fetchRiskItems
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NJ7CUCe2AQ6mbbcD',
        spanInst,
        'fetchRiskItems'
      );
    }
  }

  async sd_UJpB8OyUVSbdxSfS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UJpB8OyUVSbdxSfS',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.hasVehDetls,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_72Oc6kZDlOvlXYoM(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.hasVehDetls,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.serResponse1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UJpB8OyUVSbdxSfS',
        spanInst,
        'sd_UJpB8OyUVSbdxSfS'
      );
    }
  }

  async sd_72Oc6kZDlOvlXYoM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_72Oc6kZDlOvlXYoM',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance: SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings =
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance.getSystemSettings(spanInst)
      );
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.usageTypePayload
        )
      );

      bh.resArray = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkOverflow(bh, parentSpanInst);
      //appendnew_next_sd_72Oc6kZDlOvlXYoM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_72Oc6kZDlOvlXYoM',
        spanInst,
        'sd_72Oc6kZDlOvlXYoM'
      );
    }
  }

  async checkOverflow(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkOverflow',
      parentSpanInst
    );
    try {
      let vehListObj = [];
      bh.system_settings = bh.resArray[0].local.system_settings;
      bh.use_type_list = bh.resArray[1].local.result;

      bh.validVehList.forEach((veh, index) => {
        let seqNum = veh?.Sequence_Number || veh?.Custom_Number;
        let risk_filter = bh.riskList.filter((risk) => risk.id_no == seqNum);
        let veh_filter = vehListObj.filter((x) => {
          let seqNum_veh = x?.Sequence_Number || x?.Custom_Number;
          return seqNum_veh == seqNum;
        });

        if (!(risk_filter.length > 0) && !(veh_filter.length > 0)) {
          vehListObj.push(veh);
        }
      });

      bh.validVehList = vehListObj;

      let risklistLength =
        Number(
          bh.riskList.filter(
            (X) =>
              X.addl_details?.['eska_make'] && X.addl_details?.['eska_model']
          )?.length
        ) || 0;
      let vehicle_allowed_sme = bh.system_settings?.find(
        (ele) => ele.code == 'VEHICLES_ALLOWED_SME'
      ).value;
      let totalLength = Number(bh.validVehList?.length) + risklistLength;
      if (totalLength > Number(vehicle_allowed_sme)) {
        bh.bucketOverFlow = true;
      } else {
        bh.bucketOverFlow = false;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Cywe1OnkQL2ibtSu(bh, parentSpanInst);
      //appendnew_next_checkOverflow
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cwl7zgkXYyxhljKD',
        spanInst,
        'checkOverflow'
      );
    }
  }

  async sd_Cywe1OnkQL2ibtSu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Cywe1OnkQL2ibtSu',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.bucketOverFlow,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.serResponse2(bh, parentSpanInst);
      } else {
        bh = await this.getVehDetails(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Cywe1OnkQL2ibtSu',
        spanInst,
        'sd_Cywe1OnkQL2ibtSu'
      );
    }
  }

  async serResponse2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'serResponse2',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.riskList.length > 0 ? 200 : 404;

      bh.local.risk_items = {
        count: 0,
        data: bh.riskList,
      };
      bh.local.risk_items['error_code'] = 'UPLOAD_RISK_SME_OVERFLOW_ERROR';

      this.tracerService.sendData(spanInst, bh);
      await this.sd_4R8jis06NBYhnn4d(bh, parentSpanInst);
      //appendnew_next_serResponse2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RDI5VOQoHgkGVMi3',
        spanInst,
        'serResponse2'
      );
    }
  }

  async sd_4R8jis06NBYhnn4d(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.local.risk_items);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4R8jis06NBYhnn4d');
    }
  }

  async getVehDetails(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getVehDetails',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance: SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21.flows =
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getMultipleVehicleDetailsV1(
          spanInst,
          bh.validVehList,
          bh.input.body.id_no
        );
      bh.vehicleDetails = outputVariables.local.vehicleDetails;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody8(bh, parentSpanInst);
      //appendnew_next_getVehDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5gNJOW6ddvwxS0fO',
        spanInst,
        'getVehDetails'
      );
    }
  }

  async setBody8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody8', parentSpanInst);
    try {
      bh.vehicleDetails = bh.vehicleDetails || [];
      bh.risk_items = [];
      bh.vehicleDetails.forEach((X) => {
        let id_type = X['id_type'];
        let id_no = Number(X['id_no']);
        X['purposeOfUsingVehicle'] = getPurposeOfUse(
          id_no,
          X.purposeOfUsingVehicle
        );
        delete X['id_type'];
        delete X['id_no'];
        bh.risk_items.push({
          id_type: id_type,
          id_no: id_no,
          quote_id: Number(bh.input.body.quote_id),
          addl_details: mapAddl_dtls(X),
        });
      });
      bh.body = {
        risk_item: bh.risk_items,
      };
      function mapAddl_dtls(adtnlDtls) {
        let defaultValues = {
          adaptiveCruiseCtrl: false,
          antiSlipBreakingSystem: false,
          antiTheftAlarm: false,
          autoBreakingSystem: false,
          cruiseCtrl: false,
          deductible: 2000,
          distanceTraveled: 1000,
          engineVolume: '2',
          frontCamera: false,
          frontSensor: false,
          insuredValue: adtnlDtls.Rec_SI, //as per sanjay, default should bt recommended
          modificationToCar: false,
          modificationToCarDesc: '',
          parkingDuringNight: 'Street',
          // "purposeOfUsingVehicle": "283",
          rearCamera: false,
          rearParkingSensor: false,
          threeSixtyDegreeCamera: false,
          transmission: 'Automatic',
          vehicleRepairType: 'Out of Agency',
          numOfSeat: '5',
        };
        let mapedDtls = { ...adtnlDtls, ...defaultValues };
        return JSON.stringify(mapedDtls);
      }

      function getPurposeOfUse(id_no, purposeOfUsingVehicle) {
        bh.useCode = purposeOfUsingVehicle;
        let vehcl = bh.vehList.filter(
          (Y) => Y.Sequence_Number == id_no || Y.Custom_Number == id_no
        );
        if (vehcl.length) {
          let use = vehcl[0].Usage_Type;
          if (use) {
            use = use.split('/')[0]?.trim();
          }
          bh.useCode =
            bh.use_type_list.filter((X) => X.name_en == use)[0]?.id ||
            purposeOfUsingVehicle ||
            '283';
        }
        return bh.useCode;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addRiskItems(bh, parentSpanInst);
      //appendnew_next_setBody8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uxKYSnveui3xotz4',
        spanInst,
        'setBody8'
      );
    }
  }

  async addRiskItems(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addRiskItems',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.addMultipleRiskItem(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody9(bh, parentSpanInst);
      //appendnew_next_addRiskItems
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lwATHuytyLUTjXvs',
        spanInst,
        'addRiskItems'
      );
    }
  }

  async setBody9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody9', parentSpanInst);
    try {
      // let exclDataIds = []
      // let addVehlIds = []

      // bh.vehList.forEach(ele => {
      //     exclDataIds.push(ele.Custom_Number || ele.Sequence_Number)
      // })

      // bh.result.forEach(ele => {
      //     addVehlIds.push(ele.id_no)
      // })

      // bh.invalidIds = exclDataIds.filter(X => !addVehlIds.includes(X))

      bh.payload = {
        filter: {
          quote_id: Number(bh.input.body.quote_id),
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRiskItems(bh, parentSpanInst);
      //appendnew_next_setBody9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pSZkHwoxreJo6IoO',
        spanInst,
        'setBody9'
      );
    }
  }

  async getRiskItems(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRiskItems',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.payload
        );
      bh.local.riskList = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.serResponse(bh, parentSpanInst);
      //appendnew_next_getRiskItems
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jpP0rhwaxPavFlhK',
        spanInst,
        'getRiskItems'
      );
    }
  }

  async serResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'serResponse',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.local.riskList.length > 0 ? 200 : 404;

      bh.local.risk_items = {
        count: bh.local.riskList.length,
        data: bh.local.riskList,
        // "invaliIds": bh.invalidIds
      };

      if (bh.result.length > 0) {
        bh.local.risk_items['message'] =
          bh.result.length + ' vehicles added successfully';
      } else {
        bh.local.risk_items['error_code'] = 'UPLOAD_RISK_SME_DUPLICATE_ERROR';
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HyQaZHrDM34T5Xlg(bh, parentSpanInst);
      //appendnew_next_serResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HfZRWmjZRY6olqcc',
        spanInst,
        'serResponse'
      );
    }
  }

  async sd_HyQaZHrDM34T5Xlg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.local.risk_items);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HyQaZHrDM34T5Xlg');
    }
  }

  async serResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'serResponse1',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.riskList.length > 0 ? 200 : 404;

      bh.local.risk_items = {
        count: 0,
        data: bh.riskList,
      };
      bh.local.risk_items['error_code'] = 'UPLOAD_RISK_SME_ERROR';

      this.tracerService.sendData(spanInst, bh);
      await this.sd_pFBVXddX11W4JEvM(bh, parentSpanInst);
      //appendnew_next_serResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pepabf1w0L0ggOA8',
        spanInst,
        'serResponse1'
      );
    }
  }

  async sd_pFBVXddX11W4JEvM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.local.risk_items);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pFBVXddX11W4JEvM');
    }
  }

  async sd_4ZXZoQlZYJejMpXd(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send({ error_code: 'UPLOAD_RISK_SME_ERROR' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4ZXZoQlZYJejMpXd');
    }
  }

  async getRiskById(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRiskById',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.fetchRiskItemById(
          spanInst,
          bh.input.body.id
        );
      bh.risk_item = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_18Bzmtej1WAaV0lg(bh, parentSpanInst);
      //appendnew_next_getRiskById
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_auzPH431E7dyUKkQ',
        spanInst,
        'getRiskById'
      );
    }
  }

  async sd_18Bzmtej1WAaV0lg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_18Bzmtej1WAaV0lg',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.risk_item.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.setBody6(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.risk_item.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UeCL4lUXkhXUy0AM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_18Bzmtej1WAaV0lg',
        spanInst,
        'sd_18Bzmtej1WAaV0lg'
      );
    }
  }

  async setBody6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody6', parentSpanInst);
    try {
      let adtnl_dtls = JSON.parse(bh.risk_item?.data?.addl_details);
      adtnl_dtls['deductible'] = 2000;
      adtnl_dtls['insuredValue'] = adtnl_dtls.Rec_SI;
      adtnl_dtls['vehicleRepairType'] = 'Out of Agency';

      bh.body = {
        filter: {
          id: bh.input.body.id,
        },
        risk_item: {
          product_code: bh.input.body.product_code,
          addl_details: JSON.stringify(adtnl_dtls),
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.linkRiskAndProduct(bh, parentSpanInst);
      //appendnew_next_setBody6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sujpoT8a5L8BCLl8',
        spanInst,
        'setBody6'
      );
    }
  }

  async linkRiskAndProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'linkRiskAndProduct',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.linkRiskAndProduct(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse5(bh, parentSpanInst);
      //appendnew_next_linkRiskAndProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y1k3WWouQiWx7V8u',
        spanInst,
        'linkRiskAndProduct'
      );
    }
  }

  async setResponse5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse5',
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
      bh = await this.sd_OjFHlEEr7JuQ4EaR(bh, parentSpanInst);
      //appendnew_next_setResponse5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aZvWi0FDt0knRADT',
        spanInst,
        'setResponse5'
      );
    }
  }

  async sd_OjFHlEEr7JuQ4EaR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OjFHlEEr7JuQ4EaR',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](bh.statusCode, 200, undefined, undefined)
      ) {
        bh = await this.sd_YtvRGaQTPPuVZqVD(bh, parentSpanInst);
      } else {
        bh = await this.sd_ApWym1IBCpdSGvoT(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OjFHlEEr7JuQ4EaR',
        spanInst,
        'sd_OjFHlEEr7JuQ4EaR'
      );
    }
  }

  async sd_YtvRGaQTPPuVZqVD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YtvRGaQTPPuVZqVD',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.deleteLinkedAddons(
          spanInst,
          bh.body.filter.id
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ApWym1IBCpdSGvoT(bh, parentSpanInst);
      //appendnew_next_sd_YtvRGaQTPPuVZqVD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YtvRGaQTPPuVZqVD',
        spanInst,
        'sd_YtvRGaQTPPuVZqVD'
      );
    }
  }

  async sd_ApWym1IBCpdSGvoT(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ApWym1IBCpdSGvoT');
    }
  }

  async sd_UeCL4lUXkhXUy0AM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.risk_item);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UeCL4lUXkhXUy0AM');
    }
  }

  async checkFileValidV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkFileValidV2',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files?.file?.[0];
      if (bh.file) {
        let file_name = bh.file.originalname || '';
        let name_parts = file_name.split('.');
        let extension = name_parts[name_parts.length - 1];
        bh.validExt = ['xls', 'xlsx'];
        bh.status = bh.validExt.includes(extension);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J2IzBkkeJkm6jbZr(bh, parentSpanInst);
      //appendnew_next_checkFileValidV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8jHhRiZ4peDjrrq8',
        spanInst,
        'checkFileValidV2'
      );
    }
  }

  async sd_J2IzBkkeJkm6jbZr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J2IzBkkeJkm6jbZr',
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
        bh = await this.extractExcelDataV2(bh, parentSpanInst);
      } else {
        bh = await this.sd_iSKwnveBIeFKK7VN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J2IzBkkeJkm6jbZr',
        spanInst,
        'sd_J2IzBkkeJkm6jbZr'
      );
    }
  }

  async extractExcelDataV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'extractExcelDataV2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance: SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows =
        SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5e.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_ZKUlXHS823IfSl5eInstance.excelToJson(
          spanInst,
          bh.file
        );
      bh.vehList = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody7V2(bh, parentSpanInst);
      //appendnew_next_extractExcelDataV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WG9PTkPlSftSXI14',
        spanInst,
        'extractExcelDataV2'
      );
    }
  }

  async setBody7V2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setBody7V2',
      parentSpanInst
    );
    try {
      bh.hasVehDetls = false;
      if (
        bh.vehList &&
        bh.vehList.length &&
        (bh.vehList[0].Sequence_Number || bh.vehList[0].Custom_Number)
      ) {
        bh.hasVehDetls = true;
      }

      bh.payload = {
        filter: {
          quote_id: Number(bh.input.body.quote_id),
        },
      };

      bh.usageTypePayload = {
        search_type: 'usage_type_sme',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fetchRiskItemsV2(bh, parentSpanInst);
      //appendnew_next_setBody7V2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k06gslLnrLCvmcJQ',
        spanInst,
        'setBody7V2'
      );
    }
  }

  async fetchRiskItemsV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fetchRiskItemsV2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.payload
        );
      bh.riskList = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_amsnz272uaQMY2O4(bh, parentSpanInst);
      //appendnew_next_fetchRiskItemsV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_01is4MVagQtrsAPg',
        spanInst,
        'fetchRiskItemsV2'
      );
    }
  }

  async sd_amsnz272uaQMY2O4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_amsnz272uaQMY2O4',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.hasVehDetls,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_AYuYDk0zhVUwjCSa(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.hasVehDetls,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.serResponse1V2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_amsnz272uaQMY2O4',
        spanInst,
        'sd_amsnz272uaQMY2O4'
      );
    }
  }

  async sd_AYuYDk0zhVUwjCSa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AYuYDk0zhVUwjCSa',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance: SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings =
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMC.system_settings.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_42PdwLrbQgkt7zMCInstance.getSystemSettings(spanInst)
      );
      const SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance: SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows =
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKj.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_DNXoCjln8FbFNtKjInstance.searchMasterData(
          spanInst,
          bh.usageTypePayload
        )
      );

      bh.resArray = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkOverflowV2(bh, parentSpanInst);
      //appendnew_next_sd_AYuYDk0zhVUwjCSa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AYuYDk0zhVUwjCSa',
        spanInst,
        'sd_AYuYDk0zhVUwjCSa'
      );
    }
  }

  async checkOverflowV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkOverflowV2',
      parentSpanInst
    );
    try {
      let vehListObj = [];
      bh.system_settings = bh.resArray[0].local.system_settings;
      bh.use_type_list = bh.resArray[1].local.result;

      bh.vehList.forEach((veh, index) => {
        let seqNum = veh?.Sequence_Number || veh?.Custom_Number;
        let risk_filter = bh.riskList.filter((risk) => risk.id_no == seqNum);
        let veh_filter = vehListObj.filter((x) => {
          let seqNum_veh = x?.Sequence_Number || x?.Custom_Number;
          return seqNum_veh == seqNum;
        });

        if (!(risk_filter.length > 0) && !(veh_filter.length > 0)) {
          vehListObj.push(veh);
        }
      });

      bh.vehList = vehListObj;

      let risklistLength =
        Number(
          bh.riskList.filter(
            (X) =>
              X.addl_details?.['eska_make'] && X.addl_details?.['eska_model']
          )?.length
        ) || 0;
      let vehicle_allowed_sme = bh.system_settings?.find(
        (ele) => ele.code == 'VEHICLES_ALLOWED_SME'
      ).value;
      let totalLength = Number(bh.vehList?.length) + risklistLength;
      if (totalLength > Number(vehicle_allowed_sme)) {
        bh.bucketOverFlow = true;
      } else {
        bh.bucketOverFlow = false;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m9NlfUW2tH5JaXQc(bh, parentSpanInst);
      //appendnew_next_checkOverflowV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FUX0NbBB87aSvVmA',
        spanInst,
        'checkOverflowV2'
      );
    }
  }

  async sd_m9NlfUW2tH5JaXQc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m9NlfUW2tH5JaXQc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.bucketOverFlow,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.serResponse2V2(bh, parentSpanInst);
      } else {
        bh = await this.getVehDetailsV2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m9NlfUW2tH5JaXQc',
        spanInst,
        'sd_m9NlfUW2tH5JaXQc'
      );
    }
  }

  async serResponse2V2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'serResponse2V2',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.riskList.length > 0 ? 200 : 404;

      bh.local.risk_items = {
        count: 0,
        data: bh.riskList,
      };
      bh.local.risk_items['error_code'] = 'UPLOAD_RISK_SME_OVERFLOW_ERROR';

      this.tracerService.sendData(spanInst, bh);
      await this.sd_U9MwnCotrAWoKSzi(bh, parentSpanInst);
      //appendnew_next_serResponse2V2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_slYuMRaaFd9YQC9r',
        spanInst,
        'serResponse2V2'
      );
    }
  }

  async sd_U9MwnCotrAWoKSzi(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.local.risk_items);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9MwnCotrAWoKSzi');
    }
  }

  async getVehDetailsV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getVehDetailsV2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance: SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21.flows =
        SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_0QTJyn59fJjzgG21Instance.getMultipleVehicleDetailsV1(
          spanInst,
          bh.vehList,
          bh.input.body.id_no
        );
      bh.vehicleDetails = outputVariables.local.vehicleDetails;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody8V2(bh, parentSpanInst);
      //appendnew_next_getVehDetailsV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xJYnLyfmUdUMuivM',
        spanInst,
        'getVehDetailsV2'
      );
    }
  }

  async setBody8V2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setBody8V2',
      parentSpanInst
    );
    try {
      bh.vehicleDetails = bh.vehicleDetails || [];
      bh.risk_items = [];
      bh.vehicleDetails.forEach((X) => {
        let id_type = X['id_type'];
        let id_no = Number(X['id_no']);
        X['purposeOfUsingVehicle'] = getPurposeOfUse(
          id_no,
          X.purposeOfUsingVehicle
        );
        delete X['id_type'];
        delete X['id_no'];
        bh.risk_items.push({
          id_type: id_type,
          id_no: id_no,
          quote_id: Number(bh.input.body.quote_id),
          addl_details: mapAddl_dtls(X),
        });
      });
      bh.body = {
        risk_item: bh.risk_items,
      };
      function mapAddl_dtls(adtnlDtls) {
        let defaultValues = {
          adaptiveCruiseCtrl: false,
          antiSlipBreakingSystem: false,
          antiTheftAlarm: false,
          autoBreakingSystem: false,
          cruiseCtrl: false,
          deductible: 2000,
          distanceTraveled: 1000,
          engineVolume: '2',
          frontCamera: false,
          frontSensor: false,
          insuredValue: adtnlDtls.Rec_SI, //as per sanjay, default should bt recommended
          modificationToCar: false,
          modificationToCarDesc: '',
          parkingDuringNight: 'Street',
          // "purposeOfUsingVehicle": "283",
          rearCamera: false,
          rearParkingSensor: false,
          threeSixtyDegreeCamera: false,
          transmission: 'Automatic',
          vehicleRepairType: 'Out of Agency',
          numOfSeat: '5',
        };
        let mapedDtls = { ...adtnlDtls, ...defaultValues };
        return JSON.stringify(mapedDtls);
      }

      function getPurposeOfUse(id_no, purposeOfUsingVehicle) {
        bh.useCode = purposeOfUsingVehicle;
        let vehcl = bh.vehList.filter(
          (Y) => Y.Sequence_Number == id_no || Y.Custom_Number == id_no
        );
        if (vehcl.length) {
          let use = vehcl[0].Use;
          if (use) {
            use = use.substring(use.indexOf('-') + 2);
          }
          bh.useCode =
            bh.use_type_list.filter((X) => X.name_en == use)[0]?.id ||
            purposeOfUsingVehicle ||
            '283';
        }
        return bh.useCode;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addRiskItemsV2(bh, parentSpanInst);
      //appendnew_next_setBody8V2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iBc8iGlkc0Ki78GZ',
        spanInst,
        'setBody8V2'
      );
    }
  }

  async addRiskItemsV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addRiskItemsV2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.addMultipleRiskItem(
          spanInst,
          bh.body
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setBody9V2(bh, parentSpanInst);
      //appendnew_next_addRiskItemsV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pVu1IDDOSsOXjzbE',
        spanInst,
        'addRiskItemsV2'
      );
    }
  }

  async setBody9V2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setBody9V2',
      parentSpanInst
    );
    try {
      // let exclDataIds = []
      // let addVehlIds = []

      // bh.vehList.forEach(ele => {
      //     exclDataIds.push(ele.Custom_Number || ele.Sequence_Number)
      // })

      // bh.result.forEach(ele => {
      //     addVehlIds.push(ele.id_no)
      // })

      // bh.invalidIds = exclDataIds.filter(X => !addVehlIds.includes(X))

      bh.payload = {
        filter: {
          quote_id: Number(bh.input.body.quote_id),
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRiskItemsV2(bh, parentSpanInst);
      //appendnew_next_setBody9V2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vNBOwirx2heM46B5',
        spanInst,
        'setBody9V2'
      );
    }
  }

  async getRiskItemsV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRiskItemsV2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance: SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows =
        SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhC.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_PtiPfqJ7hs5CwwhCInstance.getRiskItem(
          spanInst,
          bh.payload
        );
      bh.local.riskList = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.serResponseV2(bh, parentSpanInst);
      //appendnew_next_getRiskItemsV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nv0jZ9bgpbEO125k',
        spanInst,
        'getRiskItemsV2'
      );
    }
  }

  async serResponseV2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'serResponseV2',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.local.riskList.length > 0 ? 200 : 404;

      bh.local.risk_items = {
        count: bh.local.riskList.length,
        data: bh.local.riskList,
        // "invaliIds": bh.invalidIds
      };

      if (bh.result.length > 0) {
        bh.local.risk_items['message'] =
          bh.result.length + ' vehicles added successfully';
      } else {
        bh.local.risk_items['error_code'] = 'UPLOAD_RISK_SME_DUPLICATE_ERROR';
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CGo77Uvc3lvC55OR(bh, parentSpanInst);
      //appendnew_next_serResponseV2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4JRjZDzvuZ0sFqWL',
        spanInst,
        'serResponseV2'
      );
    }
  }

  async sd_CGo77Uvc3lvC55OR(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.local.risk_items);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CGo77Uvc3lvC55OR');
    }
  }

  async serResponse1V2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'serResponse1V2',
      parentSpanInst
    );
    try {
      bh.statusCode = bh.riskList.length > 0 ? 200 : 404;

      bh.local.risk_items = {
        count: 0,
        data: bh.riskList,
      };
      bh.local.risk_items['error_code'] = 'UPLOAD_RISK_SME_ERROR';

      this.tracerService.sendData(spanInst, bh);
      await this.sd_A35m3hOHF6UQXOG0(bh, parentSpanInst);
      //appendnew_next_serResponse1V2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NYHsGbSt3OMmt7Qg',
        spanInst,
        'serResponse1V2'
      );
    }
  }

  async sd_A35m3hOHF6UQXOG0(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.local.risk_items);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A35m3hOHF6UQXOG0');
    }
  }

  async sd_iSKwnveBIeFKK7VN(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send({ error_code: 'UPLOAD_RISK_SME_ERROR' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iSKwnveBIeFKK7VN');
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
  //appendnew_flow_risk_item_apis_Catch
}
