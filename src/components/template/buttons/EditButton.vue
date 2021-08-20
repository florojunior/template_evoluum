<template>
  <v-btn
    data-testid="edit-button"
    color="primary py-4"
    icon
    @click="onClick"
  >
    <v-icon>mdi-pencil</v-icon> 
  </v-btn>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

