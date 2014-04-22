if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
    '../../exams/arrays'
], function(exam) {
    'use strict';

    describe('Arrays', function() {
        var arr = [];

        beforeEach(function() {
            arr = [1,2,3,4,5];
        });

        it("should be able to find index of item in an array", function() {
            console.log(arr[4]);
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
            arr.splice( 1, 0, 2 );
            arr.push( 2 );
            arr.push( 2 );

            var result = exam.removeWithoutCopy(arr, 2);

            expect(result).to.have.length(3);
            expect(result.join(' ')).to.eql('1 3 4');

            expect(result).equal(arr);
        });

        it("should add element to the end of an array", function() {
            var result = exam.append(arr, 7);

            expect(result.length).to.equa(6);
            expect(result[arr.length - 1]).to.equal(7);
        });

        it("should remove the last element of an array", function() {
            var result = exam.pop(arr);

            expect(result.length).to.equal(4);
        });

        it("should add element at the beginning of an array", function() {
            var result = exam.prepend(arr, 7);

            expect(result.length).to.equal(6);
            expect(result[0]).to.equal(7);
        });

        it("should remove first element of an array", function() {
            var result = exam.shift(arr);

            expect(result.length).to.equal(4);
            expect(result[0]).to.equal(2);
        });

        it("should be able to join two arrays", function() {
            var secondArray = ['a','b','c'];
                result      = exam.concat(arr, secondArray);

            expect(result.length).to.equal(8);
            expect(result.join(' ')).to.equal('1 2 3 4 5 a b c');
        });

        it("should be able to add element anywhere in an array", function() {
            var result = exam.insert(arr, 'a', 2);

            expect(result.length).to.equal(6);
            expect(result[2]).to.equal('a');
        });

        it("should be able to count number of selected elements in an array", function() {
            arr.push(2);
            arr.push(2);

            expect(exam.count(arr, 2)).to.equal(3);
        });

        it("should be able to find all duplicates and return them in an new array", function() {
            var testArray = [1, 2, 2, 3, 3, 4, 1, 5, 6, 5],
                result    = exam.duplicates(testArray);

            expect(result).to.have.length(4);
            expect(result.sort().join(' ')).to.equal('1 2 3 5');
        });

        it("should be able to square each element in an array", function() {
            expect(exam.square(arr).join(' ')).to.equal('1 4 9 16 25');
        });

        it("should be able to return an array with indexes of item occurrences", function() {
            arr.push(2);

            expect(exam.findAllOccurrences(arr, 2).join('2 6'));
        });
    });
});
