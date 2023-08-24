const API = {
  auth: {
    login: "v1/login",
    register: "v1/member/register",
    forgetPassword: "v1/getforgetcode",
    verifyCode: "v1/verifycode",
    newpassword: "v1/newpassword",
  },
  panel: {
    accounts: "v1/login/accounts",
    dashboard: "v1/history/dashboard",
    getinformation: "v1/login/getinformation",
    reCharge: "v1/payment/simcard/recharge",
    destinationinfo: "v1/payment/destinationinfo",
    packageCategories:
      "v1/payment/simcard/packageCategories?mobileOperatorId=0",
    info: "v1/billinquiry/info",
    profile: "v1/profile",
    change: "v1/newpassword/change",
    list: "v1/token/list",
    banks: "v1/checkout/banks",
    management: "v1/card/management",
  },
};

export default API;
