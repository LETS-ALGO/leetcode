/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  // top 보다 크면 push 하고
  //top 보다 작으면 현재 보다 큰 아이템들 다 제거

  if (num.length === k) return "0";

  let stack = [];
  stack.push(num[0]);

  for (let i = 1; i < num.length; i++) {
    const top = stack[stack.length - 1];
    const current = num[i];

    //현재 숫자보다 top이 더 크면, top 이 현재 숫자보다 작아질때 까지 제거
    if (current < top) {
      while (stack[stack.length - 1] > current && k > 0) {
        k--;
        stack.pop();
      }
    } else {
      //스택의 가장 아래가 0이면 제거한다.
      //0으로 시작하는 문자열을 없애기 위함
      if (top === "0" && stack.length === 1) {
        while (stack[stack.length - 1] === "0") {
          stack.pop();
        }
      }
    }

    stack.push(current);
  }

  //k가 남아있을 경우 뒤에서 부터 k만큼 제거
  stack.splice(stack.length - k, k);

  return stack.length ? stack.join("") : "0";
};
