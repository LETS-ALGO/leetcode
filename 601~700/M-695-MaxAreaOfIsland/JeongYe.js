/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        //섬을 이루는 영역중 가장 큰 값으로 갱신한다.
        max = Math.max(max, dfs(i, j, grid));
      }
    }
  }

  return max;
};

//섬의 영역 크기를 계산한다.
function dfs(x, y, grid) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || !grid[x][y])
    return 0;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let count = 1;
  grid[x][y] = 0; //방문 처리

  for (let dir of dirs) {
    count += dfs(x + dir[0], y + dir[1], grid);
  }

  return count;
}

