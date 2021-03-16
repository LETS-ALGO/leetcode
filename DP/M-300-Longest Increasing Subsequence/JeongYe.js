/**
 * O(n^2)
 */
function solution(nums) {
  const size = nums.length;
  let count = 0;
  let dp = new Array(size).fill(1);

  for (let i = 0; i < size; i++) {
    const end = nums[i];
    for (let j = 0; j < i; j++) {
      if (nums[j] < end) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    count = Math.max(count, dp[i]);
  }

  return count;
}
