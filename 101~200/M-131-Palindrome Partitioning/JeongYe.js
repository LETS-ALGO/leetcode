/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let visited = [];

  function backtrack(start, arr) {
    //base case
    if (s.length <= start) {
      result.push([...arr]);
      return;
    }

    //end를 start로 설정하여, 현재 인덱스부터 길이가 +1씩 증가하는 문자열을 잘라서 검사한다.
    for (let end = start; end < s.length; end++) {
      if (visited[end]) continue;
      visited[end] = true;

      const strSlice = s.slice(start, end + 1);

      //자른 문자열이 팰린드롬이면 배열에 자른 문자열을 넣고 탐색
      if (isPalindrome(strSlice)) {
        arr.push(s.slice(start, end + 1));
        backtrack(end + 1, arr);
        arr.pop();
      }

      visited[end] = false;
    }
  }

  backtrack(0, []);

  return result;
};

/**
 * 주어진 문자열이 팰린드롬인지 검사한다.
 */
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start++] !== str[end--]) return false;
  }

  return true;
}
