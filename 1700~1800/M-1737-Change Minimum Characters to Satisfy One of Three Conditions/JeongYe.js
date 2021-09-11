/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
   return Math.min(Math.min(operation1(a,b), operation1(b,a)), operation2(a,b));
}; 


// a가 b보다 작게 만들기 위한 오퍼레이션 
function operation1(a,b) {
    let totalOperation = Number.MAX_VALUE; 
    
    for(let i=1; i<26; i++) {
        let count = 0; 
        
        Array.from(a).forEach(char => {
            if(char.charCodeAt(0) - 97 >= i) ++count; 
        }); 
        
        Array.from(b).forEach(char => {
            if(char.charCodeAt(0) - 97 < i) ++count; 
        }); 
        
        totalOperation = Math.min(totalOperation, count); 
    }
    
    return totalOperation; 
}

function operation2(a,b) {
    let charMap = {}; 
    

    Array.from(a).forEach((char) => charMap[char] = (charMap[char] || 0) + 1); 
    Array.from(b).forEach((char) => charMap[char] = (charMap[char] || 0) + 1); 
    
    //가장 큰 문자 빈도수를 구한다. 
    let count = 0; 
    for(let key in charMap) {
        count = Math.max(count, charMap[key]); 
    }
    
    return a.length + b.length - count; 
    
}