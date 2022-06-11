function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
}