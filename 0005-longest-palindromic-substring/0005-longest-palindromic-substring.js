/**
 * @param {string} s
 * @return {string}
 */

function makePalindrome(s, i, j) {
    while (0 <= i && j <= s.length) {
        if (s[i] !== s[j]) break;
        
        i--;
        j++;
    }
    
    return s.slice(i+1, j);
}
// 뒤에서 부터 접근하면 더 빠를듯?
var longestPalindrome = function(s) {
    let answer = '';
    
    for (let i=0; i<s.length; i++) {
        const case1 = makePalindrome(s, i, i);
        const case2 = makePalindrome(s, i, i+1);
        
        if (answer.length < case1.length) answer = case1;
        if (answer.length < case2.length) answer = case2;
    }
    
    return answer
};