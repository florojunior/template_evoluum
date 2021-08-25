export const actions = {
  nextStep(state, step) {
    state.commit('goToStep', step);
  },
  backStep(state, step) {
    state.commit('goToStep', step);
  }
};
