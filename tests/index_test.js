'use strict';

var platoReporter = require('../index');

var broccoli = require('broccoli');

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');

var expect = require('expect.js');

describe('platoReporter', function() {
    var defaultOutputDir = 'report';
    var builder;

    beforeEach(function () {
        rimraf.sync(defaultOutputDir);
    });

    afterEach(function() {
        rimraf.sync(defaultOutputDir);
        builder && builder.cleanup();
    });

    it('should create report for a tree', function(done) {
        var sourcePath = 'tests/fixtures/tree-a';
        var destDir = 'report/plato';

        var tree = platoReporter(sourcePath, {
            destDir: destDir
        });

        builder = new broccoli.Builder(tree);
        builder.build().then(function(dir) {
            var reportPath = '../' + destDir + '/report.json';

            expect(fs.existsSync('../' + destDir)).to.be.true;
            expect(fs.existsSync(reportPath)).to.be.true;

            var reports = require(reportPath).reports;
            expect(reports).to.be.array;
            expect(reports.length).to.be(2);

            done();
        });
    });
});