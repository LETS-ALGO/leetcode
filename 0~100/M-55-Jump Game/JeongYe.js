/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = nums[0]; //최대 도달 인덱스
  let move = nums[0]; //남은 이동횟수
  let currentPos = 1; //현재 위치

  if (nums.length === 1) return true;

  while (move) {
    maxReach = Math.max(maxReach, currentPos + nums[currentPos]);
    move--; //한 칸 이동할때 마다 이동 횟수 감소

    //마지막 인덱스에 도달 할 수 있는 경우
    if (currentPos >= nums.length - 1) return true;

    //더 이상 이동할 수 없다면 점프
    if (move === 0) {
      move = maxReach - currentPos; //이동 가능 수 갱신
    }
    currentPos++;
  }

  return false;
};
