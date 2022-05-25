/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 1;
    while(true) {
        if (num > i**2) {
            i++;
        } else if (num === i**2) {
            return true;
        } else {
            return false;
        }
    }
}