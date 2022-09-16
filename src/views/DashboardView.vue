<template>
  <div>
    <h1>{{ mensagem }}</h1>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      mensagem: "Esta é a tela Dashboard",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
