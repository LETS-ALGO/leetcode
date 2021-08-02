class Solution {
    public int maxProfit(int[] prices) {
        // 거래가 일어나는 한 트랜잭션을 찾는다.
        int max = 0;
        for(int i=1; i<prices.length; i++){
            if(prices[i]>prices[i-1])
                max += prices[i] - prices[i-1];
        }
        return max;
    }
}