<template>
  <div class="flex w-1/2 bg-gray-200">
    <div class="w-64">
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 w-56 px-4 py-2 m-2"
      >
        <img
          :src="
            `https://static.coincap.io/assets/icons/${assets[0].symbol.toLowerCase()}@2x.png`
          "
          alt=""
        />
        <h2 class="text-lg">{{ assets[0].name }}</h2>
        <p>{{ assets[0].priceUsd | dollar }}</p>
      </div>
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        <img
          :src="
            `https://static.coincap.io/assets/icons/${assets[1].symbol.toLowerCase()}@2x.png`
          "
          alt=""
        />
        <h2 class="text-lg">{{ assets[1].name }}</h2>
        <p>{{ assets[1].priceUsd | dollar }}</p>
      </div>
    </div>
    <div>
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 w-56 px-4 py-2 m-2"
      >
        <img
          :src="
            `https://static.coincap.io/assets/icons/${assets[2].symbol.toLowerCase()}@2x.png`
          "
          alt=""
        />
        <h2 class="text-lg">{{ assets[2].name }}</h2>
        <p>{{ assets[2].priceUsd | dollar }}</p>
      </div>
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        <img
          :src="
            `https://static.coincap.io/assets/icons/${assets[3].symbol.toLowerCase()}@2x.png`
          "
          alt=""
        />
        <h2 class="text-lg">{{ assets[3].name }}</h2>
        <p>{{ assets[3].priceUsd | dollar }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardData",
  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
};
</script>
