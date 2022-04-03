function longestPalindrome(s) {
  s = s.replace(" ","").replace(/[^A-Za-z0-9]/,"");

  let maxLength = 1;
  let start = 0;
  let end = 0;
  function searchPalindrome(left, right){
    let curLength = 0
    while((left >= 0) && (right <= s.length -1) && (s[left] === s[right])){
      curLength = right - left + 1;
      if( curLength > maxLength){
        maxLength = curLength;
        start = left;
        end = right;
      }
      left--;
      right++;
      }
    }

  for (let i = 0; i < s.length -1 ;  i++){
    searchPalindrome(i - 1, i + 1);
    searchPalindrome(i, i + 1);
  }
  return s.slice(start, end+1);
}

