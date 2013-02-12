//Registration model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Registration = new Schema({
    registration_key: {
        type: Number,
        require: true,
        unique: true
    },
    username:{
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('registration', Registration);