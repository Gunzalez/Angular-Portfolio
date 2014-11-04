
var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('PortfolioListCtrl', function ($scope) {

    $scope.examples = gunzalez.data.getExamples();

    $scope.social = gunzalez.data.social;

});

