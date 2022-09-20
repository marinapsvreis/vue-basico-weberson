<template>
  <ul>
    <li>
      <a @click="() => this.$router.push({ path: '/' })">Dashboard</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/controle-de-produtos' })"
        >Produtos</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/controle-de-clientes' })"
        >Clientes</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/login' })">Login</a>
    </li>
    <li>
      <a @click="() => logout()">Sair</a>
    </li>
  </ul>
</template>

<script>
import usuarioService from "@/services/usuario-service";
import utilsStorage from "@/utils/storage";

export default {
  name: "MenuComponent",
  data() {
    return {};
  },
  methods: {
    logout() {
      usuarioService
        .logout()
        .then(() => {
          utilsStorage.removerUsuarioNaStorage();
          utilsStorage.removerTokenNaStorage();
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--cor-primaria);

  width: 100vw;
  height: 50px;

  top: 0;
  left: 0;

  display: flex;
  justify-content: left;
  align-items: center;
}

li {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
}

li:hover {
  background-color: var(--cor-secundaria);
  color: #000;
}

li a {
  text-decoration: none;
  text-align: center;
}

li:first-child {
  margin-left: 40px;
}

li:last-child {
  position: absolute;
  right: 0;
  text-align: right;
  margin-right: 20px;
}
</style>