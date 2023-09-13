<template>
  <div>
    <div class="mx-auto parent-title-cards text-right mx-5 pt-5">
      <div class="mt-2">
        <span class="title-cards font-weight-medium">سلام full name عزیز </span>
      </div>
      <br />
      <div class="mt-0">
        <span class="title-cards font-weight-medium">
          به پورتال مدیریتی پرداخت ریالی خوش آمدید
        </span>
      </div>
      <br />
      <div class="mt-2">
        <span class="title-cards font-weight-medium"
          >کارت های بانکی شما :
        </span>
      </div>
    </div>
    <div class="itemCardNavbar justify-space-between pt-2">
      <div class="cardNavbar">
        <account-card
          v-for="item in 2"
          :key="item.title"
          :title="item.title"
          :text="item.text"
          :value="item.value"
          :icon="item.icon"
        />
      </div>
    </div>
    <div class="mx-auto parent-title-cards text-right mx-5 pt-5">
      <div class="my-2 text-right">
        <span class="title-cards font-weight-medium">
          جدید ترین تراکنش های شما :
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import AccountCard from "./AccountCard.vue";
// import AlertSuccessful from "@/components/AlertSuccessful.vue";
export default Vue.extend({
  name: "DefaultMainPanel",
  computed: {
    ...mapGetters("panel", {
      wallets: "wallets",
    }),
  },
  components: { AccountCard },
});
</script>

<style lang="scss">
.itemCardNavbar {
  max-width: 100%;
  display: flex;
  margin: $margin-mx;
  max-height: 50%;
  justify-content: $justify-flex-start;
  flex-wrap: wrap;
  background: $background-item;
  border-radius: $border-radius;
}

.cardNavbar {
  display: flex;
  max-width: 70%;
  /* background: white; */
}

.parentImageCard {
  max-width: 20%;
  margin: $margin-mx;
}

.parent-title-cards {
  max-width: 90%;
}

.title-cards {
  color: $background-color;
}

// media query

@media only screen and (max-width: 1825px) {
  .itemCardNavbar {
    max-width: 90%;
    display: flex;
    margin: $margin-mx;
    max-height: 50%;
    justify-content: $justify-flex-start;
    flex-wrap: wrap;
    background: $background-item-panel;
    border-radius: $border-radius;
  }
  .cardNavbar {
    max-width: 100%;
    background: bisque;
    display: contents;
  }
  .parentImageCard {
    margin: $margin-mx;
    display: contents;
    // display: none;
  }
}

@media only screen and (max-width: 925px) {
  .itemCardNavbar {
    max-width: 90%;
    display: flex;
    margin: $margin-mx;
    max-height: 50%;
    justify-content: space-around;
    flex-wrap: wrap;
    background: $background-item-panel;
    border-radius: $border-radius;
  }
}
</style>
