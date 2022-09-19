<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>

    <InputComponent label="E-mail" placeHolder="exemplo@gmail.com" />
    <InputComponent label="Senha" placeHolder="123456" type="password" />
    <ButtonComponent value="Entrar" :callback="login" />
  </div>
</template>

<script>
import InputComponent from "@/components/input/InputComponent.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";

export default {
  name: "LoginView",
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {};
  },
  methods: {
    login() {
      //criar uma lógica para acessar o sistema
      this.$router.push({ name: "DashboardView" });
    },
  },
};
</script>

<style scoped>
.box-login {
  width: 400px;
  /* height: 500px; */

  margin: auto;
  margin-top: 220px;
  padding: 30px;

  border: 1px solid #ccc;
}

.logo {
  width: 100%;

  text-align: center;
  color: var(--cor-primaria);
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 15px;
}
</style>