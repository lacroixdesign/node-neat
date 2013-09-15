[![Bourbon Neat](http://neat.bourbon.io/images/logotype.svg)](http://thoughtbot.com/neat)

*This is a node-sass port of the [Neat](http://neat.bourbon.io) library. If you
are looking for the original Ruby/Rails version, you can find it
[here](https://github.com/thoughtbot/neat).*

**Neat** is an open source fluid grid framework built on top of [Bourbon](http://bourbon.io) with the aim of being easy enough to use out of the box and flexible enough to customize down the road.


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

Neat depends on Bourbon and includes it as a dependency. It will also pass along
*node-bourbon's* load path when accessing *node-neat's* `includePaths` property.
Import Bourbon & then Neat at the beginning of your main scss file. All
additional stylesheets must be imported below Bourbon & Neat:

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
        includePaths: require('neat').includePaths,
        outputStyle: 'compressed'
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

Getting started
===

First off, if you are planning to override the default grid settings (12 columns), it is recommended to create a `_grid-settings.scss` file for that purpose. Make sure to import it right *before* importing Neat:

```scss
@import "bourbon";
@import "grid-settings";
@import "neat";
```

In your newly created  `_grid-settings.scss`, import `neat-helpers` if you are planning to use `new-breakpoint()`, then define your new variables:

```scss
@import "neat/neat-helpers"; // or "neat-helpers" when in Rails

// Change the grid settings
$column: 90px;
$gutter: 30px;
$grid-columns: 10;
$max-width: em(1088);

// Define your breakpoints
$tablet: new-breakpoint(max-width 768px 8);
$mobile: new-breakpoint(max-width 480px 4);
```

See the [docs](http://neat.bourbon.io/docs/#variables) for a full list of settings.

Next, include the `outer-container` mixin in the topmost container (to which the `max-width` setting will be applied):

```scss
div.container {
  @include outer-container;
}
```

Then use `span-columns` on any element to specify the number of columns it should span:

```scss
div.element {
  @include span-columns(6);
}
```

If the element's parent isn't the top-most container, you need to add the number of columns of the parent element to keep the right proportions:

```scss
div.container {
  @include outer-container;
  div.parent-element {
    @include span-columns(8);
    div.element {
      @include span-columns(6 of 8);
    }
  }
}
```

To make your layout responsive, use the `media()` mixin to modify both the grid and the layout:

```scss
.my-class {
  @include media($mobile) { // As defined in _grid-settings.scss
    @include span-columns(2);
  }
}

// Compiled CSS
@media screen and (max-width: 480px) {
  .my-class {
    display: block;
    float: left;
    margin-right: 7.42297%;
    width: 46.28851%; // 2 columns of the total 4 in this media context
  }
  .my-class:last-child {
    margin-right: 0;
  }
}
```

By setting `$visual-grid` to `true`, you can display the base grid in the background (default) or as an overlay. You can even change the color and opacity of the grid-lines by overriding the default settings as detailed in the section below. Keep in mind that on Webkit, rounding errors in the fluid grid might result in the overlay being few pixels off.

The visual grid reflects the changes applied to the grid via the `new-breakpoint()` mixin, as long as the media contexts are defined *before* importing Neat.

Browser support
===
- Firefox 3.5+
- Safari 4.0+
- Chrome 4.0+
- Opera 9.5+
- IE 9+ (Visual grid is IE10 only)
- IE 8 with [selectivizr](http://selectivizr.com) (no `media()` support)

Links
===

- [Online documentation](http://neat.bourbon.io/docs/)
- [Docset feed](http://neat.bourbon.io/docset/Neat.xml) for Dash 1.8+ (Preferences **>** Downloads **>** + *Add Docset Feed*)
- [Changelog](https://github.com/thoughtbot/neat/wiki/Changelog)
- [Roadmap Trello board](http://bit.ly/neat-trello)

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
