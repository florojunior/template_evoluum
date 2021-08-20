<template>
    <v-container
      class="box-content"
      fill-height>
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
.box-content{background-color: #f8f8f8; height: calc(100% - 160px);margin-top: 130px
}
</style>
