var Fact = require("./Fact");

var ParsedFactGenerator = function () {

    this.isFact = function (element) {
        console.log("ParsedFactGenerator: isFact");
        //var factFormat = /^\w+\((\w+, )*\w+\)/;
        var factFormat = /^[a-z]+\(([a-z]+, )*[a-z]+\)\./;
        return factFormat.test(element);
    };

    this.generateFact = function (rawFact) {
        console.log("ParsedFactGenerator: generateFact");
        return new Fact(rawFact);
    };
};

module.exports = ParsedFactGenerator;