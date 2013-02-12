//GroupCounter model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var GroupCounter = new Schema({
    domain: {
        type: [String],
        require: true
    },
    nb: {
        type: Number,
        require:true
    }
});

module.exports = mongoose.model('groupcounter', GroupCounter);