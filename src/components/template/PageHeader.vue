<template>
  <v-row no-gutters align="center" justify="space-between">
    <v-col class="d-flex justify-space-between" cols="12">
      <PageTitle />
      <v-btn
        depressed
        color="primary"
      >
        {{addTitle}}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import PageTitle from '@/components/template/PageTitle.vue';

export default {
  components: {
    PageTitle,
  },
  props: {
    addTitle:  {
      type: String,
      required: true,
    }
  },
};
</script>

<style>
</style>
