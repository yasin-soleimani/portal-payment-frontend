<template>
  <auth-layout>
    <v-card class="cardFormLogin mx-auto rounded-lg" max-width="400">
      <div class="d-flex justify-space-between my-3">
        <h4 class="text-right text-h5 mx-3 py-3">ورود</h4>
        <!-- <img
          class="mt-2 mx-3"
          src="../assets/images/policeFata.png"
          width="50"
          height="50"
          alt="photo-police-fata"
        /> -->
      </div>
      <hr />
      <div>
        <v-icon color="#ea7" size="196" class="iconQr mt-5">
          fas fa-qrcode
        </v-icon>
        <p class="my-3">
          برای ورود، QR را با
          <strong class="text-primary">اپلیکیشن</strong> خود اسکن کنید.
        </p>
      </div>

      <login-form />
      <hr />

      <v-btn
        text
        color="primary"
        class="mt-4 mb-5 mx-3"
        :to="{ name: 'Register' }"
        >حساب کاربری ندارید؟
      </v-btn>
      <!-- <v-btn
        text
        color="primary"
        class="mt-4 mb-5 mx-3"
        :to="{ name: 'ForgetPassword' }"
        >فراموشی رمز عبور</v-btn
      > -->
    </v-card>
    <snackbar />
  </auth-layout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import LoginForm from "@/components/LoginForm.vue";
import Snackbar from "@/components/Snackbar.vue";

export default Vue.extend({
  name: "Login",

  components: { AuthLayout, LoginForm, Snackbar },
});
</script>

<style lang="scss">
.cardFormLogin {
  margin-top: 120px;
}
.parentInputLogin {
  position: relative;
}

.IconMobileInputLogin {
  position: absolute;
  top: 20px;
  left: 15px;
}

.IconLockInputLogin {
  position: absolute;
  top: 20px;
  left: 15px;
}

.iconQr {
  font-size: 100px;
}

.textError {
  text-align: $text-right;
  color: red;
  font-size: 13px;
}

.text-primary {
  color: blueviolet;
}

//media

@media only screen and (max-width: 400px) {
  .cardFormLogin {
    max-width: 90% !important;
    margin-top: 50px !important;
  }
}
</style>
