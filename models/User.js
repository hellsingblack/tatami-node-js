var _ = require('underscore');

//  Modèle utilisateur

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var DBRef = mongoose.mongo.DBRef;

var Users = new Schema({
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  //  Le compte est désactivé par défaut, il faut l'activer par mail.
  verified : {
    type : Boolean,
    required : true,
    default : false
  },
  //  Informations de l'utilisateur
  profil : {
    firstname : {
      type : String
    },
    lastname : {
      type : String
    }
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

