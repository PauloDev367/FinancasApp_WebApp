<template>
  <MainLayout>
    <div id="nav-carousel-months">
      <nav>
        <div class="text-center">
          <select name="year" class="select-year" @change="changeSelectedYear">
            <option
              v-for="(year, index) in nextTenYear"
              :key="index"
              :selected="yearToSearch == year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
        <div>
          <div ref="carousel" class="owl-carousel">
            <div
              v-for="(month, index) in months"
              :key="index"
              :class="['item', { 'main-month': index === month }]"
            >
              {{ month }}
            </div>
          </div>
        </div>
      </nav>
    </div>

    <CashFlowComponent :clientEntries="clientEntries" />

    <section id="resume">
      <ul>
        <li class="incomes">
          <div class="card-resume">
            <h3>R$ 3.000,00</h3>
            <h4>Entradas</h4>
          </div>
        </li>
        <li class="expense">
          <div class="card-resume">
            <h3>R$ 19,00</h3>
            <h4>Saídas</h4>
          </div>
        </li>
        <li class="balance">
          <div class="card-resume">
            <h3>R$ 3.500,00</h3>
            <h4>Saldo</h4>
          </div>
        </li>
      </ul>
    </section>
  </MainLayout>
</template>

<script setup>
import { getAllEntries } from "@/services/entries";
import searchdate from "@/stores/searchdate";
import $ from "jquery";
window.$ = window.jQuery = $;
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import toastr from "toastr";
import { onMounted, ref } from "vue";
import MainLayout from "./layouts/MainLayout.vue";
import CashFlowComponent from "./../components/chashflow/CashFlowComponent.vue";

const yearToSearch = ref(searchdate.yearToSearch);
const monthToSearch = ref(searchdate.monthToSearch);

const nextTenYear = ref(searchdate.getNextTenYears());
const carousel = ref(null);
const page = ref(1);

const currentMonthIndex = ref(new Date().getMonth());
const clientEntries = ref([]);
const months = ref([
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]);

onMounted(async () => {
  await import("owl.carousel");

  $(carousel.value).owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    autoplay: false,
    items: 1,
    startPosition: monthToSearch.value - 1,
  });

  $(carousel.value).on("changed.owl.carousel", (event) => {
    const monthUpdate = event.item.index + 1;
    searchdate.setMonthToSearch(monthUpdate);
    monthToSearch.value = searchdate.monthToSearch;
    getEntries();
    const centralIndex = event.item.index;
    currentMonthIndex.value = centralIndex;
    $(carousel.value)
      .find(".item")
      .removeClass("main-month")
      .eq(centralIndex)
      .addClass("main-month");
  });

  getEntries();
});

const getEntries = () => {
  const perPage = 20;
  getAllEntries(page.value, perPage, yearToSearch.value, monthToSearch.value)
    .then((result) => {
      clientEntries.value = result.data.items;
    })
    .catch((err) => {
      toastr.error("Erro ao tentar buscar lançamentos");
    });
};

const changeSelectedYear = (event) => {
  const newYear = event.target.value;
  yearToSearch.value = newYear;
  searchdate.setYearToSearch(newYear);
  getEntries();
};
</script>

<style scoped>

#resume {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 90px;
  background-color: var(--resume);
  color: #fff;
}
#resume ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  padding: 10px 40px;
  margin: 0;
}
#resume ul li h3 {
  font-size: 1rem;
  margin-bottom: 0;
}
#resume ul li h4 {
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 0;
}
#resume ul li.incomes h3 {
  color: var(--lightness-green);
}
#resume ul li.expense {
  text-align: center;
}
#resume ul li.expense h3 {
  color: var(--lightness-red);
}
#resume ul li.balance {
  text-align: right;
}
#resume ul li.balance h3 {
  color: var(--lightness);
}
</style>

