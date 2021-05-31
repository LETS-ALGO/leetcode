/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = [];
  backtrack(result, n, [], 0);

  return result;
};

function backtrack(result, size, board = [], row = 0) {
  if (row === size) {
    result.push(
      board.map((c) => ".".repeat(c) + "Q" + ".".repeat(size - c - 1))
    );
    return;
  }

  for (let col = 0; col < size; col++) {
    if (isValid(board, row, col)) {
      board.push(col);
      backtrack(result, size, board, row + 1);
      board.pop();
    }
  }
}

//(row1,col1) 칸이 퀸을 둘 수 있는 자리인지 검사 
function isValid(board, row1, col1) {
  for (let row2 = 0; row2 < row1; row2++) {
    const col2 = board[row2];
    
    //같은 열 안됨 
    if (col1 === col2) {
      return false;
    }

    const colDistance = Math.abs(col1 - col2);
    const rowDistance = row1 - row2;
    
    //같은 대각선 
    if (colDistance === rowDistance) {
      return false;
    }
  }

  return true;
}
