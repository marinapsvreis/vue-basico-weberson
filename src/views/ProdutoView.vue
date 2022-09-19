<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Adicionar produto</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input id="id" type="text" disabled class="form-control" />
        </div>
      </div>
      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input id="nome" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="valor">Valor</label>
          <input id="valor" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input id="quantidade" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="dataCadastro">Data de Cadastro</label>
          <input id="dataCadastro" type="date" class="form-control" />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="observacao">Observação</label>
          <textarea id="observacao" type="text-" class="form-control" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>
      <div class="col-sm-12">
        <button class="btn btn-default float-right">Cancelar</button>
        <button class="btn btn-primary float-right">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
textarea {
  resize: none;
  height: 200px;
}
</style>