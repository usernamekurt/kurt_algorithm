function climbStairs (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let dp = [1, 2]

  for (let i = 2; i < n ; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp.pop()
}