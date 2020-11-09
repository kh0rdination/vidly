
module.exports.absolute = function(number) {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
}

module.exports.fizzbuzz = function(input) {
    if (typeof input !== 'number')
        throw new Error('Input should be a number.');
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzbuzz';
    if (input % 3 === 0)
        return 'fizz';
    if (input % 5 === 0)
        return 'buzz';
}
