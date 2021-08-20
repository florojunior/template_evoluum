<template>
  <v-row class="pa-12">
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Código
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="email"
            placeholder="Código"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Nome
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="nome"
            placeholder="Nome"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Código da categoria pai
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="nome"
            placeholder="Código da categoria pai"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12>
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Descrição
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="nome"
            placeholder="Descrição"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12>
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Google ID
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="nome"
            placeholder="Google ID"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12>
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Plataforma
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="nome"
            placeholder="Plataforma"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12>
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Código da plataforma
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
            name="nome"
            placeholder="Código da plataforma"
            validate-on-blur
            filled
          ></v-text-field>
        </v-col>
      </InputAndLabelForm>
    </v-col>
    <v-col cols=12>
      <InputAndLabelForm>
        <v-col cols=3>
          <LabelForm>
            Código da categoria na plataforma
          </LabelForm>
        </v-col>
        <v-col cols=9>
          <v-text-field
            class="ml-8"
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

import Form from '@/components/application/categoria/Form.vue'
import LabelForm from '@/components/template/label/LabelForm.vue'
import InputAndLabelForm from '@/components/template/label/InputAndLabelForm.vue'

export default {
  components:{
    Form,
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
  },
};
</script>

<style>
.box-content{background-color: #f8f8f8; height: calc(100% - 160px);margin-top: 130px
}
</style>
