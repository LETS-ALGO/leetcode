/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const SIZE = board.length;

  const rowObj = {}; //각 행의 숫자 목록
  const colObj = {}; //각 열의 숫자 목록
  const areas = new Array(SIZE); //각 수도쿠 박스의 숫자 목록

  //row에 num을 넣을 수 있는지 확인한다.
  function isValidRow(row, num) {
    if (!rowObj[row]) rowObj[row] = new Set();
    if (rowObj[row].has(num)) return false;

    rowObj[row].add(num);
    return true;
  }

  //col에 num을 넣을 수 있는지 확인한다.
  function isValidColumn(col, num) {
    if (!colObj[col]) colObj[col] = new Set();
    if (colObj[col].has(num)) return false;

    colObj[col].add(num);
    return true;
  }

  //row, col이 속한 수도쿠 박스의 인덱스를 구하고, num이 들어갈 수 있는지 확인한다.
  function isValidBox(row, col, num) {
    const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);

    if (!areas[index]) areas[index] = new Set();
    if (areas[index].has(num)) return false;

    areas[index].add(num);
    return true;
  }

  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const num = board[row][col];
      if (num === ".") continue; //빈 칸은 패스한다.

      //행,열,박스 기준으로 유효한 값인지 검사
      if (
        !isValidRow(row, num) ||
        !isValidColumn(col, num) ||
        !isValidBox(row, col, num)
      )
        return false;
    }
  }

  return true;
};
