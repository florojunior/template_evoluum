<template>
  <v-row class="pa-0">
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=2>
          <LabelForm>
            Tipo do selo
          </LabelForm>
        </v-col>
        <v-col cols=10>
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
        <v-col cols=2>
          <LabelForm>
            Descrição
          </LabelForm>
        </v-col>
        <v-col cols=10>
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
        <v-col cols=2>
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
    <v-col cols=12 class="pl-1">
      <h2 class="text--disabled">Propriedades</h2>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=4>
          <LabelForm>
            Prioridade
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
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
        <v-col cols=4>
          <LabelForm>
            Cor de fundo
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
            name="nome"
            placeholder="Cor de fundo"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="pl-1">
      <h2 class="text--disabled">Vencimento</h2>
    </v-col>
    <v-col cols=6 class="d-flex pa-1">
        <InputAndLabelForm>
        <v-col cols=4>
          <LabelForm>
            Data inicial
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
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
        <v-col cols=4>
          <LabelForm>
            Data final
          </LabelForm>
        </v-col>
        <v-col cols=8>
          <v-text-field
            class="ml-2 mr-2"
            name="nome"
            placeholder="Data final"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="d-flex justify-space-between mt-0">
      <span>
        <v-btn
            depressed
            large
            text
            outlined
            color="primary"
            @click="back()"
          >
            VOLTAR
          </v-btn>
        <v-btn
          depressed
          large
          color="primary"
          @click="save()"
        >
          Salvar
        </v-btn>
      </span>
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
.box-content{background-color: #f8f8f8; height: calc(100% - 160px);margin-top: 130px
}
</style>
