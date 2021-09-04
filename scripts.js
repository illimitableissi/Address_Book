var app = angular.module('addressBook', []);

app.controller('contactsController', function ($scope, $http) {
    this.contacts= [];
$http({     
    method: 'GET', 
    url: '/ab.xml'
    }).then(function success(response) {
        var json = xmlToJson.parse(response.data);
        $scope.contacts = json.AddressBook.Contact
        },
    );
});
