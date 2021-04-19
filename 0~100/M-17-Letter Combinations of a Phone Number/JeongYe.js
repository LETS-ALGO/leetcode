/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];
  function backtrack(str, index) {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }

    //str을 고정 시키고 문자열을 이어 붙인다.
    for (let letter of digitMap[digits[index]]) {
      backtrack(str + letter, index + 1);
    }
  }

  backtrack("", 0);

  return result;
};
