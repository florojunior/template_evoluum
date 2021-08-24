<template>
    <v-row class="pa-6">
      <v-col class="d-flex align-center">
        <v-btn
          icon
          color="primary"
          @click="onClick"
        >
          <v-icon>mdi-arrow-left</v-icon> 
        </v-btn>
        <span class="font-weight-bold text-h5 ml-4 text-lg-subtitle-1 text-md-subtitle-1 text-h5">Cadastrar Categoria</span>
      </v-col>          
      <v-col v-for="step in getSteppers.steps" :key="step.id" cols="12">
        <v-card elevation="0" color="rgb(237, 237, 237)">
          <v-card-text class="pa-0 pt-4">
            <v-icon>
              mdi-cube-scan
            </v-icon>
            <span class="font-weight-medium text-h6 ml-6 text-lg-subtitle-1 text-md-subtitle-1">
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
  },
  created: function () {
  },
  methods: {
  },
};
</script>

<style>
</style>
