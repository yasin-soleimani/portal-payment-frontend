<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="380">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="font-size-confirm text-h6">
          آیا تمایل به خروج از سیستم را دارید؟
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" outlined text @click="offShowDialog">
            انصراف
          </v-btn>
          <v-btn color="green darken-1" outlined text @click="logout">
            بله
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "CreateInstantAccount",

  methods: {
    cancleShowModal() {
      store.state.panel.showModalInstant = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.text-alert-user {
  line-height: 25px;
}

.parent-circle-loading {
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 10px;
  border-radius: 100px;
  border: 1px solid black;
  transition: 4s;
}

.item-circle-loading {
  width: 70px;
  height: 70px;
  border-radius: 100px;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  border: 1px solid teal;
  transition: 4s;
}

.s {
  background: whitesmoke;
  width: 20px;
  height: 20px;
  margin: auto;
  position: fixed;
  margin-top: 10px;
}

.i {
  background: whitesmoke;
  width: 20px;
  height: 20px;
  position: fixed;
  margin-right: 50px;
}

.parent-circle-loading {
  transition-timing-function: ease;
}
.parent-circle-loading:hover {
  transform: rotate(5turn);
}

.item-circle-loading {
  transition-timing-function: ease;
}
.item-circle-loading:hover {
  transform: rotate(-5turn);
}
</style>
