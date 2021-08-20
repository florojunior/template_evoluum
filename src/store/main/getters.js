export const getters = {
  mensagemSucesso: (state) => state.mensagemSucesso,
  authenticated: (state) => {
    if(!state.authenticated){
      return localStorage.getItem('token') != null && localStorage.getItem('token') != "null";
    }else{
      return state.authenticated;
    }
  },
};
