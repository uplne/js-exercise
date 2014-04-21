'use strict';

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
    '../../exams/arrays'
], function(exam) {
    describe('Arrays', function() {
        var arr = [];

        beforeEach(function() {
            arr = [1,2,3,4,5];
        });

        it("should be able to find index of item in an array", function() {
            expect(exam.indexOf(arr, 4)).to.equal(3);
            expect(exam.indexOf(arr, 8)).to.equal(-1);
        });

        it("should be able to add the numbers in an array", function() {
            expect(exam.sum(arr)).to.equal(15);
        });

        it("should be able to remove item from an array", function() {
            var result = [];

            arr.push(3);
            result = exam.remove(arr, 3);

            expect(result).to.have.length(4);
            expect(result.join(' ')).to.equal('1 2 4 5');
        });

        it('you should be able to remove a value from an array, returning the original array', function() {
            a.splice( 1, 0, 2 );
            a.push( 2 );
            a.push( 2 );

            var result = answers.removeWithoutCopy(a, 2);

            expect(result).to.have.length(3);
            expect(result.join(' ')).to.eql('1 3 4');

            // make sure that you return the same array instance
            expect(result).equal(a);
        });
    });
});
