<template>
  <div class="parent-pagar-facturas d-flex mx-auto">
    <select-bill @selectBill="hideListPaymentBills" />
    <list-payment-bills v-if="showPaymentBill" />
    <payment-bill v-if="!showPaymentBill" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SelectBill from "@/components/SelectBill.vue";
import PaymentBill from "@/components/PaymentBill.vue";
import ListPaymentBills from "@/components/ListPaymentBills.vue";

export default Vue.extend({
  components: { SelectBill, PaymentBill, ListPaymentBills },
  name: "ListBill",
  data(): any {
    return {
      showPaymentBill: true,
    };
  },

  methods: {
    hideListPaymentBills(): void {
      this.showPaymentBill = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.parent-pagar-facturas {
  max-width: 90%;
  // height: 50vh;
  background: $background-item-panel;
  margin: $margin-mx;
  border-radius: $border-radius;
  // justify-content: space-around;
}

.select-bill {
  max-width: 30%;
  flex-wrap: wrap;
  max-height: 300px;
}

.title-bills {
  display: flex;
  justify-content: space-between;
}

// media

@media only screen and (max-width: 1825px) {
  .parent-pagar-facturas {
    display: block !important;
    background: $background-item-panel;
    margin: $margin-mx;
    border-radius: $border-radius;
    height: 100%;
    // overflow: hidden;
    // height: 615px;
  }

  .select-bill {
    overflow: auto;
    flex-wrap: nowrap;
  }
}
</style>
