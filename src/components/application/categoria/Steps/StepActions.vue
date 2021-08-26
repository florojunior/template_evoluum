<template>
  <v-row class="d-flex justify-start align-start pa-8">
    <v-col cols=3>
    </v-col>
    <v-col cols=9 class="d-flex justify-space-between mt-0 pa-4 pt-8">
        <span>
            <v-btn
                depressed
                large
                text
                outlined
                color="primary"
                class="mr-4"
                @click="goBackStep()"
                v-if="!isFirstStep"
            >
                VOLTAR
            </v-btn>
            
            <v-btn
                depressed
                large
                color="primary"
                @click="nextStep()"
            >
                Salvar e continuar
            </v-btn>
        </span>
        <v-btn
            depressed
            large
            text
            outlined
            color="primary"
            @click="backStep()"
        >
            EXCLUIR CATEGORIA
        </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
  },
  data: () => ({
  }),
  computed:{
    ...mapGetters('categoria', ['getCurrentStep','lastStep','isFirstStep']),
  },
  created: function () {
  },  
  methods:{
    ...mapActions('categoria', ['nextStep','goBackStep']),
  }
};
</script>

<style scoped>
</style>
