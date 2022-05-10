const canJump = (nums) => {
  let maxJumpToIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxJumpToIndex < i) return false;
    maxJumpToIndex = Math.max(maxJumpToIndex, i + nums[i]);
    if (maxJumpToIndex >= nums.length - 1) return true;
  }
}

console.log(canJump([2,3,1,1,4]))