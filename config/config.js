var specs = [
  'tests/specs/arrays',
  'tests/specs/fizzBuzz',
  'tests/specs/logicalOperators'
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
