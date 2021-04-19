class Solution {
    public int[] dailyTemperatures(int[] T) {

        int []arr = new int [T.length];
        boolean last = false;
        for(int i=0; i<T.length-1; i++ ){
            int count = 0;

            for(int j=i+1; j<T.length; j++){
                if(T[i]<T[j]) {
                    count++;
                    break;
                }else count++;
                if(j==T.length-1)count = 0;
            }
            arr[i] = count;
        }

        return arr;
    }
}