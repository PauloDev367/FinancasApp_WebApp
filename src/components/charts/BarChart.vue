<template>
  <canvas :id="id"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "BarChart",
  props: {
    id: { required: true },
  },
  data() {
    return {
      data: [{ count: 3000 }, { count: 1500 }],
    };
  },
  methods: {
    loadChart() {
      new Chart(document.getElementById(this.id), {
        type: "bar",
        data: {
          labels: ["", ""],
          datasets: [
            {
              label: "",
              data: this.data.map((row) => row.count),
              backgroundColor: ["#417B5A", "#DB5461"],
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
