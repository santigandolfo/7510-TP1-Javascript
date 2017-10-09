var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ParsedRuleGenerator = require('../src/ParsedRuleGenerator');


describe("ParsedRuleGenerator", function () {

    var interpreter = null;

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
        parsedRuleGenerator = new ParsedRuleGenerator();
    });

    afterEach(function () {
        // runs after each test in this block
    });


    describe('isRule', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)." should be a valid rule', function () {
            assert(parsedRuleGenerator.isRule('hijo(X, Y) :- varon(X), padre(Y, X).'));
        });

        it('"hijo(X, Y) :- varon(X), mujer(Y), padre(Y, X)." should be a valid rule', function () {
            assert(parsedRuleGenerator.isRule('hijo(X, Y) :- varon(X), mujer(Y), padre(Y, X).'));
        });

        it('"hijo(X, Y) :- varon(X), padre(Y, X)" should not be a valid rule', function () {
            assert(parsedRuleGenerator.isRule('hijo(X, Y) :- varon(X), padre(Y, X)') === false);
        });

        it('"hijo(X, Y) varon(X), padre(Y, X)." should not be a valid rule', function () {
            assert(parsedRuleGenerator.isRule('hijo(X, Y) varon(X), padre(Y, X).') === false);
        });

    });
});


