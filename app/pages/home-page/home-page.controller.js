angular
  .module('appModule')
  // .controller('homeController', function(employeList){
  //   const homePageVm = this;
  //   // homePageVm.employees = [];
  //   homePageVm.employees=employeList
  // }
  // );
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];

  activate();
  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
