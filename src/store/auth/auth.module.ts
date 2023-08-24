// import { loginFormData, registerFormData } from "@/http/auth";
import { CodeConfirm } from "@/interfaces/codeConfirm.model";
import { CreateNewPassword } from "@/interfaces/createNewPassword.model";
import { CurrentUser } from "@/interfaces/curent-user-login.module";
import { ForgetPasswordUser } from "@/interfaces/forgetPasswordUser.module";
import { LoginFormData } from "@/interfaces/login-form-data.model";
import { RegisterFormData } from "@/interfaces/register-form-data.model";
import { Module } from "vuex";
import { RootState } from "..";
import { AUTH_ACTIONS } from "./auth.actions";
import { AUTH_MUTATIONS } from "./auth.mutations";

export interface AuthState {
  forgetPasswordUser: ForgetPasswordUser;
  codeConfirm: CodeConfirm;
  createNewPassword: CreateNewPassword;
  loginForm: LoginFormData;
  registerForm: RegisterFormData;
  isSubmitting: boolean;
  user: CurrentUser | null;
}

const INITIAL_STATE: AuthState = {
  forgetPasswordUser: {
    mobile: "",
  },

  codeConfirm: {
    code: "",
  },

  createNewPassword: {
    mobile: "",
    password: "",
    confirm: "",
    acode: "",
  },

  loginForm: {
    mobile: "",
    password: "",
    devicetype: "web",
  },

  registerForm: {
    mobile: "",
    password: "",
    ref: "",
    devicetype: "web",
  },

  isSubmitting: false,
  user: null,
};
export const auth: Module<AuthState, RootState> = {
  actions: AUTH_ACTIONS,
  getters: {},
  mutations: AUTH_MUTATIONS,
  state: INITIAL_STATE,
  namespaced: true,
};
