const twoSum = require('./twoSum');

describe ('given an array of numbers and a target number, return indices of the two numbers such that they add up to the target', () => {

    test('given [2,7,11,15], 9, should return [0,1]', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([0,1]));
    })

    test('given [3,2,4], 6, should return [1,2]', () => {
        expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
    })

    test('given [3,3,10,2], 15, should return error', () => {
        expect(twoSum([3,3,10,2], 15)).toEqual("Error");
    })

})