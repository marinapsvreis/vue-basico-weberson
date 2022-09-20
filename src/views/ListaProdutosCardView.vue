<template>
  <div class="container">
    <div class="row:div col-sm-12">
      <h1 class="titulo">Cards de produtos</h1>
      <hr />
    </div>

    <div class="row mt-3">
      <div v-for="produto in produtos" :key="produto.id">
        <CardComponent>
          <template v-slot:nome>{{ produto.nome }}</template>
          <template v-slot:valor>{{ produto.valor | real }}</template>
          <template v-slot:observacao>{{ produto.observacao }}</template>
          <template v-slot:acoes>
            <i
              @click="editarProduto(produto)"
              class="fas fa-pencil-alt icones-tabela"
            ></i>
            <i
              @click="excluirProduto(produto)"
              class="fas fa-trash-alt icones-tabela"
            ></i>
          </template>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/card/CardComponent.vue";
import ProdutoMixin from "@/mixins/produto-mixin";

export default {
  name: "ListaProdutosCard",
  mixins: [ProdutoMixin],
  components: {
    CardComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>