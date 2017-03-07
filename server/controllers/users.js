var mongoose = require('mongoose');
var User = mongoose.model('User');
console.log("hello from controlller")
module.exports = (function(){
    return{
        register:function(req,res){
          console.log(req.body.username)
        User.findOne({username: req.body.username}, function(err, data){

          if(!data){
              var user = new User(req.body)
              user.save(function(err,data){
                  req.session.user = data.username;
                  req.session.save()
                  res.json(data)
              })
            }
          else{

            res.json(null)

        }

})
      }

      }
})()
