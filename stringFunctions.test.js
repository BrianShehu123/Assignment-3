const stringTest=require('./stringFunctions');

describe('Reverse string ccheck',()=>{
    
    test("Hello",()=>{
        expect(stringTest.reverseString("Hello")).toBe("olleH");
    })
    test('Reverse 123456789',()=>{
        expect(stringTest.reverseString("123456789")).toBe("987654321");
    })
});
describe('Palindrome Check',()=>{
    
    test('Palindrome Hello World',()=>{
        expect(stringTest.isPalindrome("Hello World")).toBe(false);
    })
    test('Palindrome ada',()=>{
        expect(stringTest.isPalindrome("dad")).toBe(true);
    })
    test('Palindrime racecar',()=>{
        expect(stringTest.isPalindrome("racecar")).toBe(true);
    })
});