import Login from '@/views/LoginView.vue';
import Dashboard from '@/views/DashboardView.vue';
import ControleDeProdutos from '@/views/ControleDeProdutosView.vue';
import ControleDeClientes from '@/views/ControleDeClientesView.vue';

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: Login,
    title: 'Login',
    //icon: "fa fa-teste",
    meta: {
      requiredAuth: false
    }
  },
  {
    path: '/',
    name: 'DashboardView',
    component: Dashboard,
    title: 'Dashboard',
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/controle-de-produtos',
    name: 'ControleDeProdutosView',
    component: ControleDeProdutos,
    title: 'Produtos',
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/controle-de-clientes',
    name: 'ControleDeClientesView',
    component: ControleDeClientes,
    title: 'Clientes',
    meta: {
      requiredAuth: true
    }
  },
]

export default routes;