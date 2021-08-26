<template>
    <v-row class="pa-6 pl-0" :class="{'step-controller-padding-xl': $vuetify.breakpoint.xl , 'step-controller-padding-lg': $vuetify.breakpoint.lg}">
      <v-col class="d-flex align-center">
        <v-btn
          icon
          color="primary"
          large
          @click="onClick"
        >
          <v-icon>mdi-arrow-left</v-icon> 
        </v-btn>
        <span class="font-weight-bold text-xl-h5 ml-4 text-lg-h6 text-md-subtitle-1 text-xl-h5">Cadastrar Categoria</span>
      </v-col>          
      <v-col v-for="step in getSteppers.steps" :key="step.id" cols="12">
        <v-card elevation="0" color="rgb(237, 237, 237)">
          <v-card-text class="pa-0 pt-4 d-flex">
            <v-icon>
              mdi-cube-scan
            </v-icon>
            <span class="text--primary font-weight-bold text-h6 text-xl-h6 ml-6 text-md-subtitle-1 text-md-h6">
              {{step.title}}
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>


<script>

import { mapGetters } from 'vuex';

export default {
  components:{

  },
  data: () => ({
      steppers:{}
  }),
  computed: {
    ...mapGetters('categoria', ['getSteppers']),
    paddingLeftMenuController(){
      switch (this.$vuetify.breakpoint.name) {
        case 'lg': return '10%'
        case 'xl': return '10%'
      }
    }
  },
  created: function () {
  },
  methods: {
  },
};
</script>

<style scoped>
  .step-controller-padding-lg {
    padding-left : 10% !important;
  }

  .step-controller-padding-xl {
    padding-left : 10%!important;
  }
</style>
