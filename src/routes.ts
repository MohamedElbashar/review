//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri
import { flows as SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri } from './sd-services/Audit/flows';
//CORE_REFERENCE_IMPORT-otp_apis-SSD_SERVICE_ID_sd_mhdBR3kcMuWK3LNk
import { otp_apis as SSD_SERVICE_ID_sd_mhdBR3kcMuWK3LNk } from './sd-services/OTP/otp_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL
import { flows as SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL } from './sd-services/OTP/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS
import { flows as SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS } from './sd-services/Strapi/flows';
//CORE_REFERENCE_IMPORT-apigee_token_cache-SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS
import { apigee_token_cache as SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS } from './sd-services/utils/apigee_token_cache';
//CORE_REFERENCE_IMPORT-sms_apis-SSD_SERVICE_ID_sd_ONnegYfql92GnuPb
import { sms_apis as SSD_SERVICE_ID_sd_ONnegYfql92GnuPb } from './sd-services/SMS/sms_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_garlOThj4kVRVw8w
import { flows as SSD_SERVICE_ID_sd_garlOThj4kVRVw8w } from './sd-services/SMS/flows';
//CORE_REFERENCE_IMPORT-email_apis-SSD_SERVICE_ID_sd_DkKuJlcFqZ21Dejn
import { email_apis as SSD_SERVICE_ID_sd_DkKuJlcFqZ21Dejn } from './sd-services/Email/email_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB
import { flows as SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB } from './sd-services/Email/flows';

export const UserRoutes = [
    //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri
SSD_SERVICE_ID_sd_VRndbAbZ3wRAu4ri,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-otp_apis-SSD_SERVICE_ID_sd_mhdBR3kcMuWK3LNk
SSD_SERVICE_ID_sd_mhdBR3kcMuWK3LNk,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL
SSD_SERVICE_ID_sd_Elgml7IzLA4OeaDL,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS
SSD_SERVICE_ID_sd_qSXaIy49AVMvDJUS,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apigee_token_cache-SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS
SSD_SERVICE_ID_sd_k48ioDqNUwxg0ZAS,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-sms_apis-SSD_SERVICE_ID_sd_ONnegYfql92GnuPb
SSD_SERVICE_ID_sd_ONnegYfql92GnuPb,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_garlOThj4kVRVw8w
SSD_SERVICE_ID_sd_garlOThj4kVRVw8w,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-email_apis-SSD_SERVICE_ID_sd_DkKuJlcFqZ21Dejn
SSD_SERVICE_ID_sd_DkKuJlcFqZ21Dejn,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB
SSD_SERVICE_ID_sd_y2tcnm7q5RuGqDgB,
];
