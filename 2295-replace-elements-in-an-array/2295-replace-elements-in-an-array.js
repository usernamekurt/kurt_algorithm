var arrayChange = function(nums, operations) {
    operations.forEach(v => {
        nums[nums.indexOf(v[0])] = v[1];
    })
    return nums;
};