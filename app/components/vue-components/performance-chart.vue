<template>
<div>
<p>
  startDate:{{startDate}}
  EndDate:{{endDate}}
</p>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import axios from "axios";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },

  props: ['startDate' ,'endDate'],
  data() {
    return {
      chartData: [],
      chartFilter: [],
    };
  },

  created() {
        this.getchartData();
    },
  beforeUpdate(){
    if(this.startDate && this.endDate){
      
      this.filterData(Date.parse(this.startDate) , Date.parse(this.endDate));
    }
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 0,
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartFilter.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartFilter.map((item) => +item.performance * 100);
    },
  },

  methods: {
    getchartData() {
      axios.get("https://fe-task.getsandbox.com/performance").then((Response) => {
        this.chartData = Response.data;
        this.chartFilter = Response.data;
      }).catch((error)=>console.log(error))
    },
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
    filterData(startdate,enddate){
     
      this.chartFilter = this.chartData.filter((date)=>(date.date_ms >= startdate && date.date_ms <= enddate)
    );
    }
  },
};
</script>
