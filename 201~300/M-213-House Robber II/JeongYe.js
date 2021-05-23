/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) return nums[0];

  const rob1 = robHelper(0, nums.length - 2, nums); // 첫번째 부터 끝에서 2번째 까지
  const rob2 = robHelper(1, nums.length - 1, nums); // 두번째 부터 끝까지

  // 두 경우의 수 중 최대 값을 반환
  return Math.max(rob1, rob2);
};

function robHelper(start, end, nums) {
  let dp = [];

  for (let i = start; i <= end; i++) {
    //이전 집을 털었다면, 현재 집을 털수 없으므로 dp[i-1]
    //전전 집을 털었다면, 현재 집을 털었을 때의 값을 더한다.
    dp[i] = Math.max(dp[i - 1] || 0, (dp[i - 2] || 0) + nums[i]);
  }

  return dp[end];
}
