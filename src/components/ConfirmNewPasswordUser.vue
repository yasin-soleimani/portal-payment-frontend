<template>
  <div>
    <v-card class="parentCardNewPassoword mx-auto mx-2" max-width="400">
      <p class="pt-3">یک کد ۴ رقمی به شماره همراه شما ارسال شده است.</p>
      <div class="parentInputConfirmNewPassword mx-5">
        <!-- <v-text-field class="mt-4" label="کد ۴ رقمی" :counter="4">
        </v-text-field> -->
        <input
          @input="digit4InputListener"
          type="text"
          ref="code4"
          class="inputCode"
          v-model.trim="digit4"
        />
        <input
          @input="digit3InputListener"
          type="text"
          ref="code3"
          class="inputCode"
          v-model.trim="digit3"
        />
        <input
          @input="digit2InputListener"
          type="text"
          ref="code2"
          class="inputCode"
          v-model.trim="digit2"
        />
        <input
          @input="digit1InputListener"
          type="text"
          ref="code1"
          class="inputCode"
          v-model.trim="digit1"
        />
        <v-btn
          @click="submitCodeSms"
          color="primary my-4"
          ref="submitButton"
          :loading="loading"
          >تایید</v-btn
        >
        <p>ارسال مجدد پیامک</p>
      </div>
      <hr />
      <div>
        <v-btn @click="numberEdit" class="mx-3 my-3" text color="primary"
          >اصلاح شماره همراه</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "ConfirmNewPasswordUser",
  data() {
    return {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
    };
  },

  computed: {
    code: {
      get(): string {
        return this.$store.state.auth.codeConfirm.code;
      },
      set(code: string): void {
        this.$store.dispatch("auth/updateCodeConfirm", code);
      },
    },

    loading(): boolean {
      return store.state.app.loading;
    },
  },

  mounted(): void {
    const input1 = this.$refs?.code1 as HTMLInputElement;

    if (input1) {
      input1.focus();
    }
  },

  methods: {
    submitCodeSms() {
      const code = this.digit1 + this.digit2 + this.digit3 + this.digit4;

      if (code.length === 4) {
        this.$store.dispatch("auth/updateCodeConfirm", code);

        this.$store.dispatch("auth/formSubmitCodeConfirm", code);

        this.$router.push("/createNewPassword");
      } else {
        alert("کد ارسالی شما معتبر نمی باشد");
      }
    },

    digit3InputListener(): void {
      if (this.digit3.length === 1) {
        const input4 = this.$refs?.code4 as HTMLInputElement;
        input4.focus();
      }
    },

    digit2InputListener(): void {
      if (this.digit2.length === 1) {
        const input3 = this.$refs?.code3 as HTMLInputElement;
        input3.focus();
      }
    },

    digit1InputListener(): void {
      if (this.digit1.length === 1) {
        const input2 = this.$refs?.code2 as HTMLInputElement;
        input2.focus();
      }
    },

    numberEdit() {
      this.$router.push("ForgetPassword");
    },
  },
});
</script>

<style lang="scss">
.parentCardNewPassoword {
  margin-top: 300px;
}
.parentInputConfirmNewPassword {
  position: relative;
}

.iconInputConfirmNewPassword {
  position: absolute;
  top: 20px;
  left: 15px;
}

.inputCode {
  background: #f9dada;
  margin: 5px;
  color: $color-text;
  width: 80px;
  height: 100px;
  border-radius: $border-radius;
  text-align: $text-center;
  font-size: 25px;
  outline-color: $color-text;
}

@media screen and (max-width: 380px) {
  .inputCode {
    background: #f9dada;
    margin: 5px;
    color: $color-text;
    width: 50px;
    height: 80px;
    border-radius: $border-radius;
    text-align: $text-center;
    font-size: 25px;
    outline-color: $color-text;
  }

  .parentCardNewPassoword {
    max-width: 90% !important;
    margin-top: 50% !important;
  }
}
</style>
