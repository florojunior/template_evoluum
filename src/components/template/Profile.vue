<template>
    <div>
        <v-icon color="white" class="pb-1 mr-1">
            mdi-account-circle-outline
        </v-icon> 
        <span class="white--text font-weight-bold">
            Ola, Koerick
        </span>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    icon
                    v-on="on"
                >
                    <v-icon color="white">
                        mdi-menu-down
                    </v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item >
                    <v-list-item-title>
                        <v-btn
                            dark
                            icon>
                            <v-icon color="primary">
                                mdi-subdirectory-arrow-left
                            </v-icon>
                        </v-btn>
                        Sair
                        
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>

export default {
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
</style>
