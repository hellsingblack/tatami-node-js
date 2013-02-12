//User model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Users = new Schema({
    attachmentsSize: {
        type : Number,
        required : true,
        unique : true
    },
    domain: {
        type : String,
        required : true,
        unique : true
    },
    firstName: {
        type : String,
        required : true,
        unique : true
    },
    gravatar: {
        type : String,
        required : true,
        unique : true
    },
    isNew: {
        type : Boolean,
        required : true,
        unique : true
    },
    jobTitle: {
        type : String,
        required : true,
        unique : true
    },
    lastName: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true,
        unique : true
    },

    phoneNumber: {
        type : Number,
        required : true,
        unique : true
    },
    theme: {
        type : String,
        required : true,
        unique : true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});

Users.path('email').set(function (v) {
  return v.toLowerCase();
});

Users.methods.toJSON = function() {
  var self = this;

  var json = {};

  var fields = ['username'];

  fields.forEach(function(key){
    json[key] = self.get(key);
  });

  return json;
};

module.exports = mongoose.model('users', Users);

