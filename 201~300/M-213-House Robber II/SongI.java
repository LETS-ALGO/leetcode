class Solution {
    public int rob(int[] nums) {
        if(nums.length == 1) return nums[0];
        // 끝과 처음이 이어져 있기 때문에 나누어 생각한다.
        // 처음부터 length-1
        // 두번째 부터 length 까지
        return Math.max(solve(nums, 0, nums.length-1), solve(nums,1, nums.length));
    }
    public int solve(int[] nums, int start, int end){
        int include = 0, exclude = 0;

        for(int i=start; i<end; i++){
            int in = include;
            int ex = exclude;
            include = ex + nums[i];
            exclude = Math.max(in, ex);
        }
        return Math.max(include, exclude);
    }
}