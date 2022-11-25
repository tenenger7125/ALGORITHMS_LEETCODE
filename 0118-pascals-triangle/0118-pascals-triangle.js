/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const answer = [];
    let prevTemp = [];
    
    for (let i=1; i<=numRows; i++) {
        const temp = Array(i).fill(1);
        
        if (i > 2) {
            for (let j=1; j<i-1; j++) {
                temp[j] = prevTemp[j-1] + prevTemp[j]
            }
        }
            
        prevTemp = temp;
        answer.push(temp);
    }
    
    return answer;
};