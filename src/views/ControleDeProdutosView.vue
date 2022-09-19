<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12"></div>
      <h2 class="titulo">Produtos</h2>
    </div>

    <hr class="linha-separadora" />

    <div class="row">
      <div class="button-principal">
        <ButtonComponent value="Adicionar" />
      </div>
    </div>

    <div class="row table-row">
      <div class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Data de cadastro</th>
              <th>-</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/button/ButtonComponent.vue";

export default {
  name: "ControleDeProdutosView",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      mensagem: "Esta é a tela Controle de Produtos",
    };
  },
};
</script>

<style scoped>
h1 {
  color: black;
}
</style>
