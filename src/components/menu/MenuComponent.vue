<template>
  <ul>
    <li>
      <a @click="() => this.$router.push({ path: '/' })">Dashboard</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/controle-de-produtos' })"
        >Produtos</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/controle-de-clientes' })"
        >Clientes</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/login' })">Login</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/login' })">Sair</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--cor-primaria);

  width: 100vw;
  height: 50px;

  top: 0;
  left: 0;

  display: flex;
  justify-content: left;
  align-items: center;
}

li {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 20px;
  font-size: 24px;
  cursor: pointer;
}

li:hover {
  background-color: var(--cor-secundaria);
}

li:hover a {
  color: #000;
}

li:first-child {
  margin-left: 40px;
}

li:last-child {
  position: absolute;
  right: 0;
  text-align: right;
  margin-right: 20px;
}

li a {
  color: #fff;
  text-decoration: none;
  text-align: center;
}
</style>