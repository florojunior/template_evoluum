export const mutations = {
  goToStep(state) {
    if(state.stepper.steps.length > state.stepper.activeStep)
    state.stepper.activeStep = state.stepper.activeStep+1;
  },
  goBackStep(state) {
    if(state.stepper.activeStep > 1)
    state.stepper.activeStep = state.stepper.activeStep-1;
  }
};
