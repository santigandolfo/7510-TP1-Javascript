var ParsedFactGenerator = require("./ParsedFactGenerator");

var Rule = function (rawRule) {

    this.rule = rawRule;

    this.getType = function () {
        console.log("Rule: getType");
        return this.rule.substring(0, this.rule.indexOf("("));
    };

    this.isOfSameType = function (query) {
        console.log("Rule: isOfSameType");
        return this.getType() === query.getType();
    };

    this.getParameters = function () {
        console.log("Rule: getParameters");
        return this.rule.substring(this.rule.indexOf("(") + 1, this.rule.indexOf(")")).split(", ");
    };

    this.getFacts = function () {
        console.log("Rule: getFacts");
        var ruleFormat = /\w+\(([^)]+)\)/g;
        var match;
        var facts = [];
        var factsOfRule = this.rule.substring(this.rule.indexOf(":- ") + ":- ".length, this.rule.indexOf("."));
        while ((match = ruleFormat.exec(factsOfRule)) != null) {
            var parsedFactGenerator = new ParsedFactGenerator();
            var rawFact = match[0].substring(0, match[0].indexOf(")") + 1);
            facts.push(parsedFactGenerator.generateFact(rawFact));
        }
        return facts;
    };
};

module.exports = Rule;