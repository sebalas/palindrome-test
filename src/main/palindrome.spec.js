"use strict"

const palindrome = require('./palindrome');
const expect = require('chai').expect;

describe("Palindrome", () => {
    it("should return false on non-palindrome strigs", () => {
        expect(palindrome.isPalindrome("test")).to.be.false;
    });

    it("should return true on palindrome strigs", () => {
        expect(palindrome.isPalindrome("aba")).to.be.true;
    });
});