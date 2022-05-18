var hasPathSum = function (root, sumTarget) {
  let res = false;

  function helper(node, currentSum) {
    if (!node || res) {
      return;
    }

    currentSum += node.val;

    if (!node.left && !node.right && currentSum === sumTarget) {
      res = true;
      return;
    }

    helper(node.left, currentSum);
    helper(node.right, currentSum);
  }
  
  helper(root, 0);
  return res;
};
