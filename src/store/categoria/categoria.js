import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  stepper:{
    steps:[
      {
        isState: 1,
        title: "Informações Gerais"
      },
      {
        isState: 2,
        title: "Cartões e Boleto"
      },
      {
        isState: 3,
        title: "Selo"
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
