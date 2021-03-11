import java.util.*;
class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] d = new int [nums.length];
        // d [i] i번째까지 만들 수 있는 가장 긴 수열

        d[0] = 1;
        for(int i=1; i<nums.length; i++){
            d[i] = 1;
            for(int j=0; j<i; j++){
                // 이전까지의 수가 증가하는 배열인지
                if(nums[i]>nums[j] && d[i] <= d[j]) d[i] = d[j]+1;
                else if (nums[i] == nums[j]) d[i] = d[j];
            }
        }
        int answer = d[0];
        for(int i=1; i<nums.length; i++) {
            answer = Math.max(d[i], answer);
        }
        return answer;
    }
}