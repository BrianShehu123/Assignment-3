const reverseString = require('./reverseString');

describe('Given a string str, return the revers of the string ', () => {
    test("trying hello", () => {
        expect(reverseString('hello')).toBe('olleh');
    })

    test("trying hello world", () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    })

    test("trying potato", () => {
        expect(reverseString('tacocat')).toBe('tacocat');
    })

});