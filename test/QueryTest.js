var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Query = require('../src/Query');


describe("Query", function () {

    var interpreter = null;

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

    describe('isInvalidQuery', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)" should be a valid query', function () {
            query = new Query('hijo(X, Y) :- varon(X), padre(Y, X)' + ".");
            assert(query.isInvalidQuery() === false);
        });

        it('"hijo(X, Y) :- varon(X), mujer(Y), padre(Y, X)" should be a valid query', function () {
            query = new Query('hijo(X, Y) :- varon(X), mujer(Y), padre(Y, X)' + ".");
            assert(query.isInvalidQuery(4) === false);
        });

        it('"hijo(X, Y) varon(X), padre(Y, X)" should not be a valid query', function () {
            query = new Query('hijo(X, Y) varon(X), padre(Y, X)' + ".");
            assert(query.isInvalidQuery());
        });


        it('"varon(juan)" should be a valid query', function () {
            query = new Query('varon(juan)' + ".");
            assert(query.isInvalidQuery() === false);
        });

        it('"padre(juan, pepe)" should be a valid query', function () {
            query = new Query('padre(juan, pepe).' + ".");
            assert(query.isInvalidQuery() === false);
        });

        it('"padre(juan, )" should not be a valid query', function () {
            query = new Query('padre(juan, )' + ".");
            assert(query.isInvalidQuery());
        });


    });

    describe('getType', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)" type should be hijo', function () {
            query = new Query('hijo(X, Y) :- varon(X), padre(Y, X)' + ".");
            assert(query.getType() === "hijo");
        });

    });

    describe('getParameters', function () {

        it('"hijo(X, Y) :- varon(X), padre(Y, X)" parameters should be "X" and "Y"', function () {
            query = new Query('hijo(X, Y) :- varon(X), padre(Y, X)' + ".");
            var parameters = ["X", "Y"];
            for (var i = 0; i < parameters.length; i++) {
                assert(parameters.indexOf(query.getParameters()[i]) === i);
            }
        });

    });
});


