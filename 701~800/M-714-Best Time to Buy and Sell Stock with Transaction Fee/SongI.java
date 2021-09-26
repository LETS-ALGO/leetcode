class Solution {
    public int maxProfit(int[] prices, int fee) {
        int answer = 0;
        int prev = -prices[0];
        // 주식을 팔기전에 먼저 사야 하니까 첫번째 주식값을 산다고 가정한다.

        for(int i=1; i<prices.length; i++){
            answer = Math.max(answer, prev + prices[i] - fee);

            // 또 한번 거래가 이뤄지고, 현재 금액(answer)에서 prices[i] 주식을 샀을 때 경우 최대값인지 저장한다
            prev = Math.max(prev, answer - prices[i]);
        }

        return answer;
    }
}