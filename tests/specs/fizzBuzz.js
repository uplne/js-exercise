if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
    '../../exams/fizzBuzz'
], function(exam) {
    'use strict';

    describe('Fizzbuzz', function() {

        it("should return 'fizz' when parameter is divisible by 3", function() {
            expect(exam.fizzBuzz(3)).to.equal('fizz');
        });

        it("should return 'buzz' when parameter is divisible by 5", function() {
            expect(exam.fizzBuzz(5)).to.equal('buzz');
        });

        it("should return 'fizzbuzz' when parameter is divisible by 3 and 5", function() {
            expect(exam.fizzBuzz(15)).to.equal('fizzbuzz');
        });

        it("should return number when parameter is a number and is not divisible by 3 or 5", function() {
            expect(exam.fizzBuzz(8)).to.equal(8);
        });

        it("should return false when parameter is not provides or is not a number", function() {
            expect(exam.fizzBuzz()).to.equal(false);
            expect(exam.fizzBuzz('test')).to.equal(false);
        });
    });
});
