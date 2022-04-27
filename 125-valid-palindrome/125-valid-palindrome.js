function isPalindrome(s) {
  str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (str.length <= 1) return true;
  for (let i = 0; i < parseInt(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}