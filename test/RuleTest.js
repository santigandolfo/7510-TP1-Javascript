var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Fact = require('../src/Fact');
var Query = require('../src/Query');
var Rule = require('../src/Rule');


describe("Rule", function () {

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });

    describe('getType', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)." type should be hijo', function () {
            assert(new Rule("hijo(X, Y) :- varon(X), padre(Y, X).").getType() === "hijo");
        });

    });

    describe('isOfSameType', function () {

        it('Query "hijo(luis,carlos)" is of same types as Rule "hijo(X, Y) :- varon(X), padre(Y, X)."', function () {
            var rule = new Rule("hijo(X, Y) :- varon(X), padre(Y, X).");
            var query = new Query("hijo(luis,carlos).");
            assert(rule.isOfSameType(query));
        });

        it('Query "nieto(luis,carlos)" is not of same types as Rule "hijo(X, Y) :- varon(X), padre(Y, X)."', function () {
            var rule = new Rule("hijo(X, Y) :- varon(X), padre(Y, X).");
            var query = new Query("nieto(luis,carlos)");
            assert(rule.isOfSameType(query) === false);
        });

    });

    describe('getParameters', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)" parameters should be "X" and "Y"', function () {
            rule = new Rule("hijo(X, Y) :- varon(X), padre(Y, X).");
            var parameters = ["X", "Y"];
            for (var i = 0; i < parameters.length; i++) {
                assert(parameters.indexOf(rule.getParameters()[i]) === i);
            }
        });

    });

    describe('getFacts', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)" facts should be "varon(X)" and "padre(Y, X)"', function () {
            rule = new Rule("hijo(X, Y) :- varon(X), padre(Y, X).");
            var facts = ["varon(X)", "padre(Y, X)"];
            for (var i = 0; i < facts.length; i++) {
                assert(facts.indexOf(rule.getFacts()[i].getRawElement()) === i);
            }
        });

    });
});


