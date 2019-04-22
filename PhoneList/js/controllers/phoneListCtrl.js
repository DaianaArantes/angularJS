angular.module("phoneList").controller("phoneListCtrl", function ($scope) {
    $scope.app = "Phone List";
    $scope.contacts = [
        { name: "Maria", phone: "2262482555", date: new Date(), carrier: { name: "Telus" } },
        { name: "Jhon", phone: "2555554545", date: new Date(), carrier: { name: "Bell" } },
        { name: "Zuleide", phone: "7852554858", date: new Date(), carrier: { name: "Rogers" } }
    ];
    $scope.carriers = [
        { name: "Telus" },
        { name: "Rogers" },
        { name: "Bell" },
        { name: "Fido" }
    ];
    $scope.addContact = function (contact) {
        $scope.contacts.push(angular.copy(contact));
        delete $scope.contact;
        $scope.contactForm.$setPristine();
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
});