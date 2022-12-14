/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const n = candidates.length;
    const answer = [];
    
    function dfs(temp, sum, idx) {
        if (sum > target) return;
        else if (sum === target) answer.push(temp.slice());
        else {
            for (let i=idx; i<n; i++) {
                dfs([...temp, candidates[i]], sum + candidates[i], i)
            }
        }
    }
    dfs([], 0, 0)
    
    return answer;
};