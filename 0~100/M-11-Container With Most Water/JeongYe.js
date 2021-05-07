/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let i = 0;
  let j = height.length - 1;
  let width = 0;
  while (i < j) {
    width = j - i;
    area = Math.max(area, width * Math.min(height[i], height[j]));
    height[i] <= height[j] ? i++ : j--;
  }

  return area;
};
