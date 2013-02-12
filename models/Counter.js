//Counter model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Counter = new Schema({
    followers: {
        type: Number,
        require: true,
        unique: true
    },
    friends: {
        type: Number,
        require: true,
        unique: true
    },
    status: {
        type: Number,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('counter', Counter);