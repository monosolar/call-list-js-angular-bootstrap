angular.module('app', ['angular.filter'])

    .service('listCallHistory', function ($http) {
        return function () {
            return $http.get('./mocks/mock.json').then(function (res) {
                return res.data;
            });
        }
    })


    .controller('index',function($scope,listCallHistory) {

        listCallHistory().then(function (list) {
            $scope.callList =  list;
        });


        $scope.getCallTime = function(Seconds){
            var minutes = parseInt(Seconds / 60);
            var seconds = Seconds % 60;

            return minutes+':'+seconds;
        };

        $scope.getDayByDate = function(Call) {
            if (! /^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})$/.test(Call.connected) )
            {
                var date = new Date(Call.connected);
                Call.connected = date.toLocaleDateString();
            }
            return Call;
        };

        $scope.dateGroupToggleActive = function($event) {
            var callListDiv = angular.element($event.currentTarget).next();

            if (callListDiv.hasClass('ng-hide'))
            {
                callListDiv.removeClass('ng-hide')
            } else {
                callListDiv.addClass('ng-hide')
            }

        };

    })








