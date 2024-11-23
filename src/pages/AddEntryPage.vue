<template>
  <header :class="isAnIncome == true ? 'expense' : 'income'">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul>
            <li>
              <a
                href="#"
                @click.prevent="isAnIncome = false"
                :class="isAnIncome == false ? 'active' : ''"
              >
                Despesas
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="isAnIncome = true"
                :class="isAnIncome == true ? 'active' : ''"
              >
                Receita
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div id="value-float-container">
            <div>
              <input
                type="number"
                id="value-float"
                step="0.01"
                value="0.00"
                min="0.00"
              />
            </div>
            <div>
              <i class="fa-solid fa-thumbs-up" v-if="isAnIncome == true"></i>
              <i class="fa-solid fa-thumbs-down" v-else></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <MainLayout>
    <template v-if="isAnIncome == true">
      <IncomeEntryComponent />
    </template>
    <template v-else>
      <ExpenseEntryComponent />
    </template>
  </MainLayout>
</template>


<script setup>
import { ref } from "vue";
import MainLayout from "./layouts/MainLayout.vue";

import ExpenseEntryComponent from "./../components/funds/ExpenseEntryComponent.vue";
import IncomeEntryComponent from "./../components/funds/IncomeEntryComponent.vue";
const isAnIncome = ref(true);
</script>


<style scoped>
header {
  padding: 10px 0;
}
header.income {
  background-color: var(--dark-red);
}
header.expense {
  background-color: var(--dark-green);
}

header ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul li a {
  color: #fff;
}

header ul li a.active {
  font-weight: bold;
}

#value-float-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
}

header #value-float {
  background-color: transparent;
  border-radius: none;
  border: none;
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
  width: 200px;
  text-align: right;
}
#value-float-container i {
  font-size: 3rem;
  color: #fff;
  display: inline-block;
  margin-left: 10px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  /* margin-left: 20px; */
  -webkit-appearance: none;
  margin: 0;
}
input:focus {
  outline: none;
  border: none;
}
</style>