var bourbonNeat = require('bourbon-neat');

module.exports = {

  includePaths: bourbonNeat.includePaths,

  with: function () {
    return [].concat.apply(bourbonNeat.includePaths, arguments);
  }

}
