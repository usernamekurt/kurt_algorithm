/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let minDp = [nums[0]];
    let maxDp = [nums[0]];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        maxDp[i] = Math.max (minDp[i-1] * num, maxDp[i-1] * num, num);
        minDp[i] = Math.min (minDp[i-1] * num, maxDp[i-1] * num, num);
        
        max = Math.max(maxDp[i], max)
    }
    return max;
};