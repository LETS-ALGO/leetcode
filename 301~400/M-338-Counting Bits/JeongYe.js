/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [...new Array(n + 1)].map(
    (_, i) => Number(i).toString(2).replace(/0/g, "").length
  );

  return result;
};
