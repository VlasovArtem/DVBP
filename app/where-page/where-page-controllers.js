/**
 * Created by artemvlasov on 30/06/15.
 */
var app = angular.module('where.controllers', []);

app.controller('WhereCtrl', ['$scope', function($scope) {
    var zoom = 19;
    if(screen.width < 500) {
        zoom = 17;
    }
    $scope.map = {
        center: {
            latitude: 46.481943,
            longitude: 30.743943
        },
        zoom: zoom,
        pan: true
    };
    $scope.options = {
        scrollwheel: false
    };
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 46.481943,
            longitude: 30.743943
        },
        options: {
            labelContent: "Гречка",
            labelClass: "marker"
        }
    };
    console.log();
    $scope.$on('$viewContentLoaded', function () {
        var mapHeight = (window.innerHeight - angular.element(".text").height() - angular.element(".navigation").height() - 40); // or any other calculated value
        $("#map .angular-google-map-container").height(mapHeight);
    });
}]);