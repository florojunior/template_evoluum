<template>
    <v-container
      class="box-content pa-0 pl-4 pr-4 pt-4"
      fluid>
      <Form/>
    </v-container>   
</template>


<script>

import Form from '@/components/application/categoria/Form.vue'

export default {
  components:{
    Form
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
.box-content{background-color: rgb(237, 237, 237); height: calc(100% - 80px);margin-top: 80px
}
</style>
