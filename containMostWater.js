function containMostWater(arr) {
    let maxWater = 0;
    let a1 = 0, a2 = arr.length - 1;

    while (a1 < a2) {
        maxWater = Math.max(maxWater, Math.min(arr[a1], arr[a2]) * (a2 - a1));
        if (arr[a1] <= arr[a2]) {
            a1++;
        } else {
            a2--;
        }
    
        return maxWater;
    }
};

module.exports = containMostWater;