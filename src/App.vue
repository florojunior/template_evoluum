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
 
 .v-application .text-lg-subtitle-1{
   font-family: 'GothamRoundedBold' !important;
   font-size: 19px !important;
 }

  .v-application .text-md-subtitle-1{
   font-family: 'GothamRoundedBold' !important;
 }

  .v-application{
   font-family: 'GothamRoundedBold';
 }

 @font-face {
    font-family: GothamRoundedBold, Courier, monospace !important;
    src:url("/assets/fonts/GothamRoundedBold.ttf");
}
</style>
