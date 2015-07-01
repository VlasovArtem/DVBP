/**
 * Created by artemvlasov on 30/06/15.
 */
var app = angular.module('main.controllers', ['ngSanitize']);

app.controller('AudioCtrl', ['$scope', '$sce', function($scope, $sce) {
    var audio = document.getElementById("music");
    var _isNotMobile = (function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return !check;
    })();
    //$scope.trustSrc = function(src) {
    //    if(_isNotMobile) {
    //        return $sce.trustAsResourceUrl(src.high);
    //    } else {
    //        return $sce.trustAsResourceUrl(src.low);
    //    }
    //};
    var songs = [
        {
            url: {
                high: "http://cs6-7v4.vk-cdn.net/p21/667d7cca5642fa.mp3?extra=MlBrHquA5sxr5ry56xjcS_y88Afd3PV4UsWm6TeeDzpEN_WnXVwu2S0IlVZFoZJvA4g-9ALvoTB0JCYrz2if6QjUeQVClJhgRg",
                low: "http://cs6-2v4.vk-cdn.net/p14/1fe1fe73fb8511.mp3?extra=glIoDdDzsn8fUDjeg5X4F6ZPRP7ajcae5nmFeEjy-LmG-HDGQ3v5WYl04eTl0OfKWbbGDqfghpBueGSh2Y77NhC-fLFtBg"
            },
            name: "Skrillex and Diplo - Where Are Ü Now"
        },
        {
            url: {
                high: "http://cs6-8v4.vk-cdn.net/p6/1ac414e02bfd05.mp3?extra=dWKz50jXieTe-CkvRJP5pXH1PniM3nZsDw0ycTNzO1bJLQXM_2KPx_0pBYBwNpMyjQdaV0iel0xIeoisjuGpkNoxT2efaDO5",
                low: "http://cs6-10v4.vk-cdn.net/p24/0e0cd602f9222b.mp3?extra=UHAWeHqifHbDqsmztoxJWoZlC3JXOXdxDGA6WV5zGqW17UGBJjIs_YoJRPqAq5jLQCoGDsQTXGcZnDUnAmLo8oKAFnpE-g"
            },
            name: "Tinie Tempah - Not Letting Go"
        },
        {
            url: {
                high: "http://cs6-2v4.vk-cdn.net/p12/2001ba759b8f31.mp3?extra=6oK0YhzXCi2h16ZO_U7jlBQQjjYdKviqI3xsVcWRGcQg88TdXbWPoHUWS0QYQkjfnseV2ZgcQ52OBzaBpIgeLRFIz-_S0y5mEg",
                low: "http://cs6-2v4.vk-cdn.net/p12/2001ba759b8f31.mp3?extra=6oK0YhzXCi2h16ZO_U7jlBQQjjYdKviqI3xsVcWRGcQg88TdXbWPoHcXQ0QYQkjfnseV2ZgcQ52OBzaBpN1Kf0MbmrjT1nI8Ew"
            },
            name: "Rudimental - Never Let You Go"
        },
        {
            url: {
                high: "http://cs6-4v4.vk-cdn.net/p12/2bfd4ebc7feb2a.mp3?extra=IHNxqhzd9BSLv1NZ8ua19TAM_0c3exX3UahFqz6ltuiEAITUaHYZd1uECoW9lt_FTGuYTJe9GuHbaYpvn6kSbG7mBOqI",
                low: "http://cs6-4v4.vk-cdn.net/p12/2bfd4ebc7feb2a.mp3?extra=IHNxqhzd9BSLv1NZ8ua19TAM_0c3exX3UahFqz6ltuiEAITUaHYZd1uECoW9lt_FTGuYTJe9GuHbaYpvn6kSbG7mBOqI"
            },
            name: "GRADES - King"
        },
        {
            url: {
                high: "http://cs6-9v4.vk-cdn.net/p2/50d59a1c5bf45e.mp3?extra=5W7XmQ5QLa-zF_9yeOdRHSzM7WRzlwnelMSbncYZolWCFKuCgsnKupwwa2R7qe1EjmJ6MS_Jb7ocImutt6xN0uu2Vmj2dxb2",
                low: "http://cs6-12v4.vk-cdn.net/p8/84f129699f7089.mp3?extra=oV-pICac1iPP-4uvW3aBWx8u2UVzyMt6PZ9plXp-g6IIt-UkfSx2tWCQjqCnsrjMDSLYFZsVnQdXFlxcr7G2h39NrwvrwJ4"
            },
            name: "Blonde - All Cried Out"
        },
        {
            url: {
                high: "http://cs6-9v4.vk-cdn.net/p4/571e6623b77f91.mp3?extra=3NBX6jrdvLGJjdgzajC1h6NVTg6dyoG3F9GTAx32g4VrVEFN2j-ckC8Xz8fNAeCh_8W0zSrU1yFL89A_pBTdgoM0uirKfMmv",
                low: "http://cs6-7v4.vk-cdn.net/p14/01ec9ac9aa4773.mp3?extra=mL5si2h-mnvrklUW56JLc7i9mSY_QXdKPbVKqLIwd-SuYhhV2P8G8-oVRL3gXVJdwVKRiSMmv4sBk9oH4tsSCsFJrOdFmDGf"
            },
            name: "Major Lazer & DJ Snake - Lean On"
        }
    ];
    var chooseQuality = function(songUrl) {
        if(_isNotMobile) {
            return songUrl.high;
        } else {
            return songUrl.low;
        }
    };
    var random = function() {
        return Math.floor(Math.random() * (6 - 0));
    };
    var songNumber = random();
    audio.src = chooseQuality(songs[songNumber].url);
    $scope.currentSongName = songs[songNumber].name;
    $scope.next = function() {
        if(songNumber == 5) {
            songNumber = 0;
        } else {
            ++songNumber;
        }
        if(!_isNotMobile && songs[songNumber].url.low == null) {
            $scope.next();
        }
        audio.src = chooseQuality(songs[songNumber].url);
        $scope.currentSongName = songs[songNumber].name;
        audio.play();
        $scope.paused = false;
    };

    $scope.play = function() {
        audio.play();
        $scope.paused = false;
    };
    $scope.pause = function() {
        audio.pause();
        $scope.paused = true;
    };
    if(_isNotMobile) {
        $scope.play();
        $scope.paused = false;
    } else{
        $scope.paused = true;
    }
}]);