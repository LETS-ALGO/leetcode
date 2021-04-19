class Solution {
    public int minFallingPathSum(int[][] matrix) {
        int len = matrix.length;
        int [][]d = new int [len][len];

        for(int i=0; i<len; i++){
            d[0][i] = matrix[0][i];
        }

        for(int i=1; i<len; i++){
            for(int j=0; j<len; j++){
                if(j==0){
                    d[i][j] = Math.min(d[i-1][j], d[i-1][j+1]);
                }else if(j==len-1){
                    d[i][j] = Math.min(d[i-1][j], d[i-1][j-1]);
                }else {
                    d[i][j] = Math.min(d[i-1][j], Math.min(d[i-1][j-1], d[i-1][j+1]));
                }
                d[i][j] += matrix[i][j];
            }
        }

        int min = d[len-1][0];
        for(int i=0; i<len; i++){
            if(d[len-1][i]<min) min = d[len-1][i];
        }

        return min;
    }
}