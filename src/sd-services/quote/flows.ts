// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg from '../common/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO from '../master_data/flows'; //_splitter_
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

  async quoteSummary(
    parentSpanInst,
    id: any = undefined,
    reference_number: any = undefined,
    phone_no: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'quoteSummary',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
        reference_number,
        phone_no,
      },
      local: {
        status_code: undefined,
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.setUrl4(bh, parentSpanInst);
      //appendnew_next_quoteSummary
      return (
        // formatting output variables
        {
          input: {},
          local: {
            status_code: bh.local.status_code,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ifXvNLtpBx9yu0sE',
        spanInst,
        'quoteSummary'
      );
    }
  }

  async downloadQuotePdf(
    parentSpanInst,
    quote_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'downloadQuotePdf',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_data,
      },
      local: {
        PdfFileBuffer: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getDateFields0(bh, parentSpanInst);
      //appendnew_next_downloadQuotePdf
      return (
        // formatting output variables
        {
          input: {},
          local: {
            PdfFileBuffer: bh.local.PdfFileBuffer,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4H3SpIseYl8uIiUD',
        spanInst,
        'downloadQuotePdf'
      );
    }
  }

  async getMasterdata(parentSpanInst, event: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getMasterdata',
      parentSpanInst
    );
    let bh: any = {
      input: {
        event,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.masterDataCall(bh, parentSpanInst);
      //appendnew_next_getMasterdata
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
        'sd_1cwwmLF9o64VTUML',
        spanInst,
        'getMasterdata'
      );
    }
  }
  //appendnew_flow_flows_start

  async setUrl4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('setUrl4', parentSpanInst);
    try {
      bh.url = process.env.DB_API_URL + 'quote/summary';
      bh.body = {
        reference_number: bh.input.reference_number || undefined,
        id: bh.input.id || undefined,
        phone_no: bh.input.phone_no || undefined,
        query_mode: 'CA',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpGetQuote(bh, parentSpanInst);
      //appendnew_next_setUrl4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dk9VwAFiyobzAU3m',
        spanInst,
        'setUrl4'
      );
    }
  }

  async httpGetQuote(bh, parentSpanInst) {
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

      bh.response = responseMsg;
      bh = await this.setResponse4(bh, parentSpanInst);
      //appendnew_next_httpGetQuote
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JeEfB6FADcjgKztn');
    }
  }

  async setResponse4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'setResponse4',
      parentSpanInst
    );
    try {
      bh.local.result = bh.response.payload;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_setResponse4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PHkiaKjUPHXkjQFQ',
        spanInst,
        'setResponse4'
      );
    }
  }

  async getDateFields0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDateFields0',
      parentSpanInst
    );
    try {
      bh.effective_date =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.quote_date = bh.input.quote_data?.quote_details?.created_date;
      bh.separator = '-';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.convertDate0(bh, parentSpanInst);
      //appendnew_next_getDateFields0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EUFIjVqXDC5zeAFH',
        spanInst,
        'getDateFields0'
      );
    }
  }

  async convertDate0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'convertDate0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbgInstance: SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg.flows =
        SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbgInstance.ddmmyyy(
          spanInst,
          bh.effective_date,
          bh.separator
        );
      bh.effective_date = outputVariables.local.outputDate;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.convertDate1(bh, parentSpanInst);
      //appendnew_next_convertDate0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DjM15HpxRFu4t5tZ',
        spanInst,
        'convertDate0'
      );
    }
  }

  async convertDate1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'convertDate1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbgInstance: SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg.flows =
        SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbgInstance.ddmmyyy(
          spanInst,
          bh.quote_date,
          bh.separator
        );
      bh.quote_date = outputVariables.local.outputDate;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resultMapping(bh, parentSpanInst);
      //appendnew_next_convertDate1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HYpgUBUD3ZecELkd',
        spanInst,
        'convertDate1'
      );
    }
  }

  async resultMapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resultMapping',
      parentSpanInst
    );
    try {
      const converter = require('number-to-words');
      //quote summary data
      let quote_summary = bh.input.quote_data;
      quote_summary.quote_details.effective_date = bh.effective_date;
      quote_summary.quote_details.quote_date = bh.quote_date;
      //get vehicle names from yakeen codes
      let vehicleDetails = [];
      const asyncOperation = (data) => {
        return new Promise((resolve, reject) => {
          try {
            if (data) {
              let body = {
                search_type: 'vehicle',
                filter: {
                  yakeen_make: data?.addl_details?.make.toString(),
                  yakeen_model: data?.addl_details?.model.toString(),
                },
              };
              let obj = this.getMasterdata(parentSpanInst, body);

              resolve(obj);
            }
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(quote_summary?.risk_item_details.map(asyncOperation))
        .then((results) => {
          vehicleDetails = results;
        })
        .catch((error) => {
          console.error(error);
        });

      if (vehicleDetails.length) {
        vehicleDetails.forEach((ele) => {
          ele.local.result.forEach((x) => {
            quote_summary?.risk_item_details.map((y) => {
              if (y.addl_details.make == x.yakeen_make) {
                y['make_name'] = x.yakeen_make_en;
                y['model_name'] = x.yakeen_model_en;
              }
              quote_summary?.driver_details.map((z) => {
                z.risk_items.forEach((i) => {
                  if (i == y.id) {
                    z['vehicle_name'] = x.yakeen_make_en;
                  }
                });
              });
              quote_summary.addons_details.map((j) => {
                j.risk_id.forEach((k) => {
                  if (k == y.id) {
                    j['vehicle_name'] = x.yakeen_make_en;
                  }
                });
              });
            });
          });
        });
      }

      let addonDetails = [];
      const getAddonsDesc = (data) => {
        return new Promise((resolve, reject) => {
          try {
            if (data) {
              let body = {
                search_type: 'add-ons',
                filter: {
                  add_on_id: data.add_on_code,
                },
              };
              let obj = this.getMasterdata(parentSpanInst, body);
              resolve(obj);
            }
          } catch (e) {
            reject(e);
          }
        });
      };

      await Promise.all(quote_summary?.addons_details.map(getAddonsDesc))
        .then((results) => {
          addonDetails = results;
        })
        .catch((error) => {
          console.error(error);
        });

      if (addonDetails.length) {
        addonDetails.forEach((ele) => {
          ele.local.result.forEach((el) => {
            quote_summary?.addons_details.map((x) => {
              if (el.add_on_id == x.add_on_code) {
                x['add_on_desc'] = el.add_on_desc;
              }
            });
          });
        });
      }

      let newArr = [];
      quote_summary?.risk_item_details.forEach((ele) => {
        //convert to JSON - start
        if (typeof ele.premium_details == 'string')
          ele = JSON.parse(ele.premium_details);
        else ele = ele.premium_details;
        //convert to JSON - end
        newArr.push({
          ncdAmount: ele.NCDAmount,
          loyalty: ele.LoyaltyDiscountAmount,
          multiVehicleDiscount: ele.MultiVehicleDiscountAmount,
          totalPremium: ele.TotalPremium,
          tplBase: ele.TPLBase,
          vatAmount: ele.VATAmount,
          itdPremium: ele.ITDPremium,
          policyPremium: ele.PolicyPremium,
          totalIncVat: ele.VATAmount + ele.TotalPremium,
        });
      });

      let total = newArr.reduce((acc, obj) => {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            acc[key] = (acc[key] || 0) + obj[key];
          }
        }
        return acc;
      }, {});

      if (!isNaN(total.totalIncVat)) {
        quote_summary.quote_details.total_amount_words_en = converter.toWords(
          total.totalIncVat
        );
      }

      function formatNumber(num) {
        return num.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      }

      let formattedValue = {};
      for (let key in total) {
        if (total.hasOwnProperty(key)) {
          formattedValue[key] = formatNumber(total[key]);
        }
      }

      quote_summary.premium_summary = formattedValue;

      bh.local.quote_summary = quote_summary;

      bh.local.PdfFileBuffer = bh.local.quote_summary;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y9ZJ4VSXFS7iLQEr(bh, parentSpanInst);
      //appendnew_next_resultMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zjYaxBVSQM2eFMLB',
        spanInst,
        'resultMapping'
      );
    }
  }

  async sd_Y9ZJ4VSXFS7iLQEr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y9ZJ4VSXFS7iLQEr',
      parentSpanInst
    );
    try {
      bh.url = process.env.QUOTAION_TEMPLATE_URL;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.strapiHttp(bh, parentSpanInst);
      //appendnew_next_sd_Y9ZJ4VSXFS7iLQEr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y9ZJ4VSXFS7iLQEr',
        spanInst,
        'sd_Y9ZJ4VSXFS7iLQEr'
      );
    }
  }

  async strapiHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'arraybuffer',
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

      bh.data = responseMsg;
      bh = await this.strapiTemplate(bh, parentSpanInst);
      //appendnew_next_strapiHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Wn06vAvXuFY0oIQY');
    }
  }

  async strapiTemplate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'strapiTemplate',
      parentSpanInst
    );
    try {
      const buffer = Buffer.from(bh.data?.payload);
      bh.templateSource = buffer.toString('utf8');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.generatePdf(bh, parentSpanInst);
      //appendnew_next_strapiTemplate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qTdResUjIf9q64Vi',
        spanInst,
        'strapiTemplate'
      );
    }
  }

  async generatePdf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generatePdf',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const handlebars = require('handlebars');
      const html_to_pdf = require('html-pdf-node');
      const data = { ...bh.local.quote_summary };
      const template = handlebars.compile(bh.templateSource);
      const renderedHtml = template(data);

      bh.html_template = renderedHtml;
      bh.file_options = {
        format: 'A4',
        landscape: false,
        printBackground: true,
        margin: {
          top: '15px',
          right: '15px',
          left: '15px',
        },
      };
      bh.local.PdfFileBuffer = await html_to_pdf.generatePdf(
        { content: bh.html_template },
        bh.file_options
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_generatePdf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U77I8S9O5KkjaJLW',
        spanInst,
        'generatePdf'
      );
    }
  }

  async masterDataCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'masterDataCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance: SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows =
        SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiOInstance.searchMasterData(
          spanInst,
          bh.input.event
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_masterDataCall
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rCSe3VVPHHCIrIwE',
        spanInst,
        'masterDataCall'
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
