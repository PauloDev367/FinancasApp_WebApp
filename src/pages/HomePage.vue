<template>
  <MainLayout>
    <nav class="top-infos">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="area-infos">
              <a href="/configuration" class="account">
                <i class="fa-solid fa-user"></i>
                <div class="content">
                  <h3>{{ helloMessage() }}</h3>
                  <h2>User name</h2>
                </div>
              </a>

              <div class="notification">
                <i class="fa-solid fa-bell"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <AccountBalancesComponent
      v-if="bankAccounts != null"
      :bankAccounts="bankAccounts"
      :showBalance="showBalance"
    />
    <section class="last-releases">
      <div class="container">
        <div class="row">
          <div class="col-12 area-top">
            <div class="head">
              <i class="fa-regular fa-calendar-days"></i>
              <div class="content">
                <h4>Lançamentos</h4>
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Últimos 5
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">Últimos 5</a>
                    <a class="dropdown-item" href="#">Últimos 7</a>
                    <a class="dropdown-item" href="#">Últimos 14</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <ul class="list-group mt-4">
              <li class="list-group-item">
                <div class="card-release">
                  <div class="head">
                    <i class="fa-solid fa-utensils"></i>
                    <div class="content">
                      <h3>Cachorro quente</h3>
                      <h4>Conta inicial - 01/01/2024</h4>
                    </div>
                  </div>
                  <div class="body">
                    <h5 class="expense">- R$ 19,00</h5>
                    <h6>pago</h6>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="card-release">
                  <div class="head">
                    <i class="fa-solid fa-piggy-bank"></i>
                    <div class="content">
                      <h3>Investimentos cdb</h3>
                      <h4>Conta inicial - 01/01/2024</h4>
                    </div>
                  </div>
                  <div class="body">
                    <h5 class="income">+ R$ 200,00</h5>
                    <h6>pago</h6>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="card-release">
                  <div class="head">
                    <i class="fa-solid fa-utensils"></i>
                    <div class="content">
                      <h3>Cachorro quente</h3>
                      <h4>Conta inicial - 01/01/2024</h4>
                    </div>
                  </div>
                  <div class="body">
                    <h5 class="expense">- R$ 19,00</h5>
                    <h6>pago</h6>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="card-release">
                  <div class="head">
                    <i class="fa-solid fa-piggy-bank"></i>
                    <div class="content">
                      <h3>Investimentos cdb</h3>
                      <h4>Conta inicial - 01/01/2024</h4>
                    </div>
                  </div>
                  <div class="body">
                    <h5 class="income">+ R$ 200,00</h5>
                    <h6>pago</h6>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="card-release">
                  <div class="head">
                    <i class="fa-solid fa-piggy-bank"></i>
                    <div class="content">
                      <h3>Investimentos cdb</h3>
                      <h4>Conta inicial - 01/01/2024</h4>
                    </div>
                  </div>
                  <div class="body">
                    <h5 class="income">+ R$ 200,00</h5>
                    <h6>pago</h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>


<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import AccountBalancesComponent from "./../components/home/AccountBalancesComponent.vue";
import { getCurrentInstance, onMounted, ref } from "vue";
import { getBankAccounts } from "./../services/bankaccount.js";

const toastr = getCurrentInstance().appContext.config.globalProperties.$toastr;
const bankAccounts = ref(null);

onMounted(async () => {
  const { data } = await getBankAccounts(0);
  bankAccounts.value = data.items;
});

const helloMessage = () => {
  const horaAtual = new Date().getHours();

  if (horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
};
</script>

<style scoped>
.top-infos .area-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.account {
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fff;
}
.account i {
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: var(--black);
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  border: 3px solid var(--dark-green);
}
.account .content {
  margin: 0;
  margin-left: 10px;
}
.account h3 {
  margin-bottom: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 300;
}
.account h2 {
  margin-bottom: 0;
  padding: 0;
  font-size: 1.2rem;
}

.notification i {
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: var(--black);
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
}

.last-releases {
  margin-top: 20px;
}
.last-releases .container {
  color: #fff;
  background-color: var(--bg-rgba-blue);
  padding: 30px;
  border-radius: 5px;
}

.last-releases .area-top .head {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.last-releases .area-top .head i {
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: var(--black);
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
}
.last-releases .area-top .head .content {
  margin-left: 10px;
}
.last-releases .area-top .head h4 {
  margin-bottom: 0;
  font-size: 1.3rem;
}
.last-releases .area-top .head button {
  background-color: transparent;
  border: none;
  padding: 0;
  color: #fff;
  font-weight: 300;
}
.last-releases .list-group-item {
  background-color: transparent;
  border: none;
  padding: 0;
}
.last-releases .card-release .head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.last-releases .card-release .head i {
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: var(--black);
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
}
.last-releases .card-release {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.last-releases .card-release .head .content {
  margin-left: 10px;
}
.last-releases .card-release .head .content h3 {
  font-size: 1.1rem;
  margin-bottom: 0;
}
.last-releases .card-release .head .content h4 {
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 0;
}
.last-releases .card-release .body {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-wrap: wrap;
  text-align: right;
}
.last-releases .card-release .body h5 {
  margin-bottom: 0;
  font-size: 1rem;
  width: 100%;
}
.last-releases .card-release .body h5.income {
  color: var(--lightness-green);
}
.last-releases .card-release .body h5.expense {
  color: var(--lightness-red);
}
.last-releases .card-release .body h6 {
  font-size: 0.8rem;
  font-weight: 300;
}
</style>
