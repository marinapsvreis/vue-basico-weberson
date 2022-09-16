<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <Menu />

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
</style>
