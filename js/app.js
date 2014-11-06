
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
        $scope.detail = {
            "display": false,
            "title":"",
            "image":"",
            "description":""
        };
        $scope.showDetails = function(index, event){
            event.preventDefault();
            $scope.detail.title = $scope.examples[index].name;
            $scope.detail.image = $scope.examples[index].image;
            $scope.detail.description = $scope.examples[index].description;
            $scope.detail.display = true;
        };
        $scope.hideDetails = function(){
            $scope.detail.display = false;
        }
    });

