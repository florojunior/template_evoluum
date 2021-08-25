<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from '@/views/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
 #app{
   font-family: Rounded, Helvetica, sans-serif !important;
 }
</style>
