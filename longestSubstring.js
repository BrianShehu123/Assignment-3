function longestSubstring(str) {
    let i = new Set();
    let max = 0;
    let start = 0;

    if (str.length === 0) {
        return 0;
    }

    if (str.length === 1) {
        return 1;
    }

    for (let j = 0; j < str.length; j++) {

        while (i.has(str[j])) {
            i.delete(str[start]);
            start++;
        }
        i.add(str[j]);
        max = Math.max(max, j - start + 1);
    }

    return max;
    
}

module.exports = longestSubstring;