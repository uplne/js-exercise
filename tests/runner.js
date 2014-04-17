var tests = [
  'tests/specs/arrays'
];

var requirejs = require('requirejs');

requirejs.config({
    baseUrl : __dirname + '/../',
    nodeRequire : require,
    paths : {
        jquery : 'lib/jquery'
    }
});

requirejs(tests, function() {
    if (typeof mocha !== 'undefined') {
      mocha.run();
    }
});
