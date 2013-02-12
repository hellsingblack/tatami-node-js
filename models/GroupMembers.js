//GroupMembers model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var GroupMembers = new Schema({
    groupId: {
        type: String,
        require: true,
        unique: true
    },
    admin:{
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('groupmembers', GroupMembers);