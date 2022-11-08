/**
 * @param {string} s
 * @return {number}
 */

function isDuplicate(s) {
    const originCount = s.length;
    const checkCount = [...new Set(s.split(''))].length;
    
    return originCount !== checkCount;
}

var lengthOfLongestSubstring = function(s) {
    const sLength = s.length;
    let answer = 0;
    
    for (let i=0; i<sLength; i++) {
        let checkString = s[i];
        let temp = s[i]
        
        for (let j=i+1; j<sLength; j++) {
            const temp = checkString + s[j]; 
            
            if (isDuplicate(temp)) break;
            
            checkString = temp;
        }
        
        answer = Math.max(answer, checkString.length)
    }
    
    return answer
};