//GroupDetails model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var GroupDetails = new Schema({
    archivedGroup: {
        type: Boolean,
        require: true
    },
    description:{
        type: String
    },
    name:{
        type: String
    },
    publicGroup:{
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('groupdetails', GroupDetails);