function isValid(s) {
  if (s.length % 2 === 1) return false;
  const arrBracket = s.split("");
  const stackBracket = [];
  const stackItems = {
    "(": 0,
    "{": 1,
    "[": 2,
  };
  const popItems = {
    ")": 0,
    "}": 1,
    "]": 2,
  };

  while (arrBracket[0]) {
    const item = arrBracket.shift();
    if (item === "(" || item === "{" || item === "[") {
      stackBracket.unshift(item);
    } else {
      if (popItems[`${item}`] !== stackItems[`${stackBracket[0]}`]) {
        return false;
      } else {
        stackBracket.shift();
      }
    }
  }
  if (!stackBracket[0]) {
    return true;
  } else {
    return false;
  }
}
