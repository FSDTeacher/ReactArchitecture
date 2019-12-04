/*
 * File Description
 * API Utility
 *
 * Created on Mon Dec 31 2018
 * Created by: Gautam Sharma
 * Copyright (c) 2018
 */

// For node server
const BASE_URL_NODE_DEV = "https://spapiqa.policybazaar.com"; // QA
// const BASE_URL_NODE_DEV = "https://spapiuat.policybazaar.com"; // UAT
// const BASE_URL_NODE_DEV = "https://spapi.policybazaar.com"; // Live

// const BASE_URL_NODE_DEV = "http://spapiqa3.policybazaar.com"; // QA
// const BASE_URL_NODE_DEV = "http://10.0.145.87:9500"; // LOCAL
// const BASE_URL_NODE_DEV = "https://spapi.isecurebrokers.com";

const BASE_URL_NODE_PRODUCTION = "https://spapiqa.policybazaar.com"; // QA
// const BASE_URL_NODE_PRODUCTION = "https://spapiuat.policybazaar.com"; // UAT
// const BASE_URL_NODE_PRODUCTION = "https://spapi.policybazaar.com"; // Live

// const BASE_URL_NODE_PRODUCTION = "https://spapi.isecurebrokers.com";

const URLS = {
  BASE_URL: __DEV__ ? BASE_URL_NODE_DEV : BASE_URL_NODE_PRODUCTION,
  X_ACCESS_TOKEN: "x-access-token",
  GET_CITY_FROM_PINCODE:
    "https://healthapi.policybazaar.com/applicationservices/MasterService.svc/GetCityStateList?t=p&q=",

  AUTH_LOGIN: "/api/auth/login",
  LOGIN: "/api/v1/auth/loginUser",
  LOGOUT: "/api/v1/auth/logout/",
  REG_TOKEN: "/api/v1/auth/regenerateToken",
  REGISTRATION: "/api/v1/auth/registerUser",
  MOBILE_REG: "/api/v1/auth/isMobileRegistered",
  SENT_OTP: "/api/v1/auth/sendOTP",
  VERIFY_OTP: "/api/v1/auth/validateOTP",
  CHECK_OTP_STATUS: "/api/v1/auth/checkOTPStatus",
  FORGOT_PASSWORD: "/api/v1/auth/forgotPassword",
  META_DATA: "/api/v1/users/getMetaData",
  GET_BUSINESS_DETAILS: "/api/v1/business/getBusinessByAffiliate",
  GET_BOOKING_DETAILS: "/api/v1/business/getBookingsByAffiliate",
  GET_RENEWAL_STATS: "/api/v1/renewals/getRenewalStats",
  GET_PRODUCT_WISE_RENEWAL_COUNT: "/api/v1/renewals/getProductWiseRenewalCount",
  GET_RENEWAL_LEADS: "/api/v1/renewals/getRenewalLeads",
  GET_STATE: "/api/v1/global/getState",
  GET_CITY: "/api/v1/global/getCity/",
  GET_BUSINESS_SIZE: "/api/v1/global/getBusinessSize",
  GET_PROFESSION: "/api/v1/global/getProfessions",
  GET_BANK_LIST: "/api/v1/global/getBankList",
  GET_ASSOCIATION_TYPE: "/api/v1/global/getAssociationTypes/",
  GET_DIST_ASS_TYPE: "/api/v1/global/getDistributionByAssociationType/",
  GET_PROFILE_DETAILS: "/api/v1/affiliate/getAffiliateAccountDetails/",
  GET_CIRCLES: "/api/v1/global/getCircles",
  EDIT_PROFILE: "/api/v1/users/editProfile",
  INSURER_BY_VEHICLE: "/api/v1/ocs/getInsurersByVehiclePolicyType/1/",
  ADDON_BY_VEHICLE: "/api/v1/ocs/getAddOnsByVehiclePolicyType/1/",
  OFFLINE_REQUEST_LIST: "/api/v1/ocs/getCustomerDetailList",
  GET_OFFLINE_REQUEST_DETAILS: "/api/v1/ocs/getCustomerDetail",
  SAVE_OFFLINE_REQUEST: "/api/v1/ocs/insertCustomerDetails",
  OFF_MASTER_DATA: "/api/v1/ocs/getOfflineCaseMaster",
  GET_PARTNER_DETAILS: "/api/v1/affiliate/getAffiliateByParent/",
  STORE_COMMENTS: "/api/v1/ocs/storeComments",
  GET_INSURANCE_LEAD: "/api/v1/business/getLeadsByAffiliate",
  GET_SPECIAL_PRODUCTS: "/api/v1/global/getSpecialProducts",
  RE_REQUEST_INS_MAPPING: "/api/v1/ocs/reRequestInsurerMapping",
  ACCEPT_QUOTE: "/api/v1/ocs/quoteInspectionProcess",
  MAKE_CHANGES: "/api/v1/ocs/quoteChangeRequest",
  DECLINE_ALL: "/api/v1/ocs/declineQuotes",
  OFF_FILE_UPLOAD: "/api/v1/ocs/uploadDocument",
  GET_PAYMENT_VIA_INSURER: "/api/v1/ocs/getPaymentByOfflineInsurer",
  UPDATE_PAYMENT_DETAILS: "/api/v1/ocs/updatePaymentDetails",
  INS_POLICY_FORM: "/api/v1/ocs/insertPolicyDetailsForm",
  INS_PAYMENT_FORM: "/api/v1/ocs/insertPaymentDetailsForm",
  CHANGE_MOBILE_NO:
    "http://www.salespointonline.com/api/profile/mobile-status-update",
  GET_STEPS: "/api/v1/global/getStepStatus",

  GET_ALL_ISSUES_TYPE: "/api/v1/ticketing/getAllIssueTypes",
  GET_ALL_PRODUCT: "/api/v1/global/getAllProducts",
  GET_INSURER_BY_PRODUCT: "/api/v1/global/getInsurerByProduct/",
  GET_PLAN_BY_INSURER: "/api/v1/global/getPlansByInsurerProduct",
  GET_FIELDS_BY_ISSUE_TYPE: "/api/v1/ticketing/getFieldsByIssueType",
  GET_ALL_TICKETS: "/api/v1/ticketing/getAllTickets",
  GET_TICKET_DETAILS: "/api/v1/ticketing/getTicketById/",
  GET_TICKET_STATUS: "/api/v1/ticketing/getAllStatusType/",
  SAVE_TICKETS: "/api/v1/ticketing/saveWithMultipart",
  GET_ENDORSEMENT_MASTER_LIST: "/api/v1/ticketing/getEndorsementMasterList",
  SAVE_TICKETS_REMARKS: "/api/v1/ticketing/saveRemarksWithMultipart",
  GET_LEAD_INFO: "/api/v1/lead/getLeadDetailsById",

  REGISTER_PARTNER: "/api/v1/affiliate/registerPartner",

  MORE_PRODUCTS_CATEGORY: "/api/v1/global/getCategoriesForMoreProduct",
  MORE_PRODUCTS_PLAN: "/api/v1/global/getCategoryWisePlans",
  REG_FCM_TOKEN: "/api/v1/notification/saveNotificationToken",
  GET_NOTIFICATION_LIST: "/api/v1/notification/getNotificationList",
  READ_NOTIFICATION: "/api/v1/notification/updateNotificationReadStatus",

  GET_LOAN_PRODUCTS: "/api/v1/global/getLoansProducts",
  GET_LOAN_CITY: "/api/v1/global/getPaisaBazaarCities",
  GET_FINANCE_PARTNERS: "/api/v1/lead/getFinancePartners",
  GET_FINANCE_LEAD_LISTING: "/api/v1/lead/getFinancialLeads",
  GET_FINANCE_LEAD_LOGS: "/api/v1/lead/getFinancialLeadLogs",
  GET_FINANCE_LEAD_STATUS_LIST: "/api/v1/lead/getFinancialLeadStatusList",
  GET_FINANCE_LEAD_SUB_STATUS_LIST:
    "/api/v1/lead/getFinancialLeadSubStatusByStatusId",
  GET_FINANCE_LEAD_DOCUMENTS: "/api/v1/lead/getFinancialLeadDocument",
  GET_FINANCE_LEAD_STATS:
    "/api/v1/lead/getStatusWiseFinancialLeadsBusinessStats",
  GET_FINANCE_PRODUCT_STATS:
    "/api/v1/lead/getFormattedProductWiseDisbursedStats",
  GET_FINANCE_BANK_LIST: "http://dev2.91advisors.com/api/generalApi",
  UPDATE_LOAN_LEAD_DOC: "/api/v1/lead/updateLeadDocument",
  CREATE_LOAN_LEAD: "/api/v1/lead/saveFinancialLead",
  UPDATE_LOAN_LEAD_STATUS: "/api/v1/lead/updateFinanceLeadStatus",
  UPLOAD_LOAN_LEAD_DOC:
    "http://dev2.91advisors.com/api/uploadFinancialDocument",
  ASSIGN_FIN_LEAD: "/api/v1/lead/updateLeadAssignment",
  CREATE_USEDCAR_LEAD: "/api/v1/cars/createUpdateCarLead",
  GET_USEDCAR_LEAD_STATS: "/api/v1/cars/getCarDashboardStats",
  GET_USEDCAR_LEAD_LISTING: "/api/v1/cars/getLeadDetails",
  GET_USED_CAR_STATUS: "/api/v1/cars/GetLeadStatusList",

  GET_OSV_ACTIVITY_LOG: "/api/v1/lead/getOsvActivityHistory",
  GET_OSV_STATUS: "/api/v1/lead/getOsvStatusCounts",
  GET_OSV_DOC_CHECKLIST: "/api/v1/lead/getFinanceDocumentsListByProduct",
  SAVE_OSV_DOC_CHECKLIST: "/api/v1/lead/saveDocumentChecklistDetail"
};

export default URLS;
