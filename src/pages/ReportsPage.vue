<template>
  <MainLayout>
    <div id="nav-carousel-months">
      <nav>
        <div>
          <div ref="carousel" class="owl-carousel">
            <div
              v-for="(month, index) in months"
              :key="index"
              :class="[
                'item',
                { 'main-month': index === currentMonthIndex.value },
              ]"
            >
              {{ month }}
            </div>
          </div>
        </div>
      </nav>
    </div>

    <main class="mt-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card-report">
              <h2>Entradas x Saídas</h2>
              <BarChart id="chart1"></BarChart>
              <ul class="resume">
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
            </div>
          </div>

          <div class="col-12 mt-4">
            <div class="card-report">
              <h2>Despesas por categoria</h2>
              <DonutChart id="chart2"></DonutChart>
              <div class="categories">
                <ul class="list-group mt-4">
                  <li class="list-group-item">
                    <div class="card-release">
                      <div class="head">
                        <i class="fa-solid fa-utensils"></i>
                        <div class="content">
                          <h3>Cachorro quente</h3>
                        </div>
                      </div>
                      <div class="body">
                        <h5 class="expense">- R$ 19,00</h5>
                        <h6>50%</h6>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="card-release">
                      <div class="head">
                        <i class="fa-solid fa-piggy-bank"></i>
                        <div class="content">
                          <h3>Investimentos cdb</h3>
                        </div>
                      </div>
                      <div class="body">
                        <h5 class="income">+ R$ 200,00</h5>
                        <h6>50%</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>



<script setup>
import BarChart from "@/components/charts/BarChart.vue";
import DonutChart from "@/components/charts/DonutChart.vue";
import $ from "jquery";
window.$ = window.jQuery = $;
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { onMounted, ref } from "vue";
import MainLayout from "./layouts/MainLayout.vue";

const carousel = ref(null);

const currentMonthIndex = ref(new Date().getMonth());

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
    startPosition: currentMonthIndex.value,
  });

  $(carousel.value).on("changed.owl.carousel", (event) => {
    const centralIndex = event.item.index;
    currentMonthIndex.value = centralIndex;
    $(carousel.value)
      .find(".item")
      .removeClass("main-month")
      .eq(centralIndex)
      .addClass("main-month");
  });
});
</script>


<style scoped>
.card-report {
  background-color: var(--bg-rgba-blue);
  border-radius: 10px;
  padding: 20px;
}
.card-report h2 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 20px;
}
.resume {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  color: #fff;
  margin-top: 20px;
}
.resume li h3 {
  font-size: 1rem;
  margin-bottom: 0;
}
.resume li h4 {
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 0;
}
.resume li.incomes h3 {
  color: var(--lightness-green);
}
.resume li.expense {
  text-align: center;
}
.resume li.expense h3 {
  color: var(--lightness-red);
}
.resume li.balance {
  text-align: right;
}
.resume li.balance h3 {
  color: var(--lightness);
}

.categories .list-group-item {
  background-color: var(--bg-rgba-blue);
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}
.categories .card-release .head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.categories .card-release .head i {
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
.categories .card-release {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
}
.categories .card-release .head .content {
  margin-left: 10px;
}
.categories .card-release .head .content h3 {
  font-size: 1.1rem;
  margin-bottom: 0;
}
.categories .card-release .head .content h4 {
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 0;
}
.categories .card-release .body {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-wrap: wrap;
  text-align: right;
}
.categories .card-release .body h5 {
  margin-bottom: 0;
  font-size: 1rem;
  width: 100%;
}
.categories .card-release .body h5.income {
  color: var(--lightness-green);
}
.categories .card-release .body h5.expense {
  color: var(--lightness-red);
}
.categories .card-release .body h6 {
  font-size: 0.8rem;
  font-weight: 300;
}
</style>