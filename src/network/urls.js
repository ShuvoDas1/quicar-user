// export const apiUrl = "http://localhost:5000";
export const apiUrl = "https://api.codepadding.com";
export const SOCKET_CONNECTION = "https://api.codepadding.com";

const RANTAL_END_POINT = "/api/v1/web/rental";




export const SEND_LOGIN_OTP = RANTAL_END_POINT+"/user/send-otp";
export const VERIFY_OTP = RANTAL_END_POINT+"/user/otp-verify";
export const REGISTRATION = RANTAL_END_POINT+"/user/registration";




export const HOME_API = RANTAL_END_POINT+"/home";
export const BANNER_BY_ID = RANTAL_END_POINT+"/banner/"
export const GET_CAR_TYPE = RANTAL_END_POINT+"/cartype"



export const RENTAL_REQUEST = RANTAL_END_POINT+"/car-rental/request-send"


export const GET_RIDE_LIST = RANTAL_END_POINT+"/car-rental"
export const GET_BIDDING_LIST = RANTAL_END_POINT+"/car-rental/get-all-bidding"


// Notification

export const GET_NOTIFICATION_LIST = RANTAL_END_POINT + "/notification"
export const GET_NOTIFICATION_BADGE = RANTAL_END_POINT + "/notification/badge"

// TUTORIAL 

export const GET_TUTORIAL_LIST = RANTAL_END_POINT + "/tutorial"

// POLICY

export const GET_POLICY = RANTAL_END_POINT + "/privacy"

// http://localhost:5000/api/v1/web/rental/car-rental/get-all-bidding?rideId=1

// export const getUserList = "api/admin/user";
// export const getUserInfo = "api/admin/user/getUserInfo";
// export const carRentalSummary = "api/admin/car-rental/summary";