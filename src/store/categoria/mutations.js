export const mutations = {
  goToStep(state, newStep) {
    state.stepper.activeStep = newStep;
  }
};
