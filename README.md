[![Bourbon Neat](http://neat.bourbon.io/images/logotype.svg)](http://thoughtbot.com/neat)

*This is a node-sass port of the [Neat](http://neat.bourbon.io) library. If you
are looking for the original Ruby/Rails version, you can find it
[here](https://github.com/thoughtbot/neat).*

## Requirements
- [node](http://nodejs.org)
- [node-sass](https://github.com/andrew/node-sass)

# Installation

To install as a development dependency, run:

```bash
npm install --save-dev node-neat
```

If you need it for production, replace `--save-dev` with `--save`.

# Usage

The `includePaths` property returns an array of paths for use in
*node-sass'* `includePaths` option.

```javascript
var neat = require('node-neat').includePaths;
```

You can then use this array in your options:

```javascript
var sass = require('node-sass')
  , neat = require('node-neat').includePaths;

var paths = ['other/path', 'another/path'].concat(neat);

sass.render({
  file: './application.scss',
  success: function(css){
    console.log(css);
  },
  error: function(error) {
    console.log(error);
  },
  includePaths: paths,
  outputStyle: 'compressed'
});
```

Neat depends on Bourbon, so it's included as an npm dependency and passes along
*node-bourbon's* load path when accessing *node-neat's* `includePaths` property.
Import Bourbon & then Neat at the beginning of your main scss file.

```scss
@import "bourbon";
@import "neat";
@import "other/scss/partial";
```

# Grunt Usage

Using the [grunt-sass](https://github.com/sindresorhus/grunt-sass) task:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('node-neat').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

Using the [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) task:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        loadPath: require('node-neat').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

Credits
===

This node-sass port is maintained by Michael LaCroix, however all credits for
the Neat library go to [thoughtbot, inc](http://thoughtbot.com/community):

> ![thoughtbot](http://thoughtbot.com/images/tm/logo.png)
>
> Bourbon is maintained and funded by [thoughtbot, inc](http://thoughtbot.com/community). Tweet your questions or suggestions at [@kaishin](https://twitter.com/kaishin) and [@kylefiedler](https://twitter.com/kylefiedler).

License
===

node-neat is Copyright © 2013 Michael LaCroix. It is free software, and may be redistributed under the terms specified in the LICENSE file.
