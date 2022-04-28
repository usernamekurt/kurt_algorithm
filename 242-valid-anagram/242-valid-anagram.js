function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let counter = {};

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]] === undefined) {
      counter[s[i]] = 0;
    }
    counter[s[i]] += 1;
  }
  console.log(counter)
  for (let i = 0; i < t.length; i++) {
    if (counter[t[i]] <= 0 || counter[t[i]] === undefined) return false;
    counter[t[i]] -= 1;
  }

  return true;
}
