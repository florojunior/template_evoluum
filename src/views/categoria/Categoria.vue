<template>
    <v-container
      class="box-content"
      fill-height>
      <List/>
    </v-container>   
</template>


<script>

import List from '@/components/application/categoria/List.vue'

export default {
  components:{
    List
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
