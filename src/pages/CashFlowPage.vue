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
  </MainLayout>
</template>

<script setup>
import $ from "jquery";
window.$ = window.jQuery = $;
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { onMounted, ref } from "vue";

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
nav {
  color: #fff;
  background-color: var(--bg-blue);
}
nav .item {
  text-align: center;
}
</style>
