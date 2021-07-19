/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid = -1;

  //rotate가 되지 않은 상태는 항상 nums[0] < nums[end] 이다.
  if (nums[0] < nums[end] || nums.length === 1) return nums[0];

  while (start <= end) {
    mid = Math.ceil((start + end) / 2); //중간 인덱스

    //배열에서 값이 감소하는 구간을 찾는다.
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1]; //3 4 (5) 1 2
    if (nums[mid - 1] > nums[mid]) return nums[mid]; // 4 5 (1) 2 3

    //첫번째 요소 보다 중간 값이 크다면, 배열 우측을 탐색한다.
    if (nums[0] < nums[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return nums[0];
};
