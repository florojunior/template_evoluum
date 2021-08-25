<template>
  <v-row class="pa-12">
    <v-col cols=6 class="d-flex pa-1 align-center">
        <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=3>
          <LabelForm>
            Data Inicial *
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=9>
          <v-text-field
            class="ml-2 pr-6"
            name="nome"
            placeholder="Data Inicial"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1 align-center">
        <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=3>
          <LabelForm>
            Data final *
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=9>
          <v-text-field
            class="ml-2 pr-6"
            name="nome"
            placeholder="Data final"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1 align-center">
        <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=3>
          <LabelForm>
             Descontos *
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=9>
          <v-text-field
            class="ml-2 pr-6"
            name="nome"
            placeholder="Descontos"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
  </v-row> 
</template>


<script>

import { mapActions } from 'vuex';
import LabelForm from '@/components/template/label/LabelForm.vue'
import InputAndLabelForm from '@/components/template/label/InputAndLabelForm.vue'

export default {
  components:{
      LabelForm,
      InputAndLabelForm
  },
  data: () => ({
  }),
  computed: {
  },
  created: function () {
  },
  methods: {
    ...mapActions('categoria', ['nextStep']),
    save(){
      this.nextStep(1);
    }
  },
};
</script>

<style>
.box-content{background-color: #f8f8f8; height: calc(100% - 160px);margin-top: 130px
}
</style>
