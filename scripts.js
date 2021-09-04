var app = angular.module('addressBook', []);
// var convert = require('xml-js');

app.controller('contactsController', function ($scope, $http) {
$http({     
    method: 'GET', 
    url: '/ab.xml'
    }).then(function success(response) {
        var json = xmlToJson.parse(response.data);
        console.log(json.AddressBook.Contact)
        var contacts = json.AddressBook.Contact

        contacts.map(contact => {
            $scope.company = contact.CompanyName;
            $scope.contactName = contact.ContactName;
            $scope.contactTitle = contact.ContactTitle;
            $scope.address = contact.Address;
            $scope.city = contact.City;
            $scope.email = contact.Email;
            $scope.postalCode = contact.PostalCode;
            $scope.country = contact.Country;
            $scope.phone = contact.Phone;
            $scope.fax = contact.Fax
        })
        },
    );
});
