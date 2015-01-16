# broccoli-plato
Run [Plato](https://github.com/es-analysis/plato) in broccoli pipeline.
Plato is JavaScript source code visualization, static analysis, and complexity tool.

Output [example](http://es-analysis.github.io/plato/examples/jquery/).

## Installation

```
npm install --save-dev broccoli-plato
```

## Configuration

All of the available options can be found on [Plato's documentation](https://github.com/es-analysis/plato).

## Usage

```js
var platoReporter = require('broccoli-plato');
var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-concat');

var appTree = concat('app/', {
    inputFiles: ['**/*.js'],
    outputFile: '/assets/scripts.js'
});

var platoTree = platoReporter(['app', 'lib'], {
    destDir: 'report',
    options: {
        recurse: true
    }
});

module.exports = mergeTrees([appTree, platoTree]);
```

## License

The MIT License (MIT)
