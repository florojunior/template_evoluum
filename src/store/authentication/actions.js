import router from '@/router';
import authentication from '@/services/api/authentication';

export const actions = {
  setUser(state, payload) {
    state.commit('setUser', payload);
  },
  setMenu(state, payload) {
    state.commit('setMenu', payload);
  },
  setMode(state, payload) {
    state.commit('setMode', payload);
  },
  async handleLogin(state, payload) {
    try {
      state.commit('LOGIN_PENDING');

      const response = await authentication.loginUser(payload);

      state.commit('LOGIN_SUCCESS');

      state.dispatch(
        'snackbar/success',
        {
          message: response.data.message.pt,
        },
        { root: true }
      );

      localStorage.setItem('token', response.data.result.token);
      router.push({ name: 'produto' });
    } catch (error) {
      state.commit('LOGIN_ERROR', error);
    }
  },
  handleLogOut() {
    localStorage.setItem('token', null);
    router.push({ name: 'login' });
  }
};
