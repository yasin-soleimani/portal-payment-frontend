<template>
  <div>
    <v-form @submit.prevent="onSubmit" class="mx-5 mt-6">
      <div class="parentInputLogin">
        <v-text-field
          outlined
          class="styleInputLogin mt-5"
          label="شماره موبایل"
          v-model.trim="$v.mobile.$model"
          :error-messages="mobileErrors"
          maxlength="11"
          hide-details="auto"
        >
        </v-text-field>
      </div>

      <div class="parentInputLogin">
        <v-text-field
          outlined
          class="styleInputLogin mt-5"
          label="گذرواژه"
          v-model.trim="$v.password.$model"
          :error-messages="passwordErrors"
          hide-details="auto"
          :type="showPassword ? 'text' : 'password'"
        >
          <template v-slot:append>
            <v-btn @click="toggleShowPasswordLogin" color="black" icon small>
              <v-icon small>
                {{ showPassword ? "fas fa-eye" : "fas fa-eye-slash" }}
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <div class="text-right">
          <v-btn
            text
            color="teal"
            class="mt-3 pa-1 ma-0"
            :to="{ name: 'ForgetPassword' }"
            >فراموشی رمز عبور</v-btn
          >
        </div>
      </div>
      <v-btn
        min-width="60%"
        max-width="60%"
        type="submit"
        block
        large
        color="primary"
        class="mt-6 mb-5 rounded-lg"
        :loading="loading"
        :disabled="$v.$invalid"
        >ورود</v-btn
      >
    </v-form>
  </div>
</template>

<script lang="ts">
// import { authService } from "@/http/auth";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default Vue.extend({
  name: "LoginForm",
  mixins: [validationMixin],
  data() {
    return {
      showPassword: false,
    };
  },

  computed: {
    mobile: {
      get(): string {
        return this.$store.state.auth.loginForm.mobile;
      },
      set(value: string): void {
        this.$store.dispatch("auth/updateMobile", value);
      },
    },

    mobileErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.mobile?.$dirty) {
        return errors;
      }
      !this.$v.mobile.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.mobile.minLength && errors.push("شماره موبایل صحیح نیست");
      !this.$v.mobile.maxLength && errors.push("شماره موبایل صحیح نیست");
      return errors;
    },
    password: {
      get(): string {
        return this.$store.state.auth.loginForm.password;
      },
      set(value: string): void {
        this.$store.dispatch("auth/updatePassword", value);
      },
    },
    passwordErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.password?.$dirty) {
        return errors;
      }
      !this.$v.password.minLength &&
        errors.push("پسورد شما باید حداقل 8 حرف باشد");
      !this.$v.password.required && errors.push("تکمیل این فیلد الزامیست");
      return errors;
    },

    devicetype: {
      get(): string {
        return this.$store.state.auth.loginForm.devicetype;
      },
    },

    loading(): boolean {
      return this.$store.state.auth.isSubmitting;
    },
  },

  validations: {
    mobile: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    toggleShowPasswordLogin() {
      this.showPassword = !this.showPassword;
    },
    onSubmit(): void {
      if (!this.$v.$invalid) {
        this.$store.dispatch("auth/formSubmitLogin");
      }
    },
  },
});
</script>

//
