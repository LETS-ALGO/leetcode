/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  /**
   * @param {String} str 괄호 문자열
   * @param {Number} pos 문자열 위치
   * @param {Number} open { 여는 괄호 개수
   * @param {Number} close } 닫는 괄호 개수
   */
  function makeParenthesis(str, pos, open, close) {
    if (close === n) {
      result.push(str);
      return;
    }

    // } 닫는 괄호 추가
    if (close < open) makeParenthesis(str + ")", pos + 1, open, close + 1);

    //  { 여는 괄호 추가
    if (open < n) makeParenthesis(str + "(", pos + 1, open + 1, close);
  }

  makeParenthesis("", 0, 0, 0);
  return result;
};

const n = 3;
console.log(generateParenthesis(n));
