<template>
  <div>
    <v-form @submit.prevent="registerForm" class="mx-5">
      <div class="parentInputRegister">
        <v-text-field
          outlined
          class="mt-4"
          label="موبایل"
          v-model.trim="$v.mobile.$model"
          :error-messages="mobileError"
          maxLength="11"
          required
        ></v-text-field>
      </div>

      <div class="parentInputRegister">
        <v-text-field
          outlined
          class="mt-2"
          label="گذرواژه"
          v-model.trim="$v.password.$model"
          :error-messages="passwordError"
          :type="showPassword ? 'text' : 'password'"
          required
        >
          <template v-slot:append>
            <v-btn @click="toggleShowPasswordRegister" color="black" icon small>
              <v-icon small>
                {{ showPassword ? "fas fa-eye" : "fas fa-eye-slash" }}
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>

      <div class="parentInputRegister">
        <v-text-field
          outlined
          class="mt-2"
          label="تکرار گذرواژه"
          v-model="confirm"
          :error-messages="errorConfirm"
          :type="showPasswordConfirm ? 'text' : 'password'"
          required
        >
          <template v-slot:append>
            <v-btn
              @click="toggleShowPasswordConfirmRegister"
              color="black"
              icon
              small
            >
              <v-icon small>
                {{ showPasswordConfirm ? "fas fa-eye" : "fas fa-eye-slash" }}
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <div class="text-right">
          <v-btn
            text
            color="teal"
            class="pa-1 ma-0"
            :to="{ name: 'ForgetPassword' }"
            >فراموشی رمز عبور</v-btn
          >
        </div>
      </div>

      <div class="parentInputRegister">
        <v-text-field outlined v-model="ref" label="کد معرف (اختیاری)" required>
        </v-text-field>
      </div>
      <v-btn
        type="submit"
        color="primary"
        block
        depressed
        large
        class="mt-4 my-5"
        :disabled="$v.$invalid"
        :loading="loading"
        >ثبت نام</v-btn
      >
    </v-form>
  </div>
</template>

<script lang="ts">
// import { authService } from "@/http/auth";
// import { RegisterFormData } from "@/interfaces/register-form-data.model";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import Vue from "vue";
import store from "@/store";
export default Vue.extend({
  name: "RegisterForm",
  mixins: [validationMixin],
  data() {
    return {
      showPassword: false,
      showPasswordConfirm: false,
      confirm: null,
      errorConfirm: "",
    };
  },

  methods: {
    toggleShowPasswordRegister() {
      this.showPassword = !this.showPassword;
    },

    toggleShowPasswordConfirmRegister() {
      this.showPasswordConfirm = !this.showPasswordConfirm;
    },
    registerForm() {
      console.log("click button submit form register");
      store.dispatch("app/updateLoading");
      if (this.password === this.confirm) {
        if (!this.$v.$invalid) {
          this.$store.dispatch("auth/formSubmitRegister");
        }
      } else {
        this.errorConfirm = "گذرواژه و تکرار آن با هم برابر نیستند";
        store.state.app.loading = false;
      }
    },
  },

  computed: {
    mobile: {
      get(): string {
        return this.$store.state.auth.registerForm.mobile;
      },
      set(value: string): void {
        this.$store.dispatch("auth/updateMobileRegister", value);
      },
    },

    mobileError(): string[] {
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
        return this.$store.state.auth.registerForm.password;
      },
      set(value: string): void {
        this.$store.dispatch("auth/updatePasswordRegister", value);
      },
    },

    passwordError(): string[] {
      const errors: string[] = [];
      if (!this.$v.password?.$dirty) {
        return errors;
      }
      !this.$v.password.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.password.minLength &&
        errors.push("پسورد شما باید حداقل 8 حرف باشد");
      return errors;
    },

    ref: {
      get(): string {
        return this.$store.state.auth.registerForm.ref;
      },
      set(value: string): void {
        this.$store.dispatch("auth/updateRefRegister", value);
      },
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

    password: {
      required,
      minLength: minLength(8),
    },
  },
});
</script>
