angular.module("phoneList").controller("phoneListCtrl", function ($scope, $http) {
    $scope.app = "Phone List";
    $scope.contacts = [];
    $scope.carriers = [];

    var getContacts = function () {
        $http.get("http://localhost:3412/contacts").then(function (response) {
            $scope.contacts = response.data;
        });
    };
    var getCarriers = function () {
        $http.get("http://localhost:3412/carriers").then(function (response) {
            $scope.carriers = response.data;
        });
    };

    $scope.addContact = function (contact) {
        contact.date = new Date();
        $http.post("http://localhost:3412/contacts", contact)
            .then(function(response){
                delete $scope.contact;
                $scope.contactForm.$setPristine();
                getContacts();
            })
            .catch(function onError(error) {
                console.log(error);         
            });
        
    };
    $scope.deleteContact = function (contacts) {
        $scope.contacts = contacts.filter(function (contact) {
            if (!contact.selected) return contact;
        });
    };
    $scope.isContactSelected = function (contacts) {
        return contacts.some(function (contact) {
            return contact.selected;
        });
    };
    getContacts();
    getCarriers();
});