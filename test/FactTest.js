var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Fact = require('../src/Fact');
var Query = require('../src/Query');


describe("Fact", function () {

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

        it('"varon(hector)." type should be varon', function () {
            assert(new Fact("varon(hector).").getType() === "varon");
        });

        it('"padre(hector, maria)." type should be padre', function () {
            assert(new Fact("padre(hector, maria).").getType() === "padre");
        });

    });

    describe('isOfSameType', function () {

        it('Query "varon(hector)" is of same types as Fact "varon(marcelo)"', function () {
            var fact = new Fact("varon(hector).");
            var query = new Query("varon(hector).");
            assert(fact.isOfSameType(query));
        });

        it('Query "mujer(hector)" is not of same types as Fact "varon(hector)"', function () {
            var fact = new Fact("mujer(hector).");
            var query = new Query("varon(hector).");
            assert(fact.isOfSameType(query) === false);
        });

    });

    describe('getParameters', function () {

        it('"varon(hector)" parameters should be "hector""', function () {
            var fact = new Fact("varon(hector)");
            var parameters = ["hector"];
            for (var i = 0; i < parameters.length; i++) {
                assert(parameters.indexOf(fact.getParameters()[i]) === i);
            }
        });

        it('"padre(juan, pepe)" parameters should be "juan" and "pepe"', function () {
            var fact = new Fact("padre(juan, pepe)");
            var parameters = ["juan", "pepe"];
            for (var i = 0; i < parameters.length; i++) {
                assert(parameters.indexOf(fact.getParameters()[i]) === i);
            }
        });

    });
});


