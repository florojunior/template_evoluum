export const actions = {
  nextStep(state) {
    state.commit('goToStep');
  },
  goBackStep(state) {
    state.commit('goBackStep');
  }
};
