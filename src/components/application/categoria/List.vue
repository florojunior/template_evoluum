<template>
  <v-container class="fill-height" >
    <div style="height: 100%; width: 100%">
      <v-row class="d-flex flex-column justify-start align-start">
        <v-col cols=12>
          <PageHeader addTitle="Adicionar Categoria" routerPath="/categoria/form"/>
        </v-col>
        <v-col cols=12 class="d-flex justify-space-between">
          <v-text-field
              dense
              v-model="search"
              style="max-width: 400px"
              filled
              label="Pesquisar por categorias"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          <div class="filter d-flex pa-1">
            <v-select
              :items="items"
              label="Filtro 1"
            ></v-select>  
            <v-select
              :items="items"
              class="ml-4"
              label="Filtro 2"
            ></v-select>  
          </div>
        </v-col>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.acoes="{ item }">
              <EditButton
                class="mr-1"
                :onClick="() => handleEdit(item)"
              />
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

import PageHeader from '@/components/template/PageHeader.vue'
import EditButton from '@/components/template/buttons/EditButton.vue';

export default {
  components: {
      PageHeader,
      EditButton
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: 'Código',
        align: 'start',
        sortable: true,
        value: 'codigo',
      },
      { text: 'Nome', value: 'nome' },
      { text: 'Categoria pai', value: 'pai' },
      { text: 'Editar', value: 'acoes' }
    ],
    desserts: [
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      },
      {
        codigo: 12121212,
        nome: "Nome1",
        pai: "Categoria pai 1"
      }
    ]
  }),
  created: function () {
  },
  methods:{
  }
};
</script>

<style>
  .list-content{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
