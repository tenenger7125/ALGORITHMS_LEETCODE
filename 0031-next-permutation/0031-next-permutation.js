/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const length = nums.length;
    // 오른쪽 끝에서부터 idx와 idx+1를 비교해서, nums[idx] < nums[idx+1]일때의 idx를 구한다.
    for (var idx=length-2; idx>=0; idx--) {
        if (nums[idx] < nums[idx+1]) break;
    }
    
    // 만약 구할 수 없었다면, 다음 permutation은 주어진 nums에 reverse()한 값이다.
    if (idx < 0) nums.reverse();
    else {
        // 다시 오른쪽 끝에서, 얻은 idx까지 nums[idx]보다 큰 숫자를 찾아내 idx 위치와 swap한다.
        for (let swapIdx=length-1; swapIdx>idx; swapIdx--) {
            if (nums[idx] < nums[swapIdx]) {
                swap(nums, idx, swapIdx);
                break;
            }
        }
        // idx 위치에서 뒤에 있는 배열을 모두 reverse() 한다. 또는 짝을 이루는 인덱스끼리 swap을 해도 된다.
        let left = idx+1;
        let right = length-1;
        while (left < right) {
            swap(nums, left++, right--);
        }
    }
};
    
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}