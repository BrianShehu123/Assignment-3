const containMostWater = require('./containMostWater');

describe("Given an array of non-negative integers representing the heights of vertical lines, find two lines that together with the x-axis forms a container that holds the most water", () => {
    test("containMostWater(str) => container that holds the most water", () => {
        expect(containMostWater([4, 3, 2, 1, 4])).toBe(16);
    })

    test("containMostWater(str) => container that holds the most water", () => {
        expect(containMostWater([1, 2, 1])).toBe(2);
    })
})