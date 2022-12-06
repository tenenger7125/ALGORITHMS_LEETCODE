/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = nums.reduce((acc, cur) => {
        acc[cur] === undefined ? acc[cur] = 1 : acc[cur]++;
        return acc;
    }, {})
    
    const arr = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    return arr[0][0]
};