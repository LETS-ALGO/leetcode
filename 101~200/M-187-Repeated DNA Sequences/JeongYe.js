/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set();
  const result = new Set();

  for (let i = 0; i < s.length; i++) {
    const seq = s.substr(i, 10); //i 인덱스부터 10길이 만큼 문자열을 자른다.
    if (seen.has(seq) && !result.has(seq)) result.add(seq); //이미 본 문자열인 경우
    else seen.add(seq);
  }

  return [...result]; //Set을 배열 형태로 리턴
};
