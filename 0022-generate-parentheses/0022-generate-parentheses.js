/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];
    
    
    function dfs(str, leftCount, rightCount) {
        if (leftCount + rightCount === n * 2) answer.push(str);
        
        if (leftCount < n) dfs(str + '(', leftCount+1, rightCount);
        
        if (leftCount > rightCount) dfs(str + ')', leftCount, rightCount+1);
    }
    
    dfs('', 0, 0)
    
    return answer
    
};