/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
    const conversion = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left=0;
    let right=conversion.length-1;
    
    while (left < right) {
        if (conversion[left++] !== conversion[right--]) return false
    }
    
    return true
};