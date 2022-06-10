/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    let idxHashMap = {};
    for (i = 0; i < nums.length; i++) {
        idxHashMap[nums[i]] = i;
    }
    
    for (i = 0; i < operations.length; i++) {
        let index = idxHashMap[operations[i][0]];
        nums[index] = operations[i][1];
        idxHashMap[operations[i][1]] = index;
    }
    
    return nums;
};