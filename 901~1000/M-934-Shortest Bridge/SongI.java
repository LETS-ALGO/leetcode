class Solution {
    public int shortestBridge(int[][] grid) {

        int n = grid.length;
        int answer = n*n;
        boolean[][] check = new boolean[n][n];
        boolean flag = false;
        // 1. 섬 하나를 2로 만든다
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++) {
                if(grid[i][j]==1){
                    bfs(i,j, check, grid);
                    flag = true;
                    break;
                }
            }
            if(flag) break;
        }

        // 2.0 인것들을 2로 바꾸면서 1과 만날때 최솟값을 구한다.
        Queue<Integer> q = new LinkedList<>();
        int [][]dis = new int[n][n];
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(grid[i][j] == 2){
                    for(int k=0; k<4; k++){
                        int x = i+dx[k];
                        int y = j+dy[k];
                        if(x<0 || y<0 || x>=n || y>=n) continue;
                        check[x][y] = true;
                        q.add(x);
                        q.add(y);
                        dis[x][y] = 1;
                    }
                }
            }
        }

        while (!q.isEmpty()) {
            int x = q.poll();
            int y = q.poll();

            for(int i=0; i<4; i++) {
                int nx = x+dx[i];
                int ny = y+dy[i];
                if(nx<0 || ny<0 || nx>=n || ny>=n) continue;
                if(grid[nx][ny]==1){
                    answer = Math.min(answer, dis[x][y]);

                }
                if(grid[nx][ny]==0 && dis[nx][ny]==0) {
                    dis[nx][ny] = dis[x][y]+1;
                    q.add(nx);
                    q.add(ny);
                }
            }
        }

        return answer;
    }

    int[] dx={0,1,-1,0};
    int[] dy={1,0,0,-1};
    public void bfs(int sx, int sy, boolean[][] check, int[][] grid){
        Queue<Integer> q = new LinkedList<>();
        q.add(sx);
        q.add(sy);
        check[sx][sy] = true;
        grid[sx][sy] = 2;
        int n = grid.length;
        while(!q.isEmpty()){
            int x= q.poll();
            int y= q.poll();

            for(int i=0; i<4; i++){
                int nx = x+dx[i];
                int ny = y+dy[i];
                if(nx<0 || ny<0 || nx>=n || ny>=n) continue;
                if(check[nx][ny] || grid[nx][ny] == 2
                        || grid[nx][ny] == 0) continue;

                q.add(nx);
                q.add(ny);
                check[nx][ny] = true;
                grid[nx][ny] = 2;
            }
        }
    }

}