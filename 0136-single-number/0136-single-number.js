/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numObj = nums.reduce((acc, cur) => {
        if (acc[cur] === undefined) acc[cur] = 1;
        else acc[cur]++;
        
        return acc;
    }, {})

    return Object.entries(numObj).sort((a,b)=> a[1]-b[1])[0][0]
};