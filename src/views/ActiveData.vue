<template>
  <div>
    <div class="flex mb-4">
      <div class="w-full bg-gray-500 h-12">
        <h1 class="text-2xl font-medium my-2">Capitalize Currencies (%)</h1>
      </div>
    </div>
    <div class="flex mb-4 h-20">
      <div class="w-full">
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActiveData",
  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  supplyArray: [],
  data: function() {
    return {
      series: [75, 12, 23, 34, 10, 7, 13],
      chartOptions: {
        chart: {
          type: "donut"
        },
        labels: [
          "BTC",
          "ETH",
          "XRP",
          "USDT",
          "BTC Cash",
          "BTC SV",
          "LTC",
          "EOS"
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  },
  created() {
    this.currencySupply();
  },
  methods: {
    currencySupply: function() {
      this.supplyArray = [];
      for (let i = 0; i < this.assets.length; i++) {
        this.supplyArray.push(this.assets[i].supply);
      }
      console.log(this.supplyArray);
    }
  }
};
</script>
