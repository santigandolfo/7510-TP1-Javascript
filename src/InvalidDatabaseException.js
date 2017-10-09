var InvalidDatabaseException = function () {
    this.name = "InvalidDatabaseException";
    this.stack = (new Error()).stack;
}
InvalidDatabaseException.prototype = Object.create(Error.prototype);
InvalidDatabaseException.prototype.constructor = InvalidDatabaseException;

module.exports = InvalidDatabaseException;