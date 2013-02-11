modules.exports = {
  subscribe : function(user, callback){
    user.save(callback);
  }
};