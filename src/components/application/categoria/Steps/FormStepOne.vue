<template>
  <v-row class="pa-6">
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Código *
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Nome *
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Código da categoria pai
          </LabelForm>
        </v-col>
         <v-col cols=6 xl=10 lg=10>
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
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Descrição *
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
    <v-col  cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Google ID
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Plataforma
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Código da plataforma
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
    <v-col cols=12 class="d-flex pa-1">
      <InputAndLabelForm>
        <v-col cols=6 xl=2 lg=2>
          <LabelForm>
            Código da categoria na plataforma
          </LabelForm>
        </v-col>
        <v-col cols=6 xl=10 lg=10>
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
      this.nextStep(2);
    }
  },
};
</script>

<style>
.box-content{background-color: rgba(248,248,248,255);  height: calc(100% - 160px);margin-top: 130px
}
</style>
