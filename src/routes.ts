//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-system_message_cache-SSD_SERVICE_ID_sd_rPImRM4mySzJ4985
import { system_message_cache as SSD_SERVICE_ID_sd_rPImRM4mySzJ4985 } from './sd-services/utils/system_message_cache';
//CORE_REFERENCE_IMPORT-ca_auth-SSD_SERVICE_ID_sd_EH2AxZ1JGngYjaZO
import { ca_auth as SSD_SERVICE_ID_sd_EH2AxZ1JGngYjaZO } from './sd-services/middleware/ca_auth';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv
import { flows as SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv } from './sd-services/vehicle/flows';
//CORE_REFERENCE_IMPORT-vehicle_apis-SSD_SERVICE_ID_sd_Mr8QMQ1v1pNQkGyP
import { vehicle_apis as SSD_SERVICE_ID_sd_Mr8QMQ1v1pNQkGyP } from './sd-services/vehicle/vehicle_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_greyf09FKzWxiffX
import { flows as SSD_SERVICE_ID_sd_greyf09FKzWxiffX } from './sd-services/communication/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg
import { flows as SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg } from './sd-services/common/flows';
//CORE_REFERENCE_IMPORT-master_data_apis-SSD_SERVICE_ID_sd_yvsjqgy9Ru0Yi4Im
import { master_data_apis as SSD_SERVICE_ID_sd_yvsjqgy9Ru0Yi4Im } from './sd-services/master_data/master_data_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO
import { flows as SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO } from './sd-services/master_data/flows';
//CORE_REFERENCE_IMPORT-locale_cache-SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB
import { locale_cache as SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB } from './sd-services/utils/locale_cache';
//CORE_REFERENCE_IMPORT-lob_cache-SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4
import { lob_cache as SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4 } from './sd-services/utils/lob_cache';
//CORE_REFERENCE_IMPORT-customer_type_cache-SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd
import { customer_type_cache as SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd } from './sd-services/utils/customer_type_cache';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd
import { flows as SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd } from './sd-services/documents/flows';
//CORE_REFERENCE_IMPORT-document_apis-SSD_SERVICE_ID_sd_EioJBDnlIlfuqfAL
import { document_apis as SSD_SERVICE_ID_sd_EioJBDnlIlfuqfAL } from './sd-services/documents/document_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK
import { flows as SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK } from './sd-services/ids/flows';
//CORE_REFERENCE_IMPORT-payment_api-SSD_SERVICE_ID_sd_kHqLIMr3GhSX3TLF
import { payment_api as SSD_SERVICE_ID_sd_kHqLIMr3GhSX3TLF } from './sd-services/payment/payment_api';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE
import { flows as SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE } from './sd-services/payment/flows';
//CORE_REFERENCE_IMPORT-decision_apis-SSD_SERVICE_ID_sd_KCSOMNSCGlGQ1edi
import { decision_apis as SSD_SERVICE_ID_sd_KCSOMNSCGlGQ1edi } from './sd-services/decision/decision_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo
import { flows as SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo } from './sd-services/decision/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME
import { flows as SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME } from './sd-services/auth/flows';
//CORE_REFERENCE_IMPORT-auth_apis-SSD_SERVICE_ID_sd_eQnLWy94c6PTPSKl
import { auth_apis as SSD_SERVICE_ID_sd_eQnLWy94c6PTPSKl } from './sd-services/auth/auth_apis';
//CORE_REFERENCE_IMPORT-quote_api-SSD_SERVICE_ID_sd_4yuLJstomUcUA93n
import { quote_api as SSD_SERVICE_ID_sd_4yuLJstomUcUA93n } from './sd-services/quote/quote_api';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ
import { flows as SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ } from './sd-services/quote/flows';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-system_message_cache-SSD_SERVICE_ID_sd_rPImRM4mySzJ4985
SSD_SERVICE_ID_sd_rPImRM4mySzJ4985,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ca_auth-SSD_SERVICE_ID_sd_EH2AxZ1JGngYjaZO
SSD_SERVICE_ID_sd_EH2AxZ1JGngYjaZO,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv
SSD_SERVICE_ID_sd_aqK0GNauJL5ThPmv,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-vehicle_apis-SSD_SERVICE_ID_sd_Mr8QMQ1v1pNQkGyP
SSD_SERVICE_ID_sd_Mr8QMQ1v1pNQkGyP,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_greyf09FKzWxiffX
SSD_SERVICE_ID_sd_greyf09FKzWxiffX,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg
SSD_SERVICE_ID_sd_lBYpxTIXl8siFMbg,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-master_data_apis-SSD_SERVICE_ID_sd_yvsjqgy9Ru0Yi4Im
SSD_SERVICE_ID_sd_yvsjqgy9Ru0Yi4Im,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO
SSD_SERVICE_ID_sd_vvDtX44SuS4XuBiO,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-locale_cache-SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB
SSD_SERVICE_ID_sd_vjWtekeRB7wRGHuB,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-lob_cache-SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4
SSD_SERVICE_ID_sd_lHkBRoRJDjp8xli4,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-customer_type_cache-SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd
SSD_SERVICE_ID_sd_AJfC5GXarB0hLhYd,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd
SSD_SERVICE_ID_sd_83TLXbE1NvGhRDTd,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-document_apis-SSD_SERVICE_ID_sd_EioJBDnlIlfuqfAL
SSD_SERVICE_ID_sd_EioJBDnlIlfuqfAL,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK
SSD_SERVICE_ID_sd_McJy2ZGC1clerKpK,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-payment_api-SSD_SERVICE_ID_sd_kHqLIMr3GhSX3TLF
SSD_SERVICE_ID_sd_kHqLIMr3GhSX3TLF,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE
SSD_SERVICE_ID_sd_KBJMtufFHJSh9hyE,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-decision_apis-SSD_SERVICE_ID_sd_KCSOMNSCGlGQ1edi
SSD_SERVICE_ID_sd_KCSOMNSCGlGQ1edi,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo
SSD_SERVICE_ID_sd_wRJe9iU6JPEb8WCo,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME
SSD_SERVICE_ID_sd_T5DhFgK9wLilbSME,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-auth_apis-SSD_SERVICE_ID_sd_eQnLWy94c6PTPSKl
SSD_SERVICE_ID_sd_eQnLWy94c6PTPSKl,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-quote_api-SSD_SERVICE_ID_sd_4yuLJstomUcUA93n
SSD_SERVICE_ID_sd_4yuLJstomUcUA93n,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ
SSD_SERVICE_ID_sd_1vEhDOIvF8EnBiOJ,
];
