angular.module('app', ['angular.filter'])

    .service('listCallHistory', function ($http) {
        return function () {
            return $http.get('./mocks/mock.json').then(function (res) {
                return res.data;
            });
        }
    })


    .controller('index', function ($scope, listCallHistory) {

        listCallHistory().then(function (list) {
            $scope.callList = list;
        });


        $scope.getCallTime = function (secondsAmount) {
            var minutes = parseInt(secondsAmount / 60);
            var seconds = secondsAmount % 60;

            return minutes + ':' + seconds;
        };

        $scope.getDayByDate = function (call) {
            if (!/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})$/.test(call.connected)) {
                var date = new Date(call.connected);
                call.connected = date.toLocaleDateString();
            }
            return call;
        };

        $scope.dateGroupToggleActive = function ($event) {
            var callListDiv = angular.element($event.currentTarget).next();

            if (callListDiv.hasClass('ng-hide')) {
                callListDiv.removeClass('ng-hide')
            } else {
                callListDiv.addClass('ng-hide')
            }

        };

    })









