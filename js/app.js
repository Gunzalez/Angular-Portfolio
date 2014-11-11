angular.module('portfolioApp', [])

    .factory("Portfolio", ['$http', '$log',

        function($http, $log){

            "use strict";
            var self = {};

            self.getExamples = function() {
                return $http.get('js/data/examples.json');
            };

            self.getSocial = function() {
                return $http.get('js/data/social.json');
            };

            return self;
        }
    ])

    .controller('PortfolioListCtrl', ['$anchorScroll', '$scope', 'Portfolio',

        function ($anchorScroll, $scope, Portfolio) {

            Portfolio.getExamples().success(function(data) {
                $scope.examples = data.sort(function() {
                    return 0.5 - Math.random();
                });
            });

            Portfolio.getSocial().success(function(data) {
                $scope.social = data;
            });

            $scope.detail = {
                "display": false,
                "title": "",
                "image": "",
                "description": ""
            };

            $scope.showDetails = function(index, event){
                event.preventDefault();
                $scope.detail.title = $scope.examples[index].name;
                $scope.detail.image = $scope.examples[index].image;
                $scope.detail.description = $scope.examples[index].description;
                $scope.detail.display = true;
                $anchorScroll();
            };

            $scope.hideDetails = function(){
                $scope.detail.display = false;
            }
        }
    ]);
