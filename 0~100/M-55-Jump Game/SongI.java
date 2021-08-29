class Solution {
    public boolean canJump(int[] nums) {
        int len = nums.length;
        if(len==1) return true;
        if(nums[0]==0) return false;

        int[] d = new int[len];
        d[0] = nums[0];

        for(int i=0; i<nums.length; i++){
            // System.out.println(i+" ");
            if(i!=0 && d[i-1] >= i) {
                d[i] = Math.max(nums[i] + i, d[i-1]);
                // System.out.println((nums[i] + i)+" vs " +(d[i-1]-nums[i])+" "+d[i]);
            }
            if(d[i]>=len-1) return true;
            System.out.print(d[i] +" ");
        }

        return false;
    }
}