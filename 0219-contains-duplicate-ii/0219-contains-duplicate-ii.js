/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    
    
    const result = nums.some((num, idx) => {
        const isHas = map.has(num);
        
        if (isHas && map.get(num).some(numIdx => Math.abs(numIdx - idx) <= k )) return true;
        
        isHas ? map.get(num).push(idx) : map.set(num, [idx]);
        return false;
    })
    
    return result
};