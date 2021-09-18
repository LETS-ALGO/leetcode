/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let answer = "";

  function expandFromCenter(start, end) {
    //start, end 인덱스에서 좌우로 멀어지면서 가장 긴 팰린드롬을 찾는다.
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }

    return s.slice(start + 1, end);
  }

  for (let i = 0; i < s.length; i++) {
    const oddStr = expandFromCenter(i, i); //홀수 길이 팰린드롬
    const evenStr = expandFromCenter(i, i + 1); //짝수 길이 팰린드롬

    const longerPalindrome = oddStr.length < evenStr.length ? evenStr : oddStr;

    //가장 긴 팰린드롬으로 갱신한다.
    if (answer.length < longerPalindrome.length) answer = longerPalindrome;
  }

  return answer;
};
