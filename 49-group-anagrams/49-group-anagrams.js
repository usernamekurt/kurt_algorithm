function groupAnagrams (strs) {
  const res = {};
  if (strs.length <= 1) return [strs];

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const strSorted = str.split("").sort().join();

    if (res[strSorted] === undefined) {
      res[strSorted] = [];
    }
    res[strSorted].push(str);
  }
  return Object.values(res);
}