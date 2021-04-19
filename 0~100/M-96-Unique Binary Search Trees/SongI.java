class Solution {
    public int numTrees(int n) {
        int answer =0;
        int[] dp = new int [n+1];
        dp[0] = 1;
        dp[1] = 1;
        for(int i=2; i<=n; i++){
            int left = 0;
            int right = 0;
            for(int root=1; root<=i; root++){
                left = root-1;
                right = i-left-1;
                dp[i] += dp[left]*dp[right];
            }
        }
        return dp[n];
    }
}
