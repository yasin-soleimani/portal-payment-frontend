<template>
  <auth-layout>
    <div>
      <Create-new-password-user class="parent" />
    </div>
  </auth-layout>
</template>

<script lang="ts">
import Vue from "vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import CreateNewPasswordUser from "@/components/CreateNewPasswordUser.vue";
export default Vue.extend({
  name: "CreateNewPassword",
  components: {
    AuthLayout,
    CreateNewPasswordUser,
  },
});
</script>

<style lang="scss">
.parent {
  margin: $margin-mx;
  text-align: $text-center;
}

@media screen and (max-width: 380px) {
  .parent {
    max-width: 90% !important;
  }
}
</style>
