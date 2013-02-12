//Attachment model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Attachment = new Schema({
    content: {
        type: Buffer,
        require: true,
        unique: true
    },
    creation_date: {
        type: Date,
        unique: true,
        default: Date.now
    },
    filename: {
        type: String,
        unique: true,
        require: true
    },
    size: {
        type: Number,
        unique: true,
        require: true
    }
});

module.exports = mongoose.model('attachment', Attachment);