<template>
  <v-row class="pa-6">
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=1 lg=1 class="pa-0 pl-2">
          <LabelForm>
            Tipo do selo
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
          <v-text-field
            class="ml-8"
            name="tipoSelo"
            placeholder="Tipo do selo"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=1 lg=1 class="pa-0 pl-2">
          <LabelForm>
            Descrição
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
          <v-text-field
            class="ml-8"
            name="tipoSelo"
            placeholder="Tipo do selo"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=1 lg=1 class="pa-0 pl-2">
          <LabelForm>
            Valor
          </LabelForm>
        </v-col>
        <v-col cols=10>
          <v-text-field
            class="ml-8"
            name="valor"
            placeholder="Valor"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="pl-0 pb-8">
      <h2 class="text--disabled">Propriedades</h2>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2 class="pa-0 pl-2">
          <LabelForm>
            Prioridade
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=7 lg=7>
          <v-text-field
            class="ml-6 mr-2"
            name="nome"
            placeholder="Prioridade"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=6 xl=3 lg=3 class="pa-0 pl-2">
          <LabelForm>
            Cor de fundo
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=7 lg=7>
          <v-text-field
            class="ml-6 mr-2"
            name="nome"
            placeholder="Cor de fundo"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="pl-0 pb-8">
      <h2 class="text--disabled">Vencimento</h2>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2 class="pa-0 pl-2">
          <LabelForm>
            Data inicial
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=7 lg=7>
          <v-text-field
            class="ml-6 mr-2"
            name="nome"
            placeholder="Data inicial"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=6 xl=3 lg=3 class="pa-0 pl-2">
          <LabelForm>
            Data final
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=7 lg=7>
          <v-text-field
            class="ml-6 mr-2"
            name="nome"
            placeholder="Data final"
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
    ...mapActions('categoria', ['nextStep', 'backStep']),
    save(){
      this.nextStep(3);
    },
    back(){
      this.backStep(2);
    }
    
  },
};
</script>

<style>
.box-content{background-color: rgba(248,248,248,255);  height: calc(100% - 160px);margin-top: 130px
}
</style>
