/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const numsLength = nums.length;
    const sortNums = nums.sort((a,b)=>a-b);
    const answer = [];
    
    for (let i=0; i<numsLength-3; i++) {
        if (i > 0 && sortNums[i-1] === sortNums[i]) continue
        
        for (let j=i+1; j<numsLength-2; j++) {
            if (j > i+1 && sortNums[j-1] === sortNums[j]) continue
            
            let left = j+1;
            let right = numsLength-1;
            
            while (left < right) {
                const sum = sortNums[i] + sortNums[j] + sortNums[left] + sortNums[right];
                
                
                if (sum < target) {
                    left++;    
                } else if (sum > target) {
                    right--;
                } else {
                    answer.push([sortNums[i], sortNums[j], sortNums[left], sortNums[right]]);
                    left++;
                    right--;
                    
                    while (sortNums[left] === sortNums[left - 1]) {
                       left++;
                    }
                    
                    while (sortNums[right] === sortNums[right + 1]) {
                        right--;
                    }
                }
            }
        }
    }
    
    return answer
};