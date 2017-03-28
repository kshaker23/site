var mongoose    =   require("mongoose");

var mongoSchema =   mongoose.Schema;
// create schema
var portuserSchema  = new mongoSchema({
    "portName":String,
    "link":String
});
// create model if not exists.

module.exports = mongoose.model('portfolio',portuserSchema);
//sheel module law error
