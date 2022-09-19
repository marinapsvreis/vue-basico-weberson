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
        <table class="table table-hover">
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
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.valor }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.dataCadastro }}</td>
              <td>Editar / Excluir</td>
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

export default {
  name: "ControleDeProdutosView",
  components: {
    ButtonComponent,
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
