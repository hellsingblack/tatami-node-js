//Domain model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Domain = new Schema({
    domain: {
        type: [String],
        require: true
    }
});

module.exports = mongoose.model('domain', Domain);