<template>
    <v-row>
      <v-col>
        <v-btn
          icon
          color="primary"
          @click="onClick"
        >
          <v-icon>mdi-arrow-left</v-icon> 
        </v-btn>
        <span class="font-weight-bold text-h6">Cadastrar Categoria</span>
      </v-col>          
      <v-col v-for="step in getSteppers.steps" :key="step.id" cols="12" color>
        <v-card elevation="0">
          <v-card-text>
            <v-icon>
              mdi-cube-scan
            </v-icon>
            <span class="font-weight-medium text-h6">
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
