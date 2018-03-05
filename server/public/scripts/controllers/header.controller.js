myApp.controller('HeaderController', ['UserService', '$mdDialog', '$location', function(UserService, $mdDialog, $location) {
    console.log('HeaderController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;


    self.loginModal = function(ev) {
        $mdDialog.show({
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '../views/shared/login.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true
        })
    }


  }]);