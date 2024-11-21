<template>
  <MainLayout>
    <section id="profile">
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <div class="card-info">
              <div class="name-update">
                <i class="fa-solid fa-user profile"></i>
                <div class="input">
                  <button>
                    <i class="fa-solid fa-file-pen"></i>
                  </button>
                </div>
              </div>
              <hr class="bg-light mt-4" />
              <form id="form-update-basic-infos">
                <h5>Informações básicas</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    value="José da silva"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    value="email@email.com"
                  />
                </div>
                <button>
                  Atualizar <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </form>
              <hr class="bg-light mt-4" />
              <form id="form-update-password">
                <h5>Senha</h5>
                <div class="form-group">
                  <label>Senha atual:</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Confirmar nova senha:</label>
                  <input type="text" class="form-control" />
                </div>
                <button>
                  Atualizar <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";
</script>

<style scoped>
h5 {
  color: #fff;
  margin-bottom: 15px;
}
.card-info {
  background-color: var(--bg-rgba-blue);
  padding: 10px;
  border-radius: 5px;
}
#profile i.profile {
  font-size: 2rem;
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #fff;
  color: var(--bg-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
#profile .name-update {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#profile .name-update .input {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  border-radius: 5px;
}
#profile .name-update .input input {
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
}
#form-update-password button,
#form-update-basic-infos button {
  border-radius: 5px;
  font-size: 1.3rem;
  height: 50px;
  background-color: transparent;
  border: none;
  border: 1px solid var(--lightness);
  color: var(--lightness);
  width: 100%;
  transition: all 0.3s;
}
#form-update-password label {
  color: #fff;
}
#profile .name-update .input button:hover,
#form-update-password button:hover,
#form-update-basic-infos button:hover {
  background-color: var(--lightness);
  color: var(--bg-blue);
}
#profile .name-update .input button {
  transition: all 0.3s;
  width: 50px;
  border-radius: 5px;
  font-size: 1.3rem;
  height: 50px;
  background-color: transparent;
  border: none;
  border: 1px solid var(--lightness);
  color: var(--lightness);
}
</style>
