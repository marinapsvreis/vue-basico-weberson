<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">
          {{ modoCadastro ? "Adicionar" : "Editar" }} produto
        </h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input
            id="id"
            v-model="produto.id"
            type="text"
            disabled
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="produto.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input
            id="quantidade"
            v-model="produto.quantidadeEstoque"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            id="valor"
            v-model="produto.valor"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="dataCadastro">Data de Cadastro</label>
          <input
            id="dataCadastro"
            v-model="produto.dataCadastro"
            type="date"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="observacao">Observação</label>
          <textarea
            id="observacao"
            v-model="produto.observacao"
            type="text-"
            class="form-control"
            rows="4"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>
      <div class="col-sm-12">
        <button @click="cancelarAcao" class="btn btn-default float-right">
          Cancelar
        </button>
        <button @click="salvarProduto" class="btn btn-primary float-right">
          Salvar
        </button>
        <div v-show="modoCadastro" class="form-check-inline">
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="continuarAdicionando"
            />Continuar adicionando
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "@/models/Produto";
import produtoService from "@/services/produto-service";

export default {
  name: "ProdutoView",
  data() {
    return {
      produto: new Produto(),
      modoCadastro: true,
      continuarAdicionando: false,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    if (!id) return;
    this.modoCadastro = false;
    this.obterProdutoPorId(id);

    //aqui preciso obter o produto por id
  },
  methods: {
    obterProdutoPorId(id) {
      produtoService
        .obterPorId(id)
        .then((response) => {
          this.produto = new Produto(response.data);
        })
        .catch((error) => console.log(error));
    },
    salvarProduto() {
      this.modoCadastro ? this.cadastrarProduto() : this.atualizarProduto();
    },
    cancelarAcao() {
      this.produto = new Produto();
      this.$router.push({ name: "ControleDeProdutosView" });
    },
    cadastrarProduto() {
      if (!this.produto.modeloValidoParaCadastro()) {
        alert("O nome do produto é obrigatório para o cadastro");
        return;
      }

      produtoService
        .cadastrar(this.produto)
        .then(() => {
          alert("Produto cadastrado com sucesso!");
          this.produto = new Produto();
          if (!this.continuarAdicionando) {
            this.$router.push({ name: "ControleDeProdutosView" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    atualizarProduto() {
      if (!this.produto.modeloValidoParaAtualizar()) {
        alert("O id e o nome do produto são obrigatórios para a atualização");
        return;
      }

      produtoService
        .atualizar(this.produto.id, this.produto)
        .then(() => {
          alert("Produto atualizado com sucesso!");
          this.produto = new Produto();
          this.$router.push({ name: "ControleDeProdutosView" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>