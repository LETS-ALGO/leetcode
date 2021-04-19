/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const item = this.cache.get(key);

  if (!item) return -1;

  this.cache.delete(key);
  this.cache.set(key, item);
  return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  //캐시에 동일한 key가 존재한다면 제거
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else {
    //캐시가 꽉 찼다면 가장 적게 사용된 key를 제거
    if (this.cache.size === this.capacity) {
      const firstKey = this.getFirst();
      this.cache.delete(firstKey);
    }
  }

  this.cache.set(key, value);
};

LRUCache.prototype.getFirst = function () {
  const [key] = this.cache.entries().next().value;
  return key;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//test
// const cache = new LRUCache(2);
// cache.put(1, 1);
// console.log(cache);
// cache.put(2, 2);
// console.log(cache);
// cache.get(1);
// console.log(cache);
// cache.put(3, 3);
// console.log(cache);
// cache.get(2);
// console.log(cache);
// cache.put(4, 4);
// console.log(cache);
// cache.get(1);
// console.log(cache);
// cache.get(3);
// console.log(cache);
// cache.get(4);
// console.log(cache);
