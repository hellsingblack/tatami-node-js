//Friends model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Friends = new Schema({
    username: {
        type: [String],
        require: true
    }
});

module.exports = mongoose.model('friends', Friends);