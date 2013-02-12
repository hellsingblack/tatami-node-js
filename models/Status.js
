//Status model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Status = new Schema({
    content: {
        type: String,
        require:true
    },
    discussionId: {
        type: Number,
        require:true,
        unique: true
    },
    domain: {
        type: Number,
        require:true,
        unique: true
    },
    hasAttachments: {
        type: Boolean,
        require:true,
        unique: true
    },
    login: {
        type: String,
        require:true,
        unique: true
    },
    removed: {
        type: Boolean,
        require:true,
        unique: true
    },
    replyTo: {
        type: String
    },
    replyToUsername: {
        type: String
    },
    statusDate: {
        type: Date,
        require: true,
        unique: true
    },
    statusPrivate: {
        type: Boolean,
        require:true,
        unique: true
    }
});

module.exports = mongoose.model('status', Status);