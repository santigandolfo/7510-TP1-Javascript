var InvalidQueryException = function () {
    this.name = "InvalidQueryException";
    this.stack = (new Error()).stack;
}
InvalidQueryException.prototype = Object.create(Error.prototype);
InvalidQueryException.prototype.constructor = InvalidQueryException;

module.exports = InvalidQueryException;