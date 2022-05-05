function lengthOfLongestSubstring(s) {
  const charsMap = {};
  let startIndex = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let endIndex = i;
    let endChar = s[i];

    if (charsMap[endChar] !== undefined && charsMap[endChar] >= startIndex) {
      startIndex = charsMap[endChar] + 1;
      console.log(startIndex);
    }
    charsMap[endChar] = endIndex;
    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
  }

  return maxLength;
}
