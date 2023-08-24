<template>
  <div class="d-flex my-5 mx-5">
    <v-card class="mx-auto" width="650">
      <v-card-text>
        <div class="title-bills">
          <div class="text-right">
            <b class="text-h6">پرداخت قبض {{ text }}</b>
          </div>
          <br />

          <img
            class="my-3"
            :src="require(`../assets/images/` + img)"
            alt="photo-bill"
            width="80"
          />
        </div>
        <v-text-field
          outlined
          class="styleInputLogin mt-4"
          label="شناسه قبض"
          v-model.trim="$v.id.$model"
          :error-messages="idErrors"
          maxlength="11"
          hide-details="auto"
        >
        </v-text-field>

        <v-checkbox
          class="checkboxPament"
          label="ذخیره در لیست قبض‌های من"
        ></v-checkbox>
        <v-btn @click="postData" class="my-5 primary" large depressed primary
          >ارسال</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
// import store from "@/store";
import store from "@/store";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import Vue from "vue";

export default Vue.extend({
  name: "PaymentBill",
  mixins: [validationMixin],

  computed: {
    id: {
      get(): any {
        return store.state.panel.listItemOperatorBill.id;
      },
      set(value: number): void {
        store.dispatch("panel/setIdForListItemOperatorBill", value);
      },
    },

    idErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.id?.$dirty) {
        return errors;
      }
      !this.$v.id.required && errors.push("تکمیل این فیلد الزامیست");
      return errors;
    },
    text() {
      return store.state.panel.listItemOperatorBill.item;
    },
    img() {
      return store.state.panel.listItemOperatorBill.img;
    },
  },

  methods: {
    getDataStore(): void {
      console.log(
        "get data store",
        store.state.panel.listItemOperatorBill.item
      );
    },
    postData(): void {
      //TODO:
      store.dispatch("panel/postDataPaymentBill");
      console.log("get data as store:", store.state.panel.listItemOperatorBill);
    },
  },

  validations: {
    id: {
      required,
    },
  },
});
</script>

<style lang="scss" scoped>
.checkboxPament {
  .lable {
    background: white;
    color: brown;
  }
}
</style>
