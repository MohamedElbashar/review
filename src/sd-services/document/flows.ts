// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS from '../master_data/flows'; //_splitter_
import * as SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9 from '../strapi/flows'; //_splitter_
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

  async generatePdf(parentSpanInst, quote_data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generatePdf',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getDateFields0(bh, parentSpanInst);
      //appendnew_next_generatePdf
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q6jYwRUmg8HSCyr4',
        spanInst,
        'generatePdf'
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
        'sd_I6BBvt8jzo6eqC4O',
        spanInst,
        'getMasterdata'
      );
    }
  }

  async manualEntVehPdf(
    parentSpanInst,
    quote_data: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'manualEntVehPdf',
      parentSpanInst
    );
    let bh: any = {
      input: {
        quote_data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getDateFields1(bh, parentSpanInst);
      //appendnew_next_manualEntVehPdf
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NAlKBFH0kpzZPyuJ',
        spanInst,
        'manualEntVehPdf'
      );
    }
  }
  //appendnew_flow_flows_start

  async getDateFields0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDateFields0',
      parentSpanInst
    );
    try {
      bh.effective_date =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.quote_date =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.valid_till =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.day_to_add = 365;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_trg885B6ElkZY2lZ(bh, parentSpanInst);
      //appendnew_next_getDateFields0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mThJbDOZ2TISuPQr',
        spanInst,
        'getDateFields0'
      );
    }
  }

  async sd_trg885B6ElkZY2lZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_trg885B6ElkZY2lZ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9Instance: SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9.flows =
        SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9Instance.getStrapiTemplate(
          spanInst,
          'quote'
        );
      bh.templateSource = outputVariables.local.templateSource;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProducts(bh, parentSpanInst);
      //appendnew_next_sd_trg885B6ElkZY2lZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_trg885B6ElkZY2lZ',
        spanInst,
        'sd_trg885B6ElkZY2lZ'
      );
    }
  }

  async getProducts(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProducts',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1baOHKnauKP8XEGSInstance: SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS.flows =
        SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1baOHKnauKP8XEGSInstance.getProducts(
          spanInst,
          bh.input.quote_data?.quote_details?.id_type
        );
      bh.product_list = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resultMapping(bh, parentSpanInst);
      //appendnew_next_getProducts
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yz1G5RolLiv9P1GP',
        spanInst,
        'getProducts'
      );
    }
  }

  async resultMapping(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resultMapping',
      parentSpanInst
    );
    try {
      const moment = require('moment');

      let { quote_details, risk_item_details, driver_details, addons_details } =
        bh.input.quote_data;
      risk_item_details = risk_item_details.filter(
        (X) => X.addl_details?.['eska_make'] && X.addl_details?.['eska_model']
      );

      let vehicleDetails = [];
      let to = 'إلى';

      let valid_date_till = moment(bh.quote_date, 'DD-MM-YYYY')
        .add(364, 'days')
        .format('YYYY-MM-DD');

      risk_item_details.forEach((el) => {
        let obj = {
          seq: el.id_no,
          id: el.id,
          product_code: el.product_code,
          make_name: el.addl_details?.make_en,
          model_en: el.addl_details.model_en,
          plate_no: el.addl_details.plate_number,
          chassis_number: el.addl_details.chassis_number,
          premium: el.premium,
          Period_of_insurance: `${bh.quote_date} ${to} ${valid_date_till}`,
          Repair_Condition:
            el.addl_details.vehicleRepairType == 'Out of Agency'
              ? 'خارج الوكالة'
              : 'داخل الوكالة',
          Deductible: el.addl_details.deductible,
          no_claim_discount: el?.premium_details?.NCDAmount,
          multi_vehicle_discount:
            el?.premium_details?.MultiVehicleDiscountAmount,
          Scheme_Discount: el?.premium_details?.SchemeDiscountAmount,
          loyalty_discount: el?.premium_details?.LoyaltyDiscountAmount,
          vehicle_value:
            el?.premium_details?.PolicyPremium +
            Math.abs(el?.premium_details?.NCDAmount) +
            Math.abs(el?.premium_details?.SchemeDiscountAmount) +
            Math.abs(el?.premium_details?.MultiVehicleDiscountAmount) +
            Math.abs(el?.premium_details?.LoyaltyDiscountAmount),
          sum_insured: el?.addl_details.insuredValue,
          own_damage: null,
          itdpremium: el?.premium_details?.ITDPremium,
        };
        vehicleDetails.push(obj);
      });

      // Mapping Additionl Driver

      vehicleDetails.forEach((vehicle) => {
        vehicle.driver_details = []; // Initialize an empty array for driver details
        driver_details.forEach((driverInfo) => {
          if (driverInfo.risk_items.includes(vehicle.id.toString())) {
            vehicle.driver_details.push({
              driver_name: driverInfo.driver_name,
              id_no: driverInfo.id_no,
              dob: driverInfo.addl_details.dob,
            });
          }
        });
      });

      // Mapping Product

      bh.product_list.forEach((prod) => {
        vehicleDetails.map((veh) => {
          if (veh.product_code == prod.product_id) {
            veh['product'] = prod.short_name;
          }
        });
      });

      // Mapping Add Ons

      let addonMap = {};
      addons_details.forEach((item) => {
        item.risk_id.forEach((riskId) => {
          if (!addonMap[riskId]) {
            addonMap[riskId] = [];
          }
          addonMap[riskId].push(item);
        });
      });

      // Map Addon
      vehicleDetails.map((item) => {
        let matchedAddon = addonMap[item.id];
        if (matchedAddon) {
          matchedAddon.forEach((addonItem) => {
            if (addonItem.addl_details.cover_name === 'Natural Perils') {
              item.natural_perils = 'covered';
              item.natural_perils_sar = addonItem.addl_details.premium;
            } else if (
              addonItem.addl_details.cover_name === 'Windscreen + Fire + Theft'
            ) {
              item.windscreen_fire_theft = 'covered';
              item.windscreen_fire_theft_sar = addonItem.addl_details.premium;
            } else if (
              addonItem.addl_details.cover_name ===
              'Geographical Extension Coverage'
            ) {
              item.geo_ext_cov = 'covered';
              item.geo_ext_cov_sar = addonItem.addl_details.premium;
            } else if (
              addonItem.addl_details.cover_name === 'Roadside Assistance'
            ) {
              item.road_assistance = 'covered';
              item.road_assistance_sar = addonItem.addl_details.premium;
            } else if (
              addonItem.addl_details.cover_name ===
              "Replacement for Motor vehicle's rent"
            ) {
              item.replacement_car_coverage = 'covered';
              item.replacement_car_coverage_sar =
                addonItem.addl_details.premium;
            } else if (
              addonItem.addl_details.cover_name ===
              'Personal Accident coverage (Driver and Passenger)'
            ) {
              item.personal_accident_coverage = 'covered';
              item.personal_accident_coverage_sar =
                addonItem.addl_details.premium;
            }
          });
        }
        return item;
      });

      // Premium Breakup

      // Calc without VAT
      vehicleDetails.map((ele) => {
        ele['premium_without_vat'] =
          ele.vehicle_value -
          Math.abs(ele.multi_vehicle_discount) -
          Math.abs(ele.Scheme_Discount) -
          Math.abs(ele.loyalty_discount) -
          Math.abs(ele.no_claim_discount);
      });

      //Calc Addons Premium
      vehicleDetails.forEach((ele) => {
        ele['premium_without_vat'] = ele.windscreen_fire_theft_sar
          ? ele['premium_without_vat'] + ele.windscreen_fire_theft_sar
          : ele['premium_without_vat'];
        ele['premium_without_vat'] = ele.personal_accident_coverage_sar
          ? ele['premium_without_vat'] + ele.personal_accident_coverage_sar
          : ele['premium_without_vat'];
        ele['premium_without_vat'] = ele.replacement_car_coverage_sar
          ? ele['premium_without_vat'] + ele.replacement_car_coverage_sar
          : ele['premium_without_vat'];
        ele['premium_without_vat'] = ele.road_assistance_sar
          ? ele['premium_without_vat'] + ele.road_assistance_sar
          : ele['premium_without_vat'];
        ele['premium_without_vat'] = ele.natural_perils_sar
          ? ele['premium_without_vat'] + ele.natural_perils_sar
          : ele['premium_without_vat'];
        ele['premium_without_vat'] = ele.geo_ext_cov_sar
          ? ele['premium_without_vat'] + ele.geo_ext_cov_sar
          : ele['premium_without_vat'];
      });

      // Calc With VAT
      vehicleDetails.map((ele) => {
        ele['premium_with_vat'] =
          ele.premium_without_vat + ele.premium_without_vat * 0.15;
      });

      // Final Premium With & Without VAT
      let final_premium = [];
      let premium_with_vat = 0;
      let premium_without_vat = 0;
      vehicleDetails.forEach((ele) => {
        (premium_without_vat += ele.premium_without_vat),
          (premium_with_vat += ele.premium_with_vat);
      });

      let vehicles = [];
      let roundedObj;
      vehicleDetails.forEach((ele) => {
        roundedObj = roundNumericalValues(ele);
        vehicles.push(roundedObj);
      });

      let finalVehicleList = [];
      let obj;
      vehicles.forEach((ele) => {
        let obj = removeNegativeValues(ele);
        finalVehicleList.push(obj);
      });

      if (finalVehicleList.length > 1) {
        bh.input.quote_data.premium_without_vat =
          roundNumericalValues(premium_without_vat);
        bh.input.quote_data.premium_with_vat =
          roundNumericalValues(premium_with_vat);
      }

      const dateArabic = moment(bh.quote_date, 'DD-MM-YYYY').locale('ar');
      const formatedDateArabic = dateArabic.format('DD-MM-YYYY');

      bh.input.quote_data.vehicle_details = finalVehicleList;
      bh.input.quote_data.quote_details.arabic_date = formatedDateArabic;
      bh.input.quote_data.quote_details.to_date = moment(
        bh.quote_date,
        'DD-MM-YYYY'
      ).format('DD-MM-YYYY');

      bh.input.quote_data.quote_details.addl_details['sales_person_name'] = bh
        .input.quote_data.quote_details.addl_details?.sales_person_name
        ? bh.input.quote_data.quote_details.addl_details?.sales_person_name
        : '';
      bh.local.quote_summary = bh.input.quote_data;

      // Decimal Point is fixed to 2
      function roundNumericalValues(obj) {
        if (typeof obj === 'object') {
          const newObj = {};
          for (const key in obj) {
            if (typeof obj[key] === 'number') {
              newObj[key] = Math.round((obj[key] + Number.EPSILON) * 100) / 100;
            } else {
              newObj[key] = obj[key];
            }
          }
          return newObj;
        } else {
          return Math.round((obj + Number.EPSILON) * 100) / 100;
        }
      }
      // Removing negative value & converting to positive

      function removeNegativeValues(obj) {
        const newObj = {};
        for (const key in obj) {
          if (typeof obj[key] === 'number' && obj[key] < 0) {
            newObj[key] = Math.abs(obj[key]);
          } else {
            newObj[key] = obj[key];
          }
        }
        return newObj;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AObbIa098lbYJx3T(bh, parentSpanInst);
      //appendnew_next_resultMapping
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DXYl49R2sf8i7yGo',
        spanInst,
        'resultMapping'
      );
    }
  }

  async sd_AObbIa098lbYJx3T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AObbIa098lbYJx3T',
      parentSpanInst
    );
    try {
      // Product Mapping

      bh.local.quote_summary.vehicle_details.map((el) => {
        // SuperSaver
        if (el.product_code == 600462) {
          (el.product = 'Wafi Smart' + ' ' + 'وافي سمارت'),
            (el.own_damage = el.itdpremium),
            delete el.Deductible;
          (el.supersaver_msg =
            '2000 ريال سعودي (تدفع في حالة وقوع الحادث خلال أول 20 يوم من تفعيل الوثيقة)'),
            (el.vehicle_value = el.sum_insured);
        }

        //Comprehensive
        if (el.product_code == 600461) {
          el.product = el.product + ' ' + 'وافي الشامل';
          el.own_damage = el.sum_insured;
          el.vehicle_value = el.sum_insured;
        }

        // Wafi
        if (el.product_code == 600460) {
          el.product = el.product + ' ' + 'وافي الأساسي';
          delete el.Repair_Condition;
          delete el.Deductible;
          delete el.own_damage;
          delete el.vehicle_value;
        }
      });

      if (bh.local.quote_summary?.quote_details?.customer_type_id == 2) {
        bh.local.quote_summary.quote_details.addl_details['cr_no'] =
          bh.local.quote_summary?.quote_details?.id_no;
        delete bh.local.quote_summary?.quote_details?.id_no;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateTemplate(bh, parentSpanInst);
      //appendnew_next_sd_AObbIa098lbYJx3T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AObbIa098lbYJx3T',
        spanInst,
        'sd_AObbIa098lbYJx3T'
      );
    }
  }

  async generateTemplate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateTemplate',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const handlebars = require('handlebars');
      const data = { ...bh.local.quote_summary };
      const template = handlebars.compile(bh.templateSource);
      const renderedHtml = template(data);

      bh.html_template = `${renderedHtml}`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xbZUp5Tq3QK7Rbrq(bh, parentSpanInst);
      //appendnew_next_generateTemplate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xRIptKSJRRsfuGxb',
        spanInst,
        'generateTemplate'
      );
    }
  }

  async sd_xbZUp5Tq3QK7Rbrq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xbZUp5Tq3QK7Rbrq',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const { spawn } = require('child_process');
      const os = require('os');
      const path = require('path');

      bh.input = {
        fileName: 'quote_summary.html',
      };

      bh.local.statusCode = 200;
      try {
        const generateRandomFileName = (extension) => {
          const timestamp = new Date().getTime();
          const randomNumber = Math.floor(Math.random() * 1000000);
          return `${timestamp}_${randomNumber}.${extension}`;
        };

        const generatePdf = (htmlString) => {
          // log.info(`[HTML_TO_PDF][WKHTMLTOPDF][PROCESS_INITIATED][FILE_NAME:${bh?.input?.fileName}]`);

          bh.local.tmpInputPath = path.join(
            os.tmpdir(),
            generateRandomFileName('html')
          );
          bh.local.outputPath = path.join(
            os.tmpdir(),
            generateRandomFileName('pdf')
          );

          fs.writeFileSync(bh.local.tmpInputPath, htmlString);

          // construct the wkhtmltopdf command
          // use this for local testing ONLY -->
          //  const command = "C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe";
          const command = 'wkhtmltopdf';

          const args = [bh.local.tmpInputPath, bh.local.outputPath];
          let options = {
            stdio: 'inherit',
            env: {
              ...process.env,
              USER_ID: '1000',
            },
          };

          // check if running inside a Docker container
          if (fs.existsSync('/.dockerenv')) {
            const volumes = {
              '/tmp': '/tmp/host',
            };
            args.unshift('--disable-smart-shrinking');

            options = {
              ...options,
              env: {
                ...options.env, //@ts-ignore
                VOLUMES: JSON.stringify(volumes),
              },
            };
          }
          // log.info(`[HTML_TO_PDF][WKHTMLTOPDF] spawn values:[ command:${command}] [args:${args}] [options:${options}]`);

          // spawn the wkhtmltopdf process with the input and output paths as arguments
          const child = spawn(command, args, options);
          // log.info(`CHILD ----> ${child}`)

          return new Promise((resolve, reject) => {
            child.on('close', (code) => {
              if (code !== 0) {
                return reject(
                  new Error(
                    `[HTML_TO_PDF][WKHTMLTOPDF][SPAWN][ERROR] PDF generation failed with code ${code}`
                  )
                );
              }
              // read the generated PDF file and return it as a buffer
              try {
                const pdfBuffer = fs.readFileSync(bh.local.outputPath);
                // log.info(`PDF BUFFER ----> ${pdfBuffer}`)

                //logging the pdf detatils
                // log.info(`[HTML_TO_PDF][WKHTMLTOPDF] pdfBuffer generated successfully`);

                resolve(pdfBuffer);
              } catch (err) {
                log.error(
                  `[HTML_TO_PDF][WKHTMLTOPDF][PDF_SYNC_ERROR][FILE_NAME:${
                    bh?.input?.fileName
                  }][ERROR:${err?.message || JSON.stringify(err)}]`
                );
                reject(err);
              }
            });

            child.on('error', (error) => {
              log.error(
                `[HTML_TO_PDF][WKHTMLTOPDF][PDF_GEN_ERROR][FILE_NAME:${
                  bh?.input?.fileName
                }][ERROR:${error?.message || JSON.stringify(error)}]`
              );
              reject(error);
            });
          });
        };
        //returning buffer
        bh.local.response = await generatePdf(bh.html_template);

        // bh.local.outputFilePath = "quote_summary.pdf";

        //log.info(`[HTML_TO_PDF][WKHTMLTOPDF][PDF_GEN_SUCCESS][FILE_NAME:${bh?.input?.fileName}][BUFFER_SIZE:${bh?.local?.response?.length}]`);
      } catch (err) {
        log.error(
          `[HTML_TO_PDF][WKHTMLTOPDF][PDF_GEN_ERROR][FILE_NAME:${
            bh?.input?.fileName
          }][ERROR:${err?.message || JSON.stringify(err)}]`
        );
        throw new Error(err);
      }

      // bh.local.response = {
      //   "file" : bh.local.PdfFileBuffer
      // }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_xbZUp5Tq3QK7Rbrq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xbZUp5Tq3QK7Rbrq',
        spanInst,
        'sd_xbZUp5Tq3QK7Rbrq'
      );
    }
  }

  async masterDataCall(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'masterDataCall',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1baOHKnauKP8XEGSInstance: SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS.flows =
        SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1baOHKnauKP8XEGSInstance.searchMasterData(
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
        'sd_1dSu6E7vmzcmydqe',
        spanInst,
        'masterDataCall'
      );
    }
  }

  async getDateFields1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getDateFields1',
      parentSpanInst
    );
    try {
      bh.effective_date =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.quote_date =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.valid_till =
        bh.input.quote_data?.quote_details?.addl_details?.policy_start_date;
      bh.day_to_add = 365;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AdnqHhiTivec0LN4(bh, parentSpanInst);
      //appendnew_next_getDateFields1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uvKdzh8KPrNu5UOx',
        spanInst,
        'getDateFields1'
      );
    }
  }

  async sd_AdnqHhiTivec0LN4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AdnqHhiTivec0LN4',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9Instance: SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9.flows =
        SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_Mh9vsV05OPUVdmq9Instance.getStrapiCoverTemplate(
          spanInst,
          'quote'
        );
      bh.templateSource = outputVariables.local.templateSource;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProducts1(bh, parentSpanInst);
      //appendnew_next_sd_AdnqHhiTivec0LN4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AdnqHhiTivec0LN4',
        spanInst,
        'sd_AdnqHhiTivec0LN4'
      );
    }
  }

  async getProducts1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProducts1',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_1baOHKnauKP8XEGSInstance: SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS.flows =
        SSD_SERVICE_ID_sd_1baOHKnauKP8XEGS.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_1baOHKnauKP8XEGSInstance.getProducts(
          spanInst,
          bh.input.quote_data?.quote_details?.id_type
        );
      bh.product_list = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.resultMapping2(bh, parentSpanInst);
      //appendnew_next_getProducts1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0i2suOs20fws8qYW',
        spanInst,
        'getProducts1'
      );
    }
  }

  async resultMapping2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resultMapping2',
      parentSpanInst
    );
    try {
      const moment = require('moment');

      bh.local.policy_number = bh.input.quote_data.quote_details.policy_number;

      let risk_item_details = bh.input.quote_data.risk_item_details;
      let driver_details = bh.input.quote_data.driver_details;
      risk_item_details = risk_item_details.filter(
        (X) => X.addl_details?.['manual_entry'] == 'true'
      );
      bh.local.is_manual_entry = risk_item_details.length > 0 ? true : false;

      let vehicleDetails = [];
      let to = 'إلى';

      let valid_date_till = moment(bh.quote_date, 'DD-MM-YYYY')
        .add(364, 'days')
        .format('YYYY-MM-DD');

      risk_item_details.forEach((el) => {
        let obj = {
          seq: el.id_no,
          id: el.id,
          product_code: el.product_code,
          make_name: el.addl_details?.make_en,
          model_en: el.addl_details.model_en,
          plate_no: el.addl_details.plate_number,
          chassis_number: el.addl_details.chassis_number,
          premium: el.premium,
          Period_of_insurance: `${bh.quote_date} ${to} ${valid_date_till}`,
          Repair_Condition:
            el.addl_details.vehicleRepairType == 'Out of Agency'
              ? 'خارج الوكالة'
              : 'داخل الوكالة',
          Deductible: el.addl_details.deductible,
          vehicle_usage: el.addl_details.usage_type,
        };
        vehicleDetails.push(obj);
      });

      // Mapping Additionl Driver

      vehicleDetails.forEach((vehicle) => {
        vehicle.driver_details = []; // Initialize an empty array for driver details
        driver_details.forEach((driverInfo) => {
          if (driverInfo.risk_items.includes(vehicle.id.toString())) {
            vehicle.driver_details.push({
              driver_name: driverInfo.driver_name,
              id_no: driverInfo.id_no,
              dob: driverInfo.addl_details.dob,
            });
          }
        });
      });

      // Mapping Product

      bh.product_list.forEach((prod) => {
        vehicleDetails.map((veh) => {
          if (veh.product_code == prod.product_id) {
            veh['product'] = prod.short_name;
          }
        });
      });

      const dateArabic = moment(bh.quote_date, 'DD-MM-YYYY').locale('ar');
      const formatedDateArabic = dateArabic.format('DD-MM-YYYY');

      bh.input.quote_data.vehicle_details = vehicleDetails;
      bh.input.quote_data.quote_details.arabic_date = formatedDateArabic;
      bh.input.quote_data.quote_details.to_date = moment(
        bh.quote_date,
        'DD-MM-YYYY'
      ).format('DD-MM-YYYY');

      bh.local.quote_summary = bh.input.quote_data;

      // console.log('quote_summary', bh.input.quote_data);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JCYBim6kvAgYyEn7(bh, parentSpanInst);
      //appendnew_next_resultMapping2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ccav8YCQb93n4Xlt',
        spanInst,
        'resultMapping2'
      );
    }
  }

  async sd_JCYBim6kvAgYyEn7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JCYBim6kvAgYyEn7',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.is_manual_entry,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_P9cQYDYxHeLkwV1O(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.is_manual_entry,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.response(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JCYBim6kvAgYyEn7',
        spanInst,
        'sd_JCYBim6kvAgYyEn7'
      );
    }
  }

  async sd_P9cQYDYxHeLkwV1O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P9cQYDYxHeLkwV1O',
      parentSpanInst
    );
    try {
      // Product Mapping

      bh.local.quote_summary.vehicle_details.map((el) => {
        // SuperSaver
        if (el.product_code == 600462) {
          (el.product = 'Wafi Smart' + ' ' + 'وافي سمارت'),
            (el.own_damage = el.itdpremium),
            // delete el.Deductible
            (el.supersaver_msg =
              '2000 ريال سعودي (تدفع في حالة وقوع الحادث خلال أول 20 يوم من تفعيل الوثيقة)'),
            (el.vehicle_value = el.sum_insured);
        }

        //Comprehensive
        if (el.product_code == 600461) {
          el.product = el.product + ' ' + 'وافي الشامل';
          el.own_damage = el.sum_insured;
          el.vehicle_value = el.sum_insured;
        }

        // Wafi
        if (el.product_code == 600460) {
          el.product = el.product + ' ' + 'وافي الأساسي';
          // delete el.Repair_Condition;
          // delete el.Deductible;
          delete el.own_damage;
          delete el.vehicle_value;
        }
      });

      if (bh.local.quote_summary?.quote_details?.customer_type_id == 2) {
        bh.local.quote_summary.quote_details.addl_details['cr_no'] =
          bh.local.quote_summary?.quote_details?.id_no;
        delete bh.local.quote_summary?.quote_details?.id_no;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateTemplate1(bh, parentSpanInst);
      //appendnew_next_sd_P9cQYDYxHeLkwV1O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P9cQYDYxHeLkwV1O',
        spanInst,
        'sd_P9cQYDYxHeLkwV1O'
      );
    }
  }

  async generateTemplate1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateTemplate1',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const handlebars = require('handlebars');
      const data = { ...bh.local.quote_summary };
      const template = handlebars.compile(bh.templateSource);
      const renderedHtml = template(data);

      bh.html_template = `${renderedHtml}`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JLky0mzCVLcvpsX3(bh, parentSpanInst);
      //appendnew_next_generateTemplate1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X1Gf34wWSFU1Bi7T',
        spanInst,
        'generateTemplate1'
      );
    }
  }

  async sd_JLky0mzCVLcvpsX3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JLky0mzCVLcvpsX3',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const { spawn } = require('child_process');
      const os = require('os');
      const path = require('path');

      bh.input = {
        fileName: 'quote_summary.html',
      };

      bh.local.statusCode = 200;
      try {
        const generateRandomFileName = (extension) => {
          const timestamp = new Date().getTime();
          const randomNumber = Math.floor(Math.random() * 1000000);
          return `${timestamp}_${randomNumber}.${extension}`;
        };

        const generatePdf = (htmlString) => {
          // log.info(`[HTML_TO_PDF][WKHTMLTOPDF][PROCESS_INITIATED][FILE_NAME:${bh?.input?.fileName}]`);

          bh.local.tmpInputPath = path.join(
            os.tmpdir(),
            generateRandomFileName('html')
          );
          bh.local.outputPath = path.join(
            os.tmpdir(),
            generateRandomFileName('pdf')
          );

          fs.writeFileSync(bh.local.tmpInputPath, htmlString);

          // construct the wkhtmltopdf command
          // use this for local testing ONLY -->
          //  const command = "C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe";
          const command = 'wkhtmltopdf';

          const args = [bh.local.tmpInputPath, bh.local.outputPath];
          let options = {
            stdio: 'inherit',
            env: {
              ...process.env,
              USER_ID: '1000',
            },
          };

          // check if running inside a Docker container
          if (fs.existsSync('/.dockerenv')) {
            const volumes = {
              '/tmp': '/tmp/host',
            };
            args.unshift('--disable-smart-shrinking');

            options = {
              ...options,
              env: {
                ...options.env, //@ts-ignore
                VOLUMES: JSON.stringify(volumes),
              },
            };
          }
          // log.info(`[HTML_TO_PDF][WKHTMLTOPDF] spawn values:[ command:${command}] [args:${args}] [options:${options}]`);

          // spawn the wkhtmltopdf process with the input and output paths as arguments
          const child = spawn(command, args, options);
          // log.info(`CHILD ----> ${child}`)

          return new Promise((resolve, reject) => {
            child.on('close', (code) => {
              if (code !== 0) {
                return reject(
                  new Error(
                    `[HTML_TO_PDF][WKHTMLTOPDF][SPAWN][ERROR] PDF generation failed with code ${code}`
                  )
                );
              }
              // read the generated PDF file and return it as a buffer
              try {
                const pdfBuffer = fs.readFileSync(bh.local.outputPath);
                // log.info(`PDF BUFFER ----> ${pdfBuffer}`)

                //logging the pdf detatils
                // log.info(`[HTML_TO_PDF][WKHTMLTOPDF] pdfBuffer generated successfully`);

                resolve(pdfBuffer);
              } catch (err) {
                log.error(
                  `[HTML_TO_PDF][WKHTMLTOPDF][PDF_SYNC_ERROR][FILE_NAME:${
                    bh?.input?.fileName
                  }][ERROR:${err?.message || JSON.stringify(err)}]`
                );
                reject(err);
              }
            });

            child.on('error', (error) => {
              log.error(
                `[HTML_TO_PDF][WKHTMLTOPDF][PDF_GEN_ERROR][FILE_NAME:${
                  bh?.input?.fileName
                }][ERROR:${error?.message || JSON.stringify(error)}]`
              );
              reject(error);
            });
          });
        };
        //returning buffer
        bh.local.response = await generatePdf(bh.html_template);

        //log.info(`[HTML_TO_PDF][WKHTMLTOPDF][PDF_GEN_SUCCESS][FILE_NAME:${bh?.input?.fileName}][BUFFER_SIZE:${bh?.local?.response?.length}]`);
      } catch (err) {
        log.error(
          `[HTML_TO_PDF][WKHTMLTOPDF][PDF_GEN_ERROR][FILE_NAME:${
            bh?.input?.fileName
          }][ERROR:${err?.message || JSON.stringify(err)}]`
        );
        throw new Error(err);
      }

      function moveFile(buffer, destinationPath) {
        const destinationDir = path.dirname(destinationPath);

        // Create the directory if it doesn't exist
        fs.mkdirSync(destinationDir, { recursive: true });

        // Write the buffer to the destination path
        fs.writeFile(destinationPath, buffer, (err) => {
          if (err) {
            console.error('Error moving file:', err);
          } else {
            console.log('File moved successfully.');
          }
        });
      }

      const fileBuffer = Buffer.from(bh.local.response);
      const destinationPath =
        process.env.MOUNT_PATH +
        'policy/motor' +
        '/' +
        bh.local.policy_number +
        '/' +
        `declaration/policy_cover_${bh.local.policy_number}.pdf`;

      moveFile(fileBuffer, destinationPath);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JLky0mzCVLcvpsX3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JLky0mzCVLcvpsX3',
        spanInst,
        'sd_JLky0mzCVLcvpsX3'
      );
    }
  }

  async response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('response', parentSpanInst);
    try {
      bh.local.response = 'No manual entry of vehicle found';

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MRkiCBpuGuSrxl5F',
        spanInst,
        'response'
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
