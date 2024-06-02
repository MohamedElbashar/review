// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr from './flows'; //_splitter_
//append_imports_end
export class master_data_apis {
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
    this.serviceName = 'master_data_apis';
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
      instance = new master_data_apis(
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
    //appendnew_flow_master_data_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: master_data_apis');
    //appendnew_flow_master_data_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: master_data_apis');

    this.app['post'](
      `${this.serviceBasePath}/master_data/search`,
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
          bh = await this.getMasterData(bh, parentSpanInst);
          //appendnew_next_sd_sY7RmmjD48KhNCq4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sY7RmmjD48KhNCq4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/master_data/products/list`,
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
          bh = await this.setBody0(bh, parentSpanInst);
          //appendnew_next_sd_Fxw1NJ6v42K7gMDA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Fxw1NJ6v42K7gMDA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/master_data/add_on/list`,
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
          //appendnew_next_sd_a0FlAXVJCShiYGT2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_a0FlAXVJCShiYGT2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_master_data_apis_HttpIn
  }
  //   service flows_master_data_apis

  //appendnew_flow_master_data_apis_start

  async getMasterData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getMasterData',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance: SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows =
        SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance.searchMasterData(
          spanInst,
          bh.input.body.search_type,
          bh.input.body.filter
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_H7sFsEOs2KdMB3j6(bh, parentSpanInst);
      //appendnew_next_getMasterData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gN5hjVKHDsPSbEiX',
        spanInst,
        'getMasterData'
      );
    }
  }

  async sd_H7sFsEOs2KdMB3j6(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H7sFsEOs2KdMB3j6');
    }
  }

  async setBody0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody0', parentSpanInst);
    try {
      if (!bh.input.body.customer_type_id) bh.input.body.customer_type_id = 1;

      bh.input.body.search_type =
        bh.input.body.customer_type_id === 1 ? 'plans_ind' : 'plans_sme';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPlans(bh, parentSpanInst);
      //appendnew_next_setBody0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NEcnb7EBu265nnUJ',
        spanInst,
        'setBody0'
      );
    }
  }

  async getPlans(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getPlans', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance: SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows =
        SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance.searchMasterData(
          spanInst,
          bh.input.body.search_type,
          undefined
        );
      bh.plans = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse0(bh, parentSpanInst);
      //appendnew_next_getPlans
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k0xhpvd3bAm6NLNe',
        spanInst,
        'getPlans'
      );
    }
  }

  async setResponse0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse0',
      parentSpanInst
    );
    try {
      bh.response = [];
      let plan_data = bh.plans;

      const uniqueProductIds = [
        ...new Set(plan_data.map((item) => item.product_id)),
      ];

      const result = uniqueProductIds.map((productId) => {
        const productInfo = plan_data.find(
          (item) => item.product_id === productId
        );
        const applicableAddOns = plan_data
          .filter(
            (item) => item.product_id === productId && item.add_on_cover === 'Y'
          )
          .map((item) => ({
            cover_id: item.cover_id,
            cover_name: item.cover_name,
            cover_name_ar: item.cover_name_ar,
          }));

        const applicableCoverages = plan_data
          .filter(
            (item) => item.product_id === productId && item.basic_cover === 'Y'
          )
          .map((item) => ({
            cover_id: item.cover_id,
            cover_name: item.cover_name,
            cover_name_ar: item.cover_name_ar,
          }));

        return {
          product_id: productId,
          short_name: productInfo ? productInfo.current_name : null,
          short_name_ar: productInfo ? productInfo.current_name_ar : null,
          long_name: productInfo ? productInfo.new_name : null,
          basic_coverage: applicableCoverages,
          applicable_add_ons: applicableAddOns,
        };
      });

      bh.response = result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_oGNjhqjYvb8ZSxiU(bh, parentSpanInst);
      //appendnew_next_setResponse0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pB3FINHSHiXotY6X',
        spanInst,
        'setResponse0'
      );
    }
  }

  async sd_oGNjhqjYvb8ZSxiU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oGNjhqjYvb8ZSxiU');
    }
  }

  async setBody1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setBody1', parentSpanInst);
    try {
      if (!bh.input.body.customer_type_id) bh.input.body.customer_type_id = 1;

      bh.input.body.search_type =
        bh.input.body.customer_type_id === 1 ? 'plans_ind' : 'plans_sme';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAddons(bh, parentSpanInst);
      //appendnew_next_setBody1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V0X3ATbxR8JK31mB',
        spanInst,
        'setBody1'
      );
    }
  }

  async getAddons(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getAddons', parentSpanInst);
    try {
      const SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance: SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows =
        SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_04g30ucrrWrZJ8HrInstance.searchMasterData(
          spanInst,
          bh.input.body.search_type,
          undefined
        );
      bh.addons = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.setResponse1(bh, parentSpanInst);
      //appendnew_next_getAddons
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iw4cxOR1XIhfjIQr',
        spanInst,
        'getAddons'
      );
    }
  }

  async setResponse1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse1',
      parentSpanInst
    );
    try {
      bh.response = [];
      let plan_data = bh.addons;

      const reducedData = plan_data.reduce((result, item) => {
        if (item.add_on_cover === 'Y') {
          let coverGroup = result.find(
            (group) => group.cover_group === item.cover_group
          );

          if (!coverGroup) {
            coverGroup = {
              cover_group: item.cover_group,
              add_ons: [],
            };
            result.push(coverGroup);
          }

          let addOn = coverGroup.add_ons.find(
            (addOn) => addOn.cover_id === item.cover_id
          );

          if (!addOn) {
            addOn = {
              cover_id: item.cover_id,
              cover_name: item.cover_name,
              cover_name_ar: item.cover_name_ar,
              applicable_products: [],
            };
            coverGroup.add_ons.push(addOn);
          }

          const existingProduct = addOn.applicable_products.find(
            (product) => product.product_id === item.product_id
          );

          if (!existingProduct) {
            addOn.applicable_products.push({
              product_id: item.product_id,
            });
          }
        }

        return result;
      }, []);

      bh.response = reducedData;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_kKW8QiDYxej5YX6a(bh, parentSpanInst);
      //appendnew_next_setResponse1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OBYXpErrt4oSPhnw',
        spanInst,
        'setResponse1'
      );
    }
  }

  async sd_kKW8QiDYxej5YX6a(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kKW8QiDYxej5YX6a');
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
  //appendnew_flow_master_data_apis_Catch
}
