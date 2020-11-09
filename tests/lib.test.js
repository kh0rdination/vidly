const lib = require('../lib');

describe('absolute', () => {
    it( 'should return a positive number if number is positive.', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it( 'should return a positive number if number is negative.', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it( 'should return 0 if number is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

}); 

describe('fizzbuzz', () => {
    it( 'should check that non-number inputs are invalid', () => {
        expect(() => { lib.fizzbuzz('a') }).toThrow();
    });

    it( 'should check that numbers divisible by 3 and 5 return fizzbuzz', () => {
        var result = lib.fizzbuzz(15)
        expect(result).toBe('fizzbuzz');
    });

    it( 'should check that numbers divisible by 3 return fizz', () => {
        var result = lib.fizzbuzz(3)
        expect(result).toBe('fizz');
    });

    if( 'should check that numbers divisible by 5 return buzz', () => {
        var result = lib.fizzbuzz(5)
        expect(result).toBe('buzz');
    });
    if( 'should check that numbers not divisible by 3 or 5 return number', () => {
        var result = lib.fizzbuzz(3)
        expect(result).toBe(3);
    });
});
