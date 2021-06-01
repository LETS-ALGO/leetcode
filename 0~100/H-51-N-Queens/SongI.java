class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> qs = new ArrayList<>();
        for(int i=1; i<=n; i++){
            int[] arr = new int[10];
            arr[1] = i; // 1행에 i 열에 퀸을 놓는다/
            solve(qs,n,1, arr);
        }
        return qs;
    }
    // idx 행 탐색
    static public void solve(List<List<String>> qs, int n, int idx, int[] arr) {
        if (idx == n) {
            List<String> queen = new ArrayList<>();
            StringBuilder sb;
            for(int i=1; i<=n; i++){
                sb = new StringBuilder();
                for(int j=1; j<=n; j++){
                    if(arr[i]==j)sb.append("Q");
                    else sb.append(".");
                }
                queen.add(sb.toString());
            }

            qs.add(queen);
            return;
        }
        for (int i = 1; i <= n; i++) {
            arr[idx+1] = i;
            if(isPossible(idx+1, arr)) solve(qs, n, idx+1, arr);
            else arr[idx+1] = 0;
        }
        arr[idx] = 0;
    }

    public static boolean isPossible(int c, int[] arr) {
        for (int i = 1; i < c; i++) {
            if (arr[i] == arr[c]) return false; // 같은 열
            if (Math.abs(arr[i] - arr[c]) == Math.abs(i - c)) return false; // 대각선
        }
        return true;
    }
}