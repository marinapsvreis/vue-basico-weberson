<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <Menu v-if="this.$router.currentRoute.name != 'LoginView'" />

    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/menu/MenuComponent.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

:root {
  --cor-primaria: #2962ff;
  --cor-secundaria: #448aff;
  font-family: Quicksand, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin-top: 30px;
}

.titulo {
  font-weight: 600;
  color: #363636;
}

.button-principal {
  width: 180px;
}

.linha-separadora {
  margin-inline: -15px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.table-row {
  margin-top: -5px;
  margin-inline: -30px;
}

.icones-tabela {
  margin: 7px;
  cursor: pointer;
  color: var(--cor-primaria);
}

.linha-bootstrap {
  display: flex;
  justify-content: space-between;
}

.button-extra {
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 15px;
}

/* Override */

.btn-primary,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:target,
.btn-primary:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: var(--cor-primaria);
  border: var(--cor-primaria);
  outline: none;
  box-shadow: none;
}

.btn-primary:hover {
  color: #fff;
  background-color: var(--cor-secundaria);
  border-color: var(--cor-secundaria);
}
</style>
