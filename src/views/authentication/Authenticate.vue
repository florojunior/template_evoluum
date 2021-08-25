<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" xs="10" sm="10" md="10" lg="12" xl="12">
        <v-card flat class="mt-16 pa-8 d-flex flex-column justify-center" style="border-radius: 10px" width="400px" height="400px">
          <v-card-text class="pb-0">
            <v-form id="form-authenticate" ref="form">
              <v-row>
                <v-col cols="12 pa-0 ma-0">
                  <p class="font-weight-black pb-0 mb-1">
                    Email
                  </p>
                  <v-text-field
                    v-model="email"
                    dense
                    name="email"
                    placeholder="E-mail do usuario"
                    :rules="[emailRules.required, emailRules.validEmail]"
                    validate-on-blur
                    filled
                  ></v-text-field>
                </v-col>
                <v-col cols="12 pa-0 ma-0">
                  <p class="font-weight-black pb-0 mb-1">
                    Senha
                  </p>
                  <v-text-field
                    v-model="password"
                    name="password"
                    dense
                    placeholder="Senha do usuario"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwordRules.required]"
                    validate-on-blur
                    :type="showPassword ? 'text' : 'password'"
                    filled
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12 pa-0 ma-0 pt-1">
                  <a class="primary--text">Recuperar senha</a>
                </v-col>
                <v-col cols="12 pa-0 ma-0 pt-0 d-flex align-center">
                  <v-checkbox
                  ></v-checkbox><span>Manter conectado</span>
                </v-col>
                <v-col cols="12 pa-0 ma-0 pt-0">
                  <v-btn
                    form="form-authenticate"
                    type="submit"
                    depressed
                    color="primary"
                    class="text-button"
                    :loading="loginLoading"
                    @click.prevent="submitForm()"
                    >{{ button.text }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { emailRules, passwordRules } from '@/validations';

import router from '../../router';

export default {
  components: {
  },
  data() {
    return {
      card: {
        title: 'Login',
        subtitle: 'Acesse sua conta com e-mail e senha.',
      },
      formLabels: {
        email: 'E-mail',
        password: 'Senha',
      },
      button: {
        text: 'ENTRAR',
        textForgotPassword: 'Esqueci minha Senha',
      },
      bottomQuestion: {
        question: 'Ainda não tem registro no Sistema?',
        text: 'Criar uma conta',
      },
      email: '',
      password: '',
      emailRules,
      passwordRules,
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters('authentication', ['loginLoading']),
  },
  mounted(){
  },
  
  methods: {
    ...mapActions('authentication', ['setMode', 'handleLogin']),
    ...mapActions('modal', ['showModal']),
    async submitForm() {
      if (this.$refs.form.validate()) {
        router.push('/categoria');
        //await this.handleLogin({ login: this.email, password: this.password });
      }
    },
  },
};
</script>

<style scoped>
.text-lowercase::first-letter {
  text-transform: uppercase;
}
</style>

