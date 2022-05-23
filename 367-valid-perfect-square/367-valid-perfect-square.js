/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true;
    
    let  i = 2;
    while(true){
        const iSquare = i**2
        if ( iSquare === num ) {
            return true;
        } else if ( num % iSquare === 0) {
            num === num / iSquare;
        } else if ( num < iSquare ){
            return false;
        }
        i++;
     }
};