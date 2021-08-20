import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(
          /* webpackChunkName: "login" */ '@/views/authentication/Login.vue'
        ),
    },
    {
      path: '/categoria',
      name: 'Categoria',
      component: () =>
        import(
          /* webpackChunkName: "categoria" */ '@/views/categoria/Categoria.vue'
        ),
    },
    {
      path: '/categoria/form',
      name: 'Form ',
      component: () =>
        import(
          /* webpackChunkName: "categoria" */ '@/views/categoria/Form.vue'
        ),
    },
    {
      path: '/',
      redirect: '/login',
    }
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
