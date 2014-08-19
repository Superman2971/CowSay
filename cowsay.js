var cowApp = angular.module("cowApp", []);

cowApp.controller("cowController", function($scope){

  cow_sayings = [ "Moooo!", 
                  "Eat grass!", 
                  "Milk it or else!", 
                  "Don't touch my utters", 
                  "Eat more chiken",
                  "The cows says moo!",
                  "Skim is just as good as 2%",
                  "Consider yourself lucky, imagine if you were incapable of masterbating. That's right, I bet you feel like a dick now don't you."
                  ];

  $scope.moo = function(){
    quote = cow_sayings[Math.floor(Math.random()*(cow_sayings.length))];
    alert(quote);
    $scope.answer = "";
  }
});