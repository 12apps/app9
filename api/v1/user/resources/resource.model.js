var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
   title: String,
   url: String,
   description: String,
   user_id: Schema.Types.ObjectId,
   tags: []
});

module.exports = mongoose.model('resource', ResourceSchema);