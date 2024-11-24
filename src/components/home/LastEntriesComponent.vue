<template>
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
                  Últimos {{ perPage }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a
                    class="dropdown-item"
                    @click.prevent="changePerPage(5)"
                    href="#"
                    >Últimos 5</a
                  >
                  <a
                    class="dropdown-item"
                    @click.prevent="changePerPage(7)"
                    href="#"
                    >Últimos 7</a
                  >
                  <a
                    class="dropdown-item"
                    @click.prevent="changePerPage(14)"
                    href="#"
                    >Últimos 14</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <ul class="list-group mt-4">
            <li
              class="list-group-item"
              v-for="entry in entries"
              :key="entry.id"
            >
              <div class="card-release">
                <div class="head">
                  <template v-if="entry.entryType == 'EXPENSE'">
                    <i
                      :class="`${entry.expenseCategory.icon}`"
                      :style="{
                        'background-color': entry.expenseCategory.iconBg,
                        color: entry.expenseCategory.iconColor,
                      }"
                    ></i>
                    <div class="content">
                      <h3>{{ entry.title }}</h3>
                      <h4>
                        Conta inicial -
                        {{ formatDate(entry.expenseCategory.createdAt) }}
                      </h4>
                    </div>
                  </template>
                  <template v-else>
                    <i
                      :class="`${entry.incomeCategory.icon}`"
                      :style="{
                        'background-color': entry.incomeCategory.iconBg,
                        color: entry.incomeCategory.iconColor,
                      }"
                    ></i>
                    <div class="content">
                      <h3>{{ entry.title }}</h3>
                      <h4>
                        Conta inicial -
                        {{ formatDate(entry.incomeCategory.createdAt) }}
                      </h4>
                    </div>
                  </template>
                </div>
                <div class="body">
                  <template v-if="entry.entryType == 'EXPENSE'">
                    <h5 class="expense">- R$ {{ entry.price }}</h5>
                  </template>
                  <template v-else>
                    <h5 class="income">+ R$ {{ entry.price }}</h5>
                  </template>
                  <h6>
                    <span v-if="entry.payed == true">pago</span>
                    <span v-else>aguardando pagamento</span>
                  </h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import { getAllEntries } from "./../../services/entries.js";
const toastr = getCurrentInstance().appContext.config.globalProperties.$toastr;
const perPage = ref(5);
const entries = ref({});

onMounted(() => {
  getEntries();
});

const getEntries = () => {
  getAllEntries(1, perPage.value)
    .then((result) => {
      entries.value = result.data.items;
    })
    .catch((err) => {
      toastr.error("Erro ao tentar buscar lançamentos");
    });
};

const changePerPage = (total) => {
  perPage.value = total;
  getEntries();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
</script>

<style scoped>
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