var app = angular.module('addressBook', []);

app.controller('contactsController', function ($scope, $http) {
$http({     
    method: 'GET', 
    url: 'ab.xml'
    }).then(function success(response) {
        var json = xmlToJson.parse(response.data);
        $scope.contacts = json.AddressBook.Contact
        },
    );
    $scope.tableVisible = false;
    $scope.cardsVisible = false;
    
    $scope.showHideTable = function(){
        $scope.tableVisible = $scope.tableVisible ? false : true;
    }

    $scope.showHideCards = function(){
        $scope.cardsVisible = $scope.cardsVisible ? false : true;
    }
});
