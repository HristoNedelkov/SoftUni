const { assert } = require('chai');
const { StringBuilder } = require('../string-builder')

describe('string-builder', function () {
    it('should return the right text', () => {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        assert.equal(str.toString(), `User,woop hello, there`, 'it means that the class can not work with some methods');
    })
    it('should return the right text', () => {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        
        str.remove(6, 3);
       

        assert.equal( str.toString(),'User,w hello, there','can not work with the remove method')
    })
})

// str.remove(6, 3);
// console.log(str.toString());

