const longestConsecutive = (nums) => {
  let maxLength = 0;
  let set = new Set(nums);

  for (let num of nums) { 
    //연속 된 숫자의 시작점을 찾는다. 
    if (set.has(num - 1)) continue;
    let length = 1;
    while (set.has(num + length)) length++;
    maxLength = Math.max(length, maxLength);
  }

  return maxLength;
};

//test
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
