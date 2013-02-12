//Group model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Group = new Schema({
    domain: {
        type: [String],
        require: true
    }
});

module.exports = mongoose.model('group', Group);