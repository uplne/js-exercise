'use strict';

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var num = +item || 0,
            len = arr.length,
            i   = 0;

        if (item < 0) {
            item = len;
        }

        for (; i < len - 1; i ++) {
            if (arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum : function(arr) {
        var i   = 0,
            len = arr.length,
            sum = 0;

        for (; i < len; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove : function(arr, item) {
        var i,
            len = arr.length,
            res = [];

            for (i = 0; i < len; i++) {
                if (arr[i] !== item) {
                    res.push(arr[i]);
                }
            }

        return res;
    },

    removeWithoutCopy : function(arr, item) {
        var i   = 0,
            len = arr.length;

            for (i; i < len; i++) {
                if (typeof arr[i] !== 'undefined' && arr[i] === item) {
                    arr.splice(i, 1);

                    i -= 1;
                }
            }

        return arr;
    },

    append : function(arr, item) {
        if (Array.isArray(arr) === true) {
            arr.push(item);
        }

        return arr;
    },

    truncate : function(arr) {
        if (Array.isArray(arr) === true) {
            arr.pop();
        }

        return arr;
    },

    prepend : function(arr, item) {
        if (Array.isArray(arr) === true) {
            arr.unshift(item);
        }

        return arr;
    },

    curtail : function(arr) {
        if (Array.isArray(arr) === true) {
            arr.shift();
        }

        return arr;
    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
