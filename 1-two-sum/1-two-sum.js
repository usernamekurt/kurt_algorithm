function twoSum(arr, target) {
  let numsVisited = {};

  for (let i = 0; i < arr.length; i++) {
    const currentTarget = target - arr[i];
    if (numsVisited[currentTarget] !== undefined) {
      return [numsVisited[currentTarget], i];
    } else {
      numsVisited[arr[i]] = i;
    }
  }
}
