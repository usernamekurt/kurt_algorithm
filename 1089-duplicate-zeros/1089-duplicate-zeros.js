/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0;
    while(i < arr.length){
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++
        }
        i++
    };
};