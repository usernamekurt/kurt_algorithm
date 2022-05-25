var plusOne = function(digits) {
  let res = new String();
  digits.forEach((digit) => {
      res = res + digit;
  });
  res = BigInt(res) + 1n;
  return String(res).split("");
};

console.log(plusOne([5,1,8,6,7,0,5,5,4,3]))