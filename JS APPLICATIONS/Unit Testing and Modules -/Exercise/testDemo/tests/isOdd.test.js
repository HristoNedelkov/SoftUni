let {assert} = require('chai')
const isOddOrNot = require('../isOddOrNot')
describe('Is odd Num', () => {
    it('should be odd', () => {
        let res = isOddOrNot('aza')
        assert.equal(res,'odd')  
    }) 
    it('should be even',function() {
        let res = isOddOrNot('az')
        assert.equal(res,'even')
    })
    it('should return udefined with a num parametur', () => {

        assert.equal(isOddOrNot(12),undefined)  
    }) 
    
})