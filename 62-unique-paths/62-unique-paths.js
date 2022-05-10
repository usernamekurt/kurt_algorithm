function uniquePaths(m, n) {
  n = n - 1;

  let numerator = 1;
  let denominator = 1;
  

  for (let i = m + n - 1; i >= m; i--) {
    numerator *= i;
  }
  console.log(numerator)

  for (let i = n; i >= 1; i--) {
    denominator *= i;
  }
  
  return numerator / denominator;
}