/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const n = nums.length;
    const answer = [];
    
    for (let i=0; i<n; i++) {
        const start = nums[i];
        let end;
        
        while (nums[i]+1 === nums[i+1] && i+1 < n) {
            i++;
        }
        end = nums[i];
        
        start === end ? answer.push(`${start}`) : answer.push(`${start}->${end}`);
    }
    
    return answer;
};