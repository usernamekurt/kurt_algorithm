function findPoisonedDuration(timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  if (timeSeries.length === 1) return duration;

  let poisonedTime = 0;
  let start = timeSeries[0];
  let end = timeSeries[0] + duration;
  console.log(end);

  for (let i = 0; i < timeSeries.length; i++) {
    console.log(timeSeries[i]);
    if (timeSeries[i] <= end) {
      end = timeSeries[i] + duration;
    } else {
      console.log(start, end);
      poisonedTime += end - start;
      start = timeSeries[i];
      end = timeSeries[i] + duration;
    }

    if (i === timeSeries.length - 1) {
      poisonedTime += end - start;
    }
  }
  return poisonedTime;
}
