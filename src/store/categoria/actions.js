export const actions = {
  nextStep(state, currentIdStep) {
    state.commit('goToStep', ++currentIdStep);
  }
};
