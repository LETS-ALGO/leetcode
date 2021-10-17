//단어 노드
const Node = function () {
  this.keys = new Map();
  this.isEnd = false; //단어의 마지막인지
};

Node.prototype.isEnd = function () {
  return this.isEnd;
};

Node.prototype.setEnd = function () {
  this.isEnd = true;
};

//Trie
const Trie = function () {
  this.root = new Node();
  this.lastNode = this.root; //가장 마지막에 삽입한 노드
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word.length) {
    this.lastNode.setEnd(); //단어의 마지막을 표시한다.
    this.setLastNode(this.root); //마지막 삽입 노드를 루트로 초기화
    return;
  }

  if (!this.lastNode.keys.has(word[0])) {
    this.lastNode.keys.set(word[0], new Node());
  }

  //마지막 삽입 노드가 현재 노드를 가리키도록 한다.
  this.lastNode = this.lastNode.keys.get(word[0]);

  //word의 첫문자를 제외한 나머지를 Trie에 넣는다.
  return this.insert(word.slice(1));
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  //word의 마지막 문자까지 Trie에서 탐색한다.
  while (word.length > 1) {
    //현재 word의 첫 문자로 시작하는 key가 없으면 리턴한다.
    if (!node.keys.has(word[0])) return false;

    //현재 문자와 이어진 다음 노드에서 탐색한다.
    node = node.keys.get(word[0]);
    word = word.slice(1);
  }

  //word에는 탐색하려는 단어의 가장 마지막 문자가 담겨있다.
  //word가 문자열의 마지막이면 Trie에 word가 존재한다.
  return node.keys.has(word) && node.keys.get(word).isEnd ? true : false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  while (prefix) {
    if (!node.keys.has(prefix[0])) return false;

    node = node.keys.get(prefix[0]);
    prefix = prefix.slice(1);
  }

  return true;
};

Trie.prototype.setLastNode = function (node) {
  this.lastNode = node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
