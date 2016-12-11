/**
 * Created by John on 12/4/2016.
 */
var path = require('path');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'views/index.html')); // load our public/index.html file
  });

};