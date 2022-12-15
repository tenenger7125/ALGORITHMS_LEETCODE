/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const answer = [];
    
    function dfs(temp, idx, sum) {
        if (sum === target) return answer.push(temp.slice());
        
        for(let i=idx; i<candidates.length; i++) {
            if (sum + candidates[i] > target) return;
            if (i > idx && candidates[i] === candidates[i-1]) continue;
            
            dfs([...temp, candidates[i]], i+1, sum + candidates[i]);
        }
    }
    candidates.sort((a,b)=>a-b)
    dfs([], 0, 0)
    
    return answer;
};