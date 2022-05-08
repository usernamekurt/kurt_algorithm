function findPoisonedDuration(timeSeries, duration) {
  let startTime = timeSeries[0];
  let endTime = Infinity;
  let countPoisonedTime = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const currentTime = timeSeries[i];

    if (currentTime <= endTime) {
      endTime = currentTime + duration;
    } else {
      countPoisonedTime += endTime - startTime;
      startTime = currentTime;
      endTime = currentTime + duration;
    }
  }

  countPoisonedTime += endTime - startTime;

  return countPoisonedTime;
}