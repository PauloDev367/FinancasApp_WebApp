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

    <LastEntriesComponent />
  </MainLayout>
</template>


<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import AccountBalancesComponent from "./../components/home/AccountBalancesComponent.vue";
import LastEntriesComponent from "./../components/home/LastEntriesComponent.vue";
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
</style>
