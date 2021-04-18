/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  function jump(index) {
    if (index < 0 || arr.length <= index || arr[index] === "visited")
      return false;

    if (arr[index] === 0) return true;

    const step = arr[index]; //다음 이동할 칸 수
    arr[index] = "visited"; //현재 인덱스 방문 처리

    return jump(index + step) || jump(index - step);
  }

  return jump(start);
};

//test
const arr = [3, 0, 2, 1, 2];
const start = 2;
console.log(canReach(arr, start));
