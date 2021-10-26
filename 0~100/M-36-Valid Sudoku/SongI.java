class Solution {
    public boolean isValidSudoku(char[][] board) {
        boolean answer = true;
        for(int i=0; i<9; i++){
            HashSet<Integer> setX = new HashSet<>();
            for(int j=0; j<9; j++){
                if(board[i][j]=='.') continue;
                if(!setX.add(board[i][j]-'0')){
                    return false;
                }
            }
        }
        for(int j=0; j<9; j++){
            HashSet<Integer> setY = new HashSet<>();
            for(int i=0; i<9; i++){
                if(board[i][j]=='.') continue;
                if(!setY.add(board[i][j]-'0')){
                    return false;
                }
            }
        }

        for(int k=0 ; k<9; k++){
            HashSet<Integer> set = new HashSet<>();
            int x = k/3;
            int y = k - (x*3);
            x *= 3;
            y *= 3;
            for(int i=x; i<x+3; i++){
                for(int j=y; j<y+3; j++){
                    if(board[i][j] == '.') continue;
                    if(!set.add(board[i][j]-'0')) {
                        return false;
                    }
                }
            }
        }
        return answer;
    }
}