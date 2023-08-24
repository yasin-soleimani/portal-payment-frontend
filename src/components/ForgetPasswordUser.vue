<template>
  <div>
    <v-form @submit.prevent="submitForgetPassword" class="mx-5">
      <v-card class="parentCardForgetPassword mx-auto" max-width="400">
        <h4 class="text-h5 pt-3">بازیابی کلمه عبور</h4>
        <div class="parentInputForgetPassword mx-5">
          <v-text-field
            class="mt-4"
            outlined
            maxlength="11"
            label="شماره موبایل"
            v-model="$v.mobile.$model"
            :error-messages="mobileErrors"
          >
          </v-text-field>
          <v-btn
            color="primary mb-4"
            type="submit"
            depressed
            block
            large
            :disabled="$v.$invalid"
            :loading="loading"
            >ارسال</v-btn
          >
        </div>
        <hr />
        <div>
          <v-btn
            class="mx-3 my-3"
            text
            color="primary"
            :to="{ name: 'Register' }"
            >ثبت نام</v-btn
          >
          <v-btn class="mx-3 my-3" text color="primary" :to="{ name: 'Login' }"
            >ورود</v-btn
          >
        </div>
      </v-card>
      <snackbar />
    </v-form>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import Snackbar from "@/components/Snackbar.vue";
export default Vue.extend({
  name: "ForgetPasswordUser",
  mixins: [validationMixin],

  components: { Snackbar },

  computed: {
    mobile: {
      get(): string {
        return this.$store.state.auth.forgetPasswordUser.mobile;
      },
      set(value: string): void {
        this.$store.dispatch("auth/updateMobileForgetPassword", value);
      },
    },
    mobileErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.mobile?.$dirty) {
        return errors;
      }
      !this.$v.mobile.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.mobile.minLength && errors.push("شماره موبایل صحیح نمی باشد");
      !this.$v.mobile.maxLength && errors.push("تکمیل این فیلد الزامیست");
      return errors;
    },

    loading(): boolean {
      return store.state.app.loading;
    },
  },

  validations: {
    mobile: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
  },
  methods: {
    submitForgetPassword(): void {
      store.dispatch("app/updateLoading");
      this.$store.dispatch("auth/forgetPasswordUser", this.mobile);
      if (!this.$v.$invalid) {
        //TODO:
        this.$router.push("/confirmNewPassword");
        this.$store.dispatch("auth/formSubmitForgetPasswordUser");
      }
    },
  },
});
</script>

<style>
.parentCardForgetPassword {
  background: blue;
  margin-top: 300px;
}
.parentInputForgetPassword {
  position: relative;
}

.iconMobile {
  position: absolute;
  top: 20px;
  left: 15px;
}

@media screen and (max-width: 380px) {
  .parentCardForgetPassword {
    max-width: 100% !important;
    margin-top: 150px !important;
    margin: auto !important;
  }
}
</style>
