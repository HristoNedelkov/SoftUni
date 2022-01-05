let assert = require('chai').assert;
let {isOddOrEven}=require('./isOddOrEven.js')
describe(`The function did not return the correct result!`, () =>{
    it('should return odd',()=> {
       assert.equal('odd',isOddOrEven('words'));
    })
    it('should return even',()=> {
        assert.equal('even',isOddOrEven('word'));
     })
     it('should return undefined with object parameter',()=> {
        assert.equal(undefined,isOddOrEven({}));
        
     })
     it('should return undefined with number parameter',()=> {
        assert.equal(undefined,isOddOrEven(5));
     })
     it('should return current values with multiple test',()=> {
        assert.equal('even',isOddOrEven('cats'));
        assert.equal('odd',isOddOrEven('cat'));
     })


})