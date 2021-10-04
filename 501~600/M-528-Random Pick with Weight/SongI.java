class Solution {

    private double[] arr;
    public Solution(int[] w) {

        double sum = 0;
        arr = new double[w.length];
        for(int weight: w){
            sum +=weight;
        }

        for(int i=0; i<w.length; i++){
            w[i] += (i==0) ? 0 : w[i-1];
            arr[i] = w[i]/sum;
        }
    }

    public int pickIndex() {
        return Math.abs(Arrays.binarySearch(arr, Math.random()))-1;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(w);
 * int param_1 = obj.pickIndex();
 */