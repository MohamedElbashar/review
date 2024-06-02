// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o from '../Redis/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi from './yakeen_flows'; //_splitter_
//append_imports_end
export class yakeen_apis {
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
    this.serviceName = 'yakeen_apis';
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
      instance = new yakeen_apis(
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
    //appendnew_flow_yakeen_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: yakeen_apis');
    //appendnew_flow_yakeen_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: yakeen_apis');

    this.app['post'](
      `${this.serviceBasePath}/yakeen/customerinfo/nid`,
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
          bh = await this.setCache0(bh, parentSpanInst);
          //appendnew_next_sd_h9EyxRTfq9uJIDtW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_h9EyxRTfq9uJIDtW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/yakeen/customerinfo/iqama`,
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
          bh = await this.setCache1(bh, parentSpanInst);
          //appendnew_next_sd_PwONz41ZDpYhNPoE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PwONz41ZDpYhNPoE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/yakeen/vehicleinfo/sequence`,
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
          bh = await this.setCache2(bh, parentSpanInst);
          //appendnew_next_sd_BOyP040vFX3DxQEl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BOyP040vFX3DxQEl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/yakeen/vehicleinfo/custom`,
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
          bh = await this.setCache3(bh, parentSpanInst);
          //appendnew_next_sd_gaDnwafPjYyduroN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gaDnwafPjYyduroN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/elm/validate/customer`,
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
          bh = await this.setCache4(bh, parentSpanInst);
          //appendnew_next_sd_pXDINapdaXZEumQG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pXDINapdaXZEumQG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_yakeen_apis_HttpIn
  }
  //   service flows_yakeen_apis

  //appendnew_flow_yakeen_apis_start

  async setCache0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache0', parentSpanInst);
    try {
      bh.key = `YAKEEN_NIN_${bh.input.body.id_no}_${bh.input.body.dob}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache0(bh, parentSpanInst);
      //appendnew_next_setCache0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z0xXDkIRtVD4Ro8f',
        spanInst,
        'setCache0'
      );
    }
  }

  async getCache0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache0', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6YhXEYcv4XsZgGHh(bh, parentSpanInst);
      //appendnew_next_getCache0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uJqDAghT8b3g5zjr',
        spanInst,
        'getCache0'
      );
    }
  }

  async sd_6YhXEYcv4XsZgGHh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6YhXEYcv4XsZgGHh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInfoNid(bh, parentSpanInst);
      } else {
        bh = await this.sd_MvoD9DmZsFkUogua(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6YhXEYcv4XsZgGHh',
        spanInst,
        'sd_6YhXEYcv4XsZgGHh'
      );
    }
  }

  async getInfoNid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInfoNid',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance: SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows =
        SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance.getCitizenInfo(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.dob
        );
      bh.response = outputVariables.local.result;
      bh.status = outputVariables.local.status;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fyt8ubAS9dEQchYA(bh, parentSpanInst);
      //appendnew_next_getInfoNid
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KwoxB86RhyE9VUfO',
        spanInst,
        'getInfoNid'
      );
    }
  }

  async sd_fyt8ubAS9dEQchYA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fyt8ubAS9dEQchYA',
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
        bh = await this.storeCache0(bh, parentSpanInst);
      } else {
        bh = await this.sd_VgRxXfHhdEu7x9e8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fyt8ubAS9dEQchYA',
        spanInst,
        'sd_fyt8ubAS9dEQchYA'
      );
    }
  }

  async storeCache0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'storeCache0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );
      bh.data = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_VgRxXfHhdEu7x9e8(bh, parentSpanInst);
      //appendnew_next_storeCache0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JV7zSGhx29DQyozO',
        spanInst,
        'storeCache0'
      );
    }
  }

  async sd_VgRxXfHhdEu7x9e8(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VgRxXfHhdEu7x9e8');
    }
  }

  async sd_MvoD9DmZsFkUogua(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MvoD9DmZsFkUogua',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VgRxXfHhdEu7x9e8(bh, parentSpanInst);
      //appendnew_next_sd_MvoD9DmZsFkUogua
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MvoD9DmZsFkUogua',
        spanInst,
        'sd_MvoD9DmZsFkUogua'
      );
    }
  }

  async setCache1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache1', parentSpanInst);
    try {
      bh.key = `YAKEEN_IQAMA_${bh.input.body.id_no}_${bh.input.body.dob}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache1(bh, parentSpanInst);
      //appendnew_next_setCache1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XZHxRg8aTsTzches',
        spanInst,
        'setCache1'
      );
    }
  }

  async getCache1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache1', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tYrirACDupfjUmLD(bh, parentSpanInst);
      //appendnew_next_getCache1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hsYkjZxnQoohouRi',
        spanInst,
        'getCache1'
      );
    }
  }

  async sd_tYrirACDupfjUmLD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tYrirACDupfjUmLD',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInfoIqama(bh, parentSpanInst);
      } else {
        bh = await this.sd_xXIBHQQeaSvHgkWx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tYrirACDupfjUmLD',
        spanInst,
        'sd_tYrirACDupfjUmLD'
      );
    }
  }

  async getInfoIqama(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInfoIqama',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance: SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows =
        SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance.getalieninfobyiqamaanddob(
          spanInst,
          bh.input.body.id_no,
          bh.input.body.dob
        );
      bh.response = outputVariables.local.result;
      bh.status = outputVariables.local.status;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e2yZBbst50uyyEqh(bh, parentSpanInst);
      //appendnew_next_getInfoIqama
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r0oeS3nfn2aJpYQQ',
        spanInst,
        'getInfoIqama'
      );
    }
  }

  async sd_e2yZBbst50uyyEqh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e2yZBbst50uyyEqh',
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
        bh = await this.storeCache1(bh, parentSpanInst);
      } else {
        bh = await this.sd_zbwkpcavPsVIyPbG(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e2yZBbst50uyyEqh',
        spanInst,
        'sd_e2yZBbst50uyyEqh'
      );
    }
  }

  async storeCache1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'storeCache1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_zbwkpcavPsVIyPbG(bh, parentSpanInst);
      //appendnew_next_storeCache1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9kuNiVAeMbyvEAJk',
        spanInst,
        'storeCache1'
      );
    }
  }

  async sd_zbwkpcavPsVIyPbG(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zbwkpcavPsVIyPbG');
    }
  }

  async sd_xXIBHQQeaSvHgkWx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xXIBHQQeaSvHgkWx',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zbwkpcavPsVIyPbG(bh, parentSpanInst);
      //appendnew_next_sd_xXIBHQQeaSvHgkWx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xXIBHQQeaSvHgkWx',
        spanInst,
        'sd_xXIBHQQeaSvHgkWx'
      );
    }
  }

  async setCache2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache2', parentSpanInst);
    try {
      bh.key = `YAKEEN_SEQ_${bh.input.body.sequenceNumber}_${bh.input.body.ownerId}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache2(bh, parentSpanInst);
      //appendnew_next_setCache2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cq8nFQe3hAtiKcrn',
        spanInst,
        'setCache2'
      );
    }
  }

  async getCache2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache2', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FOKv0Fy0gs3q28HU(bh, parentSpanInst);
      //appendnew_next_getCache2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Nu21ffOYL2nHrM4',
        spanInst,
        'getCache2'
      );
    }
  }

  async sd_FOKv0Fy0gs3q28HU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FOKv0Fy0gs3q28HU',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInfoSeq(bh, parentSpanInst);
      } else {
        bh = await this.sd_okFWPEiFDv1tKOtz(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FOKv0Fy0gs3q28HU',
        spanInst,
        'sd_FOKv0Fy0gs3q28HU'
      );
    }
  }

  async getInfoSeq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInfoSeq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance: SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows =
        SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance.getcarinfobysequence(
          spanInst,
          bh.input.body.sequenceNumber,
          bh.input.body.ownerId,
          bh.input.body.locale_code
        );
      bh.response = outputVariables.local.result;
      bh.status = outputVariables.local.status;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0ag6JCFlx9n9l42I(bh, parentSpanInst);
      //appendnew_next_getInfoSeq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RWHu6ut31CRb1kCD',
        spanInst,
        'getInfoSeq'
      );
    }
  }

  async sd_0ag6JCFlx9n9l42I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0ag6JCFlx9n9l42I',
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
        bh = await this.storeCache2(bh, parentSpanInst);
      } else {
        bh = await this.sd_vxSQyDfBcZar4Mhh(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0ag6JCFlx9n9l42I',
        spanInst,
        'sd_0ag6JCFlx9n9l42I'
      );
    }
  }

  async storeCache2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'storeCache2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_vxSQyDfBcZar4Mhh(bh, parentSpanInst);
      //appendnew_next_storeCache2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vpqwuVnGj6YBX27s',
        spanInst,
        'storeCache2'
      );
    }
  }

  async sd_vxSQyDfBcZar4Mhh(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vxSQyDfBcZar4Mhh');
    }
  }

  async sd_okFWPEiFDv1tKOtz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_okFWPEiFDv1tKOtz',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vxSQyDfBcZar4Mhh(bh, parentSpanInst);
      //appendnew_next_sd_okFWPEiFDv1tKOtz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_okFWPEiFDv1tKOtz',
        spanInst,
        'sd_okFWPEiFDv1tKOtz'
      );
    }
  }

  async setCache3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache3', parentSpanInst);
    try {
      bh.key = `YAKEEN_CUSTOM_${bh.input.body.customNumber}_${bh.input.body.modelYear}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache3(bh, parentSpanInst);
      //appendnew_next_setCache3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zpYyyOLBqfCup2Nt',
        spanInst,
        'setCache3'
      );
    }
  }

  async getCache3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache3', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gqjczaIWOnR84HgA(bh, parentSpanInst);
      //appendnew_next_getCache3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LrymtNPGeiYCJcjM',
        spanInst,
        'getCache3'
      );
    }
  }

  async sd_gqjczaIWOnR84HgA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gqjczaIWOnR84HgA',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getInfoCustom(bh, parentSpanInst);
      } else {
        bh = await this.sd_KV9OP9khPAIGrncP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gqjczaIWOnR84HgA',
        spanInst,
        'sd_gqjczaIWOnR84HgA'
      );
    }
  }

  async getInfoCustom(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getInfoCustom',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance: SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows =
        SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance.getcarinfobycustom(
          spanInst,
          bh.input.body.customNumber,
          bh.input.body.modelYear
        );
      bh.response = outputVariables.local.result;
      bh.status = outputVariables.local.status;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bWh3SaNniGUZGN6S(bh, parentSpanInst);
      //appendnew_next_getInfoCustom
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D9Qi5jjUEo7epOY0',
        spanInst,
        'getInfoCustom'
      );
    }
  }

  async sd_bWh3SaNniGUZGN6S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bWh3SaNniGUZGN6S',
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
        bh = await this.storeCache3(bh, parentSpanInst);
      } else {
        bh = await this.sd_05tRpgZOLLpZfBmn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bWh3SaNniGUZGN6S',
        spanInst,
        'sd_bWh3SaNniGUZGN6S'
      );
    }
  }

  async storeCache3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'storeCache3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_05tRpgZOLLpZfBmn(bh, parentSpanInst);
      //appendnew_next_storeCache3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aLMoITQtTApHbGL5',
        spanInst,
        'storeCache3'
      );
    }
  }

  async sd_05tRpgZOLLpZfBmn(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_05tRpgZOLLpZfBmn');
    }
  }

  async sd_KV9OP9khPAIGrncP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KV9OP9khPAIGrncP',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_05tRpgZOLLpZfBmn(bh, parentSpanInst);
      //appendnew_next_sd_KV9OP9khPAIGrncP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KV9OP9khPAIGrncP',
        spanInst,
        'sd_KV9OP9khPAIGrncP'
      );
    }
  }

  async setCache4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setCache4', parentSpanInst);
    try {
      bh.key = `ELM_VALIDATE_${bh.input.body.nationalId}_${bh.input.body.mobileNumber}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCache4(bh, parentSpanInst);
      //appendnew_next_setCache4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H78tVCHWUBn1ZGrl',
        spanInst,
        'setCache4'
      );
    }
  }

  async getCache4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getCache4', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.getKey(
          spanInst,
          bh.key
        );
      bh.response = outputVariables.local.data;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mo5Q0dbugQd1gc9v(bh, parentSpanInst);
      //appendnew_next_getCache4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e1FA7lmSkP9iSYqR',
        spanInst,
        'getCache4'
      );
    }
  }

  async sd_mo5Q0dbugQd1gc9v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mo5Q0dbugQd1gc9v',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['null'](
          bh.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.validateMobile(bh, parentSpanInst);
      } else {
        bh = await this.sd_MHqpjAEvnCTZm6RO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mo5Q0dbugQd1gc9v',
        spanInst,
        'sd_mo5Q0dbugQd1gc9v'
      );
    }
  }

  async validateMobile(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateMobile',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance: SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows =
        SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi.yakeen_flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCiInstance.validateMobile(
          spanInst,
          bh.input.body.nationalId,
          bh.input.body.mobileNumber
        );
      bh.status = outputVariables.local.status;
      bh.statusCode = outputVariables.local.statusCode;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_c0VaLlN5N7n3OBA6(bh, parentSpanInst);
      //appendnew_next_validateMobile
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LtqegEN4bWF3JsAb',
        spanInst,
        'validateMobile'
      );
    }
  }

  async sd_c0VaLlN5N7n3OBA6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c0VaLlN5N7n3OBA6',
      parentSpanInst
    );
    try {
      bh.response = {
        status: bh.status,
      };

      if (bh.status) {
        bh.statusCode = bh.statusCode || 200;
      } else {
        bh.statusCode = bh.statusCode || 500;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vONmlBrW491suXvd(bh, parentSpanInst);
      //appendnew_next_sd_c0VaLlN5N7n3OBA6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c0VaLlN5N7n3OBA6',
        spanInst,
        'sd_c0VaLlN5N7n3OBA6'
      );
    }
  }

  async sd_vONmlBrW491suXvd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vONmlBrW491suXvd',
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
        bh = await this.storeCache4(bh, parentSpanInst);
      } else {
        bh = await this.sd_dHAtiib2en7pH3jG(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vONmlBrW491suXvd',
        spanInst,
        'sd_vONmlBrW491suXvd'
      );
    }
  }

  async storeCache4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'storeCache4',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance: SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows =
        SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6oInstance.setKey(
          spanInst,
          bh.key,
          bh.response
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_dHAtiib2en7pH3jG(bh, parentSpanInst);
      //appendnew_next_storeCache4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tQ0Yx9y3imvyZidG',
        spanInst,
        'storeCache4'
      );
    }
  }

  async sd_dHAtiib2en7pH3jG(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.statusCode).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dHAtiib2en7pH3jG');
    }
  }

  async sd_MHqpjAEvnCTZm6RO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MHqpjAEvnCTZm6RO',
      parentSpanInst
    );
    try {
      bh.statusCode = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dHAtiib2en7pH3jG(bh, parentSpanInst);
      //appendnew_next_sd_MHqpjAEvnCTZm6RO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MHqpjAEvnCTZm6RO',
        spanInst,
        'sd_MHqpjAEvnCTZm6RO'
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
  //appendnew_flow_yakeen_apis_Catch
}
