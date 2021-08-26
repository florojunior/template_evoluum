export const getters = {
  getSteppers: (state) => state.stepper,
  getCurrentStep: (state) => state.stepper.activeStep,
  lastStep: (state) => state.stepper.steps.length == state.stepper.activeStep,
  isFirstStep: (state) => state.stepper.activeStep == 1
};
