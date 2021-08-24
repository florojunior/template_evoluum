<template>
  <v-row class="pa-12">
    <v-col cols=6 class="d-flex pa-1 align-center">
        <InputAndLabelForm>
        <v-col cols=4>
          <LabelForm>
            Data Inicial
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
            name="nome"
            placeholder="Código da categoria na plataforma"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=4>
          <LabelForm>
            Data final
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
            name="nome"
            placeholder="Código da categoria na plataforma"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=4>
          <LabelForm>
             Valor minimo parcelamento
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
            name="nome"
            placeholder="Código da categoria na plataforma"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=4>
          <LabelForm>
            Nº máximo de parcelas
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
            name="nome"
            placeholder="Código da categoria na plataforma"
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
