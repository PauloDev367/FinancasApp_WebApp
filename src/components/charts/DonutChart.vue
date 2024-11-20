<template>
  <canvas :id="id"></canvas>
</template>



<script>
import Chart from "chart.js/auto";

export default {
  name: "DonutChart",
  props: {
    id: { required: true },
  },
  data() {
    return {
      data: [
        { year: "Fast food", count: 10 },
        { year: "Investimentos", count: 10 },
      ],
    };
  },
  methods: {
    loadChart() {
      new Chart(document.getElementById(this.id), {
        type: "doughnut",
        data: {
          labels: this.data.map((row) => row.year),
          datasets: [
            {
              label: "",
              data: this.data.map((row) => row.count),
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                display: false,
              },
            },
            x: {
              ticks: {
                display: false,
              },
            },
          },
        },
      });
    },
  },
  mounted() {
    this.loadChart();
  },
};
</script>
  
