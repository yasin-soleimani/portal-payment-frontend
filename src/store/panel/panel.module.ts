import { ValueWalletUser } from "@/interfaces/value-wallet-panel-user";
import { ValueListTransactions } from "@/interfaces/value-list-transactions";
import { UserInformation } from "@/interfaces/user-information";
import { AccountUserMoneyTransfer } from "@/interfaces/accountUserMoneyTransfer";
import { InternetPackage } from "@/interfaces/internetPackage";
import { DataReCharge } from "@/interfaces/dataRecharge";
import { ItemOperatorBill } from "@/interfaces/itemOperatorBill";
import { DataProfile } from "@/interfaces/dataProfile";
import { ForgetPasswordSettingProfile } from "@/interfaces/forgetPasswordSettingProfile";
import { ListDevice } from "@/interfaces/listDevice";
import { DataAccountBanks } from "@/interfaces/dataAccountBanks";
import { Module } from "vuex";
import { RootState } from "..";
import { PANEL_ACTIONS } from "./panel.actions";
import { PANEL_GETTERS } from "./panel.getters";
import { PANEL_MUTATIONS } from "./panel.mutation";

interface Cards {
  cardno: number;
  cardownerfullname: string;
  firstpass: boolean;
  status: boolean;
}

export interface PanelState {
  showSidebar: boolean;
  sidebarSmall: boolean;
  valueWalletUser: ValueWalletUser;
  valueListTransactions: ValueListTransactions[];
  userInformation: UserInformation;
  amount: string;
  mobileCharge: string;
  amountCharge: string;
  postDataCharge: string;
  isSubmitingToBuyCharge: boolean;
  mobileCard: string;
  cardNumber: string;
  query: "";
  showFormMoneyTransfer: boolean;
  accountUserMoneyTransfer: AccountUserMoneyTransfer;
  getListInternetPackage: InternetPackage[];
  dataReCharge: DataReCharge;
  listItemOperatorBill: ItemOperatorBill;
  dataProfile: DataProfile;
  forgetPasswordSettingProfile: ForgetPasswordSettingProfile;
  newPassword: string[];
  listDevice: ListDevice[];
  accountBanks: DataAccountBanks;
  showModalInstant: boolean;
  showSnackbar: boolean;
  textSnackbar: string;
  showConfirmExit: boolean;
  bankCardNumber: string;
  setActiveFullname: string;
  cards: Cards;
}

const INITIAL_PANEL: PanelState = {
  showSidebar: true,
  sidebarSmall: true,
  valueWalletUser: {
    wallet: 0,
    credit: 0,
    discount: 0,
    organ: 0,
  },

  amount: "",

  amountCharge: "",
  postDataCharge: "",
  isSubmitingToBuyCharge: false,
  //money transfer

  mobileCard: "",
  cardNumber: "",
  query: "",
  showFormMoneyTransfer: false,

  // buyInternetPackage
  getListInternetPackage: [],

  accountUserMoneyTransfer: {
    fullname: "",
    accountNo: "",
    userid: "",
    avatar: "",
    message: "",
  },

  // recharge

  dataReCharge: {
    operator: 0,
    amount: 0,
    mobile: "",
    rechargeCode: 0,
    optionalMessage: "",
  },

  valueListTransactions: [],

  // payment bill

  listItemOperatorBill: {
    item: "",
    img: "",
    id: null,
    isSave: false,
    title: "",
    type: 0,
  },

  userInformation: {
    account_no: 0,
    cardno: 0,
    clubname: "",
    fullname: "",
    avatar: "",
    logourl: "",
    maxcheckout: 0,
    message: "",
    mobile: 0,
    refid: "",
    type: "",
  },

  // setting profile

  dataProfile: {
    aboutme: "",
    account_no: 0,
    address: "",
    birthdate: 0,
    city: "",
    email: "",
    fullname: "",
    islegal: false,
    message: "",
    mobile: 0,
    mywebsite: "",
    nationalcode: "",
    organ: "",
    place: "",
    ref: "",
    senf: "",
    showMyEmailToOthers: false,
    showMyIranianShopLink: false,
    showMyOwnShopLink: false,
    showMyTellToOthers: false,
    showMyTransferLink: false,
    sms: false,
    state: "",
    status: 0,
    success: false,
    tell: "",
    zipcode: 0,
  },

  forgetPasswordSettingProfile: {
    password: "",
    newPassword: "",
    isSubmiting: false,
  },
  newPassword: [],

  //list device

  listDevice: [],

  //acoount banks

  accountBanks: {
    banks: [],
    cashout: false,
    instant: [],
    shaparak: [],
    sheba: false,
  },

  //created account instant

  showModalInstant: false,

  //app

  //snackbar
  showSnackbar: false,
  textSnackbar: "",

  //showConfirmExit

  showConfirmExit: false,

  //create new card bank

  bankCardNumber: "",
  setActiveFullname: "",
  cards: {
    cardno: 0,
    cardownerfullname: "",
    firstpass: false,
    status: true,
  },
};

export const panel: Module<PanelState, RootState> = {
  actions: PANEL_ACTIONS,
  getters: PANEL_GETTERS,
  mutations: PANEL_MUTATIONS,
  state: INITIAL_PANEL,
  namespaced: true,
};
