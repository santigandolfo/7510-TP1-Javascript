var Rule = require("./Rule");

var ParsedRuleGenerator = function () {

    this.isRule = function (element) {
        console.log("ParsedRuleGenerator: isRule");
        //var ruleFormat = /^w+((w+, )*w+) :- ((w+((w+, )*w+)), )*(w+((w+, )*w+))/;
        var ruleFormat = /^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))\./;
        return ruleFormat.test(element);
    };

    this.generateRule = function (rawRule) {
        console.log("ParsedRuleGenerator: generateRule");
        return new Rule(rawRule);
    };

};

module.exports = ParsedRuleGenerator;