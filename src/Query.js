var ParsedFactGenerator = require("./ParsedFactGenerator");
var ParsedRuleGenerator = require("./ParsedRuleGenerator");

var Query = function (rawQuery) {

    this.query = rawQuery;

    this.isInvalidQuery = function () {
        console.log("Query: isInvalidQuery");
        var parsedFactGenerator = new ParsedFactGenerator();
        var parsedRuleGenerator = new ParsedRuleGenerator();
        return (!parsedFactGenerator.isFact(this.query)) && (!parsedRuleGenerator.isRule(this.query));
    };

    this.getRawElement = function () {
        console.log("Query: getRawElement");
        return this.query;
    };

    this.getType = function () {
        console.log("Query: getType");
        return this.query.substring(0, this.query.indexOf("("));
    };

    this.getParameters = function () {
        console.log("Query: getParameters");
        return this.query.substring(this.query.indexOf("(") + 1, this.query.indexOf(")")).split(", ");
    };
};

module.exports = Query;