import API from "@/constants/api";
import { LoginFormData } from "@/interfaces/login-form-data.model";
import { AxiosResponse } from "axios";
import { RegisterFormData } from "@/interfaces/register-form-data.model";
import { ForgetPasswordUser } from "@/interfaces/forgetPasswordUser.module";
import { CodeConfirm } from "@/interfaces/codeConfirm.model";
import { CreateNewPassword } from "@/interfaces/createNewPassword.model";
import axiosUtil from "@/utils/axios.util";

async function login(data: LoginFormData): Promise<AxiosResponse> {
  const url = API.auth.login;
  return new Promise((resolve, reject) => {
    axiosUtil.post(url, data).then((response) => {
      if (response.data.status === 200) {
        resolve(response);
        const token = response.data.token;
        localStorage.setItem("user", token);
      } else {
        reject(response.data.message);
      }
    });
  });
}

async function register(data: RegisterFormData): Promise<AxiosResponse> {
  const url = API.auth.register;
  return axiosUtil.post(url, data);
}

async function forgetPassword(
  data: ForgetPasswordUser
): Promise<AxiosResponse> {
  const url = API.auth.forgetPassword;
  return axiosUtil.post(url, data);
}

async function codeConfirmUser(data: CodeConfirm): Promise<AxiosResponse> {
  const url = API.auth.verifyCode;
  return axiosUtil.post(url, data);
}

async function newpassword(
  data: CreateNewPassword
): Promise<AxiosResponse<AxiosResponse>> {
  const url = API.auth.newpassword;
  return axiosUtil.post(url, data);
}

export const authService = {
  login,
  register,
  forgetPassword,
  codeConfirmUser,
  newpassword,
};
