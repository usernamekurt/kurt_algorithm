var firstUniqChar = function (s) {
  const m = new Map();

  for (let i = 0; i < s.length; i++) {
    m.has(s[i]) ? m.set(s[i], false) : m.set(s[i], i);
  }

  for (const index of m.values()) {
    if (index !== false) return index;
  }
  return -1;
};
