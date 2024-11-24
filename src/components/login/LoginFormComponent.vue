<template>
  <form @submit.prevent="login()">
    <div class="form-group">
      <label>E-mail: </label>
      <input type="text" class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <label>Senha: </label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <button type="submit">Entrar</button>
  </form>
</template>


<script setup>
import { getCurrentInstance, ref } from "vue";
import { loginUser } from "./../../services/user.js";
const toastr = getCurrentInstance().appContext.config.globalProperties.$toastr;
const email = ref(null);
const password = ref(null);

const login = () => {
  if (email.value == null || password.value == null) {
    toastr.error("É preciso informar o e-mail e a senha para continuar");
    return;
  }
  if (isEmailValid(email.value) == false) {
    toastr.error("E-mail inválido");
    return;
  }
  if (password.value.length < 8) {
    toastr.error("A senha precisa ter pelo menos 8 caracteres");
    return;
  }

  loginUser(email.value, password.value)
    .then((result) => {
      const token = result.data.login;
      window.localStorage.setItem("token", token);
      window.location.href = "/home";
    })
    .catch((err) => {
      toastr.error("E-mail ou senha inválidos");
    });
};

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
</script>



<style scoped>
form button {
  background-color: var(--lightness);
  width: 100%;
  display: inline-block;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--bg-blue);
  border-radius: 5px;
  margin-top: 20px;
}
</style>