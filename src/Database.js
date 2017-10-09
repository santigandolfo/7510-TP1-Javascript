var Query = require("./Query");
var ParsedFactGenerator = require("./ParsedFactGenerator");
var ParsedRuleGenerator = require("./ParsedRuleGenerator");
var InvalidDatabaseException = require('../src/InvalidDatabaseException');

var Database = function () {

    this.facts = [];
    this.rules = [];
    var self = this;

    this.generateParsedDatabase = function (database) {
        console.log("Database: generateParsedDatabase");
        var parsedFactGenerator = new ParsedFactGenerator();
        var parsedRuleGenerator = new ParsedRuleGenerator();
        if (isInvalidDatabase(database)) {
            throw new InvalidDatabaseException();
        }
        for (var i = 0; i < database.length; i++) {
            if (parsedFactGenerator.isFact(database[i])) {
                this.facts.push(parsedFactGenerator.generateFact(database[i]))
            } else if (parsedRuleGenerator.isRule(database[i])) {
                this.rules.push(parsedRuleGenerator.generateRule(database[i]))
            }
        }
    };

    this.queryElementsAreInDatabase = function (query) {
        console.log("Database: queryElementsAreInDatabase");
        if (factTypesIncludesQuery(query)) {
            return factsIncludeQuery(query);
        } else if (ruleTypesIncludesQuery(query)) {
            return ruleFactsIncludeQuery(query);
        }
    };

    var isInvalidDatabase = function (database) {
        console.log("Database: isInvalidDatabase");
        for (var i = 0; i < database.length; i++) {
            var query = new Query(database[i]);
            if (query.isInvalidQuery()) {
                return true;
            }
        }
        return false;
    };

    var factTypesIncludesQuery = function (query) {
        console.log("Database: factTypesIncludesQuery");
        for (var i = 0; i < self.facts.length; i++) {
            if (self.facts[i].isOfSameType(query)) {
                return true;
            }
        }
        return false;
    };

    var factsIncludeQuery = function (query) {
        console.log("Database: factsIncludeQuery");
        for (var i = 0; i < self.facts.length; i++) {
            if (self.facts[i].getRawElement() === query.getRawElement()) {
                return true;
            }
        }
        return false;
    };

    var ruleTypesIncludesQuery = function (query) {
        console.log("Database: ruleTypesIncludesQuery");
        for (var i = 0; i < self.rules.length; i++) {
            if (self.rules[i].isOfSameType(query)) {
                return true;
            }
        }
        return false;
    };

    var findRuleWithSameType = function (query) {
        console.log("Database: findRuleWithSameType");
        for (var i = 0; i < self.rules.length; i++) {
            var rule = self.rules[i];
            if (rule.isOfSameType(query)) {
                return rule;
            }
        }
    };

    var ruleFactsIncludeQuery = function (query) {
        console.log("Database: ruleFactsIncludeQuery");
        var parsedFactGenerator = new ParsedFactGenerator();
        var rule = findRuleWithSameType(query);
        for (var i = 0; i < rule.getFacts().length; i++) {
            var queryFact = rule.getFacts()[i].getRawElement();
            for (var j = 0; j < rule.getParameters().length; j++) {
                var ruleParameter = rule.getParameters()[j];
                var queryParameter = query.getParameters()[j];
                queryFact = queryFact.replace(ruleParameter, queryParameter);
            }
            if (!factsIncludeQuery(parsedFactGenerator.generateFact(queryFact + "."))) {
                return false;
            }
        }
        return true;
    };
};

module.exports = Database;