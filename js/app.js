
angular.module('portfolioApp', [])

    .controller('PortfolioListCtrl', function ($scope, $http) {
        $http.get('js/data/examples.json').success(function(data) {
            $scope.examples = data.sort(function() {
                return 0.5 - Math.random();
            });
        });
        $http.get('js/data/social.json').success(function(data) {
            $scope.social = data;
        });
    });

