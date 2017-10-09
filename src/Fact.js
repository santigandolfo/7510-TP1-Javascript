var Fact = function (rawFact) {

    this.fact = rawFact;

    this.getType = function () {
        console.log("Fact: getType");
        return this.fact.substring(0, this.fact.indexOf("("));
    };

    this.getRawElement = function () {
        console.log("Fact: getRawElement");
        return this.fact;
    };

    this.isOfSameType = function (query) {
        console.log("Fact: isOfSameType");
        return this.getType() === query.getType();
    };

    this.getParameters = function () {
        console.log("Fact: getParameters");
        return this.fact.substring(this.fact.indexOf("(") + 1, this.fact.indexOf(")")).split(", ");
    };
};

module.exports = Fact;