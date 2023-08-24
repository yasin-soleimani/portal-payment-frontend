<template>
  <div class="d-flex mx-auto">
    <div v-for="item in operator" :key="item.operator">
      <v-card
        width="120"
        @click="setSelectItemOperator(item)"
        :class="{ activeCard: item.active }"
        class="mx-2"
      >
        <v-card-text class="item-amounts">
          <div>
            <b class="amount-title"> {{ item.item }} </b>
            <!-- <pre>{{ JSON.stringify(setSelectItemOperator(id)) }}</pre> -->
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
interface ItemOperator {
  item: string;
  id: number;
  active: boolean;
}

interface Data {
  operator: ItemOperator[];
}
export default Vue.extend({
  name: "parent-internet-package",

  data(): Data {
    return {
      operator: [
        { item: "همراه اول", id: 1, active: false },
        { item: "ایرانسل", id: 2, active: false },
        { item: "رایتل", id: 3, active: false },
        { item: "آیتل", id: 4, active: false },
        { item: "شاتل", id: 5, active: false },
      ],
    };
  },
  methods: {
    setSelectItemOperator: function (id: number): any {
      return this.listOperatorPackage(id);
    },
  },

  computed: {
    //TODO:
    ...mapGetters("panel", {
      listOperatorPackage: "listOperatorPackage",
    }),
  },
});
</script>
