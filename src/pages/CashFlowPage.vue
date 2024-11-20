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

    <main id="chashflow">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="date">1 de outubro</h2>

            <div class="mt-3">
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="expense">- R$ 19,00</h5>
                  <h6>pago</h6>
                </div>
              </div>
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="income">+ R$ 19,00</h5>
                  <h6>recebido</h6>
                </div>
              </div>
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="income">+ R$ 19,00</h5>
                  <h6>recebido</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h2 class="date">3 de outubro</h2>

            <div class="mt-3">
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="expense">- R$ 19,00</h5>
                  <h6>pago</h6>
                </div>
              </div>
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="income">+ R$ 19,00</h5>
                  <h6>recebido</h6>
                </div>
              </div>
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="income">+ R$ 19,00</h5>
                  <h6>recebido</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h2 class="date">10 de dezembro</h2>

            <div class="mt-3">
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="expense">- R$ 19,00</h5>
                  <h6>pago</h6>
                </div>
              </div>
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="income">+ R$ 19,00</h5>
                  <h6>recebido</h6>
                </div>
              </div>
              <div class="card-cashflow">
                <div class="head">
                  <i class="fa-solid fa-utensils"></i>
                  <div class="content">
                    <h3>Cachorro quente</h3>
                    <h4>Conto inicial - 01/01/2024</h4>
                  </div>
                </div>
                <div class="price">
                  <h5 class="income">+ R$ 19,00</h5>
                  <h6>recebido</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

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
#chashflow {
  background-color: var(--bg-blue);
  padding-top: 40px;
  margin-bottom: 40px;
}

#chashflow h2 {
  color: #fff;
  font-size: 1rem;
}
#chashflow .card-cashflow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background-color: var(--bg-rgba-blue);
  padding: 10px 20px;
  border-radius: 5px;
}
#chashflow .card-cashflow .head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#chashflow .card-cashflow .head i {
  font-size: 1.3rem;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#chashflow .card-cashflow .head .content {
  color: #fff;
  margin-left: 10px;
}
#chashflow .card-cashflow .head .content h3 {
  font-size: 1.1rem;
  margin-bottom: 0;
}
#chashflow .card-cashflow .head .content h4 {
  font-size: 0.9rem;
  margin-bottom: 0;
  font-weight: 400;
}
#chashflow .card-cashflow .price {
  text-align: right;
  font-weight: 400;
}
#chashflow .card-cashflow h5 {
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
#chashflow .card-cashflow h5.expense {
  color: var(--lightness-red);
}
#chashflow .card-cashflow h5.income {
  color: var(--lightness-green);
}
#chashflow .card-cashflow h6 {
  font-size: 0.9rem;
  font-weight: 400;
  color: #fff;
}
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

