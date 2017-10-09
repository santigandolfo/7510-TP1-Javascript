var Query = require("./Query");
var Database = require("./Database");
var InvalidQueryException = require('../src/InvalidQueryException');

var Interpreter = function () {

    this.parsedDatabase = new Database();

    this.parseDB = function (database) {
        console.log("Interpreter: parseDB");
        this.parsedDatabase.generateParsedDatabase(database);
    };

    this.checkQuery = function (params) {
        console.log("Interpreter: checkQuery");
        var query = new Query(params + ".");
        if (query.isInvalidQuery()) {
            throw new InvalidQueryException();
        }
        return this.parsedDatabase.queryElementsAreInDatabase(query);
    };
};

module.exports = Interpreter;
