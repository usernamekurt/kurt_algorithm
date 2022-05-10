function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  console.log(end)

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = end > intervals[i][1] ? end : intervals[i][1];
    } else {
      res.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  res.push([start, end]);

  return res;
}

