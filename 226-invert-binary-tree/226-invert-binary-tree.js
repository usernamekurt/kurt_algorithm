function invertTree(root) {
  let temp = root;

  helper(temp);
  function helper(node) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      return;
    }
    [node.left, node.right] = [node.right, node.left];

    helper(node.left);
    helper(node.right);
  }
  return root;
}
