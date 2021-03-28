/**
 * @param {number} n
 * @return {number}
 */
/**
 * dp[i] = i를 루트로 하는 BST의 개수 
 * 루트가 1 : dp[0] * dp[n-1] 
 * 루트가 2 : dp[1] * dp[n-2] 
 * 루트가 3 : dp[2] * dp[n-3] 
 * ... 
 * 루트가 n : dp[n-1] * d[0]
 */
 var numTrees = function(n) {
   
    let dp = Array(n+1).fill(0); 
    dp[0] = 1; 
    dp[1] = 1; 
    
    for(let i=2; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            dp[i] += dp[j-1] * dp[i-j]; 
        }
    } 
    
    return dp[n];
};