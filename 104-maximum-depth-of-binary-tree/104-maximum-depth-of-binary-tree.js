function maxDepth(root) {
  let max = 0;

  searchForDepth(root, 1);
  return max;

  function searchForDepth(node, depth) {
    if (!node) return;
    max = Math.max(max, depth);

    searchForDepth(node.left, depth + 1);
    searchForDepth(node.right, depth + 1);
  }
}
