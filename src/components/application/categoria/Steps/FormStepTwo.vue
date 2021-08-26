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
            color="rgba(248,248,248,255)"
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
            color="rgba(248,248,248,255)"
            flat
          >
            <v-card-text>
              <KoerichCards/>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="rgba(248,248,248,255)"
            flat
          >
            <v-card-text>
              <Billet/>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
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
    ...mapActions('categoria', ['nextStep', 'backStep']),
    save(){
      this.nextStep(3);
    },
    back(){
      this.backStep(1);
    }
  },
};
</script>

<style>
.box-content{background-color: rgba(248,248,248,255);  height: calc(100% - 160px);margin-top: 130px
}
</style>
