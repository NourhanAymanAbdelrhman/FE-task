import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import store from './store/store';
import notFound from './components/vue-components/notfound.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.use(store).component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.use(store).component('performanceChartComponent', PerformanceChartComponent));
});
angular.module('appModule').directive('vNotFound', (createVueComponent) => {
  return createVueComponent(Vue.component('notFound',notFound));
});

