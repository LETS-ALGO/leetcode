/* 
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let temp = [];
  let result = [];

  function sumHelper(sum, index) {
    //조합의 합이 target 과 같으면 결과 배열에 넣는다.
    if (sum === target) {
      result.push([...temp]);
      return;
    }

    //같은 숫자로 이루어진 중복 조합을 방지 하기 위해 마지막으로 선택한 인덱스에서 시작한다. 
    for (let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        temp.push(candidates[i]);
        sumHelper(sum + candidates[i], i);
        temp.pop();
      }
    }
  }

  sumHelper(0, 0);
  return result;
};
