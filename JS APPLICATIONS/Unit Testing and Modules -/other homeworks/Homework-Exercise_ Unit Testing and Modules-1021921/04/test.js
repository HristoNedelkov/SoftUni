let assert = require('chai').assert
let { addFive, subtractTen, sum } = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct result with a non-number parameter', () => {
            assert.equal(undefined, addFive("cat"));
        });
        it('should return correct number', () => {
            assert.equal(10, addFive(5))
        });
        it('should return correct number with negativ parameter', () => {
            assert.equal(-1, addFive(-6))
        });
        it('should return correct floating-point numbers', () => {
            assert.closeTo(5.01, addFive(0.01), 0.01)
        });
    });
    describe('subtractTen', () => {
        it('should return correct result with a non-number parameter', () => {
            assert.equal(undefined, subtractTen("cat"))
        });
        it('should return correct number', () => {
            assert.equal(10, subtractTen(20))
        });
        it('should return correct numberwith negativ parameter', () => {
            assert.equal(-30, subtractTen(-20))
        });
        it('should return correct floating-point numbers', () => {
            assert.closeTo(10.01, subtractTen(20.01), 0.01)
        });

    })
    describe('sum', () => {
        it('should return correct result with a non-number first parameter', () => {
            assert.equal(undefined, sum("cat", 2))
        });
        it('should return correct result with a non-number second parameter', () => {
            assert.equal(undefined, sum(2, "cat"))
        });
        it('should return correct number', () => {
            assert.equal(20, sum(10, 10))
        });
        it('should return correct floating-point numbers first parameter', () => {
            assert.closeTo(20.01, sum(10.01,10), 0.01)
        });
        it('should return correct floating-point numbers second parameter', () => {
            assert.closeTo(20.01, sum(10,10.01), 0.01)
        });
        it('should return correct numberwith negativ first parameter', () => {
            assert.equal(-10, sum(-20,10))
        });
        it('should return correct numberwith negativ second parameter', () => {
            assert.equal(10, sum(20,-10))
        })
    })

})

