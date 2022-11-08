/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const strsLength = strs.length
    const longStringLength = Math.max(...strs.map(str => str.length));
    const answer = [];
    
    for (let i=0; i<longStringLength; i++) {
        const set = new Set();
        
        for (let j=0; j<strsLength; j++) {
            set.add(strs[j][i]);
        }
        
        if (set.size !== 1) break;
        answer.push(...set);
    }
    
    return answer.join("")
};