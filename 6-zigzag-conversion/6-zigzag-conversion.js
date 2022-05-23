/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length < numRows) return s;
    const numPerCycle = 2 * numRows - 2;
    let res =''
    
    let sMapByRow = {};
    for (i = 0; i < numRows; i++) {
        sMapByRow[i] = [];
    }
    for (i = 0; i < s.length; i++) {
        const curChar= s[i];
        if (i % numPerCycle < numRows) {
            sMapByRow[i % numPerCycle].push(curChar);
        } else {
            let complement = i % numPerCycle;
            sMapByRow[(2 * (numRows - 1) - complement)].push(curChar);
        }
    }
    let sArr = Object.values(sMapByRow);
    sArr.forEach((v) => {
        res += v.join("")
    })
    
    return res;
};