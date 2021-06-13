/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let memo = Array(matrix.length).fill([]);

  //배열 초기화
  for (let i = 0; i < matrix.length; i++) {
    memo[i] = Array(matrix[i].length).fill(-1);
  }

  let depth = 0;
  //모든 셀에 대해서 증가하는 최대 길이 값을 탐색한다.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      depth = Math.max(depth, dfs(i, j, Number.MIN_SAFE_INTEGER, matrix, memo));
    }
  }

  return depth;
};

function dfs(x, y, prev, matrix, memo) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  if (
    x < 0 ||
    y < 0 ||
    x >= matrix.length ||
    y >= matrix[0].length ||
    matrix[x][y] <= prev
  )
    return 0;

  let maxPath = 0;
  if (memo[x][y] === -1) {
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      //현재 셀에서 상하좌우 이동했을 때 최대로 증가하는 경로 개수를 구한다.
      const maxForCell = 1 + dfs(nx, ny, matrix[x][y], matrix, memo);
      maxPath = Math.max(maxPath, maxForCell);
    }

    memo[x][y] = maxPath;
  }
  return memo[x][y];
}

