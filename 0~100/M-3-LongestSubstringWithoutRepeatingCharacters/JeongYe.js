/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0; //부분 문자열 시작 인덱스
  let map = new Map();
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    //이미 확인한 문자라면 start 인덱스를 한칸 우측으로 옮긴다.
    if (map.has(s[i])) start = Math.max(start, map.get(s[i]) + 1);

    //문자열의 인덱스를 갱신한다.
    map.set(s[i], i);
    
    // i : 문자열 끝 인덱스 , start : 문자열 시작 인덱스
    max = Math.max(max, i - start  + 1);
  }

  return max;
};

