<script setup>
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="login-area">
            <form>
              <div class="form-group">
                <label>E-mail: </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Senha: </label>
                <input type="password" class="form-control" />
              </div>
              <button>Entrar</button>
            </form>
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
.login-area a {
  color: #fff;
  display: inline-block;
  margin-top: 10px;
}
</style>
