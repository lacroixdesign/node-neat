var path = require('path');

function getPaths() {
  var bourbonPaths = require('node-bourbon').includePaths;
  var neatPaths    = path.join(__dirname, 'assets/stylesheets');
  return bourbonPaths.concat(neatPaths);
}

module.exports = {

  includePaths: getPaths()

};
