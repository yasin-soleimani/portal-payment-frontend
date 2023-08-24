<template>
  <auth-layout>
    <ForgetPasswordUser />
  </auth-layout>
</template>

<script lang="ts">
import Vue from "vue";
import ForgetPasswordUser from "@/components/ForgetPasswordUser.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
export default Vue.extend({
  components: { AuthLayout, ForgetPasswordUser },
  name: "ForgetPassword",
});
</script>

<style></style>
