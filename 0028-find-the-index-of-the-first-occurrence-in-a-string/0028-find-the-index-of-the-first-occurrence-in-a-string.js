/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const haystackLength = haystack.length;
    let start = 0;
    let end = needle.length;
    
    while (end <= haystackLength) {
        if (haystack.slice(start, end) === needle) return start;
        start++;
        end++;
    }
    
    return -1;
};