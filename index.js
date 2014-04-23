var path = require('path');

function includePaths() {
  var bourbonPaths = require('node-bourbon').includePaths;
  var neatPaths    = path.join(__dirname, 'assets/stylesheets');
  return bourbonPaths.concat(neatPaths);
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
