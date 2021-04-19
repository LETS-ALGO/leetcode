class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int result = 100000;
        int dp[102][102];
        for(int i=0;i<matrix[0].size();i++){
            dp[0][i]=matrix[0][i];
        }
        
        for(int i=1;i<matrix.size();i++){
            for(int j=0;j<matrix[i].size();j++){
                if(j==0){
                    dp[i][j]=min(dp[i-1][j],dp[i-1][j+1])+matrix[i][j];
                }else if(j==matrix.size()-1){
                    dp[i][j]=min(dp[i-1][j-1],dp[i-1][j])+matrix[i][j];
                }else{
                    dp[i][j]=min(min(dp[i-1][j-1],dp[i-1][j]),dp[i-1][j+1])+matrix[i][j];
                }
            }
        } 
          for(int i=0;i<dp[0].size();i++){
                if(result>dp[dp.size()-1][i]){
                    result=dp[dp.size()-1][i];
                }
            }
        return result;
    }
    
};