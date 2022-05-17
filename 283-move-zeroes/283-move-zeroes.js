/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[pointer] === 0) {
            const num = nums.splice(pointer, 1);
            nums.push(num);
        } else {
            pointer ++;
        };
    };
};