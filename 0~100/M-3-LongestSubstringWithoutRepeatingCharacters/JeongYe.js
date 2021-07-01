/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0; //시작 포인터
  let end = 0; //끝 포인터
  let map = {};
  let max = 0;

  if (!s.length) return 0;

  while (start !== s.length) {
    const c = s[end]; //end 인덱스의 문자를 가져온다.
    map[c] = (map[c] || 0) + 1; //map을 이용하여 문자의 개수를 세어 중복을 확인한다.

    //중복되는 문자열이 존재할 경우
    if (map[c] > 1 || end === s.length) {
      max = Math.max(max, end - start);
      start++;
      end = start;
      map = {};
    } else {
      end++;
    }
  }

  return max;
};

