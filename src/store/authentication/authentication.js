import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  hospitalsUser: [],
  setUser: {},
  menu: {},
  login: {
    loading: false,
    error: null,
  },
};

export const authentication = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
