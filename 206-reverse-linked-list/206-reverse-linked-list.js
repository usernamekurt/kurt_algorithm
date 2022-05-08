function reverseList(head) {
  if(head === null) return head;
    
  let before = null;
  let after = head.next;

  head.next = before;
  while (after) {
    before = head;
    head = after;
    after = after.next;
    head.next = before;
    
  }
  return head;
}
