//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-emkan_apis-SSD_SERVICE_ID_sd_ZIIqrU7I4ADCJHf0
import { emkan_apis as SSD_SERVICE_ID_sd_ZIIqrU7I4ADCJHf0 } from './sd-services/emkan/emkan_apis';
//CORE_REFERENCE_IMPORT-emkan_apigee_flows-SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w
import { emkan_apigee_flows as SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w } from './sd-services/emkan/emkan_apigee_flows';
//CORE_REFERENCE_IMPORT-tabby_apis-SSD_SERVICE_ID_sd_fNT7V4JHpTxdAeGQ
import { tabby_apis as SSD_SERVICE_ID_sd_fNT7V4JHpTxdAeGQ } from './sd-services/tabby/tabby_apis';
//CORE_REFERENCE_IMPORT-apigee_tabby_flow-SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S
import { apigee_tabby_flow as SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S } from './sd-services/tabby/apigee_tabby_flow';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q
import { flows as SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q } from './sd-services/tabby/flows';
//CORE_REFERENCE_IMPORT-urpay_apis-SSD_SERVICE_ID_sd_EojwE2HOX15IuIxQ
import { urpay_apis as SSD_SERVICE_ID_sd_EojwE2HOX15IuIxQ } from './sd-services/urpay/urpay_apis';
//CORE_REFERENCE_IMPORT-db_flows-SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG
import { db_flows as SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG } from './sd-services/urpay/db_flows';
//CORE_REFERENCE_IMPORT-urpay_flows-SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu
import { urpay_flows as SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu } from './sd-services/urpay/urpay_flows';
//CORE_REFERENCE_IMPORT-cron_api-SSD_SERVICE_ID_sd_c5ioQNEtx6O0APKV
import { cron_api as SSD_SERVICE_ID_sd_c5ioQNEtx6O0APKV } from './sd-services/cron/cron_api';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_LBg3hfcpEt4LvZZv
import { flows as SSD_SERVICE_ID_sd_LBg3hfcpEt4LvZZv } from './sd-services/mock_apis_mokafaa/flows';
//CORE_REFERENCE_IMPORT-apigee_flows-SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e
import { apigee_flows as SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e } from './sd-services/mokafaa/apigee_flows';
//CORE_REFERENCE_IMPORT-db_flows-SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si
import { db_flows as SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si } from './sd-services/mokafaa/db_flows';
//CORE_REFERENCE_IMPORT-mokafaa_apis-SSD_SERVICE_ID_sd_n5z6795xbhL0izhD
import { mokafaa_apis as SSD_SERVICE_ID_sd_n5z6795xbhL0izhD } from './sd-services/mokafaa/mokafaa_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf
import { flows as SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf } from './sd-services/sadad/flows';
//CORE_REFERENCE_IMPORT-sadad_apis-SSD_SERVICE_ID_sd_Jq5C8TSqMLskMTUy
import { sadad_apis as SSD_SERVICE_ID_sd_Jq5C8TSqMLskMTUy } from './sd-services/sadad/sadad_apis';
//CORE_REFERENCE_IMPORT-message_cache-SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1
import { message_cache as SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1 } from './sd-services/util/message_cache';
//CORE_REFERENCE_IMPORT-apigee_token_cache-SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84
import { apigee_token_cache as SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84 } from './sd-services/util/apigee_token_cache';
//CORE_REFERENCE_IMPORT-email_sms_api-SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH
import { email_sms_api as SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH } from './sd-services/communication/email_sms_api';
//CORE_REFERENCE_IMPORT-ping-SSD_SERVICE_ID_sd_7BadblFqlLn9YKfV
import { ping as SSD_SERVICE_ID_sd_7BadblFqlLn9YKfV } from './sd-services/common/ping';
//CORE_REFERENCE_IMPORT-audit_log-SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel
import { audit_log as SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel } from './sd-services/audit/audit_log';
//CORE_REFERENCE_IMPORT-middleware_flow-SSD_SERVICE_ID_sd_tOC6lXwdddM5lnrU
import { middleware_flow as SSD_SERVICE_ID_sd_tOC6lXwdddM5lnrU } from './sd-services/middleware/middleware_flow';
//CORE_REFERENCE_IMPORT-hyper_pay_apis-SSD_SERVICE_ID_sd_MWQ2nNcjBtdVD8J1
import { hyper_pay_apis as SSD_SERVICE_ID_sd_MWQ2nNcjBtdVD8J1 } from './sd-services/hyper_pay/hyper_pay_apis';
//CORE_REFERENCE_IMPORT-flow-SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj
import { flow as SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj } from './sd-services/hyper_pay/flow';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_bz9jExxcM1xS0bPp
import { flows as SSD_SERVICE_ID_sd_bz9jExxcM1xS0bPp } from './sd-services/payment/flows';
//CORE_REFERENCE_IMPORT-payment_apis-SSD_SERVICE_ID_sd_5G6jdNzK1xE090S2
import { payment_apis as SSD_SERVICE_ID_sd_5G6jdNzK1xE090S2 } from './sd-services/payment/payment_apis';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-emkan_apis-SSD_SERVICE_ID_sd_ZIIqrU7I4ADCJHf0
SSD_SERVICE_ID_sd_ZIIqrU7I4ADCJHf0,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-emkan_apigee_flows-SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w
SSD_SERVICE_ID_sd_OzREStK1k5ahJ41w,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-tabby_apis-SSD_SERVICE_ID_sd_fNT7V4JHpTxdAeGQ
SSD_SERVICE_ID_sd_fNT7V4JHpTxdAeGQ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apigee_tabby_flow-SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S
SSD_SERVICE_ID_sd_Mu2UqHQQdqi5UI1S,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q
SSD_SERVICE_ID_sd_kKVwxE7mO1EQdT2q,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-urpay_apis-SSD_SERVICE_ID_sd_EojwE2HOX15IuIxQ
SSD_SERVICE_ID_sd_EojwE2HOX15IuIxQ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-db_flows-SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG
SSD_SERVICE_ID_sd_CxLUqvboVchOR5CG,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-urpay_flows-SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu
SSD_SERVICE_ID_sd_qa8oBMO9MzQvBWvu,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-cron_api-SSD_SERVICE_ID_sd_c5ioQNEtx6O0APKV
SSD_SERVICE_ID_sd_c5ioQNEtx6O0APKV,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_LBg3hfcpEt4LvZZv
SSD_SERVICE_ID_sd_LBg3hfcpEt4LvZZv,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apigee_flows-SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf
SSD_SERVICE_ID_sd_z0l0HapXMZfE5Jkf,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-sadad_apis-SSD_SERVICE_ID_sd_Jq5C8TSqMLskMTUy
SSD_SERVICE_ID_sd_Jq5C8TSqMLskMTUy,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e
SSD_SERVICE_ID_sd_DQiSeTdWNQnBiJ4e,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-db_flows-SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si
SSD_SERVICE_ID_sd_p81LZq3e2ikhB8si,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-mokafaa_apis-SSD_SERVICE_ID_sd_n5z6795xbhL0izhD
SSD_SERVICE_ID_sd_n5z6795xbhL0izhD,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-message_cache-SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1
SSD_SERVICE_ID_sd_p2gRcWiM1XiV3iZ1,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apigee_token_cache-SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84
SSD_SERVICE_ID_sd_UlDX85SD1sDaJx84,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-email_sms_api-SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH
SSD_SERVICE_ID_sd_Ga8vKCsJJe2yLqzH,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ping-SSD_SERVICE_ID_sd_7BadblFqlLn9YKfV
SSD_SERVICE_ID_sd_7BadblFqlLn9YKfV,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-audit_log-SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel
SSD_SERVICE_ID_sd_8WmGT1Gp9T1KKnel,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-middleware_flow-SSD_SERVICE_ID_sd_tOC6lXwdddM5lnrU
SSD_SERVICE_ID_sd_tOC6lXwdddM5lnrU,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-hyper_pay_apis-SSD_SERVICE_ID_sd_MWQ2nNcjBtdVD8J1
SSD_SERVICE_ID_sd_MWQ2nNcjBtdVD8J1,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flow-SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj
SSD_SERVICE_ID_sd_q6uYSrWVqKRA00qj,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_bz9jExxcM1xS0bPp
SSD_SERVICE_ID_sd_bz9jExxcM1xS0bPp,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-payment_apis-SSD_SERVICE_ID_sd_5G6jdNzK1xE090S2
SSD_SERVICE_ID_sd_5G6jdNzK1xE090S2,
];
