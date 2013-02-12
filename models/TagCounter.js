//TagCounter model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var TagCounter = new Schema({
    tag: {
        type: String
    },
    nbTag: {
        type:Number
    }

});

module.exports = mongoose.model('tagcounter', TagCounter);