class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        // 0.1.1.2
        int length = 1;
        int max = 1;
        for(int i=0; i<nums.length-1; i++){
            if(nums[i+1]-nums[i] == 1) length++;
            else if(nums[i+1]==nums[i]) continue;
            else {                
                length = 1;
            }
            if(max < length) max = length; 
        }
        return nums.length==0 ? 0: max;
    }
}
