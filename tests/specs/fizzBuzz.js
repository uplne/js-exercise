if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
    '../../exams/fizzBuzz'
], function(exam) {
    'use strict';

    describe('Fizzbuzz', function() {

        it("should return 'fizz' if paramter is divisible by 3", function() {
            expect(exam.fizzBuzz(3)).to.equal('fizz');
        });
    });
});
