<template>
  <canvas :id="id"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "LineChart",
  props: {
    id: { required: true },
  },
  data() {
    return {
      data: [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ],
    };
  },
  methods: {
    loadChart() {
      new Chart(document.getElementById(this.id), {
        type: "line",
        data: {
          labels: this.data.map((row) => row.year),
          datasets: [
            {
              label: "lineChart by year",
              data: this.data.map((row) => row.count),
            },
          ],
        },
      });
    },
  },
  mounted() {
    this.loadChart();
  },
};
</script>
  
