var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ParsedFactGenerator = require('../src/ParsedFactGenerator');


describe("ParsedFactGenerator", function () {


    var interpreter = null;

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
        parsedFactGenerator = new ParsedFactGenerator();
    });

    afterEach(function () {
        // runs after each test in this block
    });

    describe('isFact', function () {

        it('"varon(juan)." should be a valid fact', function () {
            assert(parsedFactGenerator.isFact('varon(juan).'));
        });

        it('"varon(juan)" should not be a valid fact', function () {
            assert(parsedFactGenerator.isFact('varon(juan)') === false);
        });

        it('"padre(juan, pepe)." should be a valid fact', function () {
            assert(parsedFactGenerator.isFact('padre(juan, pepe).'));
        });

        it('"padre(juan, pepe)" should not be a valid fact', function () {
            assert(parsedFactGenerator.isFact('padre(juan, pepe)') === false);
        });

        it('"padre(juan, )" should not be a valid fact', function () {
            assert(parsedFactGenerator.isFact('padre(juan, )') === false);
        });

    });
});


