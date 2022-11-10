/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// val에 해당되는 값을 nums 배열에서 제거한다.(원본 배열에 영향이 가도록 작업해야한다)
// nums 배열의 길이를 return 한다.

var removeElement = function(nums, val) {
    const numsLength = nums.length;
    
    for (let i=0; i<numsLength; i++) {
        if (nums[i] === val) nums.splice(i--, 1);
    }
    
    return nums.length
};