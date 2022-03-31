/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
const regex = /[^A-Za-z0-9]/g;
const newS = s.toLowerCase().replace(" ", "").replace(regex, "");

let before, after;
if (newS.length % 2 === 0) {
  before = (newS.length / 2) - 1;
  after = before + 1;
  while (before >= 0) {
    if (newS[before] !== newS[after]) {
      return false;
    }
    before--;
    after++;
  }
} else {
  before = Math.floor(newS.length / 2) - 1;
  after = before + 2;
  while (before >= 0) {
    if (newS[before] !== newS[after]) {
      return false;
    }
    before--;
    after++;
  }
}
return true;
};

console.log(isPalindrome("raceacar"))