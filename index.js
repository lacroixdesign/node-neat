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
    return [].concat.apply(includePaths(), arguments);
  }

};
