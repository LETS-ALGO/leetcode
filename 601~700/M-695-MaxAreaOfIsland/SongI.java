class Solution {
    static int[] dx ={0,0,1,-1};
    static int[] dy= {1,-1,0,0};
    static int n,m;
    static boolean[][] check;
    public int maxAreaOfIsland(int[][] grid) {
        n = grid.length;
        m = grid[0].length;
        check = new boolean[n][m];
        int max = 0;
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(grid[i][j]==1 && !check[i][j])
                    max = Math.max(max, bfs(i,j, grid));
            }
        }
        return max;
    }

    public int bfs(int sx, int sy, int[][] grid){
        Queue<Integer> q = new LinkedList<>();
        q.add(sx); q.add(sy);
        check[sx][sy]=true;
        int cnt = 0;
        while(!q.isEmpty()){
            int x = q.poll();
            int y = q.poll();
            cnt ++;
            for(int i=0; i<4; i++){
                int nx = x+dx[i];
                int ny = y+dy[i];
                if(nx<0 || ny<0 || nx>=n || ny>=m) continue;
                if(check[nx][ny]||grid[nx][ny]==0) continue;
                q.add(nx); q.add(ny);
                check[nx][ny] = true;
            }
        }
        System.out.println(cnt);
        return cnt;
    }
}