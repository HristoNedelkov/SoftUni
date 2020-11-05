let assert=require('chai').assert;
let {lookupChar} = require('./lookupChar.js');
describe('The function did not return the correct result!', () => {
    describe('undefined parameter', () => {
        it('first parameter test - number',()=>{
            assert.equal(undefined,lookupChar(11,0))
        })
        it('second parameter test - floating-point',()=>{
            assert.equal(undefined,lookupChar("cat","cat"));
            assert.equal(undefined,lookupChar("cat",3.14))
        })
        it('second parameter test - string',()=>{
            assert.equal(undefined,lookupChar("cat","cat"));
            
        });
    });
    describe("Incorrect index value", () => {
        it('negative index',()=>{
            assert.equal("Incorrect index",lookupChar("cat",-10))
        })
        it('incorrect index value',()=>{
            assert.equal("Incorrect index",lookupChar("cat",4));
        })
        it('incorrect index value - equal to string length',()=>{
            assert.equal("Incorrect index",lookupChar("cat",3));
            
        });
        

});
describe("correct parameters ", () => {
    it('correct parameters test 1',()=>{
        assert.equal("c",lookupChar("cat",0))
    })
    it('correct parameters test 2',()=>{
        assert.equal("a",lookupChar("cat",1));
    })
   
});
})
