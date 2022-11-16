/**
 * @param {number[]} height
 * @return {number}
 */

// solution keyword : two pointer;

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    let answer = 0;
    
    while (left < right) {
        area = Math.min(height[left], height[right]) * (right - left);
        answer = Math.max(answer, area);
        
        if (height[left] < height[right]) left++;
        else right--;
    }
    
    return answer;
};