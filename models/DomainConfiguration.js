//DomainConfiguration model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var DomainConfiguration = new Schema({
    storageSize: {
        type: Number,
        require: true
    },
    subscriptionLevel:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('domainconfiguration', DomainConfiguration);