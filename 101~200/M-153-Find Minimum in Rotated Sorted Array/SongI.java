class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length-1;
        int answer = nums[left];
        while(nums[left]>nums[right]){
            answer = nums[right];
            right--;
        }
        return answer;
    }
}