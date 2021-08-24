<template>
  <v-row class="pa-2">
    <v-col cols=12 class="d-flex flex-column pa-1">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="primary"
      >
        <v-tab v-for="item in items" :key="item">
          {{item}}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card
            color="basil"
            flat
            class="pa-0 ma-0"
          >
            <v-card-text>
              <BrandsCards/>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <KoerichCards/>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <Billet/>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
    <v-col cols=12 class="d-flex justify-space-between mt-0">
       <v-btn
        depressed
        large
        color="primary"
        @click="save()"
      >
        Salvar e continuar
      </v-btn>

      <v-btn
        depressed
        large
        text
        outlined
        color="primary"
        @click="save()"
      >
        EXCLUIR CATEGORIA
      </v-btn>
    </v-col>
  </v-row> 
</template>


<script>

import { mapActions } from 'vuex';
import BrandsCards from './cards-components/BrandsCards.vue'
import KoerichCards from './cards-components/KoerichCards.vue'
import Billet from './cards-components/Billet.vue'

export default {
  components:{
    BrandsCards,
    KoerichCards,
    Billet
  },
  data: () => ({
    tab: null,
    items: [
          'CARTÃO BANDEIRADOS', 'CARTÃO KOERICH', 'BOLETO',
        ]
  }),
  computed: {
  },
  created: function () {
  },
  methods: {
    ...mapActions('categoria', ['nextStep']),
    save(){
      this.nextStep(2);
    }
  },
};
</script>

<style>
.box-content{background-color: #f8f8f8; height: calc(100% - 160px);margin-top: 130px
}
</style>
