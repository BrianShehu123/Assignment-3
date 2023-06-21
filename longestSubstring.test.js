const longestSubstring = require("./longestSubstring");

describe("Given a string str, find the length of the longest substring wihout repeating charcaters", () => {

    test('trying substring (abcabcbb) should return 3', () => {
        expect(longestSubstring("abcabcbb")).toBe(3);
    })

    test('trying substring (bbbbb) should return 1', () => {
        expect(longestSubstring("bbbbb")).toBe(1);
    })

    test('trying substring (pwwkew) should return 3', () => {
        expect(longestSubstring("pwwkew")).toBe(3);
    })

    test('trying substring (abslgnsjga) should return 10', () => {
        expect(longestSubstring("abslgnmjya")).toBe(9);
    })

});