app.controller('userController', function($scope, userFactory){
  $scope.register = function(){
    console.log($scope.newUser)
    userFactory.register($scope.newUser)
}
})
