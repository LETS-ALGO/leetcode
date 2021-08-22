/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const m = matrix.length; 
    const n = matrix[0].length; 
    
    //첫번째 행 끝 열 부터 시작한다. 
    let row = 0; 
    let col = n - 1;
    
    
    while(row < m && col >=0) {
        if(matrix[row][col] <target) row++; //행렬의 현재 값 보다 목표 값이 크면, 다음 행 이동
        else if(matrix[row][col] > target) col--; //행렬의 현재 값보다 작으면, 열을 하나 감소
        else return true;
    }
    
    return false;
    
};