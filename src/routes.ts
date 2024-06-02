//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_xCYkMVOgK0FFOZ8O
import { flows as SSD_SERVICE_ID_sd_xCYkMVOgK0FFOZ8O } from './sd-services/b2c_renewals/flows';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_mfH1tqvSQKgvC2Ll
import { apis as SSD_SERVICE_ID_sd_mfH1tqvSQKgvC2Ll } from './sd-services/b2c_renewals/apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt
import { flows as SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt } from './sd-services/renewals/flows';
//CORE_REFERENCE_IMPORT-renewal_apis-SSD_SERVICE_ID_sd_aTLxKC3WsI0OWcbW
import { renewal_apis as SSD_SERVICE_ID_sd_aTLxKC3WsI0OWcbW } from './sd-services/renewals/renewal_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw
import { flows as SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw } from './sd-services/policy/flows';
//CORE_REFERENCE_IMPORT-policy_apis-SSD_SERVICE_ID_sd_nO6u30UjLGynVfGP
import { policy_apis as SSD_SERVICE_ID_sd_nO6u30UjLGynVfGP } from './sd-services/policy/policy_apis';
//CORE_REFERENCE_IMPORT-rating_apis-SSD_SERVICE_ID_sd_oiaF6tNC5i6UX23C
import { rating_apis as SSD_SERVICE_ID_sd_oiaF6tNC5i6UX23C } from './sd-services/ratings/rating_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa
import { flows as SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa } from './sd-services/user/flows';
//CORE_REFERENCE_IMPORT-user_apis-SSD_SERVICE_ID_sd_CkGRfoNTrXQHxTPi
import { user_apis as SSD_SERVICE_ID_sd_CkGRfoNTrXQHxTPi } from './sd-services/user/user_apis';
//CORE_REFERENCE_IMPORT-addons_apis-SSD_SERVICE_ID_sd_WZB1yUoAvtWiXOi2
import { addons_apis as SSD_SERVICE_ID_sd_WZB1yUoAvtWiXOi2 } from './sd-services/addons/addons_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_y00uR766CtzyXVq9
import { flows as SSD_SERVICE_ID_sd_y00uR766CtzyXVq9 } from './sd-services/addons/flows';
//CORE_REFERENCE_IMPORT-driver_apis-SSD_SERVICE_ID_sd_Yckqi9DNpZnIqKHK
import { driver_apis as SSD_SERVICE_ID_sd_Yckqi9DNpZnIqKHK } from './sd-services/driver/driver_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo
import { flows as SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo } from './sd-services/driver/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr
import { flows as SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr } from './sd-services/utils/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU
import { flows as SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU } from './sd-services/quote/flows';
//CORE_REFERENCE_IMPORT-quote_apis-SSD_SERVICE_ID_sd_oBtCDcPpY7j0yPwg
import { quote_apis as SSD_SERVICE_ID_sd_oBtCDcPpY7j0yPwg } from './sd-services/quote/quote_apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb
import { flows as SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb } from './sd-services/role/flows';
//CORE_REFERENCE_IMPORT-role_permission_apis-SSD_SERVICE_ID_sd_uTNSjLLMIkjdlDl3
import { role_permission_apis as SSD_SERVICE_ID_sd_uTNSjLLMIkjdlDl3 } from './sd-services/role/role_permission_apis';
//CORE_REFERENCE_IMPORT-message_cache-SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J
import { message_cache as SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J } from './sd-services/utils/message_cache';
//CORE_REFERENCE_IMPORT-user_auth-SSD_SERVICE_ID_sd_PB6ihhqrg7CeCUhX
import { user_auth as SSD_SERVICE_ID_sd_PB6ihhqrg7CeCUhX } from './sd-services/authorization/user_auth';
//CORE_REFERENCE_IMPORT-ping-SSD_SERVICE_ID_sd_gcNwNpCLpkQpTpis
import { ping as SSD_SERVICE_ID_sd_gcNwNpCLpkQpTpis } from './sd-services/common/ping';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_xCYkMVOgK0FFOZ8O
SSD_SERVICE_ID_sd_xCYkMVOgK0FFOZ8O,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_mfH1tqvSQKgvC2Ll
SSD_SERVICE_ID_sd_mfH1tqvSQKgvC2Ll,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt
SSD_SERVICE_ID_sd_eBFiPH42CklOZ9vt,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-renewal_apis-SSD_SERVICE_ID_sd_aTLxKC3WsI0OWcbW
SSD_SERVICE_ID_sd_aTLxKC3WsI0OWcbW,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw
SSD_SERVICE_ID_sd_fanj2vvkQ49KOaJw,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-policy_apis-SSD_SERVICE_ID_sd_nO6u30UjLGynVfGP
SSD_SERVICE_ID_sd_nO6u30UjLGynVfGP,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-rating_apis-SSD_SERVICE_ID_sd_oiaF6tNC5i6UX23C
SSD_SERVICE_ID_sd_oiaF6tNC5i6UX23C,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa
SSD_SERVICE_ID_sd_pscznEj3HfuOzaaa,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-user_apis-SSD_SERVICE_ID_sd_CkGRfoNTrXQHxTPi
SSD_SERVICE_ID_sd_CkGRfoNTrXQHxTPi,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-addons_apis-SSD_SERVICE_ID_sd_WZB1yUoAvtWiXOi2
SSD_SERVICE_ID_sd_WZB1yUoAvtWiXOi2,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_y00uR766CtzyXVq9
SSD_SERVICE_ID_sd_y00uR766CtzyXVq9,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-driver_apis-SSD_SERVICE_ID_sd_Yckqi9DNpZnIqKHK
SSD_SERVICE_ID_sd_Yckqi9DNpZnIqKHK,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo
SSD_SERVICE_ID_sd_Tf4XUwnKvT4OwHjo,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr
SSD_SERVICE_ID_sd_hWkaJjoOk4jMAawr,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU
SSD_SERVICE_ID_sd_FbGdRMubTlHRdPGU,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-quote_apis-SSD_SERVICE_ID_sd_oBtCDcPpY7j0yPwg
SSD_SERVICE_ID_sd_oBtCDcPpY7j0yPwg,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb
SSD_SERVICE_ID_sd_TF6xg9ilDyTncBJb,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-role_permission_apis-SSD_SERVICE_ID_sd_uTNSjLLMIkjdlDl3
SSD_SERVICE_ID_sd_uTNSjLLMIkjdlDl3,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-message_cache-SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J
SSD_SERVICE_ID_sd_eJvjVNmEJAYJpu9J,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-user_auth-SSD_SERVICE_ID_sd_PB6ihhqrg7CeCUhX
SSD_SERVICE_ID_sd_PB6ihhqrg7CeCUhX,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ping-SSD_SERVICE_ID_sd_gcNwNpCLpkQpTpis
SSD_SERVICE_ID_sd_gcNwNpCLpkQpTpis,
];
