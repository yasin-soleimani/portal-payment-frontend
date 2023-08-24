<template>
  <div>
    <v-card class="parentTransactions pb-5">
      <div>
        <div class="parent-all-transactions mx-5">
          <p class="my-4">
            واریز و برداشت را اطلاع بده (هزینه به ازای هر اطلاع‌رسانی ۵۰۰ ریال
            است)
          </p>

          <div class="mx-3">
            <v-switch v-model="switch1"></v-switch>
          </div>
          <!-- <div
            @click="ButtonTransactions"
            class="parentButtonToggleNotifTransactions"
          >
            <button
              class="buttonToggleNotifTransactions mx-3 my-3"
              :class="{ activeButton: toggleButtonTransactions }"
              depressed
              small
            ></button>
          </div> -->
          <div>
            <p
              class="text-all-transactions my-4 mx-12"
              style="position: absolute; left: 0"
            >
              همه تراکنش ها
            </p>
          </div>
          <br />
        </div>
        <div></div>
      </div>
      <section class="styleTransactions">
        <hr />

        <div class="scrol-transactions">
          <v-simple-table :height="'540px'" :fixed-header="true">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="item-nav-table text-center">وضعیت</th>
                  <th class="item-nav-table text-center">تاریخ و ساعت</th>
                  <th class="item-nav-table text-center">توضیحات</th>
                  <th class="item-nav-table text-center">مبلغ(ریال)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in datas" :key="item._id">
                  <td class="item-table">
                    <i
                      class="green--text"
                      :class="{
                        'fas fa-check': item.status,
                        'fas fa-times error--text': !item.status,
                      }"
                    ></i>
                  </td>
                  <td class="item-table">{{ createdAt }}</td>
                  <td class="item-table">{{ item.title }}</td>
                  <td class="item-table">{{ item.amount }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </section>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import moment from "jalali-moment";
import store from "@/store";
interface toggleButton {
  toggleButtonTransactions: boolean;
  switch1: boolean;
}
export default Vue.extend({
  name: "ListTransactions",

  data(): toggleButton {
    return {
      toggleButtonTransactions: false,
      switch1: false,
    };
  },

  methods: {
    ButtonTransactions() {
      var time = store.state.panel.valueListTransactions[0].createdAt;
      const result = moment(time, "YYYY/M/D");
      this.toggleButtonTransactions = !this.toggleButtonTransactions;
      console.log(
        "item in store transaction:",
        result.format("jYYYY/jMM/jDD-hh")
      );
      console.log(time);
    },
  },
  computed: {
    ...mapGetters("panel", {
      datas: "datas",
    }),

    createdAt() {
      const time = store.state.panel.valueListTransactions[0].createdAt;
      const result = moment(time, "YYYY/M/D");
      return result.format("jYYYY/jMM/jDD-hh");
    },
  },
});
</script>

<style lang="scss">
.parentTransactions {
  max-width: 90%;
  display: flex;
  margin: $margin-mx;
  justify-content: $justify-flex-start;
  flex-wrap: wrap;
  background: $background-item-panel !important;
  border-radius: $border-radius;
}

.parent-all-transactions {
  display: flex;
  color: $color-text;
}

.item-nav-table {
  color: $color-text !important;
}

.styleParentTransactions {
  background: white;
  justify-content: $justify-center;
}

.item-ListTransactions {
  width: 25%;
}

.transactions {
  width: 101%;
  height: 100%;
}

.scrol-transactions {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
}

.styleTransactions {
  width: 100%;
}

.select {
  border: 1px solid teal;
  z-index: 999;
}

.parentButtonToggleNotifTransactions {
  position: relative;
  background: #c1bbd5;
  border-radius: 20px;
  width: 66px;
  height: 36px;
  margin: 10px 10px;
}

.buttonToggleNotifTransactions {
  background: white;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  transition: all 500ms ease;
  top: -6px;
  right: -5px;
}

.activeButton {
  &.buttonToggleNotifTransactions {
    background: #dbd3f5;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    top: -6px;
    right: 22px;
  }
}

.item-table {
  width: 20%;
  color: $color-text;
}

@media only screen and (max-width: 777px) {
  .parent-all-transactions {
    display: block !important;
  }
  .text-all-transactions {
    position: initial !important;
  }
}
</style>
