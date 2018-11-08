let palindromeCheck = require('../palindrome').check;
let RangePalindromes = require('../palindrome').RangePalindromes;
const assert = require('assert');

describe('Palindrome', () => {
    describe('Check', () => {
        it('(empty) should return true', () => {
            assert.deepEqual(palindromeCheck(''), true);
        });
        it('(11211) should return true', () => {
            assert.deepEqual(palindromeCheck('11211'), true);
        });
        it('(232) should return true', () => {
            assert.deepEqual(palindromeCheck('232'), true);
        });
        it('(123) should return false', () => {
            assert.deepEqual(palindromeCheck('123'), false);
        });
    });
    describe('RangePalindromes', () => {
        let array;
        it('( 0 ) should return []', () => {
            array = [];
            assert.deepEqual(RangePalindromes(0, 0), array);
        });
        it('( 1 -> 10 ) should return equal array', () => {
            array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
            assert.deepEqual(RangePalindromes(1, 10), array);
        });
        it('( 500 -> 1000 ) should return equal array', () => {
            array = [
                505,515,525,535,545,555,565,575,585,
                595,606,616,626,636,646,656,666,676,
                686,696,707,717,727,737,747,757,767,
                777,787,797,808,818,828,838,848,858,
                868,878,888,898,909,919,929,939,949,
                959,969,979,989,999 ];
            assert.deepEqual(RangePalindromes(500, 1000), array);
        });
    });
});