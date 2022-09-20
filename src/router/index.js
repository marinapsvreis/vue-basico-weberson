import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' //remove a tralha do endereço da página
});

router.beforeEach((to, from, next) => {

  let token = localStorage.getItem('token');

  if (to.name == "Login") {
    if (token) {
      next({ name: 'ControleDeProdutosView' })
    } else {
      next();
    }
  } else if (to.matched.some(rota => rota.meta.requiredAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: "/login",
        params: { nextURL: to.fullPath }
      })
    } else {
      next();
    }
  } else {
    if (token == null) {
      next();
    } else {
      next({ name: "ControleDeProdutosView" });
    }
  }
})

export default router;
