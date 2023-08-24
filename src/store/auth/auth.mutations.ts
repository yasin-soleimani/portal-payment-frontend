import { MUTATIONS } from "@/constants/mutations";
import { CurrentUser } from "@/interfaces/curent-user-login.module";
import { CreateNewPassword } from "@/interfaces/createNewPassword.model";
import { MutationTree } from "vuex";
import { AuthState } from "./auth.module";

export const AUTH_MUTATIONS: MutationTree<AuthState> = {
  [MUTATIONS.auth.updateMobile](state, value: string): void {
    state.loginForm.mobile = value;
  },

  [MUTATIONS.auth.updatePassword](state, value: string): void {
    state.loginForm.password = value;
  },

  [MUTATIONS.auth.toggleIsSubmitting](state): void {
    state.isSubmitting = !state.isSubmitting;
  },

  [MUTATIONS.auth.updateMobileRegister](state, value: string): void {
    state.registerForm.mobile = value;
  },

  [MUTATIONS.auth.updatePasswordRegister](state, value: string): void {
    state.registerForm.password = value;
  },

  [MUTATIONS.auth.updateRefRegister](state, value: string): void {
    state.registerForm.ref = value;
  },

  [MUTATIONS.auth.setCurrentUser](state, data: CurrentUser): void {
    state.user = data;
  },
  [MUTATIONS.auth.updateMobileForgetPassword](state, data: string): void {
    state.forgetPasswordUser.mobile = data;
  },
  [MUTATIONS.auth.updateCodeConfirm](state, code: string) {
    state.codeConfirm.code = code;
  },
  [MUTATIONS.auth.createNewPassword](state, password: string) {
    state.createNewPassword.password = password;
  },
  [MUTATIONS.auth.createNewPasswordConfirm](state, confirm: string) {
    state.createNewPassword.confirm = confirm;
  },
  [MUTATIONS.auth.postForgetNewPassword](state, value: CreateNewPassword) {
    state.createNewPassword = value;
  },

  [MUTATIONS.auth.formSubmitCodeConfirm](state, confirm: string) {
    state.codeConfirm.code = confirm;
  },
  [MUTATIONS.auth.forgetPasswordUser](state, mobile: string) {
    state.forgetPasswordUser.mobile = mobile;
  },
};
