// Define the `phonecatApp` module
var mallApp = angular.module('mallApp', []);

var filterController = mallApp.controller('filterController', [ '$scope', function filterController(scope) {
  scope.results = [];
      
  scope.$on('emitMallName', function(event, mallName) {
    scope.mallQuery = mallName;
    scope.results = [];
  });

  scope.$on('emitCityName', function(event, cityName) {
    scope.cityQuery = mallName;
  });
}]);
  
// Define the `PhoneListController` controller on the `phonecatApp` module
filterController.controller('MallListController', [ '$scope', function MallListController(scope) {
  scope.malls = [
    {
      name: 'Posad',
      status: 'low'
    }, {
      name: 'Avoska',
      status: 'high'
    }, {
      name: 'Homa',
      status: 'middle'
    }, {
      name: 'Brusnichka',
      status: 'middle'
    }
  ];

  scope.emit = function() {
    scope.$emit('emitMallName', scope.mallName); // вверх!
  }
  
  scope.filter
}]);

filterController.controller('CityListController', [ '$scope', function CityListController(scope) {
  scope.cities = [
    {
      name: 'Kharkov',
      status: '250000'
    }, {
      name: 'Dnepr',
      status: '10000'
    }, {
      name: 'Odessa',
      status: '250000'
    }, {
      name: 'Kyiv',
      status: '10000'
    }
  ];

  scope.emit = function() {
    scope.$emit('emitCityName', scope.cityName); // вверх!
  }
}]);
 
 // Наследование скоупов
 // Scope inheritanse
 // Module and DI
 // Filter, Services
 // Derictives  (ng: )
 
 // Homework
 
 // + контроллер с списком городов с свойствами (name, citizen_count), нужно сделать фильтрацию по городам, 
 // Cупермаркет должен иметь тип Super Mini Mega
 
 // Определять по колл-ву жителей какой market должен быть 10 100 250 тыс чел
 
 // При фиьтрации городов, говорим какие супермаркеты должны там быть
 
 // фильтры для маркетов и городов

