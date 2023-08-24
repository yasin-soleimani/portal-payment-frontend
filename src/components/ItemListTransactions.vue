<template>
  <div>
    <v-btn @click="getResponseObject" depressed large color="primary">
      response object
    </v-btn>
    <v-card>
      <v-data-table
        v-for="item in datas"
        :key="item._id"
        dense
        :headers="headers"
        :items="desserts"
        item-key="name"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ItemListTransactions",
  data() {
    return {
      checkIconTrue: false,
      checkIconFalse: false,
    };
  },

  methods: {
    checkBoolean() {
      if (this.transaction.status === true) {
        this.checkIconTrue = true;
      } else {
        this.checkIconFalse = true;
      }
    },

    getResponseObject() {
      console.log("response object", this.transaction.title);
    },
  },

  props: {
    transaction: {
      type: Object,
    },
  },
  created() {
    this.checkBoolean();
  },
});
</script>

<style lang="scss">
.item-transaction {
  width: 25%;
  border: 6px solid white;
  color: $color-text !important;
}
</style>
