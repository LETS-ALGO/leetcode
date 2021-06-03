/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    const binary = decimalToBinary(i);
    result.push(countOnes(binary));
  }

  return result;
};

//10진수를 2진수로 변환한다.
function decimalToBinary(num) {
  let divider = num;
  let remainder = 0;
  let arr = [];

  if (num <= 1) return num + "";

  while (divider !== 1) {
    remainder = divider % 2;
    divider = Math.floor(divider / 2);
    arr.push(remainder);
  }

  arr.push(divider);

  return arr.reverse().join("");
}

// 문자열로된 이진수 안에 1을 카운팅한다. 
function countOnes(num) {
  let count = 0;
  Array.from(num).forEach((n) => n == 1 && count++);

  return count;
}
