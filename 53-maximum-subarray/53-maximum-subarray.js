function maxSubArray(nums) {
  let dp = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(dp[i], max);
  }
  return max;
}