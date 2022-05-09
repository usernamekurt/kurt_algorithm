function threeSum(nums) {
  nums.sort((a,b) => a - b);
  let output = [];

  for (let i = 0; i < nums.length -2 ; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        
        output.push([nums[i], nums[left], nums[right]]);
        
        left++
        
        while (nums[left] === nums[left - 1]) left++;
        
      } else if (nums[left] + nums[right] < target) {
        left++;
        while (nums[left] === nums[left - 1]) left++;
      } else {
        right--;
        while (nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return output;
}