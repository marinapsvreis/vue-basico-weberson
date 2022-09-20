<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>

    <InputComponent
      label="E-mail"
      placeHolder="exemplo@gmail.com"
      v-model="usuario.email"
    />
    <InputComponent
      label="Senha"
      placeHolder="123456"
      type="password"
      v-model="usuario.senha"
    />
    <ButtonComponent value="Entrar" :callback="login" />
  </div>
</template>

<script>
import InputComponent from "@/components/input/InputComponent.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import Usuario from "@/models/Usuario";
import usuarioService from "@/services/usuario-service";

export default {
  name: "LoginView",
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      usuario: new Usuario(),
    };
  },
  methods: {
    login() {
      if (!this.usuario.modeloValidoLogin()) {
        this.$swal({
          icon: "warning",
          title: `Email e senha são obrigatórios.`,
          confirmButtonColor: "#2962ff",
          anime: true,
        });
        return;
      }

      usuarioService
        .login(this.usuario.email, this.usuario.senha)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      this.$router.push({ name: "DashboardView" });
    },
  },
};
</script>

<style scoped>
.box-login {
  width: 400px;

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