/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const numsLength = nums.length;
    const sortNums = nums.slice().sort((a, b) => a - b);
    let closetSum = Number.MAX_SAFE_INTEGER;
    
    for (let i=0; i<numsLength-2; i++) {
        let left = i+1;
        let right = numsLength-1;
        
        while (left < right) {
            const sum = sortNums[i] + sortNums[left] + sortNums[right];
            const distance = Math.abs(target - sum);
            const recordDistance = Math.abs(target - closetSum);
            
            if (distance < recordDistance) closetSum = sum
            
            if (sum < target) left++;
            else right--;
        }
    }
    
    return closetSum
};