class Solution {

    boolean result;
    public boolean canReach(int[] arr, int start) {

        boolean[] check = new boolean[arr.length];
        check[start] = true;

        result = arr[start] == 0;
        if(!result) solve(arr, start, check);

        return result;
    }

    public void solve(int []arr, int index, boolean[] check){

        if(arr[index] == 0){
            result = true;
            return ;
        }

        if(index+arr[index] < arr.length && !check[index+arr[index]]){
            check[index+arr[index]] = true;
            solve(arr, index+arr[index], check);
        }
        if(index-arr[index] >= 0 && index-arr[index] <arr.length && !check[index-arr[index]]){
            check[index-arr[index]] = true;
            solve(arr, index-arr[index], check);
        }

    }
}