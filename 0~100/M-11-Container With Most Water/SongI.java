class Solution {
    public int maxArea(int[] height) {
        int s = 0;
        int e = height.length-1; // e = 8;
        int h = Math.min(height[s],height[e]); // 높이는 1
        int w = e-s; // 가로는 8-0=8

        int ret = h * w; // 넓이는 8
        int max = Math.max(height[s],height[e]); // 제일 긴 축을 찾는다
        // max = 7시작
        while(s!=e){
            if(max>height[s]){
                s++; // 현재max=7보다 작으므로 s++시킨다
            }
            else e--;
            max = Math.max(height[s], height[e]); // max 업뎃
            h = Math.min(height[s], height[e]); // h 업뎃
            w = e-s;
            ret = Math.max(ret, h*w); // 최대 면적 업뎃
        }
        return ret;
    }
}