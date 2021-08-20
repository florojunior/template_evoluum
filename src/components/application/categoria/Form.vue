<template>
  <v-container class="fill-height" >
    <div style="height: 100%; width: 100%">
      <v-row class="d-flex justify-start align-start">
        <v-col cols=3>
          <StepController/>
        </v-col>
        <v-col cols=9>
          <FormStepOne v-if="getCurrentStep == 1"/>
          <FormStepTwo v-if="getCurrentStep == 2"/>
          <FormStepThree v-if="getCurrentStep == 3"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PageHeader from '@/components/template/PageHeader.vue'
import EditButton from '@/components/template/buttons/EditButton.vue';
import StepController from '../categoria/Steps/StepController.vue'
import FormStepOne from '../categoria/Steps/FormStepOne.vue'
import FormStepTwo from '../categoria/Steps/FormStepTwo.vue'
import FormStepThree from '../categoria/Steps/FormStepThree.vue'

export default {
  components: {
      PageHeader,
      EditButton,
      StepController,
      FormStepOne,
      FormStepTwo,
      FormStepThree
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
  created: function () {
  },
  computed:{
    ...mapGetters('categoria', ['getCurrentStep']),
  },
  methods:{
    handleEdit(item){}
  }
};
</script>

<style>
  .list-content{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
