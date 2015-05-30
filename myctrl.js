var app = angular.module('myApp', []);
    app.controller('appCtrl', function($scope, $http) {
        $http.get("http://private-anon-dbcdfa097-api32.apiary-mock.com/notes")
        .success(function(data, status, headers, config) {
            $scope.messages = data;
        });
    });
    app.controller('addMessageCtrl', ['$scope', function($scope) {
        $scope.addMessage = function() {
            $last_id = $scope.messages.length;
            $message_data = { 
                "id": ++$last_id,
                "title": $scope.message.title
            }
            $scope.messages.push($message_data);
            console.log($scope.messages);
        };
    }]);
