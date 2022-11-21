/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const numsLength = nums.length;
    const sortNums = nums.slice().sort((a, b) => a-b);
    const answer = [];
    
    if (numsLength < 3) return answer;
    
    for (let i=0; i<numsLength; i++) {
        if (i > 0 && sortNums[i] === sortNums[i-1]) continue
        let left = i+1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = sortNums[i] + sortNums[left] + sortNums[right];
            
            if (sum === 0) {
                answer.push([sortNums[i], sortNums[left], sortNums[right]]);
                while (sortNums[left] === sortNums[left + 1]) left++;
                while (sortNums[right] === sortNums[right + 1]) right++;
                left++;
                right++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;    
            } 
        }
    }
    
    return answer;
};