var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Database = require('../src/Database');
var Query = require('../src/Query');


describe("Database", function () {

    var db = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, maria).",
        "padre(roberto, alejandro).",
        "padre(roberto, cecilia).",
        "hijo(X, Y) :- varon(X), padre(Y, X).",
        "hija(X, Y) :- mujer(X), padre(Y, X)."
    ];

    var dbBadFact = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector, ).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, maria).",
        "padre(roberto, alejandro).",
        "padre(roberto, cecilia).",
        "hijo(X, Y) :- varon(X), padre(Y, X).",
        "hija(X, Y) :- mujer(X), padre(Y, X)."
    ];

    var dbBadRule = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, maria).",
        "padre(roberto, alejandro).",
        "padre(roberto, cecilia).",
        "hijo(X, Y) :- varon(X), padre(, Y, X).",
        "hija(X, Y) :- mujer(X), padre(Y, X)."
    ];

    var database = null;

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
        database = new Database();
    });

    afterEach(function () {
        // runs after each test in this block
    });

    describe('generateParsedDatabase', function () {

        it('db should be created with no problems', function () {
            database.generateParsedDatabase(db);
            assert(database.facts.length === 12);
            assert(database.rules.length === 2);
        });

        it('dbBadFact should return "Invalid Database"', function () {
            assert(database.generateParsedDatabase(dbBadFact) === "Invalid Database");
        });

        it('dbBadRule should return "Invalid Database"', function () {
            assert(database.generateParsedDatabase(dbBadRule) === "Invalid Database");
        });
    });

    describe('ruleFactsIncludeQuery', function () {

        it('Query "hijo(pepe, juan)" should be in the database', function () {
            database.generateParsedDatabase(db);
            var query = new Query("hijo(pepe, juan)" + ".");
            assert(database.queryElementsAreInDatabase(query));
        });

        it('Query "hijo(pepe, sergio)" should not be in the database', function () {
            database.generateParsedDatabase(db);
            var query = new Query("hijo(pepe, sergio)" + ".");
            assert(database.queryElementsAreInDatabase(query) === false);
        });
    });
});


