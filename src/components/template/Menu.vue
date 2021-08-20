<template>
  <nav>
    <v-app-bar
      app
      absolute
      class="custom-header-background larger-menu d-flex align-center justify-space-between"
    >
        <v-img
            src="@/assets/images/header-image.png"
            max-width="156px"
            max-heigth="54px">
        </v-img>
        <v-slide-group
          color="primary"
        >
          <v-slide-item
            v-for="itemMenu in menu"
            :key="itemMenu.id"
            v-slot="{ active, toggle }"
          >
            <v-btn
              class="mx-2 text-capitalize white--text"
              :input-value="active"
              active-class="transparent white--text"
              text
              @click="toggle"
            >
                {{itemMenu.name}}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
        <Profile/>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Profile from './Profile.vue'

export default {
  components:{
    Profile
  },
  data: () => ({
    drawer: null,
    isAdministrador: true,
    user: 'Foo',
    menu: [
      {
        id: 1,
        name: 'Produtos',
      },
      {
        id: 2,
        name: 'Categorias',
      },
      {
        id: 3,
        name: 'Sellers',
      },
      {
        id: 4,
        name: 'Usuários',
      }
    ]
  }),
  computed: {
    ...mapGetters('authentication', ['menu']),
    pageName() {
      return this.$route.name;
    }
  },
  created: function () {
  },
  methods: {
    ...mapActions('authentication', ['nextStep']),
  },
};
</script>

<style>

  .larger-menu {
    height: 80px !important;
    width: 100%;
    z-index: 0 !important;
  }

  .v-toolbar__content{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .custom-header-background{
    top: 0px;
    left: 0px;
    width: 1366px;
    height: 80px;
    background: transparent linear-gradient(87deg, #0340A3 0%, #0476C1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 6px #00000029;
    opacity: 1;
  }

  header{
    width: 100% !important
  }

</style>
