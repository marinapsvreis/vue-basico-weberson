<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12"></div>
      <h2 class="titulo">Produtos</h2>
    </div>

    <hr class="linha-separadora" />

    <div class="row linha-bootstrap">
      <div class="button-principal">
        <ButtonComponent :callback="adicionarProduto" value="Adicionar" />
      </div>
      <div class="button-extra">
        <a @click="verProdutosEmCards" href="" class="ver-em-cards"
          >Ver em cards</a
        >
      </div>
    </div>

    <div class="row table-row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data de cadastro</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.valor | real }}</td>
              <td>{{ item.dataCadastro | data }}</td>
              <td>
                <i
                  @click="editarProduto(item)"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
                <i
                  @click="excluirProduto(item)"
                  class="fas fa-trash-alt icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import ProdutoMixin from "@/mixins/produto-mixin";

export default {
  name: "ControleDeProdutosView",
  mixins: [ProdutoMixin],
  components: {
    ButtonComponent,
  },
  data() {
    return {};
  },
  methods: {
    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },
    verProdutosEmCards() {
      this.$router.push({ name: "ListaProdutosCard" });
    },
  },
};
</script>

<style scoped>
h1 {
  color: black;
}
</style>
