function isSameTree(p, q) {
  let outcome = true;

  search(p, q);
  return outcome;
  

  function search(p, q) {
    if (p === null && q === null) {
      return;
    } else if (p === null || q === null) {
      outcome = false;
      return;
    } else if (p.val !== q.val) {
      outcome = false;
      return;
    }
    search(p.left, q.left);
    search(p.right, q.right);
  }
}