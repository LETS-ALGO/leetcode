class Solution {
    static int[] dx = {0,0,1,-1};
    static int[] dy = {1,-1, 0,0};
    static int m,n;
    static int []d;
    public int longestIncreasingPath(int[][] matrix) {
        m = matrix.length;
        n = matrix[0].length;
        int max = 0;
        d = new int [m*n];
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                int num = i*n + j;
                max= Math.max(max,solve(matrix, num));
            }
        }
        return max;
    }

    public int solve(int [][]matrix, int num){
        int x = num/n;
        int y = num%n;
        Queue<Integer> q = new LinkedList<>();
        for(int i=0; i<4; i++){
            int nx = x+dx[i];
            int ny = y+dy[i];
            if(nx<0 || ny<0 || nx>=m || ny>=n) continue;
            if(matrix[nx][ny]<=matrix[x][y]) continue;
            q.add(nx*n+ny);
        }
        int max = 0;
        while(!q.isEmpty()){
            int poll = q.poll();
            int px = poll/n;
            int py = poll%n;
            if(d[poll]==0) d[poll] = solve(matrix, poll);
            max = Math.max(max,d[poll]);
        }
        return max+1;
    }

}