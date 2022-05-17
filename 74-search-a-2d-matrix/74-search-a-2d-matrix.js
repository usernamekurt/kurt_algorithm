/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length - 1;
    const n = matrix[0].length - 1;
    let rowIndex = m;
    
    if ((target < matrix[0][0]) || (target > matrix[m][n])) return false;
    
    //target이 속한 행 찾기
    for (let row = 1; row <= m; row++) {
        if (target < matrix[row][0]) {
            rowIndex = row - 1;
            break;
        }; 
    };
    
    //행 안에서 같은 값이 있으면 true. 반복이 끝나도 없으면 false
    for (let col = 0; col <= n; col++) {
        if (matrix[rowIndex][col] === target) {
            return true;
        };
    };
    return false;
    
};