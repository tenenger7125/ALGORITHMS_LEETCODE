/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const numsLength = nums.length;
    const sortNums = nums.sort((a,b)=>a-b);
    const set = new Set();
    
    for (let i=0; i<numsLength-3; i++) {
        
        for (let j=i+1; j<numsLength-2; j++) {
            let left = j+1;
            let right = numsLength-1;
            
            while (left < right) {
                const sum = sortNums[i] + sortNums[j] + sortNums[left] + sortNums[right];
                
                if (sum < target) {
                    left++;
                    
                    while (sortNums[left] === sortNums[left - 1]) {
                       left++;
                    }
                } else if (sum > target) {
                    right--;
                    
                    while (sortNums[right] === sortNums[right + 1]) {
                        right--;
                    }
                } else {
                    set.add(JSON.stringify([sortNums[i], sortNums[j], sortNums[left], sortNums[right]]));
                    left++;
                }
            }
        }
    }
    
    return [...set].map(json => JSON.parse(json))
};