<template>
  <v-row class="d-flex justify-start align-start pa-8" style="height: 100%; width: 100%; background-color:#EDEDED !important;">
    <v-col cols=3 xl=3>
      <StepController/>
    </v-col>
    <v-col cols=9 xl=9 style="max-height: 100%; border-radius: 15px" class="mt-8 pa-6 background-default">
      <FormStepOne v-if="getCurrentStep == 1"/>
      <FormStepTwo v-if="getCurrentStep == 2"/>
      <FormStepThree v-if="getCurrentStep == 3"/>
    </v-col>
    <StepActions/>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import StepController from '../categoria/Steps/StepController.vue'
import StepActions from '../categoria/Steps/StepActions.vue'
import FormStepOne from '../categoria/Steps/FormStepOne.vue'
import FormStepTwo from '../categoria/Steps/FormStepTwo.vue'
import FormStepThree from '../categoria/Steps/FormStepThree.vue'

export default {
  components: {
      StepController,
      FormStepOne,
      FormStepTwo,
      FormStepThree,
      StepActions
  },
  data: () => ({
    headers: [
      {
        text: 'Código',
        align: 'start',
        sortable: false,
        value: 'codigo',
      },
      { text: 'Nome', value: 'nome' },
      { text: 'Categoria pai', value: 'pai' },
      { text: 'Editar', value: 'acoes' }
    ],
    desserts: [
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      }
    ]
  }),
  computed:{
    ...mapGetters('categoria', ['getCurrentStep']),
  },
  created: function () {
  },  
  methods:{
    ...mapActions('categoria', ['nextStep','goBackStep']),
  }
};
</script>

<style scoped>
  .list-content{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .background-default{
    background-color: rgba(245,245,246,255) !important;
  }

  .v-tab--disabled{
    color: red !important
  }
  
</style>
