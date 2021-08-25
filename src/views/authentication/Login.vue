<template>
    <v-container fill-height class="full-screen pa-0 ma-0" >
      <div class="background">
        <div class="background-custom">
          <v-img
              :src="require('../../assets/images/background-defalt.png').default">
          </v-img>
          <div class="bottom-div"></div>
        </div>
        <v-img
            :src="require('../../assets/images/figura_painel.png').default"
            class="background-image"
            >
        </v-img>
      </div>
      <v-row class="full-screen pa-0 ma-0 ml-12 pl-12 d-flex flex-column justify-center align-start" >
        <v-col cols="12" xs="12" sm="12" md="6" xl="6" class="mb-12">
          <Authenticate/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Authenticate from '@/views/authentication/Authenticate';

export default {
  name: 'Login',
  components: {
    Authenticate
  },
  computed: {
    ...mapGetters('authentication', ['mode']),
    ...mapGetters('main', ['authenticated']),
    heroImage() {
      return {
        backgroundImage: `url${require('../../assets/images/login-background.png')}`
      };
    }
  },
  created() {
    localStorage.setItem('token', null);
    this.setAuthenticated(false);
    this.loadModeNewPassword();
  },
  methods: {
    ...mapActions('main', ['setAuthenticated']),
    ...mapActions('authentication', ['setMode']),
    loadModeNewPassword() {
      if (this.$route.query.token) {
        this.setMode(3);
      }
    },
  },
};
</script>

<style scoped>
.full-screen {
  width: 100%;
  height: 100%;
  max-width: 100% !important;
}

.background{
  background-color:#ededed !important; 
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.background-custom{
  width: 100%;
  height: 300px;
  background: transparent linear-gradient(79deg, #0340A3 0%, #0476C1 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  opacity: 1;
  top: 0;
  position: absolute;
}

.background-image{
    width: 40%;
    bottom: 0;
    right: 0;
    position: absolute;
    height: 40%;
    margin-bottom: 50px;
}

.bottom-div {
    width: 100%;
    padding-bottom: 21.27%; /* = width / 1.41 */
    position: relative;
}

.bottom-div:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0079C6;
    transform-Origin: 0 100%;        
    transform: rotate(45deg);
}
</style>
