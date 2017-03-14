angular.module('app', ['angular.filter'])

    .service('listCallHistory', function ($http) {
        return function () {
            return $http.get('./mocks/mock.json').then(function (res) {
                return res.data;
            });
        }
    })

    .directive('hideOnDate', function () {
        return function (scope, element, attrs) {

            scope.$watch('disabledDatesArray', function (value, oldValue) {

                const keyID = scope.disabledDatesArray.indexOf(attrs.hideOnDate);
                if (keyID < 0) {
                    element.removeClass("ng-hide");
                } else {
                    element.addClass("ng-hide");
                }

            }, true);
        }
    })

    .controller('index', function ($scope, listCallHistory) {

        listCallHistory().then(function (list) {
            $scope.callList = list;
        });

        $scope.disabledDatesArray = [];

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

        $scope.onDateRowClicked = function (dateObject) {

            const keyID = $scope.disabledDatesArray.indexOf(dateObject.key);

            if (keyID < 0) {
                $scope.disabledDatesArray.push(dateObject.key);
            } else {
                $scope.disabledDatesArray.splice(keyID, 1);
            }

        };

    })









