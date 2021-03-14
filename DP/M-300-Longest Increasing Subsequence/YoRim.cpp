class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int dp[2501]={0,};
        int leng=0;
        
        for(int i=0;i<nums.size();i++){
            if(dp[i]==0){
                int maxResult = 0;
                for(int j=0; j<i; j++){
                    if(nums[i] > nums[j]) maxResult = max(maxResult, dp[j]);
                }
                dp[i] = maxResult+1;
                leng = max(leng,dp[i]);
            }
        }
        return leng;
    }
};