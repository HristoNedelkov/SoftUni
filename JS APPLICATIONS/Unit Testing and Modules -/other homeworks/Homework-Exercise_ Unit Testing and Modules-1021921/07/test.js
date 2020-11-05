let assert = require('chai').assert;
const { describe } = require('mocha');
let PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
    let paymentPackage;

    describe('constructor', () => {

        it('constructor should work properly with 2 params', () => {
            paymentPackage = new PaymentPackage(`Cat`, 10);
            assert.equal('Cat', paymentPackage.name);
            assert.equal(10, paymentPackage.value)
        });
        it('should throw exception with incorrect name', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage(10, 10);
            }, 'Name must be a non-empty string')
        });
        it('should throw exception with incorrect name length 0', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('', 10);
            }, 'Name must be a non-empty string')
        });
        it('should throw exception with incorrect value', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('cat', 'cat');
            }, 'Value must be a non-negative number')
        });
        it('should throw exception with incorrect value - negative value', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('cat', -10);
            }, 'Value must be a non-negative number')
        });
        it('should throw exception with incorrect VAT value', () => {
            assert.throw(() => {
                paymentPackage.VAT = 'cat';
            }, 'VAT must be a non-negative number')
        });

        it('should throw exception with incorrect VAT value- negative value', () => {
            assert.throw(() => {

                paymentPackage.VAT = -1
            }, 'VAT must be a non-negative number')
        });
        it('should throw exception with incorrect active value - not boolean', () => {
            assert.throw(() => {
                paymentPackage.active = 5
            }, 'Active status must be a boolean');
            assert.throw(() => {
                paymentPackage.active = 'cat'
            }, 'Active status must be a boolean');
        });
    })
    describe('toString',()=>{
        it('should return correct result',()=>{
            paymentPackage = new PaymentPackage('cat', 10);
            let print = ['Package: cat','- Value (excl. VAT): 10','- Value (VAT 20%): 12']
            assert.equal(print.join('\n'),paymentPackage.toString())
        });
        it('should return correct result - (inactive)',()=>{
            paymentPackage = new PaymentPackage('cat', 10);
            paymentPackage.active=false;
            let print = ['Package: cat (inactive)','- Value (excl. VAT): 10','- Value (VAT 20%): 12']
            assert.equal(print.join('\n'),paymentPackage.toString())
        });
    })
})

