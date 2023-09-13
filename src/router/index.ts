import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import ConfirmNewPassword from "@/views/ConfirmNewPassword.vue";
import CreateNewPassword from "@/views/CreateNewPassword.vue";
import Dashboard from "@/views/Dashboard.vue";
import DefaultMainPanel from "@/components/DefaultMainPanel.vue";
import ChargeWallet from "@/components/ChargeWallet.vue";
import ToBuyCredit from "@/components/ToBuyCredit.vue";
import ListTransactions from "@/components/ListTransactions.vue";
import SettingProfile from "@/components/SettingProfile.vue";
import MoneyTransfer from "@/components/MoneyTransfer.vue";
import CreateQr from "@/components/CreateQr.vue";
import BuyInternetPackage from "@/components/BuyInternetPackage.vue";
import ListBill from "@/components/ListBill.vue";
import CompletingFormSettingProfile from "@/components/CompletingFormSettingProfile.vue";
import BankAccounts from "@/components/BankAccounts.vue";
import ActiveDevices from "@/components/ActiveDevices.vue";
import ForgetPasswordSettingProfile from "@/components/ForgetPasswordSettingProfile.vue";
import FinancialProfileLink from "@/components/FinancialProfileLink.vue";
import Stores from "@/components/Stores.vue";
import Store from "@/components/Store.vue";
import CreateInformationMyStore from "@/components/CreateInformationMyStore.vue";
import SelectStore from "@/components/SelectStore.vue";
import CardManagement from "@/components/CardManagement.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/panel",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "DefaultMainPanel",
        name: "DefaultMainPanel",
        component: DefaultMainPanel,
      },
      {
        path: "ListTransactions",
        name: "ListTransactions",
        component: ListTransactions,
      },
      {
        path: "ChargeWallet",
        name: "ChargeWallet",
        component: ChargeWallet,
      },
      {
        path: "ToBuyCredit",
        name: "ToBuyCredit",
        component: ToBuyCredit,
      },
      {
        path: "MoneyTransfer",
        name: "MoneyTransfer",
        component: MoneyTransfer,
      },
      {
        path: "BuyInternetPackage",
        name: "BuyInternetPackage",
        component: BuyInternetPackage,
      },
      {
        path: "ListBill",
        name: "ListBill",
        component: ListBill,
      },
    ],
  },
  {
    path: "/Store",
    name: "Store",
    component: Store,

    children: [
      {
        path: "SelectStore",
        name: "SelectStore",
        component: SelectStore,
      },
      {
        path: "CreateInformationMyStore",
        name: "CreateInformationMyStore",
        component: CreateInformationMyStore,
      },
    ],
  },

  {
    path: "/Stores",
    name: "Stores",
    component: Stores,
  },

  {
    path: "/CardManagement",
    name: "CardManagement",
    component: CardManagement,
  },
  {
    path: "/setting",
    name: "SettingProfile",
    component: SettingProfile,
    children: [
      {
        path: "CompletingFormSettingProfile",
        name: "CompletingFormSettingProfile",
        component: CompletingFormSettingProfile,
      },
      {
        path: "BankAccounts",
        name: "BankAccounts",
        component: BankAccounts,
      },
      {
        path: "ActiveDevices",
        name: "ActiveDevices",
        component: ActiveDevices,
      },
      {
        path: "ForgetPasswordSettingProfile",
        name: "ForgetPasswordSettingProfile",
        component: ForgetPasswordSettingProfile,
      },
      {
        path: "FinancialProfileLink",
        name: "FinancialProfileLink",
        component: FinancialProfileLink,
      },
    ],
  },

  {
    path: "/CreateQr",
    name: "CreateQr",
    component: CreateQr,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/confirmNewPassword",
    name: "ConfirmNewPassword",
    component: ConfirmNewPassword,
  },
  {
    path: "/createNewPassword",
    name: "CreateNewPassword",
    component: CreateNewPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
