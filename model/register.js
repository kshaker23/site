var mongoose    =   require("mongoose");

var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = new mongoSchema({
    "userName":String ,
    "userPassword":String

});
// create model if not exists.

module.exports = mongoose.model('register',userSchema);
//sheel module law error
