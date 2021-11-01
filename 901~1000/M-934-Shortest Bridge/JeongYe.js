/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  let minValue = 0;
  let queue = [];
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  /** 유효한 영역인지 검사 */
  function isValidArea(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return false;
    }
    return true;
  }

  function traverse(i, j) {
    if (!isValidArea(i, j) || grid[i][j] !== 1) return;

    queue.push([i, j]);
    grid[i][j] = "#"; //방문처리

    //현재 위치 기준으로 사분면을 탐색한다.
    for (dir of DIRECTIONS) {
      traverse(i + dir[0], j + dir[1]);
    }
  }

  let isBreak = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        traverse(i, j);
        isBreak = true;
      }
    }
    if (isBreak) break;
  }

  while (queue.length) {
    const SIZE = queue.length;
    for (let k = 0; k < SIZE; k++) {
      const [i, j] = queue.shift();

      for (let [x, y] of DIRECTIONS) {
        const nx = i + x;
        const ny = j + y;

        //영역을 벗어나거나, 이미 방문한 경우 패스
        if (!isValidArea(nx, ny) || grid[nx][ny] === "#") {
          continue;
        }

        //섬의 다른 끝을 만나면 최소 변경 값을 리턴한다.
        if (grid[nx][ny] === 1) return minValue;

        queue.push([nx, ny]);

        grid[nx][ny] = "#";
      }
    }
    minValue++;
  }
};
