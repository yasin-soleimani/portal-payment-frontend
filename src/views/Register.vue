<template>
  <auth-layout>
    <v-card class="parentFormRegister mx-auto" max-width="400">
      <div class="mt-5 mb-4">
        <h4 class="text-h5 text-right ma-3 pt-4">ثبت نام</h4>
      </div>
      <hr />
      <register-form />
      <hr />
      <!-- <v-btn
        class="mx-3 my-5"
        text
        color="primary"
        :to="{ name: 'ForgetPassword' }"
        >فراموشی رمز عبور</v-btn
      > -->
      <v-btn class="mx-3 my-5" text color="primary" :to="{ name: 'Login' }"
        >ورود به حساب کاربری</v-btn
      >
    </v-card>
    <snackbar />
  </auth-layout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Snackbar from "@/components/Snackbar.vue";
export default Vue.extend({
  components: { AuthLayout, RegisterForm, Snackbar },
  name: "Register",
});
</script>

<style>
.parentFormRegister {
  margin-top: 120px;
}
.parentInputRegister {
  position: relative;
}

.iconMobile {
  position: absolute;
  top: 20px;
  left: 15px;
}

.iconPassword {
  position: absolute;
  top: 20px;
  left: 15px;
}

.iconConfirm {
  position: absolute;
  top: 20px;
  left: 15px;
}

.iconUser {
  position: absolute;
  top: 20px;
  left: 15px;
}

@media only screen and (max-width: 400px) {
  .parentFormRegister {
    max-width: 90% !important;
    margin-top: 50px !important;
  }
}
</style>
