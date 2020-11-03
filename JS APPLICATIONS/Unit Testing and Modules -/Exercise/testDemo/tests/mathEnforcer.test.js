const { assert, expect } = require('chai')
const {addFive,subtractTen,sum} = require('../mathEnforcer')

describe('Test the math Enforcer...',function() {
    describe('add Five tests HERE',() => {
        it('Should return zero',()=> {
            assert.equal(addFive(-5),0,'The function cannot work with negative int')
        })
        it('should return 10',()=> {
            assert.equal(addFive(5),10,'Cannot work with positive!')
        })
        it('should return undefined',() => {
            assert.equal(addFive('oesh'),undefined)
        })
    })

    describe('substractTen tests HERE',() => {
        it('Should return -15',()=> {
            assert.equal(subtractTen(-5),-15,'The function cannot work with negative int')
        })
        it('should return -5',()=> {
            assert.equal(subtractTen(5),-5,'Cannot work with positive!')
        })
        it('should return undefined',() => {
            assert.equal(subtractTen('oesh'),undefined)
        })
    })
    describe('sum func tests HERE',() => {
        it('Should return -5',()=> {
            assert.equal(sum(-5,0),-5,'The function cannot work with negative int')
        })
        it('should return 10',()=> {
            assert.equal(sum(5,5),10,'Cannot work with positive!')
        })
        it('should return undefined',() => {
            assert.equal(sum('oesh'),undefined)
        })
    })

})


