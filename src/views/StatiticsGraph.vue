<template>
  <div>
    <div class="flex mb-4">
      <div class="w-full bg-gray-500 h-12">
        <h1 class="text-2xl font-medium my-2">Main Currencies</h1>
      </div>
    </div>
    <div v-if="assets">
      <apexchart
        width="550"
        heigth="150"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
<script>
export default {
  name: "StatiticsCharts",
  nameArray: [],
  priceArray: [],
  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "currency"
        },
        xaxis: {
          categories: [
            "BTC",
            "ETH",
            "XRP",
            "USDT",
            "BTC Cash",
            "BTC SV",
            "LTC",
            "EOS"
          ]
        }
      },
      series: [
        {
          name: "Prices",
          data: [6667, 3240, 120, 80, 725, 670, 239, 222]
        }
      ]
    };
  },
  created() {
    if (this.assets) {
      setTimeout(this.currencyName(), 10000);
      console.log(this.assets);
      this.currencyPrice();
    }
  },
  methods: {
    currencyName: function() {
      this.nameArray = [];
      if (this.assets) {
        for (let i = 0; i < this.assets.length; i++) {
          this.nameArray.push(this.assets[i].name);
        }
      }
      console.log(this.nameArray);
    },

    currencyPrice: function() {
      let priceArray = [];
      if (this.assets) {
        for (let i = 0; i < this.assets.length; i++) {
          let round = Math.round(this.assets[i].priceUsd);
          priceArray.push(round);
        }
      }
      console.log(priceArray);
    }
  }
};
</script>
