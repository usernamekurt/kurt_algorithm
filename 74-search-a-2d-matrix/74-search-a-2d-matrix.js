/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    if (row === 1 && col === 1) return matrix[row - 1][col - 1] === target; 
    
    let start = 0;
    let end = row * col - 1;
    
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        const m = parseInt(mid / col);
        const n = mid % col;
        
        if (matrix[m][n] === target) {
            return true;
        } else if (matrix[m][n] > target) {
            end = mid - 1;
        } else if (matrix[m][n] < target) {
            start = mid + 1;
        }
    }
    return false
};