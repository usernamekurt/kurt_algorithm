function maxArea(height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let max = 0;

  while (leftIndex < rightIndex) {
    let currentHeight = Math.min(height[leftIndex], height[rightIndex]);
    let currentWidth = rightIndex - leftIndex;
    let currentArea = currentHeight * currentWidth;
    max = Math.max(currentArea, max);

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return max;
}
