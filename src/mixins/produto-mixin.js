import produtoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import conversorDeData from "@/utils/conversor-data";
import conversorMonetario from "@/utils/conversor-monetario";

let ProdutoMixin = {
  filters: {
    data(data) {
      return conversorDeData.aplicarMascaraEmDataIso(data);
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
  mounted() {
    this.obterTodosOsProdutos();
  },
  methods: {
    obterTodosOsProdutos() {
      produtoService
        .obterTodos()
        .then((response) => {
          let produtos = response.data.map((p) => new Produto(p));

          this.produtos = produtos.sort(this.ordenarProdutos).reverse();
        })
        .catch((error) => console.log(error));
    },
    ordenarProdutos(a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    },
    editarProduto(produto) {
      this.$router.push({
        name: "EditarProduto",
        params: { id: produto.id },
      });
    },
    excluirProduto(produto) {
      this.$swal({
        icon: "question",
        title: `Deseja excluir o produto?`,
        text: `Código: ${produto.id} - Nome: ${produto.nome}`,
        showCancelButton: true,
        confirmButtonColor: "#2962ff",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        anime: true,
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          produtoService
            .deletar(produto.id)
            .then(() => {
              let indice = this.produtos.findIndex((p) => p.id == produto.id);
              this.produtos.splice(indice, 1);
              this.$swal({
                icon: "success",
                title: "Produto excluido com sucesso!",
                confirmButtonColor: "#2962ff",
                animate: true,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  }
}

export default ProdutoMixin;