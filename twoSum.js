function twoSum(nums, target) {
    //creating a map
    let m = new Map();


    //if there is a number which adds up to the sum of the target, the number will be returned in the map and the current index
    //if not, then we will push that number onto the map
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];

        if (m.has(temp)) {
            return [m.get(temp), i];
        }

        m.set(nums[i], i);
    }
    //returning an error if the conditions have not been met
    return "Error"; 
}

module.exports = twoSum;