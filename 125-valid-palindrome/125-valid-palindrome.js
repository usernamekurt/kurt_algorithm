var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/ +/g, "").replace(/[^A-Za-z0-9]/g,"");
    let start = 0;
    let end = str.length-1
    while(start<end){
      if(str[start] !== str[end]){
        return false
      }
      start ++
      end --
    }
    return true;
  };