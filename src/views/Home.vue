<template>
  <div class="home">
    <div class="flex mb-2">
      <div class="w-1/12 h-full mx-32">
        <option-menu />
      </div>
      <div class="w-3/4 mx-12">
        <statitics-graph :assets="assets" />
        <div class="flex">
          <div class="w-7/12 mx-12">
            <active-data :assets="assets" />
          </div>
          <!--<div class="w-4/12">
            <secondary-data />
          </div>-->
          <div class="w-7/12 mx-8">
            <card-data :assets="assets" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import OptionMenu from "@/views/OptionMenu";
import StatiticsGraph from "@/views/StatiticsGraph";
import ActiveData from "@/views/ActiveData";
//import SecondaryData from "@/views/SecondaryData";
import CardData from "@/views/CardData";
import api from "@/api";
export default {
  name: "Home",
  components: {
    OptionMenu,
    StatiticsGraph,
    ActiveData,
    //SecondaryData,
    CardData
  },
  data() {
    return {
      assets: []
    };
  },

  created() {
    api.getAssets().then(assets => (this.assets = assets));
  }
};
</script>
