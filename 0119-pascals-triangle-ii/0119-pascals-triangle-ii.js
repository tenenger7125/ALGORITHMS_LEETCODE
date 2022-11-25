/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getPascalTriangle (rowNum) {
    const result = [];
    let prevTemp = [];
    
    for (let i=1; i<=rowNum; i++) {
        const temp = Array(i).fill(1);
        
        if (i > 2) {
            for (let j=1; j<i-1; j++) {
                temp[j] = prevTemp[j-1] + prevTemp[j];
            }
        }
        
        prevTemp = temp;
        result.push(temp);
    }
    
    return result;
}

var getRow = function(rowIndex) {
    return getPascalTriangle(rowIndex+1).pop();
};