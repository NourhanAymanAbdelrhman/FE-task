<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <label for="Start" >Start date:</label>
      <input type="date"  v-model='startData'
      min="2022-01-10" max="2022-01-16" >
      <label for="End">End date:</label>
      <input type="date"   v-model='endData' 
      min="2022-01-10" max="2022-01-16">

    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :startDate="startData" :endDate="endData" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
  data() {
      return {
        startData:"",
        endData:"",
      };
  },
  methods: {
    view() {

  },
  handleChange () {

    console.log(event.target);
      const { name, value } = event.target;
      //this.startData=value;
      console.log(name,"**",value);
      console.log(this.startData ,"--",this.endData);
    },
  handleChangeEnd () {
        console.log("k",this.startData)
        console.log(event.target);
      const { name, value } = event.target;
       this.endData=value;
      console.log(name,value ,this.endData);


  }
}
}
</script>
