<template>
  <MainLayout>
    <nav class="top-infos">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="area-infos">
              <a href="#" class="account">
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

    <main class="acount-balances">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="area-general-infos">
              <div>
                <h3>Saldo geral</h3>
                <h2>R$ 3.000,00</h2>
              </div>
              <i
                @click="changeShowBalanceStatus"
                class="show-balance fa-solid fa-eye-slash"
                v-if="showBalance"
              ></i>
              <i
                @click="changeShowBalanceStatus"
                class="show-balance fa-solid fa-eye"
                v-else
              ></i>
            </div>
          </div>

          <div class="col-12">
            <div class="my-accounts">
              <h3>Minhas contas</h3>
              <div>
                <div class="account">
                  <div class="head">
                    <i class="fa-solid fa-wallet"></i>
                    <div class="content">
                      <h4>Conta inicial</h4>
                      <h5>Nome conta</h5>
                    </div>
                  </div>
                  <div class="body">
                    <h6>R$ 3.000,00</h6>
                  </div>
                </div>
                <button>Mudar de conta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

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
.acount-balances {
  margin-top: 20px;
}
.acount-balances .container {
  color: #fff;
  background-color: var(--bg-rgba-blue);
  padding: 30px;
  border-radius: 5px;
}
.acount-balances .container .area-general-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
}
.acount-balances h3 {
  font-weight: 300;
  font-size: 1.3rem;
}
.acount-balances .container .area-general-infos h2 {
  font-size: 1.5rem;
}

.show-balance {
  cursor: pointer;
  font-size: 1.5rem;
}

.my-accounts {
  padding-top: 20px;
}
.my-accounts .account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.my-accounts .account .head {
  display: flex;
  justify-content: start;
  align-items: center;
}
.my-accounts .account .head i {
  border: none;
}
.my-accounts .account .head h4 {
  font-weight: 300;
  margin-bottom: 0;
  font-size: 1.2rem;
}
.my-accounts .account .head h5 {
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 0;
}
.my-accounts .account .body h6 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-bottom: 0;
}
.my-accounts button {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  padding: 10px 15px;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: bold;
  transition: all 0.3s;
}
.my-accounts button:hover {
  background-color: #fff;
  color: var(--bg-light-blue);
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

<script setup>
import MainLayout from "./layouts/MainLayout.vue";

import { ref } from "vue";

const showBalance = ref(true);

const changeShowBalanceStatus = () => {
  showBalance.value = !showBalance.value;
};
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