/**
 * Created by artemvlasov on 30/06/15.
 */
var app = angular.module('main.directives', []);

app.directive('countdown', ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var bdate = new Date("Fri Jul 03 2015 18:30:00 GMT+0300");
            var futureUTCTime = bdate.getTime();
            var currentUTCTime = new Date();
            var updateDate = function () {
                currentUTCTime = new Date().getTime();
            };
            var dayMillis = 24 * 60 * 60 * 1000,
                hourMillis = 60 * 60 * 1000,
                minuteMillis = 60 * 1000,
                secondMillis = 1000;
            var updateCountdown = function() {
                var diff = futureUTCTime - currentUTCTime;
                var leftDays = Math.floor(diff / dayMillis),
                    leftHours = Math.floor((diff - (leftDays * dayMillis)) / hourMillis),
                    leftMinutes = Math.floor((diff - (leftDays * dayMillis + leftHours * hourMillis)) / minuteMillis),
                    leftSeconds = Math.floor((diff - (leftDays * dayMillis + leftHours * hourMillis + leftMinutes * minuteMillis)) / secondMillis);
                scope.left = {
                    "day": leftDays,
                    "hour": leftHours,
                    "minute": leftMinutes,
                    "second": leftSeconds
                };
            };
            var countdown = function() {
                updateDate();
                updateCountdown();
                if(futureUTCTime < currentUTCTime) {
                    scope.end = true;
                }
                countdownTimeout = $timeout(countdown, secondMillis);
            };
            var countdownTimeout = $timeout(countdown, secondMillis);
        },
        template:
            '<div class="count">' +
            '   <div>' +
            '       <span><i>Days</i></span>' +
            '   <div class="day">{{left.day}}</div>' +
            '   </div>' +
            '   <div>' +
            '       <span><i>Hours</i></span>' +
            '       <div class="hour">' +
            '           <span ng-if="left.hour < 10">0</span>{{left.hour}}</div>' +
            '   </div>' +
            '   <div>' +
            '       <span><i>Minutes</i></span>' +
            '       <div class="minute">' +
            '           <span ng-if="left.minute < 10">0</span>{{left.minute}}</div>' +
            '   </div>' +
            '   <div>' +
            '       <span><i>Seconds</i></span>' +
            '       <div class="seconds">' +
            '           <span ng-if="left.second < 10">0</span>{{left.second}}</div>' +
            '   </div>' +
            '</div>'
    }
}]);