function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      maxProfit = Math.max(currentPrice - minPrice, maxProfit);
    }
  }
  return maxProfit;
}
