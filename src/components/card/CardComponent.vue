<template>
  <div class="card">
    <img
      src="https://img.lojadomecanico.com.br/IMAGENS/2/121/87206/Chave-de-Fenda-14-x-5-Pol-tramontina-415000311.JPG"
      alt=""
    />

    <h4>
      <slot name="nome"></slot>
    </h4>
    <p class="valor">
      <slot name="valor"></slot>
    </p>
    <p>
      <slot name="observacao"></slot>
    </p>
    <div>
      <slot name="acoes"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  max-width: 250px;
  margin: 5px;
  text-align: center;
  padding: 10px;
}

.valor {
  color: grey;
  font-size: 22px;
}
</style>