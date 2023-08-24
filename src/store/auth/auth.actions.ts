import { authService } from "@/http/auth";
import { ActionTree } from "vuex";
import { AuthState } from "./auth.module";
import router from "@/router";
import { MUTATIONS } from "@/constants/mutations";
import { HTTP_RESPONSE_STATUS } from "@/static/http-response-status";
import store from "..";

export const AUTH_ACTIONS: ActionTree<AuthState, RootState> = {
  updateMobile(context, value: string): void {
    context.commit(MUTATIONS.auth.updateMobile, value);
  },

  updatePassword(context, value: string): void {
    context.commit(MUTATIONS.auth.updatePassword, value);
  },

  toggleIsSubmitting(context): void {
    context.commit(MUTATIONS.auth.toggleIsSubmitting);
  },

  updateMobileRegister(context, value: string): void {
    context.commit(MUTATIONS.auth.updateMobileRegister, value);
  },

  updatePasswordRegister(context, value: string): void {
    context.commit(MUTATIONS.auth.updatePasswordRegister, value);
  },

  updateRefRegister(context, value: string): void {
    context.commit(MUTATIONS.auth.updateRefRegister, value);
  },

  formSubmitLogin(context): void {
    context.dispatch("toggleIsSubmitting");
    const data = context.state.loginForm;
    authService
      .login(data)
      .then((response) => {
        context.commit(MUTATIONS.auth.setCurrentUser, response);
        // navigate to panel
        context.commit(MUTATIONS.auth.toggleIsSubmitting);

        router.push({ name: "ListTransactions" });
      })
      .catch((response) => {
        context.dispatch("toggleIsSubmitting");
        store.state.panel.textSnackbar = response;
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
      });
  },

  formSubmitRegister(context): void {
    const data = context.state.registerForm;

    authService
      .register(data)
      .then((response) => {
        store.state.app.loading = false;
        store.state.panel.textSnackbar = response.data.message;
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
        if (response.status === HTTP_RESPONSE_STATUS.success) {
          context.commit("");
          router.push("/login");
        }
      })
      .catch((response) => {
        store.state.app.loading = false;
        context.dispatch("toggleIsSubmitting");
        console.log("log response submit register:", response.error);
        store.state.panel.textSnackbar = response.error;
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
      });
  },

  updateMobileForgetPassword(context, value: string): void {
    context.commit(MUTATIONS.auth.updateMobileForgetPassword, value);
  },

  formSubmitForgetPasswordUser(context): void {
    const data = context.state.forgetPasswordUser;

    authService
      .forgetPassword(data)
      .then((response) => {
        store.state.app.loading = false;
        // alert(response.data.message);
        store.state.panel.textSnackbar = response.data.message;
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
        router.push("/confirmNewPassword");
      })
      .catch((response) => {
        store.state.app.loading = false;
        // alert(response.error);
        store.state.panel.textSnackbar = response.error;
        store.state.panel.showSnackbar = true;
        setTimeout(() => {
          store.state.panel.showSnackbar = false;
        }, 3000);
      });
  },

  forgetPasswordUser(context, value: string): void {
    context.commit(MUTATIONS.auth.forgetPasswordUser, value);
  },

  updateCodeConfirm(context, value: string) {
    context.commit(MUTATIONS.auth.updateCodeConfirm, value);
  },

  createNewPassword(context, value: string) {
    context.commit(MUTATIONS.auth.createNewPassword, value);
  },

  createNewPasswordConfirm(context, value: string) {
    context.commit(MUTATIONS.auth.createNewPasswordConfirm, value);
  },

  postForgetNewPassword(context) {
    const data: any = {
      password: context.state.createNewPassword.password,
      mobile: context.state.forgetPasswordUser.mobile,
      acode: context.state.codeConfirm.code,
    };

    authService
      .newpassword(data)
      .then((response) => {
        store.state.app.loading = false;
        context.commit(MUTATIONS.auth.postForgetNewPassword, response.data);
        response.status === HTTP_RESPONSE_STATUS.created &&
          router.push({ name: "Login" });
      })
      .catch((response) => {
        store.state.app.loading = false;
        console.log("log response forget password post:", response.error);
      });
  },

  formSubmitCodeConfirm(context): void {
    const data = {
      code: context.state.codeConfirm.code,
      mobile: context.state.forgetPasswordUser.mobile,
    };
    if (data.code && data.mobile !== "") {
      authService
        .codeConfirmUser(data)
        .then((response) => {
          alert(response.data);
        })
        .catch((response) => {
          alert(response.error);
        });
    }
  },

  // formSubmitCreateNewPasswordAndConfirm(context): void {
  //   const data = {
  //     password: context.state.createNewPassword.password,
  //     confirm: context.state.createNewPassword.confirm,
  //   };

  //   context.commit()
  // },
};
