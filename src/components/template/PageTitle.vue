<template>
  <h1 data-testid="page-title" class="text-h5 black--text font-weight-bold">
    {{ pageName }}
  </h1>
</template>

<script>
export default {
  computed: {
    pageName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
</style>
