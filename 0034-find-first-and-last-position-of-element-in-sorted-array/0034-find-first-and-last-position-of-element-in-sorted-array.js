/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let idx = 0;
    
    function binarySearch() {
        let left = 0;
        let right = nums.length-1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) return mid
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        
        return -1;
    }
    idx = binarySearch();
    
    let minIdx = idx;
    let maxIdx = idx;

    while (nums[minIdx - 1] === target) {
        minIdx--;
    }
    
    while (nums[maxIdx + 1] === target) {
        maxIdx++;
    }
    
    
    return idx === -1 ? [idx, idx] : [minIdx, maxIdx]
};