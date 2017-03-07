app.factory('userFactory', function($http, $location, $route){
    var factory = {};
    factory.register = function(user){
      $http.post('/register',user).then(function(output){
        console.log(output.data)
        if(output.data){
          $location.url('/confirmation')
        }
        else{
          $location.url('/login_page')
        }
      })

    }

    return factory

})
