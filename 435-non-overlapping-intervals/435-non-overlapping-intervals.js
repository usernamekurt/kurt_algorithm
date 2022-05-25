/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let count = 0;
    
    let intervalSorted = intervals.sort((a, b) => (a[0] - b[0]));
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            count++;
            end = Math.min(end, intervals[i][1]);
        } else {
            end = intervals[i][1];
        }
    }
    return count;
};