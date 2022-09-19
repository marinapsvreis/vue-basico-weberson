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
</style>
