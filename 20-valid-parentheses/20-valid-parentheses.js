function isValid(s) {
  if (s.length % 2 === 1) return false;

  const hashTable = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const parenthese = s[i];
    if (hashTable[parenthese]) {
      stack.push(parenthese);
    } else if (parenthese !== hashTable[stack.pop()] ) {
      return false
    }
  }
  if (stack.length > 0) return false;
  return true;
}