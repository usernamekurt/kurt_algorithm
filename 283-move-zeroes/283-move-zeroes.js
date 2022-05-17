var moveZeroes = function (nums) {
  const lenOrigin = nums.length;
  for (let i = 0; i < lenOrigin; i++) {
    const num = nums.shift();
    if (num !== 0) {
      nums.push(num);
    }
  }
  const zeroes = new Array(lenOrigin - nums.length).fill(0);
  nums.push(...zeroes);
  return nums;
};

