<template>
  <auth-layout>
    <confirm-new-password-user />
  </auth-layout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "../layout/AuthLayout.vue";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import ConfirmNewPasswordUser from "@/components/ConfirmNewPasswordUser.vue";
export default Vue.extend({
  components: { AuthLayout, ConfirmNewPasswordUser },
  name: "ConfirmNewPassword",

  data() {
    return {
      iconLock: faLock,
    };
  },
});
</script>

<style></style>
