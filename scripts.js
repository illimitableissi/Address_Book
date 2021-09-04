var app = angular.module('addressBook', []);

app.controller('contactsController', function ($scope, $http) {
    this.contacts= [];
$http({     
    method: 'GET', 
    url: '/ab.xml'
    }).then(function success(response) {
        var json = xmlToJson.parse(response.data);
        console.log(json.AddressBook.Contact)
        $scope.contacts = json.AddressBook.Contact
     
        // contacts.map(contact => {
        //     $scope.company = contact.CompanyName;
        //     $scope.contactName = contact.ContactName;
        //     $scope.contactTitle = contact.ContactTitle;
        //     $scope.address = contact.Address;
        //     $scope.city = contact.City;
        //     $scope.email = contact.Email;
        //     $scope.postalCode = contact.PostalCode;
        //     $scope.country = contact.Country;
        //     $scope.phone = contact.Phone;
        //     $scope.fax = contact.Fax
        // })
        },
    );
});
