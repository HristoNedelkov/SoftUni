
const { assert, expect } = require('chai')
const charLookUp = require('../charLookUp')

describe('lookupChar',function() {
    it('should return udefined with non-string first param',function(){
        assert.equal(charLookUp(13,0),undefined,'did not return what  it should return..')
    })
    it('should return incorect index with neg index value',()=> {
        assert.equal(charLookUp('Peter',-1),'Incorrect index','did not return what  it should return..')
    })
    it('should return correct charecter',()=> {
        assert.equal(charLookUp('Peter',2),'t')
    })
});
