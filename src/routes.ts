//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-send_payment_details-SSD_SERVICE_ID_sd_XQB7xAcEF2TTh8B8
import { send_payment_details as SSD_SERVICE_ID_sd_XQB7xAcEF2TTh8B8 } from './sd-services/ESKA/AMQP/send_payment_details';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4
import { flows as SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4 } from './sd-services/Audit/flows';
//CORE_REFERENCE_IMPORT-generate_report-SSD_SERVICE_ID_sd_2gKGBio0KIeU7jJg
import { generate_report as SSD_SERVICE_ID_sd_2gKGBio0KIeU7jJg } from './sd-services/ESKA/AMQP/generate_report';
//CORE_REFERENCE_IMPORT-najm_upload-SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9L
import { najm_upload as SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9L } from './sd-services/ESKA/AMQP/najm_upload';
//CORE_REFERENCE_IMPORT-create_policy-SSD_SERVICE_ID_sd_fkEaDEYGbrh3hYiv
import { create_policy as SSD_SERVICE_ID_sd_fkEaDEYGbrh3hYiv } from './sd-services/ESKA/AMQP/create_policy';
//CORE_REFERENCE_IMPORT-notify_eska-SSD_SERVICE_ID_sd_KaNHANnEOKYIN9jI
import { notify_eska as SSD_SERVICE_ID_sd_KaNHANnEOKYIN9jI } from './sd-services/ESKA/AMQP/notify_eska';
//CORE_REFERENCE_IMPORT-send_email-SSD_SERVICE_ID_sd_7GHcjVIRow5zrTIr
import { send_email as SSD_SERVICE_ID_sd_7GHcjVIRow5zrTIr } from './sd-services/ESKA/AMQP/send_email';
//CORE_REFERENCE_IMPORT-lookup_users-SSD_SERVICE_ID_sd_ZieDG434v84KHr44
import { lookup_users as SSD_SERVICE_ID_sd_ZieDG434v84KHr44 } from './sd-services/active_directory/lookup_users';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq
import { flows as SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq } from './sd-services/Data/flows';
//CORE_REFERENCE_IMPORT-master_data_apis-SSD_SERVICE_ID_sd_vnMA8FjF3xkV0anH
import { master_data_apis as SSD_SERVICE_ID_sd_vnMA8FjF3xkV0anH } from './sd-services/master_data/master_data_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr
import { flows as SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr } from './sd-services/master_data/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1
import { flows as SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1 } from './sd-services/case_service/flows';
//CORE_REFERENCE_IMPORT-case_service_apis-SSD_SERVICE_ID_sd_3TDdVPQabhXfwHlb
import { case_service_apis as SSD_SERVICE_ID_sd_3TDdVPQabhXfwHlb } from './sd-services/case_service/case_service_apis';
//CORE_REFERENCE_IMPORT-message_cache-SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p
import { message_cache as SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p } from './sd-services/utils/message_cache';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o
import { flows as SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o } from './sd-services/Redis/flows';
//CORE_REFERENCE_IMPORT-lezam_flows-SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8
import { lezam_flows as SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8 } from './sd-services/ELM/lezam_flows';
//CORE_REFERENCE_IMPORT-lezam_apis-SSD_SERVICE_ID_sd_k9HuujYi4XBzKuL9
import { lezam_apis as SSD_SERVICE_ID_sd_k9HuujYi4XBzKuL9 } from './sd-services/ELM/lezam_apis';
//CORE_REFERENCE_IMPORT-data_apis-SSD_SERVICE_ID_sd_n2mWwCvrX1MtyYjA
import { data_apis as SSD_SERVICE_ID_sd_n2mWwCvrX1MtyYjA } from './sd-services/Data/data_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk
import { flows as SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk } from './sd-services/ESKA/flows';
//CORE_REFERENCE_IMPORT-eska_apis-SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m
import { eska_apis as SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m } from './sd-services/ESKA/eska_apis';
//CORE_REFERENCE_IMPORT-eska_int_apis-SSD_SERVICE_ID_sd_xHJVL0ChjllCyuh8
import { eska_int_apis as SSD_SERVICE_ID_sd_xHJVL0ChjllCyuh8 } from './sd-services/ESKA/eska_int_apis';
//CORE_REFERENCE_IMPORT-consumers-SSD_SERVICE_ID_sd_sqk8VwgiGLazcEJY
import { consumers as SSD_SERVICE_ID_sd_sqk8VwgiGLazcEJY } from './sd-services/ESKA/AMQP/consumers';
//CORE_REFERENCE_IMPORT-producers-SSD_SERVICE_ID_sd_RIjyiN8L194WAQxl
import { producers as SSD_SERVICE_ID_sd_RIjyiN8L194WAQxl } from './sd-services/ESKA/AMQP/producers';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq
import { flows as SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq } from './sd-services/ESKA/AMQP/flows';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_PY5ZqS3gkQvCgwIf
import { apis as SSD_SERVICE_ID_sd_PY5ZqS3gkQvCgwIf } from './sd-services/Strapi/apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_Kqmsek7Hp3hapqqv
import { flows as SSD_SERVICE_ID_sd_Kqmsek7Hp3hapqqv } from './sd-services/Strapi/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs
import { flows as SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs } from './sd-services/iFoundry/flows';
//CORE_REFERENCE_IMPORT-ifoundry_apis-SSD_SERVICE_ID_sd_c0YZgOWilUQRT81D
import { ifoundry_apis as SSD_SERVICE_ID_sd_c0YZgOWilUQRT81D } from './sd-services/iFoundry/ifoundry_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_J6X86g975hUioNVw
import { flows as SSD_SERVICE_ID_sd_J6X86g975hUioNVw } from './sd-services/NAJM/flows';
//CORE_REFERENCE_IMPORT-najm_apis-SSD_SERVICE_ID_sd_joMVnuhcgWeWS6TH
import { najm_apis as SSD_SERVICE_ID_sd_joMVnuhcgWeWS6TH } from './sd-services/NAJM/najm_apis';
//CORE_REFERENCE_IMPORT-yakeen_flows-SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi
import { yakeen_flows as SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi } from './sd-services/ELM/yakeen_flows';
//CORE_REFERENCE_IMPORT-yakeen_apis-SSD_SERVICE_ID_sd_uBJrRtWCwVpfPcER
import { yakeen_apis as SSD_SERVICE_ID_sd_uBJrRtWCwVpfPcER } from './sd-services/ELM/yakeen_apis';
//CORE_REFERENCE_IMPORT-spl_flows-SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN
import { spl_flows as SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN } from './sd-services/ELM/spl_flows';
//CORE_REFERENCE_IMPORT-spl_apis-SSD_SERVICE_ID_sd_Ju3UAAV2u5qSRKye
import { spl_apis as SSD_SERVICE_ID_sd_Ju3UAAV2u5qSRKye } from './sd-services/ELM/spl_apis';
//CORE_REFERENCE_IMPORT-ping-SSD_SERVICE_ID_sd_OSos0bR9SaxEErii
import { ping as SSD_SERVICE_ID_sd_OSos0bR9SaxEErii } from './sd-services/common/ping';
//CORE_REFERENCE_IMPORT-apigee_token_cache-SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH
import { apigee_token_cache as SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH } from './sd-services/utils/apigee_token_cache';
//CORE_REFERENCE_IMPORT-quote-SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL
import { quote as SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL } from './sd-services/Data/quote';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-send_payment_details-SSD_SERVICE_ID_sd_XQB7xAcEF2TTh8B8
SSD_SERVICE_ID_sd_XQB7xAcEF2TTh8B8,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4
SSD_SERVICE_ID_sd_4J5cxhTvtlvsg4T4,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-generate_report-SSD_SERVICE_ID_sd_2gKGBio0KIeU7jJg
SSD_SERVICE_ID_sd_2gKGBio0KIeU7jJg,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-najm_upload-SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9L
SSD_SERVICE_ID_sd_TtYiV7ASoQFc4u9L,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_policy-SSD_SERVICE_ID_sd_fkEaDEYGbrh3hYiv
SSD_SERVICE_ID_sd_fkEaDEYGbrh3hYiv,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-notify_eska-SSD_SERVICE_ID_sd_KaNHANnEOKYIN9jI
SSD_SERVICE_ID_sd_KaNHANnEOKYIN9jI,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-send_email-SSD_SERVICE_ID_sd_7GHcjVIRow5zrTIr
SSD_SERVICE_ID_sd_7GHcjVIRow5zrTIr,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-lookup_users-SSD_SERVICE_ID_sd_ZieDG434v84KHr44
SSD_SERVICE_ID_sd_ZieDG434v84KHr44,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq
SSD_SERVICE_ID_sd_2qgdkIakrEsQ5vKq,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-master_data_apis-SSD_SERVICE_ID_sd_vnMA8FjF3xkV0anH
SSD_SERVICE_ID_sd_vnMA8FjF3xkV0anH,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr
SSD_SERVICE_ID_sd_04g30ucrrWrZJ8Hr,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1
SSD_SERVICE_ID_sd_PKluz4djaFGqRqK1,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-case_service_apis-SSD_SERVICE_ID_sd_3TDdVPQabhXfwHlb
SSD_SERVICE_ID_sd_3TDdVPQabhXfwHlb,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-message_cache-SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p
SSD_SERVICE_ID_sd_fIaMRJNeawRZ2c2p,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o
SSD_SERVICE_ID_sd_1uCNH5QfBJFSth6o,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-lezam_flows-SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8
SSD_SERVICE_ID_sd_v6BKv63qUFS9KvN8,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-lezam_apis-SSD_SERVICE_ID_sd_k9HuujYi4XBzKuL9
SSD_SERVICE_ID_sd_k9HuujYi4XBzKuL9,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-data_apis-SSD_SERVICE_ID_sd_n2mWwCvrX1MtyYjA
SSD_SERVICE_ID_sd_n2mWwCvrX1MtyYjA,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk
SSD_SERVICE_ID_sd_4TJuT38nq8Begrhk,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-eska_apis-SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m
SSD_SERVICE_ID_sd_mwGBFUFWdqzTsz0m,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-eska_int_apis-SSD_SERVICE_ID_sd_xHJVL0ChjllCyuh8
SSD_SERVICE_ID_sd_xHJVL0ChjllCyuh8,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-consumers-SSD_SERVICE_ID_sd_sqk8VwgiGLazcEJY
SSD_SERVICE_ID_sd_sqk8VwgiGLazcEJY,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-producers-SSD_SERVICE_ID_sd_RIjyiN8L194WAQxl
SSD_SERVICE_ID_sd_RIjyiN8L194WAQxl,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq
SSD_SERVICE_ID_sd_mof3Dk7fjvBDCwIq,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_PY5ZqS3gkQvCgwIf
SSD_SERVICE_ID_sd_PY5ZqS3gkQvCgwIf,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_Kqmsek7Hp3hapqqv
SSD_SERVICE_ID_sd_Kqmsek7Hp3hapqqv,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs
SSD_SERVICE_ID_sd_xwuy9KwbZk8A7cWs,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ifoundry_apis-SSD_SERVICE_ID_sd_c0YZgOWilUQRT81D
SSD_SERVICE_ID_sd_c0YZgOWilUQRT81D,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_J6X86g975hUioNVw
SSD_SERVICE_ID_sd_J6X86g975hUioNVw,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-najm_apis-SSD_SERVICE_ID_sd_joMVnuhcgWeWS6TH
SSD_SERVICE_ID_sd_joMVnuhcgWeWS6TH,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-yakeen_flows-SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi
SSD_SERVICE_ID_sd_zuQUe6SVqU2hlUCi,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-yakeen_apis-SSD_SERVICE_ID_sd_uBJrRtWCwVpfPcER
SSD_SERVICE_ID_sd_uBJrRtWCwVpfPcER,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-spl_flows-SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN
SSD_SERVICE_ID_sd_1S5Noml2zHju5JVN,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-spl_apis-SSD_SERVICE_ID_sd_Ju3UAAV2u5qSRKye
SSD_SERVICE_ID_sd_Ju3UAAV2u5qSRKye,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ping-SSD_SERVICE_ID_sd_OSos0bR9SaxEErii
SSD_SERVICE_ID_sd_OSos0bR9SaxEErii,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apigee_token_cache-SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH
SSD_SERVICE_ID_sd_1i9aw7QEpHYSh6NH,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-quote-SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL
SSD_SERVICE_ID_sd_mGygVbCHYy2kHadL,
];
