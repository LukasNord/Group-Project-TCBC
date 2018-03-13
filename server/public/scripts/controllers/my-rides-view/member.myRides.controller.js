myApp.controller('MemberMyRidesController', ['RideDetailService', '$mdDialog', function(RideDetailService, $mdDialog) {
    console.log('MemberMyRidesController created');
    let self = this;

    self.userObject = UserService.userObject;
    
    self.rideDetailReveal = function(ride){
        RideDetailService.initMyRideDetailModal(ride);
    }

    self.rideDetailRevealPast = function(ride){
        ride.past_ride = true;
        RideDetailService.initMyRideDetailModal(ride);
    }
    
    self.allRides = RideDetailService.allRides;
    self.myRides = RideDetailService.myRides;
    self.myPastRides = RideDetailService.myPastRides;

    RideDetailService.getMyPastRideDetails();
    RideDetailService.getMyRideDetails();
    RideDetailService.getRideCategories();
    RideDetailService.getAllRideDetails();
  }]);
  

