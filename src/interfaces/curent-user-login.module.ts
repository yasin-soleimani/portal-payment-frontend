export interface CurrentUser {
  account_no: number;
  apsdk: boolean;
  avatar: string;
  cardno: number;
  checkout: boolean;
  clubinfo: {
    about: string;
  };
  clubname: string;
  credit: number;
  discount: number;
  fullname: string;
  greeting: string;
  idm: number;
  logourl: string;
  maxcheckout: number;
  message: string;
  mobile: number;
  organ: number;
  perday: number;
  perhour: number;
  profilestatus: number;
  refid: string;
  sitad: boolean;
  sms: boolean;
  staticamount: boolean;
  status: number;
  success: boolean;
  title: string;
  token: string;
  type: string;
  unread: number;
  vitrinAccess: boolean;
  wallet: number;
  walletCurrency: "rial";
}
