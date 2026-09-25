export function maxProfit(prices: number[]): number {
  let min = prices[0];
  let best = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    }

    const profit = prices[i] - min;

    if (best < profit) {
      best = profit;
    }
  }

  return best;
}

// console.log(maxProfit([3, 2, 6, 1, 4]));
