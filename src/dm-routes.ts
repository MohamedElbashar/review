//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-findSystemMessagesById-DMOPS_ID_payments___EN_710x105vc2__findSystemMessagesById
import { findSystemMessagesById as DMOPS_ID_payments___EN_710x105vc2__findSystemMessagesById } from './dm-services/payments/system_messages/findSystemMessagesById';
//CORE_REFERENCE_IMPORT-findAllSystemMessagess-DMOPS_ID_payments___EN_710x105vc2__findAllSystemMessagess
import { findAllSystemMessagess as DMOPS_ID_payments___EN_710x105vc2__findAllSystemMessagess } from './dm-services/payments/system_messages/findAllSystemMessagess';
//CORE_REFERENCE_IMPORT-findLocaleById-DMOPS_ID_payments___EN_58u89y11jc__findLocaleById
import { findLocaleById as DMOPS_ID_payments___EN_58u89y11jc__findLocaleById } from './dm-services/payments/locale/findLocaleById';
//CORE_REFERENCE_IMPORT-findAllLocales-DMOPS_ID_payments___EN_58u89y11jc__findAllLocales
import { findAllLocales as DMOPS_ID_payments___EN_58u89y11jc__findAllLocales } from './dm-services/payments/locale/findAllLocales';

export const DmRoutes = [
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-findSystemMessagesById-DMOPS_ID_payments___EN_710x105vc2__findSystemMessagesById
  DMOPS_ID_payments___EN_710x105vc2__findSystemMessagesById,
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-findAllSystemMessagess-DMOPS_ID_payments___EN_710x105vc2__findAllSystemMessagess
  DMOPS_ID_payments___EN_710x105vc2__findAllSystemMessagess,
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-findLocaleById-DMOPS_ID_payments___EN_58u89y11jc__findLocaleById
  DMOPS_ID_payments___EN_58u89y11jc__findLocaleById,
  //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-findAllLocales-DMOPS_ID_payments___EN_58u89y11jc__findAllLocales
  DMOPS_ID_payments___EN_58u89y11jc__findAllLocales,
];
