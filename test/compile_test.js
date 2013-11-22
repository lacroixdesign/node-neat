var expect  = require('chai').expect
  , sass    = require('node-sass')
  , neat    = require('../').includePaths
  , fs      = require('fs');

describe('node-neat', function() {
  it('should compile to css when importing Bourbon and Neat', function() {
    var generatedCss = sass.renderSync({
      file: __dirname + '/fixtures/source.scss',
      includePaths: neat,
      outputStyle: 'expanded'
    });
    var expectedCssFile = __dirname + '/expectations/compiled.css';
    var expectedCss     = fs.readFileSync(expectedCssFile, {encoding: 'utf8'});
    expect(generatedCss).to.eq(expectedCss);
  });
});
