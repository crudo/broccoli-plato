'use strict';

var plato = require('plato');
var rsvp = require('rsvp');
var writer = require('broccoli-caching-writer');

PlatoReporter.prototype = Object.create(writer.prototype);
PlatoReporter.prototype.constructor = PlatoReporter;
function PlatoReporter (inputTree, options) {
    if (!(this instanceof PlatoReporter)) return new PlatoReporter(inputTree, options);

    options = options || {};
    this.inputTree = inputTree;
    writer.call(this, inputTree, options);
    this.options = options || {};
};

PlatoReporter.prototype.updateCache = function (srcDir, destDir) {
    var opts = this.options;

    return new rsvp.Promise(function(resolve, reject){
        plato.inspect(srcDir, opts.destDir || 'report', opts.options || {recurse: true}, resolve);
    });
};

module.exports = PlatoReporter;