// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i from './flows'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/customer/renewals`,
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
          bh = await this.sd_90cGrBtlvofSsIxq(bh, parentSpanInst);
          //appendnew_next_sd_OVm02RbyQsqVp7yg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OVm02RbyQsqVp7yg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/renew`,
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
          bh = await this.sd_h9u23USC8aw7pVh0(bh, parentSpanInst);
          //appendnew_next_sd_oDOwybCJ9l6VcCXO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oDOwybCJ9l6VcCXO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/download`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_fre41x3LUl4kPubK(bh, parentSpanInst);
          //appendnew_next_sd_tYvdkh3qMzEqRXFM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tYvdkh3qMzEqRXFM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async sd_90cGrBtlvofSsIxq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_90cGrBtlvofSsIxq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fgPiJB21TihYTF6iInstance: SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i.flows =
        SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fgPiJB21TihYTF6iInstance.getRenewalList(
          spanInst,
          bh.input.body
        );
      bh.local.response = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_NT9hmR43GULwxCEQ(bh, parentSpanInst);
      //appendnew_next_sd_90cGrBtlvofSsIxq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_90cGrBtlvofSsIxq',
        spanInst,
        'sd_90cGrBtlvofSsIxq'
      );
    }
  }

  async sd_NT9hmR43GULwxCEQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NT9hmR43GULwxCEQ');
    }
  }

  async sd_h9u23USC8aw7pVh0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h9u23USC8aw7pVh0',
      parentSpanInst
    );
    try {
      if (!bh.input.body.old_policy_id || !bh.input.body.old_policy_number) {
        throw new Error('invalid old_policy_id / old_policy_number');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TB12Wrrw3dKJQbo0(bh, parentSpanInst);
      //appendnew_next_sd_h9u23USC8aw7pVh0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h9u23USC8aw7pVh0',
        spanInst,
        'sd_h9u23USC8aw7pVh0'
      );
    }
  }

  async sd_TB12Wrrw3dKJQbo0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TB12Wrrw3dKJQbo0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_fgPiJB21TihYTF6iInstance: SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i.flows =
        SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_fgPiJB21TihYTF6iInstance.renewPolicy(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_TNhDb35W9HjZdymv(bh, parentSpanInst);
      //appendnew_next_sd_TB12Wrrw3dKJQbo0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TB12Wrrw3dKJQbo0',
        spanInst,
        'sd_TB12Wrrw3dKJQbo0'
      );
    }
  }

  async sd_TNhDb35W9HjZdymv(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        Connection: 'keep-alive',
        'X-Timeout-Milliseconds': '180000',
      });

      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TNhDb35W9HjZdymv');
    }
  }

  async sd_tJhTT8xGsaipVXsI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tJhTT8xGsaipVXsI',
      parentSpanInst
    );
    try {
      bh.local.response = {
        status: 500,
        error: bh.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vnrkSuI4dF92KhyJ(bh, parentSpanInst);
      //appendnew_next_sd_tJhTT8xGsaipVXsI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tJhTT8xGsaipVXsI',
        spanInst,
        'sd_tJhTT8xGsaipVXsI'
      );
    }
  }

  async sd_vnrkSuI4dF92KhyJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vnrkSuI4dF92KhyJ');
    }
  }

  async sd_fre41x3LUl4kPubK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fre41x3LUl4kPubK',
      parentSpanInst
    );
    try {
      const axios = require('axios');
      const fs = require('fs'); // If writing to a file is necessary

      bh.url = process.env.INT_MS_URL + 'policy/download';

      bh.body = bh.input.body;
      bh.headers = {
        'Content-Type': 'application/json',
      };
      axios
        .post(bh.url, bh.body, {
          headers: {
            ...bh.headers,
          },
          responseType: 'stream', // Ensure response data is treated as a stream
        })
        .then((resp) => {
          const contentDisposition = resp.headers['content-disposition'];
          const contentType = resp.headers['content-type'];

          // Set response headers
          bh.web.res.setHeader('content-disposition', contentDisposition);
          bh.web.res.setHeader('Content-type', contentType);
          resp.data.pipe(bh.web.res);
        })
        .catch((error) => {
          console.error('Error:', error);
          bh.web.res.status(500).send({ err_code: 'POLICY_DOWNLOAD_ERROR' });
        });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_fre41x3LUl4kPubK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fre41x3LUl4kPubK',
        spanInst,
        'sd_fre41x3LUl4kPubK'
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
      (await this.sd_dL8ew6twWiLwHcCe(bh, parentSpanInst))
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
  async sd_dL8ew6twWiLwHcCe(bh, parentSpanInst) {
    const nodes = [
      'sd_90cGrBtlvofSsIxq',
      'sd_h9u23USC8aw7pVh0',
      'sd_TB12Wrrw3dKJQbo0',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_tJhTT8xGsaipVXsI(bh, parentSpanInst);
      //appendnew_next_sd_dL8ew6twWiLwHcCe
      return true;
    }
    return false;
  }
  //appendnew_flow_apis_Catch
}
