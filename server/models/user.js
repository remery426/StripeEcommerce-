var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {type:String, required: true, minlength: 3},
    username: {type: String},
    card: {type:String},
    date: {type:String},
    address: {type:String},
    city: {type:String},
    state: {type:String},
    zip: {type:String}
})


mongoose.model('User', UserSchema);
