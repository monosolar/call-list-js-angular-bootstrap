angular.module('app', ['angular.filter'])

    .service('listCallHistory', function ($http) {
        return function () {
            return $http.get('./resources/mock.json').then(function (res) {
                return res.data;
            });
        }
    })

    /*.run(function (listCallHistory) {

    })*/

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

            var date = new Date(Call.connected.substr(0,Call.connected.length-7));

            var r = date.toLocaleDateString();
            console.log('date:', r);

            return r;
        };

    })







