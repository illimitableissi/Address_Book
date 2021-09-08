var app = angular.module('addressBook', []);

app.controller('contactsController', function ($scope, $http) {
$http({     
    method: 'GET', 
    url: '/ab.xml'
    }).then(function success(response) {
        var json = xmlToJson.parse(response.data);
        $scope.contacts = json.AddressBook.Contact
        },
    );

    //views are set to hide on default
    $scope.tableVisible = false;
    $scope.cardsVisible = false;
    
    //function to hide/show table view
    $scope.showHideTable = function(){
        $scope.tableVisible = $scope.tableVisible ? false : true;
    }

    //function to hide/show card view
    $scope.showHideCards = function(){
        $scope.cardsVisible = $scope.cardsVisible ? false : true;
    }

     // column to sort
    $scope.column = 'ID';
 
    // sort ordering (Ascending or Descending). Set true for descending
    $scope.reverse = false; 
    
    // called on header click
    $scope.sortColumn = function(col){
        $scope.column = col;
        if($scope.reverse){
            $scope.reverse = false;
            $scope.reverseclass = 'arrow-up';
        }
        else {
        $scope.reverse = true;
        $scope.reverseclass = 'arrow-down';
        }
    };
    
    // remove and change class
    $scope.sortClass = function(col){
    if($scope.column == col ){
        if($scope.reverse){
            return 'arrow-down'; 
        } else {
            return 'arrow-up';
        }
    } else {
        return '';
     }
    };
});
