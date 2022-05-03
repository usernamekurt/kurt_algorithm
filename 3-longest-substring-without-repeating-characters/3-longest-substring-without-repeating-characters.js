function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;
  const dp = new Array(s.length).fill(1);
  let max = 1;

  for (let i = 1; i < s.length; i++) {
    let currentChr = s[i];
    let prevIndex = i - 1;
    let checkContinuous = true;
    let startIndex;

    for (let j = prevIndex; j > prevIndex - dp[prevIndex]; j--) {
      if (currentChr === s[j]) {
        checkContinuous = false;
        startIndex = j + 1;
        break;
      }
    }

    if (checkContinuous) {
      dp[i] = dp[prevIndex] + 1;
      max = Math.max(dp[i], max);
    } else {
      dp[i] = i - startIndex + 1;
    }
  }

  return max;
}