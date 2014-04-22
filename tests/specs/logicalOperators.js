if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
    '../../exams/logicalOperators'
], function(exam) {
    'use strict';

    describe('Logical Operators', function() {

        it("should be able to use or", function() {
            expect(exam.or(true, false)).to.be.ok;
            expect(exam.or(true, true)).to.be.ok;
            expect(exam.or(false, false)).not.to.be.ok;
        });

        it("should be able to use and", function() {
            expect(exam.and(true, false)).not.to.be.ok;
            expect(exam.and(false, false)).not.to.be.ok;
            expect(exam.and(true, true)).to.be.ok;
        });
    });
});
