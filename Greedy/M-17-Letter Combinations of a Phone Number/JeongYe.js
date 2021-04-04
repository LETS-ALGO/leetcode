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

  const maxSize = digits.length;
  let index = 1;
  let combination = digitMap[digits.charAt(0)];
  if (digits.length === 1) return combination;

  //파라미터로 넘어온 배열에 현재 인덱스의 알파벳 목록과 1:1 매핑 한다.
  function recursion() {
    if (index === maxSize) return;

    const digit = digits.charAt(index);
    const letters = digitMap[digit];

    let temp = [];
    letters.forEach((letter) => {
      combination.forEach((prev) => {
        temp.push(prev + letter);
      });
    });

    index++;
    combination = temp;

    recursion();
  }

  recursion();
  return combination;
};

//test
const digits = "9";
//   const digits = "";
// const digits = "2";

console.log(letterCombinations(digits));
