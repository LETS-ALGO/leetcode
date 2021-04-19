/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let N = matrix.length;
  //row[r][c] = 최소 누적 합
  for (let r = 1; r <= N; r++) {
    for (let c = 0; c < N; c++) {
      let nextDest = matrix[r - 1][c];

      //matrix[r-1][c] , matrix[r-1][c-1] , matrix[r-1][c+1] 의 최소 값을 찾는다.
      if (c > 0) nextDest = Math.min(nextDest, matrix[r - 1][c - 1]);

      if (c + 1 < N) nextDest = Math.min(nextDest, matrix[r - 1][c + 1]);

      if (r < N) matrix[r][c] += nextDest;
    }
  }

  //마지막 row 에 누적된 합이 저장되어있다. 이 중 최소 값을 찾아서 리턴한다.
  return Math.min(...matrix[N - 1]);
};
