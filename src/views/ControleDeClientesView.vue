<template>
  <div>
    <h1>{{ mensagem }}</h1>
  </div>
</template>

<script>
export default {
  name: "ControleDeClientesView",
  data() {
    return {
      mensagem: "Esta é a tela Controle de Clientes",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
