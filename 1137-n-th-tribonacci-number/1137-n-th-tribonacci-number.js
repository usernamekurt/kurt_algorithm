/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let dpTribonacci = [0, 1, 1];
    
    for (i = 3; i <= n; i++) {
        dpTribonacci[i] = dpTribonacci[i - 1] + dpTribonacci[i - 2] + dpTribonacci[i - 3];
    }
    return dpTribonacci[n]
};