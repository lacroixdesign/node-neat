var sass   = require('node-sass')
  , neat   = require('../');

function partialsDir(path) {
  return __dirname + '/fixtures/concat/' + path;
}

describe('#with function', function() {

  it('should concat string paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: neat.with(partialsDir('dir1'), partialsDir('dir2'), partialsDir('dir3')),
      error: function(err) {
        throw new Error(err);
      },
      success: function(css) {
        done();
      }
    });
  });

  it('should concat array paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: neat.with([partialsDir('dir1')], [partialsDir('dir2')], [partialsDir('dir3')]),
      error: function(err) {
        throw new Error(err);
      },
      success: function(css) {
        done();
      }
    });
  });

  it('should concat mixed args paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: neat.with([partialsDir('dir1'), partialsDir('dir2')], partialsDir('dir3')),
      error: function(err) {
        throw new Error(err);
      },
      success: function(css) {
        done();
      }
    });
  });

});
