/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let answer = 0;
    
    if (s.length <= 1) return s.length;
    
    for (let i=0; i<s.length; i++) {
        
        while (set.has(s[i])) {
            set.delete(s[left++]);
        }
        
        set.add(s[i]);
        answer = Math.max(answer, set.size)
    }
    
    return answer
};