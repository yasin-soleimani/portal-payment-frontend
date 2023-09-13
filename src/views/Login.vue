<template>
  <auth-layout>
    <div class="d-flex">
      <v-card
        class="card-login-form mx-auto rounded-lg pt-6"
        min-width="400"
        max-width="400"
        max-height="450px"
        elevation="2"
      >
        <div>
          <p class="my-3 text-h6 font-weight-light">
            به پورتال
            <strong class="text-primary">پرداخت ریالی</strong> خوش آمدید
          </p>
        </div>

        <login-form />

        <v-btn
          text
          color="primary"
          class="mt-4 mb-5 mx-3"
          :to="{ name: 'Register' }"
          >حساب کاربری ندارید؟
        </v-btn>
      </v-card>

      <!-- two card -->

      <v-card
        class="parent-background-image mx-auto rounded-lg"
        min-width="700"
        max-width="700"
        elevation="0"
      >
        <div class="background-image">
          <img
            width="700px"
            height="700px"
            src="../assets/images/background-note-2.svg"
            alt="background-image"
          />
        </div>
      </v-card>
    </div>
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
.card-login-form {
  margin-top: 180px !important;
}

.parent-background-image {
  margin-top: 60px !important;
}

.text-primary {
  color: blueviolet;
}

//media

@media only screen and (max-width: 400px) {
  .card-login-form {
    max-width: 90% !important;
    margin-top: 50px !important;
  }
}
</style>
