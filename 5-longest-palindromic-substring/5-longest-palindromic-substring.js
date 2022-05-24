/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxIndex = 0;
    let maxLength = 1;
    
    function searchFromMiddle (left, right) {
        let curLength;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            curLength = right - left + 1;
            if (curLength > maxLength) {
                maxIndex = left;
                maxLength = curLength;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 1; i < s.length; i++) {
        searchFromMiddle(i - 1, i );
        searchFromMiddle(i - 1, i + 1 )
    }
    return s.substr(maxIndex, maxLength);
};
