var path = require('path');
var bourbon = require('node-bourbon');

var neatEntryPoint = require.resolve('bourbon-neat');
var neatDir = path.dirname(neatEntryPoint);

function includePaths() {
  return bourbon.with(neatDir);
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
