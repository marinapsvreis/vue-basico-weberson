<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12"></div>
      <h2 class="titulo">Produtos</h2>
    </div>

    <hr class="linha-separadora" />

    <div class="row">
      <div class="button-principal">
        <ButtonComponent :callback="adicionarProduto" value="Adicionar" />
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
                  @click="editarProduto"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
                <i
                  @click="excluirProduto"
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
import produtoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import conversorDeData from "@/utils/conversor-data";
import conversorMonetario from "@/utils/conversor-monetario";

export default {
  name: "ControleDeProdutosView",
  components: {
    ButtonComponent,
  },
  filters: {
    data(data) {
      return conversorDeData.aplicarMascaraDataHoraEmDataIso(data);
    },
    real(valor) {
      return conversorMonetario.aplicarMascaraParaRealComPrefixo(valor);
    },
  },
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    obterTodosOsProdutos() {
      produtoService
        .obterTodos()
        .then((response) => {
          this.produtos = response.data.map((p) => new Produto(p));
          // console.log(this.produtos);
        })
        .catch((error) => console.log(error));
    },
    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },
    editarProduto() {
      alert("Editar Produto");
    },
    excluirProduto() {
      alert("Excluir Produto");
    },
  },
  mounted() {
    this.obterTodosOsProdutos();
  },
};
</script>

<style scoped>
h1 {
  color: black;
}
</style>
