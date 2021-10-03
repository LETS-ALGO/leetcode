/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0; //무게의 합
    this.weightMap = new Map(); 
    
    for(let i=0; i<w.length; i++) {
        this.sum += w[i]; 
        this.weightMap.set(this.sum, i) // (i 인덱스까지 무게의 합, 현재 인덱스)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
    //0 ~ sum까지 랜덤한 숫자를 추출한다. 
    const randomIndex = parseInt(Math.random() * this.sum); 
    
    //weightMap의 key(무게의합)을 순회하면서 해당 무게의 인덱스를 반환한다.
    for(let key of this.weightMap.keys()) {
        if(randomIndex < key) return this.weightMap.get(key); 
    }
};



/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */