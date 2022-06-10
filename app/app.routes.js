// angular.module('appModule',['ui.router'])
angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  }).config(($stateProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
        resolve:{
     employeList:function($http) {
    return $http.get('https://fe-task.getsandbox.com/employees').then(
      function(response){
        return response.data
      }
    )
     }
        }
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: 'not-Found',
        url: '*path',
        template: '<v-NotFound></v-NotFound>',
      });
      
      
   }).config(($urlRouterProvider)=>{
    $urlRouterProvider.otherwise('*path');

    })

