/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numsLength = nums.length;
    let j = 0;
    
    for (let i=0; i<numsLength; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    return j
};