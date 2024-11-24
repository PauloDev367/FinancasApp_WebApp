<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="login-area">
            <LoginFormComponent />

            <div class="text-right">
              <a href="#">Criar uma conta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: var(--bg-blue);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.login-area {
  margin: 0 auto;
  width: 400px;
}
form {
  width: 400px;
  background-color: var(--bg-light-blue);
  color: #fff;
  padding: 20px;
  margin: 0 auto;
  border-radius: 5px;
}
.login-area a {
  color: #fff;
  display: inline-block;
  margin-top: 10px;
}
</style>


<script setup>
import LoginFormComponent from "../components/login/LoginFormComponent.vue";
const login = (event) => {
  event.preventDefault();
  window.location.href = "/home";
};
</script>