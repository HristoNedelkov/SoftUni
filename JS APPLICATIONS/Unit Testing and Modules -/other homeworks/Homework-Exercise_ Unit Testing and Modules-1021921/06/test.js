let assert = require('chai').assert;
let StringBuilder = require('./string-builder');

describe('StringBuilder', () => {
    let sb;

    beforeEach(() => {
        sb = new StringBuilder
    })
    describe('verifyParms', () => {
        it('should trow exception when param is not a string', () => {
            assert.throw(() => {
                new StringBuilder({});
            }, 'Argument must be string')
        })
    })


    describe('constructor', () => {
        it('should work properly withouth argument', () => {
            assert.equal('', sb.toString())
        });
        it('should work properly with argument', () => {
            sb = new StringBuilder('cat')
            assert.equal('cat', sb.toString()) 
        })
    })
    describe('append', () => {
        it('should append text at the end of a string',()=> {
            sb.append('cat');
            assert.equal('cat', sb.toString());
        })
    })
    describe('prepend', () => {
        it('should append text at the start of a string',()=> {
            sb.prepend('cat');
            assert.equal('cat', sb.toString());
        })
    })
    describe('insertAt', () => {
        it('should insert text at index',()=> {
            sb.append('ca');
            sb.insertAt('t',2)
            assert.equal('cat', sb.toString());
        })
    })
    describe('remove', () => {
        it('should remove text at index',()=> {
            sb.append('cat');
            sb.remove(1,1)
            assert.equal('ct', sb.toString());
        })
    })
    describe('toString', () => {
        it('should return correct string',()=> {
            sb.append('cat');
           
            assert.equal('cat', sb.toString());
        })
    })
})
