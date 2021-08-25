import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  stepper:{
    steps:[
      {
        isState: 1,
        title: "INFORMAÇÕES GERAIS"
      },
      {
        isState: 2,
        title: "CARTÕES E BOLETO"
      },
      {
        isState: 3,
        title: "SELO"
      }]
    ,
    activeStep: 1
  }
};

export const categoria = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
