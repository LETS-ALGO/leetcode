/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    //어제의 가격과 오늘의 가격을 비교한다.
    const [yesterdayPrice, todayPrice] = [prices[i - 1], prices[i]];

    //어제보다 오늘 가격이 더 크다면, 바로 팔아서 수익에 누적 시킨다.
    if (yesterdayPrice < todayPrice) {
      maxProfit += todayPrice - yesterdayPrice;
    }
  }
  return maxProfit;
};
