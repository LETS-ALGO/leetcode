class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;
        for(int i=0; i<m; i++){
            if((matrix[i][0]<=target && matrix[i][n-1]>=target)){
                // System.out.print(matrix[i][0]+" "+i);
                for(int j=0; j<n; j++){
                    if(matrix[i][j] == target) return true;
                }
            }
        }
        for(int i=0; i<n; i++){
            if(matrix[0][i]<=target && matrix [m-1][i] >= target){
                for(int j=0; j<m; j++){
                    if(matrix[j][i] == target) return true;
                }
            }
        }
        return false;
    }
}