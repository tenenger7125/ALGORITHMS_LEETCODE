/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    
    const isDuplicate = nums.some(num => {
        if (set.has(num)) return true;
        
        set.add(num);
        return false;
    })
    
    return isDuplicate;
};