/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const N = matrix[0].length; //매트릭스 크기

  let left = matrix[0][0]; //시작 지점
  let right = matrix[N - 1][N - 1] + 1; //끝 지점

  while (left < right) {
    //시작 ~ 끝 숫자 중 중간 숫자를 구한다. 
    let mid = left + Math.floor((right - left) / 2);
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (matrix[i][j] <= mid) count++;
        else break;
      }
    }

    if (count < k) left = mid + 1; //우측을 탐색
    else right = mid; //좌측을 탐색
  }

  return left;
};