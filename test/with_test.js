var sass   = require('node-sass')
  , neat   = require('../');

function partialsDir(path) {
  return __dirname + '/fixtures/concat/' + path;
}

function errorHandler(err) {
  var msg = err.message +
            '\nFile:\n\t' + err.file +
            ':' + err.line +
            ':' + err.column;
  throw new Error(msg);
}

describe('#with function', function() {

  it('should concat string paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: neat.with(partialsDir('dir1'), partialsDir('dir2'), partialsDir('dir3')),
      error: errorHandler
    }, function() {
      done();
    });
  });

  it('should concat array paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: neat.with([partialsDir('dir1')], [partialsDir('dir2')], [partialsDir('dir3')]),
      error: errorHandler
    }, function() {
      done();
    });
  });

  it('should concat mixed args paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: neat.with([partialsDir('dir1'), partialsDir('dir2')], partialsDir('dir3')),
      error: errorHandler
    }, function() {
      done();
    });
  });

});
