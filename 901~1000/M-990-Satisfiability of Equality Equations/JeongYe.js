var equationPossible = function (equations) {
  let parent = new Map();

  //부모노드를 찾는다.
  function findParent(a) {
    parent.set(a, parent.get(a) || a);
    return parent.get(a) === a ? a : findParent(parent.get(a));
  }
  
  //a==b
  equations.forEach(([a, start, , b]) => {
    //==이면 a와b 연결
    if (start === "=") {
      parent.set(findParent(a), findParent(b));
    }
  });

  for (let [a, start, , b] of equations) {
    //a!==b 인데 a와 b의 부모가 같다면 false
    if (start === "!") {
      if (findParent(a) === findParent(b)) return false;
    }
  }

  return true;
};
