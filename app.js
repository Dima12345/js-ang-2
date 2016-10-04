(function () { 'use strict';
  var mallApp = angular.module('mallApp', []);

  mallApp.controller('FilterController', [ '$scope', function filterController(scope) {
    scope.results = [];

    scope.$on('emitMallName', function (event, mallName, malls) {
      scope.$broadcast('emitFromFilterToCities', mallName, malls);
    });

    scope.$on('emitCityName', function (event, cityName, cities) {
      scope.$broadcast('emitFromFilterToMalls', cityName, cities);
    });
    
    scope.$on('emitResults', function (event, rezults) {
      scope.results = [];
      angular.forEach(rezults, function(valueRez, keyC) {
        scope.results.push({
          mallName: valueRez.value.name,
          citiesName: valueRez.cityRez.toString()
        });
      });
    });
    
    scope.$on('emitResultsForMalls', function (event, rezults) {
      scope.resultsForMalls = [];
      angular.forEach(rezults, function(valueRez, keyC) {
        scope.resultsForMalls.push({
          cityName: valueRez.value.name,
          mallsName: valueRez.cityRez.toString()
        });
      });
    });
  }]);

  mallApp.controller('MallListController', [ '$scope', function MallListController(scope) {
    
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

    scope.emit = function () {
      scope.$emit('emitMallName', scope.mallName, scope.malls); // вверх!
    };
    
    scope.$on('emitFromFilterToMalls', function (event, cityName, cities) {
      
      
      
      var rez = [];
      angular.forEach(cities, function(value, key) {
        var cityRez = [];
        if (value.name.toLowerCase().indexOf(cityName.toLowerCase()) !== -1) {
          //var cityRez = _.filter(scope.cities, function(city){
            //var found = $filter('filter')($scope.fish, {id: fish_id}, true);
          if (value.status == '2') {
            angular.forEach(scope.malls, function(valueC, keyC) {
              cityRez.push(valueC.name)
            });
          };
         if (value.status == '10000') {
            angular.forEach(scope.malls, function(valueC, keyC) {
              if (valueC.status == 'high' || valueC.status == 'middle') {
                cityRez.push(valueC.name)
              }
            });
          };
          if (value.status == '250000') {
            angular.forEach(scope.malls, function(valueC, keyC) {
              if (valueC.status == 'high') {
                cityRez.push(valueC.name)
              }
            });
          };
          rez.push({value, cityRez});
        }
      });
      scope.$emit('emitResultsForMalls', rez);
    //});
      
      
      
      
      
    });
  }]);

  mallApp.controller('CityListController', [ '$scope', function CityListController(scope) {
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
      }, {
        name: 'ivanovo',
        status: '2'
      }
    ];

    scope.emit = function () {
      scope.$emit('emitCityName', scope.cityName, scope.cities); // вверх!
    };
    
    scope.$on('emitFromFilterToCities', function (event, cityName, cities) {
      var rez = [];
      angular.forEach(cities, function(value, key) {
        var cityRez = [];
        if (value.name.toLowerCase().indexOf(cityName.toLowerCase()) !== -1) {
          //var cityRez = _.filter(scope.cities, function(city){
            //var found = $filter('filter')($scope.fish, {id: fish_id}, true);
          if (value.status == 'low') {
            angular.forEach(scope.cities, function(valueC, keyC) {
              if (valueC.status >= 1) {
                cityRez.push(valueC.name)
              }
            });
          };
         if (value.status == 'middle') {
            angular.forEach(scope.cities, function(valueC, keyC) {
              if (valueC.status >= 10000) {
                cityRez.push(valueC.name)
              }
            });
          };
          if (value.status == 'high') {
            angular.forEach(scope.cities, function(valueC, keyC) {
              if (valueC.status >= 250000) {
                cityRez.push(valueC.name)
              }
            });
          };
          rez.push({value, cityRez});
        }
      });
      scope.$emit('emitResults', rez);
    });
  }]);
})();