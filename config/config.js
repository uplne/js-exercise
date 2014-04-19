'use strict';

var specs = [
  'tests/specs/arrays'
];

require.config({
    baseUrl: '/',
    paths: {
        jquery: 'lib/jquery'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});

require(specs, function() {
    if (typeof mocha !== 'undefined') {
      mocha.run();
    }
});
