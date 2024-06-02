//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_kXugEfrLGjLkAC8t
import { flows as SSD_SERVICE_ID_sd_kXugEfrLGjLkAC8t } from './sd-services/comparison/flows';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_NwGBPeSMFFSlDy2S
import { apis as SSD_SERVICE_ID_sd_NwGBPeSMFFSlDy2S } from './sd-services/comparison/apis';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i
import { flows as SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i } from './sd-services/Renewals/flows';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_PGno0g3GhJbFKbVH
import { apis as SSD_SERVICE_ID_sd_PGno0g3GhJbFKbVH } from './sd-services/Renewals/apis';
//CORE_REFERENCE_IMPORT-ping-SSD_SERVICE_ID_sd_eR4Sqz3q1SVO1Rp5
import { ping as SSD_SERVICE_ID_sd_eR4Sqz3q1SVO1Rp5 } from './sd-services/common/ping';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7
import { flows as SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7 } from './sd-services/Auth/flows';
//CORE_REFERENCE_IMPORT-UserAuth-SSD_SERVICE_ID_sd_CZJqznxrE9Zdb7gp
import { UserAuth as SSD_SERVICE_ID_sd_CZJqznxrE9Zdb7gp } from './sd-services/Middlewares/UserAuth';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_j4dV7Z67ONo0AkJf
import { flows as SSD_SERVICE_ID_sd_j4dV7Z67ONo0AkJf } from './sd-services/ids/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb
import { flows as SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb } from './sd-services/Payment/flows';
//CORE_REFERENCE_IMPORT-flow-SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y
import { flow as SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y } from './sd-services/Quotes/flow';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_Rit67GiiBNNVBmJk
import { apis as SSD_SERVICE_ID_sd_Rit67GiiBNNVBmJk } from './sd-services/Document/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_icjrtbFiiPL6HP0l
import { apis as SSD_SERVICE_ID_sd_icjrtbFiiPL6HP0l } from './sd-services/Download/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_ZwHrfEaitKoepEHl
import { apis as SSD_SERVICE_ID_sd_ZwHrfEaitKoepEHl } from './sd-services/Auth/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_yF92D2KqW0Q6rhqv
import { apis as SSD_SERVICE_ID_sd_yF92D2KqW0Q6rhqv } from './sd-services/Payment/apis';
//CORE_REFERENCE_IMPORT-utils_api-SSD_SERVICE_ID_sd_vGgaaJJ8gPAMDnht
import { utils_api as SSD_SERVICE_ID_sd_vGgaaJJ8gPAMDnht } from './sd-services/utils/utils_api';
//CORE_REFERENCE_IMPORT-system_settings-SSD_SERVICE_ID_sd_0rpaGU7ieX0EVtzP
import { system_settings as SSD_SERVICE_ID_sd_0rpaGU7ieX0EVtzP } from './sd-services/utils/system_settings';
//CORE_REFERENCE_IMPORT-status_cache-SSD_SERVICE_ID_sd_f90M8rb3kkYGueu9
import { status_cache as SSD_SERVICE_ID_sd_f90M8rb3kkYGueu9 } from './sd-services/utils/status_cache';
//CORE_REFERENCE_IMPORT-permision_cache-SSD_SERVICE_ID_sd_hW507M7qhmu7ya2q
import { permision_cache as SSD_SERVICE_ID_sd_hW507M7qhmu7ya2q } from './sd-services/utils/permision_cache';
//CORE_REFERENCE_IMPORT-message_cache-SSD_SERVICE_ID_sd_3fuWIbVi63iUpp28
import { message_cache as SSD_SERVICE_ID_sd_3fuWIbVi63iUpp28 } from './sd-services/utils/message_cache';
//CORE_REFERENCE_IMPORT-local_cache-SSD_SERVICE_ID_sd_A76tHKraVPe4TMic
import { local_cache as SSD_SERVICE_ID_sd_A76tHKraVPe4TMic } from './sd-services/utils/local_cache';
//CORE_REFERENCE_IMPORT-lob_cache-SSD_SERVICE_ID_sd_y7DDh7CZR0kdY2Bt
import { lob_cache as SSD_SERVICE_ID_sd_y7DDh7CZR0kdY2Bt } from './sd-services/utils/lob_cache';
//CORE_REFERENCE_IMPORT-Identity_type_cache-SSD_SERVICE_ID_sd_E1YrbUslHisbZepb
import { Identity_type_cache as SSD_SERVICE_ID_sd_E1YrbUslHisbZepb } from './sd-services/utils/Identity_type_cache';
//CORE_REFERENCE_IMPORT-customer_type_cache-SSD_SERVICE_ID_sd_1KAeFPVA4dCZfE4e
import { customer_type_cache as SSD_SERVICE_ID_sd_1KAeFPVA4dCZfE4e } from './sd-services/utils/customer_type_cache';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti
import { flows as SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti } from './sd-services/Master_data/flows';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_eUaZscetti07kgNJ
import { apis as SSD_SERVICE_ID_sd_eUaZscetti07kgNJ } from './sd-services/Master_data/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_bDT0CpAcQFxpPFon
import { apis as SSD_SERVICE_ID_sd_bDT0CpAcQFxpPFon } from './sd-services/Customer/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_ISiLGR8mh9fApi04
import { apis as SSD_SERVICE_ID_sd_ISiLGR8mh9fApi04 } from './sd-services/Addons/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_CWU4NGRyrfLHDnTi
import { apis as SSD_SERVICE_ID_sd_CWU4NGRyrfLHDnTi } from './sd-services/Risk_Items/apis';
//CORE_REFERENCE_IMPORT-api-SSD_SERVICE_ID_sd_rDFnZHPWY5w479Yk
import { api as SSD_SERVICE_ID_sd_rDFnZHPWY5w479Yk } from './sd-services/Vehicle/api';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KN
import { apis as SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KN } from './sd-services/rating/motor/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_aAiNyyfrg7ZTI6fy
import { apis as SSD_SERVICE_ID_sd_aAiNyyfrg7ZTI6fy } from './sd-services/Quotes/apis';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_AX4uxAH58PEgjDXZ
import { apis as SSD_SERVICE_ID_sd_AX4uxAH58PEgjDXZ } from './sd-services/Addl_drivers/apis';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_kXugEfrLGjLkAC8t
SSD_SERVICE_ID_sd_kXugEfrLGjLkAC8t,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_NwGBPeSMFFSlDy2S
SSD_SERVICE_ID_sd_NwGBPeSMFFSlDy2S,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i
SSD_SERVICE_ID_sd_fgPiJB21TihYTF6i,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_PGno0g3GhJbFKbVH
SSD_SERVICE_ID_sd_PGno0g3GhJbFKbVH,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ping-SSD_SERVICE_ID_sd_eR4Sqz3q1SVO1Rp5
SSD_SERVICE_ID_sd_eR4Sqz3q1SVO1Rp5,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7
SSD_SERVICE_ID_sd_k3LzzpgEzj2dPYQ7,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-UserAuth-SSD_SERVICE_ID_sd_CZJqznxrE9Zdb7gp
SSD_SERVICE_ID_sd_CZJqznxrE9Zdb7gp,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_j4dV7Z67ONo0AkJf
SSD_SERVICE_ID_sd_j4dV7Z67ONo0AkJf,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb
SSD_SERVICE_ID_sd_UsrexzchFYbKGMGb,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flow-SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y
SSD_SERVICE_ID_sd_rWVYJwuqA1rf7I7Y,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_Rit67GiiBNNVBmJk
SSD_SERVICE_ID_sd_Rit67GiiBNNVBmJk,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_icjrtbFiiPL6HP0l
SSD_SERVICE_ID_sd_icjrtbFiiPL6HP0l,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_ZwHrfEaitKoepEHl
SSD_SERVICE_ID_sd_ZwHrfEaitKoepEHl,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_yF92D2KqW0Q6rhqv
SSD_SERVICE_ID_sd_yF92D2KqW0Q6rhqv,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-utils_api-SSD_SERVICE_ID_sd_vGgaaJJ8gPAMDnht
SSD_SERVICE_ID_sd_vGgaaJJ8gPAMDnht,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-system_settings-SSD_SERVICE_ID_sd_0rpaGU7ieX0EVtzP
SSD_SERVICE_ID_sd_0rpaGU7ieX0EVtzP,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-status_cache-SSD_SERVICE_ID_sd_f90M8rb3kkYGueu9
SSD_SERVICE_ID_sd_f90M8rb3kkYGueu9,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-permision_cache-SSD_SERVICE_ID_sd_hW507M7qhmu7ya2q
SSD_SERVICE_ID_sd_hW507M7qhmu7ya2q,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-message_cache-SSD_SERVICE_ID_sd_3fuWIbVi63iUpp28
SSD_SERVICE_ID_sd_3fuWIbVi63iUpp28,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-local_cache-SSD_SERVICE_ID_sd_A76tHKraVPe4TMic
SSD_SERVICE_ID_sd_A76tHKraVPe4TMic,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-lob_cache-SSD_SERVICE_ID_sd_y7DDh7CZR0kdY2Bt
SSD_SERVICE_ID_sd_y7DDh7CZR0kdY2Bt,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-Identity_type_cache-SSD_SERVICE_ID_sd_E1YrbUslHisbZepb
SSD_SERVICE_ID_sd_E1YrbUslHisbZepb,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-customer_type_cache-SSD_SERVICE_ID_sd_1KAeFPVA4dCZfE4e
SSD_SERVICE_ID_sd_1KAeFPVA4dCZfE4e,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti
SSD_SERVICE_ID_sd_EKnEuJ4tOhBlgcti,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_eUaZscetti07kgNJ
SSD_SERVICE_ID_sd_eUaZscetti07kgNJ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_bDT0CpAcQFxpPFon
SSD_SERVICE_ID_sd_bDT0CpAcQFxpPFon,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_ISiLGR8mh9fApi04
SSD_SERVICE_ID_sd_ISiLGR8mh9fApi04,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_CWU4NGRyrfLHDnTi
SSD_SERVICE_ID_sd_CWU4NGRyrfLHDnTi,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-api-SSD_SERVICE_ID_sd_rDFnZHPWY5w479Yk
SSD_SERVICE_ID_sd_rDFnZHPWY5w479Yk,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KN
SSD_SERVICE_ID_sd_eZQXpI1dNCPzA8KN,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_aAiNyyfrg7ZTI6fy
SSD_SERVICE_ID_sd_aAiNyyfrg7ZTI6fy,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_AX4uxAH58PEgjDXZ
SSD_SERVICE_ID_sd_AX4uxAH58PEgjDXZ,
];
