/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const MAX = prices.length;
  let buy = Array.from({ length: MAX }, () => 0);
  let sell = Array.from({ length: MAX }, () => 0);

  //첫째날 주식 샀을 때 초기값
  buy[0] = -prices[0] - fee;

  for (let i = 1; i < MAX; i++) {
    //i일에 구매했을 때 최대 수익을 계산하려면,
    //전날 수익(buy[i-1])을 유지하거나 전날 판매 후 얻은 수익(sell[i-1])에서 오늘(i) 주식을 구입한 것 중 최대 값을 구한다.
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i] - fee);

    //i일에 판매했을 때 최대 수익을 계산하려면,
    //전날 수익(sell[i-1])을 유지하거나, 오늘(i) 주식을 판매한 것 중 최대 값을 구한다.
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }

  return sell[MAX - 1];
};
