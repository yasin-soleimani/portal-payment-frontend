<template>
  <div class="itemCardNavbar">
    <div class="cardNavbar">
      <account-card
        v-for="item in wallets"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :value="item.value"
        :icon="item.icon"
      />
    </div>
    <div class="parentImageCard py-5">
      <img src="../assets/images/cardPerson.svg" width="300" />
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
  display: flex;
  max-width: 70%;
  /* background: white; */
}

.parentImageCard {
  max-width: 20%;
  margin: $margin-mx;
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
