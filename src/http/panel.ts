import API from "@/constants/api";
import JWT from "@/static/JWT";
import store from "@/store";
import axiosUtil from "@/utils/axios.util";
import { AxiosResponse } from "axios";
// import getJwt from "@/utils/Jwt";

async function getWallets(): Promise<AxiosResponse> {
  const url = API.panel.accounts;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token getWallets", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getHistory(): Promise<AxiosResponse> {
  const url = API.panel.dashboard;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token getHistory", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getinformation(): Promise<AxiosResponse> {
  const url = API.panel.getinformation;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token getinformation", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

//TODO:
async function reChargeSimcard(): Promise<AxiosResponse> {
  const url = API.panel.reCharge;
  // const token = localStorage.getItem("user");
  const token = JWT;
  const body = {
    amount: store.state.panel.dataReCharge.amount,
    mobile: store.state.panel.dataReCharge.mobile,
    operator: store.state.panel.dataReCharge.operator,
    rechargeCode: store.state.panel.dataReCharge.rechargeCode,
    optionalMessage: "شارژ بابت هدیه تولد شما",
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function destinationinfo(): Promise<AxiosResponse> {
  const url = API.panel.destinationinfo;
  // const token = localStorage.getItem("user");
  const token = JWT;
  const body = {
    query: store.state.panel.mobileCard,
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function destinationinfoCardNumber(): Promise<AxiosResponse> {
  const url = API.panel.destinationinfo;
  // const token = localStorage.getItem("user");
  const token = JWT;
  const body = {
    query: store.state.panel.cardNumber,
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getListInternetOperator(): Promise<AxiosResponse> {
  const url = API.panel.packageCategories;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token getListOperator", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function postDataPaymentBill(): Promise<AxiosResponse> {
  const url = API.panel.info;
  // const token = localStorage.getItem("user");
  const token = JWT;
  const body = {
    id: store.state.panel.listItemOperatorBill.id,
    asSave: store.state.panel.listItemOperatorBill.isSave,
    title: store.state.panel.listItemOperatorBill.item,
    type: store.state.panel.listItemOperatorBill.type,
  };
  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function profile(): Promise<AxiosResponse> {
  const url = API.panel.profile;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token getProfile", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function change(): Promise<AxiosResponse> {
  const url = API.panel.change;
  // const token = localStorage.getItem("user");
  const token = JWT;
  const body = {
    newpassword: store.state.panel.forgetPasswordSettingProfile.newPassword,
    password: store.state.panel.forgetPasswordSettingProfile.password,
  };
  return axiosUtil.put(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function list(): Promise<AxiosResponse> {
  const url = API.panel.list;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token list", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function banks(): Promise<AxiosResponse> {
  const url = API.panel.banks;
  // const token = localStorage.getItem("user");
  const token = JWT;
  console.log("token banks", token);
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function cards(): Promise<AxiosResponse> {
  const url = API.panel.management;
  const token = JWT;
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export const panelService = {
  getWallets,
  getHistory,
  getinformation,
  reChargeSimcard,
  destinationinfo,
  destinationinfoCardNumber,
  getListInternetOperator,
  postDataPaymentBill,
  profile,
  change,
  list,
  banks,
  cards,
};
