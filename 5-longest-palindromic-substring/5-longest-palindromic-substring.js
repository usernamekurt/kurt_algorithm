function longestPalindrome(s) {
  let maxLen = 0;
  let maxLeft = 0;
  let maxRight = 0;
  
  for (let i = 0; i < s.length; i++) {
    searchSameChr(i, i);
    searchSameChr(i, i+1);
  }

  function searchSameChr (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLen = right - left + 1;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxLeft = left;
        maxRight = right;
      }
      left--;
      right++;
    }
  }

  return s.slice(maxLeft, maxRight+1)
}