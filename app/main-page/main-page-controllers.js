/**
 * Created by artemvlasov on 30/06/15.
 */
var app = angular.module('main.controllers', ['ngSanitize']);

app.controller('AudioCtrl', ['$scope', '$sce', function($scope, $sce) {
    var audio = document.getElementById("music");
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };
    var songs = [
        {
            url: "http://cs6-12v4.vk-cdn.net/p11/19aadb6369f299.mp3?extra=G1zozJ9RKBpCdBSbMU0HecdDFm45W9XJhx_wq_SCUksRGJci4hpHxCaNYwWfy7FzPVLxfExPFE5npk7QAbBXdH7c1ravS2d7",
            name: "Skrillex and Diplo - Where Are Ü Now"
        },
        {
            url: "http://cs6-8v4.vk-cdn.net/p6/1ac414e02bfd05.mp3?extra=dWKz50jXieTe-CkvRJP5pXH1PniM3nZsDw0ycTNzO1bJLQXM_2KPx_0pBYBwNpMyjQdaV0iel0xIeoisjuGpkNoxT2efaDO5",
            name: "Tinie Tempah - Not Letting Go"
        },
        {
            url: "http://cs6-2v4.vk-cdn.net/p12/2001ba759b8f31.mp3?extra=6oK0YhzXCi2h16ZO_U7jlBQQjjYdKviqI3xsVcWRGcQg88TdXbWPoHUWS0QYQkjfnseV2ZgcQ52OBzaBpIgeLRFIz-_S0y5mEg",
            name: "Rudimental - Never Let You Go"
        },
        {
            url: "http://cs6-4v4.vk-cdn.net/p12/2bfd4ebc7feb2a.mp3?extra=IHNxqhzd9BSLv1NZ8ua19TAM_0c3exX3UahFqz6ltuiEAITUaHYZd1uECoW9lt_FTGuYTJe9GuHbaYpvn6kSbG7mBOqI",
            name: "GRADES - King"
        },
        {
            url: "http://cs6-9v4.vk-cdn.net/p2/50d59a1c5bf45e.mp3?extra=5W7XmQ5QLa-zF_9yeOdRHSzM7WRzlwnelMSbncYZolWCFKuCgsnKupwwa2R7qe1EjmJ6MS_Jb7ocImutt6xN0uu2Vmj2dxb2",
            name: "Blonde - All Cried Out"
        },
        {
            url: "http://cs6-9v4.vk-cdn.net/p4/571e6623b77f91.mp3?extra=3NBX6jrdvLGJjdgzajC1h6NVTg6dyoG3F9GTAx32g4VrVEFN2j-ckC8Xz8fNAeCh_8W0zSrU1yFL89A_pBTdgoM0uirKfMmv",
            name: "Major Lazer & DJ Snake - Lean On"
        }
    ];
    var random = function() {
        return Math.floor(Math.random() * (6 - 0));
    };
    var songNumber = random();
    $scope.song = songs[songNumber];
    audio.src = $scope.song.url;
    $scope.next = function() {
        if(songNumber == 5) {
            songNumber = 0;
        } else {
            ++songNumber;
        }
        $scope.song = songs[songNumber];
        audio.src = $scope.song.url;
        audio.play();
        $scope.paused = false;
    };
    $scope.paused = false;
    $scope.play = function() {
        audio.play();
        $scope.paused = false;
    };
    $scope.play();
    $scope.pause = function() {
        audio.pause();
        $scope.paused = true;
    };
}]);