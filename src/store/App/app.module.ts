import { Module } from "vuex";
import { RootState } from "..";
import { APP_ACTIONS } from "./app.actions";
import { APP_MUTATIONS } from "./app.mutations";

export interface AppState {
  loading: boolean;
}

const INITIAL_STATE: AppState = {
  loading: false,
};

export const app: Module<AppState, RootState> = {
  actions: APP_ACTIONS,
  getters: {},
  mutations: APP_MUTATIONS,
  state: INITIAL_STATE,
  namespaced: true,
};
