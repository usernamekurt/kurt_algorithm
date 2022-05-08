function lowestCommonAncestor(root, p, q) {
  let temp = root;

  while (true) {
    if (temp.val < p.val && temp.val < q.val) {
      temp = temp.right;
    } else if (temp.val > p.val && temp.val > q.val) {
      temp = temp.left;
    } else {
      return temp;
    }
  }
}
